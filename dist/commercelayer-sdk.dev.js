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

module.exports = __webpack_require__(/*! ./lib/clayer */ "./lib/clayer.js");
module.exports.model = __webpack_require__(/*! ./lib/model */ "./lib/model.js");
module.exports.query = __webpack_require__(/*! ./lib/query */ "./lib/query.js");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var client = __webpack_require__(/*! ./client */ "./lib/client.js");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");

var jsonapi = __webpack_require__(/*! ./jsonapi */ "./lib/jsonapi.js");

var CLApi =
/*#__PURE__*/
function () {
  function CLApi() {
    _classCallCheck(this, CLApi);
  }

  _createClass(CLApi, [{
    key: "listSkus",
    // Skus

    /**
     * 
     * @param {*} filter 
     */
    value: function listSkus(filter, options) {
      return request(client.newRequest('/api/skus').setParams(filter).setOptions(options));
    }
    /**
     * 
     * @param {s} id 
     * @param {*} filter 
     */

  }, {
    key: "retrieveSku",
    value: function retrieveSku(id, filter, options) {
      return request(client.newRequest("/api/skus/".concat(id)).setParams(filter).setOptions(options));
    } // Prices

  }, {
    key: "listPrices",
    value: function listPrices(filter, options) {
      return request(client.newRequest('/api/prices').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrievePrice",
    value: function retrievePrice(id, filter, options) {
      return request(client.newRequest("/api/prices/".concat(id)).setParams(filter).setOptions(options));
    } // Stock Items

  }, {
    key: "listStockItems",
    value: function listStockItems(filter, options) {
      return request(client.newRequest('/api/stock_items').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveStockItem",
    value: function retrieveStockItem(id, filter, options) {
      return request(client.newRequest("/api/stock_items/".concat(id)).setParams(filter).setOptions(options));
    } // Delivery Lead Times

  }, {
    key: "listDeliveryLeadTimes",
    value: function listDeliveryLeadTimes(filter, options) {
      return request(client.newRequest('/api/delivery_lead_times').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveDeliveryLeadTime",
    value: function retrieveDeliveryLeadTime(id, filter, options) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id)).setParams(filter).setOptions(options));
    } // Shipping Methods

  }, {
    key: "listShippingMethods",
    value: function listShippingMethods(filter) {
      return request(client.newRequest('/api/shipping_methods').setParams(filter));
    }
  }, {
    key: "retrieveShippingMethod",
    value: function retrieveShippingMethod(id, filter, options) {
      return request(client.newRequest("/api/shipping_methods/".concat(id)).setParams(filter).setOptions(options));
    } // Payment Methods

  }, {
    key: "listPaymentMethods",
    value: function listPaymentMethods(filter, options) {
      return request(client.newRequest('/api/payment_methods').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrievePaymentMethod",
    value: function retrievePaymentMethod(id, filter, options) {
      return request(client.newRequest("/api/payment_methods/".concat(id)).setParams(filter).setOptions(options));
    } // Orders

  }, {
    key: "listOrders",
    value: function listOrders(filter, options) {
      return request(client.newRequest('/api/orders').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveOrder",
    value: function retrieveOrder(id, filter, options) {
      return request(client.newRequest("/api/orders/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createOrder",
    value: function createOrder(order) {
      return request(client.newRequest('/api/orders', 'post').setBody(order));
    } // Line Items

  }, {
    key: "listLineItems",
    value: function listLineItems(filter, options) {
      return request(client.newRequest('/api/line_items').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveLineItem",
    value: function retrieveLineItem(id, filter) {
      return request(client.newRequest("/api/line_items/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createLineItem",
    value: function createLineItem(line_item) {
      return request(client.newRequest('/api/line_items', 'post').setBody(line_item));
    }
  }, {
    key: "updateLineItem",
    value: function updateLineItem(id, line_item) {
      return request(client.newRequest("/api/line_items/".concat(id), 'patch').setBody(line_item));
    }
  }, {
    key: "deleteLineItem",
    value: function deleteLineItem(id) {
      return request(client.newRequest("/api/line_items/".concat(id), 'delete'));
    } // Customers

  }, {
    key: "createCustomer",
    value: function createCustomer(customer) {
      return request(client.newRequest('/api/customers', 'post').setBody(customer));
    } // Customer Subscriptions

  }, {
    key: "createCustomerSubscription",
    value: function createCustomerSubscription(customer_subscription) {
      return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription));
    }
  }]);

  return CLApi;
}();

var api = new CLApi();
module.exports.clapi = api;

module.exports.initialize = function (cfg) {
  utils.log('api client initialized with config:');
  utils.log(cfg);
  api.client = client.newInstance(cfg);
};

function request(apiRequest) {
  utils.log("[".concat(apiRequest.correlation_id, ".").concat(apiRequest.attempt, "] calling ").concat(apiRequest.path, " ..."));
  if (api.client == undefined) return Promise.reject(newError(undefined, 'api not initialized'));else {
    var body = jsonapi.serialize(apiRequest.body);
    apiRequest.setBody(body);
    return api.client.call(apiRequest).then(function (response) {
      return apiRequest.raw_response ? response.data : jsonapi.deserialize(response.data);
    }).catch(function (error) {
      if (!error.response) return error;else if (error.response.data && error.response.data.errors) {
        var api_error = error.response.data.errors[0];
        return Promise.reject(newError(api_error.status, api_error.title, api_error.detail, api_error.code));
      } else return Promise.reject(newError(error.response.status, error.response.statusText));
    });
  }
}

function newError(status, description, message, code) {
  return {
    error: true,
    status: status,
    description: description,
    message: message,
    code: code
  };
}

/***/ }),

/***/ "./lib/clayer.js":
/*!***********************!*\
  !*** ./lib/clayer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ./api */ "./lib/api.js");

var config = __webpack_require__(/*! ./config */ "./lib/config.js");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js"); // Expose all api functions


module.exports = api.clapi;

module.exports.initialize = function (cfg) {
  if (cfg != undefined) cfg.default = false;
  api.initialize(utils.mergeMaps(config.clayer, cfg));
};

module.exports.lastAccessToken = function () {
  return api.clapi.client.config.access_token;
};

module.exports.settings = config.sdk;

module.exports.hey = function () {
  return 'Hello!';
};

/***/ }),

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");

var sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk;

function checkApiConfig(config) {
  utils.log('config verification...');
  if (config == undefined) throw 'missing config';
  if (config.base_url == undefined) throw 'missing base_url';
  if (config.market_id == undefined) throw 'missing market_id';
  if (config.client_id == undefined) throw 'missing client_id';
  utils.log('config ok.');
  return true;
}

function setAxiosConfig(config) {
  axios.defaults.baseURL = config.base_url;
  axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';

  if (sdk.debug && sdk.trace) {
    axios.interceptors.request.use(function (request) {
      utils.log();
      utils.log('REQUEST -->');
      utils.log(request);
      return request;
    });
    axios.interceptors.response.use(function (response) {
      utils.log();
      utils.log('<-- RESPONSE');
      utils.log(response.data);
      return response;
    });
  }
}

module.exports = {
  newInstance: function newInstance(config) {
    return new this.ApiClient(config);
  },
  newRequest: function newRequest(path, method) {
    return new this.ApiRequest(path, method);
  },
  ApiRequest:
  /*#__PURE__*/
  function () {
    function ApiRequest() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';

      _classCallCheck(this, ApiRequest);

      this.path = path || '/';
      this.params = {};
      this.method = method || 'get';
      this.body = null;
      this.headers = {}; // ---- ---- ---- ----

      this.attempt = 0;
      this.correlation_id = utils.guid();
      this.raw_response = sdk.raw_response;
    }

    _createClass(ApiRequest, [{
      key: "setPath",
      value: function setPath(path) {
        this.path = path;
        return this;
      }
    }, {
      key: "setParams",
      value: function setParams(params) {
        this.params = params && params.isQueryFilter && params.isQueryFilter() === true ? params.build() : params;
        return this;
      }
    }, {
      key: "setMethod",
      value: function setMethod(method) {
        this.method = method;
        return this;
      }
    }, {
      key: "setBody",
      value: function setBody(body) {
        this.body = body;
        return this;
      }
    }, {
      key: "setHeaders",
      value: function setHeaders(headers) {
        this.headers = headers;
        return this;
      }
    }, {
      key: "newAttempt",
      value: function newAttempt() {
        this.attempt++;
        return this;
      } // Request Options

    }, {
      key: "rawResponse",
      value: function rawResponse(raw) {
        this.raw_response = raw ? raw : sdk.raw_response;
        return this;
      } // Only really available options are being setted

    }, {
      key: "setOptions",
      value: function setOptions(options) {
        if (options == undefined) return this;else return this.rawResponse(options.raw_response);
      }
    }]);

    return ApiRequest;
  }(),
  ApiClient:
  /*#__PURE__*/
  function () {
    function ApiClient(config) {
      _classCallCheck(this, ApiClient);

      checkApiConfig(config);
      this.config = config;
      this.auth_attempts = 0;
      setAxiosConfig(config);
    }

    _createClass(ApiClient, [{
      key: "authenticate",
      value: function authenticate() {
        return axios.post('/oauth/token', {
          grant_type: "client_credentials",
          client_id: this.config.client_id,
          scope: 'market:' + this.config.market_id
        }).then(function (response) {
          return response.data.access_token;
        });
      }
    }, {
      key: "call",
      value: function call(apiRequest) {
        var _this = this;

        function message(msg) {
          return (apiRequest.correlation_id ? "[".concat(apiRequest.correlation_id, ".").concat(apiRequest.attempt, "] ") : '').concat(msg);
        }

        apiRequest.newAttempt();
        var base_path = this.config.base_path != undefined ? this.config.base_path : ''; // Backward compatibility (to be removed)

        var path = base_path + apiRequest.path;
        var params = apiRequest.params;
        var method = apiRequest.method; // Build queryString

        var callUrl = path;

        if (params != undefined && Object.keys(params).length > 0) {
          var queryString = Object.keys(params).map(function (key) {
            return key + '=' + params[key];
          }).join('&');
          callUrl = callUrl.concat('?').concat(queryString);
        }

        var axiosConfig = {
          url: callUrl,
          method: method || 'get',
          timeout: sdk.timeout.request,
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
          } // Merge custom and default headers

        };
        utils.extendMap(axiosConfig.headers, apiRequest.headers); // Body

        if (apiRequest.body != undefined) axiosConfig.data = apiRequest.body;
        var max_attempts = sdk.auth_attempts ? sdk.auth_attempts : 1; // If not authenticated execute authentication then re-execute call

        if (this.config.access_token == undefined) {
          utils.log(message('access_token null, authentication required'));

          if (++this.auth_attempts > max_attempts) {
            if (!sdk.timeout.retry) throw "Reached maximum number of authentication attempts (".concat(max_attempts, ") and no retry timeout configured");else return utils.sleep(sdk.timeout.retry, message('another auth request is in progress')).then(function () {
              return _this.call(apiRequest);
            });
          } else return this.authenticate().then(function (access_token) {
            _this.config.access_token = access_token;
            _this.auth_attempts = 0;
            utils.log(message('authentication successful'));
            return _this.call(apiRequest);
          });
        } else {
          utils.log(message('executing api call ...'));
          axiosConfig.headers.Authorization = 'Bearer ' + this.config.access_token;
          return axios.request(axiosConfig).then(function (response) {
            utils.log(message('api call successful'));
            return response;
          }).catch(function (error) {
            utils.log(message(error ? error : 'error detected'));

            if (error.code === 'ECONNABORTED') {
              utils.log(message('timeout exception:' + error.config.timeout));
              return Promise.reject(error);
            } else {
              // Api erroneously return code 401 instead of code 403 for UNAUTHORIZED calls
              if (error.response.status === 401 && error.response.data.errors && error.response.data.errors[0].code == 'INVALID_TOKEN') {
                utils.log(message('invalid token, access denied'));
                _this.config.access_token = null;
                return _this.call(apiRequest);
              } else return Promise.reject(error);
            }
          }); // .finally(() => { utils.log('end of api call.'); })
        }
      }
    }]);

    return ApiClient;
  }()
};

/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  clayer: {
    default: true,
    client_id: '351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534',
    market_id: '185',
    base_url: "https://static-commerce.commercelayer.io",
    base_path: null,
    country_code: 'US',
    language_code: 'en'
  },
  sdk: {
    debug: false,
    // debug mode activated
    console: false,
    // log to console enabled
    trace: false,
    // trace client input/output to console
    auth_attempts: 1,
    // number of attempts of authentication
    raw_response: false,
    // get response in JSON-Api format without deserialization
    timeout: {
      // in milliseconds
      retry: 250,
      // retry after authentication request in progress detected
      request: 2000 // client request timeout

    }
  }
};

/***/ }),

/***/ "./lib/jsonapi.js":
/*!************************!*\
  !*** ./lib/jsonapi.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var normalize = __webpack_require__(/*! json-api-normalize */ "./node_modules/json-api-normalize/src/jsonApiNormalize.js");

module.exports.serialize = function (body) {
  if (body == undefined) return body;else return body.data == undefined ? new JsonApiResource(body).serialize() : body;
};

module.exports.deserialize = function (data) {
  return normalize(data);
};

module.exports.normalize = function (data) {
  return normalize(data);
};

var JsonApiResource =
/*#__PURE__*/
function () {
  function JsonApiResource() {
    var _this = this;

    var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, JsonApiResource);

    if (resource != undefined) {
      this.data = {};
      this.data.attributes = {}; // TODO: portare id e type in testa ad ogni object

      Object.keys(resource).forEach(function (key) {
        var field = resource[key];

        if (field != undefined) {
          if (['id', 'type'].includes(key)) _this.data[key] = field;else if (field.isApiResource && field.isApiResource()) {
            if (_this.data.relationships == undefined) _this.data.relationships = {};
            _this.data.relationships[key.startsWith('__') ? key.substr('__'.length) : key] = {
              data: {
                type: field.type,
                id: field.id
              }
            };
          } else _this.data.attributes[key] = field;
        }
      });
    }
  }

  _createClass(JsonApiResource, [{
    key: "serialize",
    value: function serialize() {
      return {
        data: this.data
      };
    }
  }]);

  return JsonApiResource;
}();

