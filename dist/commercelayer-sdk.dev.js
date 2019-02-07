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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    value: function listSkus(filter, options) {
      return request(client.newRequest('/api/skus').setParams(filter).setOptions(options));
    }
  }, {
    key: "allSkus",
    value: function allSkus(filter, options) {
      return all(this.listSkus, filter, options);
    }
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
    key: "allPrices",
    value: function allPrices(filter, options) {
      return all(this.listPrices, filter, options);
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
    key: "allStockItems",
    value: function allStockItems(filter, options) {
      return all(this.listStockItems, filter, options);
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
    key: "allDeliveryLeadTimes",
    value: function allDeliveryLeadTimes(filter, options) {
      return all(this.listDeliveryLeadTimes, filter, options);
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
    key: "allShippingMethods",
    value: function allShippingMethods(filter, options) {
      return all(this.listShippingMethods, filter, options);
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
    key: "allPaymentMethods",
    value: function allPaymentMethods(filter, options) {
      return all(this.listPaymentMethods, filter, options);
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
    key: "allOrders",
    value: function allOrders(filter, options) {
      return all(this.allOrders, filter, options);
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
    key: "allLineItems",
    value: function allLineItems(filter, options) {
      return all(this.listLineItems, filter, options);
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

function all(_x) {
  return _all.apply(this, arguments);
}

function _all() {
  _all = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(listFunction) {
    var filter,
        options,
        setPage,
        raw_response,
        firstPage,
        response,
        max_page,
        page_size,
        pages,
        out,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setPage = function _ref(filter) {
              var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : filter.page_size || 10;
              var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              if (utils.isQueryFilter(filter)) filter.page(number, size);else {
                filter['page[size]'] = size;
                filter['page[number]'] = number;
              }
            };

            filter = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};

            if (!(listFunction == undefined || !listFunction.name.startsWith('list'))) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Promise.reject("Undefined 'list' API function"));

          case 5:
            setPage(filter);
            raw_response = options && options.raw_response && options.raw_response === true; // utils.log(`all()-->${listFunction.name} page 1`);

            _context.next = 9;
            return listFunction(filter, options);

          case 9:
            firstPage = _context.sent;
            response = raw_response ? firstPage : firstPage.dataset;
            max_page = response.meta.page_count;
            page_size = response.data.length;

            if (!(max_page == 1)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", response);

          case 15:
            pages = new Array(max_page);
            pages[0] = firstPage;

            for (pn = 1; pn < max_page; pn++) {
              // utils.log(`all()-->${listFunction.name} page ${pn+1}`);
              setPage(filter, page_size, pn + 1);
              pages[pn] = listFunction(filter, options);
            }

            out = [];
            _context.next = 21;
            return Promise.all(pages);

          case 21:
            _context.t0 = function (p) {
              out = out.concat(raw_response ? p.data : p.dataset.data);
            };

            _context.sent.forEach(_context.t0);

            return _context.abrupt("return", out);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _all.apply(this, arguments);
}

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var AUTH_TOKENS = {};

var Auth =
/*#__PURE__*/
function () {
  function Auth(client_id, client_secret) {
    _classCallCheck(this, Auth);

    this.grant_type = undefined;
    this.client_id = client_id;
    this.client_secret = client_secret;
  }

  _createClass(Auth, [{
    key: "clientSecret",
    value: function clientSecret(value) {
      this.client_secret = value;
      return this;
    }
  }]);

  return Auth;
}();

var ClientCredentials =
/*#__PURE__*/
function (_Auth) {
  _inherits(ClientCredentials, _Auth);

  function ClientCredentials(client_id, scope, client_secret) {
    var _this;

    _classCallCheck(this, ClientCredentials);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClientCredentials).call(this, client_id, client_secret));
    _this.grant_type = 'client_credentials';
    _this.scope = scope;
    return _this;
  }

  _createClass(ClientCredentials, [{
    key: "setScope",
    value: function setScope(value) {
      this.scope = value;
      return this;
    }
  }, {
    key: "marketScope",
    value: function marketScope(value) {
      this.scope = value != undefined ? 'market:' + value : value;
      return this;
    }
  }]);

  return ClientCredentials;
}(Auth);

var AuthorizationCode =
/*#__PURE__*/
function (_ClientCredentials) {
  _inherits(AuthorizationCode, _ClientCredentials);

  function AuthorizationCode() {
    var _this2;

    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AuthorizationCode);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AuthorizationCode).call(this, cfg.client_id, cfg.scope, cfg.client_secret));
    _this2.grant_type = 'authorization_code';
    _this2.code = cfg.code;
    _this2.redirect_uri = cfg.redirect_uri;
    return _this2;
  }

  return AuthorizationCode;
}(ClientCredentials);

var Password =
/*#__PURE__*/
function (_ClientCredentials2) {
  _inherits(Password, _ClientCredentials2);

  function Password() {
    var _this3;

    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Password);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Password).call(this, cfg.client_id, cfg.scope, cfg.client_secret));
    _this3.grant_type = 'password';
    _this3.username = cfg.username;
    _this3.password = cfg.password;
    return _this3;
  }

  return Password;
}(ClientCredentials);

var RefreskToken =
/*#__PURE__*/
function (_Auth2) {
  _inherits(RefreskToken, _Auth2);

  function RefreskToken() {
    var _this4;

    _classCallCheck(this, RefreskToken);

    _this4.grant_type = 'refresh_token';
    _this4.refresh_token = undefined;
    return _possibleConstructorReturn(_this4);
  }

  return RefreskToken;
}(Auth);

var ApiToken = function ApiToken(access_token) {
  _classCallCheck(this, ApiToken);

  this.access_token = access_token;
  this.token_type = 'bearer';
  this.refresh_token = undefined;
  this.scope = undefined;
  this.owner_type = undefined;
  this.owner_id = undefined;
  this.created_at = undefined;
  this.expires_in = undefined;
};

module.exports = {
  // ClientCredentials : (client_id) => { return new ClientCredentials(client_id) },
  ClientCredentials: ClientCredentials,
  AuthorizationCode: AuthorizationCode,
  Password: Password,
  RefreskToken: RefreskToken
};

module.exports.authenticate = function (auth) {
  return axios.post('/oauth/token', {
    grant_type: auth.grant_type,
    client_id: auth.client_id,
    scope: auth.scope,
    client_secret: auth.client_secret,
    code: auth.code,
    redirect_uri: auth.redirect_uri,
    username: auth.username,
    password: auth.password,
    refresh_token: auth.refresh_token
  }).then(function (response) {
    var token = new ApiToken();
    token.access_token = response.data.access_token;
    token.refresh_token = response.data.refresh_token;
    token.scope = response.data.scope;
    token.owner_type = response.data.owner_type;
    token.owner_id = response.data.owner_id;
    token.created_at = response.data.created_at;
    token.expires_in = response.data.expires_in;
    cacheToken(auth.client_id, token);
    return token;
  });
};

function cacheToken(client_id, token) {
  AUTH_TOKENS[client_id] = token;
}

function getToken(client_id) {
  return AUTH_TOKENS[client_id];
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

var auth = __webpack_require__(/*! ./auth */ "./lib/auth.js");

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
        // return axios
        //     .post('/oauth/token', {
        //         grant_type: "client_credentials",
        //         client_id: this.config.client_id,
        //         scope: 'market:' + this.config.market_id
        //     })
        //     .then(response => {
        //         return response.data.access_token;
        //     })
        return auth.authenticate(new auth.ClientCredentials(this.config.client_id).marketScope(this.config.market_id)).then(function (token) {
          return token.access_token;
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

        utils.log(message('path: ' + callUrl));
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
          });
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
}(); // Address resource


var Address =
/*#__PURE__*/
function (_Resource) {
  _inherits(Address, _Resource);

  _createClass(Address, null, [{
    key: "TYPE",
    get: function get() {
      return 'addresses';
    }
  }]);

  function Address(id) {
    var _this;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Address);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Address).call(this, id, Address.TYPE));
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
}(Resource); // CreditCard resource


var CreditCard =
/*#__PURE__*/
function (_Resource2) {
  _inherits(CreditCard, _Resource2);

  _createClass(CreditCard, null, [{
    key: "TYPE",
    get: function get() {
      return 'credit_cards';
    }
  }]);

  function CreditCard(id) {
    var _this2;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CreditCard);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CreditCard).call(this, id, CreditCard.TYPE));
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
}(Resource); // Customer resource


var Customer =
/*#__PURE__*/
function (_Resource3) {
  _inherits(Customer, _Resource3);

  _createClass(Customer, null, [{
    key: "TYPE",
    get: function get() {
      return 'customers';
    }
  }]);

  function Customer(id) {
    var _this3;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Customer);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Customer).call(this, id, Customer.TYPE));
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
}(Resource); // CustomerAddress resource


var CustomerAddress =
/*#__PURE__*/
function (_Resource4) {
  _inherits(CustomerAddress, _Resource4);

  _createClass(CustomerAddress, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_addresses';
    }
  }]);

  function CustomerAddress(id) {
    var _this4;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerAddress);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerAddress).call(this, id, CustomerAddress.TYPE));
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
}(Resource); // CustomerGroup resource


var CustomerGroup =
/*#__PURE__*/
function (_Resource5) {
  _inherits(CustomerGroup, _Resource5);

  _createClass(CustomerGroup, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_groups';
    }
  }]);

  function CustomerGroup(id) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomerGroup).call(this, id, CustomerGroup.TYPE));
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
}(Resource); // CustomerPasswordReset resource


var CustomerPasswordReset =
/*#__PURE__*/
function (_Resource6) {
  _inherits(CustomerPasswordReset, _Resource6);

  _createClass(CustomerPasswordReset, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_password_resets';
    }
  }]);

  function CustomerPasswordReset(id) {
    var _this5;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerPasswordReset);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerPasswordReset).call(this, id, CustomerPasswordReset.TYPE));
    _this5.customer_email = fields.customer_email;
    return _this5;
  }

  return CustomerPasswordReset;
}(Resource); // CustomerPaymentSource


var CustomerPaymentSource =
/*#__PURE__*/
function (_Resource7) {
  _inherits(CustomerPaymentSource, _Resource7);

  _createClass(CustomerPaymentSource, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_payment_sources';
    }
  }]);

  function CustomerPaymentSource(id) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerPaymentSource);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomerPaymentSource).call(this, id, CustomerPaymentSource.TYPE));
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
}(Resource); // DeliveryLeadTime resource


