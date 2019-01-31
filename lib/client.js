const axios = require('axios')
const utils = require('./utils');
const sdk = require('./config').sdk


function checkApiConfig(config) {
    utils.log('config verification...')
    if (config == undefined) throw 'missing config';
    if (config.base_url == undefined) throw 'missing base_url';
    utils.log('config ok.')
    return true;
}


function setAxiosConfig(config) {

    axios.defaults.baseURL = config.base_url;
    axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';

    if (sdk.trace) {

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
        }

        setPath(path) { this.path = path; return this; }
        setParams(params) { this.params = (params && params.isQueryFilter && (params.isQueryFilter() === true))? params.build() : params; return this; }
        setMethod(method) { this.method = method; return this; }
        setBody(body) { this.body = body; return this; }
        setHeaders(headers) { this.headers = headers; return this; }

    },


    ApiClient : class {

        constructor(config) {
            checkApiConfig(config);
            this.config = config;
            this.auth_attempts = 0;
            setAxiosConfig(config);
        }

        authenticate() {
            return axios
                .post('/oauth/token', {
                    grant_type: "client_credentials",
                    client_id: this.config.client_id,
                    scope: 'market:' + this.config.market_id
                })
                .then(response => {
                    return response.data.access_token;
                })
        }

        call(apiRequest) {

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

            let axiosConfig = {
                url: callUrl,
                method: method || 'get',
                timeout: this.config.timeout || 1000,
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json'
                }
            }

            // Merge custom and default headers
            utils.extendMap(axiosConfig.headers, apiRequest.headers);

            // Body
            if (apiRequest.body != undefined) axiosConfig.data = apiRequest.body;

            const max_attempts = 1;

            // If not authenticated execute authentication then re-execute call
            if (this.config.access_token == undefined) {
                utils.log('access_token null, authentication required');
                if (this.auth_attempts++ > max_attempts) throw 'Reached maximum number of authentications attempts: ' + max_attempts;
                return this.authenticate().then(access_token => {
                    this.config.access_token = access_token;
                    this.auth_attempts = 0;
                    utils.log('authentication successful');
                    return this.call(apiRequest);
                })
            }
            else {
                utils.log('executing api call ...');
                axiosConfig.headers.Authorization = 'Bearer ' + this.config.access_token;
                return axios.request(axiosConfig)
                    .then(response => {
                        utils.log('api call successful');
                        return response;
                    })
                    .catch(error => {
                        utils.log('error detected');
                        // Api erroneously return code 401 instead of code 403 for UNAUTHORIZED calls
                        const api_errors = error.response.data.errors;
                        if ((error.response.status === 401) &&
                            (api_errors && (api_errors[0].code == 'INVALID_TOKEN'))
                            ) {
                                utils.log('invalid token, access denied');
                                this.config.access_token = null;
                                return this.call(apiRequest);
                            }
                        else return Promise.reject(error)
                    })
                    // .finally(() => { utils.log('end of api call.'); })
            }
        }

    }

}