/***/ }),

/***/ "./lib/model.js":
/*!**********************!*\
  !*** ./lib/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Basic Abstract Resource
var Resource =
/*#__PURE__*/
function () {
  function Resource(id, type) {
    _classCallCheck(this, Resource);

    this.id = id;
    this.type = type;
    this.reference = undefined;
    this.metadata = undefined;
    this.created_at = undefined;
    this.updated_at = undefined;
  }

  _createClass(Resource, [{
    key: "isApiResource",
    value: function isApiResource() {
      return true;
    }
  }, {
    key: "setResource",
    value: function setResource(field, res) {
      if (res != undefined && res.isApiResource && res.isApiResource()) this['__'.concat(field)] = res;
    }
  }, {
    key: "getResource",
    value: function getResource(field) {
      return this['__'.concat(field)];
    }
  }]);

  return Resource;
}();

module.exports = {
  // Address resource
  Address:
  /*#__PURE__*/
  function (_Resource) {
    _inherits(Address, _Resource);

    function Address(id) {
      var _this;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Address);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Address).call(this, id, 'addresses'));
      _this.business = fields.business;
      _this.first_name = fields.first_name;
      _this.last_name = fields.last_name;
      _this.company = fields.company;
      _this.line_1 = fields.line_1;
      _this.line_2 = fields.line_2;
      _this.city = fields.city;
      _this.zip_code = fields.zip_code;
      _this.state_code = fields.state_code;
      _this.country_code = fields.country_code;
      _this.phone = fields.phone;
      _this.email = fields.email;
      _this.notes = fields.notes;
      _this.lat = fields.lat;
      _this.lng = fields.lng;
      _this.billing_info = fields.billing_info;
      return _this;
    } // Relationships


    _createClass(Address, [{
      key: "geocoder",
      set: function set(value) {
        _get(_getPrototypeOf(Address.prototype), "setResource", this).call(this, 'geocoder', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Address.prototype), "getResource", this).call(this, 'geocoder');
      }
    }]);

    return Address;
  }(Resource),
  // CreditCard resource
  CreditCard:
  /*#__PURE__*/
  function (_Resource2) {
    _inherits(CreditCard, _Resource2);

    function CreditCard(id) {
      var _this2;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CreditCard);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CreditCard).call(this, id, 'credit_cards'));
      _this2.first_name = fields.first_name;
      _this2.last_name = fields.last_name;
      _this2.number = fields.number;
      _this2.month = fields.month;
      _this2.year = fields.year;
      _this2.verification_value = fields.verification_value;
      return _this2;
    } // Relationships


    _createClass(CreditCard, [{
      key: "order",
      set: function set(value) {
        _get(_getPrototypeOf(CreditCard.prototype), "setResource", this).call(this, 'order', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(CreditCard.prototype), "getResource", this).call(this, 'order');
      }
    }]);

    return CreditCard;
  }(Resource),
  // Customer resource
  Customer:
  /*#__PURE__*/
  function (_Resource3) {
    _inherits(Customer, _Resource3);

    function Customer(id) {
      var _this3;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Customer);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Customer).call(this, id, 'customers'));
      _this3.email = fields.email;
      return _this3;
    } // Relationships


    _createClass(Customer, [{
      key: "customer_group",
      set: function set(value) {
        _get(_getPrototypeOf(Customer.prototype), "setResource", this).call(this, 'customer_group', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Customer.prototype), "getResource", this).call(this, 'customer_group');
      }
    }]);

    return Customer;
  }(Resource),
  // CustomerAddress resource
  CustomerAddress:
  /*#__PURE__*/
  function (_Resource4) {
    _inherits(CustomerAddress, _Resource4);

    function CustomerAddress(id) {
      var _this4;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CustomerAddress);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerAddress).call(this, id, 'customer_addresses'));
      _this4.name = fields.name;
      return _this4;
    } // Relationships


    _createClass(CustomerAddress, [{
      key: "customer",
      set: function set(value) {
        _get(_getPrototypeOf(CustomerAddress.prototype), "setResource", this).call(this, 'customer', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(CustomerAddress.prototype), "getResource", this).call(this, 'customer');
      }
    }, {
      key: "order",
      set: function set(value) {
        _get(_getPrototypeOf(CustomerAddress.prototype), "setResource", this).call(this, 'order', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(CustomerAddress.prototype), "getResource", this).call(this, 'order');
      }
    }]);

    return CustomerAddress;
  }(Resource),
  // CustomerGroup resource
  CustomerGroup:
  /*#__PURE__*/
  function (_Resource5) {
    _inherits(CustomerGroup, _Resource5);

    function CustomerGroup(id) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CustomerGroup);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomerGroup).call(this, id, 'customer_groups'));
    } // Relationships


    _createClass(CustomerGroup, [{
      key: "price_list",
      set: function set(value) {
        _get(_getPrototypeOf(CustomerGroup.prototype), "setResource", this).call(this, 'price_list', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(CustomerGroup.prototype), "getResource", this).call(this, 'price_list');
      }
    }]);

    return CustomerGroup;
  }(Resource),
  // CustomerPasswordReset resource
  CustomerPasswordReset:
  /*#__PURE__*/
  function (_Resource6) {
    _inherits(CustomerPasswordReset, _Resource6);

    function CustomerPasswordReset(id) {
      var _this5;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CustomerPasswordReset);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerPasswordReset).call(this, id, 'customer_password_resets'));
      _this5.customer_email = fields.customer_email;
      return _this5;
    }

    return CustomerPasswordReset;
  }(Resource),
  // CustomerPaymentSource
  CustomerPaymentSource:
  /*#__PURE__*/
  function (_Resource7) {
    _inherits(CustomerPaymentSource, _Resource7);

    function CustomerPaymentSource(id) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CustomerPaymentSource);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomerPaymentSource).call(this, id, 'customer_payment_sources'));
    } // Relationships


    _createClass(CustomerPaymentSource, [{
      key: "customer",
      set: function set(value) {
        _get(_getPrototypeOf(CustomerPaymentSource.prototype), "setResource", this).call(this, 'customer', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(CustomerPaymentSource.prototype), "getResource", this).call(this, 'customer');
      }
    }, {
      key: "payment_source",
      set: function set(value) {
        _get(_getPrototypeOf(CustomerPaymentSource.prototype), "setResource", this).call(this, 'payment_source', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(CustomerPaymentSource.prototype), "getResource", this).call(this, 'payment_source');
      }
    }]);

    return CustomerPaymentSource;
  }(Resource),
  // DeliveryLeadTime resource
  DeliveryLeadTime:
  /*#__PURE__*/
  function (_Resource8) {
    _inherits(DeliveryLeadTime, _Resource8);

    function DeliveryLeadTime(id) {
      var _this6;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DeliveryLeadTime);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(DeliveryLeadTime).call(this, id, 'delivery_lead_times'));
      _this6.min_hours = fields.min_hours;
      _this6.max_hours = fields.max_hours;
      return _this6;
    } // Relationships


    _createClass(DeliveryLeadTime, [{
      key: "stock_location",
      set: function set(value) {
        _get(_getPrototypeOf(DeliveryLeadTime.prototype), "setResource", this).call(this, 'stock_location', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(DeliveryLeadTime.prototype), "getResource", this).call(this, 'stock_location');
      }
    }, {
      key: "shipping_method",
      set: function set(value) {
        _get(_getPrototypeOf(DeliveryLeadTime.prototype), "setResource", this).call(this, 'shipping_method', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(DeliveryLeadTime.prototype), "getResource", this).call(this, 'shipping_method');
      }
    }]);

    return DeliveryLeadTime;
  }(Resource),
  // Import resource
  Import:
  /*#__PURE__*/
  function (_Resource9) {
    _inherits(Import, _Resource9);

    function Import(id) {
      var _this7;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Import);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Import).call(this, id, 'imports'));
      _this7.resource_type = fields.resource_type;
      _this7.parent_resource_id = fields.parent_resource_id;
      _this7.inputs = fields.inputs;
      _this7.cleanup_records = fields.cleanup_records;
      return _this7;
    }

    return Import;
  }(Resource),
  // InventoryModel resource
  InventoryModel:
  /*#__PURE__*/
  function (_Resource10) {
    _inherits(InventoryModel, _Resource10);

    function InventoryModel(id) {
      var _this8;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, InventoryModel);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(InventoryModel).call(this, id, 'inventory_models'));
      _this8.name = fields.name;
      return _this8;
    }

    return InventoryModel;
  }(Resource),
  // LineItem resource
  LineItem:
  /*#__PURE__*/
  function (_Resource11) {
    _inherits(LineItem, _Resource11);

    function LineItem(id) {
      var _this9;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LineItem);

      _this9 = _possibleConstructorReturn(this, _getPrototypeOf(LineItem).call(this, id, 'line_items'));
      _this9.sku_code = fields.sku_code;
      _this9.quantity = fields.quantity;
      _this9.update_quantity = fields._update_quantity;
      _this9.name = fields.name;
      _this9.image_url = fields.image_url;
      _this9.order = fields.order;
      _this9.item = fields.item;
      return _this9;
    }

    _createClass(LineItem, [{
      key: "update_quantity",
      set: function set(value) {
        this._update_quantity = value ? '1' : null;
      } // Relationships

    }, {
      key: "order",
      set: function set(value) {
        _get(_getPrototypeOf(LineItem.prototype), "setResource", this).call(this, 'order', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(LineItem.prototype), "getResource", this).call(this, 'order');
      }
    }]);

    return LineItem;
  }(Resource),
  // LineItemOption resource
  LineItemOption:
  /*#__PURE__*/
  function (_Resource12) {
    _inherits(LineItemOption, _Resource12);

    function LineItemOption(id) {
      var _this10;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LineItemOption);

      _this10 = _possibleConstructorReturn(this, _getPrototypeOf(LineItemOption).call(this, id, 'line_item_options'));
      _this10.name = fields.name;
      _this10.quantity = fields.quantity;
      _this10.options = fields.options;
      return _this10;
    } // Relationships


    _createClass(LineItemOption, [{
      key: "line_item",
      set: function set(value) {
        _get(_getPrototypeOf(LineItemOption.prototype), "setResource", this).call(this, 'line_item', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(LineItemOption.prototype), "getResource", this).call(this, 'line_item');
      }
    }, {
      key: "sku_option",
      set: function set(value) {
        _get(_getPrototypeOf(LineItemOption.prototype), "setResource", this).call(this, 'sku_option', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(LineItemOption.prototype), "getResource", this).call(this, 'sku_option');
      }
    }]);

    return LineItemOption;
  }(Resource),
  // Market resource
  Market:
  /*#__PURE__*/
  function (_Resource13) {
    _inherits(Market, _Resource13);

    function Market(id) {
      var _this11;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Market);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Market).call(this, id, 'markets'));
      _this11.name = fields.name;
      _this11.facebook_pixel_id = fields.facebook_pixel_id;
      return _this11;
    } // Relationships


    _createClass(Market, [{
      key: "merchant",
      set: function set(value) {
        _get(_getPrototypeOf(Market.prototype), "setResource", this).call(this, 'merchant', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Market.prototype), "getResource", this).call(this, 'merchant');
      }
    }, {
      key: "price_list",
      set: function set(value) {
        _get(_getPrototypeOf(Market.prototype), "setResource", this).call(this, 'price_list', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Market.prototype), "getResource", this).call(this, 'price_list');
      }
    }, {
      key: "inventory_model",
      set: function set(value) {
        _get(_getPrototypeOf(Market.prototype), "setResource", this).call(this, 'inventory_model', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Market.prototype), "getResource", this).call(this, 'inventory_model');
      }
    }]);

    return Market;
  }(Resource),
  // Merchant resource
  Merchant:
  /*#__PURE__*/
  function (_Resource14) {
    _inherits(Merchant, _Resource14);

    function Merchant(id) {
      var _this12;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Merchant);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Merchant).call(this, id, 'merchants'));
      _this12.name = fields.name;
      return _this12;
    } // Relationships


    _createClass(Merchant, [{
      key: "address",
      set: function set(value) {
        _get(_getPrototypeOf(Merchant.prototype), "setResource", this).call(this, 'address', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Merchant.prototype), "getResource", this).call(this, 'address');
      }
    }]);

    return Merchant;
  }(Resource),
  // Order resource
  Order:
  /*#__PURE__*/
  function (_Resource15) {
    _inherits(Order, _Resource15);

    function Order(id) {
      var _this13;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Order);

      _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Order).call(this, id, 'orders'));
      _this13.guest = fields.guest;
      _this13.customer_email = fields.customer_email;
      _this13.customer_password = fields.customer_password;
      _this13.language_code = fields.language_code;
      _this13.shipping_country_code_lock = fields.shipping_country_code_lock;
      _this13.coupon_code = fields.coupon_code;
      _this13.cart_url = fields.cart_url;
      _this13.return_url = fields.return_url;
      _this13.terms_url = fields.terms_url;
      _this13.privacy_url = fields.privacy_url;
      return _this13;
    } // Relationships


    _createClass(Order, [{
      key: "market",
      set: function set(value) {
        _get(_getPrototypeOf(Order.prototype), "setResource", this).call(this, 'market', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Order.prototype), "getResource", this).call(this, 'market');
      }
    }, {
      key: "customer",
      set: function set(value) {
        _get(_getPrototypeOf(Order.prototype), "setResource", this).call(this, 'customer', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Order.prototype), "getResource", this).call(this, 'customer');
      }
    }, {
      key: "shipping_address",
      set: function set(value) {
        _get(_getPrototypeOf(Order.prototype), "setResource", this).call(this, 'shipping_address', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Order.prototype), "getResource", this).call(this, 'shipping_address');
      }
    }, {
      key: "billing_address",
      set: function set(value) {
        _get(_getPrototypeOf(Order.prototype), "setResource", this).call(this, 'billing_address', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Order.prototype), "getResource", this).call(this, 'billing_address');
      }
    }, {
      key: "payment_method",
      set: function set(value) {
        _get(_getPrototypeOf(Order.prototype), "setResource", this).call(this, 'payment_method', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Order.prototype), "getResource", this).call(this, 'payment_method');
      }
    }, {
      key: "payment_source",
      set: function set(value) {
        _get(_getPrototypeOf(Order.prototype), "setResource", this).call(this, 'payment_source', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Order.prototype), "getResource", this).call(this, 'payment_source');
      }
    }]);

    return Order;
  }(Resource),
  // Parcel resource
  Parcel:
  /*#__PURE__*/
  function (_Resource16) {
    _inherits(Parcel, _Resource16);

    function Parcel(id) {
      var _this14;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Parcel);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Parcel).call(this, id, 'parcels'));
      _this14.weight = fields.weight;
      _this14.unit_of_weight = fields.unit_of_weight;
      _this14.eel_pfc = fields.eel_pfc;
      _this14.contents_type = fields.contents_type;
      _this14.contents_explanation = fields.contents_explanation;
      _this14.customs_certify = fields.customs_certify;
      _this14.customs_signer = fields.customs_signer;
      _this14.non_delivery_option = fields.non_delivery_option;
      _this14.restriction_type = fields.restriction_type;
      _this14.restriction_comments = fields.restriction_comments;
      _this14.customs_info_required = fields.customs_info_required;
      return _this14;
    } // Relationships


    _createClass(Parcel, [{
      key: "shipment",
      set: function set(value) {
        _get(_getPrototypeOf(Parcel.prototype), "setResource", this).call(this, 'shipment', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Parcel.prototype), "getResource", this).call(this, 'shipment');
      }
    }]);

    return Parcel;
  }(Resource),
  // PaymentMethod resource
  PaymentMethod:
  /*#__PURE__*/
  function (_Resource17) {
    _inherits(PaymentMethod, _Resource17);

    function PaymentMethod(id) {
      var _this15;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PaymentMethod);

      _this15 = _possibleConstructorReturn(this, _getPrototypeOf(PaymentMethod).call(this, id, 'payment_methods'));
      _this15.payment_source_type = fields.payment_source_type;
      _this15.price_amount_cents = fields.price_amount_cents;
      return _this15;
    } // Relationships


    _createClass(PaymentMethod, [{
      key: "market",
      set: function set(value) {
        _get(_getPrototypeOf(PaymentMethod.prototype), "setResource", this).call(this, 'market', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(PaymentMethod.prototype), "getResource", this).call(this, 'market');
      }
    }, {
      key: "payment_gateway",
      set: function set(value) {
        _get(_getPrototypeOf(PaymentMethod.prototype), "setResource", this).call(this, 'payment_gateway', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(PaymentMethod.prototype), "getResource", this).call(this, 'payment_gateway');
      }
    }]);

    return PaymentMethod;
  }(Resource),
  // PaypalPayment resource
  PaypalPayment:
  /*#__PURE__*/
  function (_Resource18) {
    _inherits(PaypalPayment, _Resource18);

    function PaypalPayment(id) {
      var _this16;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PaypalPayment);

      _this16 = _possibleConstructorReturn(this, _getPrototypeOf(PaypalPayment).call(this, id, 'paypal_payments'));
      _this16.return_url = fields.return_url;
      _this16.cancel_url = fields.cancel_url;
      _this16.note_to_payer = fields.note_to_payer;
      return _this16;
    } // Relationships


    _createClass(PaypalPayment, [{
      key: "order",
      set: function set(value) {
        _get(_getPrototypeOf(PaypalPayment.prototype), "setResource", this).call(this, 'order', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(PaypalPayment.prototype), "getResource", this).call(this, 'order');
      }
    }]);

    return PaypalPayment;
  }(Resource),
  // Price resource
  Price:
  /*#__PURE__*/
  function (_Resource19) {
    _inherits(Price, _Resource19);

    function Price(id) {
      var _this17;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Price);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Price).call(this, id, 'prices'));
      _this17.sku_code = fields.sku_code;
      _this17.amount_cents = fields.amount_cents;
      _this17.compare_at_amount_cents = fields.compare_at_amount_cents;
      return _this17;
    } // Relationships


    _createClass(Price, [{
      key: "price_list",
      set: function set(value) {
        _get(_getPrototypeOf(Price.prototype), "setResource", this).call(this, 'price_list', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Price.prototype), "getResource", this).call(this, 'price_list');
      }
    }, {
      key: "sku",
      set: function set(value) {
        _get(_getPrototypeOf(Price.prototype), "setResource", this).call(this, 'sku', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Price.prototype), "getResource", this).call(this, 'sku');
      }
    }]);

    return Price;
  }(Resource),
  // PriceList resource
  PriceList:
  /*#__PURE__*/
  function (_Resource20) {
    _inherits(PriceList, _Resource20);

    function PriceList(id) {
      var _this18;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PriceList);

      _this18 = _possibleConstructorReturn(this, _getPrototypeOf(PriceList).call(this, id, 'price_lists'));
      _this18.name = fields.name;
      _this18.currency_code = fields.currency_code;
      _this18.tax_included = fields.tax_included;
      return _this18;
    }

    return PriceList;
  }(Resource),
  // Shipment resource
  Shipment:
  /*#__PURE__*/
  function (_Resource21) {
    _inherits(Shipment, _Resource21);

    function Shipment(id) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Shipment);

      return _possibleConstructorReturn(this, _getPrototypeOf(Shipment).call(this, id, 'shipments'));
    }

    return Shipment;
  }(Resource),
  // ShippingCategory resource
  ShippingCategory:
  /*#__PURE__*/
  function (_Resource22) {
    _inherits(ShippingCategory, _Resource22);

    function ShippingCategory(id) {
      var _this19;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ShippingCategory);

      _this19 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingCategory).call(this, id, 'shipping_categories'));
      _this19.name = fields.name;
      return _this19;
    }

    return ShippingCategory;
  }(Resource),
  // ShippingMethod resource
  ShippingMethod:
  /*#__PURE__*/
  function (_Resource23) {
    _inherits(ShippingMethod, _Resource23);

    function ShippingMethod(id) {
      var _this20;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ShippingMethod);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingMethod).call(this, id, 'shipping_methods'));
      _this20.name = fields.name;
      _this20.price_amount_cents = fields.price_amount_cents;
      _this20.free_over_amount_cents = fields.free_over_amount_cents;
      return _this20;
    } // Relationships


    _createClass(ShippingMethod, [{
      key: "market",
      set: function set(value) {
        _get(_getPrototypeOf(ShippingMethod.prototype), "setResource", this).call(this, 'market', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(ShippingMethod.prototype), "getResource", this).call(this, 'market');
      }
    }, {
      key: "shipping_zone",
      set: function set(value) {
        _get(_getPrototypeOf(ShippingMethod.prototype), "setResource", this).call(this, 'shipping_zone', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(ShippingMethod.prototype), "getResource", this).call(this, 'shipping_zone');
      }
    }, {
      key: "shipping_category",
      set: function set(value) {
        _get(_getPrototypeOf(ShippingMethod.prototype), "setResource", this).call(this, 'shipping_category', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(ShippingMethod.prototype), "getResource", this).call(this, 'shipping_category');
      }
    }]);

    return ShippingMethod;
  }(Resource),
  // ShippingZone resource
  ShippingZone:
  /*#__PURE__*/
  function (_Resource24) {
    _inherits(ShippingZone, _Resource24);

    function ShippingZone(id) {
      var _this21;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ShippingZone);

      _this21 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingZone).call(this, id, 'shipping_zones'));
      _this21.name = fields.name;
      _this21.country_code_regex = fields.country_code_regex;
      _this21.not_country_code_regex = fields.not_country_code_regex;
      _this21.state_code_regex = fields.state_code_regex;
      _this21.not_state_code_regex = fields.not_state_code_regex;
      _this21.zip_code_regex = fields.zip_code_regex;
      _this21.not_zip_code_regex = fields.not_zip_code_regex;
      return _this21;
    }

    return ShippingZone;
  }(Resource),
  // Sku resource
  Sku:
  /*#__PURE__*/
  function (_Resource25) {
    _inherits(Sku, _Resource25);

    function Sku(id) {
      var _this22;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Sku);

      _this22 = _possibleConstructorReturn(this, _getPrototypeOf(Sku).call(this, id, 'skus'));
      _this22.code = fields.code;
      _this22.name = fields.name;
      _this22.description = fields.description;
      _this22.image_url = fields.image_url;
      _this22.tag_names = fields.tag_names;
      _this22.pieces_per_pack = fields.pieces_per_pack;
      _this22.weight = fields.weight;
      _this22.unit_of_weight = fields.unit_of_weight;
      return _this22;
    } // Relationships


    _createClass(Sku, [{
      key: "shipping_category",
      set: function set(value) {
        _get(_getPrototypeOf(Sku.prototype), "setResource", this).call(this, 'shipping_category', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(Sku.prototype), "getResource", this).call(this, 'shipping_category');
      }
    }]);

    return Sku;
  }(Resource),
  // SkuOption resource
  SkuOption:
  /*#__PURE__*/
  function (_Resource26) {
    _inherits(SkuOption, _Resource26);

    function SkuOption(id) {
      var _this23;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SkuOption);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(SkuOption).call(this, id, 'sku_options'));
      _this23.name = fields.name;
      _this23.price_amount_cents = fields.price_amount_cents;
      _this23.delay_hours = fields.delay_hours;
      _this23.sku_code_regex = fields.sku_code_regex;
      return _this23;
    } // Relationships


    _createClass(SkuOption, [{
      key: "market",
      set: function set(value) {
        _get(_getPrototypeOf(SkuOption.prototype), "setResource", this).call(this, 'market', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(SkuOption.prototype), "getResource", this).call(this, 'market');
      }
    }]);

    return SkuOption;
  }(Resource),
  // StockItem resource
  StockItem:
  /*#__PURE__*/
  function (_Resource27) {
    _inherits(StockItem, _Resource27);

    function StockItem(id) {
      var _this24;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, StockItem);

      _this24 = _possibleConstructorReturn(this, _getPrototypeOf(StockItem).call(this, id, 'stock_items'));
      _this24.sku_code = fields.sku_code;
      _this24.quantity = fields.quantity;
      return _this24;
    } // Relationships


    _createClass(StockItem, [{
      key: "stock_location",
      set: function set(value) {
        _get(_getPrototypeOf(StockItem.prototype), "setResource", this).call(this, 'stock_location', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(StockItem.prototype), "getResource", this).call(this, 'stock_location');
      }
    }, {
      key: "sku",
      set: function set(value) {
        _get(_getPrototypeOf(StockItem.prototype), "setResource", this).call(this, 'sku', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(StockItem.prototype), "getResource", this).call(this, 'sku');
      }
    }]);

    return StockItem;
  }(Resource),
  // StockLevel resource
  StockLevel:
  /*#__PURE__*/
  function (_Resource28) {
    _inherits(StockLevel, _Resource28);

    function StockLevel(id) {
      var _this25;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, StockLevel);

      _this25 = _possibleConstructorReturn(this, _getPrototypeOf(StockLevel).call(this, id, 'stock_levels'));
      _this25.priority = fields.priority;
      _this25.on_hold = fields.on_hold;
      return _this25;
    } // Relationships


    _createClass(StockLevel, [{
      key: "stock_location",
      set: function set(value) {
        _get(_getPrototypeOf(StockLevel.prototype), "setResource", this).call(this, 'stock_location', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(StockLevel.prototype), "getResource", this).call(this, 'stock_location');
      }
    }, {
      key: "inventory_model",
      set: function set(value) {
        _get(_getPrototypeOf(StockLevel.prototype), "setResource", this).call(this, 'inventory_model', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(StockLevel.prototype), "getResource", this).call(this, 'inventory_model');
      }
    }]);

    return StockLevel;
  }(Resource),
  // StockLocation resource
  StockLocation:
  /*#__PURE__*/
  function (_Resource29) {
    _inherits(StockLocation, _Resource29);

    function StockLocation(id) {
      var _this26;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, StockLocation);

      _this26 = _possibleConstructorReturn(this, _getPrototypeOf(StockLocation).call(this, id, 'stock_locations'));
      _this26.name = fields.name;
      _this26.label_format = fields.label_format;
      return _this26;
    } // Relationships


    _createClass(StockLocation, [{
      key: "address",
      set: function set(value) {
        _get(_getPrototypeOf(StockLocation.prototype), "setResource", this).call(this, 'address', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(StockLocation.prototype), "getResource", this).call(this, 'address');
      }
    }]);

    return StockLocation;
  }(Resource),
  // Webhook resource
  Webhook:
  /*#__PURE__*/
  function (_Resource30) {
    _inherits(Webhook, _Resource30);

    function Webhook(id) {
      var _this27;

      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Webhook);

      _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Webhook).call(this, id, 'webhooks'));
      _this27.topic = fields.topic;
      _this27.callback_url = fields.callback_url;
      _this27.include_resources = fields.include_resources;
      return _this27;
    }

    return Webhook;
  }(Resource),
  // WireTransfer resource
  WireTransfer:
  /*#__PURE__*/
  function (_Resource31) {
    _inherits(WireTransfer, _Resource31);

    function WireTransfer(id) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, WireTransfer);

      return _possibleConstructorReturn(this, _getPrototypeOf(WireTransfer).call(this, id, 'wire_transfers'));
    } // Relationships


    _createClass(WireTransfer, [{
      key: "order",
      set: function set(value) {
        _get(_getPrototypeOf(WireTransfer.prototype), "setResource", this).call(this, 'order', value);
      },
      get: function get() {
        return _get(_getPrototypeOf(WireTransfer.prototype), "getResource", this).call(this, 'order');
      }
    }]);

    return WireTransfer;
  }(Resource)
};

