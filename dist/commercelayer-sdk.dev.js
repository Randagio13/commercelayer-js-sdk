var commercelayer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(/*! ./lib/clayer */ "./lib/clayer.js")

module.exports.model = __webpack_require__(/*! ./lib/model */ "./lib/model.js")

module.exports.query = __webpack_require__(/*! ./lib/query */ "./lib/query.js")

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const client = __webpack_require__(/*! ./client */ "./lib/client.js")
const utils = __webpack_require__(/*! ./utils */ "./lib/utils.js")
const jsonapi = __webpack_require__(/*! ./jsonapi */ "./lib/jsonapi.js")


 class CLApi {

    // Skus
    /**
     * 
     * @param {*} filter 
     */
    listSkus(filter, options) {
        return request(client.newRequest('/api/skus').setParams(filter).setOptions(options));
    }

    /**
     * 
     * @param {s} id 
     * @param {*} filter 
     */
    retrieveSku(id, filter, options) {
        return request(client.newRequest(`/api/skus/${id}`).setParams(filter).setOptions(options));
    }

    // Prices
    listPrices(filter, options) {
        return request(client.newRequest('/api/prices').setParams(filter).setOptions(options));
    }

    retrievePrice(id, filter, options) {
        return request(client.newRequest(`/api/prices/${id}`).setParams(filter).setOptions(options));
    }

    // Stock Items
    listStockItems(filter, options) {
        return request(client.newRequest('/api/stock_items').setParams(filter).setOptions(options));
    }

    retrieveStockItem(id, filter, options) {
        return request(client.newRequest(`/api/stock_items/${id}`).setParams(filter).setOptions(options));
    }

    // Delivery Lead Times
    listDeliveryLeadTimes(filter, options) {
        return request(client.newRequest('/api/delivery_lead_times').setParams(filter).setOptions(options));
    }

    retrieveDeliveryLeadTime(id, filter, options) {
        return request(client.newRequest(`/api/delivery_lead_times/${id}`).setParams(filter).setOptions(options));
    }

    // Shipping Methods
    listShippingMethods(filter) {
        return request(client.newRequest('/api/shipping_methods').setParams(filter));
    }

    retrieveShippingMethod(id, filter, options) {
        return request(client.newRequest(`/api/shipping_methods/${id}`).setParams(filter).setOptions(options));
    }

    // Payment Methods
    listPaymentMethods(filter, options) {
        return request(client.newRequest('/api/payment_methods').setParams(filter).setOptions(options));
    }

    retrievePaymentMethod(id, filter, options) {
        return request(client.newRequest(`/api/payment_methods/${id}`).setParams(filter).setOptions(options));
    }

    // Orders
    listOrders(filter, options) {
        return request(client.newRequest('/api/orders').setParams(filter).setOptions(options));
    }

    retrieveOrder(id, filter, options) {
        return request(client.newRequest(`/api/orders/${id}`).setParams(filter).setOptions(options));
    }

    createOrder(order) {
        return request(client.newRequest('/api/orders', 'post').setBody(order));
    }

    // Line Items
    listLineItems(filter, options) {
        return request(client.newRequest('/api/line_items').setParams(filter).setOptions(options));
    }

    retrieveLineItem(id, filter) {
        return request(client.newRequest(`/api/line_items/${id}`).setParams(filter).setOptions(options));
    }

    createLineItem(line_item) {
        return request(client.newRequest('/api/line_items', 'post').setBody(line_item));
    }

    updateLineItem(id, line_item) {
        return request(client.newRequest(`/api/line_items/${id}`, 'patch').setBody(line_item));
    }

    deleteLineItem(id) {
        return request(client.newRequest(`/api/line_items/${id}`, 'delete'));
    }

    // Customers
    createCustomer(customer) {
        return request(client.newRequest('/api/customers', 'post').setBody(customer));
    }

    // Customer Subscriptions
    createCustomerSubscription(customer_subscription) {
        return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription));
    }

}

var api = new CLApi();

module.exports.clapi = api;

module.exports.initialize = (cfg) => {
    utils.log('api client initialized with config:');
    utils.log(cfg);
    api.client =  client.newInstance(cfg);
}


function request(apiRequest) {

    utils.log(`[${apiRequest.correlation_id}.${apiRequest.attempt}] calling ${apiRequest.path} ...`);

    if (api.client == undefined) return Promise.reject(newError(undefined, 'api not initialized'));
    else {
        let body = jsonapi.serialize(apiRequest.body);
        apiRequest.setBody(body);
        return api.client.call(apiRequest)
            .then(response => { return apiRequest.raw_response? response.data : jsonapi.deserialize(response.data); })
            .catch(error => {
                if (!error.response) return error;
                else
                if (error.response.data && error.response.data.errors) {
                    const api_error = error.response.data.errors[0];
                    return Promise.reject(newError(api_error.status, api_error.title, api_error.detail, api_error.code))
                }
                else return Promise.reject(newError(error.response.status, error.response.statusText))
        })
    }
}


function newError(status, description, message, code) {
    return {
        error : true,
        status : status,
        description : description,
        message : message,
        code : code
    }
}


/***/ }),

/***/ "./lib/clayer.js":
/*!***********************!*\
  !*** ./lib/clayer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const api = __webpack_require__(/*! ./api */ "./lib/api.js")
const config = __webpack_require__(/*! ./config */ "./lib/config.js")
const utils = __webpack_require__(/*! ./utils */ "./lib/utils.js")

// Expose all api functions
module.exports = api.clapi;

module.exports.initialize = (cfg) => {
    if (cfg != undefined) cfg.default = false;
    api.initialize(utils.mergeMaps(config.clayer, cfg))
}

module.exports.lastAccessToken = () => {
    return api.clapi.client.config.access_token;
}

module.exports.settings = config.sdk;

module.exports.hey = () => { return 'Hello!' }


/***/ }),

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js")
const utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");
const sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk


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
            this.raw_response = sdk.raw_response;
        }

        setPath(path) { this.path = path; return this; }
        setParams(params) { this.params = (params && params.isQueryFilter && (params.isQueryFilter() === true))? params.build() : params; return this; }
        setMethod(method) { this.method = method; return this; }
        setBody(body) { this.body = body; return this; }
        setHeaders(headers) { this.headers = headers; return this; }

        newAttempt() { this.attempt++; return this; }

        // Request Options
        rawResponse(raw) { this.raw_response = raw? raw : sdk.raw_response; return this; }

        // Only really available options are being setted
        setOptions(options) {
            if (options == undefined) return;
            this.rawResponse(options.raw_response);
        }

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
                    if (!sdk.timeout.retry) throw `Reached maximum number of authentication attempts: ${max_attempts} and no retry timeout configured`;
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
                        utils.log(message('error detected: ' + error.code));
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
                    // .finally(() => { utils.log('end of api call.'); })
            }
        }

    }

}

/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = {

    clayer: {

        default : true,
  
        client_id : '351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534',
        market_id : '185',
        base_url : "https://static-commerce.commercelayer.io",
        base_path : null,
        country_code : 'US',
        language_code : 'en',

    },

    sdk: {
        debug           : false,    // debug mode activated
        console         : false,    // log to console enabled
        trace           : false,    // trace client input/output to console
        auth_attempts   : 1,        // number of attempts of authentication
        raw_response    : false,    // get response in JSON-Api format without deserialization
        timeout : { // in milliseconds
            retry : 200,    // retry after authentication request in progress detected
            request : 2000  // client request timeout
        }
    }

}


/***/ }),

/***/ "./lib/jsonapi.js":
/*!************************!*\
  !*** ./lib/jsonapi.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const normalize = __webpack_require__(/*! json-api-normalize */ "./node_modules/json-api-normalize/src/jsonApiNormalize.js")


module.exports.serialize = (body) => {
    if (body == undefined) return body;
    else return (body.data == undefined)? new JsonApiResource(body).serialize() : body;
}


module.exports.deserialize = (data) => {
    return normalize(data);
}


module.exports.normalize = (data) => {
    return normalize(data);
}


class JsonApiResource {

    constructor(resource = {}) {

        if (resource != undefined) {

            this.data = {};
            this.data.attributes = {};

            // TODO: portare id e type in testa ad ogni object
            Object.keys(resource).forEach((key) => {
                let field = resource[key];
                if (field != undefined) {
                    if (['id', 'type'].includes(key)) this.data[key] = field;
                    else
                    if (field.isApiResource && field.isApiResource()) {
                        if (this.data.relationships == undefined) this.data.relationships = {};
                        this.data.relationships[key.startsWith('__')? key.substr('__'.length) : key] = { data: { type: field.type, id: field.id } };
                    }
                    else this.data.attributes[key] = field;
                }
            });

        }
    }