var DeliveryLeadTime =
/*#__PURE__*/
function (_Resource8) {
  _inherits(DeliveryLeadTime, _Resource8);

  _createClass(DeliveryLeadTime, null, [{
    key: "TYPE",
    get: function get() {
      return 'delivery_lead_times';
    }
  }]);

  function DeliveryLeadTime(id) {
    var _this6;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DeliveryLeadTime);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(DeliveryLeadTime).call(this, id, DeliveryLeadTime.TYPE));
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
}(Resource); // Import resource


var Import =
/*#__PURE__*/
function (_Resource9) {
  _inherits(Import, _Resource9);

  _createClass(Import, null, [{
    key: "TYPE",
    get: function get() {
      return 'imports';
    }
  }]);

  function Import(id) {
    var _this7;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Import);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Import).call(this, id, Import.TYPE));
    _this7.resource_type = fields.resource_type;
    _this7.parent_resource_id = fields.parent_resource_id;
    _this7.inputs = fields.inputs;
    _this7.cleanup_records = fields.cleanup_records;
    return _this7;
  }

  return Import;
}(Resource); // InventoryModel resource


var InventoryModel =
/*#__PURE__*/
function (_Resource10) {
  _inherits(InventoryModel, _Resource10);

  _createClass(InventoryModel, null, [{
    key: "TYPE",
    get: function get() {
      return 'inventory_models';
    }
  }]);

  function InventoryModel(id) {
    var _this8;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, InventoryModel);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(InventoryModel).call(this, id, InventoryModel.TYPE));
    _this8.name = fields.name;
    return _this8;
  }

  return InventoryModel;
}(Resource); // LineItem resource


var LineItem =
/*#__PURE__*/
function (_Resource11) {
  _inherits(LineItem, _Resource11);

  _createClass(LineItem, null, [{
    key: "TYPE",
    get: function get() {
      return 'line_items';
    }
  }]);

  function LineItem(id) {
    var _this9;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LineItem);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(LineItem).call(this, id, LineItem.TYPE));
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
}(Resource); // LineItemOption resource


var LineItemOption =
/*#__PURE__*/
function (_Resource12) {
  _inherits(LineItemOption, _Resource12);

  _createClass(LineItemOption, null, [{
    key: "TYPE",
    get: function get() {
      return 'line_item_options';
    }
  }]);

  function LineItemOption(id) {
    var _this10;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LineItemOption);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(LineItemOption).call(this, id, LineItemOption.TYPE));
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
}(Resource); // Market resource


var Market =
/*#__PURE__*/
function (_Resource13) {
  _inherits(Market, _Resource13);

  _createClass(Market, null, [{
    key: "TYPE",
    get: function get() {
      return 'markets';
    }
  }]);

  function Market(id) {
    var _this11;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Market);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Market).call(this, id, Market.TYPE));
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
}(Resource); // Merchant resource


var Merchant =
/*#__PURE__*/
function (_Resource14) {
  _inherits(Merchant, _Resource14);

  _createClass(Merchant, null, [{
    key: "TYPE",
    get: function get() {
      return 'merchants';
    }
  }]);

  function Merchant(id) {
    var _this12;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Merchant);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Merchant).call(this, id, Merchant.TYPE));
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
}(Resource); // Order resource


var Order =
/*#__PURE__*/
function (_Resource15) {
  _inherits(Order, _Resource15);

  _createClass(Order, null, [{
    key: "TYPE",
    get: function get() {
      return 'orders';
    }
  }]);

  function Order(id) {
    var _this13;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Order);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Order).call(this, id, Order.TYPE));
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
}(Resource); // Parcel resource


var Parcel =
/*#__PURE__*/
function (_Resource16) {
  _inherits(Parcel, _Resource16);

  _createClass(Parcel, null, [{
    key: "TYPE",
    get: function get() {
      return 'parcels';
    }
  }]);

  function Parcel(id) {
    var _this14;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parcel);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Parcel).call(this, id, Parcel.TYPE));
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
}(Resource); // PaymentMethod resource


var PaymentMethod =
/*#__PURE__*/
function (_Resource17) {
  _inherits(PaymentMethod, _Resource17);

  _createClass(PaymentMethod, null, [{
    key: "TYPE",
    get: function get() {
      return 'payment_methods';
    }
  }]);

  function PaymentMethod(id) {
    var _this15;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PaymentMethod);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(PaymentMethod).call(this, id, PaymentMethod.TYPE));
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
}(Resource); // PaypalPayment resource


var PaypalPayment =
/*#__PURE__*/
function (_Resource18) {
  _inherits(PaypalPayment, _Resource18);

  _createClass(PaypalPayment, null, [{
    key: "TYPE",
    get: function get() {
      return 'paypal_payments';
    }
  }]);

  function PaypalPayment(id) {
    var _this16;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PaypalPayment);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(PaypalPayment).call(this, id, PaypalPayment.TYPE));
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
}(Resource); // Price resource


var Price =
/*#__PURE__*/
function (_Resource19) {
  _inherits(Price, _Resource19);

  _createClass(Price, null, [{
    key: "TYPE",
    get: function get() {
      return 'prices';
    }
  }]);

  function Price(id) {
    var _this17;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Price);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Price).call(this, id, Price.TYPE));
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
}(Resource); // PriceList resource


var PriceList =
/*#__PURE__*/
function (_Resource20) {
  _inherits(PriceList, _Resource20);

  _createClass(PriceList, null, [{
    key: "TYPE",
    get: function get() {
      return 'price_lists';
    }
  }]);

  function PriceList(id) {
    var _this18;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PriceList);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(PriceList).call(this, id, PriceList.TYPE));
    _this18.name = fields.name;
    _this18.currency_code = fields.currency_code;
    _this18.tax_included = fields.tax_included;
    return _this18;
  }

  return PriceList;
}(Resource); // Shipment resource


var Shipment =
/*#__PURE__*/
function (_Resource21) {
  _inherits(Shipment, _Resource21);

  _createClass(Shipment, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipments';
    }
  }]);

  function Shipment(id) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Shipment);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shipment).call(this, id, Shipment.TYPE));
  }

  return Shipment;
}(Resource); // ShippingCategory resource


var ShippingCategory =
/*#__PURE__*/
function (_Resource22) {
  _inherits(ShippingCategory, _Resource22);

  _createClass(ShippingCategory, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_categories';
    }
  }]);

  function ShippingCategory(id) {
    var _this19;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingCategory);

    _this19 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingCategory).call(this, id, ShippingCategory.TYPE));
    _this19.name = fields.name;
    return _this19;
  }

  return ShippingCategory;
}(Resource); // ShippingMethod resource


var ShippingMethod =
/*#__PURE__*/
function (_Resource23) {
  _inherits(ShippingMethod, _Resource23);

  _createClass(ShippingMethod, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_methods';
    }
  }]);

  function ShippingMethod(id) {
    var _this20;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingMethod);

    _this20 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingMethod).call(this, id, ShippingMethod.TYPE));
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
}(Resource); // ShippingZone resource


var ShippingZone =
/*#__PURE__*/
function (_Resource24) {
  _inherits(ShippingZone, _Resource24);

  _createClass(ShippingZone, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_zones';
    }
  }]);

  function ShippingZone(id) {
    var _this21;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingZone);

    _this21 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingZone).call(this, id, ShippingZone.TYPE));
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
}(Resource); // Sku resource


var Sku =
/*#__PURE__*/
function (_Resource25) {
  _inherits(Sku, _Resource25);

  _createClass(Sku, null, [{
    key: "TYPE",
    get: function get() {
      return 'skus';
    }
  }]);

  function Sku(id) {
    var _this22;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sku);

    _this22 = _possibleConstructorReturn(this, _getPrototypeOf(Sku).call(this, id, Sku.TYPE));
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
}(Resource); // SkuOption resource


var SkuOption =
/*#__PURE__*/
function (_Resource26) {
  _inherits(SkuOption, _Resource26);

  _createClass(SkuOption, null, [{
    key: "TYPE",
    get: function get() {
      return 'sku_options';
    }
  }]);

  function SkuOption(id) {
    var _this23;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SkuOption);

    _this23 = _possibleConstructorReturn(this, _getPrototypeOf(SkuOption).call(this, id, SkuOption.TYPE));
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
}(Resource); // StockItem resource


var StockItem =
/*#__PURE__*/
function (_Resource27) {
  _inherits(StockItem, _Resource27);

  _createClass(StockItem, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_items';
    }
  }]);

  function StockItem(id) {
    var _this24;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockItem);

    _this24 = _possibleConstructorReturn(this, _getPrototypeOf(StockItem).call(this, id, StockItem.TYPE));
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
}(Resource); // StockLevel resource


var StockLevel =
/*#__PURE__*/
function (_Resource28) {
  _inherits(StockLevel, _Resource28);

  _createClass(StockLevel, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_levels';
    }
  }]);

  function StockLevel(id) {
    var _this25;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockLevel);

    _this25 = _possibleConstructorReturn(this, _getPrototypeOf(StockLevel).call(this, id, StockLevel.TYPE));
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
}(Resource); // StockLocation resource


var StockLocation =
/*#__PURE__*/
function (_Resource29) {
  _inherits(StockLocation, _Resource29);

  _createClass(StockLocation, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_locations';
    }
  }]);

  function StockLocation(id) {
    var _this26;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockLocation);

    _this26 = _possibleConstructorReturn(this, _getPrototypeOf(StockLocation).call(this, id, StockLocation.TYPE));
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
}(Resource); // Webhook resource


var Webhook =
/*#__PURE__*/
function (_Resource30) {
  _inherits(Webhook, _Resource30);

  _createClass(Webhook, null, [{
    key: "TYPE",
    get: function get() {
      return 'webhooks';
    }
  }]);

  function Webhook(id) {
    var _this27;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Webhook);

    _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Webhook).call(this, id, Webhook.TYPE));
    _this27.topic = fields.topic;
    _this27.callback_url = fields.callback_url;
    _this27.include_resources = fields.include_resources;
    return _this27;
  }

  return Webhook;
}(Resource); // WireTransfer resource


var WireTransfer =
/*#__PURE__*/
function (_Resource31) {
  _inherits(WireTransfer, _Resource31);

  _createClass(WireTransfer, null, [{
    key: "TYPE",
    get: function get() {
      return 'wire_transfers';
    }
  }]);

  function WireTransfer(id) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, WireTransfer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WireTransfer).call(this, id, WireTransfer.TYPE));
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
}(Resource);