/***/ }),

/***/ "./lib/query.js":
/*!**********************!*\
  !*** ./lib/query.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QueryFilter =
/*#__PURE__*/
function () {
  function QueryFilter() {
    _classCallCheck(this, QueryFilter);

    this.clear();
  }

  _createClass(QueryFilter, [{
    key: "clear",
    value: function clear() {
      this.sort_fields = [];
      this.sparse_fieldsets = {};
      this.included_resources = [];
      this.filter_fields = {};
      this.custom_params = {};
      this.page_number = undefined;
      this.page_size = undefined;
      this.query_options = undefined;
    }
  }, {
    key: "isQueryFilter",
    value: function isQueryFilter() {
      return true;
    }
  }, {
    key: "sort",
    value: function sort(field, descending) {
      this.sort_fields.push((descending ? '-' : '').concat(field));
      return this;
    }
  }, {
    key: "fields",
    value: function fields(resource) {
      for (var _len = arguments.length, _fields = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        _fields[_key - 1] = arguments[_key];
      }

      if (_fields != undefined) this.sparse_fieldsets[resource] = _fields;
      return this;
    }
  }, {
    key: "include",
    value: function include() {
      for (var _len2 = arguments.length, resources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        resources[_key2] = arguments[_key2];
      }

      // if (resources != undefined) resources.forEach(res => { this.included_resources.push(res) })
      if (resources != undefined) this.included_resources.push(resources);
      return this;
    }
  }, {
    key: "filter",
    value: function filter(_filter, value) {
      if (_filter != undefined && value != undefined) this.filter_fields[_filter] = value;
      return this;
    }
  }, {
    key: "param",
    value: function param(key, value) {
      if (key != undefined && value != undefined) this.custom_params[key] = value;
      return this;
    }
  }, {
    key: "page",
    value: function page(number, size) {
      this.pageNumber(number);
      this.pageSize(size);
      return this;
    }
  }, {
    key: "pageSize",
    value: function pageSize(size) {
      this.page_size = size;
      return this;
    }
  }, {
    key: "pageNumber",
    value: function pageNumber(number) {
      this.page_number = number;
      return this;
    }
  }, {
    key: "option",
    value: function option(key, value) {
      if (key != undefined && value != undefined) this.query_options[key] = value;
    }
  }, {
    key: "build",
    value: function build(join) {
      var _this = this;

      var qsMap = {}; // Filter Fields

      if (Object.keys(this.filter_fields).length > 0) Object.keys(this.filter_fields).forEach(function (filter) {
        qsMap["filter[".concat(filter, "]")] = _this.filter_fields[filter];
      }); // Included Resources

      if (Object.keys(this.included_resources).length > 0) qsMap.include = this.included_resources.join(','); // Sparse Fieldsets

      if (Object.keys(this.sparse_fieldsets).length > 0) Object.keys(this.sparse_fieldsets).forEach(function (res) {
        qsMap["fields[".concat(res, "]")] = _this.sparse_fieldsets[res].join(',');
      }); // Sort Fields

      if (Object.keys(this.sort_fields).length > 0) qsMap.sort = this.sort_fields.join(','); // Custom Params

      if (Object.keys(this.custom_params).length > 0) Object.keys(this.custom_params).forEach(function (key) {
        qsMap[key] = _this.custom_params[key];
      }); // Pagination

      if (this.page_number != undefined) qsMap['page[number]'] = this.page_number;
      if (this.page_size != undefined) qsMap['page[size]'] = this.page_size;
      return !join ? qsMap : Object.keys(qsMap).map(function (key) {
        return key + '=' + qsMap[key];
      }).join('&');
    }
  }]);

  return QueryFilter;
}();