    serialize() {
        return { data: this.data }
    }

}


/***/ }),

/***/ "./lib/model.js":
/*!**********************!*\
  !*** ./lib/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {


// Basic Abstract Resource
class Resource {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.reference = undefined;
        this.metadata = undefined;
        this.created_at = undefined;
        this.updated_at = undefined;
    }
    isApiResource() { return true; }
    setResource(field, res) { if ((res != undefined) && res.isApiResource && res.isApiResource()) this['__'.concat(field)] = res; }
    getResource(field) { return this['__'.concat(field)]; }
}


module.exports = {

    // Address resource
    Address : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'addresses');
            this.business = fields.business;
            this.first_name = fields.first_name;
            this.last_name = fields.last_name;
            this.company = fields.company;
            this.line_1 = fields.line_1;
            this.line_2 = fields.line_2;
            this.city = fields.city;
            this.zip_code = fields.zip_code;
            this.state_code = fields.state_code;
            this.country_code = fields.country_code;
            this.phone = fields.phone;
            this.email = fields.email;
            this.notes = fields.notes;
            this.lat = fields.lat;
            this.lng = fields.lng;
            this.billing_info = fields.billing_info;
        }
        // Relationships
        set geocoder(value) { super.setResource('geocoder', value) }
        get geocoder() { return super.getResource('geocoder') }
    },


    // CreditCard resource
    CreditCard : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'credit_cards');
            this.first_name = fields.first_name;
            this.last_name = fields.last_name;
            this.number = fields.number;
            this.month = fields.month;
            this.year = fields.year;
            this.verification_value = fields.verification_value;
        }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // Customer resource
    Customer : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customers');
            this.email = fields.email;
        }
        // Relationships
        set customer_group(value) { super.setResource('customer_group', value) }
        get customer_group() { return super.getResource('customer_group') }
    },


    // CustomerAddress resource
    CustomerAddress : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_addresses');
            this.name = fields.name;
        }
        // Relationships
        set customer(value) { super.setResource('customer', value) }
        get customer() { return super.getResource('customer') }
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // CustomerGroup resource
    CustomerGroup : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_groups');
        }
        // Relationships
        set price_list(value) { super.setResource('price_list', value) }
        get price_list() { return super.getResource('price_list') }
    },


    // CustomerPasswordReset resource
    CustomerPasswordReset : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_password_resets');
            this.customer_email = fields.customer_email;
        }
    },


    // CustomerPaymentSource
    CustomerPaymentSource : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_payment_sources');
        }
        // Relationships
        set customer(value) { super.setResource('customer', value) }
        get customer() { return super.getResource('customer') }
        set payment_source(value) { super.setResource('payment_source', value) }
        get payment_source() { return super.getResource('payment_source') }
    },


    // DeliveryLeadTime resource
    DeliveryLeadTime : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'delivery_lead_times');
            this.min_hours = fields.min_hours;
            this.max_hours = fields.max_hours;
        }
        // Relationships
        set stock_location(value) { super.setResource('stock_location', value) }
        get stock_location() { return super.getResource('stock_location') }
        set shipping_method(value) { super.setResource('shipping_method', value) }
        get shipping_method() { return super.getResource('shipping_method') }
    },


    // Import resource
    Import : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'imports');
            this.resource_type = fields.resource_type;
            this.parent_resource_id = fields.parent_resource_id;
            this.inputs = fields.inputs;
            this.cleanup_records = fields.cleanup_records;
        }
    },


    // InventoryModel resource
    InventoryModel : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'inventory_models');
            this.name = fields.name;
        }
    },
    

    // LineItem resource
    LineItem : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'line_items');
            this.sku_code = fields.sku_code;
            this.quantity = fields.quantity;
            this.update_quantity = fields._update_quantity;
            this.name = fields.name;
            this.image_url = fields.image_url;
            this.order = fields.order;
            this.item = fields.item;
        }
        set update_quantity(value) { this._update_quantity = value? '1' : null; }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // LineItemOption resource
    LineItemOption : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'line_item_options');
            this.name = fields.name;
            this.quantity = fields.quantity;
            this.options = fields.options;
        }
        // Relationships
        set line_item(value) { super.setResource('line_item', value) }
        get line_item() { return super.getResource('line_item') }
        set sku_option(value) { super.setResource('sku_option', value) }
        get sku_option() { return super.getResource('sku_option') }
    },


    // Market resource
    Market : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'markets');
            this.name = fields.name;
            this.facebook_pixel_id = fields.facebook_pixel_id;
        }
        // Relationships
        set merchant(value) { super.setResource('merchant', value) }
        get merchant() { return super.getResource('merchant') }
        set price_list(value) { super.setResource('price_list', value) }
        get price_list() { return super.getResource('price_list') }
        set inventory_model(value) { super.setResource('inventory_model', value) }
        get inventory_model() { return super.getResource('inventory_model') }
    },


    // Merchant resource
    Merchant : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'merchants');
            this.name = fields.name;
        }
        // Relationships
        set address(value) { super.setResource('address', value) }
        get address() { return super.getResource('address') }
    },


    // Order resource
    Order : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'orders');
            this.guest = fields.guest;
            this.customer_email = fields.customer_email;
            this.customer_password = fields.customer_password;
            this.language_code = fields.language_code;
            this.shipping_country_code_lock = fields.shipping_country_code_lock;
            this.coupon_code = fields.coupon_code;
            this.cart_url = fields.cart_url;
            this.return_url = fields.return_url;
            this.terms_url = fields.terms_url;
            this.privacy_url = fields.privacy_url;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
        set customer(value) { super.setResource('customer', value) }
        get customer() { return super.getResource('customer') }
        set shipping_address(value) { super.setResource('shipping_address', value) }
        get shipping_address() { return super.getResource('shipping_address') }
        set billing_address(value) { super.setResource('billing_address', value) }
        get billing_address() { return super.getResource('billing_address') }
        set payment_method(value) { super.setResource('payment_method', value) }
        get payment_method() { return super.getResource('payment_method') }
        set payment_source(value) { super.setResource('payment_source', value) }
        get payment_source() { return super.getResource('payment_source') }
    },


    // Parcel resource
    Parcel : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'parcels');
            this.weight = fields.weight;
            this.unit_of_weight = fields.unit_of_weight;
            this.eel_pfc = fields.eel_pfc;
            this.contents_type = fields.contents_type;
            this.contents_explanation = fields.contents_explanation;
            this.customs_certify = fields.customs_certify;
            this.customs_signer = fields.customs_signer;
            this.non_delivery_option = fields.non_delivery_option;
            this.restriction_type = fields.restriction_type;
            this.restriction_comments = fields.restriction_comments;
            this.customs_info_required = fields.customs_info_required;
        }
        // Relationships
        set shipment(value) { super.setResource('shipment', value) }
        get shipment() { return super.getResource('shipment') }
    },


    // PaymentMethod resource
    PaymentMethod : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'payment_methods');
            this.payment_source_type = fields.payment_source_type;
            this.price_amount_cents = fields.price_amount_cents;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
        set payment_gateway(value) { super.setResource('payment_gateway', value) }
        get payment_gateway() { return super.getResource('payment_gateway') }
    },


    // PaypalPayment resource
    PaypalPayment : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'paypal_payments');
            this.return_url = fields.return_url;
            this.cancel_url = fields.cancel_url;
            this.note_to_payer = fields.note_to_payer;
        }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // Price resource
    Price : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'prices');
            this.sku_code = fields.sku_code;
            this.amount_cents = fields.amount_cents;
            this.compare_at_amount_cents = fields.compare_at_amount_cents;
        }
        // Relationships
        set price_list(value) { super.setResource('price_list', value) }
        get price_list() { return super.getResource('price_list') }
        set sku(value) { super.setResource('sku', value) }
        get sku() { return super.getResource('sku') }
    },


    // PriceList resource
    PriceList : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'price_lists');
            this.name = fields.name;
            this.currency_code = fields.currency_code;
            this.tax_included = fields.tax_included;
        }
    },


    // Shipment resource
    Shipment : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipments');
        }
    },


    // ShippingCategory resource
    ShippingCategory : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipping_categories');
            this.name = fields.name;
        }
    },


    // ShippingMethod resource
    ShippingMethod : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipping_methods');
            this.name = fields.name;
            this.price_amount_cents = fields.price_amount_cents;
            this.free_over_amount_cents = fields.free_over_amount_cents;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
        set shipping_zone(value) { super.setResource('shipping_zone', value) }
        get shipping_zone() { return super.getResource('shipping_zone') }
        set shipping_category(value) { super.setResource('shipping_category', value) }
        get shipping_category() { return super.getResource('shipping_category') }
    },


    // ShippingZone resource
    ShippingZone : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipping_zones');
            this.name = fields.name;
            this.country_code_regex = fields.country_code_regex;
            this.not_country_code_regex = fields.not_country_code_regex;
            this.state_code_regex = fields.state_code_regex;
            this.not_state_code_regex = fields.not_state_code_regex;
            this.zip_code_regex = fields.zip_code_regex;
            this.not_zip_code_regex = fields.not_zip_code_regex;
        }
    },


    // Sku resource
    Sku : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'skus');
            this.code = fields.code;
            this.name = fields.name;
            this.description = fields.description;
            this.image_url = fields.image_url;
            this.tag_names = fields.tag_names;
            this.pieces_per_pack = fields.pieces_per_pack;
            this.weight = fields.weight;
            this.unit_of_weight = fields.unit_of_weight;
        }
         // Relationships
        set shipping_category(value) { super.setResource('shipping_category', value) }
        get shipping_category() { return super.getResource('shipping_category') }
    },


    // SkuOption resource
    SkuOption : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'sku_options');
            this.name = fields.name;
            this.price_amount_cents = fields.price_amount_cents;
            this.delay_hours = fields.delay_hours;
            this.sku_code_regex = fields.sku_code_regex;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
    },


    // StockItem resource
    StockItem : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'stock_items');
            this.sku_code = fields.sku_code;
            this.quantity = fields.quantity;
        }
        // Relationships
        set stock_location(value) { super.setResource('stock_location', value) }
        get stock_location() { return super.getResource('stock_location') }
        set sku(value) { super.setResource('sku', value) }
        get sku() { return super.getResource('sku') }
    },


    // StockLevel resource
    StockLevel : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'stock_levels');
            this.priority = fields.priority;
            this.on_hold = fields.on_hold;
        }
        // Relationships
        set stock_location(value) { super.setResource('stock_location', value) }
        get stock_location() { return super.getResource('stock_location') }
        set inventory_model(value) { super.setResource('inventory_model', value) }
        get inventory_model() { return super.getResource('inventory_model') }
    },


    // StockLocation resource
    StockLocation : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'stock_locations');
            this.name = fields.name;
            this.label_format = fields.label_format;
        }
        // Relationships
        set address(value) { super.setResource('address', value) }
        get address() { return super.getResource('address') }
    },


    // Webhook resource
    Webhook : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'webhooks');
            this.topic = fields.topic;
            this.callback_url = fields.callback_url;
            this.include_resources = fields.include_resources;
        }
    },


    // WireTransfer resource
    WireTransfer : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'wire_transfers');
        }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    }

}

/***/ }),