module.exports = {
  Address: Address,
  CreditCard: CreditCard,
  Customer: Customer,
  CustomerAddress: CustomerAddress,
  CustomerGroup: CustomerGroup,
  CustomerPasswordReset: CustomerPasswordReset,
  CustomerPaymentSource: CustomerPaymentSource,
  DeliveryLeadTime: DeliveryLeadTime,
  Import: Import,
  InventoryModel: InventoryModel,
  LineItem: LineItem,
  LineItemOption: LineItemOption,
  Market: Market,
  Merchant: Merchant,
  Order: Order,
  Parcel: Parcel,
  PaymentMethod: PaymentMethod,
  PaypalPayment: PaypalPayment,
  Price: Price,
  PriceList: PriceList,
  Shipment: Shipment,
  ShippingCategory: ShippingCategory,
  ShippingMethod: ShippingMethod,
  ShippingZone: ShippingZone,
  Sku: Sku,
  SkuOption: SkuOption,
  StockItem: StockItem,
  StockLevel: StockLevel,
  StockLocation: StockLocation,
  Webhook: Webhook,
  WireTransfer: WireTransfer
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
    key: "nextPage",
    value: function nextPage() {
      this.page_number = page_number ? page_number++ : 1;
      return this;
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
  },
  isQueryFilter: function isQueryFilter(obj) {
    return obj && obj.isQueryFilter && obj.isQueryFilter() === true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9qc29uYXBpLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvanNvbi1hcGktbm9ybWFsaXplL3NyYy9qc29uQXBpTm9ybWFsaXplLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwibW9kZWwiLCJxdWVyeSIsImNsaWVudCIsInV0aWxzIiwianNvbmFwaSIsIkNMQXBpIiwiZmlsdGVyIiwib3B0aW9ucyIsInJlcXVlc3QiLCJuZXdSZXF1ZXN0Iiwic2V0UGFyYW1zIiwic2V0T3B0aW9ucyIsImFsbCIsImxpc3RTa3VzIiwiaWQiLCJsaXN0UHJpY2VzIiwibGlzdFN0b2NrSXRlbXMiLCJsaXN0RGVsaXZlcnlMZWFkVGltZXMiLCJsaXN0U2hpcHBpbmdNZXRob2RzIiwibGlzdFBheW1lbnRNZXRob2RzIiwiYWxsT3JkZXJzIiwib3JkZXIiLCJzZXRCb2R5IiwibGlzdExpbmVJdGVtcyIsImxpbmVfaXRlbSIsImN1c3RvbWVyIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwiYXBpIiwiY2xhcGkiLCJpbml0aWFsaXplIiwiY2ZnIiwibG9nIiwibmV3SW5zdGFuY2UiLCJhcGlSZXF1ZXN0IiwiY29ycmVsYXRpb25faWQiLCJhdHRlbXB0IiwicGF0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZWplY3QiLCJuZXdFcnJvciIsImJvZHkiLCJzZXJpYWxpemUiLCJjYWxsIiwidGhlbiIsInJlc3BvbnNlIiwicmF3X3Jlc3BvbnNlIiwiZGF0YSIsImRlc2VyaWFsaXplIiwiY2F0Y2giLCJlcnJvciIsImVycm9ycyIsImFwaV9lcnJvciIsInN0YXR1cyIsInRpdGxlIiwiZGV0YWlsIiwiY29kZSIsInN0YXR1c1RleHQiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJsaXN0RnVuY3Rpb24iLCJzZXRQYWdlIiwic2l6ZSIsInBhZ2Vfc2l6ZSIsIm51bWJlciIsImlzUXVlcnlGaWx0ZXIiLCJwYWdlIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJmaXJzdFBhZ2UiLCJkYXRhc2V0IiwibWF4X3BhZ2UiLCJtZXRhIiwicGFnZV9jb3VudCIsImxlbmd0aCIsInBhZ2VzIiwiQXJyYXkiLCJwbiIsIm91dCIsInAiLCJjb25jYXQiLCJmb3JFYWNoIiwiYXhpb3MiLCJBVVRIX1RPS0VOUyIsIkF1dGgiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwiZ3JhbnRfdHlwZSIsInZhbHVlIiwiQ2xpZW50Q3JlZGVudGlhbHMiLCJzY29wZSIsIkF1dGhvcml6YXRpb25Db2RlIiwicmVkaXJlY3RfdXJpIiwiUGFzc3dvcmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiUmVmcmVza1Rva2VuIiwicmVmcmVzaF90b2tlbiIsIkFwaVRva2VuIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIm93bmVyX3R5cGUiLCJvd25lcl9pZCIsImNyZWF0ZWRfYXQiLCJleHBpcmVzX2luIiwiYXV0aGVudGljYXRlIiwiYXV0aCIsInBvc3QiLCJ0b2tlbiIsImNhY2hlVG9rZW4iLCJnZXRUb2tlbiIsImNvbmZpZyIsImRlZmF1bHQiLCJtZXJnZU1hcHMiLCJjbGF5ZXIiLCJsYXN0QWNjZXNzVG9rZW4iLCJzZXR0aW5ncyIsInNkayIsImhleSIsImNoZWNrQXBpQ29uZmlnIiwiYmFzZV91cmwiLCJtYXJrZXRfaWQiLCJzZXRBeGlvc0NvbmZpZyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJjb21tb24iLCJkZWJ1ZyIsInRyYWNlIiwiaW50ZXJjZXB0b3JzIiwidXNlIiwiQXBpQ2xpZW50IiwibWV0aG9kIiwiQXBpUmVxdWVzdCIsInBhcmFtcyIsImd1aWQiLCJidWlsZCIsInJhdyIsInJhd1Jlc3BvbnNlIiwiYXV0aF9hdHRlbXB0cyIsIm1hcmtldFNjb3BlIiwibXNnIiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIm5vcm1hbGl6ZSIsIkpzb25BcGlSZXNvdXJjZSIsInJlc291cmNlIiwiYXR0cmlidXRlcyIsImZpZWxkIiwiaW5jbHVkZXMiLCJpc0FwaVJlc291cmNlIiwicmVsYXRpb25zaGlwcyIsInN1YnN0ciIsInR5cGUiLCJSZXNvdXJjZSIsInJlZmVyZW5jZSIsIm1ldGFkYXRhIiwidXBkYXRlZF9hdCIsInJlcyIsIkFkZHJlc3MiLCJmaWVsZHMiLCJUWVBFIiwiYnVzaW5lc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiY29tcGFueSIsImxpbmVfMSIsImxpbmVfMiIsImNpdHkiLCJ6aXBfY29kZSIsInN0YXRlX2NvZGUiLCJwaG9uZSIsImVtYWlsIiwibm90ZXMiLCJsYXQiLCJsbmciLCJiaWxsaW5nX2luZm8iLCJDcmVkaXRDYXJkIiwibW9udGgiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiQ3VzdG9tZXIiLCJDdXN0b21lckFkZHJlc3MiLCJDdXN0b21lckdyb3VwIiwiQ3VzdG9tZXJQYXNzd29yZFJlc2V0IiwiY3VzdG9tZXJfZW1haWwiLCJDdXN0b21lclBheW1lbnRTb3VyY2UiLCJEZWxpdmVyeUxlYWRUaW1lIiwibWluX2hvdXJzIiwibWF4X2hvdXJzIiwiSW1wb3J0IiwicmVzb3VyY2VfdHlwZSIsInBhcmVudF9yZXNvdXJjZV9pZCIsImlucHV0cyIsImNsZWFudXBfcmVjb3JkcyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW0iLCJza3VfY29kZSIsInF1YW50aXR5IiwidXBkYXRlX3F1YW50aXR5IiwiX3VwZGF0ZV9xdWFudGl0eSIsImltYWdlX3VybCIsIml0ZW0iLCJMaW5lSXRlbU9wdGlvbiIsIk1hcmtldCIsImZhY2Vib29rX3BpeGVsX2lkIiwiTWVyY2hhbnQiLCJPcmRlciIsImd1ZXN0IiwiY3VzdG9tZXJfcGFzc3dvcmQiLCJzaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayIsImNvdXBvbl9jb2RlIiwiY2FydF91cmwiLCJyZXR1cm5fdXJsIiwidGVybXNfdXJsIiwicHJpdmFjeV91cmwiLCJQYXJjZWwiLCJ3ZWlnaHQiLCJ1bml0X29mX3dlaWdodCIsImVlbF9wZmMiLCJjb250ZW50c190eXBlIiwiY29udGVudHNfZXhwbGFuYXRpb24iLCJjdXN0b21zX2NlcnRpZnkiLCJjdXN0b21zX3NpZ25lciIsIm5vbl9kZWxpdmVyeV9vcHRpb24iLCJyZXN0cmljdGlvbl90eXBlIiwicmVzdHJpY3Rpb25fY29tbWVudHMiLCJjdXN0b21zX2luZm9fcmVxdWlyZWQiLCJQYXltZW50TWV0aG9kIiwicGF5bWVudF9zb3VyY2VfdHlwZSIsInByaWNlX2Ftb3VudF9jZW50cyIsIlBheXBhbFBheW1lbnQiLCJjYW5jZWxfdXJsIiwibm90ZV90b19wYXllciIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJQcmljZUxpc3QiLCJjdXJyZW5jeV9jb2RlIiwidGF4X2luY2x1ZGVkIiwiU2hpcG1lbnQiLCJTaGlwcGluZ0NhdGVnb3J5IiwiU2hpcHBpbmdNZXRob2QiLCJmcmVlX292ZXJfYW1vdW50X2NlbnRzIiwiU2hpcHBpbmdab25lIiwiY291bnRyeV9jb2RlX3JlZ2V4Iiwibm90X2NvdW50cnlfY29kZV9yZWdleCIsInN0YXRlX2NvZGVfcmVnZXgiLCJub3Rfc3RhdGVfY29kZV9yZWdleCIsInppcF9jb2RlX3JlZ2V4Iiwibm90X3ppcF9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU2t1T3B0aW9uIiwiZGVsYXlfaG91cnMiLCJza3VfY29kZV9yZWdleCIsIlN0b2NrSXRlbSIsIlN0b2NrTGV2ZWwiLCJwcmlvcml0eSIsIm9uX2hvbGQiLCJTdG9ja0xvY2F0aW9uIiwibGFiZWxfZm9ybWF0IiwiV2ViaG9vayIsInRvcGljIiwiY2FsbGJhY2tfdXJsIiwiaW5jbHVkZV9yZXNvdXJjZXMiLCJXaXJlVHJhbnNmZXIiLCJRdWVyeUZpbHRlciIsImNsZWFyIiwic29ydF9maWVsZHMiLCJzcGFyc2VfZmllbGRzZXRzIiwiaW5jbHVkZWRfcmVzb3VyY2VzIiwiZmlsdGVyX2ZpZWxkcyIsImN1c3RvbV9wYXJhbXMiLCJwYWdlX251bWJlciIsImRlc2NlbmRpbmciLCJwdXNoIiwicmVzb3VyY2VzIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwicXNNYXAiLCJpbmNsdWRlIiwic29ydCIsImV4dCIsIm1hcDEiLCJtYXAyIiwiY2xvbmVNYXAiLCJtcyIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwidG9VcHBl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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2NsYXllcicpXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vbGliL21vZGVsJylcclxuXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKSIsImNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50JylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QganNvbmFwaSA9IHJlcXVpcmUoJy4vanNvbmFwaScpXHJcblxyXG5cclxuIGNsYXNzIENMQXBpIHtcclxuXHJcbiAgICAvLyBTa3VzXHJcbiAgICBsaXN0U2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsU2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gYWxsKHRoaXMubGlzdFNrdXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVTa3UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUHJpY2VzXHJcbiAgICBsaXN0UHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZVByaWNlKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gU3RvY2sgSXRlbXNcclxuICAgIGxpc3RTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsU3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVTdG9ja0l0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIERlbGl2ZXJ5IExlYWQgVGltZXNcclxuICAgIGxpc3REZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsRGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsbCh0aGlzLmxpc3REZWxpdmVyeUxlYWRUaW1lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gU2hpcHBpbmcgTWV0aG9kc1xyXG4gICAgbGlzdFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nTWV0aG9kcywgZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZVNoaXBwaW5nTWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFBheW1lbnQgTWV0aG9kc1xyXG4gICAgbGlzdFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBhbGwodGhpcy5saXN0UGF5bWVudE1ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmVQYXltZW50TWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gT3JkZXJzXHJcbiAgICBsaXN0T3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gYWxsKHRoaXMuYWxsT3JkZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHJpZXZlT3JkZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9yZGVyKG9yZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KG9yZGVyKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIExpbmUgSXRlbXNcclxuICAgIGxpc3RMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gYWxsKHRoaXMubGlzdExpbmVJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRyaWV2ZUxpbmVJdGVtKGlkLCBmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGluZUl0ZW0obGluZV9pdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycsICdwb3N0Jykuc2V0Qm9keShsaW5lX2l0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaW5lSXRlbShpZCwgbGluZV9pdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlTGluZUl0ZW0oaWQpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gQ3VzdG9tZXJzXHJcbiAgICBjcmVhdGVDdXN0b21lcihjdXN0b21lcikge1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gQ3VzdG9tZXIgU3Vic2NyaXB0aW9uc1xyXG4gICAgY3JlYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oY3VzdG9tZXJfc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnZhciBhcGkgPSBuZXcgQ0xBcGkoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmNsYXBpID0gYXBpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IChjZmcpID0+IHtcclxuICAgIHV0aWxzLmxvZygnYXBpIGNsaWVudCBpbml0aWFsaXplZCB3aXRoIGNvbmZpZzonKTtcclxuICAgIHV0aWxzLmxvZyhjZmcpO1xyXG4gICAgYXBpLmNsaWVudCA9ICBjbGllbnQubmV3SW5zdGFuY2UoY2ZnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgIHV0aWxzLmxvZyhgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBjYWxsaW5nICR7YXBpUmVxdWVzdC5wYXRofSAuLi5gKTtcclxuXHJcbiAgICBpZiAoYXBpLmNsaWVudCA9PSB1bmRlZmluZWQpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcih1bmRlZmluZWQsICdhcGkgbm90IGluaXRpYWxpemVkJykpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBqc29uYXBpLnNlcmlhbGl6ZShhcGlSZXF1ZXN0LmJvZHkpO1xyXG4gICAgICAgIGFwaVJlcXVlc3Quc2V0Qm9keShib2R5KTtcclxuICAgICAgICByZXR1cm4gYXBpLmNsaWVudC5jYWxsKGFwaVJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIGFwaVJlcXVlc3QucmF3X3Jlc3BvbnNlPyByZXNwb25zZS5kYXRhIDoganNvbmFwaS5kZXNlcmlhbGl6ZShyZXNwb25zZS5kYXRhKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyb3IucmVzcG9uc2UpIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpX2Vycm9yID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKGFwaV9lcnJvci5zdGF0dXMsIGFwaV9lcnJvci50aXRsZSwgYXBpX2Vycm9yLmRldGFpbCwgYXBpX2Vycm9yLmNvZGUpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0KSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3RXJyb3Ioc3RhdHVzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZSwgY29kZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvciA6IHRydWUsXHJcbiAgICAgICAgc3RhdHVzIDogc3RhdHVzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2UsXHJcbiAgICAgICAgY29kZSA6IGNvZGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFsbChsaXN0RnVuY3Rpb24sIGZpbHRlciA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcbiAgICBpZiAoKGxpc3RGdW5jdGlvbiA9PSB1bmRlZmluZWQpIHx8ICFsaXN0RnVuY3Rpb24ubmFtZS5zdGFydHNXaXRoKCdsaXN0JykpIHJldHVybiBQcm9taXNlLnJlamVjdChcIlVuZGVmaW5lZCAnbGlzdCcgQVBJIGZ1bmN0aW9uXCIpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRQYWdlKGZpbHRlciwgc2l6ZSA9IGZpbHRlci5wYWdlX3NpemUgfHwgMTAsIG51bWJlciA9IDEpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNRdWVyeUZpbHRlcihmaWx0ZXIpKSBmaWx0ZXIucGFnZShudW1iZXIsIHNpemUpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2Vbc2l6ZV0nXSA9IHNpemU7XHJcbiAgICAgICAgICAgIGZpbHRlclsncGFnZVtudW1iZXJdJ10gPSBudW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBhZ2UoZmlsdGVyKTtcclxuXHJcbiAgICBsZXQgcmF3X3Jlc3BvbnNlID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5yYXdfcmVzcG9uc2UgJiYgb3B0aW9ucy5yYXdfcmVzcG9uc2UgPT09IHRydWUpO1xyXG5cclxuICAgIC8vIHV0aWxzLmxvZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlIDFgKTtcclxuXHJcbiAgICBsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSByYXdfcmVzcG9uc2U/IGZpcnN0UGFnZSA6IGZpcnN0UGFnZS5kYXRhc2V0O1xyXG5cclxuICAgIGNvbnN0IG1heF9wYWdlID0gcmVzcG9uc2UubWV0YS5wYWdlX2NvdW50O1xyXG4gICAgY29uc3QgcGFnZV9zaXplID0gcmVzcG9uc2UuZGF0YS5sZW5ndGg7XHJcblxyXG4gICAgaWYgKG1heF9wYWdlID09IDEpIHJldHVybiByZXNwb25zZTtcclxuICAgIFxyXG4gICAgbGV0IHBhZ2VzID0gbmV3IEFycmF5KG1heF9wYWdlKTtcclxuXHJcbiAgICBwYWdlc1swXSA9IGZpcnN0UGFnZTtcclxuICAgXHJcbiAgICBmb3IgKHBuID0gMTsgcG4gPCBtYXhfcGFnZTsgcG4rKykge1xyXG4gICAgICAgIC8vIHV0aWxzLmxvZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlICR7cG4rMX1gKTtcclxuICAgICAgICBzZXRQYWdlKGZpbHRlciwgcGFnZV9zaXplLCBwbisxKTtcclxuICAgICAgICBwYWdlc1twbl0gPSBsaXN0RnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG91dCA9IFtdO1xyXG5cclxuICAgIChhd2FpdCBQcm9taXNlLmFsbChwYWdlcykpLmZvckVhY2gocCA9PiB7IG91dCA9IG91dC5jb25jYXQocmF3X3Jlc3BvbnNlPyBwLmRhdGEgOiBwLmRhdGFzZXQuZGF0YSkgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxuXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG5cclxuY29uc3QgQVVUSF9UT0tFTlMgPSB7fTtcclxuXHJcblxyXG5jbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY2xpZW50U2VjcmV0KHZhbHVlKSB7IHRoaXMuY2xpZW50X3NlY3JldCA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQ2xpZW50Q3JlZGVudGlhbHMgZXh0ZW5kcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgc2NvcGUsIGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICBzdXBlcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdjbGllbnRfY3JlZGVudGlhbHMnO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIH1cclxuICAgIHNldFNjb3BlKHZhbHVlKSB7IHRoaXMuc2NvcGUgPSB2YWx1ZTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIG1hcmtldFNjb3BlKHZhbHVlKSB7IHRoaXMuc2NvcGUgPSAodmFsdWUgIT0gdW5kZWZpbmVkKT8gJ21hcmtldDonK3ZhbHVlIDogdmFsdWU7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBdXRob3JpemF0aW9uQ29kZSBleHRlbmRzIENsaWVudENyZWRlbnRpYWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNmZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY2ZnLmNsaWVudF9pZCwgY2ZnLnNjb3BlLCBjZmcuY2xpZW50X3NlY3JldClcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcclxuICAgICAgICB0aGlzLmNvZGUgPSBjZmcuY29kZTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IGNmZy5yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBQYXNzd29yZCBleHRlbmRzIENsaWVudENyZWRlbnRpYWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNmZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY2ZnLmNsaWVudF9pZCwgY2ZnLnNjb3BlLCBjZmcuY2xpZW50X3NlY3JldClcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBjZmcudXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNmZy5wYXNzd29yZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFJlZnJlc2tUb2tlbiBleHRlbmRzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3JlZnJlc2hfdG9rZW4nO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEFwaVRva2VuIHtcclxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc190b2tlbikge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9ICdiZWFyZXInO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNjb3BlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3duZXJfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm93bmVyX2lkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmV4cGlyZXNfaW4gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAvLyBDbGllbnRDcmVkZW50aWFscyA6IChjbGllbnRfaWQpID0+IHsgcmV0dXJuIG5ldyBDbGllbnRDcmVkZW50aWFscyhjbGllbnRfaWQpIH0sXHJcbiAgICBDbGllbnRDcmVkZW50aWFscyxcclxuICAgIEF1dGhvcml6YXRpb25Db2RlLFxyXG4gICAgUGFzc3dvcmQsXHJcbiAgICBSZWZyZXNrVG9rZW5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmF1dGhlbnRpY2F0ZSA9IChhdXRoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAucG9zdCgnL29hdXRoL3Rva2VuJywge1xyXG4gICAgICAgICAgICBncmFudF90eXBlOiBhdXRoLmdyYW50X3R5cGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogYXV0aC5jbGllbnRfaWQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBhdXRoLnNjb3BlLFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBhdXRoLmNsaWVudF9zZWNyZXQsXHJcbiAgICAgICAgICAgIGNvZGU6IGF1dGguY29kZSxcclxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBhdXRoLnJlZGlyZWN0X3VyaSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGF1dGgudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiBhdXRoLnJlZnJlc2hfdG9rZW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBBcGlUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgdG9rZW4uYWNjZXNzX3Rva2VuID0gcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIHRva2VuLnJlZnJlc2hfdG9rZW4gPSByZXNwb25zZS5kYXRhLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgIHRva2VuLnNjb3BlID0gcmVzcG9uc2UuZGF0YS5zY29wZTtcclxuICAgICAgICAgICAgdG9rZW4ub3duZXJfdHlwZSA9IHJlc3BvbnNlLmRhdGEub3duZXJfdHlwZTtcclxuICAgICAgICAgICAgdG9rZW4ub3duZXJfaWQgPSByZXNwb25zZS5kYXRhLm93bmVyX2lkO1xyXG4gICAgICAgICAgICB0b2tlbi5jcmVhdGVkX2F0ID0gcmVzcG9uc2UuZGF0YS5jcmVhdGVkX2F0O1xyXG4gICAgICAgICAgICB0b2tlbi5leHBpcmVzX2luID0gcmVzcG9uc2UuZGF0YS5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgY2FjaGVUb2tlbihhdXRoLmNsaWVudF9pZCwgdG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2FjaGVUb2tlbihjbGllbnRfaWQsIHRva2VuKSB7XHJcbiAgICBBVVRIX1RPS0VOU1tjbGllbnRfaWRdID0gdG9rZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRva2VuKGNsaWVudF9pZCkge1xyXG4gICAgcmV0dXJuIEFVVEhfVE9LRU5TW2NsaWVudF9pZF07XHJcbn1cclxuIiwiY29uc3QgYXBpID0gcmVxdWlyZSgnLi9hcGknKVxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcblxyXG4vLyBFeHBvc2UgYWxsIGFwaSBmdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMgPSBhcGkuY2xhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgaWYgKGNmZyAhPSB1bmRlZmluZWQpIGNmZy5kZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBhcGkuaW5pdGlhbGl6ZSh1dGlscy5tZXJnZU1hcHMoY29uZmlnLmNsYXllciwgY2ZnKSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubGFzdEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5jbGFwaS5jbGllbnQuY29uZmlnLmFjY2Vzc190b2tlbjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2V0dGluZ3MgPSBjb25maWcuc2RrO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaGV5ID0gKCkgPT4geyByZXR1cm4gJ0hlbGxvIScgfVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcbmNvbnN0IGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0FwaUNvbmZpZyhjb25maWcpIHtcclxuXHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyB2ZXJpZmljYXRpb24uLi4nKVxyXG5cclxuICAgIGlmIChjb25maWcgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjb25maWcnO1xyXG4gICAgaWYgKGNvbmZpZy5iYXNlX3VybCA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGJhc2VfdXJsJztcclxuICAgIGlmIChjb25maWcubWFya2V0X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgbWFya2V0X2lkJztcclxuICAgIGlmIChjb25maWcuY2xpZW50X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgY2xpZW50X2lkJztcclxuXHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyBvay4nKVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEF4aW9zQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBjb25maWcuYmFzZV91cmw7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQWNjZXB0J10gPSAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJztcclxuXHJcbiAgICBpZiAoc2RrLmRlYnVnICYmIHNkay50cmFjZSkge1xyXG5cclxuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2coJ1JFUVVFU1QgLS0+Jyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhyZXF1ZXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnPC0tIFJFU1BPTlNFJyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG5ld0luc3RhbmNlIDogZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkFwaUNsaWVudChjb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBuZXdSZXF1ZXN0IDogZnVuY3Rpb24ocGF0aCwgbWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkFwaVJlcXVlc3QocGF0aCwgbWV0aG9kKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIEFwaVJlcXVlc3QgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHBhdGggPSAnLycsIG1ldGhvZCA9ICdnZXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IHBhdGggfHwgJy8nO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZCB8fCAnZ2V0JztcclxuICAgICAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgIC8vIC0tLS0gLS0tLSAtLS0tIC0tLS1cclxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWxhdGlvbl9pZCA9IHV0aWxzLmd1aWQoKTtcclxuICAgICAgICAgICAgdGhpcy5yYXdfcmVzcG9uc2UgPSBzZGsucmF3X3Jlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGF0aChwYXRoKSB7IHRoaXMucGF0aCA9IHBhdGg7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0UGFyYW1zKHBhcmFtcykgeyB0aGlzLnBhcmFtcyA9IChwYXJhbXMgJiYgcGFyYW1zLmlzUXVlcnlGaWx0ZXIgJiYgKHBhcmFtcy5pc1F1ZXJ5RmlsdGVyKCkgPT09IHRydWUpKT8gcGFyYW1zLmJ1aWxkKCkgOiBwYXJhbXM7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0TWV0aG9kKG1ldGhvZCkgeyB0aGlzLm1ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRCb2R5KGJvZHkpIHsgdGhpcy5ib2R5ID0gYm9keTsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRIZWFkZXJzKGhlYWRlcnMpIHsgdGhpcy5oZWFkZXJzID0gaGVhZGVyczsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgbmV3QXR0ZW1wdCgpIHsgdGhpcy5hdHRlbXB0Kys7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3QgT3B0aW9uc1xyXG4gICAgICAgIHJhd1Jlc3BvbnNlKHJhdykgeyB0aGlzLnJhd19yZXNwb25zZSA9IHJhdz8gcmF3IDogc2RrLnJhd19yZXNwb25zZTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gT25seSByZWFsbHkgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGJlaW5nIHNldHRlZFxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJhd1Jlc3BvbnNlKG9wdGlvbnMucmF3X3Jlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAgICAgY2hlY2tBcGlDb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAvLyAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjb3BlOiAnbWFya2V0OicgKyB0aGlzLmNvbmZpZy5tYXJrZXRfaWRcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGF1dGguYXV0aGVudGljYXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHModGhpcy5jb25maWcuY2xpZW50X2lkKS5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYWxsKGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lc3NhZ2UobXNnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFwaVJlcXVlc3QuY29ycmVsYXRpb25faWQ/IGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGAgOiAnJykuY29uY2F0KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcGlSZXF1ZXN0Lm5ld0F0dGVtcHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VfcGF0aCA9ICgodGhpcy5jb25maWcuYmFzZV9wYXRoICE9IHVuZGVmaW5lZCk/IHRoaXMuY29uZmlnLmJhc2VfcGF0aCA6ICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgKHRvIGJlIHJlbW92ZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBiYXNlX3BhdGggKyBhcGlSZXF1ZXN0LnBhdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGFwaVJlcXVlc3QucGFyYW1zO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBhcGlSZXF1ZXN0Lm1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHF1ZXJ5U3RyaW5nXHJcbiAgICAgICAgICAgIGxldCBjYWxsVXJsID0gcGF0aDtcclxuICAgICAgICAgICAgaWYgKChwYXJhbXMgIT0gdW5kZWZpbmVkKSAmJiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW1zW2tleV1cclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgIGNhbGxVcmwgPSBjYWxsVXJsLmNvbmNhdCgnPycpLmNvbmNhdChxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdwYXRoOiAnICsgY2FsbFVybCkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjYWxsVXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZGsudGltZW91dC5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2UgY3VzdG9tIGFuZCBkZWZhdWx0IGhlYWRlcnNcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kTWFwKGF4aW9zQ29uZmlnLmhlYWRlcnMsIGFwaVJlcXVlc3QuaGVhZGVycyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2R5XHJcbiAgICAgICAgICAgIGlmIChhcGlSZXF1ZXN0LmJvZHkgIT0gdW5kZWZpbmVkKSBheGlvc0NvbmZpZy5kYXRhID0gYXBpUmVxdWVzdC5ib2R5O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF4X2F0dGVtcHRzID0gc2RrLmF1dGhfYXR0ZW1wdHM/IHNkay5hdXRoX2F0dGVtcHRzIDogMTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgYXV0aGVudGljYXRlZCBleGVjdXRlIGF1dGhlbnRpY2F0aW9uIHRoZW4gcmUtZXhlY3V0ZSBjYWxsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYWNjZXNzX3Rva2VuIG51bGwsIGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5hdXRoX2F0dGVtcHRzID4gbWF4X2F0dGVtcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZGsudGltZW91dC5yZXRyeSkgdGhyb3cgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgYXV0aGVudGljYXRpb24gYXR0ZW1wdHMgKCR7bWF4X2F0dGVtcHRzfSkgYW5kIG5vIHJldHJ5IHRpbWVvdXQgY29uZmlndXJlZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5zbGVlcChzZGsudGltZW91dC5yZXRyeSwgbWVzc2FnZSgnYW5vdGhlciBhdXRoIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4geyByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGUoKS50aGVuKGFjY2Vzc190b2tlbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnZXhlY3V0aW5nIGFwaSBjYWxsIC4uLicpKTtcclxuICAgICAgICAgICAgICAgIGF4aW9zQ29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zQ29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FwaSBjYWxsIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKGVycm9yPyBlcnJvciA6ICdlcnJvciBkZXRlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdFQ09OTkFCT1JURUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgndGltZW91dCBleGNlcHRpb246JyArIGVycm9yLmNvbmZpZy50aW1lb3V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBpIGVycm9uZW91c2x5IHJldHVybiBjb2RlIDQwMSBpbnN0ZWFkIG9mIGNvZGUgNDAzIGZvciBVTkFVVEhPUklaRUQgY2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICYmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5jb2RlID09ICdJTlZBTElEX1RPS0VOJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdpbnZhbGlkIHRva2VuLCBhY2Nlc3MgZGVuaWVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGNsYXllcjoge1xyXG5cclxuICAgICAgICBkZWZhdWx0IDogdHJ1ZSxcclxuICBcclxuICAgICAgICBjbGllbnRfaWQgOiAnMzUxMDIwZTljODRmMjA3Njc1NTA4M2YwOGJmZThlNDczNjVhNzYzOTVkYjEwNTljMzIxOWMzN2FiZmY4NjUzNCcsXHJcbiAgICAgICAgbWFya2V0X2lkIDogJzE4NScsXHJcbiAgICAgICAgYmFzZV91cmwgOiBcImh0dHBzOi8vc3RhdGljLWNvbW1lcmNlLmNvbW1lcmNlbGF5ZXIuaW9cIixcclxuICAgICAgICBiYXNlX3BhdGggOiBudWxsLFxyXG4gICAgICAgIGNvdW50cnlfY29kZSA6ICdVUycsXHJcbiAgICAgICAgbGFuZ3VhZ2VfY29kZSA6ICdlbicsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZGs6IHtcclxuICAgICAgICBkZWJ1ZyAgICAgICAgICAgOiBmYWxzZSwgICAgLy8gZGVidWcgbW9kZSBhY3RpdmF0ZWRcclxuICAgICAgICBjb25zb2xlICAgICAgICAgOiBmYWxzZSwgICAgLy8gbG9nIHRvIGNvbnNvbGUgZW5hYmxlZFxyXG4gICAgICAgIHRyYWNlICAgICAgICAgICA6IGZhbHNlLCAgICAvLyB0cmFjZSBjbGllbnQgaW5wdXQvb3V0cHV0IHRvIGNvbnNvbGVcclxuICAgICAgICBhdXRoX2F0dGVtcHRzICAgOiAxLCAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmF3X3Jlc3BvbnNlICAgIDogZmFsc2UsICAgIC8vIGdldCByZXNwb25zZSBpbiBKU09OLUFwaSBmb3JtYXQgd2l0aG91dCBkZXNlcmlhbGl6YXRpb25cclxuICAgICAgICB0aW1lb3V0IDogeyAvLyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgcmV0cnkgOiAyNTAsICAgIC8vIHJldHJ5IGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCA6IDIwMDAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImNvbnN0IG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ2pzb24tYXBpLW5vcm1hbGl6ZScpXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gKGJvZHkpID0+IHtcclxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkgcmV0dXJuIGJvZHk7XHJcbiAgICBlbHNlIHJldHVybiAoYm9keS5kYXRhID09IHVuZGVmaW5lZCk/IG5ldyBKc29uQXBpUmVzb3VyY2UoYm9keSkuc2VyaWFsaXplKCkgOiBib2R5O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZGVzZXJpYWxpemUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShkYXRhKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5vcm1hbGl6ZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplKGRhdGEpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgSnNvbkFwaVJlc291cmNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXNvdXJjZSA9IHt9KSB7XHJcblxyXG4gICAgICAgIGlmIChyZXNvdXJjZSAhPSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYXR0cmlidXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogcG9ydGFyZSBpZCBlIHR5cGUgaW4gdGVzdGEgYWQgb2duaSBvYmplY3RcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gcmVzb3VyY2Vba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoWydpZCcsICd0eXBlJ10uaW5jbHVkZXMoa2V5KSkgdGhpcy5kYXRhW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmlzQXBpUmVzb3VyY2UgJiYgZmllbGQuaXNBcGlSZXNvdXJjZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzW2tleS5zdGFydHNXaXRoKCdfXycpPyBrZXkuc3Vic3RyKCdfXycubGVuZ3RoKSA6IGtleV0gPSB7IGRhdGE6IHsgdHlwZTogZmllbGQudHlwZSwgaWQ6IGZpZWxkLmlkIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRhdGEuYXR0cmlidXRlc1trZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiB7IGRhdGE6IHRoaXMuZGF0YSB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG4vLyBCYXNpYyBBYnN0cmFjdCBSZXNvdXJjZVxyXG5jbGFzcyBSZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlzQXBpUmVzb3VyY2UoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBzZXRSZXNvdXJjZShmaWVsZCwgcmVzKSB7IGlmICgocmVzICE9IHVuZGVmaW5lZCkgJiYgcmVzLmlzQXBpUmVzb3VyY2UgJiYgcmVzLmlzQXBpUmVzb3VyY2UoKSkgdGhpc1snX18nLmNvbmNhdChmaWVsZCldID0gcmVzOyB9XHJcbiAgICBnZXRSZXNvdXJjZShmaWVsZCkgeyByZXR1cm4gdGhpc1snX18nLmNvbmNhdChmaWVsZCldOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBBZGRyZXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2FkZHJlc3NlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEFkZHJlc3MuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5idXNpbmVzcyA9IGZpZWxkcy5idXNpbmVzcztcclxuICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuICAgICAgICB0aGlzLmxhc3RfbmFtZSA9IGZpZWxkcy5sYXN0X25hbWU7XHJcbiAgICAgICAgdGhpcy5jb21wYW55ID0gZmllbGRzLmNvbXBhbnk7XHJcbiAgICAgICAgdGhpcy5saW5lXzEgPSBmaWVsZHMubGluZV8xO1xyXG4gICAgICAgIHRoaXMubGluZV8yID0gZmllbGRzLmxpbmVfMjtcclxuICAgICAgICB0aGlzLmNpdHkgPSBmaWVsZHMuY2l0eTtcclxuICAgICAgICB0aGlzLnppcF9jb2RlID0gZmllbGRzLnppcF9jb2RlO1xyXG4gICAgICAgIHRoaXMuc3RhdGVfY29kZSA9IGZpZWxkcy5zdGF0ZV9jb2RlO1xyXG4gICAgICAgIHRoaXMuY291bnRyeV9jb2RlID0gZmllbGRzLmNvdW50cnlfY29kZTtcclxuICAgICAgICB0aGlzLnBob25lID0gZmllbGRzLnBob25lO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IGZpZWxkcy5ub3RlcztcclxuICAgICAgICB0aGlzLmxhdCA9IGZpZWxkcy5sYXQ7XHJcbiAgICAgICAgdGhpcy5sbmcgPSBmaWVsZHMubG5nO1xyXG4gICAgICAgIHRoaXMuYmlsbGluZ19pbmZvID0gZmllbGRzLmJpbGxpbmdfaW5mbztcclxuICAgIH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBnZW9jb2Rlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnZ2VvY29kZXInLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IGdlb2NvZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2dlb2NvZGVyJykgfVxyXG59XHJcblxyXG5cclxuLy8gQ3JlZGl0Q2FyZCByZXNvdXJjZVxyXG5jbGFzcyBDcmVkaXRDYXJkIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2NyZWRpdF9jYXJkcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIENyZWRpdENhcmQuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gZmllbGRzLm51bWJlcjtcclxuICAgICAgICB0aGlzLm1vbnRoID0gZmllbGRzLm1vbnRoO1xyXG4gICAgICAgIHRoaXMueWVhciA9IGZpZWxkcy55ZWFyO1xyXG4gICAgICAgIHRoaXMudmVyaWZpY2F0aW9uX3ZhbHVlID0gZmllbGRzLnZlcmlmaWNhdGlvbl92YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXIuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuICAgIH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBjdXN0b21lcl9ncm91cCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXJfZ3JvdXAnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IGN1c3RvbWVyX2dyb3VwKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyX2dyb3VwJykgfVxyXG59XHJcblxyXG5cclxuLy8gQ3VzdG9tZXJBZGRyZXNzIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9hZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lckFkZHJlc3MuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuICAgIGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuLy8gQ3VzdG9tZXJHcm91cCByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lckdyb3VwIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX2dyb3VwcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyR3JvdXAuVFlQRSk7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcbiAgICBnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG59XHJcblxyXG5cclxuLy8gQ3VzdG9tZXJQYXNzd29yZFJlc2V0IHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGFzc3dvcmRSZXNldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXNzd29yZF9yZXNldHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBhc3N3b3JkUmVzZXQuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEN1c3RvbWVyUGF5bWVudFNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBheW1lbnRTb3VyY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXltZW50U291cmNlLlRZUEUpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcbiAgICBnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcbiAgICBzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuICAgIGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcbi8vIERlbGl2ZXJ5TGVhZFRpbWUgcmVzb3VyY2VcclxuY2xhc3MgRGVsaXZlcnlMZWFkVGltZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdkZWxpdmVyeV9sZWFkX3RpbWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgRGVsaXZlcnlMZWFkVGltZS5UWVBFKTtcclxuICAgICAgICB0aGlzLm1pbl9ob3VycyA9IGZpZWxkcy5taW5faG91cnM7XHJcbiAgICAgICAgdGhpcy5tYXhfaG91cnMgPSBmaWVsZHMubWF4X2hvdXJzO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcbiAgICBnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcbiAgICBzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG4vLyBJbXBvcnQgcmVzb3VyY2VcclxuY2xhc3MgSW1wb3J0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ltcG9ydHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbXBvcnQuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZV90eXBlID0gZmllbGRzLnJlc291cmNlX3R5cGU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRfcmVzb3VyY2VfaWQgPSBmaWVsZHMucGFyZW50X3Jlc291cmNlX2lkO1xyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gZmllbGRzLmlucHV0cztcclxuICAgICAgICB0aGlzLmNsZWFudXBfcmVjb3JkcyA9IGZpZWxkcy5jbGVhbnVwX3JlY29yZHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBJbnZlbnRvcnlNb2RlbCByZXNvdXJjZVxyXG5jbGFzcyBJbnZlbnRvcnlNb2RlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdpbnZlbnRvcnlfbW9kZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgSW52ZW50b3J5TW9kZWwuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gLy8gTGluZUl0ZW0gcmVzb3VyY2VcclxuIGNsYXNzIExpbmVJdGVtIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbS5UWVBFKTtcclxuICAgICAgICB0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfcXVhbnRpdHkgPSBmaWVsZHMuX3VwZGF0ZV9xdWFudGl0eTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcbiAgICAgICAgdGhpcy5vcmRlciA9IGZpZWxkcy5vcmRlcjtcclxuICAgICAgICB0aGlzLml0ZW0gPSBmaWVsZHMuaXRlbTtcclxuICAgIH1cclxuICAgIHNldCB1cGRhdGVfcXVhbnRpdHkodmFsdWUpIHsgdGhpcy5fdXBkYXRlX3F1YW50aXR5ID0gdmFsdWU/ICcxJyA6IG51bGw7IH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuLy8gTGluZUl0ZW1PcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW1PcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtX29wdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbU9wdGlvbi5UWVBFKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGZpZWxkcy5vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IGxpbmVfaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbGluZV9pdGVtJywgdmFsdWUpIH1cclxuICAgIGdldCBsaW5lX2l0ZW0oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbGluZV9pdGVtJykgfVxyXG4gICAgc2V0IHNrdV9vcHRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IHNrdV9vcHRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1X29wdGlvbicpIH1cclxufVxyXG5cclxuXHJcbi8vIE1hcmtldCByZXNvdXJjZVxyXG5jbGFzcyBNYXJrZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWFya2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1hcmtldC5UWVBFKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB0aGlzLmZhY2Vib29rX3BpeGVsX2lkID0gZmllbGRzLmZhY2Vib29rX3BpeGVsX2lkO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IG1lcmNoYW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtZXJjaGFudCcsIHZhbHVlKSB9XHJcbiAgICBnZXQgbWVyY2hhbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWVyY2hhbnQnKSB9XHJcbiAgICBzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcbiAgICBnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG4gICAgc2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuICAgIGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuLy8gTWVyY2hhbnQgcmVzb3VyY2VcclxuY2xhc3MgTWVyY2hhbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWVyY2hhbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWVyY2hhbnQuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcbiAgICBnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuLy8gT3JkZXIgcmVzb3VyY2VcclxuY2xhc3MgT3JkZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnb3JkZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgT3JkZXIuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5ndWVzdCA9IGZpZWxkcy5ndWVzdDtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZV9jb2RlID0gZmllbGRzLmxhbmd1YWdlX2NvZGU7XHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayA9IGZpZWxkcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jaztcclxuICAgICAgICB0aGlzLmNvdXBvbl9jb2RlID0gZmllbGRzLmNvdXBvbl9jb2RlO1xyXG4gICAgICAgIHRoaXMuY2FydF91cmwgPSBmaWVsZHMuY2FydF91cmw7XHJcbiAgICAgICAgdGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcbiAgICAgICAgdGhpcy50ZXJtc191cmwgPSBmaWVsZHMudGVybXNfdXJsO1xyXG4gICAgICAgIHRoaXMucHJpdmFjeV91cmwgPSBmaWVsZHMucHJpdmFjeV91cmw7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbiAgICBzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuICAgIGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuICAgIHNldCBzaGlwcGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuICAgIGdldCBzaGlwcGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnKSB9XHJcbiAgICBzZXQgYmlsbGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IGJpbGxpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnKSB9XHJcbiAgICBzZXQgcGF5bWVudF9tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJywgdmFsdWUpIH1cclxuICAgIGdldCBwYXltZW50X21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcpIH1cclxuICAgIHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuLy8gUGFyY2VsIHJlc291cmNlXHJcbmNsYXNzIFBhcmNlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXJjZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGFyY2VsLlRZUEUpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuICAgICAgICB0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuZWVsX3BmYyA9IGZpZWxkcy5lZWxfcGZjO1xyXG4gICAgICAgIHRoaXMuY29udGVudHNfdHlwZSA9IGZpZWxkcy5jb250ZW50c190eXBlO1xyXG4gICAgICAgIHRoaXMuY29udGVudHNfZXhwbGFuYXRpb24gPSBmaWVsZHMuY29udGVudHNfZXhwbGFuYXRpb247XHJcbiAgICAgICAgdGhpcy5jdXN0b21zX2NlcnRpZnkgPSBmaWVsZHMuY3VzdG9tc19jZXJ0aWZ5O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tc19zaWduZXIgPSBmaWVsZHMuY3VzdG9tc19zaWduZXI7XHJcbiAgICAgICAgdGhpcy5ub25fZGVsaXZlcnlfb3B0aW9uID0gZmllbGRzLm5vbl9kZWxpdmVyeV9vcHRpb247XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdGlvbl90eXBlID0gZmllbGRzLnJlc3RyaWN0aW9uX3R5cGU7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdGlvbl9jb21tZW50cyA9IGZpZWxkcy5yZXN0cmljdGlvbl9jb21tZW50cztcclxuICAgICAgICB0aGlzLmN1c3RvbXNfaW5mb19yZXF1aXJlZCA9IGZpZWxkcy5jdXN0b21zX2luZm9fcmVxdWlyZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgc2hpcG1lbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBtZW50JywgdmFsdWUpIH1cclxuICAgIGdldCBzaGlwbWVudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwbWVudCcpIH1cclxufVxyXG5cclxuXHJcbi8vIFBheW1lbnRNZXRob2QgcmVzb3VyY2VcclxuY2xhc3MgUGF5bWVudE1ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXltZW50X21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXltZW50TWV0aG9kLlRZUEUpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9zb3VyY2VfdHlwZSA9IGZpZWxkcy5wYXltZW50X3NvdXJjZV90eXBlO1xyXG4gICAgICAgIHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcbiAgICBnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuICAgIHNldCBwYXltZW50X2dhdGV3YXkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScsIHZhbHVlKSB9XHJcbiAgICBnZXQgcGF5bWVudF9nYXRld2F5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScpIH1cclxufVxyXG5cclxuXHJcbi8vIFBheXBhbFBheW1lbnQgcmVzb3VyY2VcclxuY2xhc3MgUGF5cGFsUGF5bWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXlwYWxfcGF5bWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXlwYWxQYXltZW50LlRZUEUpO1xyXG4gICAgICAgIHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsX3VybCA9IGZpZWxkcy5jYW5jZWxfdXJsO1xyXG4gICAgICAgIHRoaXMubm90ZV90b19wYXllciA9IGZpZWxkcy5ub3RlX3RvX3BheWVyO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcbiAgICBnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG4vLyBQcmljZSByZXNvdXJjZVxyXG5jbGFzcyBQcmljZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwcmljZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZS5UWVBFKTtcclxuICAgICAgICB0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50X2NlbnRzID0gZmllbGRzLmFtb3VudF9jZW50cztcclxuICAgICAgICB0aGlzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzID0gZmllbGRzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuICAgIHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcbiAgICBnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcbi8vIFByaWNlTGlzdCByZXNvdXJjZVxyXG5jbGFzcyBQcmljZUxpc3QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VfbGlzdHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZUxpc3QuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW5jeV9jb2RlID0gZmllbGRzLmN1cnJlbmN5X2NvZGU7XHJcbiAgICAgICAgdGhpcy50YXhfaW5jbHVkZWQgPSBmaWVsZHMudGF4X2luY2x1ZGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIC8vIFNoaXBtZW50IHJlc291cmNlXHJcbiBjbGFzcyBTaGlwbWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwbWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwbWVudC5UWVBFKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFNoaXBwaW5nQ2F0ZWdvcnkgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdDYXRlZ29yeSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19jYXRlZ29yaWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdDYXRlZ29yeS5UWVBFKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFNoaXBwaW5nTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ01ldGhvZC5UWVBFKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcbiAgICAgICAgdGhpcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzID0gZmllbGRzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbiAgICBzZXQgc2hpcHBpbmdfem9uZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScsIHZhbHVlKSB9XHJcbiAgICBnZXQgc2hpcHBpbmdfem9uZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ196b25lJykgfVxyXG4gICAgc2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcbiAgICBnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG4vLyBTaGlwcGluZ1pvbmUgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdab25lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX3pvbmVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdab25lLlRZUEUpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLmNvdW50cnlfY29kZV9yZWdleDtcclxuICAgICAgICB0aGlzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMubm90X2NvdW50cnlfY29kZV9yZWdleDtcclxuICAgICAgICB0aGlzLnN0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMuc3RhdGVfY29kZV9yZWdleDtcclxuICAgICAgICB0aGlzLm5vdF9zdGF0ZV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9zdGF0ZV9jb2RlX3JlZ2V4O1xyXG4gICAgICAgIHRoaXMuemlwX2NvZGVfcmVnZXggPSBmaWVsZHMuemlwX2NvZGVfcmVnZXg7XHJcbiAgICAgICAgdGhpcy5ub3RfemlwX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3ppcF9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIC8vIFNrdSByZXNvdXJjZVxyXG4gY2xhc3MgU2t1IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3UuVFlQRSk7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gZmllbGRzLmNvZGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGZpZWxkcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcbiAgICAgICAgdGhpcy50YWdfbmFtZXMgPSBmaWVsZHMudGFnX25hbWVzO1xyXG4gICAgICAgIHRoaXMucGllY2VzX3Blcl9wYWNrID0gZmllbGRzLnBpZWNlc19wZXJfcGFjaztcclxuICAgICAgICB0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcbiAgICAgICAgdGhpcy51bml0X29mX3dlaWdodCA9IGZpZWxkcy51bml0X29mX3dlaWdodDtcclxuICAgIH1cclxuICAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuICAgIGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcbi8vIFNrdU9wdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTa3VPcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2t1X29wdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3VPcHRpb24uVFlQRSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG4gICAgICAgIHRoaXMuZGVsYXlfaG91cnMgPSBmaWVsZHMuZGVsYXlfaG91cnM7XHJcbiAgICAgICAgdGhpcy5za3VfY29kZV9yZWdleCA9IGZpZWxkcy5za3VfY29kZV9yZWdleDtcclxuICAgIH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcbiAgICBnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxufVxyXG5cclxuXHJcbi8vIFN0b2NrSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0l0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0l0ZW0uVFlQRSk7XHJcbiAgICAgICAgdGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcbiAgICBnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcbiAgICBzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG4vLyBTdG9ja0xldmVsIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTGV2ZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbGV2ZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMZXZlbC5UWVBFKTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gZmllbGRzLnByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMub25faG9sZCA9IGZpZWxkcy5vbl9ob2xkO1xyXG4gICAgfVxyXG4gICAgLy8gUmVsYXRpb25zaGlwc1xyXG4gICAgc2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcbiAgICBnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcbiAgICBzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbn1cclxuXHJcblxyXG4vLyBTdG9ja0xvY2F0aW9uIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTG9jYXRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbG9jYXRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMb2NhdGlvbi5UWVBFKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Zvcm1hdCA9IGZpZWxkcy5sYWJlbF9mb3JtYXQ7XHJcbiAgICB9XHJcbiAgICAvLyBSZWxhdGlvbnNoaXBzXHJcbiAgICBzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcbiAgICBnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuLy8gV2ViaG9vayByZXNvdXJjZVxyXG5jbGFzcyBXZWJob29rIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dlYmhvb2tzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2ViaG9vay5UWVBFKTtcclxuICAgICAgICB0aGlzLnRvcGljID0gZmllbGRzLnRvcGljO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfdXJsID0gZmllbGRzLmNhbGxiYWNrX3VybDtcclxuICAgICAgICB0aGlzLmluY2x1ZGVfcmVzb3VyY2VzID0gZmllbGRzLmluY2x1ZGVfcmVzb3VyY2VzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gV2lyZVRyYW5zZmVyIHJlc291cmNlXHJcbmNsYXNzIFdpcmVUcmFuc2ZlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3aXJlX3RyYW5zZmVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdpcmVUcmFuc2Zlci5UWVBFKTtcclxuICAgIH1cclxuICAgIC8vIFJlbGF0aW9uc2hpcHNcclxuICAgIHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG4gICAgZ2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIEFkZHJlc3MsXHJcbiAgICBDcmVkaXRDYXJkLFxyXG4gICAgQ3VzdG9tZXIsXHJcbiAgICBDdXN0b21lckFkZHJlc3MsXHJcbiAgICBDdXN0b21lckdyb3VwLFxyXG4gICAgQ3VzdG9tZXJQYXNzd29yZFJlc2V0LCAgICBcclxuICAgIEN1c3RvbWVyUGF5bWVudFNvdXJjZSxcclxuICAgIERlbGl2ZXJ5TGVhZFRpbWUsXHJcbiAgICBJbXBvcnQsXHJcbiAgICBJbnZlbnRvcnlNb2RlbCxcclxuICAgIExpbmVJdGVtLFxyXG4gICAgTGluZUl0ZW1PcHRpb24sXHJcbiAgICBNYXJrZXQsXHJcbiAgICBNZXJjaGFudCwgICAgXHJcbiAgICBPcmRlcixcclxuICAgIFBhcmNlbCxcclxuICAgIFBheW1lbnRNZXRob2QsXHJcbiAgICBQYXlwYWxQYXltZW50LFxyXG4gICAgUHJpY2UsXHJcbiAgICBQcmljZUxpc3QsXHJcbiAgICBTaGlwbWVudCxcclxuICAgIFNoaXBwaW5nQ2F0ZWdvcnksXHJcbiAgICBTaGlwcGluZ01ldGhvZCxcclxuICAgIFNoaXBwaW5nWm9uZSwgICAgXHJcbiAgICBTa3UsICAgIFxyXG4gICAgU2t1T3B0aW9uLFxyXG4gICAgU3RvY2tJdGVtLCAgICBcclxuICAgIFN0b2NrTGV2ZWwsICAgIFxyXG4gICAgU3RvY2tMb2NhdGlvbixcclxuICAgIFdlYmhvb2ssXHJcbiAgICBXaXJlVHJhbnNmZXJcclxuXHJcbn0iLCJcclxuY2xhc3MgUXVlcnlGaWx0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5zcGFyc2VfZmllbGRzZXRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcl9maWVsZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmN1c3RvbV9wYXJhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucGFnZV9zaXplID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUXVlcnlGaWx0ZXIoKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgc29ydChmaWVsZCwgZGVzY2VuZGluZykge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMucHVzaCgoZGVzY2VuZGluZz8gJy0nIDogJycpLmNvbmNhdChmaWVsZCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkcyhyZXNvdXJjZSwgLi4uZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkcyAhPSB1bmRlZmluZWQpIHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNvdXJjZV0gPSBmaWVsZHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jbHVkZSguLi5yZXNvdXJjZXMpIHtcclxuICAgICAgICAvLyBpZiAocmVzb3VyY2VzICE9IHVuZGVmaW5lZCkgcmVzb3VyY2VzLmZvckVhY2gocmVzID0+IHsgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMucHVzaChyZXMpIH0pXHJcbiAgICAgICAgaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzb3VyY2VzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZmlsdGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoZmlsdGVyICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoa2V5ICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuY3VzdG9tX3BhcmFtc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSBwYWdlX251bWJlcj8gcGFnZV9udW1iZXIrKyA6IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoam9pbikge1xyXG5cclxuICAgICAgICBsZXQgcXNNYXAgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykuZm9yRWFjaChmaWx0ZXIgPT4geyBxc01hcFtgZmlsdGVyWyR7ZmlsdGVyfV1gXSA9IHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluY2x1ZGVkIFJlc291cmNlc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmluY2x1ZGVkX3Jlc291cmNlcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuaW5jbHVkZSA9IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gU3BhcnNlIEZpZWxkc2V0c1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykuZm9yRWFjaChyZXMgPT4geyBxc01hcFtgZmllbGRzWyR7cmVzfV1gXSA9IHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNdLmpvaW4oJywnKSB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zb3J0X2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuc29ydCA9IHRoaXMuc29ydF9maWVsZHMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gUGFyYW1zXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7IHFzTWFwW2tleV0gPSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSB9KVxyXG5cclxuICAgICAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9udW1iZXIgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtudW1iZXJdJ10gPSB0aGlzLnBhZ2VfbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2Vfc2l6ZSAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW3NpemVdJ10gPSB0aGlzLnBhZ2Vfc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFqb2luPyBxc01hcCA6IE9iamVjdC5rZXlzKHFzTWFwKS5tYXAoa2V5ID0+IHsgcmV0dXJuIGtleSsnPScrcXNNYXBba2V5XSB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBsb2cgOiAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLmNvbnNvbGUpIGNvbnNvbGUubG9nKChtZXNzYWdlID09IHVuZGVmaW5lZCk/ICcnIDogbWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZE1hcCA6IChtYXAsIGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXAgPT0gdW5kZWZpbmVkKSBtYXAgPSB7fTtcclxuICAgICAgICBpZiAoZXh0ICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGtleSA9PiB7IG1hcFtrZXldID0gZXh0W2tleV07IH0pO1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlTWFwcyA6IChtYXAxLCBtYXAyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubWFwMSwgLi4ubWFwMiB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lTWFwIDogKG1hcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobWFwID09IHVuZGVmaW5lZCk/IG1hcCA6IHsgLi4ubWFwIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwIDogKG1zLCBtc2cpID0+IHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cy5sb2coKG1zZz8gYCR7bXNnfSAtIGAgOiAnJykuY29uY2F0KGB3YWl0aW5nICR7bXN9IG1zZWNzIC4uLmApKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGd1aWQgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArICcuJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLnN1YnN0cigwLCA2KSkudG9VcHBlckNhc2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNRdWVyeUZpbHRlcihvYmopIHtcclxuICAgICAgICByZXR1cm4gKG9iaiAmJiBvYmouaXNRdWVyeUZpbHRlciAmJiAob2JqLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuanNvbkFwaU5vcm1hbGl6ZSA9IGZhY3RvcnkoKTtcbiAgICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBOb3JtYWxpemVyKGRhdGFzZXQsIHByb3BlcnR5KSB7XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vcm1hbGl6ZXIpKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplckluc3RhbmNlID0gbmV3IE5vcm1hbGl6ZXIoZGF0YXNldCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHkgPyBub3JtYWxpemVySW5zdGFuY2UuZ2V0KHByb3BlcnR5KSA6IG5vcm1hbGl6ZXJJbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YXNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGFzZXQgPSBKU09OLnBhcnNlKGRhdGFzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhc2V0IHx8ICFkYXRhc2V0LmRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBqc29uIGFwaSBub3JtYWxpemVyIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmlzQ29sbGVjdGlvbiA9IGlzQXJyYXkoZGF0YXNldC5kYXRhKTtcblxuICAgICAgICB0aGlzLmhheXN0YWNrID0gYnVpbGRIYXlzdGFjayhkYXRhc2V0LmluY2x1ZGVkLCB0aGlzLmlzQ29sbGVjdGlvbiA/IGRhdGFzZXQuZGF0YSA6IFtkYXRhc2V0LmRhdGFdKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkSGF5c3RhY2soaW5jbHVkZWQsIGFkZGl0aW9uYWxJdGVtcykge1xuXG4gICAgICAgIHZhciBzaWduYXR1cmVzID0gW107XG4gICAgICAgIHZhciBoYXlzdGFjayA9IGluY2x1ZGVkIHx8IFtdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgc2lnbmF0dXJlcy5wdXNoKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWFjaChhZGRpdGlvbmFsSXRlbXMsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZXMuaW5kZXhPZihlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaGF5c3RhY2sucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGtleSkgJiYgY2FsbGJhY2suY2FsbChjb250ZXh0LCBrZXksIGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGl0ZW0sIGtleSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0LCBvYmopIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvdXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgKG91dFtrZXldID0ge30pO1xuICAgICAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciBkYXRhID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eVRyZWUsIGZ1bmN0aW9uKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICBpZiAoIXJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHJlbGF0ZWRFbnRpdHkgPyBuZXcgTm9ybWFsaXplcih7ZGF0YTogcmVsYXRlZEVudGl0eSwgaW5jbHVkZWQ6IGhheXN0YWNrfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRSZWxhdGlvbkRhdGEocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KSB7XG5cbiAgICAgICAgcmV0dXJuIFsnaWQnLCAndHlwZSddLmluZGV4T2YocHJvcGVydHkpID49IDAgPyBlbnRpdHlbcHJvcGVydHldIDogZW50aXR5LmF0dHJpYnV0ZXNbcHJvcGVydHldO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRpb25EYXRhKHJlbGF0aW9uTmFtZSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdLmRhdGE7XG4gICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gcmVsYXRpb25EYXRhICYmIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkocmVsYXRlZEVudGl0eSkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcChyZWxhdGVkRW50aXR5LCBmdW5jdGlvbihzaW5nbGVSZWxhdGVkRW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCBzaW5nbGVSZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFyZWxhdGVkRW50aXR5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUmVsYXRpb24ocHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHJldHVybiBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbChuZXcgTm9ybWFsaXplcih7XG4gICAgICAgICAgICBkYXRhOiByZWxhdGVkRW50aXR5LFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGhheXN0YWNrXG4gICAgICAgIH0pLCBwcm9wZXJ0eVRyZWUpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICB2YXIgc2VhcmNoID0gaXNBcnJheShyZWxhdGlvbkRhdGEpID8gbWFwKHJlbGF0aW9uRGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQ7XG4gICAgICAgIH0pIDogW3JlbGF0aW9uRGF0YS50eXBlICsgJ0AnICsgcmVsYXRpb25EYXRhLmlkXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBzZWFyY2guaW5kZXhPZihpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkKSA+PSAwICYmIHRlbXAucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXAubGVuZ3RoID09PSAxICYmICFpc0FycmF5KHJlbGF0aW9uRGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9OZXN0ZWRPYmplY3QoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIHRlbXAgPSBvYmo7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2NvbGxlY3Rpb25baV1dID0gdGVtcFtjb2xsZWN0aW9uW2ldXSB8fCAoaSsxID09PSBjb2xsZWN0aW9uTGVuZ3RoID8gdW5kZWZpbmVkIDoge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUHJvcGVydHlUcmVlKHByb3BlcnR5TGlzdCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eUxpc3QsIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVBhcnRzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQodGVtcCwgYXJyYXlUb05lc3RlZE9iamVjdChwcm9wZXJ0eVBhcnRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbcHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlhUHJvcGVydHlUcmVlKHByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHRoaXMuZGF0YXNldC5kYXRhLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgdGhpcy5oYXlzdGFjayk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIHRoaXMuZGF0YXNldC5kYXRhLCB0aGlzLmhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBOb3JtYWxpemVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbCh0aGlzLCBidWlsZFByb3BlcnR5VHJlZShpc0FycmF5KHByb3BlcnR5KSA/IHByb3BlcnR5IDogW3Byb3BlcnR5XSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogbWFwKHJlc3VsdCwgZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbVtwcm9wZXJ0eV07IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogcmVzdWx0W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHJldHVybiBOb3JtYWxpemVyO1xuXG59KSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==