module.exports = {
  QueryFilter: QueryFilter
};

module.exports.newInstance = function () {
  return new QueryFilter();
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk;

module.exports = {
  log: function log(message) {
    if (sdk.debug && sdk.console) console.log(message == undefined ? '' : message);
  },
  extendMap: function extendMap(map, ext) {
    if (map == undefined) map = {};
    if (ext != undefined) Object.keys(ext).forEach(function (key) {
      map[key] = ext[key];
    });
    return map;
  },
  mergeMaps: function mergeMaps(map1, map2) {
    return _objectSpread({}, map1, map2);
  },
  cloneMap: function cloneMap(map) {
    return map == undefined ? map : _objectSpread({}, map);
  },
  sleep: function sleep(ms, msg) {
    module.exports.log((msg ? "".concat(msg, " - ") : '').concat("waiting ".concat(ms, " msecs ...")));
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  },
  guid: function guid() {
    return (Date.now().toString(36) + '.' + Math.random().toString(36).slice(2).substr(0, 6)).toUpperCase();
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2NsYXllci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2pzb25hcGkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9tb2RlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3F1ZXJ5LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9qc29uLWFwaS1ub3JtYWxpemUvc3JjL2pzb25BcGlOb3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJtb2RlbCIsInF1ZXJ5IiwiY2xpZW50IiwidXRpbHMiLCJqc29uYXBpIiwiQ0xBcGkiLCJmaWx0ZXIiLCJvcHRpb25zIiwicmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJzZXRQYXJhbXMiLCJzZXRPcHRpb25zIiwiaWQiLCJvcmRlciIsInNldEJvZHkiLCJsaW5lX2l0ZW0iLCJjdXN0b21lciIsImN1c3RvbWVyX3N1YnNjcmlwdGlvbiIsImFwaSIsImNsYXBpIiwiaW5pdGlhbGl6ZSIsImNmZyIsImxvZyIsIm5ld0luc3RhbmNlIiwiYXBpUmVxdWVzdCIsImNvcnJlbGF0aW9uX2lkIiwiYXR0ZW1wdCIsInBhdGgiLCJ1bmRlZmluZWQiLCJQcm9taXNlIiwicmVqZWN0IiwibmV3RXJyb3IiLCJib2R5Iiwic2VyaWFsaXplIiwiY2FsbCIsInRoZW4iLCJyZXNwb25zZSIsInJhd19yZXNwb25zZSIsImRhdGEiLCJkZXNlcmlhbGl6ZSIsImNhdGNoIiwiZXJyb3IiLCJlcnJvcnMiLCJhcGlfZXJyb3IiLCJzdGF0dXMiLCJ0aXRsZSIsImRldGFpbCIsImNvZGUiLCJzdGF0dXNUZXh0IiwiZGVzY3JpcHRpb24iLCJtZXNzYWdlIiwiY29uZmlnIiwiZGVmYXVsdCIsIm1lcmdlTWFwcyIsImNsYXllciIsImxhc3RBY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInNldHRpbmdzIiwic2RrIiwiaGV5IiwiYXhpb3MiLCJjaGVja0FwaUNvbmZpZyIsImJhc2VfdXJsIiwibWFya2V0X2lkIiwiY2xpZW50X2lkIiwic2V0QXhpb3NDb25maWciLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGVidWciLCJ0cmFjZSIsImludGVyY2VwdG9ycyIsInVzZSIsIkFwaUNsaWVudCIsIm1ldGhvZCIsIkFwaVJlcXVlc3QiLCJwYXJhbXMiLCJndWlkIiwiaXNRdWVyeUZpbHRlciIsImJ1aWxkIiwicmF3IiwicmF3UmVzcG9uc2UiLCJhdXRoX2F0dGVtcHRzIiwicG9zdCIsImdyYW50X3R5cGUiLCJzY29wZSIsIm1zZyIsImNvbmNhdCIsIm5ld0F0dGVtcHQiLCJiYXNlX3BhdGgiLCJjYWxsVXJsIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInF1ZXJ5U3RyaW5nIiwibWFwIiwia2V5Iiwiam9pbiIsImF4aW9zQ29uZmlnIiwidXJsIiwidGltZW91dCIsImV4dGVuZE1hcCIsIm1heF9hdHRlbXB0cyIsInJldHJ5Iiwic2xlZXAiLCJhdXRoZW50aWNhdGUiLCJBdXRob3JpemF0aW9uIiwiY291bnRyeV9jb2RlIiwibGFuZ3VhZ2VfY29kZSIsImNvbnNvbGUiLCJub3JtYWxpemUiLCJKc29uQXBpUmVzb3VyY2UiLCJyZXNvdXJjZSIsImF0dHJpYnV0ZXMiLCJmb3JFYWNoIiwiZmllbGQiLCJpbmNsdWRlcyIsImlzQXBpUmVzb3VyY2UiLCJyZWxhdGlvbnNoaXBzIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsInR5cGUiLCJSZXNvdXJjZSIsInJlZmVyZW5jZSIsIm1ldGFkYXRhIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJyZXMiLCJBZGRyZXNzIiwiZmllbGRzIiwiYnVzaW5lc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiY29tcGFueSIsImxpbmVfMSIsImxpbmVfMiIsImNpdHkiLCJ6aXBfY29kZSIsInN0YXRlX2NvZGUiLCJwaG9uZSIsImVtYWlsIiwibm90ZXMiLCJsYXQiLCJsbmciLCJiaWxsaW5nX2luZm8iLCJ2YWx1ZSIsIkNyZWRpdENhcmQiLCJudW1iZXIiLCJtb250aCIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJDdXN0b21lciIsIkN1c3RvbWVyQWRkcmVzcyIsIm5hbWUiLCJDdXN0b21lckdyb3VwIiwiQ3VzdG9tZXJQYXNzd29yZFJlc2V0IiwiY3VzdG9tZXJfZW1haWwiLCJDdXN0b21lclBheW1lbnRTb3VyY2UiLCJEZWxpdmVyeUxlYWRUaW1lIiwibWluX2hvdXJzIiwibWF4X2hvdXJzIiwiSW1wb3J0IiwicmVzb3VyY2VfdHlwZSIsInBhcmVudF9yZXNvdXJjZV9pZCIsImlucHV0cyIsImNsZWFudXBfcmVjb3JkcyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW0iLCJza3VfY29kZSIsInF1YW50aXR5IiwidXBkYXRlX3F1YW50aXR5IiwiX3VwZGF0ZV9xdWFudGl0eSIsImltYWdlX3VybCIsIml0ZW0iLCJMaW5lSXRlbU9wdGlvbiIsIk1hcmtldCIsImZhY2Vib29rX3BpeGVsX2lkIiwiTWVyY2hhbnQiLCJPcmRlciIsImd1ZXN0IiwiY3VzdG9tZXJfcGFzc3dvcmQiLCJzaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayIsImNvdXBvbl9jb2RlIiwiY2FydF91cmwiLCJyZXR1cm5fdXJsIiwidGVybXNfdXJsIiwicHJpdmFjeV91cmwiLCJQYXJjZWwiLCJ3ZWlnaHQiLCJ1bml0X29mX3dlaWdodCIsImVlbF9wZmMiLCJjb250ZW50c190eXBlIiwiY29udGVudHNfZXhwbGFuYXRpb24iLCJjdXN0b21zX2NlcnRpZnkiLCJjdXN0b21zX3NpZ25lciIsIm5vbl9kZWxpdmVyeV9vcHRpb24iLCJyZXN0cmljdGlvbl90eXBlIiwicmVzdHJpY3Rpb25fY29tbWVudHMiLCJjdXN0b21zX2luZm9fcmVxdWlyZWQiLCJQYXltZW50TWV0aG9kIiwicGF5bWVudF9zb3VyY2VfdHlwZSIsInByaWNlX2Ftb3VudF9jZW50cyIsIlBheXBhbFBheW1lbnQiLCJjYW5jZWxfdXJsIiwibm90ZV90b19wYXllciIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJQcmljZUxpc3QiLCJjdXJyZW5jeV9jb2RlIiwidGF4X2luY2x1ZGVkIiwiU2hpcG1lbnQiLCJTaGlwcGluZ0NhdGVnb3J5IiwiU2hpcHBpbmdNZXRob2QiLCJmcmVlX292ZXJfYW1vdW50X2NlbnRzIiwiU2hpcHBpbmdab25lIiwiY291bnRyeV9jb2RlX3JlZ2V4Iiwibm90X2NvdW50cnlfY29kZV9yZWdleCIsInN0YXRlX2NvZGVfcmVnZXgiLCJub3Rfc3RhdGVfY29kZV9yZWdleCIsInppcF9jb2RlX3JlZ2V4Iiwibm90X3ppcF9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU2t1T3B0aW9uIiwiZGVsYXlfaG91cnMiLCJza3VfY29kZV9yZWdleCIsIlN0b2NrSXRlbSIsIlN0b2NrTGV2ZWwiLCJwcmlvcml0eSIsIm9uX2hvbGQiLCJTdG9ja0xvY2F0aW9uIiwibGFiZWxfZm9ybWF0IiwiV2ViaG9vayIsInRvcGljIiwiY2FsbGJhY2tfdXJsIiwiaW5jbHVkZV9yZXNvdXJjZXMiLCJXaXJlVHJhbnNmZXIiLCJRdWVyeUZpbHRlciIsImNsZWFyIiwic29ydF9maWVsZHMiLCJzcGFyc2VfZmllbGRzZXRzIiwiaW5jbHVkZWRfcmVzb3VyY2VzIiwiZmlsdGVyX2ZpZWxkcyIsImN1c3RvbV9wYXJhbXMiLCJwYWdlX251bWJlciIsInBhZ2Vfc2l6ZSIsInF1ZXJ5X29wdGlvbnMiLCJkZXNjZW5kaW5nIiwicHVzaCIsInJlc291cmNlcyIsInNpemUiLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJxc01hcCIsImluY2x1ZGUiLCJzb3J0IiwiZXh0IiwibWFwMSIsIm1hcDIiLCJjbG9uZU1hcCIsIm1zIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxtQkFBTyxDQUFDLHFDQUFELENB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJjb21tZXJjZWxheWVyLXNkay5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvY2xheWVyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMucXVlcnkgPSByZXF1aXJlKCcuL2xpYi9xdWVyeScpIiwiY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBqc29uYXBpID0gcmVxdWlyZSgnLi9qc29uYXBpJylcclxuXHJcblxyXG4gY2xhc3MgQ0xBcGkge1xyXG5cclxuICAgIC8vIFNrdXNcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IGZpbHRlciBcclxuICAgICAqL1xyXG4gICAgbGlzdFNrdXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N9IGlkIFxyXG4gICAgICogQHBhcmFtIHsqfSBmaWx0ZXIgXHJcbiAgICAgKi9cclxuICAgIHJldHJpZXZlU2t1KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpY2VzXHJcbiAgICBsaXN0UHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlUHJpY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b2NrIEl0ZW1zXHJcbiAgICBsaXN0U3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlU3RvY2tJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGl2ZXJ5IExlYWQgVGltZXNcclxuICAgIGxpc3REZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVEZWxpdmVyeUxlYWRUaW1lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hpcHBpbmcgTWV0aG9kc1xyXG4gICAgbGlzdFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlU2hpcHBpbmdNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXltZW50IE1ldGhvZHNcclxuICAgIGxpc3RQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXltZW50X21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZVBheW1lbnRNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9yZGVyc1xyXG4gICAgbGlzdE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZU9yZGVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPcmRlcihvcmRlcikge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycsICdwb3N0Jykuc2V0Qm9keShvcmRlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExpbmUgSXRlbXNcclxuICAgIGxpc3RMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlTGluZUl0ZW0oaWQsIGZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMaW5lSXRlbShsaW5lX2l0ZW0pIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpbmVJdGVtKGlkLCBsaW5lX2l0ZW0pIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShsaW5lX2l0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVMaW5lSXRlbShpZCkge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEN1c3RvbWVyc1xyXG4gICAgY3JlYXRlQ3VzdG9tZXIoY3VzdG9tZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDdXN0b21lciBTdWJzY3JpcHRpb25zXHJcbiAgICBjcmVhdGVDdXN0b21lclN1YnNjcmlwdGlvbihjdXN0b21lcl9zdWJzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3N1YnNjcmlwdGlvbikpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxudmFyIGFwaSA9IG5ldyBDTEFwaSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuY2xhcGkgPSBhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgdXRpbHMubG9nKCdhcGkgY2xpZW50IGluaXRpYWxpemVkIHdpdGggY29uZmlnOicpO1xyXG4gICAgdXRpbHMubG9nKGNmZyk7XHJcbiAgICBhcGkuY2xpZW50ID0gIGNsaWVudC5uZXdJbnN0YW5jZShjZmcpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgdXRpbHMubG9nKGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGNhbGxpbmcgJHthcGlSZXF1ZXN0LnBhdGh9IC4uLmApO1xyXG5cclxuICAgIGlmIChhcGkuY2xpZW50ID09IHVuZGVmaW5lZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKHVuZGVmaW5lZCwgJ2FwaSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgYm9keSA9IGpzb25hcGkuc2VyaWFsaXplKGFwaVJlcXVlc3QuYm9keSk7XHJcbiAgICAgICAgYXBpUmVxdWVzdC5zZXRCb2R5KGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBhcGkuY2xpZW50LmNhbGwoYXBpUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gYXBpUmVxdWVzdC5yYXdfcmVzcG9uc2U/IHJlc3BvbnNlLmRhdGEgOiBqc29uYXBpLmRlc2VyaWFsaXplKHJlc3BvbnNlLmRhdGEpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvci5yZXNwb25zZSkgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlfZXJyb3IgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IoYXBpX2Vycm9yLnN0YXR1cywgYXBpX2Vycm9yLnRpdGxlLCBhcGlfZXJyb3IuZGV0YWlsLCBhcGlfZXJyb3IuY29kZSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdFcnJvcihzdGF0dXMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlLCBjb2RlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yIDogdHJ1ZSxcclxuICAgICAgICBzdGF0dXMgOiBzdGF0dXMsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBtZXNzYWdlIDogbWVzc2FnZSxcclxuICAgICAgICBjb2RlIDogY29kZVxyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGFwaSA9IHJlcXVpcmUoJy4vYXBpJylcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5cclxuLy8gRXhwb3NlIGFsbCBhcGkgZnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzID0gYXBpLmNsYXBpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IChjZmcpID0+IHtcclxuICAgIGlmIChjZmcgIT0gdW5kZWZpbmVkKSBjZmcuZGVmYXVsdCA9IGZhbHNlO1xyXG4gICAgYXBpLmluaXRpYWxpemUodXRpbHMubWVyZ2VNYXBzKGNvbmZpZy5jbGF5ZXIsIGNmZykpXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmxhc3RBY2Nlc3NUb2tlbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkuY2xhcGkuY2xpZW50LmNvbmZpZy5hY2Nlc3NfdG9rZW47XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLnNldHRpbmdzID0gY29uZmlnLnNkaztcclxuXHJcbm1vZHVsZS5leHBvcnRzLmhleSA9ICgpID0+IHsgcmV0dXJuICdIZWxsbyEnIH1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5jb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0FwaUNvbmZpZyhjb25maWcpIHtcclxuXHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyB2ZXJpZmljYXRpb24uLi4nKVxyXG5cclxuICAgIGlmIChjb25maWcgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjb25maWcnO1xyXG4gICAgaWYgKGNvbmZpZy5iYXNlX3VybCA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGJhc2VfdXJsJztcclxuICAgIGlmIChjb25maWcubWFya2V0X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgbWFya2V0X2lkJztcclxuICAgIGlmIChjb25maWcuY2xpZW50X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgY2xpZW50X2lkJztcclxuXHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyBvay4nKVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEF4aW9zQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBjb25maWcuYmFzZV91cmw7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQWNjZXB0J10gPSAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJztcclxuXHJcbiAgICBpZiAoc2RrLmRlYnVnICYmIHNkay50cmFjZSkge1xyXG5cclxuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2coJ1JFUVVFU1QgLS0+Jyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhyZXF1ZXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnPC0tIFJFU1BPTlNFJyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG5ld0luc3RhbmNlIDogZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkFwaUNsaWVudChjb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBuZXdSZXF1ZXN0IDogZnVuY3Rpb24ocGF0aCwgbWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkFwaVJlcXVlc3QocGF0aCwgbWV0aG9kKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIEFwaVJlcXVlc3QgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHBhdGggPSAnLycsIG1ldGhvZCA9ICdnZXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IHBhdGggfHwgJy8nO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZCB8fCAnZ2V0JztcclxuICAgICAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgIC8vIC0tLS0gLS0tLSAtLS0tIC0tLS1cclxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWxhdGlvbl9pZCA9IHV0aWxzLmd1aWQoKTtcclxuICAgICAgICAgICAgdGhpcy5yYXdfcmVzcG9uc2UgPSBzZGsucmF3X3Jlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGF0aChwYXRoKSB7IHRoaXMucGF0aCA9IHBhdGg7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0UGFyYW1zKHBhcmFtcykgeyB0aGlzLnBhcmFtcyA9IChwYXJhbXMgJiYgcGFyYW1zLmlzUXVlcnlGaWx0ZXIgJiYgKHBhcmFtcy5pc1F1ZXJ5RmlsdGVyKCkgPT09IHRydWUpKT8gcGFyYW1zLmJ1aWxkKCkgOiBwYXJhbXM7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0TWV0aG9kKG1ldGhvZCkgeyB0aGlzLm1ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRCb2R5KGJvZHkpIHsgdGhpcy5ib2R5ID0gYm9keTsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRIZWFkZXJzKGhlYWRlcnMpIHsgdGhpcy5oZWFkZXJzID0gaGVhZGVyczsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgbmV3QXR0ZW1wdCgpIHsgdGhpcy5hdHRlbXB0Kys7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3QgT3B0aW9uc1xyXG4gICAgICAgIHJhd1Jlc3BvbnNlKHJhdykgeyB0aGlzLnJhd19yZXNwb25zZSA9IHJhdz8gcmF3IDogc2RrLnJhd19yZXNwb25zZTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gT25seSByZWFsbHkgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGJlaW5nIHNldHRlZFxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJhd1Jlc3BvbnNlKG9wdGlvbnMucmF3X3Jlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAgICAgY2hlY2tBcGlDb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnbWFya2V0OicgKyB0aGlzLmNvbmZpZy5tYXJrZXRfaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbGwoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVzc2FnZShtc2cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZD8gYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gYCA6ICcnKS5jb25jYXQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3QubmV3QXR0ZW1wdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZV9wYXRoID0gKCh0aGlzLmNvbmZpZy5iYXNlX3BhdGggIT0gdW5kZWZpbmVkKT8gdGhpcy5jb25maWcuYmFzZV9wYXRoIDogJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSAodG8gYmUgcmVtb3ZlZClcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VfcGF0aCArIGFwaVJlcXVlc3QucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gYXBpUmVxdWVzdC5wYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGFwaVJlcXVlc3QubWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcXVlcnlTdHJpbmdcclxuICAgICAgICAgICAgbGV0IGNhbGxVcmwgPSBwYXRoO1xyXG4gICAgICAgICAgICBpZiAoKHBhcmFtcyAhPSB1bmRlZmluZWQpICYmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbXNba2V5XVxyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbFVybCA9IGNhbGxVcmwuY29uY2F0KCc/JykuY29uY2F0KHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjYWxsVXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZGsudGltZW91dC5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2UgY3VzdG9tIGFuZCBkZWZhdWx0IGhlYWRlcnNcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kTWFwKGF4aW9zQ29uZmlnLmhlYWRlcnMsIGFwaVJlcXVlc3QuaGVhZGVycyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2R5XHJcbiAgICAgICAgICAgIGlmIChhcGlSZXF1ZXN0LmJvZHkgIT0gdW5kZWZpbmVkKSBheGlvc0NvbmZpZy5kYXRhID0gYXBpUmVxdWVzdC5ib2R5O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF4X2F0dGVtcHRzID0gc2RrLmF1dGhfYXR0ZW1wdHM/IHNkay5hdXRoX2F0dGVtcHRzIDogMTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgYXV0aGVudGljYXRlZCBleGVjdXRlIGF1dGhlbnRpY2F0aW9uIHRoZW4gcmUtZXhlY3V0ZSBjYWxsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYWNjZXNzX3Rva2VuIG51bGwsIGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5hdXRoX2F0dGVtcHRzID4gbWF4X2F0dGVtcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZGsudGltZW91dC5yZXRyeSkgdGhyb3cgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgYXV0aGVudGljYXRpb24gYXR0ZW1wdHMgKCR7bWF4X2F0dGVtcHRzfSkgYW5kIG5vIHJldHJ5IHRpbWVvdXQgY29uZmlndXJlZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5zbGVlcChzZGsudGltZW91dC5yZXRyeSwgbWVzc2FnZSgnYW5vdGhlciBhdXRoIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4geyByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGUoKS50aGVuKGFjY2Vzc190b2tlbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnZXhlY3V0aW5nIGFwaSBjYWxsIC4uLicpKTtcclxuICAgICAgICAgICAgICAgIGF4aW9zQ29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zQ29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FwaSBjYWxsIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKGVycm9yPyBlcnJvciA6ICdlcnJvciBkZXRlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdFQ09OTkFCT1JURUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgndGltZW91dCBleGNlcHRpb246JyArIGVycm9yLmNvbmZpZy50aW1lb3V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBpIGVycm9uZW91c2x5IHJldHVybiBjb2RlIDQwMSBpbnN0ZWFkIG9mIGNvZGUgNDAzIGZvciBVTkFVVEhPUklaRUQgY2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICYmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5jb2RlID09ICdJTlZBTElEX1RPS0VOJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdpbnZhbGlkIHRva2VuLCBhY2Nlc3MgZGVuaWVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuZmluYWxseSgoKSA9PiB7IHV0aWxzLmxvZygnZW5kIG9mIGFwaSBjYWxsLicpOyB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgY2xheWVyOiB7XHJcblxyXG4gICAgICAgIGRlZmF1bHQgOiB0cnVlLFxyXG4gIFxyXG4gICAgICAgIGNsaWVudF9pZCA6ICczNTEwMjBlOWM4NGYyMDc2NzU1MDgzZjA4YmZlOGU0NzM2NWE3NjM5NWRiMTA1OWMzMjE5YzM3YWJmZjg2NTM0JyxcclxuICAgICAgICBtYXJrZXRfaWQgOiAnMTg1JyxcclxuICAgICAgICBiYXNlX3VybCA6IFwiaHR0cHM6Ly9zdGF0aWMtY29tbWVyY2UuY29tbWVyY2VsYXllci5pb1wiLFxyXG4gICAgICAgIGJhc2VfcGF0aCA6IG51bGwsXHJcbiAgICAgICAgY291bnRyeV9jb2RlIDogJ1VTJyxcclxuICAgICAgICBsYW5ndWFnZV9jb2RlIDogJ2VuJyxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNkazoge1xyXG4gICAgICAgIGRlYnVnICAgICAgICAgICA6IGZhbHNlLCAgICAvLyBkZWJ1ZyBtb2RlIGFjdGl2YXRlZFxyXG4gICAgICAgIGNvbnNvbGUgICAgICAgICA6IGZhbHNlLCAgICAvLyBsb2cgdG8gY29uc29sZSBlbmFibGVkXHJcbiAgICAgICAgdHJhY2UgICAgICAgICAgIDogZmFsc2UsICAgIC8vIHRyYWNlIGNsaWVudCBpbnB1dC9vdXRwdXQgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAvLyBudW1iZXIgb2YgYXR0ZW1wdHMgb2YgYXV0aGVudGljYXRpb25cclxuICAgICAgICByYXdfcmVzcG9uc2UgICAgOiBmYWxzZSwgICAgLy8gZ2V0IHJlc3BvbnNlIGluIEpTT04tQXBpIGZvcm1hdCB3aXRob3V0IGRlc2VyaWFsaXphdGlvblxyXG4gICAgICAgIHRpbWVvdXQgOiB7IC8vIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAgICByZXRyeSA6IDI1MCwgICAgLy8gcmV0cnkgYWZ0ZXIgYXV0aGVudGljYXRpb24gcmVxdWVzdCBpbiBwcm9ncmVzcyBkZXRlY3RlZFxyXG4gICAgICAgICAgICByZXF1ZXN0IDogMjAwMCAgLy8gY2xpZW50IHJlcXVlc3QgdGltZW91dFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiY29uc3Qgbm9ybWFsaXplID0gcmVxdWlyZSgnanNvbi1hcGktbm9ybWFsaXplJylcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zZXJpYWxpemUgPSAoYm9keSkgPT4ge1xyXG4gICAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSByZXR1cm4gYm9keTtcclxuICAgIGVsc2UgcmV0dXJuIChib2R5LmRhdGEgPT0gdW5kZWZpbmVkKT8gbmV3IEpzb25BcGlSZXNvdXJjZShib2R5KS5zZXJpYWxpemUoKSA6IGJvZHk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5kZXNlcmlhbGl6ZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplKGRhdGEpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMubm9ybWFsaXplID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBub3JtYWxpemUoZGF0YSk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBKc29uQXBpUmVzb3VyY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlID0ge30pIHtcclxuXHJcbiAgICAgICAgaWYgKHJlc291cmNlICE9IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hdHRyaWJ1dGVzID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBwb3J0YXJlIGlkIGUgdHlwZSBpbiB0ZXN0YSBhZCBvZ25pIG9iamVjdFxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSByZXNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChbJ2lkJywgJ3R5cGUnXS5pbmNsdWRlcyhrZXkpKSB0aGlzLmRhdGFba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuaXNBcGlSZXNvdXJjZSAmJiBmaWVsZC5pc0FwaVJlc291cmNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHNba2V5LnN0YXJ0c1dpdGgoJ19fJyk/IGtleS5zdWJzdHIoJ19fJy5sZW5ndGgpIDoga2V5XSA9IHsgZGF0YTogeyB0eXBlOiBmaWVsZC50eXBlLCBpZDogZmllbGQuaWQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGF0YS5hdHRyaWJ1dGVzW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbi8vIEJhc2ljIEFic3RyYWN0IFJlc291cmNlXHJcbmNsYXNzIFJlc291cmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaXNBcGlSZXNvdXJjZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHNldFJlc291cmNlKGZpZWxkLCByZXMpIHsgaWYgKChyZXMgIT0gdW5kZWZpbmVkKSAmJiByZXMuaXNBcGlSZXNvdXJjZSAmJiByZXMuaXNBcGlSZXNvdXJjZSgpKSB0aGlzWydfXycuY29uY2F0KGZpZWxkKV0gPSByZXM7IH1cclxuICAgIGdldFJlc291cmNlKGZpZWxkKSB7IHJldHVybiB0aGlzWydfXycuY29uY2F0KGZpZWxkKV07IH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIC8vIEFkZHJlc3MgcmVzb3VyY2VcclxuICAgIEFkZHJlc3MgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdhZGRyZXNzZXMnKTtcclxuICAgICAgICAgICAgdGhpcy5idXNpbmVzcyA9IGZpZWxkcy5idXNpbmVzcztcclxuICAgICAgICAgICAgdGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jb21wYW55ID0gZmllbGRzLmNvbXBhbnk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZV8xID0gZmllbGRzLmxpbmVfMTtcclxuICAgICAgICAgICAgdGhpcy5saW5lXzIgPSBmaWVsZHMubGluZV8yO1xyXG4gICAgICAgICAgICB0aGlzLmNpdHkgPSBmaWVsZHMuY2l0eTtcclxuICAgICAgICAgICAgdGhpcy56aXBfY29kZSA9IGZpZWxkcy56aXBfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZV9jb2RlID0gZmllbGRzLnN0YXRlX2NvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRyeV9jb2RlID0gZmllbGRzLmNvdW50cnlfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5waG9uZSA9IGZpZWxkcy5waG9uZTtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IGZpZWxkcy5ub3RlcztcclxuICAgICAgICAgICAgdGhpcy5sYXQgPSBmaWVsZHMubGF0O1xyXG4gICAgICAgICAgICB0aGlzLmxuZyA9IGZpZWxkcy5sbmc7XHJcbiAgICAgICAgICAgIHRoaXMuYmlsbGluZ19pbmZvID0gZmllbGRzLmJpbGxpbmdfaW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBnZW9jb2Rlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnZ2VvY29kZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBnZW9jb2RlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdnZW9jb2RlcicpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIENyZWRpdENhcmQgcmVzb3VyY2VcclxuICAgIENyZWRpdENhcmQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdjcmVkaXRfY2FyZHMnKTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5udW1iZXIgPSBmaWVsZHMubnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gZmllbGRzLm1vbnRoO1xyXG4gICAgICAgICAgICB0aGlzLnllYXIgPSBmaWVsZHMueWVhcjtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXRpb25fdmFsdWUgPSBmaWVsZHMudmVyaWZpY2F0aW9uX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gQ3VzdG9tZXIgcmVzb3VyY2VcclxuICAgIEN1c3RvbWVyIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnY3VzdG9tZXJzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgY3VzdG9tZXJfZ3JvdXAodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyX2dyb3VwJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgY3VzdG9tZXJfZ3JvdXAoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXJfZ3JvdXAnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBDdXN0b21lckFkZHJlc3MgcmVzb3VyY2VcclxuICAgIEN1c3RvbWVyQWRkcmVzcyA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2N1c3RvbWVyX2FkZHJlc3NlcycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuICAgICAgICBzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBDdXN0b21lckdyb3VwIHJlc291cmNlXHJcbiAgICBDdXN0b21lckdyb3VwIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnY3VzdG9tZXJfZ3JvdXBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIEN1c3RvbWVyUGFzc3dvcmRSZXNldCByZXNvdXJjZVxyXG4gICAgQ3VzdG9tZXJQYXNzd29yZFJlc2V0IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gQ3VzdG9tZXJQYXltZW50U291cmNlXHJcbiAgICBDdXN0b21lclBheW1lbnRTb3VyY2UgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdjdXN0b21lcl9wYXltZW50X3NvdXJjZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuICAgICAgICBzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBEZWxpdmVyeUxlYWRUaW1lIHJlc291cmNlXHJcbiAgICBEZWxpdmVyeUxlYWRUaW1lIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnZGVsaXZlcnlfbGVhZF90aW1lcycpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbl9ob3VycyA9IGZpZWxkcy5taW5faG91cnM7XHJcbiAgICAgICAgICAgIHRoaXMubWF4X2hvdXJzID0gZmllbGRzLm1heF9ob3VycztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuICAgICAgICBzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBzaGlwcGluZ19tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gSW1wb3J0IHJlc291cmNlXHJcbiAgICBJbXBvcnQgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdpbXBvcnRzJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VfdHlwZSA9IGZpZWxkcy5yZXNvdXJjZV90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudF9yZXNvdXJjZV9pZCA9IGZpZWxkcy5wYXJlbnRfcmVzb3VyY2VfaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRzID0gZmllbGRzLmlucHV0cztcclxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwX3JlY29yZHMgPSBmaWVsZHMuY2xlYW51cF9yZWNvcmRzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIEludmVudG9yeU1vZGVsIHJlc291cmNlXHJcbiAgICBJbnZlbnRvcnlNb2RlbCA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2ludmVudG9yeV9tb2RlbHMnKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIC8vIExpbmVJdGVtIHJlc291cmNlXHJcbiAgICBMaW5lSXRlbSA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ2xpbmVfaXRlbXMnKTtcclxuICAgICAgICAgICAgdGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcXVhbnRpdHkgPSBmaWVsZHMuX3VwZGF0ZV9xdWFudGl0eTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuICAgICAgICAgICAgdGhpcy5vcmRlciA9IGZpZWxkcy5vcmRlcjtcclxuICAgICAgICAgICAgdGhpcy5pdGVtID0gZmllbGRzLml0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCB1cGRhdGVfcXVhbnRpdHkodmFsdWUpIHsgdGhpcy5fdXBkYXRlX3F1YW50aXR5ID0gdmFsdWU/ICcxJyA6IG51bGw7IH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTGluZUl0ZW1PcHRpb24gcmVzb3VyY2VcclxuICAgIExpbmVJdGVtT3B0aW9uIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnbGluZV9pdGVtX29wdGlvbnMnKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGZpZWxkcy5vcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IGxpbmVfaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbGluZV9pdGVtJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgbGluZV9pdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScpIH1cclxuICAgICAgICBzZXQgc2t1X29wdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1X29wdGlvbicsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNrdV9vcHRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1X29wdGlvbicpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIE1hcmtldCByZXNvdXJjZVxyXG4gICAgTWFya2V0IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnbWFya2V0cycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5mYWNlYm9va19waXhlbF9pZCA9IGZpZWxkcy5mYWNlYm9va19waXhlbF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBtZXJjaGFudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWVyY2hhbnQnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBtZXJjaGFudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtZXJjaGFudCcpIH1cclxuICAgICAgICBzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuICAgICAgICBzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTWVyY2hhbnQgcmVzb3VyY2VcclxuICAgIE1lcmNoYW50IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnbWVyY2hhbnRzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBPcmRlciByZXNvdXJjZVxyXG4gICAgT3JkZXIgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdvcmRlcnMnKTtcclxuICAgICAgICAgICAgdGhpcy5ndWVzdCA9IGZpZWxkcy5ndWVzdDtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZV9jb2RlID0gZmllbGRzLmxhbmd1YWdlX2NvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2sgPSBmaWVsZHMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2s7XHJcbiAgICAgICAgICAgIHRoaXMuY291cG9uX2NvZGUgPSBmaWVsZHMuY291cG9uX2NvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydF91cmwgPSBmaWVsZHMuY2FydF91cmw7XHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG4gICAgICAgICAgICB0aGlzLnRlcm1zX3VybCA9IGZpZWxkcy50ZXJtc191cmw7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeV91cmwgPSBmaWVsZHMucHJpdmFjeV91cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG4gICAgICAgIHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuICAgICAgICBzZXQgc2hpcHBpbmdfYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNoaXBwaW5nX2FkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfYWRkcmVzcycpIH1cclxuICAgICAgICBzZXQgYmlsbGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBiaWxsaW5nX2FkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYmlsbGluZ19hZGRyZXNzJykgfVxyXG4gICAgICAgIHNldCBwYXltZW50X21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9tZXRob2QnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBwYXltZW50X21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcpIH1cclxuICAgICAgICBzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBQYXJjZWwgcmVzb3VyY2VcclxuICAgIFBhcmNlbCA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3BhcmNlbHMnKTtcclxuICAgICAgICAgICAgdGhpcy53ZWlnaHQgPSBmaWVsZHMud2VpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmVlbF9wZmMgPSBmaWVsZHMuZWVsX3BmYztcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50c190eXBlID0gZmllbGRzLmNvbnRlbnRzX3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudHNfZXhwbGFuYXRpb24gPSBmaWVsZHMuY29udGVudHNfZXhwbGFuYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tc19jZXJ0aWZ5ID0gZmllbGRzLmN1c3RvbXNfY2VydGlmeTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21zX3NpZ25lciA9IGZpZWxkcy5jdXN0b21zX3NpZ25lcjtcclxuICAgICAgICAgICAgdGhpcy5ub25fZGVsaXZlcnlfb3B0aW9uID0gZmllbGRzLm5vbl9kZWxpdmVyeV9vcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMucmVzdHJpY3Rpb25fdHlwZSA9IGZpZWxkcy5yZXN0cmljdGlvbl90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RyaWN0aW9uX2NvbW1lbnRzID0gZmllbGRzLnJlc3RyaWN0aW9uX2NvbW1lbnRzO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbXNfaW5mb19yZXF1aXJlZCA9IGZpZWxkcy5jdXN0b21zX2luZm9fcmVxdWlyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgc2hpcG1lbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBtZW50JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgc2hpcG1lbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcG1lbnQnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBQYXltZW50TWV0aG9kIHJlc291cmNlXHJcbiAgICBQYXltZW50TWV0aG9kIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAncGF5bWVudF9tZXRob2RzJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGF5bWVudF9zb3VyY2VfdHlwZSA9IGZpZWxkcy5wYXltZW50X3NvdXJjZV90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG4gICAgICAgIHNldCBwYXltZW50X2dhdGV3YXkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHBheW1lbnRfZ2F0ZXdheSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBQYXlwYWxQYXltZW50IHJlc291cmNlXHJcbiAgICBQYXlwYWxQYXltZW50IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAncGF5cGFsX3BheW1lbnRzJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbF91cmwgPSBmaWVsZHMuY2FuY2VsX3VybDtcclxuICAgICAgICAgICAgdGhpcy5ub3RlX3RvX3BheWVyID0gZmllbGRzLm5vdGVfdG9fcGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgICAgICBzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBQcmljZSByZXNvdXJjZVxyXG4gICAgUHJpY2UgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdwcmljZXMnKTtcclxuICAgICAgICAgICAgdGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5hbW91bnRfY2VudHMgPSBmaWVsZHMuYW1vdW50X2NlbnRzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzID0gZmllbGRzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcbiAgICAgICAgc2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFByaWNlTGlzdCByZXNvdXJjZVxyXG4gICAgUHJpY2VMaXN0IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAncHJpY2VfbGlzdHMnKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVuY3lfY29kZSA9IGZpZWxkcy5jdXJyZW5jeV9jb2RlO1xyXG4gICAgICAgICAgICB0aGlzLnRheF9pbmNsdWRlZCA9IGZpZWxkcy50YXhfaW5jbHVkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU2hpcG1lbnQgcmVzb3VyY2VcclxuICAgIFNoaXBtZW50IDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc2hpcG1lbnRzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU2hpcHBpbmdDYXRlZ29yeSByZXNvdXJjZVxyXG4gICAgU2hpcHBpbmdDYXRlZ29yeSA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3NoaXBwaW5nX2NhdGVnb3JpZXMnKTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU2hpcHBpbmdNZXRob2QgcmVzb3VyY2VcclxuICAgIFNoaXBwaW5nTWV0aG9kIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc2hpcHBpbmdfbWV0aG9kcycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG4gICAgICAgICAgICB0aGlzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHMgPSBmaWVsZHMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbiAgICAgICAgc2V0IHNoaXBwaW5nX3pvbmUodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBzaGlwcGluZ196b25lKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnKSB9XHJcbiAgICAgICAgc2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU2hpcHBpbmdab25lIHJlc291cmNlXHJcbiAgICBTaGlwcGluZ1pvbmUgOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdzaGlwcGluZ196b25lcycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMuY291bnRyeV9jb2RlX3JlZ2V4O1xyXG4gICAgICAgICAgICB0aGlzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMubm90X2NvdW50cnlfY29kZV9yZWdleDtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZV9jb2RlX3JlZ2V4ID0gZmllbGRzLnN0YXRlX2NvZGVfcmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMubm90X3N0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3N0YXRlX2NvZGVfcmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMuemlwX2NvZGVfcmVnZXggPSBmaWVsZHMuemlwX2NvZGVfcmVnZXg7XHJcbiAgICAgICAgICAgIHRoaXMubm90X3ppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF96aXBfY29kZV9yZWdleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBTa3UgcmVzb3VyY2VcclxuICAgIFNrdSA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3NrdXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gZmllbGRzLmNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZmllbGRzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcbiAgICAgICAgICAgIHRoaXMudGFnX25hbWVzID0gZmllbGRzLnRhZ19uYW1lcztcclxuICAgICAgICAgICAgdGhpcy5waWVjZXNfcGVyX3BhY2sgPSBmaWVsZHMucGllY2VzX3Blcl9wYWNrO1xyXG4gICAgICAgICAgICB0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcbiAgICAgICAgZ2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU2t1T3B0aW9uIHJlc291cmNlXHJcbiAgICBTa3VPcHRpb24gOiBjbGFzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoaWQsICdza3Vfb3B0aW9ucycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5X2hvdXJzID0gZmllbGRzLmRlbGF5X2hvdXJzO1xyXG4gICAgICAgICAgICB0aGlzLnNrdV9jb2RlX3JlZ2V4ID0gZmllbGRzLnNrdV9jb2RlX3JlZ2V4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuICAgICAgICBnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFN0b2NrSXRlbSByZXNvdXJjZVxyXG4gICAgU3RvY2tJdGVtIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnc3RvY2tfaXRlbXMnKTtcclxuICAgICAgICAgICAgdGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuICAgICAgICBzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU3RvY2tMZXZlbCByZXNvdXJjZVxyXG4gICAgU3RvY2tMZXZlbCA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3N0b2NrX2xldmVscycpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gZmllbGRzLnByaW9yaXR5O1xyXG4gICAgICAgICAgICB0aGlzLm9uX2hvbGQgPSBmaWVsZHMub25faG9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuICAgICAgICBzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gU3RvY2tMb2NhdGlvbiByZXNvdXJjZVxyXG4gICAgU3RvY2tMb2NhdGlvbiA6IGNsYXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcihpZCwgJ3N0b2NrX2xvY2F0aW9ucycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9mb3JtYXQgPSBmaWVsZHMubGFiZWxfZm9ybWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICAgICAgc2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBXZWJob29rIHJlc291cmNlXHJcbiAgICBXZWJob29rIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnd2ViaG9va3MnKTtcclxuICAgICAgICAgICAgdGhpcy50b3BpYyA9IGZpZWxkcy50b3BpYztcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja191cmwgPSBmaWVsZHMuY2FsbGJhY2tfdXJsO1xyXG4gICAgICAgICAgICB0aGlzLmluY2x1ZGVfcmVzb3VyY2VzID0gZmllbGRzLmluY2x1ZGVfcmVzb3VyY2VzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIFdpcmVUcmFuc2ZlciByZXNvdXJjZVxyXG4gICAgV2lyZVRyYW5zZmVyIDogY2xhc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCAnd2lyZV90cmFuc2ZlcnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgICAgIGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxuICAgIH1cclxuXHJcbn0iLCJcclxuY2xhc3MgUXVlcnlGaWx0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5zcGFyc2VfZmllbGRzZXRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcl9maWVsZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmN1c3RvbV9wYXJhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucGFnZV9zaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucXVlcnlfb3B0aW9ucyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1F1ZXJ5RmlsdGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHNvcnQoZmllbGQsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzLnB1c2goKGRlc2NlbmRpbmc/ICctJyA6ICcnKS5jb25jYXQoZmllbGQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHMocmVzb3VyY2UsIC4uLmZpZWxkcykge1xyXG4gICAgICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkKSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzb3VyY2VdID0gZmllbGRzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluY2x1ZGUoLi4ucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgLy8gaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHJlc291cmNlcy5mb3JFYWNoKHJlcyA9PiB7IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzKSB9KVxyXG4gICAgICAgIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlc291cmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGZpbHRlciAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFtKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGtleSAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2UobnVtYmVyLCBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyKG51bWJlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZShzaXplKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdlU2l6ZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSBzaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IG51bWJlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICAoKGtleSAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLnF1ZXJ5X29wdGlvbnNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGpvaW4pIHtcclxuXHJcbiAgICAgICAgbGV0IHFzTWFwID0ge307XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmZvckVhY2goZmlsdGVyID0+IHsgcXNNYXBbYGZpbHRlclske2ZpbHRlcn1dYF0gPSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbmNsdWRlZCBSZXNvdXJjZXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHFzTWFwLmluY2x1ZGUgPSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIFNwYXJzZSBGaWVsZHNldHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmZvckVhY2gocmVzID0+IHsgcXNNYXBbYGZpZWxkc1ske3Jlc31dYF0gPSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzXS5qb2luKCcsJykgfSk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc29ydF9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHFzTWFwLnNvcnQgPSB0aGlzLnNvcnRfZmllbGRzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIFBhcmFtc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykuZm9yRWFjaChrZXkgPT4geyBxc01hcFtrZXldID0gdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gfSlcclxuXHJcbiAgICAgICAgLy8gUGFnaW5hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VfbnVtYmVyICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2VbbnVtYmVyXSddID0gdGhpcy5wYWdlX251bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5wYWdlX3NpemUgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtzaXplXSddID0gdGhpcy5wYWdlX3NpemU7XHJcblxyXG4gICAgICAgIHJldHVybiAham9pbj8gcXNNYXAgOiBPYmplY3Qua2V5cyhxc01hcCkubWFwKGtleSA9PiB7IHJldHVybiBrZXkrJz0nK3FzTWFwW2tleV0gfSkuam9pbignJicpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFF1ZXJ5RmlsdGVyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5ld0luc3RhbmNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBRdWVyeUZpbHRlcigpO1xyXG59XHJcbiIsIlxyXG5jb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbG9nIDogKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc2RrLmRlYnVnICYmIHNkay5jb25zb2xlKSBjb25zb2xlLmxvZygobWVzc2FnZSA9PSB1bmRlZmluZWQpPyAnJyA6IG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBleHRlbmRNYXAgOiAobWFwLCBleHQpID0+IHtcclxuICAgICAgICBpZiAobWFwID09IHVuZGVmaW5lZCkgbWFwID0ge307XHJcbiAgICAgICAgaWYgKGV4dCAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKGV4dCkuZm9yRWFjaChrZXkgPT4geyBtYXBba2V5XSA9IGV4dFtrZXldOyB9KTtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfSxcclxuXHJcbiAgICBtZXJnZU1hcHMgOiAobWFwMSwgbWFwMikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLm1hcDEsIC4uLm1hcDIgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbG9uZU1hcCA6IChtYXApID0+IHtcclxuICAgICAgICByZXR1cm4gKG1hcCA9PSB1bmRlZmluZWQpPyBtYXAgOiB7IC4uLm1hcCB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBzbGVlcCA6IChtcywgbXNnKSA9PiB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMubG9nKChtc2c/IGAke21zZ30gLSBgIDogJycpLmNvbmNhdChgd2FpdGluZyAke21zfSBtc2VjcyAuLi5gKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBndWlkIDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyAnLicgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKS5zdWJzdHIoMCwgNikpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5qc29uQXBpTm9ybWFsaXplID0gZmFjdG9yeSgpO1xuICAgIH1cblxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIE5vcm1hbGl6ZXIoZGF0YXNldCwgcHJvcGVydHkpIHtcblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTm9ybWFsaXplcikpIHtcbiAgICAgICAgICAgIHZhciBub3JtYWxpemVySW5zdGFuY2UgPSBuZXcgTm9ybWFsaXplcihkYXRhc2V0KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eSA/IG5vcm1hbGl6ZXJJbnN0YW5jZS5nZXQocHJvcGVydHkpIDogbm9ybWFsaXplckluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGF0YXNldCA9IEpTT04ucGFyc2UoZGF0YXNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGFzZXQgfHwgIWRhdGFzZXQuZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGpzb24gYXBpIG5vcm1hbGl6ZXIgaW5wdXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YXNldCA9IGRhdGFzZXQ7XG4gICAgICAgIHRoaXMuaXNDb2xsZWN0aW9uID0gaXNBcnJheShkYXRhc2V0LmRhdGEpO1xuXG4gICAgICAgIHRoaXMuaGF5c3RhY2sgPSBidWlsZEhheXN0YWNrKGRhdGFzZXQuaW5jbHVkZWQsIHRoaXMuaXNDb2xsZWN0aW9uID8gZGF0YXNldC5kYXRhIDogW2RhdGFzZXQuZGF0YV0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRIYXlzdGFjayhpbmNsdWRlZCwgYWRkaXRpb25hbEl0ZW1zKSB7XG5cbiAgICAgICAgdmFyIHNpZ25hdHVyZXMgPSBbXTtcbiAgICAgICAgdmFyIGhheXN0YWNrID0gaW5jbHVkZWQgfHwgW107XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICBzaWduYXR1cmVzLnB1c2goZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlYWNoKGFkZGl0aW9uYWxJdGVtcywgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICBpZiAoc2lnbmF0dXJlcy5pbmRleE9mKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKSA8IDApIHtcbiAgICAgICAgICAgICAgICBoYXlzdGFjay5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRpb25zID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgY29sbGVjdGlvbltpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGtleSwgY29sbGVjdGlvbltrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICBlYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdGVtcC5wdXNoKGNhbGxiYWNrLmNhbGwoY29udGV4dCwgaXRlbSwga2V5KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVlcEV4dGVuZChvdXQsIG9iaikge1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmIG9ialtrZXldICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG91dFtrZXldID09PSAndW5kZWZpbmVkJyAmJiAob3V0W2tleV0gPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQob3V0W2tleV0sIG9ialtrZXldKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgICBlYWNoKHByb3BlcnR5VHJlZSwgZnVuY3Rpb24ocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgIGlmICghcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgICAgIHZhciByZWxhdGlvbkRhdGEgPSBlbnRpdHkucmVsYXRpb25zaGlwcyAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25EYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWRFbnRpdHkgPSBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gcmVsYXRlZEVudGl0eSA/IG5ldyBOb3JtYWxpemVyKHtkYXRhOiByZWxhdGVkRW50aXR5LCBpbmNsdWRlZDogaGF5c3RhY2t9KSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldFJlbGF0aW9uRGF0YShwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpIHtcblxuICAgICAgICByZXR1cm4gWydpZCcsICd0eXBlJ10uaW5kZXhPZihwcm9wZXJ0eSkgPj0gMCA/IGVudGl0eVtwcm9wZXJ0eV0gOiBlbnRpdHkuYXR0cmlidXRlc1twcm9wZXJ0eV07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWxhdGlvbkRhdGEocmVsYXRpb25OYW1lLCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciByZWxhdGlvbkRhdGEgPSBlbnRpdHkucmVsYXRpb25zaGlwcyAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0uZGF0YTtcbiAgICAgICAgdmFyIHJlbGF0ZWRFbnRpdHkgPSByZWxhdGlvbkRhdGEgJiYgZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICBpZiAoaXNBcnJheShyZWxhdGVkRW50aXR5KSkge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHJlbGF0ZWRFbnRpdHksIGZ1bmN0aW9uKHNpbmdsZVJlbGF0ZWRFbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplUmVsYXRpb24ocmVsYXRpb25Qcm9wZXJ0eVRyZWUsIHNpbmdsZVJlbGF0ZWRFbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlbGF0ZWRFbnRpdHkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplUmVsYXRpb24ocmVsYXRpb25Qcm9wZXJ0eVRyZWUsIHJlbGF0ZWRFbnRpdHksIGhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVSZWxhdGlvbihwcm9wZXJ0eVRyZWUsIHJlbGF0ZWRFbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgcmV0dXJuIGdldFZpYVByb3BlcnR5VHJlZS5jYWxsKG5ldyBOb3JtYWxpemVyKHtcbiAgICAgICAgICAgIGRhdGE6IHJlbGF0ZWRFbnRpdHksXG4gICAgICAgICAgICBpbmNsdWRlZDogaGF5c3RhY2tcbiAgICAgICAgfSksIHByb3BlcnR5VHJlZSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIHZhciBzZWFyY2ggPSBpc0FycmF5KHJlbGF0aW9uRGF0YSkgPyBtYXAocmVsYXRpb25EYXRhLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZDtcbiAgICAgICAgfSkgOiBbcmVsYXRpb25EYXRhLnR5cGUgKyAnQCcgKyByZWxhdGlvbkRhdGEuaWRdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHNlYXJjaC5pbmRleE9mKGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQpID49IDAgJiYgdGVtcC5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcC5sZW5ndGggPT09IDEgJiYgIWlzQXJyYXkocmVsYXRpb25EYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlUb05lc3RlZE9iamVjdChjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB2YXIgdGVtcCA9IG9iajtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25MZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb25MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcCA9IHRlbXBbY29sbGVjdGlvbltpXV0gPSB0ZW1wW2NvbGxlY3Rpb25baV1dIHx8IChpKzEgPT09IGNvbGxlY3Rpb25MZW5ndGggPyB1bmRlZmluZWQgOiB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRQcm9wZXJ0eVRyZWUocHJvcGVydHlMaXN0KSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSB7fTtcblxuICAgICAgICBlYWNoKHByb3BlcnR5TGlzdCwgZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICAgICAgdmFyIHByb3BlcnR5UGFydHMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgZGVlcEV4dGVuZCh0ZW1wLCBhcnJheVRvTmVzdGVkT2JqZWN0KHByb3BlcnR5UGFydHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFtwcm9wZXJ0eV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWFQcm9wZXJ0eVRyZWUocHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAodGhpcy5kYXRhc2V0LmRhdGEsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCB0aGlzLmhheXN0YWNrKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgdGhpcy5kYXRhc2V0LmRhdGEsIHRoaXMuaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIE5vcm1hbGl6ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGdldFZpYVByb3BlcnR5VHJlZS5jYWxsKHRoaXMsIGJ1aWxkUHJvcGVydHlUcmVlKGlzQXJyYXkocHJvcGVydHkpID8gcHJvcGVydHkgOiBbcHJvcGVydHldKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheShwcm9wZXJ0eSkgPyByZXN1bHQgOiBtYXAocmVzdWx0LCBmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtW3Byb3BlcnR5XTsgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheShwcm9wZXJ0eSkgPyByZXN1bHQgOiByZXN1bHRbcHJvcGVydHldO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIE5vcm1hbGl6ZXI7XG5cbn0pKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9