/***/ "./lib/query.js":
/*!**********************!*\
  !*** ./lib/query.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {


class QueryFilter {

    constructor() {
        this.clear();
    }

    clear() {
        this.sort_fields = [];
        this.sparse_fieldsets = {};
        this.included_resources = [];
        this.filter_fields = {};
        this.custom_params = {};
        this.page_number = undefined;
        this.page_size = undefined;
        this.query_options = undefined;
    }

    isQueryFilter() { return true; }

    sort(field, descending) {
        this.sort_fields.push((descending? '-' : '').concat(field));
        return this;
    }

    fields(resource, ...fields) {
        if (fields != undefined) this.sparse_fieldsets[resource] = fields;
        return this;
    }

    include(...resources) {
        // if (resources != undefined) resources.forEach(res => { this.included_resources.push(res) })
        if (resources != undefined) this.included_resources.push(resources);
        return this;
    }

    filter(filter, value) {
        if ((filter != undefined) && (value != undefined)) this.filter_fields[filter] = value;
        return this;
    }

    param(key, value) {
        if ((key != undefined) && (value != undefined)) this.custom_params[key] = value;
        return this;
    }

    page(number, size) {
        this.pageNumber(number);
        this.pageSize(size);
        return this;
    }

    pageSize(size) {
        this.page_size = size;
        return this;
    }

    pageNumber(number) {
        this.page_number = number;
        return this;
    }

    option(key, value) {
        if  ((key != undefined) && (value != undefined)) this.query_options[key] = value;
    }

    build(join) {

        let qsMap = {};

        // Filter Fields
        if (Object.keys(this.filter_fields).length > 0)
            Object.keys(this.filter_fields).forEach(filter => { qsMap[`filter[${filter}]`] = this.filter_fields[filter] });
        
        // Included Resources
        if (Object.keys(this.included_resources).length > 0)
            qsMap.include = this.included_resources.join(',');

        // Sparse Fieldsets
        if (Object.keys(this.sparse_fieldsets).length > 0)
            Object.keys(this.sparse_fieldsets).forEach(res => { qsMap[`fields[${res}]`] = this.sparse_fieldsets[res].join(',') });

        // Sort Fields
        if (Object.keys(this.sort_fields).length > 0)
            qsMap.sort = this.sort_fields.join(',');

        // Custom Params
        if (Object.keys(this.custom_params).length > 0)
            Object.keys(this.custom_params).forEach(key => { qsMap[key] = this.custom_params[key] })

        // Pagination
        if (this.page_number != undefined) qsMap['page[number]'] = this.page_number;
        if (this.page_size != undefined) qsMap['page[size]'] = this.page_size;

        return !join? qsMap : Object.keys(qsMap).map(key => { return key+'='+qsMap[key] }).join('&');

    }

}


module.exports = {
    QueryFilter
}

module.exports.newInstance = () => {
    return new QueryFilter();
}


/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk

module.exports = {

    log : (message) => {
        if (sdk.debug && sdk.console) console.log((message == undefined)? '' : message);
    },

    extendMap : (map, ext) => {
        if (map == undefined) map = {};
        if (ext != undefined) Object.keys(ext).forEach(key => { map[key] = ext[key]; });
        return map;
    },

    mergeMaps : (map1, map2) => {
        return { ...map1, ...map2 }
    },

    cloneMap : (map) => {
        return (map == undefined)? map : { ...map };
    },

    sleep : (ms, msg) => {
        module.exports.log((msg? `${msg} - ` : '').concat(`waiting ${ms} msecs ...`));
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    guid : () => {
        return (Date.now().toString(36) + '.' + Math.random().toString(36).slice(2).substr(0, 6)).toUpperCase();
    }

}


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ( true &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/json-api-normalize/src/jsonApiNormalize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/json-api-normalize/src/jsonApiNormalize.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this, function() {

    function Normalizer(dataset, property) {

        if (!(this instanceof Normalizer)) {
            var normalizerInstance = new Normalizer(dataset);
            return property ? normalizerInstance.get(property) : normalizerInstance;
        }

        if (typeof dataset === 'string') {
            dataset = JSON.parse(dataset);
        }

        if (!dataset || !dataset.data) {
            throw new Error('Invalid json api normalizer input');
        }

        this.dataset = dataset;
        this.isCollection = isArray(dataset.data);

        this.haystack = buildHaystack(dataset.included, this.isCollection ? dataset.data : [dataset.data]);

    }

    function buildHaystack(included, additionalItems) {

        var signatures = [];
        var haystack = included || [];

        each(haystack, function(entity) {
            signatures.push(entity.type + '@' + entity.id);
        });

        each(additionalItems, function(entity) {
            if (signatures.indexOf(entity.type + '@' + entity.id) < 0) {
                haystack.push(entity);
            }
        });

        return haystack;

    }

    function isArray(collection) {

        return collection instanceof Array;

    }

    function each(collection, callback, context) {

        if (isArray(collection)) {
            var iterations = collection.length;
            for (var i = 0; i < iterations; i++) {
                callback.call(context, collection[i], i);
            }
        } else {
            for (var key in collection) {
                collection.hasOwnProperty(key) && callback.call(context, key, collection[key]);
            }
        }

    }

    function map(collection, callback, context) {

        var temp = [];

        each(collection, function(item, key) {
            temp.push(callback.call(context, item, key));
        });

        return temp;

    }

    function deepExtend(out, obj) {

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {

                    typeof out[key] === 'undefined' && (out[key] = {});
                    deepExtend(out[key], obj[key]);

                } else {
                    out[key] = obj[key];
                }
            }
        }

        return out;

    }

    function getEntityProperties(propertyTree, entity, haystack) {

        var data = {};

        each(propertyTree, function(property, relationPropertyTree) {

            if (!relationPropertyTree) {

                var relationData = entity.relationships && entity.relationships[property] && entity.relationships[property].data;

                if (relationData) {

                    var relatedEntity = getRelatedEntity(relationData, haystack);

                    data[property] = relatedEntity ? new Normalizer({data: relatedEntity, included: haystack}) : undefined;

                } else {

                    data[property] = getEntityValue(property, entity);

                }

            } else {
                data[property] = getRelationData(property, relationPropertyTree, entity, haystack);
            }

        });

        return data;
    }

    function getEntityValue(property, entity) {

        return ['id', 'type'].indexOf(property) >= 0 ? entity[property] : entity.attributes[property];

    }

    function getRelationData(relationName, relationPropertyTree, entity, haystack) {

        var relationData = entity.relationships && entity.relationships[relationName] && entity.relationships[relationName].data;
        var relatedEntity = relationData && getRelatedEntity(relationData, haystack);

        if (isArray(relatedEntity)) {

            return map(relatedEntity, function(singleRelatedEntity) {
                return normalizeRelation(relationPropertyTree, singleRelatedEntity, haystack);
            });

        } else if (!relatedEntity) {

            return undefined;

        } else {

            return normalizeRelation(relationPropertyTree, relatedEntity, haystack);

        }

    }

    function normalizeRelation(propertyTree, relatedEntity, haystack) {

        return getViaPropertyTree.call(new Normalizer({
            data: relatedEntity,
            included: haystack
        }), propertyTree);

    }

    function getRelatedEntity(relationData, haystack) {

        var temp = [];

        var search = isArray(relationData) ? map(relationData, function(item) {
            return item.type + '@' + item.id;
        }) : [relationData.type + '@' + relationData.id];

        each(haystack, function(item) {
            search.indexOf(item.type + '@' + item.id) >= 0 && temp.push(item);
        });

        if (temp.length === 0) {
            return undefined;
        } else if (temp.length === 1 && !isArray(relationData)) {
            return temp[0];
        } else {
            return temp;
        }

    }

    function arrayToNestedObject(collection) {

        var obj = {};
        var temp = obj;
        var collectionLength = collection.length;

        for (var i = 0; i < collectionLength; i++) {
            temp = temp[collection[i]] = temp[collection[i]] || (i+1 === collectionLength ? undefined : {});
        }

        return obj;

    }

    function buildPropertyTree(propertyList) {

        var temp = {};

        each(propertyList, function(property) {

            var propertyParts = property.split('.');

            if (propertyParts.length > 1) {
                deepExtend(temp, arrayToNestedObject(propertyParts));
            } else {
                temp[property] = undefined;
            }

        });

        return temp;

    }

    function getViaPropertyTree(propertyTree) {

        if (this.isCollection) {

            return map(this.dataset.data, function(entity) {
                return getEntityProperties(propertyTree, entity, this.haystack);
            }, this);

        } else {

            return getEntityProperties(propertyTree, this.dataset.data, this.haystack);

        }

    }

    Normalizer.prototype.get = function(property) {

        var result = getViaPropertyTree.call(this, buildPropertyTree(isArray(property) ? property : [property]));

        if (this.isCollection) {
            return isArray(property) ? result : map(result, function(item) { return item[property]; });
        } else {
            return isArray(property) ? result : result[property];
        }

    };

    return Normalizer;

}));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2NsYXllci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2pzb25hcGkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9tb2RlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3F1ZXJ5LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9qc29uLWFwaS1ub3JtYWxpemUvc3JjL2pzb25BcGlOb3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsR0FBRyxTQUFTO0FBQzVDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRCxRQUFRLGlDQUFPLEVBQUUsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUMzQixLQUFLLE1BQU0sRUFJTjs7QUFFTCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckU7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFFQUFxRSx3Q0FBd0M7O0FBRTdHLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDLDBHQUEwRztBQUMxRzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNEVBQTRFLHVCQUF1QixFQUFFO0FBQ3JHLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JRRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImNvbW1lcmNlbGF5ZXItc2RrLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGF5ZXInKVxyXG5cclxubW9kdWxlLmV4cG9ydHMubW9kZWwgPSByZXF1aXJlKCcuL2xpYi9tb2RlbCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5xdWVyeSA9IHJlcXVpcmUoJy4vbGliL3F1ZXJ5JykiLCJjb25zdCBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcbmNvbnN0IGpzb25hcGkgPSByZXF1aXJlKCcuL2pzb25hcGknKVxyXG5cclxuXHJcbiBjbGFzcyBDTEFwaSB7XHJcblxyXG4gICAgLy8gU2t1c1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gZmlsdGVyIFxyXG4gICAgICovXHJcbiAgICBsaXN0U2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c30gaWQgXHJcbiAgICAgKiBAcGFyYW0geyp9IGZpbHRlciBcclxuICAgICAqL1xyXG4gICAgcmV0cmlldmVTa3UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmljZXNcclxuICAgIGxpc3RQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVQcmljZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RvY2sgSXRlbXNcclxuICAgIGxpc3RTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVTdG9ja0l0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsaXZlcnkgTGVhZCBUaW1lc1xyXG4gICAgbGlzdERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaGlwcGluZyBNZXRob2RzXHJcbiAgICBsaXN0U2hpcHBpbmdNZXRob2RzKGZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVTaGlwcGluZ01ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBheW1lbnQgTWV0aG9kc1xyXG4gICAgbGlzdFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlUGF5bWVudE1ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3JkZXJzXHJcbiAgICBsaXN0T3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlT3JkZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9yZGVyKG9yZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KG9yZGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGluZSBJdGVtc1xyXG4gICAgbGlzdExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVMaW5lSXRlbShpZCwgZmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxpbmVJdGVtKGxpbmVfaXRlbSkge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGluZUl0ZW0oaWQsIGxpbmVfaXRlbSkge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUxpbmVJdGVtKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3VzdG9tZXJzXHJcbiAgICBjcmVhdGVDdXN0b21lcihjdXN0b21lcikge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvbnNcclxuICAgIGNyZWF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGN1c3RvbWVyX3N1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG52YXIgYXBpID0gbmV3IENMQXBpKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jbGFwaSA9IGFwaTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICB1dGlscy5sb2coJ2FwaSBjbGllbnQgaW5pdGlhbGl6ZWQgd2l0aCBjb25maWc6Jyk7XHJcbiAgICB1dGlscy5sb2coY2ZnKTtcclxuICAgIGFwaS5jbGllbnQgPSAgY2xpZW50Lm5ld0luc3RhbmNlKGNmZyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICB1dGlscy5sb2coYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gY2FsbGluZyAke2FwaVJlcXVlc3QucGF0aH0gLi4uYCk7XHJcblxyXG4gICAgaWYgKGFwaS5jbGllbnQgPT0gdW5kZWZpbmVkKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IodW5kZWZpbmVkLCAnYXBpIG5vdCBpbml0aWFsaXplZCcpKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBib2R5ID0ganNvbmFwaS5zZXJpYWxpemUoYXBpUmVxdWVzdC5ib2R5KTtcclxuICAgICAgICBhcGlSZXF1ZXN0LnNldEJvZHkoYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGFwaS5jbGllbnQuY2FsbChhcGlSZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiBhcGlSZXF1ZXN0LnJhd19yZXNwb25zZT8gcmVzcG9uc2UuZGF0YSA6IGpzb25hcGkuZGVzZXJpYWxpemUocmVzcG9uc2UuZGF0YSk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yLnJlc3BvbnNlKSByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaV9lcnJvciA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcihhcGlfZXJyb3Iuc3RhdHVzLCBhcGlfZXJyb3IudGl0bGUsIGFwaV9lcnJvci5kZXRhaWwsIGFwaV9lcnJvci5jb2RlKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0Vycm9yKHN0YXR1cywgZGVzY3JpcHRpb24sIG1lc3NhZ2UsIGNvZGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3IgOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1cyA6IHN0YXR1cyxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1lc3NhZ2UgOiBtZXNzYWdlLFxyXG4gICAgICAgIGNvZGUgOiBjb2RlXHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgYXBpID0gcmVxdWlyZSgnLi9hcGknKVxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcblxyXG4vLyBFeHBvc2UgYWxsIGFwaSBmdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMgPSBhcGkuY2xhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgaWYgKGNmZyAhPSB1bmRlZmluZWQpIGNmZy5kZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBhcGkuaW5pdGlhbGl6ZSh1dGlscy5tZXJnZU1hcHMoY29uZmlnLmNsYXllciwgY2ZnKSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubGFzdEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5jbGFwaS5jbGllbnQuY29uZmlnLmFjY2Vzc190b2tlbjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2V0dGluZ3MgPSBjb25maWcuc2RrO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaGV5ID0gKCkgPT4geyByZXR1cm4gJ0hlbGxvIScgfVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2tBcGlDb25maWcoY29uZmlnKSB7XHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyB2ZXJpZmljYXRpb24uLi4nKVxyXG4gICAgaWYgKGNvbmZpZyA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGNvbmZpZyc7XHJcbiAgICBpZiAoY29uZmlnLmJhc2VfdXJsID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYmFzZV91cmwnO1xyXG4gICAgdXRpbHMubG9nKCdjb25maWcgb2suJylcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJhd19yZXNwb25zZSA9IHNkay5yYXdfcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYXRoKHBhdGgpIHsgdGhpcy5wYXRoID0gcGF0aDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRQYXJhbXMocGFyYW1zKSB7IHRoaXMucGFyYW1zID0gKHBhcmFtcyAmJiBwYXJhbXMuaXNRdWVyeUZpbHRlciAmJiAocGFyYW1zLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpPyBwYXJhbXMuYnVpbGQoKSA6IHBhcmFtczsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRNZXRob2QobWV0aG9kKSB7IHRoaXMubWV0aG9kID0gbWV0aG9kOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEJvZHkoYm9keSkgeyB0aGlzLmJvZHkgPSBib2R5OyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEhlYWRlcnMoaGVhZGVycykgeyB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICBuZXdBdHRlbXB0KCkgeyB0aGlzLmF0dGVtcHQrKzsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBPcHRpb25zXHJcbiAgICAgICAgcmF3UmVzcG9uc2UocmF3KSB7IHRoaXMucmF3X3Jlc3BvbnNlID0gcmF3PyByYXcgOiBzZGsucmF3X3Jlc3BvbnNlOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IHJlYWxseSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgYmVpbmcgc2V0dGVkXHJcbiAgICAgICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnJhd1Jlc3BvbnNlKG9wdGlvbnMucmF3X3Jlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAgICAgY2hlY2tBcGlDb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnbWFya2V0OicgKyB0aGlzLmNvbmZpZy5tYXJrZXRfaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbGwoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVzc2FnZShtc2cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZD8gYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gYCA6ICcnKS5jb25jYXQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3QubmV3QXR0ZW1wdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZV9wYXRoID0gKCh0aGlzLmNvbmZpZy5iYXNlX3BhdGggIT0gdW5kZWZpbmVkKT8gdGhpcy5jb25maWcuYmFzZV9wYXRoIDogJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSAodG8gYmUgcmVtb3ZlZClcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VfcGF0aCArIGFwaVJlcXVlc3QucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gYXBpUmVxdWVzdC5wYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGFwaVJlcXVlc3QubWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcXVlcnlTdHJpbmdcclxuICAgICAgICAgICAgbGV0IGNhbGxVcmwgPSBwYXRoO1xyXG4gICAgICAgICAgICBpZiAoKHBhcmFtcyAhPSB1bmRlZmluZWQpICYmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbXNba2V5XVxyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbFVybCA9IGNhbGxVcmwuY29uY2F0KCc/JykuY29uY2F0KHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjYWxsVXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZGsudGltZW91dC5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2UgY3VzdG9tIGFuZCBkZWZhdWx0IGhlYWRlcnNcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kTWFwKGF4aW9zQ29uZmlnLmhlYWRlcnMsIGFwaVJlcXVlc3QuaGVhZGVycyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2R5XHJcbiAgICAgICAgICAgIGlmIChhcGlSZXF1ZXN0LmJvZHkgIT0gdW5kZWZpbmVkKSBheGlvc0NvbmZpZy5kYXRhID0gYXBpUmVxdWVzdC5ib2R5O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF4X2F0dGVtcHRzID0gc2RrLmF1dGhfYXR0ZW1wdHM/IHNkay5hdXRoX2F0dGVtcHRzIDogMTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgYXV0aGVudGljYXRlZCBleGVjdXRlIGF1dGhlbnRpY2F0aW9uIHRoZW4gcmUtZXhlY3V0ZSBjYWxsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYWNjZXNzX3Rva2VuIG51bGwsIGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5hdXRoX2F0dGVtcHRzID4gbWF4X2F0dGVtcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZGsudGltZW91dC5yZXRyeSkgdGhyb3cgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgYXV0aGVudGljYXRpb24gYXR0ZW1wdHM6ICR7bWF4X2F0dGVtcHRzfSBhbmQgbm8gcmV0cnkgdGltZW91dCBjb25maWd1cmVkYDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNsZWVwKHNkay50aW1lb3V0LnJldHJ5LCBtZXNzYWdlKCdhbm90aGVyIGF1dGggcmVxdWVzdCBpcyBpbiBwcm9ncmVzcycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7IHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCkgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZSgpLnRoZW4oYWNjZXNzX3Rva2VuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdleGVjdXRpbmcgYXBpIGNhbGwgLi4uJykpO1xyXG4gICAgICAgICAgICAgICAgYXhpb3NDb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXBpIGNhbGwgc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2Vycm9yIGRldGVjdGVkOiAnICsgZXJyb3IuY29kZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCd0aW1lb3V0IGV4Y2VwdGlvbjonICsgZXJyb3IuY29uZmlnLnRpbWVvdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcGkgZXJyb25lb3VzbHkgcmV0dXJuIGNvZGUgNDAxIGluc3RlYWQgb2YgY29kZSA0MDMgZm9yIFVOQVVUSE9SSVpFRCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgJiYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLmNvZGUgPT0gJ0lOVkFMSURfVE9LRU4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2ludmFsaWQgdG9rZW4sIGFjY2VzcyBkZW5pZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5maW5hbGx5KCgpID0+IHsgdXRpbHMubG9nKCdlbmQgb2YgYXBpIGNhbGwuJyk7IH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBjbGF5ZXI6IHtcclxuXHJcbiAgICAgICAgZGVmYXVsdCA6IHRydWUsXHJcbiAgXHJcbiAgICAgICAgY2xpZW50X2lkIDogJzM1MTAyMGU5Yzg0ZjIwNzY3NTUwODNmMDhiZmU4ZTQ3MzY1YTc2Mzk1ZGIxMDU5YzMyMTljMzdhYmZmODY1MzQnLFxyXG4gICAgICAgIG1hcmtldF9pZCA6ICcxODUnLFxyXG4gICAgICAgIGJhc2VfdXJsIDogXCJodHRwczovL3N0YXRpYy1jb21tZXJjZS5jb21tZXJjZWxheWVyLmlvXCIsXHJcbiAgICAgICAgYmFzZV9wYXRoIDogbnVsbCxcclxuICAgICAgICBjb3VudHJ5X2NvZGUgOiAnVVMnLFxyXG4gICAgICAgIGxhbmd1YWdlX2NvZGUgOiAnZW4nLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2RrOiB7XHJcbiAgICAgICAgZGVidWcgICAgICAgICAgIDogZmFsc2UsICAgIC8vIGRlYnVnIG1vZGUgYWN0aXZhdGVkXHJcbiAgICAgICAgY29uc29sZSAgICAgICAgIDogZmFsc2UsICAgIC8vIGxvZyB0byBjb25zb2xlIGVuYWJsZWRcclxuICAgICAgICB0cmFjZSAgICAgICAgICAgOiBmYWxzZSwgICAgLy8gdHJhY2UgY2xpZW50IGlucHV0L291dHB1dCB0byBjb25zb2xlXHJcbiAgICAgICAgYXV0aF9hdHRlbXB0cyAgIDogMSwgICAgICAgIC8vIG51bWJlciBvZiBhdHRlbXB0cyBvZiBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgIHJhd19yZXNwb25zZSAgICA6IGZhbHNlLCAgICAvLyBnZXQgcmVzcG9uc2UgaW4gSlNPTi1BcGkgZm9ybWF0IHdpdGhvdXQgZGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgdGltZW91dCA6IHsgLy8gaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgICAgIHJldHJ5IDogMjAwLCAgICAvLyByZXRyeSBhZnRlciBhdXRoZW50aWNhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzIGRldGVjdGVkXHJcbiAgICAgICAgICAgIHJlcXVlc3QgOiAyMDAwICAvLyBjbGllbnQgcmVxdWVzdCB0aW1lb3V0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJjb25zdCBub3JtYWxpemUgPSByZXF1aXJlKCdqc29uLWFwaS1ub3JtYWxpemUnKVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLnNlcmlhbGl6ZSA9IChib2R5KSA9PiB7XHJcbiAgICBpZiAoYm9keSA9PSB1bmRlZmluZWQpIHJldHVybiBib2R5O1xyXG4gICAgZWxzZSByZXR1cm4gKGJvZHkuZGF0YSA9PSB1bmRlZmluZWQpPyBuZXcgSnNvbkFwaVJlc291cmNlKGJvZHkpLnNlcmlhbGl6ZSgpIDogYm9keTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBub3JtYWxpemUoZGF0YSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5ub3JtYWxpemUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShkYXRhKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEpzb25BcGlSZXNvdXJjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2UgPSB7fSkge1xyXG5cclxuICAgICAgICBpZiAocmVzb3VyY2UgIT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IHBvcnRhcmUgaWQgZSB0eXBlIGluIHRlc3RhIGFkIG9nbmkgb2JqZWN0XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IHJlc291cmNlW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnaWQnLCAndHlwZSddLmluY2x1ZGVzKGtleSkpIHRoaXMuZGF0YVtrZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5pc0FwaVJlc291cmNlICYmIGZpZWxkLmlzQXBpUmVzb3VyY2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSB0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEucmVsYXRpb25zaGlwc1trZXkuc3RhcnRzV2l0aCgnX18nKT8ga2V5LnN1YnN0cignX18nLmxlbmd0aCkgOiBrZXldID0geyBkYXRhOiB7IHR5cGU6IGZpZWxkLnR5cGUsIGlkOiBmaWVsZC5pZCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5kYXRhLmF0dHJpYnV0ZXNba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLmRhdGEgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuLy8gQmFzaWMgQWJzdHJhY3QgUmVzb3VyY2VcclxuY2xhc3MgUmVzb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHR5cGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpc0FwaVJlc291cmNlKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgc2V0UmVzb3VyY2UoZmllbGQsIHJlcykgeyBpZiAoKHJlcyAhPSB1bmRlZmluZWQpICYmIHJlcy5pc0FwaVJlc291cmNlICYmIHJlcy5pc0FwaVJlc291cmNlKCkpIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXSA9IHJlczsgfVxyXG4gICAgZ2V0UmVzb3VyY2UoZmllbGQpIHsgcmV0dXJuIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXTsgfVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgLy8gQWRkcmVzcyByZXNvdXJjZVxyXG4gICAgQWRkcmVzcyA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2FkZHJlc3NlcycpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1c2luZXNzID0gZmllbGRzLmJ1c2luZXNzO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhbnkgPSBmaWVsZHMuY29tcGFueTtcclxuICAgICAgICAgICAgdGhpcy5saW5lXzEgPSBmaWVsZHMubGluZV8xO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVfMiA9IGZpZWxkcy5saW5lXzI7XHJcbiAgICAgICAgICAgIHRoaXMuY2l0eSA9IGZpZWxkcy5jaXR5O1xyXG4gICAgICAgICAgICB0aGlzLnppcF9jb2RlID0gZmllbGRzLnppcF9jb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlX2NvZGUgPSBmaWVsZHMuc3RhdGVfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHJ5X2NvZGUgPSBmaWVsZHMuY291bnRyeV9jb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnBob25lID0gZmllbGRzLnBob25lO1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gZmllbGRzLm5vdGVzO1xyXG4gICAgICAgICAgICB0aGlzLmxhdCA9IGZpZWxkcy5sYXQ7XHJcbiAgICAgICAgICAgIHRoaXMubG5nID0gZmllbGRzLmxuZztcclxuICAgICAgICAgICAgdGhpcy5iaWxsaW5nX2luZm8gPSBmaWVsZHMuYmlsbGluZ19pbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IGdlb2NvZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdnZW9jb2RlcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGdlb2NvZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2dlb2NvZGVyJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gQ3JlZGl0Q2FyZCByZXNvdXJjZVxyXG4gICAgQ3JlZGl0Q2FyZCA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2NyZWRpdF9jYXJkcycpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlciA9IGZpZWxkcy5udW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBmaWVsZHMubW9udGg7XHJcbiAgICAgICAgICAgIHRoaXMueWVhciA9IGZpZWxkcy55ZWFyO1xyXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbl92YWx1ZSA9IGZpZWxkcy52ZXJpZmljYXRpb25fdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBDdXN0b21lciByZXNvdXJjZVxyXG4gICAgQ3VzdG9tZXIgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdjdXN0b21lcnMnKTtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBjdXN0b21lcl9ncm91cCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXJfZ3JvdXAnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBjdXN0b21lcl9ncm91cCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcl9ncm91cCcpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIEN1c3RvbWVyQWRkcmVzcyByZXNvdXJjZVxyXG4gICAgQ3VzdG9tZXJBZGRyZXNzIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnY3VzdG9tZXJfYWRkcmVzc2VzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG4gICAgICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIEN1c3RvbWVyR3JvdXAgcmVzb3VyY2VcclxuICAgIEN1c3RvbWVyR3JvdXAgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdjdXN0b21lcl9ncm91cHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gQ3VzdG9tZXJQYXNzd29yZFJlc2V0IHJlc291cmNlXHJcbiAgICBDdXN0b21lclBhc3N3b3JkUmVzZXQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdjdXN0b21lcl9wYXNzd29yZF9yZXNldHMnKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBDdXN0b21lclBheW1lbnRTb3VyY2VcclxuICAgIEN1c3RvbWVyUGF5bWVudFNvdXJjZSA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG4gICAgICAgIHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIERlbGl2ZXJ5TGVhZFRpbWUgcmVzb3VyY2VcclxuICAgIERlbGl2ZXJ5TGVhZFRpbWUgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdkZWxpdmVyeV9sZWFkX3RpbWVzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubWluX2hvdXJzID0gZmllbGRzLm1pbl9ob3VycztcclxuICAgICAgICAgICAgdGhpcy5tYXhfaG91cnMgPSBmaWVsZHMubWF4X2hvdXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG4gICAgICAgIHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBJbXBvcnQgcmVzb3VyY2VcclxuICAgIEltcG9ydCA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2ltcG9ydHMnKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZV90eXBlID0gZmllbGRzLnJlc291cmNlX3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50X3Jlc291cmNlX2lkID0gZmllbGRzLnBhcmVudF9yZXNvdXJjZV9pZDtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dHMgPSBmaWVsZHMuaW5wdXRzO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFudXBfcmVjb3JkcyA9IGZpZWxkcy5jbGVhbnVwX3JlY29yZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gSW52ZW50b3J5TW9kZWwgcmVzb3VyY2VcclxuICAgIEludmVudG9yeU1vZGVsIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnaW52ZW50b3J5X21vZGVscycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG4gICAgLy8gTGluZUl0ZW0gcmVzb3VyY2VcclxuICAgIExpbmVJdGVtIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnbGluZV9pdGVtcycpO1xyXG4gICAgICAgICAgICB0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9xdWFudGl0eSA9IGZpZWxkcy5fdXBkYXRlX3F1YW50aXR5O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyID0gZmllbGRzLm9yZGVyO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBmaWVsZHMuaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IHVwZGF0ZV9xdWFudGl0eSh2YWx1ZSkgeyB0aGlzLl91cGRhdGVfcXVhbnRpdHkgPSB2YWx1ZT8gJzEnIDogbnVsbDsgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBMaW5lSXRlbU9wdGlvbiByZXNvdXJjZVxyXG4gICAgTGluZUl0ZW1PcHRpb24gOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdsaW5lX2l0ZW1fb3B0aW9ucycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gZmllbGRzLm9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgbGluZV9pdGVtKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdsaW5lX2l0ZW0nLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBsaW5lX2l0ZW0oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbGluZV9pdGVtJykgfVxyXG4gICAgICAgIHNldCBza3Vfb3B0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3Vfb3B0aW9uJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgc2t1X29wdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3Vfb3B0aW9uJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTWFya2V0IHJlc291cmNlXHJcbiAgICBNYXJrZXQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdtYXJrZXRzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmZhY2Vib29rX3BpeGVsX2lkID0gZmllbGRzLmZhY2Vib29rX3BpeGVsX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IG1lcmNoYW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtZXJjaGFudCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG1lcmNoYW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21lcmNoYW50JykgfVxyXG4gICAgICAgIHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG4gICAgICAgIHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBNZXJjaGFudCByZXNvdXJjZVxyXG4gICAgTWVyY2hhbnQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdtZXJjaGFudHMnKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIE9yZGVyIHJlc291cmNlXHJcbiAgICBPcmRlciA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ29yZGVycycpO1xyXG4gICAgICAgICAgICB0aGlzLmd1ZXN0ID0gZmllbGRzLmd1ZXN0O1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlX2NvZGUgPSBmaWVsZHMubGFuZ3VhZ2VfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayA9IGZpZWxkcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jaztcclxuICAgICAgICAgICAgdGhpcy5jb3Vwb25fY29kZSA9IGZpZWxkcy5jb3Vwb25fY29kZTtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0X3VybCA9IGZpZWxkcy5jYXJ0X3VybDtcclxuICAgICAgICAgICAgdGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcbiAgICAgICAgICAgIHRoaXMudGVybXNfdXJsID0gZmllbGRzLnRlcm1zX3VybDtcclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5X3VybCA9IGZpZWxkcy5wcml2YWN5X3VybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbiAgICAgICAgc2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG4gICAgICAgIHNldCBzaGlwcGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgc2hpcHBpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJykgfVxyXG4gICAgICAgIHNldCBiaWxsaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGJpbGxpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnKSB9XHJcbiAgICAgICAgc2V0IHBheW1lbnRfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHBheW1lbnRfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJykgfVxyXG4gICAgICAgIHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFBhcmNlbCByZXNvdXJjZVxyXG4gICAgUGFyY2VsIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAncGFyY2VscycpO1xyXG4gICAgICAgICAgICB0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuZWVsX3BmYyA9IGZpZWxkcy5lZWxfcGZjO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRzX3R5cGUgPSBmaWVsZHMuY29udGVudHNfdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50c19leHBsYW5hdGlvbiA9IGZpZWxkcy5jb250ZW50c19leHBsYW5hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21zX2NlcnRpZnkgPSBmaWVsZHMuY3VzdG9tc19jZXJ0aWZ5O1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbXNfc2lnbmVyID0gZmllbGRzLmN1c3RvbXNfc2lnbmVyO1xyXG4gICAgICAgICAgICB0aGlzLm5vbl9kZWxpdmVyeV9vcHRpb24gPSBmaWVsZHMubm9uX2RlbGl2ZXJ5X29wdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5yZXN0cmljdGlvbl90eXBlID0gZmllbGRzLnJlc3RyaWN0aW9uX3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdHJpY3Rpb25fY29tbWVudHMgPSBmaWVsZHMucmVzdHJpY3Rpb25fY29tbWVudHM7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tc19pbmZvX3JlcXVpcmVkID0gZmllbGRzLmN1c3RvbXNfaW5mb19yZXF1aXJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBzaGlwbWVudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcG1lbnQnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBzaGlwbWVudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwbWVudCcpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFBheW1lbnRNZXRob2QgcmVzb3VyY2VcclxuICAgIFBheW1lbnRNZXRob2QgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdwYXltZW50X21ldGhvZHMnKTtcclxuICAgICAgICAgICAgdGhpcy5wYXltZW50X3NvdXJjZV90eXBlID0gZmllbGRzLnBheW1lbnRfc291cmNlX3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbiAgICAgICAgc2V0IHBheW1lbnRfZ2F0ZXdheSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgcGF5bWVudF9nYXRld2F5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFBheXBhbFBheW1lbnQgcmVzb3VyY2VcclxuICAgIFBheXBhbFBheW1lbnQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdwYXlwYWxfcGF5bWVudHMnKTtcclxuICAgICAgICAgICAgdGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsX3VybCA9IGZpZWxkcy5jYW5jZWxfdXJsO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVfdG9fcGF5ZXIgPSBmaWVsZHMubm90ZV90b19wYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFByaWNlIHJlc291cmNlXHJcbiAgICBQcmljZSA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3ByaWNlcycpO1xyXG4gICAgICAgICAgICB0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmFtb3VudF9jZW50cyA9IGZpZWxkcy5hbW91bnRfY2VudHM7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZV9hdF9hbW91bnRfY2VudHMgPSBmaWVsZHMuY29tcGFyZV9hdF9hbW91bnRfY2VudHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuICAgICAgICBzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gUHJpY2VMaXN0IHJlc291cmNlXHJcbiAgICBQcmljZUxpc3QgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdwcmljZV9saXN0cycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW5jeV9jb2RlID0gZmllbGRzLmN1cnJlbmN5X2NvZGU7XHJcbiAgICAgICAgICAgIHRoaXMudGF4X2luY2x1ZGVkID0gZmllbGRzLnRheF9pbmNsdWRlZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTaGlwbWVudCByZXNvdXJjZVxyXG4gICAgU2hpcG1lbnQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdzaGlwbWVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTaGlwcGluZ0NhdGVnb3J5IHJlc291cmNlXHJcbiAgICBTaGlwcGluZ0NhdGVnb3J5IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc2hpcHBpbmdfY2F0ZWdvcmllcycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTaGlwcGluZ01ldGhvZCByZXNvdXJjZVxyXG4gICAgU2hpcHBpbmdNZXRob2QgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdzaGlwcGluZ19tZXRob2RzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuICAgICAgICBzZXQgc2hpcHBpbmdfem9uZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNoaXBwaW5nX3pvbmUoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScpIH1cclxuICAgICAgICBzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTaGlwcGluZ1pvbmUgcmVzb3VyY2VcclxuICAgIFNoaXBwaW5nWm9uZSA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3NoaXBwaW5nX3pvbmVzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5jb3VudHJ5X2NvZGVfcmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMubm90X2NvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMuc3RhdGVfY29kZV9yZWdleDtcclxuICAgICAgICAgICAgdGhpcy5ub3Rfc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5ub3Rfc3RhdGVfY29kZV9yZWdleDtcclxuICAgICAgICAgICAgdGhpcy56aXBfY29kZV9yZWdleCA9IGZpZWxkcy56aXBfY29kZV9yZWdleDtcclxuICAgICAgICAgICAgdGhpcy5ub3RfemlwX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3ppcF9jb2RlX3JlZ2V4O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFNrdSByZXNvdXJjZVxyXG4gICAgU2t1IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc2t1cycpO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSBmaWVsZHMuY29kZTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBmaWVsZHMuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuICAgICAgICAgICAgdGhpcy50YWdfbmFtZXMgPSBmaWVsZHMudGFnX25hbWVzO1xyXG4gICAgICAgICAgICB0aGlzLnBpZWNlc19wZXJfcGFjayA9IGZpZWxkcy5waWVjZXNfcGVyX3BhY2s7XHJcbiAgICAgICAgICAgIHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuICAgICAgICAgICAgdGhpcy51bml0X29mX3dlaWdodCA9IGZpZWxkcy51bml0X29mX3dlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTa3VPcHRpb24gcmVzb3VyY2VcclxuICAgIFNrdU9wdGlvbiA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3NrdV9vcHRpb25zJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlfaG91cnMgPSBmaWVsZHMuZGVsYXlfaG91cnM7XHJcbiAgICAgICAgICAgIHRoaXMuc2t1X2NvZGVfcmVnZXggPSBmaWVsZHMuc2t1X2NvZGVfcmVnZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU3RvY2tJdGVtIHJlc291cmNlXHJcbiAgICBTdG9ja0l0ZW0gOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdzdG9ja19pdGVtcycpO1xyXG4gICAgICAgICAgICB0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG4gICAgICAgIHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTdG9ja0xldmVsIHJlc291cmNlXHJcbiAgICBTdG9ja0xldmVsIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc3RvY2tfbGV2ZWxzJyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBmaWVsZHMucHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRoaXMub25faG9sZCA9IGZpZWxkcy5vbl9ob2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG4gICAgICAgIHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTdG9ja0xvY2F0aW9uIHJlc291cmNlXHJcbiAgICBTdG9ja0xvY2F0aW9uIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc3RvY2tfbG9jYXRpb25zJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX2Zvcm1hdCA9IGZpZWxkcy5sYWJlbF9mb3JtYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFdlYmhvb2sgcmVzb3VyY2VcclxuICAgIFdlYmhvb2sgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICd3ZWJob29rcycpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcGljID0gZmllbGRzLnRvcGljO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrX3VybCA9IGZpZWxkcy5jYWxsYmFja191cmw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jbHVkZV9yZXNvdXJjZXMgPSBmaWVsZHMuaW5jbHVkZV9yZXNvdXJjZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gV2lyZVRyYW5zZmVyIHJlc291cmNlXHJcbiAgICBXaXJlVHJhbnNmZXIgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICd3aXJlX3RyYW5zZmVycycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG4gICAgfVxyXG5cclxufSIsIlxyXG5jbGFzcyBRdWVyeUZpbHRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNwYXJzZV9maWVsZHNldHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpZWxkcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tX3BhcmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5xdWVyeV9vcHRpb25zID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUXVlcnlGaWx0ZXIoKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgc29ydChmaWVsZCwgZGVzY2VuZGluZykge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMucHVzaCgoZGVzY2VuZGluZz8gJy0nIDogJycpLmNvbmNhdChmaWVsZCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkcyhyZXNvdXJjZSwgLi4uZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkcyAhPSB1bmRlZmluZWQpIHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNvdXJjZV0gPSBmaWVsZHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jbHVkZSguLi5yZXNvdXJjZXMpIHtcclxuICAgICAgICAvLyBpZiAocmVzb3VyY2VzICE9IHVuZGVmaW5lZCkgcmVzb3VyY2VzLmZvckVhY2gocmVzID0+IHsgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMucHVzaChyZXMpIH0pXHJcbiAgICAgICAgaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzb3VyY2VzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZmlsdGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoZmlsdGVyICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoa2V5ICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuY3VzdG9tX3BhcmFtc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgICgoa2V5ICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMucXVlcnlfb3B0aW9uc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoam9pbikge1xyXG5cclxuICAgICAgICBsZXQgcXNNYXAgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykuZm9yRWFjaChmaWx0ZXIgPT4geyBxc01hcFtgZmlsdGVyWyR7ZmlsdGVyfV1gXSA9IHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluY2x1ZGVkIFJlc291cmNlc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmluY2x1ZGVkX3Jlc291cmNlcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuaW5jbHVkZSA9IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gU3BhcnNlIEZpZWxkc2V0c1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykuZm9yRWFjaChyZXMgPT4geyBxc01hcFtgZmllbGRzWyR7cmVzfV1gXSA9IHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNdLmpvaW4oJywnKSB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zb3J0X2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuc29ydCA9IHRoaXMuc29ydF9maWVsZHMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gUGFyYW1zXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7IHFzTWFwW2tleV0gPSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSB9KVxyXG5cclxuICAgICAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9udW1iZXIgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtudW1iZXJdJ10gPSB0aGlzLnBhZ2VfbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2Vfc2l6ZSAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW3NpemVdJ10gPSB0aGlzLnBhZ2Vfc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFqb2luPyBxc01hcCA6IE9iamVjdC5rZXlzKHFzTWFwKS5tYXAoa2V5ID0+IHsgcmV0dXJuIGtleSsnPScrcXNNYXBba2V5XSB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBsb2cgOiAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLmNvbnNvbGUpIGNvbnNvbGUubG9nKChtZXNzYWdlID09IHVuZGVmaW5lZCk/ICcnIDogbWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZE1hcCA6IChtYXAsIGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXAgPT0gdW5kZWZpbmVkKSBtYXAgPSB7fTtcclxuICAgICAgICBpZiAoZXh0ICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGtleSA9PiB7IG1hcFtrZXldID0gZXh0W2tleV07IH0pO1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlTWFwcyA6IChtYXAxLCBtYXAyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubWFwMSwgLi4ubWFwMiB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lTWFwIDogKG1hcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobWFwID09IHVuZGVmaW5lZCk/IG1hcCA6IHsgLi4ubWFwIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwIDogKG1zLCBtc2cpID0+IHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cy5sb2coKG1zZz8gYCR7bXNnfSAtIGAgOiAnJykuY29uY2F0KGB3YWl0aW5nICR7bXN9IG1zZWNzIC4uLmApKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGd1aWQgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArICcuJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLnN1YnN0cigwLCA2KSkudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290Lmpzb25BcGlOb3JtYWxpemUgPSBmYWN0b3J5KCk7XG4gICAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gTm9ybWFsaXplcihkYXRhc2V0LCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb3JtYWxpemVyKSkge1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZXJJbnN0YW5jZSA9IG5ldyBOb3JtYWxpemVyKGRhdGFzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5ID8gbm9ybWFsaXplckluc3RhbmNlLmdldChwcm9wZXJ0eSkgOiBub3JtYWxpemVySW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhc2V0ID0gSlNPTi5wYXJzZShkYXRhc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YXNldCB8fCAhZGF0YXNldC5kYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQganNvbiBhcGkgbm9ybWFsaXplciBpbnB1dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gZGF0YXNldDtcbiAgICAgICAgdGhpcy5pc0NvbGxlY3Rpb24gPSBpc0FycmF5KGRhdGFzZXQuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5oYXlzdGFjayA9IGJ1aWxkSGF5c3RhY2soZGF0YXNldC5pbmNsdWRlZCwgdGhpcy5pc0NvbGxlY3Rpb24gPyBkYXRhc2V0LmRhdGEgOiBbZGF0YXNldC5kYXRhXSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEhheXN0YWNrKGluY2x1ZGVkLCBhZGRpdGlvbmFsSXRlbXMpIHtcblxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IFtdO1xuICAgICAgICB2YXIgaGF5c3RhY2sgPSBpbmNsdWRlZCB8fCBbXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZXMucHVzaChlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVhY2goYWRkaXRpb25hbEl0ZW1zLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVzLmluZGV4T2YoZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpIDwgMCkge1xuICAgICAgICAgICAgICAgIGhheXN0YWNrLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICBpZiAoaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNhbGxiYWNrLmNhbGwoY29udGV4dCwga2V5LCBjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIGVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0LCBpdGVtLCBrZXkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWVwRXh0ZW5kKG91dCwgb2JqKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb3V0W2tleV0gPT09ICd1bmRlZmluZWQnICYmIChvdXRba2V5XSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVlcEV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlUcmVlLCBmdW5jdGlvbihwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0uZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbkRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSByZWxhdGVkRW50aXR5ID8gbmV3IE5vcm1hbGl6ZXIoe2RhdGE6IHJlbGF0ZWRFbnRpdHksIGluY2x1ZGVkOiBoYXlzdGFja30pIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0UmVsYXRpb25EYXRhKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSkge1xuXG4gICAgICAgIHJldHVybiBbJ2lkJywgJ3R5cGUnXS5pbmRleE9mKHByb3BlcnR5KSA+PSAwID8gZW50aXR5W3Byb3BlcnR5XSA6IGVudGl0eS5hdHRyaWJ1dGVzW3Byb3BlcnR5XTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0aW9uRGF0YShyZWxhdGlvbk5hbWUsIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXS5kYXRhO1xuICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IHJlbGF0aW9uRGF0YSAmJiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgIGlmIChpc0FycmF5KHJlbGF0ZWRFbnRpdHkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAocmVsYXRlZEVudGl0eSwgZnVuY3Rpb24oc2luZ2xlUmVsYXRlZEVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgc2luZ2xlUmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghcmVsYXRlZEVudGl0eSkge1xuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVJlbGF0aW9uKHByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICByZXR1cm4gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwobmV3IE5vcm1hbGl6ZXIoe1xuICAgICAgICAgICAgZGF0YTogcmVsYXRlZEVudGl0eSxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBoYXlzdGFja1xuICAgICAgICB9KSwgcHJvcGVydHlUcmVlKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgdmFyIHNlYXJjaCA9IGlzQXJyYXkocmVsYXRpb25EYXRhKSA/IG1hcChyZWxhdGlvbkRhdGEsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkO1xuICAgICAgICB9KSA6IFtyZWxhdGlvbkRhdGEudHlwZSArICdAJyArIHJlbGF0aW9uRGF0YS5pZF07XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgc2VhcmNoLmluZGV4T2YoaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZCkgPj0gMCAmJiB0ZW1wLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wLmxlbmd0aCA9PT0gMSAmJiAhaXNBcnJheShyZWxhdGlvbkRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvTmVzdGVkT2JqZWN0KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHZhciB0ZW1wID0gb2JqO1xuICAgICAgICB2YXIgY29sbGVjdGlvbkxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtjb2xsZWN0aW9uW2ldXSA9IHRlbXBbY29sbGVjdGlvbltpXV0gfHwgKGkrMSA9PT0gY29sbGVjdGlvbkxlbmd0aCA/IHVuZGVmaW5lZCA6IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFByb3BlcnR5VHJlZShwcm9wZXJ0eUxpc3QpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlMaXN0LCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlQYXJ0cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKHRlbXAsIGFycmF5VG9OZXN0ZWRPYmplY3QocHJvcGVydHlQYXJ0cykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpYVByb3BlcnR5VHJlZShwcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcCh0aGlzLmRhdGFzZXQuZGF0YSwgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIHRoaXMuaGF5c3RhY2spO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCB0aGlzLmRhdGFzZXQuZGF0YSwgdGhpcy5oYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgTm9ybWFsaXplci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwodGhpcywgYnVpbGRQcm9wZXJ0eVRyZWUoaXNBcnJheShwcm9wZXJ0eSkgPyBwcm9wZXJ0eSA6IFtwcm9wZXJ0eV0pKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IG1hcChyZXN1bHQsIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bcHJvcGVydHldOyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IHJlc3VsdFtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gTm9ybWFsaXplcjtcblxufSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=