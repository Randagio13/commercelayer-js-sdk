const axios = require('axios')
const utils = require('./utils');
const config = require('./config')
const auth = require('./auth')

const sdk = config.sdk;



function setAxiosConfig(config) {

    axios.defaults.baseURL = config.base_url;
    axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';

    if (sdk.debug && sdk.trace) {

        axios.interceptors.request.use(request => {
            utils.log();
            utils.log('REQUEST -->');
            utils.log(request);
            return request
        });
        
        axios.interceptors.response.use(response => {
            utils.log();
            utils.log('<-- RESPONSE');
            utils.log(response.data);
            return response
        });

    }

}


module.exports = {

    newInstance : function(config) {
        return new this.ApiClient(config);
    },

    newRequest : function(path, method) {
        return new this.ApiRequest(path, method);
    },


    ApiRequest : class {

        constructor(path = '/', method = 'get') {
            this.path = path || '/';
            this.params = {};
            this.method = method || 'get';
            this.body = null;
            this.headers = {};
            // ---- ---- ---- ----
            this.attempt = 0;
            this.correlation_id = utils.guid();
            this.response_type = sdk.response_type;
            this.error_type = sdk.error_type;
        }

        setPath(path) { this.path = path; return this; }
        setParams(params) { this.params = (params && params.isQueryFilter && (params.isQueryFilter() === true))? params.build() : params; return this; }
        setMethod(method) { this.method = method; return this; }
        setBody(body) { this.body = body; return this; }
        setHeaders(headers) { this.headers = headers; return this; }

        newAttempt() { this.attempt++; return this; }

        // Request Options
        get raw_response() { return (this.responseType == 'raw'); }
        set raw_response(raw) { this.response_type = (raw && (raw === true))? 'raw' : 'normalized'; }
        responseType(type) { this.response_type = type? type : sdk.response_type; return this; }
        errorType(type) { this.error_type = type? type : sdk.error_type; return this; }

        // Only really available options are being setted
        setOptions(options) {
            if (options == undefined) return this;
            this.responseType(options.response_type);
            this.errorType(options.error_type);
            return this;
        }

    },


    ApiClient : class {

        constructor(cfg) {
            config.checkApiConfig(cfg);
            this.config = cfg;
            this.auth_attempts = 0;
            setAxiosConfig(cfg);
        }

        authenticate() {
           
            let authConfig = this.config.authentication;
            
            
            if (!authConfig || !authConfig.isAuthConfig || (authConfig.isAuthConfig() !== true)) {
                authConfig = new auth.ClientCredentials()
                    .clientId(this.config.client_id)
                    .marketScope(this.config.market_id)
                    .clientSecret(this.config.client_secret);
            }
            else {
                utils.log('using custom authentication config: ' + authConfig.grant_type);
                if (!authConfig.client_id && this.config.client_id) authConfig.clientId(this.config.client_id);
            }

            return auth.authenticate(authConfig).then(token => { return token.access_token; })

        }


        call(apiRequest) {

            function message(msg) {
                return (apiRequest.correlation_id? `[${apiRequest.correlation_id}.${apiRequest.attempt}] ` : '').concat(msg);
            }


            apiRequest.newAttempt();

            const base_path = ((this.config.base_path != undefined)? this.config.base_path : '');

            // Backward compatibility (to be removed)
            const path = base_path + apiRequest.path;
            const params = apiRequest.params;
            const method = apiRequest.method;

            // Build queryString
            let callUrl = path;
            if ((params != undefined) && (Object.keys(params).length > 0)) {
                var queryString = Object.keys(params).map(key => {
                    return key + '=' + params[key]
                }).join('&');
                callUrl = callUrl.concat('?').concat(queryString);
            }

            utils.log(message('path: ' + callUrl));

            let axiosConfig = {
                url: callUrl,
                method: method || 'get',
                timeout: sdk.timeout.request,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json'
                }
            }

            // Merge custom and default headers
            utils.extendMap(axiosConfig.headers, apiRequest.headers);

            // Body
            if (apiRequest.body != undefined) axiosConfig.data = apiRequest.body;

            const max_attempts = sdk.auth_attempts? sdk.auth_attempts : 1;

            
            // If not authenticated execute authentication then re-execute call
            if (this.config.access_token == undefined) {
                utils.log(message('access_token null, authentication required'));
                if (++this.auth_attempts > max_attempts) {
                    if (!sdk.timeout.retry) throw `Reached maximum number of authentication attempts (${max_attempts}) and no retry timeout configured`;
                    else
                    return utils.sleep(sdk.timeout.retry, message('another auth request is in progress'))
                        .then(() => { return this.call(apiRequest) });
                }
                else return this.authenticate().then(access_token => {
                    this.config.access_token = access_token;
                    this.auth_attempts = 0;
                    utils.log(message('authentication successful'));
                    return this.call(apiRequest);
                })
            }
            else {
                utils.log(message('executing api call ...'));
                axiosConfig.headers.Authorization = 'Bearer ' + this.config.access_token;
                return axios.request(axiosConfig)
                    .then(response => {
                        utils.log(message('api call successful'));
                        return response;
                    })
                    .catch(error => {
                        utils.log(message(error? error : 'error detected'));
                        if (error.code === 'ECONNABORTED') {
                            utils.log(message('timeout exception:' + error.config.timeout));
                            return Promise.reject(error);
                        }
                        else {
                            // Api erroneously return code 401 instead of code 403 for UNAUTHORIZED calls
                            if ((error.response.status === 401) &&
                                (error.response.data.errors && (error.response.data.errors[0].code == 'INVALID_TOKEN'))
                                ) {
                                    utils.log(message('invalid token, access denied'));
                                    this.config.access_token = null;
                                    return this.call(apiRequest);
                                }
                            else return Promise.reject(error)
                        }
                    })
            }
        }

    }

}