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

module.exports = __webpack_require__(/*! ./lib/clayer */ "./lib/clayer.js"); // Model Extension

module.exports.model = __webpack_require__(/*! ./lib/model */ "./lib/model.js"); // QueryFilter Extension

module.exports.query = __webpack_require__(/*! ./lib/query */ "./lib/query.js"); // QueryExpression Extension

module.exports.queryx = __webpack_require__(/*! ./lib/queryx */ "./lib/queryx.js"); // CommerceLayer constants

module.exports.const = __webpack_require__(/*! ./lib/const */ "./lib/const.js");

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

// File automatically generated at 02/03/2019 19:27:58 by commercelayer-js-sdk-codegen
var client = __webpack_require__(/*! ./client */ "./lib/client.js");

var log = __webpack_require__(/*! ./log */ "./lib/log.js");

var jsonapi = __webpack_require__(/*! ./jsonapi */ "./lib/jsonapi.js");

var errorResponse = __webpack_require__(/*! ./error */ "./lib/error.js").errorResponse;

var sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk;

var CLApi =
/*#__PURE__*/
function () {
  function CLApi() {
    _classCallCheck(this, CLApi);
  }

  _createClass(CLApi, [{
    key: "listAddresses",
    // Address
    value: function listAddresses(filter, options) {
      return request(client.newRequest('/api/addresses').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveAddress",
    value: function retrieveAddress(id, filter, options) {
      return request(client.newRequest("/api/addresses/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createAddress",
    value: function createAddress(address, filter, options) {
      return request(client.newRequest('/api/addresses', 'post').setBody(address).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateAddress",
    value: function updateAddress(id, address, filter, options) {
      return request(client.newRequest("/api/addresses/".concat(id), 'patch').setBody(address).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteAddress",
    value: function deleteAddress(id) {
      return request(client.newRequest("/api/addresses/".concat(id), 'delete'));
    }
  }, {
    key: "allAddresses",
    value: function allAddresses(filter, options) {
      return all(this.listAddresses, filter, options);
    } // Credit Card

  }, {
    key: "listCreditCards",
    value: function listCreditCards(filter, options) {
      return request(client.newRequest('/api/credit_cards').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCreditCard",
    value: function retrieveCreditCard(id, filter, options) {
      return request(client.newRequest("/api/credit_cards/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCreditCard",
    value: function createCreditCard(credit_card, filter, options) {
      return request(client.newRequest('/api/credit_cards', 'post').setBody(credit_card).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCreditCard",
    value: function updateCreditCard(id, credit_card, filter, options) {
      return request(client.newRequest("/api/credit_cards/".concat(id), 'patch').setBody(credit_card).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCreditCard",
    value: function deleteCreditCard(id) {
      return request(client.newRequest("/api/credit_cards/".concat(id), 'delete'));
    }
  }, {
    key: "allCreditCards",
    value: function allCreditCards(filter, options) {
      return all(this.listCreditCards, filter, options);
    } // Customer Address

  }, {
    key: "listCustomerAddresses",
    value: function listCustomerAddresses(filter, options) {
      return request(client.newRequest('/api/customer_addresses').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCustomerAddress",
    value: function retrieveCustomerAddress(id, filter, options) {
      return request(client.newRequest("/api/customer_addresses/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerAddress",
    value: function createCustomerAddress(customer_address, filter, options) {
      return request(client.newRequest('/api/customer_addresses', 'post').setBody(customer_address).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCustomerAddress",
    value: function updateCustomerAddress(id, customer_address, filter, options) {
      return request(client.newRequest("/api/customer_addresses/".concat(id), 'patch').setBody(customer_address).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCustomerAddress",
    value: function deleteCustomerAddress(id) {
      return request(client.newRequest("/api/customer_addresses/".concat(id), 'delete'));
    }
  }, {
    key: "allCustomerAddresses",
    value: function allCustomerAddresses(filter, options) {
      return all(this.listCustomerAddresses, filter, options);
    } // Customer Group

  }, {
    key: "listCustomerGroups",
    value: function listCustomerGroups(filter, options) {
      return request(client.newRequest('/api/customer_groups').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCustomerGroup",
    value: function retrieveCustomerGroup(id, filter, options) {
      return request(client.newRequest("/api/customer_groups/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerGroup",
    value: function createCustomerGroup(customer_group, filter, options) {
      return request(client.newRequest('/api/customer_groups', 'post').setBody(customer_group).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCustomerGroup",
    value: function updateCustomerGroup(id, customer_group, filter, options) {
      return request(client.newRequest("/api/customer_groups/".concat(id), 'patch').setBody(customer_group).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCustomerGroup",
    value: function deleteCustomerGroup(id) {
      return request(client.newRequest("/api/customer_groups/".concat(id), 'delete'));
    }
  }, {
    key: "allCustomerGroups",
    value: function allCustomerGroups(filter, options) {
      return all(this.listCustomerGroups, filter, options);
    } // Customer Password Reset

  }, {
    key: "listCustomerPasswordResets",
    value: function listCustomerPasswordResets(filter, options) {
      return request(client.newRequest('/api/customer_password_resets').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCustomerPasswordReset",
    value: function retrieveCustomerPasswordReset(id, filter, options) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerPasswordReset",
    value: function createCustomerPasswordReset(customer_password_reset, filter, options) {
      return request(client.newRequest('/api/customer_password_resets', 'post').setBody(customer_password_reset).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCustomerPasswordReset",
    value: function updateCustomerPasswordReset(id, customer_password_reset, filter, options) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id), 'patch').setBody(customer_password_reset).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCustomerPasswordReset",
    value: function deleteCustomerPasswordReset(id) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id), 'delete'));
    }
  }, {
    key: "allCustomerPasswordResets",
    value: function allCustomerPasswordResets(filter, options) {
      return all(this.listCustomerPasswordResets, filter, options);
    } // Customer Payment Source

  }, {
    key: "listCustomerPaymentSources",
    value: function listCustomerPaymentSources(filter, options) {
      return request(client.newRequest('/api/customer_payment_sources').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCustomerPaymentSource",
    value: function retrieveCustomerPaymentSource(id, filter, options) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerPaymentSource",
    value: function createCustomerPaymentSource(customer_payment_source, filter, options) {
      return request(client.newRequest('/api/customer_payment_sources', 'post').setBody(customer_payment_source).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCustomerPaymentSource",
    value: function updateCustomerPaymentSource(id, customer_payment_source, filter, options) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id), 'patch').setBody(customer_payment_source).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCustomerPaymentSource",
    value: function deleteCustomerPaymentSource(id) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id), 'delete'));
    }
  }, {
    key: "allCustomerPaymentSources",
    value: function allCustomerPaymentSources(filter, options) {
      return all(this.listCustomerPaymentSources, filter, options);
    } // Customer Subscription

  }, {
    key: "listCustomerSubscriptions",
    value: function listCustomerSubscriptions(filter, options) {
      return request(client.newRequest('/api/customer_subscriptions').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCustomerSubscription",
    value: function retrieveCustomerSubscription(id, filter, options) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerSubscription",
    value: function createCustomerSubscription(customer_subscription, filter, options) {
      return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCustomerSubscription",
    value: function updateCustomerSubscription(id, customer_subscription, filter, options) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id), 'patch').setBody(customer_subscription).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCustomerSubscription",
    value: function deleteCustomerSubscription(id) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id), 'delete'));
    }
  }, {
    key: "allCustomerSubscriptions",
    value: function allCustomerSubscriptions(filter, options) {
      return all(this.listCustomerSubscriptions, filter, options);
    } // Customer

  }, {
    key: "listCustomers",
    value: function listCustomers(filter, options) {
      return request(client.newRequest('/api/customers').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveCustomer",
    value: function retrieveCustomer(id, filter, options) {
      return request(client.newRequest("/api/customers/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomer",
    value: function createCustomer(customer, filter, options) {
      return request(client.newRequest('/api/customers', 'post').setBody(customer).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateCustomer",
    value: function updateCustomer(id, customer, filter, options) {
      return request(client.newRequest("/api/customers/".concat(id), 'patch').setBody(customer).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteCustomer",
    value: function deleteCustomer(id) {
      return request(client.newRequest("/api/customers/".concat(id), 'delete'));
    }
  }, {
    key: "allCustomers",
    value: function allCustomers(filter, options) {
      return all(this.listCustomers, filter, options);
    } // Delivery Lead Time

  }, {
    key: "listDeliveryLeadTimes",
    value: function listDeliveryLeadTimes(filter, options) {
      return request(client.newRequest('/api/delivery_lead_times').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveDeliveryLeadTime",
    value: function retrieveDeliveryLeadTime(id, filter, options) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createDeliveryLeadTime",
    value: function createDeliveryLeadTime(delivery_lead_time, filter, options) {
      return request(client.newRequest('/api/delivery_lead_times', 'post').setBody(delivery_lead_time).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateDeliveryLeadTime",
    value: function updateDeliveryLeadTime(id, delivery_lead_time, filter, options) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id), 'patch').setBody(delivery_lead_time).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteDeliveryLeadTime",
    value: function deleteDeliveryLeadTime(id) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id), 'delete'));
    }
  }, {
    key: "allDeliveryLeadTimes",
    value: function allDeliveryLeadTimes(filter, options) {
      return all(this.listDeliveryLeadTimes, filter, options);
    } // Import

  }, {
    key: "listImports",
    value: function listImports(filter, options) {
      return request(client.newRequest('/api/imports').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveImport",
    value: function retrieveImport(id, filter, options) {
      return request(client.newRequest("/api/imports/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createImport",
    value: function createImport(import_, filter, options) {
      return request(client.newRequest('/api/imports', 'post').setBody(import_).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateImport",
    value: function updateImport(id, import_, filter, options) {
      return request(client.newRequest("/api/imports/".concat(id), 'patch').setBody(import_).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteImport",
    value: function deleteImport(id) {
      return request(client.newRequest("/api/imports/".concat(id), 'delete'));
    }
  }, {
    key: "allImports",
    value: function allImports(filter, options) {
      return all(this.listImports, filter, options);
    } // Inventory Model

  }, {
    key: "listInventoryModels",
    value: function listInventoryModels(filter, options) {
      return request(client.newRequest('/api/inventory_models').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveInventoryModel",
    value: function retrieveInventoryModel(id, filter, options) {
      return request(client.newRequest("/api/inventory_models/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createInventoryModel",
    value: function createInventoryModel(inventory_model, filter, options) {
      return request(client.newRequest('/api/inventory_models', 'post').setBody(inventory_model).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateInventoryModel",
    value: function updateInventoryModel(id, inventory_model, filter, options) {
      return request(client.newRequest("/api/inventory_models/".concat(id), 'patch').setBody(inventory_model).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteInventoryModel",
    value: function deleteInventoryModel(id) {
      return request(client.newRequest("/api/inventory_models/".concat(id), 'delete'));
    }
  }, {
    key: "allInventoryModels",
    value: function allInventoryModels(filter, options) {
      return all(this.listInventoryModels, filter, options);
    } // Line Item Option

  }, {
    key: "listLineItemOptions",
    value: function listLineItemOptions(filter, options) {
      return request(client.newRequest('/api/line_item_options').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveLineItemOption",
    value: function retrieveLineItemOption(id, filter, options) {
      return request(client.newRequest("/api/line_item_options/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createLineItemOption",
    value: function createLineItemOption(line_item_option, filter, options) {
      return request(client.newRequest('/api/line_item_options', 'post').setBody(line_item_option).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateLineItemOption",
    value: function updateLineItemOption(id, line_item_option, filter, options) {
      return request(client.newRequest("/api/line_item_options/".concat(id), 'patch').setBody(line_item_option).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteLineItemOption",
    value: function deleteLineItemOption(id) {
      return request(client.newRequest("/api/line_item_options/".concat(id), 'delete'));
    }
  }, {
    key: "allLineItemOptions",
    value: function allLineItemOptions(filter, options) {
      return all(this.listLineItemOptions, filter, options);
    } // Line Item

  }, {
    key: "listLineItems",
    value: function listLineItems(filter, options) {
      return request(client.newRequest('/api/line_items').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveLineItem",
    value: function retrieveLineItem(id, filter, options) {
      return request(client.newRequest("/api/line_items/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createLineItem",
    value: function createLineItem(line_item, filter, options) {
      return request(client.newRequest('/api/line_items', 'post').setBody(line_item).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateLineItem",
    value: function updateLineItem(id, line_item, filter, options) {
      return request(client.newRequest("/api/line_items/".concat(id), 'patch').setBody(line_item).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteLineItem",
    value: function deleteLineItem(id) {
      return request(client.newRequest("/api/line_items/".concat(id), 'delete'));
    }
  }, {
    key: "allLineItems",
    value: function allLineItems(filter, options) {
      return all(this.listLineItems, filter, options);
    } // Market

  }, {
    key: "listMarkets",
    value: function listMarkets(filter, options) {
      return request(client.newRequest('/api/markets').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveMarket",
    value: function retrieveMarket(id, filter, options) {
      return request(client.newRequest("/api/markets/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createMarket",
    value: function createMarket(market, filter, options) {
      return request(client.newRequest('/api/markets', 'post').setBody(market).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(id, market, filter, options) {
      return request(client.newRequest("/api/markets/".concat(id), 'patch').setBody(market).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteMarket",
    value: function deleteMarket(id) {
      return request(client.newRequest("/api/markets/".concat(id), 'delete'));
    }
  }, {
    key: "allMarkets",
    value: function allMarkets(filter, options) {
      return all(this.listMarkets, filter, options);
    } // Merchant

  }, {
    key: "listMerchants",
    value: function listMerchants(filter, options) {
      return request(client.newRequest('/api/merchants').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveMerchant",
    value: function retrieveMerchant(id, filter, options) {
      return request(client.newRequest("/api/merchants/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createMerchant",
    value: function createMerchant(merchant, filter, options) {
      return request(client.newRequest('/api/merchants', 'post').setBody(merchant).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateMerchant",
    value: function updateMerchant(id, merchant, filter, options) {
      return request(client.newRequest("/api/merchants/".concat(id), 'patch').setBody(merchant).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteMerchant",
    value: function deleteMerchant(id) {
      return request(client.newRequest("/api/merchants/".concat(id), 'delete'));
    }
  }, {
    key: "allMerchants",
    value: function allMerchants(filter, options) {
      return all(this.listMerchants, filter, options);
    } // Order

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
    value: function createOrder(order, filter, options) {
      return request(client.newRequest('/api/orders', 'post').setBody(order).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateOrder",
    value: function updateOrder(id, order, filter, options) {
      return request(client.newRequest("/api/orders/".concat(id), 'patch').setBody(order).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteOrder",
    value: function deleteOrder(id) {
      return request(client.newRequest("/api/orders/".concat(id), 'delete'));
    }
  }, {
    key: "allOrders",
    value: function allOrders(filter, options) {
      return all(this.listOrders, filter, options);
    } // Parcel

  }, {
    key: "listParcels",
    value: function listParcels(filter, options) {
      return request(client.newRequest('/api/parcels').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveParcel",
    value: function retrieveParcel(id, filter, options) {
      return request(client.newRequest("/api/parcels/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createParcel",
    value: function createParcel(parcel, filter, options) {
      return request(client.newRequest('/api/parcels', 'post').setBody(parcel).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateParcel",
    value: function updateParcel(id, parcel, filter, options) {
      return request(client.newRequest("/api/parcels/".concat(id), 'patch').setBody(parcel).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteParcel",
    value: function deleteParcel(id) {
      return request(client.newRequest("/api/parcels/".concat(id), 'delete'));
    }
  }, {
    key: "allParcels",
    value: function allParcels(filter, options) {
      return all(this.listParcels, filter, options);
    } // Payment Method

  }, {
    key: "listPaymentMethods",
    value: function listPaymentMethods(filter, options) {
      return request(client.newRequest('/api/payment_methods').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrievePaymentMethod",
    value: function retrievePaymentMethod(id, filter, options) {
      return request(client.newRequest("/api/payment_methods/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createPaymentMethod",
    value: function createPaymentMethod(payment_method, filter, options) {
      return request(client.newRequest('/api/payment_methods', 'post').setBody(payment_method).setParams(filter).setOptions(options));
    }
  }, {
    key: "updatePaymentMethod",
    value: function updatePaymentMethod(id, payment_method, filter, options) {
      return request(client.newRequest("/api/payment_methods/".concat(id), 'patch').setBody(payment_method).setParams(filter).setOptions(options));
    }
  }, {
    key: "deletePaymentMethod",
    value: function deletePaymentMethod(id) {
      return request(client.newRequest("/api/payment_methods/".concat(id), 'delete'));
    }
  }, {
    key: "allPaymentMethods",
    value: function allPaymentMethods(filter, options) {
      return all(this.listPaymentMethods, filter, options);
    } // Paypal Payment

  }, {
    key: "listPaypalPayments",
    value: function listPaypalPayments(filter, options) {
      return request(client.newRequest('/api/paypal_payments').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrievePaypalPayment",
    value: function retrievePaypalPayment(id, filter, options) {
      return request(client.newRequest("/api/paypal_payments/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createPaypalPayment",
    value: function createPaypalPayment(paypal_payment, filter, options) {
      return request(client.newRequest('/api/paypal_payments', 'post').setBody(paypal_payment).setParams(filter).setOptions(options));
    }
  }, {
    key: "updatePaypalPayment",
    value: function updatePaypalPayment(id, paypal_payment, filter, options) {
      return request(client.newRequest("/api/paypal_payments/".concat(id), 'patch').setBody(paypal_payment).setParams(filter).setOptions(options));
    }
  }, {
    key: "deletePaypalPayment",
    value: function deletePaypalPayment(id) {
      return request(client.newRequest("/api/paypal_payments/".concat(id), 'delete'));
    }
  }, {
    key: "allPaypalPayments",
    value: function allPaypalPayments(filter, options) {
      return all(this.listPaypalPayments, filter, options);
    } // Price List

  }, {
    key: "listPriceLists",
    value: function listPriceLists(filter, options) {
      return request(client.newRequest('/api/price_lists').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrievePriceList",
    value: function retrievePriceList(id, filter, options) {
      return request(client.newRequest("/api/price_lists/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createPriceList",
    value: function createPriceList(price_list, filter, options) {
      return request(client.newRequest('/api/price_lists', 'post').setBody(price_list).setParams(filter).setOptions(options));
    }
  }, {
    key: "updatePriceList",
    value: function updatePriceList(id, price_list, filter, options) {
      return request(client.newRequest("/api/price_lists/".concat(id), 'patch').setBody(price_list).setParams(filter).setOptions(options));
    }
  }, {
    key: "deletePriceList",
    value: function deletePriceList(id) {
      return request(client.newRequest("/api/price_lists/".concat(id), 'delete'));
    }
  }, {
    key: "allPriceLists",
    value: function allPriceLists(filter, options) {
      return all(this.listPriceLists, filter, options);
    } // Price

  }, {
    key: "listPrices",
    value: function listPrices(filter, options) {
      return request(client.newRequest('/api/prices').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrievePrice",
    value: function retrievePrice(id, filter, options) {
      return request(client.newRequest("/api/prices/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createPrice",
    value: function createPrice(price, filter, options) {
      return request(client.newRequest('/api/prices', 'post').setBody(price).setParams(filter).setOptions(options));
    }
  }, {
    key: "updatePrice",
    value: function updatePrice(id, price, filter, options) {
      return request(client.newRequest("/api/prices/".concat(id), 'patch').setBody(price).setParams(filter).setOptions(options));
    }
  }, {
    key: "deletePrice",
    value: function deletePrice(id) {
      return request(client.newRequest("/api/prices/".concat(id), 'delete'));
    }
  }, {
    key: "allPrices",
    value: function allPrices(filter, options) {
      return all(this.listPrices, filter, options);
    } // Shipment

  }, {
    key: "listShipments",
    value: function listShipments(filter, options) {
      return request(client.newRequest('/api/shipments').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveShipment",
    value: function retrieveShipment(id, filter, options) {
      return request(client.newRequest("/api/shipments/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShipment",
    value: function createShipment(shipment, filter, options) {
      return request(client.newRequest('/api/shipments', 'post').setBody(shipment).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateShipment",
    value: function updateShipment(id, shipment, filter, options) {
      return request(client.newRequest("/api/shipments/".concat(id), 'patch').setBody(shipment).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteShipment",
    value: function deleteShipment(id) {
      return request(client.newRequest("/api/shipments/".concat(id), 'delete'));
    }
  }, {
    key: "allShipments",
    value: function allShipments(filter, options) {
      return all(this.listShipments, filter, options);
    } // Shipping Category

  }, {
    key: "listShippingCategories",
    value: function listShippingCategories(filter, options) {
      return request(client.newRequest('/api/shipping_categories').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveShippingCategory",
    value: function retrieveShippingCategory(id, filter, options) {
      return request(client.newRequest("/api/shipping_categories/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShippingCategory",
    value: function createShippingCategory(shipping_category, filter, options) {
      return request(client.newRequest('/api/shipping_categories', 'post').setBody(shipping_category).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateShippingCategory",
    value: function updateShippingCategory(id, shipping_category, filter, options) {
      return request(client.newRequest("/api/shipping_categories/".concat(id), 'patch').setBody(shipping_category).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteShippingCategory",
    value: function deleteShippingCategory(id) {
      return request(client.newRequest("/api/shipping_categories/".concat(id), 'delete'));
    }
  }, {
    key: "allShippingCategories",
    value: function allShippingCategories(filter, options) {
      return all(this.listShippingCategories, filter, options);
    } // Shipping Method

  }, {
    key: "listShippingMethods",
    value: function listShippingMethods(filter, options) {
      return request(client.newRequest('/api/shipping_methods').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveShippingMethod",
    value: function retrieveShippingMethod(id, filter, options) {
      return request(client.newRequest("/api/shipping_methods/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShippingMethod",
    value: function createShippingMethod(shipping_method, filter, options) {
      return request(client.newRequest('/api/shipping_methods', 'post').setBody(shipping_method).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateShippingMethod",
    value: function updateShippingMethod(id, shipping_method, filter, options) {
      return request(client.newRequest("/api/shipping_methods/".concat(id), 'patch').setBody(shipping_method).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteShippingMethod",
    value: function deleteShippingMethod(id) {
      return request(client.newRequest("/api/shipping_methods/".concat(id), 'delete'));
    }
  }, {
    key: "allShippingMethods",
    value: function allShippingMethods(filter, options) {
      return all(this.listShippingMethods, filter, options);
    } // Shipping Zone

  }, {
    key: "listShippingZones",
    value: function listShippingZones(filter, options) {
      return request(client.newRequest('/api/shipping_zones').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveShippingZone",
    value: function retrieveShippingZone(id, filter, options) {
      return request(client.newRequest("/api/shipping_zones/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShippingZone",
    value: function createShippingZone(shipping_zone, filter, options) {
      return request(client.newRequest('/api/shipping_zones', 'post').setBody(shipping_zone).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateShippingZone",
    value: function updateShippingZone(id, shipping_zone, filter, options) {
      return request(client.newRequest("/api/shipping_zones/".concat(id), 'patch').setBody(shipping_zone).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteShippingZone",
    value: function deleteShippingZone(id) {
      return request(client.newRequest("/api/shipping_zones/".concat(id), 'delete'));
    }
  }, {
    key: "allShippingZones",
    value: function allShippingZones(filter, options) {
      return all(this.listShippingZones, filter, options);
    } // Sku Option

  }, {
    key: "listSkuOptions",
    value: function listSkuOptions(filter, options) {
      return request(client.newRequest('/api/sku_options').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveSkuOption",
    value: function retrieveSkuOption(id, filter, options) {
      return request(client.newRequest("/api/sku_options/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createSkuOption",
    value: function createSkuOption(sku_option, filter, options) {
      return request(client.newRequest('/api/sku_options', 'post').setBody(sku_option).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateSkuOption",
    value: function updateSkuOption(id, sku_option, filter, options) {
      return request(client.newRequest("/api/sku_options/".concat(id), 'patch').setBody(sku_option).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteSkuOption",
    value: function deleteSkuOption(id) {
      return request(client.newRequest("/api/sku_options/".concat(id), 'delete'));
    }
  }, {
    key: "allSkuOptions",
    value: function allSkuOptions(filter, options) {
      return all(this.listSkuOptions, filter, options);
    } // Sku

  }, {
    key: "listSkus",
    value: function listSkus(filter, options) {
      return request(client.newRequest('/api/skus').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveSku",
    value: function retrieveSku(id, filter, options) {
      return request(client.newRequest("/api/skus/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createSku",
    value: function createSku(sku, filter, options) {
      return request(client.newRequest('/api/skus', 'post').setBody(sku).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateSku",
    value: function updateSku(id, sku, filter, options) {
      return request(client.newRequest("/api/skus/".concat(id), 'patch').setBody(sku).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteSku",
    value: function deleteSku(id) {
      return request(client.newRequest("/api/skus/".concat(id), 'delete'));
    }
  }, {
    key: "allSkus",
    value: function allSkus(filter, options) {
      return all(this.listSkus, filter, options);
    } // Stock Item

  }, {
    key: "listStockItems",
    value: function listStockItems(filter, options) {
      return request(client.newRequest('/api/stock_items').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveStockItem",
    value: function retrieveStockItem(id, filter, options) {
      return request(client.newRequest("/api/stock_items/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createStockItem",
    value: function createStockItem(stock_item, filter, options) {
      return request(client.newRequest('/api/stock_items', 'post').setBody(stock_item).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateStockItem",
    value: function updateStockItem(id, stock_item, filter, options) {
      return request(client.newRequest("/api/stock_items/".concat(id), 'patch').setBody(stock_item).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteStockItem",
    value: function deleteStockItem(id) {
      return request(client.newRequest("/api/stock_items/".concat(id), 'delete'));
    }
  }, {
    key: "allStockItems",
    value: function allStockItems(filter, options) {
      return all(this.listStockItems, filter, options);
    } // Stock Level

  }, {
    key: "listStockLevels",
    value: function listStockLevels(filter, options) {
      return request(client.newRequest('/api/stock_levels').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveStockLevel",
    value: function retrieveStockLevel(id, filter, options) {
      return request(client.newRequest("/api/stock_levels/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createStockLevel",
    value: function createStockLevel(stock_level, filter, options) {
      return request(client.newRequest('/api/stock_levels', 'post').setBody(stock_level).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateStockLevel",
    value: function updateStockLevel(id, stock_level, filter, options) {
      return request(client.newRequest("/api/stock_levels/".concat(id), 'patch').setBody(stock_level).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteStockLevel",
    value: function deleteStockLevel(id) {
      return request(client.newRequest("/api/stock_levels/".concat(id), 'delete'));
    }
  }, {
    key: "allStockLevels",
    value: function allStockLevels(filter, options) {
      return all(this.listStockLevels, filter, options);
    } // Stock Location

  }, {
    key: "listStockLocations",
    value: function listStockLocations(filter, options) {
      return request(client.newRequest('/api/stock_locations').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveStockLocation",
    value: function retrieveStockLocation(id, filter, options) {
      return request(client.newRequest("/api/stock_locations/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createStockLocation",
    value: function createStockLocation(stock_location, filter, options) {
      return request(client.newRequest('/api/stock_locations', 'post').setBody(stock_location).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateStockLocation",
    value: function updateStockLocation(id, stock_location, filter, options) {
      return request(client.newRequest("/api/stock_locations/".concat(id), 'patch').setBody(stock_location).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteStockLocation",
    value: function deleteStockLocation(id) {
      return request(client.newRequest("/api/stock_locations/".concat(id), 'delete'));
    }
  }, {
    key: "allStockLocations",
    value: function allStockLocations(filter, options) {
      return all(this.listStockLocations, filter, options);
    } // Webhook

  }, {
    key: "listWebhooks",
    value: function listWebhooks(filter, options) {
      return request(client.newRequest('/api/webhooks').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveWebhook",
    value: function retrieveWebhook(id, filter, options) {
      return request(client.newRequest("/api/webhooks/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createWebhook",
    value: function createWebhook(webhook, filter, options) {
      return request(client.newRequest('/api/webhooks', 'post').setBody(webhook).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateWebhook",
    value: function updateWebhook(id, webhook, filter, options) {
      return request(client.newRequest("/api/webhooks/".concat(id), 'patch').setBody(webhook).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteWebhook",
    value: function deleteWebhook(id) {
      return request(client.newRequest("/api/webhooks/".concat(id), 'delete'));
    }
  }, {
    key: "allWebhooks",
    value: function allWebhooks(filter, options) {
      return all(this.listWebhooks, filter, options);
    } // Wire Transfer

  }, {
    key: "listWireTransfers",
    value: function listWireTransfers(filter, options) {
      return request(client.newRequest('/api/wire_transfers').setParams(filter).setOptions(options));
    }
  }, {
    key: "retrieveWireTransfer",
    value: function retrieveWireTransfer(id, filter, options) {
      return request(client.newRequest("/api/wire_transfers/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createWireTransfer",
    value: function createWireTransfer(wire_transfer, filter, options) {
      return request(client.newRequest('/api/wire_transfers', 'post').setBody(wire_transfer).setParams(filter).setOptions(options));
    }
  }, {
    key: "updateWireTransfer",
    value: function updateWireTransfer(id, wire_transfer, filter, options) {
      return request(client.newRequest("/api/wire_transfers/".concat(id), 'patch').setBody(wire_transfer).setParams(filter).setOptions(options));
    }
  }, {
    key: "deleteWireTransfer",
    value: function deleteWireTransfer(id) {
      return request(client.newRequest("/api/wire_transfers/".concat(id), 'delete'));
    }
  }, {
    key: "allWireTransfers",
    value: function allWireTransfers(filter, options) {
      return all(this.listWireTransfers, filter, options);
    }
  }]);

  return CLApi;
}();

var api = new CLApi();
module.exports.clapi = api;

module.exports.initialize = function (cfg) {
  log.msg('api client initialized with config:');
  log.msg(cfg);
  api.client = client.newInstance(cfg);
};

function request(apiRequest) {
  log.msg("[".concat(apiRequest.correlation_id, ".").concat(apiRequest.attempt, "] calling ").concat(apiRequest.path, " ..."));
  if (api.client == undefined) return Promise.reject(newError(undefined, 'api not initialized'));else {
    var body = jsonapi.serialize(apiRequest.body);
    apiRequest.setBody(body);
    return api.client.call(apiRequest).then(function (apiResponse) {
      return response(apiResponse, apiRequest.response_type);
    }).catch(function (apiError) {
      return error(apiError, apiRequest.error_type);
    });
  }
}

function response(apiResponse, response_type) {
  if (apiResponse == undefined || response_type == undefined) return apiResponse;else switch (response_type) {
    case 'model':
      return jsonapi.deserialize(apiResponse.data);

    case 'normalized':
      return jsonapi.normalize(apiResponse.data);

    case 'jsonapi':
      return apiResponse.data;

    case 'raw':
      return apiResponse;

    default:
      throw "Unsupported response_type: '" + response_type + "'";
  }
}

function error(apiError, error_type) {
  if (error_type == undefined) return apiError.response;else switch (error_type) {
    case 'model':
      if (!apiError.response) return Promise.reject(errorResponse(apiError.code, apiError.message));else if (apiError.response.data && apiError.response.data.errors) return Promise.reject(errorResponse(apiError.response.status).addApiErrors(apiError.response.data.errors));else return Promise.reject(errorResponse(apiError.response.status, apiError.response.statusText));

    case 'jsonapi':
      return Promise.reject(apiError.response.data);

    case 'raw':
      return Promise.reject(apiError.response);

    default:
      throw "Unsupported error_type: '" + error_type + "'";
  }
}

function data(res) {
  if (res.isApiResource && res.isApiResource() === true) return res;else if (res.dataset) return res.dataset.data;else if (res.data) return res.data.data ? res.data.data : res.data;else return res;
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
        response_type,
        firstPage,
        max_page,
        page_size,
        pages,
        pagesOut,
        out,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setPage = function _ref(filter) {
              var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : filter.page_size || 10;
              var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
              if (filter.isQueryFilter && filter.isQueryFilter() === true) filter.page(number, size);else {
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
            options.response_type = options.response_type || sdk.response_type;

            if (!(options.response_type == 'raw')) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", Promise.reject('Use of raw response_type not allowed in list-all functions: '));

          case 8:
            setPage(filter); // Save original option and forxe response_type to 'raw'

            response_type = options.response_type;
            options.response_type = 'raw'; // log.msg(`all()-->${listFunction.name} page 1`);

            _context.next = 13;
            return listFunction(filter, options);

          case 13:
            firstPage = _context.sent;

            if (firstPage.data) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", firstPage);

          case 16:
            max_page = firstPage.data.meta.page_count;
            page_size = firstPage.data.data.length;
            pages = new Array(max_page); // Standard listFunction response

            if (!(max_page == 1)) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", response(firstPage, response_type));

          case 23:
            pages[0] = firstPage;

          case 24:
            // Multiple pages
            for (pn = 1; pn < max_page; pn++) {
              // log.msg(`all()-->${listFunction.name} page ${pn+1}`);
              setPage(filter, page_size, pn + 1);
              pages[pn] = listFunction(filter, options);
            } // Set original option


            options.response_type = response_type;
            _context.next = 28;
            return Promise.all(pages);

          case 28:
            pagesOut = _context.sent;

            if (!(!Array.isArray(pagesOut) && !pagesOut.data)) {
              _context.next = 33;
              break;
            }

            return _context.abrupt("return", pagesOut);

          case 33:
            out = [];
            pagesOut.forEach(function (p) {
              out = out.concat(data(p));
            });
            return _context.abrupt("return", response({
              data: {
                data: out
              }
            }, response_type));

          case 36:
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

var sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk;
/**
 * Token Cache 
 */


var AUTH_TOKENS = {};

function cacheToken(client_id, grant_type, scope, token) {
  if (sdk.auth_cache) AUTH_TOKENS[tokenId(client_id, grant_type, scope)] = token;
}

function getToken(client_id, grant_type, scope) {
  return AUTH_TOKENS[tokenId(client_id, grant_type, scope)];
}

function tokenId(client_id, grant_type) {
  return client_id + '-' + grant_type + '-' + (scope ? scope : 'unscoped');
}

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
    key: "clientId",
    value: function clientId(cid) {
      this.client_id = cid;
      return this;
    }
  }, {
    key: "clientSecret",
    value: function clientSecret(csec) {
      this.client_secret = csec;
      return this;
    }
  }, {
    key: "isAuthConfig",
    value: function isAuthConfig() {
      return true;
    }
  }]);

  return Auth;
}();

var ClientCredentials =
/*#__PURE__*/
function (_Auth) {
  _inherits(ClientCredentials, _Auth);

  function ClientCredentials(client_id, client_secret, scope) {
    var _this;

    _classCallCheck(this, ClientCredentials);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClientCredentials).call(this, client_id, client_secret));
    _this.grant_type = 'client_credentials';
    _this.scope = scope;
    return _this;
  }

  _createClass(ClientCredentials, [{
    key: "setScope",
    value: function setScope(scope) {
      this.scope = scope;
      return this;
    }
  }, {
    key: "marketScope",
    value: function marketScope(market) {
      this.scope = market != undefined ? 'market:' + market : market;
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

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AuthorizationCode).call(this, cfg.client_id, cfg.client_secret, cfg.scope));
    _this2.grant_type = 'authorization_code';
    _this2.code = cfg.code;
    _this2.redirect_uri = cfg.redirect_uri;
    return _this2;
  }

  _createClass(AuthorizationCode, [{
    key: "setCode",
    value: function setCode(code) {
      this.code = code;
      return this;
    }
  }, {
    key: "redirectUri",
    value: function redirectUri(uri) {
      this.redirect_uri = uri;
      return this;
    }
  }]);

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

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Password).call(this, cfg.client_id, cfg.client_secret, cfg.scope));
    _this3.grant_type = 'password';
    _this3.username = cfg.username;
    _this3.password = cfg.password;
    return _this3;
  }

  _createClass(Password, [{
    key: "setUsername",
    value: function setUsername(username) {
      this.username = username;
      return this;
    }
  }, {
    key: "setPassword",
    value: function setPassword(password) {
      this.password = password;
      return this;
    }
  }]);

  return Password;
}(ClientCredentials);

var RefreshToken =
/*#__PURE__*/
function (_Auth2) {
  _inherits(RefreshToken, _Auth2);

  function RefreshToken(client_id, client_secret, refresh_token) {
    var _this4;

    _classCallCheck(this, RefreshToken);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(RefreshToken).call(this, client_id, client_secret));
    _this4.grant_type = 'refresh_token';
    _this4.refresh_token = refresh_token;
    return _this4;
  }

  _createClass(RefreshToken, [{
    key: "refreshToken",
    value: function refreshToken(token) {
      this.refresh_token = token;
      return this;
    }
  }]);

  return RefreshToken;
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
  ClientCredentials: ClientCredentials,
  AuthorizationCode: AuthorizationCode,
  Password: Password,
  RefreshToken: RefreshToken
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
    if (sdk.auth_cache) cacheToken(auth.client_id, auth.grant_type, auth.scope, token);
    return token;
  });
};

module.exports.newAuthConfig = function (grant_type) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (grant_type) {
    case 'client_credentials':
      return new ClientCredentials(config.client_id, config.client_secret, config.scope);

    case 'authorization_code':
      return new AuthorizationCode(config);

    case 'password':
      return new Password(config);

    case 'refresh_token':
      return new RefreshToken();

    default:
      return undefined;
  }
};

/***/ }),

/***/ "./lib/clayer.js":
/*!***********************!*\
  !*** ./lib/clayer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ./api */ "./lib/api.js");

var config = __webpack_require__(/*! ./config */ "./lib/config.js");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");

var auth = __webpack_require__(/*! ./auth */ "./lib/auth.js"); // Expose all api functions


module.exports = api.clapi; // Expose SDK configuration

module.exports.settings = config.sdk; // SDK initialization

module.exports.initialize = function (cfg) {
  if (cfg != undefined) cfg.default = false;
  api.initialize(utils.mergeMaps(config.clayer, cfg));
}; // Authentication types


module.exports.auth = {
  ClientCredentials: function ClientCredentials(client_id, client_secret) {
    return new auth.ClientCredentials(client_id, client_secret);
  },
  Password: function Password(cfg) {
    return new auth.Password(cfg);
  },
  AuthorizationCode: function AuthorizationCode(cfg) {
    return new auth.AuthorizationCode(cfg);
  },
  RefreshToken: function RefreshToken(client_id, client_secret, refresh_token) {
    return new auth.RefreshToken(client_id, client_secret, refresh_token);
  }
};

module.exports.auth.lastAccessToken = function () {
  return api.clapi.client.config.access_token;
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

var config = __webpack_require__(/*! ./config */ "./lib/config.js");

var auth = __webpack_require__(/*! ./auth */ "./lib/auth.js");

var sdk = config.sdk;

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
      this.response_type = sdk.response_type;
      this.error_type = sdk.error_type;
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
      key: "responseType",
      value: function responseType(type) {
        this.response_type = type ? type : sdk.response_type;
        return this;
      }
    }, {
      key: "errorType",
      value: function errorType(type) {
        this.error_type = type ? type : sdk.error_type;
        return this;
      } // Only really available options are being setted

    }, {
      key: "setOptions",
      value: function setOptions(options) {
        if (options == undefined) return this;
        this.responseType(options.response_type);
        this.errorType(options.error_type);
        return this;
      }
    }, {
      key: "raw_response",
      get: function get() {
        return this.responseType == 'raw';
      },
      set: function set(raw) {
        this.response_type = raw && raw === true ? 'raw' : 'normalized';
      }
    }]);

    return ApiRequest;
  }(),
  ApiClient:
  /*#__PURE__*/
  function () {
    function ApiClient(cfg) {
      _classCallCheck(this, ApiClient);

      config.checkApiConfig(cfg);
      this.config = cfg;
      this.auth_attempts = 0;
      setAxiosConfig(cfg);
    }

    _createClass(ApiClient, [{
      key: "authenticate",
      value: function authenticate() {
        var authConfig = this.config.authentication;

        if (!authConfig || !authConfig.isAuthConfig || authConfig.isAuthConfig() !== true) {
          authConfig = new auth.ClientCredentials().clientId(this.config.client_id).marketScope(this.config.market_id).clientSecret(this.config.client_secret);
        } else {
          utils.log('using custom authentication config: ' + authConfig.grant_type);
          if (!authConfig.client_id && this.config.client_id) authConfig.clientId(this.config.client_id);
        }

        return auth.authenticate(authConfig).then(function (token) {
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

        utils.log(message(method.toUpperCase() + ': ' + callUrl));
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
              utils.log(message("timeout exception: ".concat(error.config.timeout, "ms"))); // if timeout autosense is enabled wait  time increased by 1 sec

              if (sdk.timeout.autosense) {
                sdk.timeout.request += 1000;
                utils.log('new request timeout: ' + sdk.timeout.request);
              }

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
    authentication: null,
    client_id: null,
    market_id: null,
    client_secret: null,
    base_url: null,
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
    // trace client request/response to console
    auth_attempts: 1,
    // number of attempts of authentication
    auth_cache: false,
    // cache tokens received from service
    response_type: 'normalized',
    // Response format, possible values are: normalized | jsonapi | model | raw
    error_type: 'model',
    // Error formet, possible values are: jsonapi | model | raw
    timeout: {
      // in milliseconds
      retry: 250,
      // wait time after authentication request in progress detected
      request: 3000,
      // client request timeout
      autosense: true // automatically increment wait time if timeout occurs 

    }
  }
};

module.exports.checkApiConfig = function (config) {
  if (config == undefined) throw 'missing config';
  if (config.base_url == undefined) throw 'missing base_url';
  if (config.client_id == undefined && config.authentication == undefined) throw 'missing client_id';

  if (config.authentication != undefined) {
    var auth = config.authentication;
    if (auth.client_id == undefined) throw 'missing authentication.client_id';
  }

  return true;
};

/***/ }),

/***/ "./lib/const.js":
/*!**********************!*\
  !*** ./lib/const.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseType =
/*#__PURE__*/
function () {
  function ResponseType() {
    _classCallCheck(this, ResponseType);
  }

  _createClass(ResponseType, null, [{
    key: "Normalized",
    get: function get() {
      return 'normalized';
    }
  }, {
    key: "JSONApi",
    get: function get() {
      return 'jsonapi';
    }
  }, {
    key: "Model",
    get: function get() {
      return 'model';
    }
  }, {
    key: "Raw",
    get: function get() {
      return 'raw';
    }
  }]);

  return ResponseType;
}();

var ErrorType =
/*#__PURE__*/
function () {
  function ErrorType() {
    _classCallCheck(this, ErrorType);
  }

  _createClass(ErrorType, null, [{
    key: "JSONApi",
    get: function get() {
      return 'jsonapi';
    }
  }, {
    key: "Model",
    get: function get() {
      return 'model';
    }
  }, {
    key: "Raw",
    get: function get() {
      return 'raw';
    }
  }]);

  return ErrorType;
}();

module.exports = {
  ResponseType: ResponseType,
  ErrorType: ErrorType
};

/***/ }),

/***/ "./lib/error.js":
/*!**********************!*\
  !*** ./lib/error.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Error =
/*#__PURE__*/
function () {
  function Error() {
    var apiError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Error);

    this.code = apiError.code;
    this.title = apiError.title;
    this.detail = apiError.detail;
    this.source = apiError.source || {};
    this.meta = apiError.meta || {};
  }

  _createClass(Error, [{
    key: "isApiError",
    value: function isApiError() {
      return true;
    }
  }, {
    key: "getSourcePointer",
    value: function getSourcePointer() {
      return this.source.pointer;
    }
  }, {
    key: "getSourceItem",
    value: function getSourceItem(key) {
      return this.source[key];
    }
  }, {
    key: "getMetaItem",
    value: function getMetaItem(key) {
      return this.meta[key];
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[".concat(this.code, ", ").concat(this.title, ", ").concat(this.detail, "]");
    }
  }]);

  return Error;
}();

var ErrorResponse =
/*#__PURE__*/
function () {
  function ErrorResponse(status, description) {
    _classCallCheck(this, ErrorResponse);

    this.status = status;
    this.description = description;
    this.errors = new Array();
  }

  _createClass(ErrorResponse, [{
    key: "isErrorResponse",
    value: function isErrorResponse() {
      return true;
    }
  }, {
    key: "addError",
    value: function addError(error) {
      if (error && error.isApiError && error.isApiError() === true) this.errors.push(error);
      return this;
    }
  }, {
    key: "addApiError",
    value: function addApiError(apiError) {
      this.addError(new Error(apiError));
      return this;
    }
  }, {
    key: "addErrors",
    value: function addErrors() {
      var _this = this;

      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      errors.forEach(function (error) {
        return _this.addError(error);
      });
      return this;
    }
  }, {
    key: "addApiErrors",
    value: function addApiErrors() {
      var _this2 = this;

      var apiErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      apiErrors.forEach(function (apiError) {
        return _this2.addApiError(apiError);
      });
      return this;
    }
  }, {
    key: "apiErrorsCount",
    value: function apiErrorsCount() {
      return this.errors == undefined ? 0 : this.errors.length;
    }
  }, {
    key: "hasApiErrors",
    value: function hasApiErrors() {
      return this.apiErrorsCount() > 0;
    }
  }, {
    key: "getApiError",
    value: function getApiError(index) {
      return index >= 0 && index < this.apiErrorsCount() ? this.errors[index] : null;
    }
  }, {
    key: "toString",
    value: function toString() {
      var err = '[' + this.status + (this.description ? ', ' + this.description : '') + ']';

      if (this.errors && this.errors.length > 0) {
        err += ' --> {';
        this.errors.forEach(function (x) {
          return err += x;
        });
        err += '}';
      }

      return err;
    }
  }]);

  return ErrorResponse;
}();

module.exports = {
  errorResponse: function errorResponse(status, description) {
    return new ErrorResponse(status, description);
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

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");

var model = __webpack_require__(/*! ./model */ "./lib/model.js");

module.exports.serialize = function (body) {
  if (body == undefined) return body; // No data = Plain Object or Api Resource
  else return body.data == undefined ? new JsonApiResource(body).serialize() : body;
};

module.exports.deserialize = function (japi) {
  if (japi == undefined) return japi;else if (Array.isArray(japi.data)) {
    var resArray = new Array();
    japi.data.forEach(function (res) {
      resArray.push(module.exports.deserialize({
        data: res
      }));
    });
    return resArray;
  } else return japi.data == undefined ? japi : new JsonApiResource(japi).deserialize();
};

module.exports.normalize = function (japi) {
  return japi ? normalize(japi) : japi;
};

var JsonApiResource =
/*#__PURE__*/
function () {
  function JsonApiResource() {
    var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, JsonApiResource);

    this.resource = resource;
  }

  _createClass(JsonApiResource, [{
    key: "serialize",
    value: function serialize() {
      var _this = this;

      if (this.resource.data != undefined) return this.resource;
      this.data = {};
      this.data.attributes = {}; // TODO: portare id e type in testa ad ogni object [BTF]

      Object.keys(this.resource).forEach(function (key) {
        var field = _this.resource[key];

        if (field != undefined) {
          if (['id', 'type'].includes(key)) _this.data[key] = field;else if (model.helper.isApiResource(field)) {
            if (_this.data.relationships == undefined) _this.data.relationships = {};
            _this.data.relationships[key.startsWith('__') ? key.substr('__'.length) : key] = {
              data: {
                type: field.type,
                id: field.id
              }
            };
          } else if (Array.isArray(field) && key.startsWith('__')) {
            utils.log('Array Resource relationships not supported: ' + rel);
          } else _this.data.attributes[key] = field;
        }
      });
      return {
        data: this.data
      };
    }
  }, {
    key: "deserialize",
    value: function deserialize() {
      var _this2 = this;

      if (this.resource.data == undefined && model.helper.isApiResource(this.resource)) return this.resource;
      var data = this.resource.data ? this.resource.data : this.resource;
      var res = model.helper.newResource(data.type, data.id, data.attributes);
      if (data.relationships == undefined) return res;else Object.keys(data.relationships).forEach(function (rel) {
        var rel_data = data.relationships[rel].data;

        if (rel_data != undefined) {
          if (Array.isArray(rel_data)) {
            var resArray = new Array();
            rel_data.forEach(function (rd) {
              var relRes = relatedResource(_this2.resource, rd.type, rd.id);
              resArray.push(relRes);
            });
            res.setResource(rel, resArray);
          } else {
            var relRes = relatedResource(_this2.resource, rel_data.type, rel_data.id);
            res.setResource(rel, relRes);
          }
        }
      });
      return res;
    }
  }]);

  return JsonApiResource;
}();
/**
 * 
 * @param {*} japi  JSONApi data
 * @param {*} type  resource type
 * @param {*} id    resource id
 * 
 * Create relationship in resource object
 */


function relatedResource(japi, type, id) {
  var relRes = model.helper.newResource(type, id);
  var inc = jsonapiIncluded(japi, type, id);
  relRes.setFields(inc.attributes);
  return relRes;
}
/**
 * 
 * @param {*} japi  JSONApi data 
 * @param {*} type  resource type
 * @param {*} id    resource id
 *
 * Search for included resource
 */


function jsonapiIncluded(japi, type, id) {
  if (japi == undefined || japi.included == undefined) return undefined;
  var incRes = undefined;
  japi.included.some(function (inc) {
    if (inc.type == type && inc.id == id) incRes = inc;
    return incRes != undefined;
  });
  return incRes;
}

/***/ }),

/***/ "./lib/log.js":
/*!********************!*\
  !*** ./lib/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk;

module.exports = {
  msg: function msg(message) {
    if (sdk.debug && sdk.console) console.log(message == undefined ? '' : message);
  },
  err: function err(error) {
    if (sdk.debug && sdk.console) console.error(error == undefined ? '' : error);
  },
  enable: function enable() {
    sdk.console = true;
  },
  disable: function disable() {
    sdk.console = false;
  },
  probe: function probe() {
    console.log('log enabled: ' + sdk.console);
    console.log('if log is enabled but is not visible maybe you are not in debug mode');
  },

  get enabled() {
    return sdk.console === true;
  }

};

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

// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen
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
      if (res != undefined && (helper.isApiResource(res) || helper.isApiResourceArray(res))) this['__'.concat(field)] = res;
    }
  }, {
    key: "getResource",
    value: function getResource(field) {
      return this['__'.concat(field)];
    }
  }, {
    key: "setFields",
    value: function setFields() {
      var _this = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.keys(fields).forEach(function (field) {
        _this[field] = fields[field];
      });
      return this;
    }
  }, {
    key: "setField",
    value: function setField(name, value) {
      if (name) this[name] = value;
      return this;
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
    var _this2;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Address);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Address).call(this, id, Address.TYPE));
    _this2.business = fields.business;
    _this2.first_name = fields.first_name;
    _this2.last_name = fields.last_name;
    _this2.company = fields.company;
    _this2.line_1 = fields.line_1;
    _this2.line_2 = fields.line_2;
    _this2.city = fields.city;
    _this2.zip_code = fields.zip_code;
    _this2.state_code = fields.state_code;
    _this2.country_code = fields.country_code;
    _this2.phone = fields.phone;
    _this2.email = fields.email;
    _this2.notes = fields.notes;
    _this2.lat = fields.lat;
    _this2.lng = fields.lng;
    _this2.billing_info = fields.billing_info;
    return _this2;
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
}(Resource); // Credit Card resource


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
    var _this3;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CreditCard);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CreditCard).call(this, id, CreditCard.TYPE));
    _this3.first_name = fields.first_name;
    _this3.last_name = fields.last_name;
    _this3.number = fields.number;
    _this3.month = fields.month;
    _this3.year = fields.year;
    _this3.verification_value = fields.verification_value;
    return _this3;
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
}(Resource); // Customer Address resource


var CustomerAddress =
/*#__PURE__*/
function (_Resource3) {
  _inherits(CustomerAddress, _Resource3);

  _createClass(CustomerAddress, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_addresses';
    }
  }]);

  function CustomerAddress(id) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerAddress);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomerAddress).call(this, id, CustomerAddress.TYPE));
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
    key: "address",
    set: function set(value) {
      _get(_getPrototypeOf(CustomerAddress.prototype), "setResource", this).call(this, 'address', value);
    },
    get: function get() {
      return _get(_getPrototypeOf(CustomerAddress.prototype), "getResource", this).call(this, 'address');
    }
  }]);

  return CustomerAddress;
}(Resource); // Customer Group resource


var CustomerGroup =
/*#__PURE__*/
function (_Resource4) {
  _inherits(CustomerGroup, _Resource4);

  _createClass(CustomerGroup, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_groups';
    }
  }]);

  function CustomerGroup(id) {
    var _this4;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerGroup);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerGroup).call(this, id, CustomerGroup.TYPE));
    _this4.name = fields.name;
    return _this4;
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
}(Resource); // Customer Password Reset resource


var CustomerPasswordReset =
/*#__PURE__*/
function (_Resource5) {
  _inherits(CustomerPasswordReset, _Resource5);

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
    _this5.customer_password = fields.customer_password;
    _this5._reset_password_token = fields._reset_password_token;
    return _this5;
  } // Relationships


  return CustomerPasswordReset;
}(Resource); // Customer Payment Source resource


var CustomerPaymentSource =
/*#__PURE__*/
function (_Resource6) {
  _inherits(CustomerPaymentSource, _Resource6);

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
}(Resource); // Customer Subscription resource


var CustomerSubscription =
/*#__PURE__*/
function (_Resource7) {
  _inherits(CustomerSubscription, _Resource7);

  _createClass(CustomerSubscription, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_subscriptions';
    }
  }]);

  function CustomerSubscription(id) {
    var _this6;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerSubscription);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerSubscription).call(this, id, CustomerSubscription.TYPE));
    _this6.customer_email = fields.customer_email;
    return _this6;
  } // Relationships


  return CustomerSubscription;
}(Resource); // Customer resource


var Customer =
/*#__PURE__*/
function (_Resource8) {
  _inherits(Customer, _Resource8);

  _createClass(Customer, null, [{
    key: "TYPE",
    get: function get() {
      return 'customers';
    }
  }]);

  function Customer(id) {
    var _this7;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Customer);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Customer).call(this, id, Customer.TYPE));
    _this7.email = fields.email;
    _this7.password = fields.password;
    return _this7;
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
}(Resource); // Delivery Lead Time resource


var DeliveryLeadTime =
/*#__PURE__*/
function (_Resource9) {
  _inherits(DeliveryLeadTime, _Resource9);

  _createClass(DeliveryLeadTime, null, [{
    key: "TYPE",
    get: function get() {
      return 'delivery_lead_times';
    }
  }]);

  function DeliveryLeadTime(id) {
    var _this8;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DeliveryLeadTime);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(DeliveryLeadTime).call(this, id, DeliveryLeadTime.TYPE));
    _this8.min_hours = fields.min_hours;
    _this8.max_hours = fields.max_hours;
    return _this8;
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
function (_Resource10) {
  _inherits(Import, _Resource10);

  _createClass(Import, null, [{
    key: "TYPE",
    get: function get() {
      return 'imports';
    }
  }]);

  function Import(id) {
    var _this9;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Import);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Import).call(this, id, Import.TYPE));
    _this9.resource_type = fields.resource_type;
    _this9.parent_resource_id = fields.parent_resource_id;
    _this9.inputs = fields.inputs;
    _this9.cleanup_records = fields.cleanup_records;
    return _this9;
  } // Relationships


  return Import;
}(Resource); // Inventory Model resource


var InventoryModel =
/*#__PURE__*/
function (_Resource11) {
  _inherits(InventoryModel, _Resource11);

  _createClass(InventoryModel, null, [{
    key: "TYPE",
    get: function get() {
      return 'inventory_models';
    }
  }]);

  function InventoryModel(id) {
    var _this10;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, InventoryModel);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(InventoryModel).call(this, id, InventoryModel.TYPE));
    _this10.name = fields.name;
    return _this10;
  } // Relationships


  return InventoryModel;
}(Resource); // Line Item Option resource


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
    var _this11;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LineItemOption);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(LineItemOption).call(this, id, LineItemOption.TYPE));
    _this11.name = fields.name;
    _this11.quantity = fields.quantity;
    _this11.options = fields.options;
    return _this11;
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
}(Resource); // Line Item resource


var LineItem =
/*#__PURE__*/
function (_Resource13) {
  _inherits(LineItem, _Resource13);

  _createClass(LineItem, null, [{
    key: "TYPE",
    get: function get() {
      return 'line_items';
    }
  }]);

  function LineItem(id) {
    var _this12;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LineItem);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(LineItem).call(this, id, LineItem.TYPE));
    _this12.sku_code = fields.sku_code;
    _this12.quantity = fields.quantity;
    _this12._update_quantity = fields._update_quantity;
    _this12.name = fields.name;
    _this12.image_url = fields.image_url;
    return _this12;
  } // Relationships


  _createClass(LineItem, [{
    key: "order",
    set: function set(value) {
      _get(_getPrototypeOf(LineItem.prototype), "setResource", this).call(this, 'order', value);
    },
    get: function get() {
      return _get(_getPrototypeOf(LineItem.prototype), "getResource", this).call(this, 'order');
    }
  }, {
    key: "item",
    set: function set(value) {
      _get(_getPrototypeOf(LineItem.prototype), "setResource", this).call(this, 'item', value);
    },
    get: function get() {
      return _get(_getPrototypeOf(LineItem.prototype), "getResource", this).call(this, 'item');
    }
  }]);

  return LineItem;
}(Resource); // Market resource


var Market =
/*#__PURE__*/
function (_Resource14) {
  _inherits(Market, _Resource14);

  _createClass(Market, null, [{
    key: "TYPE",
    get: function get() {
      return 'markets';
    }
  }]);

  function Market(id) {
    var _this13;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Market);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Market).call(this, id, Market.TYPE));
    _this13.name = fields.name;
    _this13.facebook_pixel_id = fields.facebook_pixel_id;
    return _this13;
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
function (_Resource15) {
  _inherits(Merchant, _Resource15);

  _createClass(Merchant, null, [{
    key: "TYPE",
    get: function get() {
      return 'merchants';
    }
  }]);

  function Merchant(id) {
    var _this14;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Merchant);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Merchant).call(this, id, Merchant.TYPE));
    _this14.name = fields.name;
    return _this14;
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
function (_Resource16) {
  _inherits(Order, _Resource16);

  _createClass(Order, null, [{
    key: "TYPE",
    get: function get() {
      return 'orders';
    }
  }]);

  function Order(id) {
    var _this15;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Order);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Order).call(this, id, Order.TYPE));
    _this15.guest = fields.guest;
    _this15.customer_email = fields.customer_email;
    _this15.customer_password = fields.customer_password;
    _this15.language_code = fields.language_code;
    _this15.shipping_country_code_lock = fields.shipping_country_code_lock;
    _this15.coupon_code = fields.coupon_code;
    _this15.cart_url = fields.cart_url;
    _this15.return_url = fields.return_url;
    _this15.terms_url = fields.terms_url;
    _this15.privacy_url = fields.privacy_url;
    _this15._place = fields._place;
    _this15._cancel = fields._cancel;
    _this15._approve = fields._approve;
    _this15._capture = fields._capture;
    _this15._update_taxes = fields._update_taxes;
    _this15._billing_address_clone_id = fields._billing_address_clone_id;
    _this15._shipping_address_clone_id = fields._shipping_address_clone_id;
    _this15._customer_payment_source_id = fields._customer_payment_source_id;
    _this15._shipping_address_same_as_billing = fields._shipping_address_same_as_billing;
    _this15._billing_address_same_as_shipping = fields._billing_address_same_as_shipping;
    _this15._save_payment_source_to_customer_wallet = fields._save_payment_source_to_customer_wallet;
    _this15._save_shipping_address_to_customer_address_book = fields._save_shipping_address_to_customer_address_book;
    _this15._save_billing_address_to_customer_address_book = fields._save_billing_address_to_customer_address_book;
    _this15._refresh = fields._refresh;
    return _this15;
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
function (_Resource17) {
  _inherits(Parcel, _Resource17);

  _createClass(Parcel, null, [{
    key: "TYPE",
    get: function get() {
      return 'parcels';
    }
  }]);

  function Parcel(id) {
    var _this16;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parcel);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Parcel).call(this, id, Parcel.TYPE));
    _this16.weight = fields.weight;
    _this16.unit_of_weight = fields.unit_of_weight;
    _this16.eel_pfc = fields.eel_pfc;
    _this16.contents_type = fields.contents_type;
    _this16.contents_explanation = fields.contents_explanation;
    _this16.customs_certify = fields.customs_certify;
    _this16.customs_signer = fields.customs_signer;
    _this16.non_delivery_option = fields.non_delivery_option;
    _this16.restriction_type = fields.restriction_type;
    _this16.restriction_comments = fields.restriction_comments;
    _this16.customs_info_required = fields.customs_info_required;
    return _this16;
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
}(Resource); // Payment Method resource


var PaymentMethod =
/*#__PURE__*/
function (_Resource18) {
  _inherits(PaymentMethod, _Resource18);

  _createClass(PaymentMethod, null, [{
    key: "TYPE",
    get: function get() {
      return 'payment_methods';
    }
  }]);

  function PaymentMethod(id) {
    var _this17;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PaymentMethod);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(PaymentMethod).call(this, id, PaymentMethod.TYPE));
    _this17.payment_source_type = fields.payment_source_type;
    _this17.price_amount_cents = fields.price_amount_cents;
    return _this17;
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
}(Resource); // Paypal Payment resource


var PaypalPayment =
/*#__PURE__*/
function (_Resource19) {
  _inherits(PaypalPayment, _Resource19);

  _createClass(PaypalPayment, null, [{
    key: "TYPE",
    get: function get() {
      return 'paypal_payments';
    }
  }]);

  function PaypalPayment(id) {
    var _this18;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PaypalPayment);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(PaypalPayment).call(this, id, PaypalPayment.TYPE));
    _this18.return_url = fields.return_url;
    _this18.cancel_url = fields.cancel_url;
    _this18.note_to_payer = fields.note_to_payer;
    _this18.paypal_payer_id = fields.paypal_payer_id;
    return _this18;
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
}(Resource); // Price List resource


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
    var _this19;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PriceList);

    _this19 = _possibleConstructorReturn(this, _getPrototypeOf(PriceList).call(this, id, PriceList.TYPE));
    _this19.name = fields.name;
    _this19.currency_code = fields.currency_code;
    _this19.tax_included = fields.tax_included;
    return _this19;
  } // Relationships


  return PriceList;
}(Resource); // Price resource


var Price =
/*#__PURE__*/
function (_Resource21) {
  _inherits(Price, _Resource21);

  _createClass(Price, null, [{
    key: "TYPE",
    get: function get() {
      return 'prices';
    }
  }]);

  function Price(id) {
    var _this20;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Price);

    _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Price).call(this, id, Price.TYPE));
    _this20.sku_code = fields.sku_code;
    _this20.amount_cents = fields.amount_cents;
    _this20.compare_at_amount_cents = fields.compare_at_amount_cents;
    return _this20;
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
}(Resource); // Shipment resource


var Shipment =
/*#__PURE__*/
function (_Resource22) {
  _inherits(Shipment, _Resource22);

  _createClass(Shipment, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipments';
    }
  }]);

  function Shipment(id) {
    var _this21;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Shipment);

    _this21 = _possibleConstructorReturn(this, _getPrototypeOf(Shipment).call(this, id, Shipment.TYPE));
    _this21._on_hold = fields._on_hold;
    _this21._picking = fields._picking;
    _this21._packing = fields._packing;
    _this21._ready_to_ship = fields._ready_to_ship;
    _this21._ship = fields._ship;
    _this21._get_rates = fields._get_rates;
    _this21.selected_rate_id = fields.selected_rate_id;
    _this21._purchase = fields._purchase;
    return _this21;
  } // Relationships


  _createClass(Shipment, [{
    key: "shipping_method",
    set: function set(value) {
      _get(_getPrototypeOf(Shipment.prototype), "setResource", this).call(this, 'shipping_method', value);
    },
    get: function get() {
      return _get(_getPrototypeOf(Shipment.prototype), "getResource", this).call(this, 'shipping_method');
    }
  }]);

  return Shipment;
}(Resource); // Shipping Category resource


var ShippingCategory =
/*#__PURE__*/
function (_Resource23) {
  _inherits(ShippingCategory, _Resource23);

  _createClass(ShippingCategory, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_categories';
    }
  }]);

  function ShippingCategory(id) {
    var _this22;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingCategory);

    _this22 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingCategory).call(this, id, ShippingCategory.TYPE));
    _this22.name = fields.name;
    return _this22;
  } // Relationships


  return ShippingCategory;
}(Resource); // Shipping Method resource


var ShippingMethod =
/*#__PURE__*/
function (_Resource24) {
  _inherits(ShippingMethod, _Resource24);

  _createClass(ShippingMethod, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_methods';
    }
  }]);

  function ShippingMethod(id) {
    var _this23;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingMethod);

    _this23 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingMethod).call(this, id, ShippingMethod.TYPE));
    _this23.name = fields.name;
    _this23.price_amount_cents = fields.price_amount_cents;
    _this23.free_over_amount_cents = fields.free_over_amount_cents;
    return _this23;
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
}(Resource); // Shipping Zone resource


var ShippingZone =
/*#__PURE__*/
function (_Resource25) {
  _inherits(ShippingZone, _Resource25);

  _createClass(ShippingZone, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_zones';
    }
  }]);

  function ShippingZone(id) {
    var _this24;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingZone);

    _this24 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingZone).call(this, id, ShippingZone.TYPE));
    _this24.name = fields.name;
    _this24.country_code_regex = fields.country_code_regex;
    _this24.not_country_code_regex = fields.not_country_code_regex;
    _this24.state_code_regex = fields.state_code_regex;
    _this24.not_state_code_regex = fields.not_state_code_regex;
    _this24.zip_code_regex = fields.zip_code_regex;
    _this24.not_zip_code_regex = fields.not_zip_code_regex;
    return _this24;
  } // Relationships


  return ShippingZone;
}(Resource); // Sku Option resource


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
    var _this25;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SkuOption);

    _this25 = _possibleConstructorReturn(this, _getPrototypeOf(SkuOption).call(this, id, SkuOption.TYPE));
    _this25.name = fields.name;
    _this25.price_amount_cents = fields.price_amount_cents;
    _this25.delay_hours = fields.delay_hours;
    _this25.sku_code_regex = fields.sku_code_regex;
    return _this25;
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
}(Resource); // Sku resource


var Sku =
/*#__PURE__*/
function (_Resource27) {
  _inherits(Sku, _Resource27);

  _createClass(Sku, null, [{
    key: "TYPE",
    get: function get() {
      return 'skus';
    }
  }]);

  function Sku(id) {
    var _this26;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sku);

    _this26 = _possibleConstructorReturn(this, _getPrototypeOf(Sku).call(this, id, Sku.TYPE));
    _this26.code = fields.code;
    _this26.name = fields.name;
    _this26.description = fields.description;
    _this26.image_url = fields.image_url;
    _this26.tag_names = fields.tag_names;
    _this26.pieces_per_pack = fields.pieces_per_pack;
    _this26.weight = fields.weight;
    _this26.unit_of_weight = fields.unit_of_weight;
    return _this26;
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
}(Resource); // Stock Item resource


var StockItem =
/*#__PURE__*/
function (_Resource28) {
  _inherits(StockItem, _Resource28);

  _createClass(StockItem, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_items';
    }
  }]);

  function StockItem(id) {
    var _this27;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockItem);

    _this27 = _possibleConstructorReturn(this, _getPrototypeOf(StockItem).call(this, id, StockItem.TYPE));
    _this27.sku_code = fields.sku_code;
    _this27.quantity = fields.quantity;
    return _this27;
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
}(Resource); // Stock Level resource


var StockLevel =
/*#__PURE__*/
function (_Resource29) {
  _inherits(StockLevel, _Resource29);

  _createClass(StockLevel, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_levels';
    }
  }]);

  function StockLevel(id) {
    var _this28;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockLevel);

    _this28 = _possibleConstructorReturn(this, _getPrototypeOf(StockLevel).call(this, id, StockLevel.TYPE));
    _this28.priority = fields.priority;
    _this28.on_hold = fields.on_hold;
    return _this28;
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
}(Resource); // Stock Location resource


var StockLocation =
/*#__PURE__*/
function (_Resource30) {
  _inherits(StockLocation, _Resource30);

  _createClass(StockLocation, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_locations';
    }
  }]);

  function StockLocation(id) {
    var _this29;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockLocation);

    _this29 = _possibleConstructorReturn(this, _getPrototypeOf(StockLocation).call(this, id, StockLocation.TYPE));
    _this29.name = fields.name;
    _this29.label_format = fields.label_format;
    return _this29;
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
function (_Resource31) {
  _inherits(Webhook, _Resource31);

  _createClass(Webhook, null, [{
    key: "TYPE",
    get: function get() {
      return 'webhooks';
    }
  }]);

  function Webhook(id) {
    var _this30;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Webhook);

    _this30 = _possibleConstructorReturn(this, _getPrototypeOf(Webhook).call(this, id, Webhook.TYPE));
    _this30.topic = fields.topic;
    _this30.callback_url = fields.callback_url;
    _this30.include_resources = fields.include_resources;
    return _this30;
  } // Relationships


  return Webhook;
}(Resource); // Wire Transfer resource


var WireTransfer =
/*#__PURE__*/
function (_Resource32) {
  _inherits(WireTransfer, _Resource32);

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
  CustomerAddress: CustomerAddress,
  CustomerGroup: CustomerGroup,
  CustomerPasswordReset: CustomerPasswordReset,
  CustomerPaymentSource: CustomerPaymentSource,
  CustomerSubscription: CustomerSubscription,
  Customer: Customer,
  DeliveryLeadTime: DeliveryLeadTime,
  Import: Import,
  InventoryModel: InventoryModel,
  LineItemOption: LineItemOption,
  LineItem: LineItem,
  Market: Market,
  Merchant: Merchant,
  Order: Order,
  Parcel: Parcel,
  PaymentMethod: PaymentMethod,
  PaypalPayment: PaypalPayment,
  PriceList: PriceList,
  Price: Price,
  Shipment: Shipment,
  ShippingCategory: ShippingCategory,
  ShippingMethod: ShippingMethod,
  ShippingZone: ShippingZone,
  SkuOption: SkuOption,
  Sku: Sku,
  StockItem: StockItem,
  StockLevel: StockLevel,
  StockLocation: StockLocation,
  Webhook: Webhook,
  WireTransfer: WireTransfer // ********** Helper ********** //

};
var helper = {};
module.exports.helper = helper;

helper.allElements = function () {
  var elements = [];
  var model = module.exports;
  Object.keys(model).some(function (cl) {
    if (!cl.startsWith('helper')) elements.push(cl);
  });
  return elements;
};

helper.newResource = function (type, id, fields) {
  var instance = undefined;
  var model = module.exports; // Object.keys(model).some((cl) => {
  // 	if (!cl.startsWith('helper')) {
  // 		let cl_type = model[cl].TYPE;
  // 		if (cl_type && (cl_type == type)) {
  // 			instance = new model[cl](id || fields.id, fields);
  // 		}
  // 	}
  // 	return (instance != undefined);
  // });

  helper.allElements().some(function (cl) {
    var cl_type = model[cl].TYPE;

    if (cl_type && cl_type == type) {
      instance = new model[cl](id || fields.id, fields);
    }

    return instance != undefined;
  });
  return instance;
};

helper.isApiResource = function (res) {
  return res && res.isApiResource && res.isApiResource() === true;
};

helper.isApiResourceArray = function (resArray) {
  return resArray && Array.isArray(resArray) && (resArray.length == 0 || helper.isApiResource(resArray[0]));
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
      var _this = this;

      for (var _len2 = arguments.length, resources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        resources[_key2] = arguments[_key2];
      }

      if (resources != undefined) resources.forEach(function (res) {
        _this.included_resources.push(res);
      }); // if (resources != undefined) this.included_resources.push(resources);

      return this;
    }
  }, {
    key: "filter",
    value: function filter(_filter, value) {
      if (_filter != undefined && value != undefined) this.filter_fields[_filter] = value;
      return this;
    }
  }, {
    key: "filters",
    value: function filters(_filters) {
      var _this2 = this;

      if (_filters != undefined) Object.keys(_filters).forEach(function (filter) {
        _this2.filter(filter, _filters[filter]);
      });
      return this;
    }
  }, {
    key: "param",
    value: function param(key, value) {
      if (key != undefined && value != undefined) this.custom_params[key] = value;
      return this;
    }
  }, {
    key: "params",
    value: function params(_params) {
      var _this3 = this;

      if (_params != undefined) Object.keys(_params).forEach(function (key) {
        _this3.param(key, _params[key]);
      });
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
      this.page_number = this.page_number && Number.isInteger(this.pageNumber) ? page_number++ : 1;
      return this;
    }
  }, {
    key: "build",
    value: function build(join) {
      var _this4 = this;

      var qsMap = {}; // Filter Fields

      if (Object.keys(this.filter_fields).length > 0) Object.keys(this.filter_fields).forEach(function (filter) {
        qsMap["filter[".concat(filter, "]")] = _this4.filter_fields[filter];
      }); // Included Resources

      if (Object.keys(this.included_resources).length > 0) qsMap.include = this.included_resources.join(','); // Sparse Fieldsets

      if (Object.keys(this.sparse_fieldsets).length > 0) Object.keys(this.sparse_fieldsets).forEach(function (res) {
        qsMap["fields[".concat(res, "]")] = _this4.sparse_fieldsets[res].join(',');
      }); // Sort Fields

      if (Object.keys(this.sort_fields).length > 0) qsMap.sort = this.sort_fields.join(','); // Custom Params

      if (Object.keys(this.custom_params).length > 0) Object.keys(this.custom_params).forEach(function (key) {
        qsMap[key] = _this4.custom_params[key];
      }); // Pagination

      if (this.page_number != undefined) qsMap['page[number]'] = this.page_number;
      if (this.page_size != undefined) qsMap['page[size]'] = this.page_size;
      return !join ? qsMap : Object.keys(qsMap).map(function (key) {
        return "".concat(key, "=").concat(qsMap[key]);
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

/***/ "./lib/queryx.js":
/*!***********************!*\
  !*** ./lib/queryx.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var query = __webpack_require__(/*! ./query */ "./lib/query.js");

var QueryExpression =
/*#__PURE__*/
function (_query$QueryFilter) {
  _inherits(QueryExpression, _query$QueryFilter);

  _createClass(QueryExpression, null, [{
    key: "explain",
    value: function explain(type) {
      var p = QueryExpression.PREDICATES[type];
      return p != undefined ? p : 'Unknown predicate ' + type;
    }
    /**
     * https://github.com/activerecord-hackery/ransack#search-matchers
     * https://github.com/activerecord-hackery/ransack/blob/master/lib/ransack/locale/en.yml#L16
     */

  }, {
    key: "PREDICATES",
    get: function get() {
      return {
        'eq': "equals",
        'eq_any': "equals any",
        'eq_all': "equals all",
        'not_eq': "not equal to",
        'not_eq_any': "not equal to any",
        'not_eq_all': "not equal to all",
        'matches': "matches",
        'matches_any': "matches any",
        'matches_all': "matches all",
        'does_not_match': "doesn't match",
        'does_not_match_any': "doesn't match any",
        'does_not_match_all': "doesn't match all",
        'lt': "less than",
        'lt_any': "less than any",
        'lt_all': "less than all",
        'lteq': "less than or equal to",
        'lteq_any': "less than or equal to any",
        'lteq_all': "less than or equal to all",
        'gt': "greater than",
        'gt_any': "greater than any",
        'gt_all': "greater than all",
        'gteq': "greater than or equal to",
        'gteq_any': "greater than or equal to any",
        'gteq_all': "greater than or equal to all",
        'in': "in",
        'in_any': "in any",
        'in_all': "in all",
        'not_in': "not in",
        'not_in_any': "not in any",
        'not_in_all': "not in all",
        'cont': "contains",
        'cont_any': "contains any",
        'cont_all': "contains all",
        'not_cont': "doesn't contain",
        'not_cont_any': "doesn't contain any",
        'not_cont_all': "doesn't contain all",
        'start': "starts with",
        'start_any': "starts with any",
        'start_all': "starts with all",
        'not_start': "doesn't start with",
        'not_start_any': "doesn't start with any",
        'not_start_all': "doesn't start with all",
        'end': "ends with",
        'end_any': "ends with any",
        'end_all': "ends with all",
        'not_end': "doesn't end with",
        'not_end_any': "doesn't end with any",
        'not_end_all': "doesn't end with all",
        'true': "is true",
        'false': "is false",
        'present': "is present",
        'blank': "is blank",
        'null': "is null",
        'not_null': "is not null"
      };
    }
  }]);

  function QueryExpression() {
    var _this;

    _classCallCheck(this, QueryExpression);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QueryExpression).call(this));

    _this.clear();

    return _this;
  }

  _createClass(QueryExpression, [{
    key: "clear",
    value: function clear() {
      _get(_getPrototypeOf(QueryExpression.prototype), "clear", this).call(this);

      this.predicates = [];
    }
  }, {
    key: "isQueryExpression",
    value: function isQueryExpression() {
      return true;
    }
  }, {
    key: "predicate",
    value: function predicate(type, value) {
      for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        fields[_key - 2] = arguments[_key];
      }

      if (fields != undefined && value != undefined) {
        if (this.__disable_predicate_check == undefined || this.__disable_predicate_check !== true) if (!Object.keys(QueryExpression.PREDICATES).includes(type)) throw 'Undefined predicate ' + type;
        var fields_ = Array.isArray(fields[0]) ? fields[0] : fields;
        var key = fields_.join('_or_') + '_' + type;
        var val = Array.isArray(value) ? value.join(',') : value;
        this.predicates[key] = val;
      }

      return this;
    }
  }, {
    key: "describe",
    value: function describe(type) {
      return QueryExpression.explain(type);
    }
  }, {
    key: "build",
    value: function build(join) {
      var _this2 = this;

      var qsMap = _get(_getPrototypeOf(QueryExpression.prototype), "build", this).call(this, join);

      if (!join) Object.keys(this.predicates).forEach(function (p) {
        qsMap["filter[q][".concat(p, "]")] = _this2.predicates[p];
      });else {
        if (qsMap.length > 0) qsMap += '&';
        qsMap += Object.keys(this.predicates).map(function (p) {
          return "filter[q][".concat(p, "]=").concat(_this2.predicates[p]);
        }).join('&');
      }
      return qsMap;
    } // Predicate shortcuts

  }, {
    key: "_eq",
    value: function _eq(value) {
      for (var _len2 = arguments.length, fields = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        fields[_key2 - 1] = arguments[_key2];
      }

      return this.predicate('eq', value, fields);
    }
  }, {
    key: "_eq_any",
    value: function _eq_any(value) {
      for (var _len3 = arguments.length, fields = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        fields[_key3 - 1] = arguments[_key3];
      }

      return this.predicate('eq_any', value, fields);
    }
  }, {
    key: "_eq_all",
    value: function _eq_all(value) {
      for (var _len4 = arguments.length, fields = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        fields[_key4 - 1] = arguments[_key4];
      }

      return this.predicate('eq_all', value, fields);
    }
  }, {
    key: "_not_eq",
    value: function _not_eq(value) {
      for (var _len5 = arguments.length, fields = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        fields[_key5 - 1] = arguments[_key5];
      }

      return this.predicate('not_eq', value, fields);
    }
  }, {
    key: "_not_eq_any",
    value: function _not_eq_any(value) {
      for (var _len6 = arguments.length, fields = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        fields[_key6 - 1] = arguments[_key6];
      }

      return this.predicate('not_eq_any', value, fields);
    }
  }, {
    key: "_not_eq_all",
    value: function _not_eq_all(value) {
      for (var _len7 = arguments.length, fields = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        fields[_key7 - 1] = arguments[_key7];
      }

      return this.predicate('not_eq_all', value, fields);
    }
  }, {
    key: "_matches",
    value: function _matches(value) {
      for (var _len8 = arguments.length, fields = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        fields[_key8 - 1] = arguments[_key8];
      }

      return this.predicate('matches', value, fields);
    }
  }, {
    key: "_matches_any",
    value: function _matches_any(value) {
      for (var _len9 = arguments.length, fields = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
        fields[_key9 - 1] = arguments[_key9];
      }

      return this.predicate('matches_any', value, fields);
    }
  }, {
    key: "_matches_all",
    value: function _matches_all(value) {
      for (var _len10 = arguments.length, fields = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
        fields[_key10 - 1] = arguments[_key10];
      }

      return this.predicate('matches_all', value, fields);
    }
  }, {
    key: "_does_not_match",
    value: function _does_not_match(value) {
      for (var _len11 = arguments.length, fields = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
        fields[_key11 - 1] = arguments[_key11];
      }

      return this.predicate('does_not_match', value, fields);
    }
  }, {
    key: "_does_not_match_any",
    value: function _does_not_match_any(value) {
      for (var _len12 = arguments.length, fields = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
        fields[_key12 - 1] = arguments[_key12];
      }

      return this.predicate('does_not_match_any', value, fields);
    }
  }, {
    key: "_does_not_match_all",
    value: function _does_not_match_all(value) {
      for (var _len13 = arguments.length, fields = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
        fields[_key13 - 1] = arguments[_key13];
      }

      return this.predicate('does_not_match_all', value, fields);
    }
  }, {
    key: "_lt",
    value: function _lt(value) {
      for (var _len14 = arguments.length, fields = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
        fields[_key14 - 1] = arguments[_key14];
      }

      return this.predicate('lt', value, fields);
    }
  }, {
    key: "_lt_any",
    value: function _lt_any(value) {
      for (var _len15 = arguments.length, fields = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        fields[_key15 - 1] = arguments[_key15];
      }

      return this.predicate('lt_any', value, fields);
    }
  }, {
    key: "_lt_all",
    value: function _lt_all(value) {
      for (var _len16 = arguments.length, fields = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
        fields[_key16 - 1] = arguments[_key16];
      }

      return this.predicate('lt_all', value, fields);
    }
  }, {
    key: "_lteq",
    value: function _lteq(value) {
      for (var _len17 = arguments.length, fields = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
        fields[_key17 - 1] = arguments[_key17];
      }

      return this.predicate('lteq', value, fields);
    }
  }, {
    key: "_lteq_any",
    value: function _lteq_any(value) {
      for (var _len18 = arguments.length, fields = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
        fields[_key18 - 1] = arguments[_key18];
      }

      return this.predicate('lteq_any', value, fields);
    }
  }, {
    key: "_lteq_all",
    value: function _lteq_all(value) {
      for (var _len19 = arguments.length, fields = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
        fields[_key19 - 1] = arguments[_key19];
      }

      return this.predicate('lteq_all', value, fields);
    }
  }, {
    key: "_gt",
    value: function _gt(value) {
      for (var _len20 = arguments.length, fields = new Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
        fields[_key20 - 1] = arguments[_key20];
      }

      return this.predicate('gt', value, fields);
    }
  }, {
    key: "_gt_any",
    value: function _gt_any(value) {
      for (var _len21 = arguments.length, fields = new Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
        fields[_key21 - 1] = arguments[_key21];
      }

      return this.predicate('gt_any', value, fields);
    }
  }, {
    key: "_gt_all",
    value: function _gt_all(value) {
      for (var _len22 = arguments.length, fields = new Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
        fields[_key22 - 1] = arguments[_key22];
      }

      return this.predicate('gt_all', value, fields);
    }
  }, {
    key: "_gteq",
    value: function _gteq(value) {
      for (var _len23 = arguments.length, fields = new Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
        fields[_key23 - 1] = arguments[_key23];
      }

      return this.predicate('gteq', value, fields);
    }
  }, {
    key: "_gteq_any",
    value: function _gteq_any(value) {
      for (var _len24 = arguments.length, fields = new Array(_len24 > 1 ? _len24 - 1 : 0), _key24 = 1; _key24 < _len24; _key24++) {
        fields[_key24 - 1] = arguments[_key24];
      }

      return this.predicate('gteq_any', value, fields);
    }
  }, {
    key: "_gteq_all",
    value: function _gteq_all(value) {
      for (var _len25 = arguments.length, fields = new Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
        fields[_key25 - 1] = arguments[_key25];
      }

      return this.predicate('gteq_all', value, fields);
    }
  }, {
    key: "_in",
    value: function _in(value) {
      for (var _len26 = arguments.length, fields = new Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
        fields[_key26 - 1] = arguments[_key26];
      }

      return this.predicate('in', value, fields);
    }
  }, {
    key: "_in_any",
    value: function _in_any(value) {
      for (var _len27 = arguments.length, fields = new Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
        fields[_key27 - 1] = arguments[_key27];
      }

      return this.predicate('in_any', value, fields);
    }
  }, {
    key: "_in_all",
    value: function _in_all(value) {
      for (var _len28 = arguments.length, fields = new Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
        fields[_key28 - 1] = arguments[_key28];
      }

      return this.predicate('in_all', value, fields);
    }
  }, {
    key: "_not_in",
    value: function _not_in(value) {
      for (var _len29 = arguments.length, fields = new Array(_len29 > 1 ? _len29 - 1 : 0), _key29 = 1; _key29 < _len29; _key29++) {
        fields[_key29 - 1] = arguments[_key29];
      }

      return this.predicate('not_in', value, fields);
    }
  }, {
    key: "_not_in_any",
    value: function _not_in_any(value) {
      for (var _len30 = arguments.length, fields = new Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
        fields[_key30 - 1] = arguments[_key30];
      }

      return this.predicate('not_in_any', value, fields);
    }
  }, {
    key: "_not_in_all",
    value: function _not_in_all(value) {
      for (var _len31 = arguments.length, fields = new Array(_len31 > 1 ? _len31 - 1 : 0), _key31 = 1; _key31 < _len31; _key31++) {
        fields[_key31 - 1] = arguments[_key31];
      }

      return this.predicate('not_in_all', value, fields);
    }
  }, {
    key: "_cont",
    value: function _cont(value) {
      for (var _len32 = arguments.length, fields = new Array(_len32 > 1 ? _len32 - 1 : 0), _key32 = 1; _key32 < _len32; _key32++) {
        fields[_key32 - 1] = arguments[_key32];
      }

      return this.predicate('cont', value, fields);
    }
  }, {
    key: "_cont_any",
    value: function _cont_any(value) {
      for (var _len33 = arguments.length, fields = new Array(_len33 > 1 ? _len33 - 1 : 0), _key33 = 1; _key33 < _len33; _key33++) {
        fields[_key33 - 1] = arguments[_key33];
      }

      return this.predicate('cont_any', value, fields);
    }
  }, {
    key: "_cont_all",
    value: function _cont_all(value) {
      for (var _len34 = arguments.length, fields = new Array(_len34 > 1 ? _len34 - 1 : 0), _key34 = 1; _key34 < _len34; _key34++) {
        fields[_key34 - 1] = arguments[_key34];
      }

      return this.predicate('cont_all', value, fields);
    }
  }, {
    key: "_not_cont",
    value: function _not_cont(value) {
      for (var _len35 = arguments.length, fields = new Array(_len35 > 1 ? _len35 - 1 : 0), _key35 = 1; _key35 < _len35; _key35++) {
        fields[_key35 - 1] = arguments[_key35];
      }

      return this.predicate('not_cont', value, fields);
    }
  }, {
    key: "_not_cont_any",
    value: function _not_cont_any(value) {
      for (var _len36 = arguments.length, fields = new Array(_len36 > 1 ? _len36 - 1 : 0), _key36 = 1; _key36 < _len36; _key36++) {
        fields[_key36 - 1] = arguments[_key36];
      }

      return this.predicate('not_cont_any', value, fields);
    }
  }, {
    key: "_not_cont",
    value: function _not_cont(value) {
      for (var _len37 = arguments.length, fields = new Array(_len37 > 1 ? _len37 - 1 : 0), _key37 = 1; _key37 < _len37; _key37++) {
        fields[_key37 - 1] = arguments[_key37];
      }

      return this.predicate('not_cont', value, fields);
    }
  }, {
    key: "_not_cont_any",
    value: function _not_cont_any(value) {
      for (var _len38 = arguments.length, fields = new Array(_len38 > 1 ? _len38 - 1 : 0), _key38 = 1; _key38 < _len38; _key38++) {
        fields[_key38 - 1] = arguments[_key38];
      }

      return this.predicate('not_cont_any', value, fields);
    }
  }, {
    key: "_not_cont_all",
    value: function _not_cont_all(value) {
      for (var _len39 = arguments.length, fields = new Array(_len39 > 1 ? _len39 - 1 : 0), _key39 = 1; _key39 < _len39; _key39++) {
        fields[_key39 - 1] = arguments[_key39];
      }

      return this.predicate('not_cont_all', value, fields);
    }
  }, {
    key: "_start",
    value: function _start(value) {
      for (var _len40 = arguments.length, fields = new Array(_len40 > 1 ? _len40 - 1 : 0), _key40 = 1; _key40 < _len40; _key40++) {
        fields[_key40 - 1] = arguments[_key40];
      }

      return this.predicate('start', value, fields);
    }
  }, {
    key: "_start_any",
    value: function _start_any(value) {
      for (var _len41 = arguments.length, fields = new Array(_len41 > 1 ? _len41 - 1 : 0), _key41 = 1; _key41 < _len41; _key41++) {
        fields[_key41 - 1] = arguments[_key41];
      }

      return this.predicate('start_any', value, fields);
    }
  }, {
    key: "_start_all",
    value: function _start_all(value) {
      for (var _len42 = arguments.length, fields = new Array(_len42 > 1 ? _len42 - 1 : 0), _key42 = 1; _key42 < _len42; _key42++) {
        fields[_key42 - 1] = arguments[_key42];
      }

      return this.predicate('start_all', value, fields);
    }
  }, {
    key: "_not_start",
    value: function _not_start(value) {
      for (var _len43 = arguments.length, fields = new Array(_len43 > 1 ? _len43 - 1 : 0), _key43 = 1; _key43 < _len43; _key43++) {
        fields[_key43 - 1] = arguments[_key43];
      }

      return this.predicate('not_start', value, fields);
    }
  }, {
    key: "_not_start_any",
    value: function _not_start_any(value) {
      for (var _len44 = arguments.length, fields = new Array(_len44 > 1 ? _len44 - 1 : 0), _key44 = 1; _key44 < _len44; _key44++) {
        fields[_key44 - 1] = arguments[_key44];
      }

      return this.predicate('not_start_any', value, fields);
    }
  }, {
    key: "_not_start_all",
    value: function _not_start_all(value) {
      for (var _len45 = arguments.length, fields = new Array(_len45 > 1 ? _len45 - 1 : 0), _key45 = 1; _key45 < _len45; _key45++) {
        fields[_key45 - 1] = arguments[_key45];
      }

      return this.predicate('not_start_all', value, fields);
    }
  }, {
    key: "_end",
    value: function _end(value) {
      for (var _len46 = arguments.length, fields = new Array(_len46 > 1 ? _len46 - 1 : 0), _key46 = 1; _key46 < _len46; _key46++) {
        fields[_key46 - 1] = arguments[_key46];
      }

      return this.predicate('end', value, fields);
    }
  }, {
    key: "_end_any",
    value: function _end_any(value) {
      for (var _len47 = arguments.length, fields = new Array(_len47 > 1 ? _len47 - 1 : 0), _key47 = 1; _key47 < _len47; _key47++) {
        fields[_key47 - 1] = arguments[_key47];
      }

      return this.predicate('end_any', value, fields);
    }
  }, {
    key: "_end_all",
    value: function _end_all(value) {
      for (var _len48 = arguments.length, fields = new Array(_len48 > 1 ? _len48 - 1 : 0), _key48 = 1; _key48 < _len48; _key48++) {
        fields[_key48 - 1] = arguments[_key48];
      }

      return this.predicate('end_all', value, fields);
    }
  }, {
    key: "_not_end",
    value: function _not_end(value) {
      for (var _len49 = arguments.length, fields = new Array(_len49 > 1 ? _len49 - 1 : 0), _key49 = 1; _key49 < _len49; _key49++) {
        fields[_key49 - 1] = arguments[_key49];
      }

      return this.predicate('not_end', value, fields);
    }
  }, {
    key: "_not_end_any",
    value: function _not_end_any(value) {
      for (var _len50 = arguments.length, fields = new Array(_len50 > 1 ? _len50 - 1 : 0), _key50 = 1; _key50 < _len50; _key50++) {
        fields[_key50 - 1] = arguments[_key50];
      }

      return this.predicate('not_end_any', value, fields);
    }
  }, {
    key: "_not_end_all",
    value: function _not_end_all(value) {
      for (var _len51 = arguments.length, fields = new Array(_len51 > 1 ? _len51 - 1 : 0), _key51 = 1; _key51 < _len51; _key51++) {
        fields[_key51 - 1] = arguments[_key51];
      }

      return this.predicate('not_end_all', value, fields);
    }
  }, {
    key: "_true",
    value: function _true(value) {
      for (var _len52 = arguments.length, fields = new Array(_len52 > 1 ? _len52 - 1 : 0), _key52 = 1; _key52 < _len52; _key52++) {
        fields[_key52 - 1] = arguments[_key52];
      }

      return this.predicate('true', value, fields);
    }
  }, {
    key: "_false",
    value: function _false(value) {
      for (var _len53 = arguments.length, fields = new Array(_len53 > 1 ? _len53 - 1 : 0), _key53 = 1; _key53 < _len53; _key53++) {
        fields[_key53 - 1] = arguments[_key53];
      }

      return this.predicate('false', value, fields);
    }
  }, {
    key: "_present",
    value: function _present(value) {
      for (var _len54 = arguments.length, fields = new Array(_len54 > 1 ? _len54 - 1 : 0), _key54 = 1; _key54 < _len54; _key54++) {
        fields[_key54 - 1] = arguments[_key54];
      }

      return this.predicate('present', value, fields);
    }
  }, {
    key: "_blank",
    value: function _blank(value) {
      for (var _len55 = arguments.length, fields = new Array(_len55 > 1 ? _len55 - 1 : 0), _key55 = 1; _key55 < _len55; _key55++) {
        fields[_key55 - 1] = arguments[_key55];
      }

      return this.predicate('blank', value, fields);
    }
  }, {
    key: "_null",
    value: function _null(value) {
      for (var _len56 = arguments.length, fields = new Array(_len56 > 1 ? _len56 - 1 : 0), _key56 = 1; _key56 < _len56; _key56++) {
        fields[_key56 - 1] = arguments[_key56];
      }

      return this.predicate('null', value, fields);
    }
  }, {
    key: "_not_null",
    value: function _not_null(value) {
      for (var _len57 = arguments.length, fields = new Array(_len57 > 1 ? _len57 - 1 : 0), _key57 = 1; _key57 < _len57; _key57++) {
        fields[_key57 - 1] = arguments[_key57];
      }

      return this.predicate('not_null', value, fields);
    }
  }]);

  return QueryExpression;
}(query.QueryFilter);

module.exports = {
  QueryExpression: QueryExpression
};

module.exports.newInstance = function () {
  return new QueryExpression();
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

var _log = __webpack_require__(/*! ./log */ "./lib/log.js");

module.exports = {
  log: function log(message) {
    // BWC
    _log.msg(message);
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
  capitalize: function capitalize(str) {
    return typeof str !== 'string' ? '' : str.charAt(0).toUpperCase() + str.slice(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25zdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2Vycm9yLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvanNvbmFwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2xvZy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL21vZGVsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2pzb24tYXBpLW5vcm1hbGl6ZS9zcmMvanNvbkFwaU5vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIm1vZGVsIiwicXVlcnkiLCJxdWVyeXgiLCJjb25zdCIsImNsaWVudCIsImxvZyIsImpzb25hcGkiLCJlcnJvclJlc3BvbnNlIiwic2RrIiwiQ0xBcGkiLCJmaWx0ZXIiLCJvcHRpb25zIiwicmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJzZXRQYXJhbXMiLCJzZXRPcHRpb25zIiwiaWQiLCJhZGRyZXNzIiwic2V0Qm9keSIsImFsbCIsImxpc3RBZGRyZXNzZXMiLCJjcmVkaXRfY2FyZCIsImxpc3RDcmVkaXRDYXJkcyIsImN1c3RvbWVyX2FkZHJlc3MiLCJsaXN0Q3VzdG9tZXJBZGRyZXNzZXMiLCJjdXN0b21lcl9ncm91cCIsImxpc3RDdXN0b21lckdyb3VwcyIsImN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0IiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXltZW50X3NvdXJjZSIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucyIsImN1c3RvbWVyIiwibGlzdEN1c3RvbWVycyIsImRlbGl2ZXJ5X2xlYWRfdGltZSIsImxpc3REZWxpdmVyeUxlYWRUaW1lcyIsImltcG9ydF8iLCJsaXN0SW1wb3J0cyIsImludmVudG9yeV9tb2RlbCIsImxpc3RJbnZlbnRvcnlNb2RlbHMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtT3B0aW9ucyIsImxpbmVfaXRlbSIsImxpc3RMaW5lSXRlbXMiLCJtYXJrZXQiLCJsaXN0TWFya2V0cyIsIm1lcmNoYW50IiwibGlzdE1lcmNoYW50cyIsIm9yZGVyIiwibGlzdE9yZGVycyIsInBhcmNlbCIsImxpc3RQYXJjZWxzIiwicGF5bWVudF9tZXRob2QiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXlwYWxfcGF5bWVudCIsImxpc3RQYXlwYWxQYXltZW50cyIsInByaWNlX2xpc3QiLCJsaXN0UHJpY2VMaXN0cyIsInByaWNlIiwibGlzdFByaWNlcyIsInNoaXBtZW50IiwibGlzdFNoaXBtZW50cyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ01ldGhvZHMiLCJzaGlwcGluZ196b25lIiwibGlzdFNoaXBwaW5nWm9uZXMiLCJza3Vfb3B0aW9uIiwibGlzdFNrdU9wdGlvbnMiLCJza3UiLCJsaXN0U2t1cyIsInN0b2NrX2l0ZW0iLCJsaXN0U3RvY2tJdGVtcyIsInN0b2NrX2xldmVsIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbG9jYXRpb24iLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJ3ZWJob29rIiwibGlzdFdlYmhvb2tzIiwid2lyZV90cmFuc2ZlciIsImxpc3RXaXJlVHJhbnNmZXJzIiwiYXBpIiwiY2xhcGkiLCJpbml0aWFsaXplIiwiY2ZnIiwibXNnIiwibmV3SW5zdGFuY2UiLCJhcGlSZXF1ZXN0IiwiY29ycmVsYXRpb25faWQiLCJhdHRlbXB0IiwicGF0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZWplY3QiLCJuZXdFcnJvciIsImJvZHkiLCJzZXJpYWxpemUiLCJjYWxsIiwidGhlbiIsImFwaVJlc3BvbnNlIiwicmVzcG9uc2UiLCJyZXNwb25zZV90eXBlIiwiY2F0Y2giLCJhcGlFcnJvciIsImVycm9yIiwiZXJyb3JfdHlwZSIsImRlc2VyaWFsaXplIiwiZGF0YSIsIm5vcm1hbGl6ZSIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JzIiwic3RhdHVzIiwiYWRkQXBpRXJyb3JzIiwic3RhdHVzVGV4dCIsInJlcyIsImlzQXBpUmVzb3VyY2UiLCJkYXRhc2V0IiwibGlzdEZ1bmN0aW9uIiwic2V0UGFnZSIsInNpemUiLCJwYWdlX3NpemUiLCJudW1iZXIiLCJpc1F1ZXJ5RmlsdGVyIiwicGFnZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiZmlyc3RQYWdlIiwibWF4X3BhZ2UiLCJtZXRhIiwicGFnZV9jb3VudCIsImxlbmd0aCIsInBhZ2VzIiwiQXJyYXkiLCJwbiIsInBhZ2VzT3V0IiwiaXNBcnJheSIsIm91dCIsImZvckVhY2giLCJwIiwiY29uY2F0IiwiYXhpb3MiLCJBVVRIX1RPS0VOUyIsImNhY2hlVG9rZW4iLCJjbGllbnRfaWQiLCJncmFudF90eXBlIiwic2NvcGUiLCJ0b2tlbiIsImF1dGhfY2FjaGUiLCJ0b2tlbklkIiwiZ2V0VG9rZW4iLCJBdXRoIiwiY2xpZW50X3NlY3JldCIsImNpZCIsImNzZWMiLCJDbGllbnRDcmVkZW50aWFscyIsIkF1dGhvcml6YXRpb25Db2RlIiwicmVkaXJlY3RfdXJpIiwidXJpIiwiUGFzc3dvcmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiUmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsIkFwaVRva2VuIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIm93bmVyX3R5cGUiLCJvd25lcl9pZCIsImNyZWF0ZWRfYXQiLCJleHBpcmVzX2luIiwiYXV0aGVudGljYXRlIiwiYXV0aCIsInBvc3QiLCJuZXdBdXRoQ29uZmlnIiwiY29uZmlnIiwidXRpbHMiLCJzZXR0aW5ncyIsImRlZmF1bHQiLCJtZXJnZU1hcHMiLCJjbGF5ZXIiLCJsYXN0QWNjZXNzVG9rZW4iLCJzZXRBeGlvc0NvbmZpZyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImJhc2VfdXJsIiwiaGVhZGVycyIsImNvbW1vbiIsImRlYnVnIiwidHJhY2UiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJBcGlDbGllbnQiLCJtZXRob2QiLCJBcGlSZXF1ZXN0IiwicGFyYW1zIiwiZ3VpZCIsImJ1aWxkIiwidHlwZSIsInJlc3BvbnNlVHlwZSIsImVycm9yVHlwZSIsInJhdyIsImNoZWNrQXBpQ29uZmlnIiwiYXV0aF9hdHRlbXB0cyIsImF1dGhDb25maWciLCJhdXRoZW50aWNhdGlvbiIsImlzQXV0aENvbmZpZyIsImNsaWVudElkIiwibWFya2V0U2NvcGUiLCJtYXJrZXRfaWQiLCJjbGllbnRTZWNyZXQiLCJuZXdBdHRlbXB0IiwiYmFzZV9wYXRoIiwiY2FsbFVybCIsIk9iamVjdCIsImtleXMiLCJxdWVyeVN0cmluZyIsIm1hcCIsImtleSIsImpvaW4iLCJ0b1VwcGVyQ2FzZSIsImF4aW9zQ29uZmlnIiwidXJsIiwidGltZW91dCIsImV4dGVuZE1hcCIsIm1heF9hdHRlbXB0cyIsInJldHJ5Iiwic2xlZXAiLCJBdXRob3JpemF0aW9uIiwiYXV0b3NlbnNlIiwiY291bnRyeV9jb2RlIiwibGFuZ3VhZ2VfY29kZSIsImNvbnNvbGUiLCJSZXNwb25zZVR5cGUiLCJFcnJvclR5cGUiLCJFcnJvciIsInRpdGxlIiwiZGV0YWlsIiwic291cmNlIiwicG9pbnRlciIsIkVycm9yUmVzcG9uc2UiLCJkZXNjcmlwdGlvbiIsImlzQXBpRXJyb3IiLCJwdXNoIiwiYWRkRXJyb3IiLCJhcGlFcnJvcnMiLCJhZGRBcGlFcnJvciIsImFwaUVycm9yc0NvdW50IiwiaW5kZXgiLCJlcnIiLCJ4IiwiSnNvbkFwaVJlc291cmNlIiwiamFwaSIsInJlc0FycmF5IiwicmVzb3VyY2UiLCJhdHRyaWJ1dGVzIiwiZmllbGQiLCJpbmNsdWRlcyIsImhlbHBlciIsInJlbGF0aW9uc2hpcHMiLCJzdWJzdHIiLCJyZWwiLCJuZXdSZXNvdXJjZSIsInJlbF9kYXRhIiwicmQiLCJyZWxSZXMiLCJyZWxhdGVkUmVzb3VyY2UiLCJzZXRSZXNvdXJjZSIsImluYyIsImpzb25hcGlJbmNsdWRlZCIsInNldEZpZWxkcyIsImluY2x1ZGVkIiwiaW5jUmVzIiwic29tZSIsImVuYWJsZSIsImRpc2FibGUiLCJwcm9iZSIsImVuYWJsZWQiLCJSZXNvdXJjZSIsInJlZmVyZW5jZSIsIm1ldGFkYXRhIiwidXBkYXRlZF9hdCIsImlzQXBpUmVzb3VyY2VBcnJheSIsImZpZWxkcyIsInZhbHVlIiwiQWRkcmVzcyIsIlRZUEUiLCJidXNpbmVzcyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb21wYW55IiwibGluZV8xIiwibGluZV8yIiwiY2l0eSIsInppcF9jb2RlIiwic3RhdGVfY29kZSIsInBob25lIiwiZW1haWwiLCJub3RlcyIsImxhdCIsImxuZyIsImJpbGxpbmdfaW5mbyIsIkNyZWRpdENhcmQiLCJtb250aCIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJDdXN0b21lckFkZHJlc3MiLCJDdXN0b21lckdyb3VwIiwiQ3VzdG9tZXJQYXNzd29yZFJlc2V0IiwiY3VzdG9tZXJfZW1haWwiLCJjdXN0b21lcl9wYXNzd29yZCIsIl9yZXNldF9wYXNzd29yZF90b2tlbiIsIkN1c3RvbWVyUGF5bWVudFNvdXJjZSIsIkN1c3RvbWVyU3Vic2NyaXB0aW9uIiwiQ3VzdG9tZXIiLCJEZWxpdmVyeUxlYWRUaW1lIiwibWluX2hvdXJzIiwibWF4X2hvdXJzIiwiSW1wb3J0IiwicmVzb3VyY2VfdHlwZSIsInBhcmVudF9yZXNvdXJjZV9pZCIsImlucHV0cyIsImNsZWFudXBfcmVjb3JkcyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW1PcHRpb24iLCJxdWFudGl0eSIsIkxpbmVJdGVtIiwic2t1X2NvZGUiLCJfdXBkYXRlX3F1YW50aXR5IiwiaW1hZ2VfdXJsIiwiTWFya2V0IiwiZmFjZWJvb2tfcGl4ZWxfaWQiLCJNZXJjaGFudCIsIk9yZGVyIiwiZ3Vlc3QiLCJzaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayIsImNvdXBvbl9jb2RlIiwiY2FydF91cmwiLCJyZXR1cm5fdXJsIiwidGVybXNfdXJsIiwicHJpdmFjeV91cmwiLCJfcGxhY2UiLCJfY2FuY2VsIiwiX2FwcHJvdmUiLCJfY2FwdHVyZSIsIl91cGRhdGVfdGF4ZXMiLCJfYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmciLCJfYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmciLCJfc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQiLCJfc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfcmVmcmVzaCIsIlBhcmNlbCIsIndlaWdodCIsInVuaXRfb2Zfd2VpZ2h0IiwiZWVsX3BmYyIsImNvbnRlbnRzX3R5cGUiLCJjb250ZW50c19leHBsYW5hdGlvbiIsImN1c3RvbXNfY2VydGlmeSIsImN1c3RvbXNfc2lnbmVyIiwibm9uX2RlbGl2ZXJ5X29wdGlvbiIsInJlc3RyaWN0aW9uX3R5cGUiLCJyZXN0cmljdGlvbl9jb21tZW50cyIsImN1c3RvbXNfaW5mb19yZXF1aXJlZCIsIlBheW1lbnRNZXRob2QiLCJwYXltZW50X3NvdXJjZV90eXBlIiwicHJpY2VfYW1vdW50X2NlbnRzIiwiUGF5cGFsUGF5bWVudCIsImNhbmNlbF91cmwiLCJub3RlX3RvX3BheWVyIiwicGF5cGFsX3BheWVyX2lkIiwiUHJpY2VMaXN0IiwiY3VycmVuY3lfY29kZSIsInRheF9pbmNsdWRlZCIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJTaGlwbWVudCIsIl9vbl9ob2xkIiwiX3BpY2tpbmciLCJfcGFja2luZyIsIl9yZWFkeV90b19zaGlwIiwiX3NoaXAiLCJfZ2V0X3JhdGVzIiwic2VsZWN0ZWRfcmF0ZV9pZCIsIl9wdXJjaGFzZSIsIlNoaXBwaW5nQ2F0ZWdvcnkiLCJTaGlwcGluZ01ldGhvZCIsImZyZWVfb3Zlcl9hbW91bnRfY2VudHMiLCJTaGlwcGluZ1pvbmUiLCJjb3VudHJ5X2NvZGVfcmVnZXgiLCJub3RfY291bnRyeV9jb2RlX3JlZ2V4Iiwic3RhdGVfY29kZV9yZWdleCIsIm5vdF9zdGF0ZV9jb2RlX3JlZ2V4IiwiemlwX2NvZGVfcmVnZXgiLCJub3RfemlwX2NvZGVfcmVnZXgiLCJTa3VPcHRpb24iLCJkZWxheV9ob3VycyIsInNrdV9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU3RvY2tJdGVtIiwiU3RvY2tMZXZlbCIsInByaW9yaXR5Iiwib25faG9sZCIsIlN0b2NrTG9jYXRpb24iLCJsYWJlbF9mb3JtYXQiLCJXZWJob29rIiwidG9waWMiLCJjYWxsYmFja191cmwiLCJpbmNsdWRlX3Jlc291cmNlcyIsIldpcmVUcmFuc2ZlciIsImFsbEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjbCIsImluc3RhbmNlIiwiY2xfdHlwZSIsIlF1ZXJ5RmlsdGVyIiwiY2xlYXIiLCJzb3J0X2ZpZWxkcyIsInNwYXJzZV9maWVsZHNldHMiLCJpbmNsdWRlZF9yZXNvdXJjZXMiLCJmaWx0ZXJfZmllbGRzIiwiY3VzdG9tX3BhcmFtcyIsInBhZ2VfbnVtYmVyIiwiZGVzY2VuZGluZyIsInJlc291cmNlcyIsImZpbHRlcnMiLCJwYXJhbSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsIk51bWJlciIsImlzSW50ZWdlciIsInFzTWFwIiwiaW5jbHVkZSIsInNvcnQiLCJRdWVyeUV4cHJlc3Npb24iLCJQUkVESUNBVEVTIiwicHJlZGljYXRlcyIsIl9fZGlzYWJsZV9wcmVkaWNhdGVfY2hlY2siLCJmaWVsZHNfIiwidmFsIiwiZXhwbGFpbiIsInByZWRpY2F0ZSIsImV4dCIsIm1hcDEiLCJtYXAyIiwiY2xvbmVNYXAiLCJtcyIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwiY2FwaXRhbGl6ZSIsInN0ciIsImNoYXJBdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FB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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2NsYXllcicpXHJcblxyXG4vLyBNb2RlbCBFeHRlbnNpb25cclxubW9kdWxlLmV4cG9ydHMubW9kZWwgPSByZXF1aXJlKCcuL2xpYi9tb2RlbCcpXHJcblxyXG4vLyBRdWVyeUZpbHRlciBFeHRlbnNpb25cclxubW9kdWxlLmV4cG9ydHMucXVlcnkgPSByZXF1aXJlKCcuL2xpYi9xdWVyeScpXHJcbi8vIFF1ZXJ5RXhwcmVzc2lvbiBFeHRlbnNpb25cclxubW9kdWxlLmV4cG9ydHMucXVlcnl4ID0gcmVxdWlyZSgnLi9saWIvcXVlcnl4JylcclxuXHJcbi8vIENvbW1lcmNlTGF5ZXIgY29uc3RhbnRzXHJcbm1vZHVsZS5leHBvcnRzLmNvbnN0ID0gcmVxdWlyZSgnLi9saWIvY29uc3QnKVxyXG4iLCIvLyBGaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGF0IDAyLzAzLzIwMTkgMTk6Mjc6NTggYnkgY29tbWVyY2VsYXllci1qcy1zZGstY29kZWdlblxyXG5cclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50JylcclxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi9sb2cnKVxyXG5jb25zdCBqc29uYXBpID0gcmVxdWlyZSgnLi9qc29uYXBpJylcclxuY29uc3QgZXJyb3JSZXNwb25zZSA9IHJlcXVpcmUoJy4vZXJyb3InKS5lcnJvclJlc3BvbnNlXHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcblxyXG5cclxuY2xhc3MgQ0xBcGkge1xyXG5cclxuXHQvLyBBZGRyZXNzXHJcblx0bGlzdEFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2FkZHJlc3NlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQWRkcmVzcyhhZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvYWRkcmVzc2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGFkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQWRkcmVzcyhpZCwgYWRkcmVzcywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGFkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0QWRkcmVzc2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVkaXQgQ2FyZFxyXG5cdGxpc3RDcmVkaXRDYXJkcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2NyZWRpdF9jYXJkcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDcmVkaXRDYXJkKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3JlZGl0Q2FyZChjcmVkaXRfY2FyZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2NyZWRpdF9jYXJkcycsICdwb3N0Jykuc2V0Qm9keShjcmVkaXRfY2FyZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDcmVkaXRDYXJkKGlkLCBjcmVkaXRfY2FyZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGNyZWRpdF9jYXJkKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUNyZWRpdENhcmQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDcmVkaXRDYXJkcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3JlZGl0Q2FyZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIEFkZHJlc3NcclxuXHRsaXN0Q3VzdG9tZXJBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJBZGRyZXNzKGN1c3RvbWVyX2FkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lckFkZHJlc3MoaWQsIGN1c3RvbWVyX2FkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9hZGRyZXNzKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lckFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgR3JvdXBcclxuXHRsaXN0Q3VzdG9tZXJHcm91cHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9ncm91cHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJHcm91cChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9ncm91cHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyR3JvdXAoY3VzdG9tZXJfZ3JvdXAsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9ncm91cHMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfZ3JvdXApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJHcm91cChpZCwgY3VzdG9tZXJfZ3JvdXAsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfZ3JvdXBzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9ncm91cCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lckdyb3VwKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9ncm91cHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJHcm91cHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyR3JvdXBzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXNzd29yZCBSZXNldFxyXG5cdGxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChjdXN0b21lcl9wYXNzd29yZF9yZXNldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9wYXNzd29yZF9yZXNldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQsIGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJQYXNzd29yZFJlc2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgUGF5bWVudCBTb3VyY2VcclxuXHRsaXN0Q3VzdG9tZXJQYXltZW50U291cmNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBheW1lbnRTb3VyY2UoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkLCBjdXN0b21lcl9wYXltZW50X3NvdXJjZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3BheW1lbnRfc291cmNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyUGF5bWVudFNvdXJjZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvblxyXG5cdGxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGN1c3RvbWVyX3N1YnNjcmlwdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBjdXN0b21lcl9zdWJzY3JpcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyU3Vic2NyaXB0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lclxyXG5cdGxpc3RDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lcihjdXN0b21lciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lcihpZCwgY3VzdG9tZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZWxpdmVyeSBMZWFkIFRpbWVcclxuXHRsaXN0RGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGVsaXZlcnlMZWFkVGltZShkZWxpdmVyeV9sZWFkX3RpbWUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJywgJ3Bvc3QnKS5zZXRCb2R5KGRlbGl2ZXJ5X2xlYWRfdGltZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVEZWxpdmVyeUxlYWRUaW1lKGlkLCBkZWxpdmVyeV9sZWFkX3RpbWUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZURlbGl2ZXJ5TGVhZFRpbWUoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsRGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdERlbGl2ZXJ5TGVhZFRpbWVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbXBvcnRcclxuXHRsaXN0SW1wb3J0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ltcG9ydHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlSW1wb3J0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ltcG9ydHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUltcG9ydChpbXBvcnRfLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW1wb3J0cycsICdwb3N0Jykuc2V0Qm9keShpbXBvcnRfKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUltcG9ydChpZCwgaW1wb3J0XywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbXBvcnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShpbXBvcnRfKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUltcG9ydChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW1wb3J0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxJbXBvcnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RJbXBvcnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnZlbnRvcnkgTW9kZWxcclxuXHRsaXN0SW52ZW50b3J5TW9kZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW52ZW50b3J5X21vZGVscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVJbnZlbnRvcnlNb2RlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJbnZlbnRvcnlNb2RlbChpbnZlbnRvcnlfbW9kZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbnZlbnRvcnlfbW9kZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbnZlbnRvcnlNb2RlbChpZCwgaW52ZW50b3J5X21vZGVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVJbnZlbnRvcnlNb2RlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxJbnZlbnRvcnlNb2RlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEludmVudG9yeU1vZGVscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtIE9wdGlvblxyXG5cdGxpc3RMaW5lSXRlbU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1fb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVMaW5lSXRlbU9wdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTGluZUl0ZW1PcHRpb24obGluZV9pdGVtX29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGluZUl0ZW1PcHRpb24oaWQsIGxpbmVfaXRlbV9vcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTGluZUl0ZW1PcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbExpbmVJdGVtT3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TGluZUl0ZW1PcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaW5lIEl0ZW1cclxuXHRsaXN0TGluZUl0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVMaW5lSXRlbShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbShsaW5lX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaW5lSXRlbShpZCwgbGluZV9pdGVtLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdExpbmVJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFya2V0XHJcblx0bGlzdE1hcmtldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU1hcmtldChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVNYXJrZXQobWFya2V0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWFya2V0cycsICdwb3N0Jykuc2V0Qm9keShtYXJrZXQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWFya2V0KGlkLCBtYXJrZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobWFya2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU1hcmtldChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RNYXJrZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNZXJjaGFudFxyXG5cdGxpc3RNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tZXJjaGFudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWVyY2hhbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVNZXJjaGFudChtZXJjaGFudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21lcmNoYW50cycsICdwb3N0Jykuc2V0Qm9keShtZXJjaGFudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNZXJjaGFudChpZCwgbWVyY2hhbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtZXJjaGFudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNZXJjaGFudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbE1lcmNoYW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWVyY2hhbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcmRlclxyXG5cdGxpc3RPcmRlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlT3JkZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVPcmRlcihvcmRlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycsICdwb3N0Jykuc2V0Qm9keShvcmRlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVPcmRlcihpZCwgb3JkZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShvcmRlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVPcmRlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0T3JkZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJjZWxcclxuXHRsaXN0UGFyY2VscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGFyY2VsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBhcmNlbChwYXJjZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXJjZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KHBhcmNlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXJjZWwoaWQsIHBhcmNlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXJjZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGFyY2VsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBhcmNlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheW1lbnQgTWV0aG9kXHJcblx0bGlzdFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheW1lbnRNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXltZW50TWV0aG9kKHBheW1lbnRfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBheW1lbnRNZXRob2QoaWQsIHBheW1lbnRfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGF5bWVudF9tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5bWVudE1ldGhvZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXltZW50TWV0aG9kcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGF5cGFsIFBheW1lbnRcclxuXHRsaXN0UGF5cGFsUGF5bWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXlwYWxfcGF5bWVudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGF5cGFsUGF5bWVudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBheXBhbFBheW1lbnQocGF5cGFsX3BheW1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXlwYWxfcGF5bWVudHMnLCAncG9zdCcpLnNldEJvZHkocGF5cGFsX3BheW1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGF5cGFsUGF5bWVudChpZCwgcGF5cGFsX3BheW1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXlwYWxQYXltZW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGF5cGFsUGF5bWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBheXBhbFBheW1lbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZSBMaXN0XHJcblx0bGlzdFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQcmljZUxpc3QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVByaWNlTGlzdChwcmljZV9saXN0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VfbGlzdHMnLCAncG9zdCcpLnNldEJvZHkocHJpY2VfbGlzdCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZUxpc3QoaWQsIHByaWNlX2xpc3QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHByaWNlX2xpc3QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUHJpY2VMaXN0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQcmljZUxpc3RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQcmljZUxpc3RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZVxyXG5cdGxpc3RQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUHJpY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmljZShwcmljZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycsICdwb3N0Jykuc2V0Qm9keShwcmljZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZShpZCwgcHJpY2UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQcmljZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwbWVudFxyXG5cdGxpc3RTaGlwbWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwbWVudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcG1lbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwbWVudChzaGlwbWVudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBtZW50cycsICdwb3N0Jykuc2V0Qm9keShzaGlwbWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwbWVudChpZCwgc2hpcG1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwbWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwbWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBtZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcG1lbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBDYXRlZ29yeVxyXG5cdGxpc3RTaGlwcGluZ0NhdGVnb3JpZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdDYXRlZ29yeShzaGlwcGluZ19jYXRlZ29yeSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdDYXRlZ29yeShpZCwgc2hpcHBpbmdfY2F0ZWdvcnksIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdDYXRlZ29yeShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ0NhdGVnb3JpZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nQ2F0ZWdvcmllcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgTWV0aG9kXHJcblx0bGlzdFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdNZXRob2Qoc2hpcHBpbmdfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfbWV0aG9kcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdNZXRob2QoaWQsIHNoaXBwaW5nX21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdNZXRob2QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ01ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIFpvbmVcclxuXHRsaXN0U2hpcHBpbmdab25lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX3pvbmVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nWm9uZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdab25lKHNoaXBwaW5nX3pvbmUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ196b25lcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ196b25lKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nWm9uZShpZCwgc2hpcHBpbmdfem9uZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfem9uZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ1pvbmUoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nWm9uZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nWm9uZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdSBPcHRpb25cclxuXHRsaXN0U2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNrdU9wdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2t1T3B0aW9uKHNrdV9vcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3Vfb3B0aW9ucycsICdwb3N0Jykuc2V0Qm9keShza3Vfb3B0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNrdU9wdGlvbihpZCwgc2t1X29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1X29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTa3VPcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNrdU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNrdU9wdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdVxyXG5cdGxpc3RTa3VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTa3UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2t1KHNrdSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdXMnLCAncG9zdCcpLnNldEJvZHkoc2t1KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNrdShpZCwgc2t1LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNrdSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTa3UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgSXRlbVxyXG5cdGxpc3RTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfaXRlbXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0l0ZW0oc3RvY2tfaXRlbSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tJdGVtKGlkLCBzdG9ja19pdGVtLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgTGV2ZWxcclxuXHRsaXN0U3RvY2tMZXZlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sZXZlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tMZXZlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrTGV2ZWwoc3RvY2tfbGV2ZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sZXZlbHMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfbGV2ZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMZXZlbChpZCwgc3RvY2tfbGV2ZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sZXZlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xldmVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tMZXZlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrTGV2ZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBMb2NhdGlvblxyXG5cdGxpc3RTdG9ja0xvY2F0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0xvY2F0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tMb2NhdGlvbihzdG9ja19sb2NhdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0xvY2F0aW9uKGlkLCBzdG9ja19sb2NhdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2xvY2F0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrTG9jYXRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0xvY2F0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tMb2NhdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFdlYmhvb2tcclxuXHRsaXN0V2ViaG9va3MoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93ZWJob29rcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVXZWJob29rKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXZWJob29rKHdlYmhvb2ssIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93ZWJob29rcycsICdwb3N0Jykuc2V0Qm9keSh3ZWJob29rKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdlYmhvb2soaWQsIHdlYmhvb2ssIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdlYmhvb2spLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlV2ViaG9vayhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsV2ViaG9va3MoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdlYmhvb2tzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBXaXJlIFRyYW5zZmVyXHJcblx0bGlzdFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVXaXJlVHJhbnNmZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVdpcmVUcmFuc2Zlcih3aXJlX3RyYW5zZmVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2lyZV90cmFuc2ZlcnMnLCAncG9zdCcpLnNldEJvZHkod2lyZV90cmFuc2Zlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXaXJlVHJhbnNmZXIoaWQsIHdpcmVfdHJhbnNmZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdpcmVfdHJhbnNmZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlV2lyZVRyYW5zZmVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxXaXJlVHJhbnNmZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RXaXJlVHJhbnNmZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxudmFyIGFwaSA9IG5ldyBDTEFwaSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuY2xhcGkgPSBhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgbG9nLm1zZygnYXBpIGNsaWVudCBpbml0aWFsaXplZCB3aXRoIGNvbmZpZzonKTtcclxuICAgIGxvZy5tc2coY2ZnKTtcclxuICAgIGFwaS5jbGllbnQgPSAgY2xpZW50Lm5ld0luc3RhbmNlKGNmZyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICBsb2cubXNnKGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGNhbGxpbmcgJHthcGlSZXF1ZXN0LnBhdGh9IC4uLmApO1xyXG5cclxuICAgIGlmIChhcGkuY2xpZW50ID09IHVuZGVmaW5lZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKHVuZGVmaW5lZCwgJ2FwaSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgYm9keSA9IGpzb25hcGkuc2VyaWFsaXplKGFwaVJlcXVlc3QuYm9keSk7XHJcbiAgICAgICAgYXBpUmVxdWVzdC5zZXRCb2R5KGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBhcGkuY2xpZW50LmNhbGwoYXBpUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oYXBpUmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UoYXBpUmVzcG9uc2UsIGFwaVJlcXVlc3QucmVzcG9uc2VfdHlwZSk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChhcGlFcnJvciA9PiB7IHJldHVybiBlcnJvcihhcGlFcnJvciwgYXBpUmVxdWVzdC5lcnJvcl90eXBlKTsgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCByZXNwb25zZV90eXBlKSB7XHJcblx0aWYgKChhcGlSZXNwb25zZSA9PSB1bmRlZmluZWQpIHx8IChyZXNwb25zZV90eXBlID09IHVuZGVmaW5lZCkpIHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRlbHNlXHJcblx0XHRzd2l0Y2ggKHJlc3BvbnNlX3R5cGUpIHtcclxuXHRcdFx0Y2FzZSAnbW9kZWwnOlxyXG5cdFx0XHRcdHJldHVybiBqc29uYXBpLmRlc2VyaWFsaXplKGFwaVJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdub3JtYWxpemVkJzpcclxuXHRcdFx0XHRyZXR1cm4ganNvbmFwaS5ub3JtYWxpemUoYXBpUmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdGNhc2UgJ2pzb25hcGknOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZS5kYXRhO1xyXG5cdFx0XHRjYXNlICdyYXcnOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBcIlVuc3VwcG9ydGVkIHJlc3BvbnNlX3R5cGU6ICdcIiArIHJlc3BvbnNlX3R5cGUgKyBcIidcIjtcclxuXHRcdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycm9yKGFwaUVycm9yLCBlcnJvcl90eXBlKSB7XHJcblx0aWYgKGVycm9yX3R5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm4gYXBpRXJyb3IucmVzcG9uc2U7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChlcnJvcl90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHRpZiAoIWFwaUVycm9yLnJlc3BvbnNlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yUmVzcG9uc2UoYXBpRXJyb3IuY29kZSwgYXBpRXJyb3IubWVzc2FnZSkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRpZiAoYXBpRXJyb3IucmVzcG9uc2UuZGF0YSAmJiBhcGlFcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvclJlc3BvbnNlKGFwaUVycm9yLnJlc3BvbnNlLnN0YXR1cykuYWRkQXBpRXJyb3JzKGFwaUVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSk7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JSZXNwb25zZShhcGlFcnJvci5yZXNwb25zZS5zdGF0dXMsIGFwaUVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQpKTtcclxuXHRcdFx0Y2FzZSAnanNvbmFwaSc6XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFwaUVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdyYXcnOlxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhcGlFcnJvci5yZXNwb25zZSk7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgXCJVbnN1cHBvcnRlZCBlcnJvcl90eXBlOiAnXCIgKyBlcnJvcl90eXBlICsgXCInXCI7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkYXRhKHJlcykge1xyXG5cdGlmIChyZXMuaXNBcGlSZXNvdXJjZSAmJiAocmVzLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpIHJldHVybiByZXM7XHJcblx0ZWxzZVxyXG5cdGlmIChyZXMuZGF0YXNldCkgcmV0dXJuIHJlcy5kYXRhc2V0LmRhdGE7XHJcblx0ZWxzZVxyXG5cdGlmIChyZXMuZGF0YSkgcmV0dXJuIChyZXMuZGF0YS5kYXRhKT8gcmVzLmRhdGEuZGF0YSA6IHJlcy5kYXRhO1xyXG5cdGVsc2UgcmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFsbChsaXN0RnVuY3Rpb24sIGZpbHRlciA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcblx0aWYgKChsaXN0RnVuY3Rpb24gPT0gdW5kZWZpbmVkKSB8fCAhbGlzdEZ1bmN0aW9uLm5hbWUuc3RhcnRzV2l0aCgnbGlzdCcpKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJVbmRlZmluZWQgJ2xpc3QnIEFQSSBmdW5jdGlvblwiKTtcclxuXHRcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSBvcHRpb25zLnJlc3BvbnNlX3R5cGUgfHwgc2RrLnJlc3BvbnNlX3R5cGU7XHJcblx0aWYgKG9wdGlvbnMucmVzcG9uc2VfdHlwZSA9PSAncmF3JykgcmV0dXJuIFByb21pc2UucmVqZWN0KCdVc2Ugb2YgcmF3IHJlc3BvbnNlX3R5cGUgbm90IGFsbG93ZWQgaW4gbGlzdC1hbGwgZnVuY3Rpb25zOiAnKTtcclxuXHRcclxuICAgIGZ1bmN0aW9uIHNldFBhZ2UoZmlsdGVyLCBzaXplID0gZmlsdGVyLnBhZ2Vfc2l6ZSB8fCAxMCwgbnVtYmVyID0gMSkge1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc1F1ZXJ5RmlsdGVyICYmIChmaWx0ZXIuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSkgZmlsdGVyLnBhZ2UobnVtYmVyLCBzaXplKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW3NpemVdJ10gPSBzaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2VbbnVtYmVyXSddID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKGZpbHRlcik7XHJcblx0XHJcblx0Ly8gU2F2ZSBvcmlnaW5hbCBvcHRpb24gYW5kIGZvcnhlIHJlc3BvbnNlX3R5cGUgdG8gJ3JhdydcclxuXHRjb25zdCByZXNwb25zZV90eXBlID0gb3B0aW9ucy5yZXNwb25zZV90eXBlO1xyXG5cdG9wdGlvbnMucmVzcG9uc2VfdHlwZSA9ICdyYXcnO1xyXG5cclxuXHQvLyBsb2cubXNnKGBhbGwoKS0tPiR7bGlzdEZ1bmN0aW9uLm5hbWV9IHBhZ2UgMWApO1xyXG5cclxuXHRsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcblxyXG5cdC8vIGZpcnN0UGFnZSBjb250YWlucyBlcnJvcnNcclxuXHRpZiAoIWZpcnN0UGFnZS5kYXRhKSByZXR1cm4gZmlyc3RQYWdlO1xyXG5cclxuICAgIGNvbnN0IG1heF9wYWdlID0gZmlyc3RQYWdlLmRhdGEubWV0YS5wYWdlX2NvdW50O1xyXG5cdGNvbnN0IHBhZ2Vfc2l6ZSA9IGZpcnN0UGFnZS5kYXRhLmRhdGEubGVuZ3RoO1xyXG5cdFxyXG5cdGxldCBwYWdlcyA9IG5ldyBBcnJheShtYXhfcGFnZSk7XHJcbiAgICBcclxuXHQvLyBTdGFuZGFyZCBsaXN0RnVuY3Rpb24gcmVzcG9uc2VcclxuXHRpZiAobWF4X3BhZ2UgPT0gMSkgcmV0dXJuIHJlc3BvbnNlKGZpcnN0UGFnZSwgcmVzcG9uc2VfdHlwZSk7XHJcblx0ZWxzZSBwYWdlc1swXSA9IGZpcnN0UGFnZTtcclxuXHRcclxuXHRcclxuXHQvLyBNdWx0aXBsZSBwYWdlc1xyXG4gICAgZm9yIChwbiA9IDE7IHBuIDwgbWF4X3BhZ2U7IHBuKyspIHtcclxuXHRcdC8vIGxvZy5tc2coYGFsbCgpLS0+JHtsaXN0RnVuY3Rpb24ubmFtZX0gcGFnZSAke3BuKzF9YCk7XHJcbiAgICAgICAgc2V0UGFnZShmaWx0ZXIsIHBhZ2Vfc2l6ZSwgcG4rMSk7XHJcbiAgICAgICAgcGFnZXNbcG5dID0gbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHQvLyBTZXQgb3JpZ2luYWwgb3B0aW9uXHJcblx0b3B0aW9ucy5yZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZTtcclxuXHJcblx0bGV0IHBhZ2VzT3V0ID0gYXdhaXQgUHJvbWlzZS5hbGwocGFnZXMpO1xyXG5cclxuXHRpZiAoIUFycmF5LmlzQXJyYXkocGFnZXNPdXQpICYmICFwYWdlc091dC5kYXRhKSByZXR1cm4gcGFnZXNPdXQ7XHJcbiAgICBlbHNlIHtcclxuXHRcdGxldCBvdXQgPSBbXTtcclxuXHRcdHBhZ2VzT3V0LmZvckVhY2gocCA9PiB7IG91dCA9IG91dC5jb25jYXQoZGF0YShwKSkgfSk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UoeyBkYXRhOiB7IGRhdGE6IG91dCB9IH0sIHJlc3BvbnNlX3R5cGUpO1xyXG5cdH1cclxuXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcblxyXG5cclxuLyoqXHJcbiAqIFRva2VuIENhY2hlIFxyXG4gKi9cclxuY29uc3QgQVVUSF9UT0tFTlMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGNhY2hlVG9rZW4oY2xpZW50X2lkLCBncmFudF90eXBlLCBzY29wZSwgdG9rZW4pIHtcclxuICAgIGlmIChzZGsuYXV0aF9jYWNoZSkgQVVUSF9UT0tFTlNbdG9rZW5JZChjbGllbnRfaWQsIGdyYW50X3R5cGUsIHNjb3BlKV0gPSB0b2tlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9rZW4oY2xpZW50X2lkLCBncmFudF90eXBlLCBzY29wZSkge1xyXG4gICAgcmV0dXJuIEFVVEhfVE9LRU5TW3Rva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlLCBzY29wZSldO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSkge1xyXG4gICAgcmV0dXJuIGNsaWVudF9pZCArICctJyArIGdyYW50X3R5cGUgKyAnLScgKyAoc2NvcGU/IHNjb3BlIDogJ3Vuc2NvcGVkJyk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY2xpZW50SWQoY2lkKSB7IHRoaXMuY2xpZW50X2lkID0gY2lkOyByZXR1cm4gdGhpczsgfVxyXG4gICAgY2xpZW50U2VjcmV0KGNzZWMpIHsgdGhpcy5jbGllbnRfc2VjcmV0ID0gY3NlYzsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGlzQXV0aENvbmZpZygpIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIENsaWVudENyZWRlbnRpYWxzIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlKSB7XHJcbiAgICAgICAgc3VwZXIoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnY2xpZW50X2NyZWRlbnRpYWxzJztcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBzZXRTY29wZShzY29wZSkgeyB0aGlzLnNjb3BlID0gc2NvcGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBtYXJrZXRTY29wZShtYXJrZXQpIHsgdGhpcy5zY29wZSA9IChtYXJrZXQgIT0gdW5kZWZpbmVkKT8gJ21hcmtldDonK21hcmtldCA6IG1hcmtldDsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb25Db2RlIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuY2xpZW50X3NlY3JldCwgY2ZnLnNjb3BlKVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNmZy5jb2RlO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gY2ZnLnJlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIHNldENvZGUoY29kZSkgeyB0aGlzLmNvZGUgPSBjb2RlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgcmVkaXJlY3RVcmkodXJpKSB7IHRoaXMucmVkaXJlY3RfdXJpID0gdXJpOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUGFzc3dvcmQgZXh0ZW5kcyBDbGllbnRDcmVkZW50aWFscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjZmcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNmZy5jbGllbnRfaWQsIGNmZy5jbGllbnRfc2VjcmV0LCBjZmcuc2NvcGUpXHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY2ZnLnVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjZmcucGFzc3dvcmQ7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSkgeyB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCkgeyB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBSZWZyZXNoVG9rZW4gZXh0ZW5kcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVmcmVzaF90b2tlbikge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3JlZnJlc2hfdG9rZW4nO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XHJcbiAgICB9XHJcbiAgICByZWZyZXNoVG9rZW4odG9rZW4pIHsgdGhpcy5yZWZyZXNoX3Rva2VuID0gdG9rZW47IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBcGlUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSAnYmVhcmVyJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm93bmVyX3R5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl9pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5leHBpcmVzX2luID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQ2xpZW50Q3JlZGVudGlhbHMsXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSxcclxuICAgIFBhc3N3b3JkLFxyXG4gICAgUmVmcmVzaFRva2VuXHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aGVudGljYXRlID0gKGF1dGgpID0+IHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5wb3N0KCcvb2F1dGgvdG9rZW4nLCB7XHJcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IGF1dGguZ3JhbnRfdHlwZSxcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBhdXRoLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgc2NvcGU6IGF1dGguc2NvcGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGF1dGguY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZTogYXV0aC5jb2RlLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IGF1dGgucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogYXV0aC51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IGF1dGgucmVmcmVzaF90b2tlblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IEFwaVRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0b2tlbi5hY2Nlc3NfdG9rZW4gPSByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4ucmVmcmVzaF90b2tlbiA9IHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4uc2NvcGUgPSByZXNwb25zZS5kYXRhLnNjb3BlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl90eXBlID0gcmVzcG9uc2UuZGF0YS5vd25lcl90eXBlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl9pZCA9IHJlc3BvbnNlLmRhdGEub3duZXJfaWQ7XHJcbiAgICAgICAgICAgIHRva2VuLmNyZWF0ZWRfYXQgPSByZXNwb25zZS5kYXRhLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgIHRva2VuLmV4cGlyZXNfaW4gPSByZXNwb25zZS5kYXRhLmV4cGlyZXNfaW47XHJcblxyXG4gICAgICAgICAgICBpZiAoc2RrLmF1dGhfY2FjaGUpXHJcbiAgICAgICAgICAgICAgICBjYWNoZVRva2VuKGF1dGguY2xpZW50X2lkLCBhdXRoLmdyYW50X3R5cGUsIGF1dGguc2NvcGUsIHRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5ld0F1dGhDb25maWcgPSAoZ3JhbnRfdHlwZSwgY29uZmlnID0ge30pID0+IHtcclxuICAgIHN3aXRjaCAoZ3JhbnRfdHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2NsaWVudF9jcmVkZW50aWFscyc6IHJldHVybiBuZXcgQ2xpZW50Q3JlZGVudGlhbHMoY29uZmlnLmNsaWVudF9pZCwgY29uZmlnLmNsaWVudF9zZWNyZXQsIGNvbmZpZy5zY29wZSk7XHJcbiAgICAgICAgY2FzZSAnYXV0aG9yaXphdGlvbl9jb2RlJzogcmV0dXJuIG5ldyBBdXRob3JpemF0aW9uQ29kZShjb25maWcpO1xyXG4gICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzogcmV0dXJuIG5ldyBQYXNzd29yZChjb25maWcpO1xyXG4gICAgICAgIGNhc2UgJ3JlZnJlc2hfdG9rZW4nOiByZXR1cm4gbmV3IFJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgYXBpID0gcmVxdWlyZSgnLi9hcGknKVxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcbmNvbnN0IGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKVxyXG5cclxuLy8gRXhwb3NlIGFsbCBhcGkgZnVuY3Rpb25zXHJcbm1vZHVsZS5leHBvcnRzID0gYXBpLmNsYXBpO1xyXG5cclxuLy8gRXhwb3NlIFNESyBjb25maWd1cmF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLnNldHRpbmdzID0gY29uZmlnLnNkaztcclxuXHJcblxyXG4vLyBTREsgaW5pdGlhbGl6YXRpb25cclxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IChjZmcpID0+IHtcclxuICAgIGlmIChjZmcgIT0gdW5kZWZpbmVkKSBjZmcuZGVmYXVsdCA9IGZhbHNlO1xyXG4gICAgYXBpLmluaXRpYWxpemUodXRpbHMubWVyZ2VNYXBzKGNvbmZpZy5jbGF5ZXIsIGNmZykpXHJcbn1cclxuXHJcblxyXG4vLyBBdXRoZW50aWNhdGlvbiB0eXBlc1xyXG5tb2R1bGUuZXhwb3J0cy5hdXRoID0ge1xyXG4gICAgQ2xpZW50Q3JlZGVudGlhbHMgOiAoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KSA9PiB7IHJldHVybiBuZXcgYXV0aC5DbGllbnRDcmVkZW50aWFscyhjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpIH0sXHJcbiAgICBQYXNzd29yZCA6IChjZmcpID0+IHsgcmV0dXJuIG5ldyBhdXRoLlBhc3N3b3JkKGNmZykgfSxcclxuICAgIEF1dGhvcml6YXRpb25Db2RlIDogKGNmZykgPT4geyByZXR1cm4gbmV3IGF1dGguQXV0aG9yaXphdGlvbkNvZGUoY2ZnKSB9LFxyXG4gICAgUmVmcmVzaFRva2VuIDogKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVmcmVzaF90b2tlbikgPT4geyByZXR1cm4gbmV3IGF1dGguUmVmcmVzaFRva2VuKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVmcmVzaF90b2tlbikgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5hdXRoLmxhc3RBY2Nlc3NUb2tlbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkuY2xhcGkuY2xpZW50LmNvbmZpZy5hY2Nlc3NfdG9rZW47XHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXHJcbmNvbnN0IGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKVxyXG5cclxuY29uc3Qgc2RrID0gY29uZmlnLnNkaztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3R5cGUgPSBzZGsucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcl90eXBlID0gc2RrLmVycm9yX3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYXRoKHBhdGgpIHsgdGhpcy5wYXRoID0gcGF0aDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRQYXJhbXMocGFyYW1zKSB7IHRoaXMucGFyYW1zID0gKHBhcmFtcyAmJiBwYXJhbXMuaXNRdWVyeUZpbHRlciAmJiAocGFyYW1zLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpPyBwYXJhbXMuYnVpbGQoKSA6IHBhcmFtczsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRNZXRob2QobWV0aG9kKSB7IHRoaXMubWV0aG9kID0gbWV0aG9kOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEJvZHkoYm9keSkgeyB0aGlzLmJvZHkgPSBib2R5OyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEhlYWRlcnMoaGVhZGVycykgeyB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICBuZXdBdHRlbXB0KCkgeyB0aGlzLmF0dGVtcHQrKzsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBPcHRpb25zXHJcbiAgICAgICAgZ2V0IHJhd19yZXNwb25zZSgpIHsgcmV0dXJuICh0aGlzLnJlc3BvbnNlVHlwZSA9PSAncmF3Jyk7IH1cclxuICAgICAgICBzZXQgcmF3X3Jlc3BvbnNlKHJhdykgeyB0aGlzLnJlc3BvbnNlX3R5cGUgPSAocmF3ICYmIChyYXcgPT09IHRydWUpKT8gJ3JhdycgOiAnbm9ybWFsaXplZCc7IH1cclxuICAgICAgICByZXNwb25zZVR5cGUodHlwZSkgeyB0aGlzLnJlc3BvbnNlX3R5cGUgPSB0eXBlPyB0eXBlIDogc2RrLnJlc3BvbnNlX3R5cGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgZXJyb3JUeXBlKHR5cGUpIHsgdGhpcy5lcnJvcl90eXBlID0gdHlwZT8gdHlwZSA6IHNkay5lcnJvcl90eXBlOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IHJlYWxseSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgYmVpbmcgc2V0dGVkXHJcbiAgICAgICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VUeXBlKG9wdGlvbnMucmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JUeXBlKG9wdGlvbnMuZXJyb3JfdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBBcGlDbGllbnQgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNmZykge1xyXG4gICAgICAgICAgICBjb25maWcuY2hlY2tBcGlDb25maWcoY2ZnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjZmc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNmZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhdXRoQ29uZmlnID0gdGhpcy5jb25maWcuYXV0aGVudGljYXRpb247XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFhdXRoQ29uZmlnIHx8ICFhdXRoQ29uZmlnLmlzQXV0aENvbmZpZyB8fCAoYXV0aENvbmZpZy5pc0F1dGhDb25maWcoKSAhPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGF1dGhDb25maWcgPSBuZXcgYXV0aC5DbGllbnRDcmVkZW50aWFscygpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWVudElkKHRoaXMuY29uZmlnLmNsaWVudF9pZClcclxuICAgICAgICAgICAgICAgICAgICAubWFya2V0U2NvcGUodGhpcy5jb25maWcubWFya2V0X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGllbnRTZWNyZXQodGhpcy5jb25maWcuY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2coJ3VzaW5nIGN1c3RvbSBhdXRoZW50aWNhdGlvbiBjb25maWc6ICcgKyBhdXRoQ29uZmlnLmdyYW50X3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdXRoQ29uZmlnLmNsaWVudF9pZCAmJiB0aGlzLmNvbmZpZy5jbGllbnRfaWQpIGF1dGhDb25maWcuY2xpZW50SWQodGhpcy5jb25maWcuY2xpZW50X2lkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF1dGguYXV0aGVudGljYXRlKGF1dGhDb25maWcpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4uYWNjZXNzX3Rva2VuOyB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYWxsKGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lc3NhZ2UobXNnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFwaVJlcXVlc3QuY29ycmVsYXRpb25faWQ/IGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGAgOiAnJykuY29uY2F0KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcGlSZXF1ZXN0Lm5ld0F0dGVtcHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VfcGF0aCA9ICgodGhpcy5jb25maWcuYmFzZV9wYXRoICE9IHVuZGVmaW5lZCk/IHRoaXMuY29uZmlnLmJhc2VfcGF0aCA6ICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgKHRvIGJlIHJlbW92ZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBiYXNlX3BhdGggKyBhcGlSZXF1ZXN0LnBhdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGFwaVJlcXVlc3QucGFyYW1zO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBhcGlSZXF1ZXN0Lm1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHF1ZXJ5U3RyaW5nXHJcbiAgICAgICAgICAgIGxldCBjYWxsVXJsID0gcGF0aDtcclxuICAgICAgICAgICAgaWYgKChwYXJhbXMgIT0gdW5kZWZpbmVkKSAmJiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW1zW2tleV1cclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgIGNhbGxVcmwgPSBjYWxsVXJsLmNvbmNhdCgnPycpLmNvbmNhdChxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgJzogJyArIGNhbGxVcmwpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBheGlvc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogY2FsbFVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogc2RrLnRpbWVvdXQucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdlIGN1c3RvbSBhbmQgZGVmYXVsdCBoZWFkZXJzXHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZE1hcChheGlvc0NvbmZpZy5oZWFkZXJzLCBhcGlSZXF1ZXN0LmhlYWRlcnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQm9keVxyXG4gICAgICAgICAgICBpZiAoYXBpUmVxdWVzdC5ib2R5ICE9IHVuZGVmaW5lZCkgYXhpb3NDb25maWcuZGF0YSA9IGFwaVJlcXVlc3QuYm9keTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heF9hdHRlbXB0cyA9IHNkay5hdXRoX2F0dGVtcHRzPyBzZGsuYXV0aF9hdHRlbXB0cyA6IDE7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQgZXhlY3V0ZSBhdXRoZW50aWNhdGlvbiB0aGVuIHJlLWV4ZWN1dGUgY2FsbFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FjY2Vzc190b2tlbiBudWxsLCBhdXRoZW50aWNhdGlvbiByZXF1aXJlZCcpKTtcclxuICAgICAgICAgICAgICAgIGlmICgrK3RoaXMuYXV0aF9hdHRlbXB0cyA+IG1heF9hdHRlbXB0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2RrLnRpbWVvdXQucmV0cnkpIHRocm93IGBSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIGF1dGhlbnRpY2F0aW9uIGF0dGVtcHRzICgke21heF9hdHRlbXB0c30pIGFuZCBubyByZXRyeSB0aW1lb3V0IGNvbmZpZ3VyZWRgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuc2xlZXAoc2RrLnRpbWVvdXQucmV0cnksIG1lc3NhZ2UoJ2Fub3RoZXIgYXV0aCByZXF1ZXN0IGlzIGluIHByb2dyZXNzJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHsgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlKCkudGhlbihhY2Nlc3NfdG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhfYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2V4ZWN1dGluZyBhcGkgY2FsbCAuLi4nKSk7XHJcbiAgICAgICAgICAgICAgICBheGlvc0NvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc0NvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhcGkgY2FsbCBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZShlcnJvcj8gZXJyb3IgOiAnZXJyb3IgZGV0ZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnRUNPTk5BQk9SVEVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoYHRpbWVvdXQgZXhjZXB0aW9uOiAke2Vycm9yLmNvbmZpZy50aW1lb3V0fW1zYCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGltZW91dCBhdXRvc2Vuc2UgaXMgZW5hYmxlZCB3YWl0ICB0aW1lIGluY3JlYXNlZCBieSAxIHNlY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNkay50aW1lb3V0LmF1dG9zZW5zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkay50aW1lb3V0LnJlcXVlc3QgKz0gMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ25ldyByZXF1ZXN0IHRpbWVvdXQ6ICcgKyBzZGsudGltZW91dC5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcGkgZXJyb25lb3VzbHkgcmV0dXJuIGNvZGUgNDAxIGluc3RlYWQgb2YgY29kZSA0MDMgZm9yIFVOQVVUSE9SSVpFRCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgJiYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLmNvZGUgPT0gJ0lOVkFMSURfVE9LRU4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2ludmFsaWQgdG9rZW4sIGFjY2VzcyBkZW5pZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgY2xheWVyOiB7XHJcblxyXG4gICAgICAgIGRlZmF1bHQgOiB0cnVlLFxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGlvbiAgOiBudWxsLFxyXG4gIFxyXG4gICAgICAgIGNsaWVudF9pZCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgbWFya2V0X2lkICAgICAgIDogbnVsbCxcclxuICAgICAgICBjbGllbnRfc2VjcmV0ICAgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfdXJsICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgYmFzZV9wYXRoICAgICAgIDogbnVsbCxcclxuICAgICAgICBjb3VudHJ5X2NvZGUgICAgOiAnVVMnLFxyXG4gICAgICAgIGxhbmd1YWdlX2NvZGUgICA6ICdlbicsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZGs6IHtcclxuXHJcbiAgICAgICAgZGVidWcgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBkZWJ1ZyBtb2RlIGFjdGl2YXRlZFxyXG4gICAgICAgIGNvbnNvbGUgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gbG9nIHRvIGNvbnNvbGUgZW5hYmxlZFxyXG4gICAgICAgIHRyYWNlICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gdHJhY2UgY2xpZW50IHJlcXVlc3QvcmVzcG9uc2UgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgYXV0aF9jYWNoZSAgICAgIDogZmFsc2UsICAgICAgICAvLyBjYWNoZSB0b2tlbnMgcmVjZWl2ZWQgZnJvbSBzZXJ2aWNlXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNwb25zZSBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICBlcnJvcl90eXBlICAgICAgOiAnbW9kZWwnLCAgICAgIC8vIEVycm9yIGZvcm1ldCwgcG9zc2libGUgdmFsdWVzIGFyZToganNvbmFwaSB8IG1vZGVsIHwgcmF3XHJcblxyXG4gICAgICAgIHRpbWVvdXQgOiB7IC8vIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAgICByZXRyeSAgICAgICA6IDI1MCwgICAgICAgICAgLy8gd2FpdCB0aW1lIGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCAgICAgOiAzMDAwLCAgICAgICAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICAgICAgYXV0b3NlbnNlICAgOiB0cnVlICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgaW5jcmVtZW50IHdhaXQgdGltZSBpZiB0aW1lb3V0IG9jY3VycyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmNoZWNrQXBpQ29uZmlnID0gKGNvbmZpZykgPT4ge1xyXG5cclxuICAgIGlmIChjb25maWcgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjb25maWcnO1xyXG4gICAgaWYgKGNvbmZpZy5iYXNlX3VybCA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGJhc2VfdXJsJztcclxuICAgIGlmICgoY29uZmlnLmNsaWVudF9pZCA9PSB1bmRlZmluZWQpICYmIChjb25maWcuYXV0aGVudGljYXRpb24gPT0gdW5kZWZpbmVkKSkgdGhyb3cgJ21pc3NpbmcgY2xpZW50X2lkJztcclxuXHJcbiAgICBpZiAoY29uZmlnLmF1dGhlbnRpY2F0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBjb25maWcuYXV0aGVudGljYXRpb247XHJcbiAgICAgICAgaWYgKGF1dGguY2xpZW50X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYXV0aGVudGljYXRpb24uY2xpZW50X2lkJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICAgIFxyXG59XHJcbiIsIlxyXG5jbGFzcyBSZXNwb25zZVR5cGUge1xyXG4gICAgc3RhdGljIGdldCBOb3JtYWxpemVkKCkgeyByZXR1cm4gJ25vcm1hbGl6ZWQnIH1cclxuICAgIHN0YXRpYyBnZXQgSlNPTkFwaSgpIHsgcmV0dXJuICdqc29uYXBpJyB9XHJcbiAgICBzdGF0aWMgZ2V0IE1vZGVsKCkgeyByZXR1cm4gJ21vZGVsJyB9XHJcbiAgICBzdGF0aWMgZ2V0IFJhdygpIHsgcmV0dXJuICdyYXcnIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEVycm9yVHlwZSB7XHJcbiAgICBzdGF0aWMgZ2V0IEpTT05BcGkoKSB7IHJldHVybiAnanNvbmFwaScgfVxyXG4gICAgc3RhdGljIGdldCBNb2RlbCgpIHsgcmV0dXJuICdtb2RlbCcgfVxyXG4gICAgc3RhdGljIGdldCBSYXcoKSB7IHJldHVybiAncmF3JyB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFJlc3BvbnNlVHlwZSxcclxuICAgIEVycm9yVHlwZVxyXG59IiwiXHJcbmNsYXNzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwaUVycm9yID0ge30pIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBhcGlFcnJvci5jb2RlO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBhcGlFcnJvci50aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbCA9IGFwaUVycm9yLmRldGFpbDtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IGFwaUVycm9yLnNvdXJjZSB8fCB7fTtcclxuICAgICAgICB0aGlzLm1ldGEgPSBhcGlFcnJvci5tZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXBpRXJyb3IoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBnZXRTb3VyY2VQb2ludGVyKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UucG9pbnRlcjsgfVxyXG4gICAgZ2V0U291cmNlSXRlbShrZXkpIHsgcmV0dXJuIHRoaXMuc291cmNlW2tleV07IH1cclxuICAgIGdldE1ldGFJdGVtKGtleSkgeyByZXR1cm4gdGhpcy5tZXRhW2tleV07IH1cclxuXHJcbiAgICB0b1N0cmluZygpIHsgcmV0dXJuIGBbJHt0aGlzLmNvZGV9LCAke3RoaXMudGl0bGV9LCAke3RoaXMuZGV0YWlsfV1gOyB9XHJcblxyXG59XHJcblxyXG5cclxuY2xhc3MgRXJyb3JSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzRXJyb3JSZXNwb25zZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIGFkZEVycm9yKGVycm9yKSB7IGlmIChlcnJvciAmJiBlcnJvci5pc0FwaUVycm9yICYmIChlcnJvci5pc0FwaUVycm9yKCkgPT09IHRydWUpKSB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFkZEFwaUVycm9yKGFwaUVycm9yKSB7IHRoaXMuYWRkRXJyb3IobmV3IEVycm9yKGFwaUVycm9yKSk7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhZGRFcnJvcnMoZXJyb3JzID0gW10pIHsgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4gdGhpcy5hZGRFcnJvcihlcnJvcikpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYWRkQXBpRXJyb3JzKGFwaUVycm9ycyA9IFtdKSB7IGFwaUVycm9ycy5mb3JFYWNoKGFwaUVycm9yID0+IHRoaXMuYWRkQXBpRXJyb3IoYXBpRXJyb3IpKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFwaUVycm9yc0NvdW50KCkgeyByZXR1cm4gKHRoaXMuZXJyb3JzID09IHVuZGVmaW5lZCk/IDAgOiB0aGlzLmVycm9ycy5sZW5ndGg7IH1cclxuICAgIGhhc0FwaUVycm9ycygpIHsgcmV0dXJuICh0aGlzLmFwaUVycm9yc0NvdW50KCkgPiAwKTsgfVxyXG4gICAgZ2V0QXBpRXJyb3IoaW5kZXgpIHsgcmV0dXJuICgoaW5kZXggPj0gMCkgJiYgKGluZGV4IDwgdGhpcy5hcGlFcnJvcnNDb3VudCgpKT8gdGhpcy5lcnJvcnNbaW5kZXhdIDogbnVsbCk7IH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgZXJyID0gJ1snICsgdGhpcy5zdGF0dXMgKyAodGhpcy5kZXNjcmlwdGlvbj8gJywgJyArIHRoaXMuZGVzY3JpcHRpb24gOiAnJykgKyAnXSc7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzICYmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICBlcnIgKz0gJyAtLT4geyc7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLmZvckVhY2goeCA9PiBlcnIgKz0geCk7XHJcbiAgICAgICAgICAgIGVyciArPSAnfSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAgZXJyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZXJyb3JSZXNwb25zZSA6IChzdGF0dXMsIGRlc2NyaXB0aW9uKSA9PiB7IHJldHVybiBuZXcgRXJyb3JSZXNwb25zZShzdGF0dXMsIGRlc2NyaXB0aW9uKTsgfVxyXG59IiwiY29uc3Qgbm9ybWFsaXplID0gcmVxdWlyZSgnanNvbi1hcGktbm9ybWFsaXplJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QgbW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJylcclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gKGJvZHkpID0+IHtcclxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkgcmV0dXJuIGJvZHk7XHJcbiAgICAvLyBObyBkYXRhID0gUGxhaW4gT2JqZWN0IG9yIEFwaSBSZXNvdXJjZVxyXG4gICAgZWxzZSByZXR1cm4gKGJvZHkuZGF0YSA9PSB1bmRlZmluZWQpPyBuZXcgSnNvbkFwaVJlc291cmNlKGJvZHkpLnNlcmlhbGl6ZSgpIDogYm9keTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIGlmIChqYXBpID09IHVuZGVmaW5lZCkgcmV0dXJuIGphcGk7XHJcbiAgICBlbHNlXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqYXBpLmRhdGEpKSB7XHJcbiAgICAgICAgbGV0IHJlc0FycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgamFwaS5kYXRhLmZvckVhY2gocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzQXJyYXkucHVzaChtb2R1bGUuZXhwb3J0cy5kZXNlcmlhbGl6ZSh7IGRhdGEgOiByZXMgfSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc0FycmF5O1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gKGphcGkuZGF0YSA9PSB1bmRlZmluZWQpPyBqYXBpIDogbmV3IEpzb25BcGlSZXNvdXJjZShqYXBpKS5kZXNlcmlhbGl6ZSgpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMubm9ybWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIHJldHVybiBqYXBpPyBub3JtYWxpemUoamFwaSkgOiBqYXBpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgSnNvbkFwaVJlc291cmNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXNvdXJjZSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2UuZGF0YSAhPSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGEuYXR0cmlidXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBwb3J0YXJlIGlkIGUgdHlwZSBpbiB0ZXN0YSBhZCBvZ25pIG9iamVjdCBbQlRGXVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmllbGQgPSB0aGlzLnJlc291cmNlW2tleV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChbJ2lkJywgJ3R5cGUnXS5pbmNsdWRlcyhrZXkpKSB0aGlzLmRhdGFba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsLmhlbHBlci5pc0FwaVJlc291cmNlKGZpZWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHNba2V5LnN0YXJ0c1dpdGgoJ19fJyk/IGtleS5zdWJzdHIoJ19fJy5sZW5ndGgpIDoga2V5XSA9IHsgZGF0YTogeyB0eXBlOiBmaWVsZC50eXBlLCBpZDogZmllbGQuaWQgfSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpICYmIGtleS5zdGFydHNXaXRoKCdfXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRhdGEuYXR0cmlidXRlc1trZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2VyaWFsaXplKCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMucmVzb3VyY2UuZGF0YSA9PSB1bmRlZmluZWQpICYmIG1vZGVsLmhlbHBlci5pc0FwaVJlc291cmNlKHRoaXMucmVzb3VyY2UpKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzb3VyY2UuZGF0YT8gdGhpcy5yZXNvdXJjZS5kYXRhIDogdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZShkYXRhLnR5cGUsIGRhdGEuaWQsIGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnJlbGF0aW9uc2hpcHMpLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVsX2RhdGEgPSBkYXRhLnJlbGF0aW9uc2hpcHNbcmVsXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAocmVsX2RhdGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWxfZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxfZGF0YS5mb3JFYWNoKHJkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbFJlcyA9IHJlbGF0ZWRSZXNvdXJjZSh0aGlzLnJlc291cmNlLCByZC50eXBlLCByZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0FycmF5LnB1c2gocmVsUmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0UmVzb3VyY2UocmVsLCByZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVsUmVzID0gcmVsYXRlZFJlc291cmNlKHRoaXMucmVzb3VyY2UsIHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0UmVzb3VyY2UocmVsLCByZWxSZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gamFwaSAgSlNPTkFwaSBkYXRhXHJcbiAqIEBwYXJhbSB7Kn0gdHlwZSAgcmVzb3VyY2UgdHlwZVxyXG4gKiBAcGFyYW0geyp9IGlkICAgIHJlc291cmNlIGlkXHJcbiAqIFxyXG4gKiBDcmVhdGUgcmVsYXRpb25zaGlwIGluIHJlc291cmNlIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gcmVsYXRlZFJlc291cmNlKGphcGksIHR5cGUsIGlkKSB7XHJcbiAgICBsZXQgcmVsUmVzID0gbW9kZWwuaGVscGVyLm5ld1Jlc291cmNlKHR5cGUsIGlkKTtcclxuICAgIGxldCBpbmMgPSBqc29uYXBpSW5jbHVkZWQoamFwaSwgdHlwZSwgaWQpO1xyXG4gICAgcmVsUmVzLnNldEZpZWxkcyhpbmMuYXR0cmlidXRlcyk7XHJcbiAgICByZXR1cm4gcmVsUmVzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IGphcGkgIEpTT05BcGkgZGF0YSBcclxuICogQHBhcmFtIHsqfSB0eXBlICByZXNvdXJjZSB0eXBlXHJcbiAqIEBwYXJhbSB7Kn0gaWQgICAgcmVzb3VyY2UgaWRcclxuICpcclxuICogU2VhcmNoIGZvciBpbmNsdWRlZCByZXNvdXJjZVxyXG4gKi9cclxuZnVuY3Rpb24ganNvbmFwaUluY2x1ZGVkKGphcGksIHR5cGUsIGlkKSB7XHJcbiAgICBpZiAoKGphcGkgPT0gdW5kZWZpbmVkKSB8fCAoamFwaS5pbmNsdWRlZCA9PSB1bmRlZmluZWQpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgbGV0IGluY1JlcyA9IHVuZGVmaW5lZDtcclxuICAgIGphcGkuaW5jbHVkZWQuc29tZShpbmMgPT4ge1xyXG4gICAgICAgIGlmICgoaW5jLnR5cGUgPT0gdHlwZSkgJiYgKGluYy5pZCA9PSBpZCkpIGluY1JlcyA9IGluYztcclxuICAgICAgICByZXR1cm4gKGluY1JlcyAhPSB1bmRlZmluZWQpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBpbmNSZXM7XHJcbn1cclxuIiwiY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG1zZyA6IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsuY29uc29sZSkgY29uc29sZS5sb2coKG1lc3NhZ2UgPT0gdW5kZWZpbmVkKT8gJycgOiBtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZXJyIDogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsuY29uc29sZSkgY29uc29sZS5lcnJvcigoZXJyb3IgPT0gdW5kZWZpbmVkKT8gJycgOiBlcnJvcik7XHJcbiAgICB9LFxyXG5cclxuICAgIGVuYWJsZSA6ICgpID0+IHtcclxuICAgICAgICBzZGsuY29uc29sZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc2FibGUgOiAoKSA9PiB7XHJcbiAgICAgICAgc2RrLmNvbnNvbGUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvYmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZyBlbmFibGVkOiAnICsgc2RrLmNvbnNvbGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZiBsb2cgaXMgZW5hYmxlZCBidXQgaXMgbm90IHZpc2libGUgbWF5YmUgeW91IGFyZSBub3QgaW4gZGVidWcgbW9kZScpXHJcbiAgICB9LFxyXG5cclxuICAgIGdldCBlbmFibGVkKCkgeyByZXR1cm4gc2RrLmNvbnNvbGUgPT09IHRydWU7IH1cclxuXHJcbn0iLCIvLyBGaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGF0IDAyLzAzLzIwMTkgMTk6Mjc6NTkgYnkgY29tbWVyY2VsYXllci1qcy1zZGstY29kZWdlblxyXG5cclxuXHJcbi8vIEJhc2ljIEFic3RyYWN0IFJlc291cmNlXHJcbmNsYXNzIFJlc291cmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0eXBlLCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlzQXBpUmVzb3VyY2UoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBzZXRSZXNvdXJjZShmaWVsZCwgcmVzKSB7IGlmICgocmVzICE9IHVuZGVmaW5lZCkgJiYgKGhlbHBlci5pc0FwaVJlc291cmNlKHJlcykgfHwgaGVscGVyLmlzQXBpUmVzb3VyY2VBcnJheShyZXMpKSkgdGhpc1snX18nLmNvbmNhdChmaWVsZCldID0gcmVzOyB9XHJcblx0Z2V0UmVzb3VyY2UoZmllbGQpIHsgcmV0dXJuIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXTsgfVxyXG5cdHNldEZpZWxkcyhmaWVsZHMgPSB7fSkgeyBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGQgPT4geyB0aGlzW2ZpZWxkXSA9IGZpZWxkc1tmaWVsZF0gfSk7IHJldHVybiB0aGlzOyB9XHJcblx0c2V0RmllbGQobmFtZSwgdmFsdWUpIHsgaWYgKG5hbWUpIHRoaXNbbmFtZV0gPSB2YWx1ZTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBZGRyZXNzIHJlc291cmNlXHJcbmNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQWRkcmVzcy5UWVBFKTtcclxuXHRcdHRoaXMuYnVzaW5lc3MgPSBmaWVsZHMuYnVzaW5lc3M7XHJcblx0XHR0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuXHRcdHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuXHRcdHRoaXMuY29tcGFueSA9IGZpZWxkcy5jb21wYW55O1xyXG5cdFx0dGhpcy5saW5lXzEgPSBmaWVsZHMubGluZV8xO1xyXG5cdFx0dGhpcy5saW5lXzIgPSBmaWVsZHMubGluZV8yO1xyXG5cdFx0dGhpcy5jaXR5ID0gZmllbGRzLmNpdHk7XHJcblx0XHR0aGlzLnppcF9jb2RlID0gZmllbGRzLnppcF9jb2RlO1xyXG5cdFx0dGhpcy5zdGF0ZV9jb2RlID0gZmllbGRzLnN0YXRlX2NvZGU7XHJcblx0XHR0aGlzLmNvdW50cnlfY29kZSA9IGZpZWxkcy5jb3VudHJ5X2NvZGU7XHJcblx0XHR0aGlzLnBob25lID0gZmllbGRzLnBob25lO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuXHRcdHRoaXMubm90ZXMgPSBmaWVsZHMubm90ZXM7XHJcblx0XHR0aGlzLmxhdCA9IGZpZWxkcy5sYXQ7XHJcblx0XHR0aGlzLmxuZyA9IGZpZWxkcy5sbmc7XHJcblx0XHR0aGlzLmJpbGxpbmdfaW5mbyA9IGZpZWxkcy5iaWxsaW5nX2luZm87XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBnZW9jb2Rlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnZ2VvY29kZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBnZW9jb2RlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdnZW9jb2RlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVkaXQgQ2FyZCByZXNvdXJjZVxyXG5jbGFzcyBDcmVkaXRDYXJkIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2NyZWRpdF9jYXJkcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIENyZWRpdENhcmQuVFlQRSk7XHJcblx0XHR0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuXHRcdHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuXHRcdHRoaXMubnVtYmVyID0gZmllbGRzLm51bWJlcjtcclxuXHRcdHRoaXMubW9udGggPSBmaWVsZHMubW9udGg7XHJcblx0XHR0aGlzLnllYXIgPSBmaWVsZHMueWVhcjtcclxuXHRcdHRoaXMudmVyaWZpY2F0aW9uX3ZhbHVlID0gZmllbGRzLnZlcmlmaWNhdGlvbl92YWx1ZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJBZGRyZXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX2FkZHJlc3NlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyQWRkcmVzcy5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIEdyb3VwIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyR3JvdXAgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfZ3JvdXBzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJHcm91cC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBQYXNzd29yZCBSZXNldCByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBhc3N3b3JkUmVzZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXNzd29yZFJlc2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcblx0XHR0aGlzLl9yZXNldF9wYXNzd29yZF90b2tlbiA9IGZpZWxkcy5fcmVzZXRfcGFzc3dvcmRfdG9rZW47XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFBheW1lbnQgU291cmNlIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGF5bWVudFNvdXJjZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXltZW50X3NvdXJjZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBheW1lbnRTb3VyY2UuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgU3Vic2NyaXB0aW9uIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyU3Vic2NyaXB0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclN1YnNjcmlwdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyLlRZUEUpO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuXHRcdHRoaXMucGFzc3dvcmQgPSBmaWVsZHMucGFzc3dvcmQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcl9ncm91cCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXJfZ3JvdXAnLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcl9ncm91cCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcl9ncm91cCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZWxpdmVyeSBMZWFkIFRpbWUgcmVzb3VyY2VcclxuY2xhc3MgRGVsaXZlcnlMZWFkVGltZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdkZWxpdmVyeV9sZWFkX3RpbWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgRGVsaXZlcnlMZWFkVGltZS5UWVBFKTtcclxuXHRcdHRoaXMubWluX2hvdXJzID0gZmllbGRzLm1pbl9ob3VycztcclxuXHRcdHRoaXMubWF4X2hvdXJzID0gZmllbGRzLm1heF9ob3VycztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW1wb3J0IHJlc291cmNlXHJcbmNsYXNzIEltcG9ydCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdpbXBvcnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgSW1wb3J0LlRZUEUpO1xyXG5cdFx0dGhpcy5yZXNvdXJjZV90eXBlID0gZmllbGRzLnJlc291cmNlX3R5cGU7XHJcblx0XHR0aGlzLnBhcmVudF9yZXNvdXJjZV9pZCA9IGZpZWxkcy5wYXJlbnRfcmVzb3VyY2VfaWQ7XHJcblx0XHR0aGlzLmlucHV0cyA9IGZpZWxkcy5pbnB1dHM7XHJcblx0XHR0aGlzLmNsZWFudXBfcmVjb3JkcyA9IGZpZWxkcy5jbGVhbnVwX3JlY29yZHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEludmVudG9yeSBNb2RlbCByZXNvdXJjZVxyXG5jbGFzcyBJbnZlbnRvcnlNb2RlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdpbnZlbnRvcnlfbW9kZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgSW52ZW50b3J5TW9kZWwuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gTGluZSBJdGVtIE9wdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBMaW5lSXRlbU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdsaW5lX2l0ZW1fb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtT3B0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG5cdFx0dGhpcy5vcHRpb25zID0gZmllbGRzLm9wdGlvbnM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBsaW5lX2l0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScsIHZhbHVlKSB9XHJcblx0Z2V0IGxpbmVfaXRlbSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdsaW5lX2l0ZW0nKSB9XHJcblx0c2V0IHNrdV9vcHRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBza3Vfb3B0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTGluZSBJdGVtIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG5cdFx0dGhpcy5fdXBkYXRlX3F1YW50aXR5ID0gZmllbGRzLl91cGRhdGVfcXVhbnRpdHk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG5cdHNldCBpdGVtKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgaXRlbSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpdGVtJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hcmtldCByZXNvdXJjZVxyXG5jbGFzcyBNYXJrZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWFya2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1hcmtldC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5mYWNlYm9va19waXhlbF9pZCA9IGZpZWxkcy5mYWNlYm9va19waXhlbF9pZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1lcmNoYW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtZXJjaGFudCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1lcmNoYW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21lcmNoYW50JykgfVxyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG5cdHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcblx0Z2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVyY2hhbnQgcmVzb3VyY2VcclxuY2xhc3MgTWVyY2hhbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWVyY2hhbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWVyY2hhbnQuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gT3JkZXIgcmVzb3VyY2VcclxuY2xhc3MgT3JkZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnb3JkZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgT3JkZXIuVFlQRSk7XHJcblx0XHR0aGlzLmd1ZXN0ID0gZmllbGRzLmd1ZXN0O1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcblx0XHR0aGlzLmxhbmd1YWdlX2NvZGUgPSBmaWVsZHMubGFuZ3VhZ2VfY29kZTtcclxuXHRcdHRoaXMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2sgPSBmaWVsZHMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2s7XHJcblx0XHR0aGlzLmNvdXBvbl9jb2RlID0gZmllbGRzLmNvdXBvbl9jb2RlO1xyXG5cdFx0dGhpcy5jYXJ0X3VybCA9IGZpZWxkcy5jYXJ0X3VybDtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy50ZXJtc191cmwgPSBmaWVsZHMudGVybXNfdXJsO1xyXG5cdFx0dGhpcy5wcml2YWN5X3VybCA9IGZpZWxkcy5wcml2YWN5X3VybDtcclxuXHRcdHRoaXMuX3BsYWNlID0gZmllbGRzLl9wbGFjZTtcclxuXHRcdHRoaXMuX2NhbmNlbCA9IGZpZWxkcy5fY2FuY2VsO1xyXG5cdFx0dGhpcy5fYXBwcm92ZSA9IGZpZWxkcy5fYXBwcm92ZTtcclxuXHRcdHRoaXMuX2NhcHR1cmUgPSBmaWVsZHMuX2NhcHR1cmU7XHJcblx0XHR0aGlzLl91cGRhdGVfdGF4ZXMgPSBmaWVsZHMuX3VwZGF0ZV90YXhlcztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZDtcclxuXHRcdHRoaXMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkID0gZmllbGRzLl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZDtcclxuXHRcdHRoaXMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZztcclxuXHRcdHRoaXMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0ID0gZmllbGRzLl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldDtcclxuXHRcdHRoaXMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2s7XHJcblx0XHR0aGlzLl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3JlZnJlc2ggPSBmaWVsZHMuX3JlZnJlc2g7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBzaGlwcGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJykgfVxyXG5cdHNldCBiaWxsaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGJpbGxpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IHBheW1lbnRfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJjZWwgcmVzb3VyY2VcclxuY2xhc3MgUGFyY2VsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BhcmNlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXJjZWwuVFlQRSk7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG5cdFx0dGhpcy5lZWxfcGZjID0gZmllbGRzLmVlbF9wZmM7XHJcblx0XHR0aGlzLmNvbnRlbnRzX3R5cGUgPSBmaWVsZHMuY29udGVudHNfdHlwZTtcclxuXHRcdHRoaXMuY29udGVudHNfZXhwbGFuYXRpb24gPSBmaWVsZHMuY29udGVudHNfZXhwbGFuYXRpb247XHJcblx0XHR0aGlzLmN1c3RvbXNfY2VydGlmeSA9IGZpZWxkcy5jdXN0b21zX2NlcnRpZnk7XHJcblx0XHR0aGlzLmN1c3RvbXNfc2lnbmVyID0gZmllbGRzLmN1c3RvbXNfc2lnbmVyO1xyXG5cdFx0dGhpcy5ub25fZGVsaXZlcnlfb3B0aW9uID0gZmllbGRzLm5vbl9kZWxpdmVyeV9vcHRpb247XHJcblx0XHR0aGlzLnJlc3RyaWN0aW9uX3R5cGUgPSBmaWVsZHMucmVzdHJpY3Rpb25fdHlwZTtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fY29tbWVudHMgPSBmaWVsZHMucmVzdHJpY3Rpb25fY29tbWVudHM7XHJcblx0XHR0aGlzLmN1c3RvbXNfaW5mb19yZXF1aXJlZCA9IGZpZWxkcy5jdXN0b21zX2luZm9fcmVxdWlyZWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwbWVudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcG1lbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwbWVudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwbWVudCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXltZW50IE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBQYXltZW50TWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BheW1lbnRfbWV0aG9kcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBheW1lbnRNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLnBheW1lbnRfc291cmNlX3R5cGUgPSBmaWVsZHMucGF5bWVudF9zb3VyY2VfdHlwZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgcGF5bWVudF9nYXRld2F5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X2dhdGV3YXkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheXBhbCBQYXltZW50IHJlc291cmNlXHJcbmNsYXNzIFBheXBhbFBheW1lbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5cGFsX3BheW1lbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5cGFsUGF5bWVudC5UWVBFKTtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy5jYW5jZWxfdXJsID0gZmllbGRzLmNhbmNlbF91cmw7XHJcblx0XHR0aGlzLm5vdGVfdG9fcGF5ZXIgPSBmaWVsZHMubm90ZV90b19wYXllcjtcclxuXHRcdHRoaXMucGF5cGFsX3BheWVyX2lkID0gZmllbGRzLnBheXBhbF9wYXllcl9pZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFByaWNlIExpc3QgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2VMaXN0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3ByaWNlX2xpc3RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2VMaXN0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmN1cnJlbmN5X2NvZGUgPSBmaWVsZHMuY3VycmVuY3lfY29kZTtcclxuXHRcdHRoaXMudGF4X2luY2x1ZGVkID0gZmllbGRzLnRheF9pbmNsdWRlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2UuVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5hbW91bnRfY2VudHMgPSBmaWVsZHMuYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cyA9IGZpZWxkcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwbWVudCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwbWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwbWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwbWVudC5UWVBFKTtcclxuXHRcdHRoaXMuX29uX2hvbGQgPSBmaWVsZHMuX29uX2hvbGQ7XHJcblx0XHR0aGlzLl9waWNraW5nID0gZmllbGRzLl9waWNraW5nO1xyXG5cdFx0dGhpcy5fcGFja2luZyA9IGZpZWxkcy5fcGFja2luZztcclxuXHRcdHRoaXMuX3JlYWR5X3RvX3NoaXAgPSBmaWVsZHMuX3JlYWR5X3RvX3NoaXA7XHJcblx0XHR0aGlzLl9zaGlwID0gZmllbGRzLl9zaGlwO1xyXG5cdFx0dGhpcy5fZ2V0X3JhdGVzID0gZmllbGRzLl9nZXRfcmF0ZXM7XHJcblx0XHR0aGlzLnNlbGVjdGVkX3JhdGVfaWQgPSBmaWVsZHMuc2VsZWN0ZWRfcmF0ZV9pZDtcclxuXHRcdHRoaXMuX3B1cmNoYXNlID0gZmllbGRzLl9wdXJjaGFzZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBDYXRlZ29yeSByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ0NhdGVnb3J5IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX2NhdGVnb3JpZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ0NhdGVnb3J5LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ01ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuXHRcdHRoaXMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBzaGlwcGluZ196b25lKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ196b25lJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfem9uZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ196b25lJykgfVxyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBab25lIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nWm9uZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ196b25lcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nWm9uZS5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMuY291bnRyeV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMuc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X3N0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3N0YXRlX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLnppcF9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfemlwX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3ppcF9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIFNrdU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3Vfb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNrdU9wdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5kZWxheV9ob3VycyA9IGZpZWxkcy5kZWxheV9ob3VycztcclxuXHRcdHRoaXMuc2t1X2NvZGVfcmVnZXggPSBmaWVsZHMuc2t1X2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2t1IHJlc291cmNlXHJcbmNsYXNzIFNrdSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1LlRZUEUpO1xyXG5cdFx0dGhpcy5jb2RlID0gZmllbGRzLmNvZGU7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBmaWVsZHMuZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcblx0XHR0aGlzLnRhZ19uYW1lcyA9IGZpZWxkcy50YWdfbmFtZXM7XHJcblx0XHR0aGlzLnBpZWNlc19wZXJfcGFjayA9IGZpZWxkcy5waWVjZXNfcGVyX3BhY2s7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0l0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0l0ZW0uVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgTGV2ZWwgcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tMZXZlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19sZXZlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0xldmVsLlRZUEUpO1xyXG5cdFx0dGhpcy5wcmlvcml0eSA9IGZpZWxkcy5wcmlvcml0eTtcclxuXHRcdHRoaXMub25faG9sZCA9IGZpZWxkcy5vbl9ob2xkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMb2NhdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xvY2F0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xvY2F0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTG9jYXRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMubGFiZWxfZm9ybWF0ID0gZmllbGRzLmxhYmVsX2Zvcm1hdDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gV2ViaG9vayByZXNvdXJjZVxyXG5jbGFzcyBXZWJob29rIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dlYmhvb2tzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2ViaG9vay5UWVBFKTtcclxuXHRcdHRoaXMudG9waWMgPSBmaWVsZHMudG9waWM7XHJcblx0XHR0aGlzLmNhbGxiYWNrX3VybCA9IGZpZWxkcy5jYWxsYmFja191cmw7XHJcblx0XHR0aGlzLmluY2x1ZGVfcmVzb3VyY2VzID0gZmllbGRzLmluY2x1ZGVfcmVzb3VyY2VzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBXaXJlIFRyYW5zZmVyIHJlc291cmNlXHJcbmNsYXNzIFdpcmVUcmFuc2ZlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3aXJlX3RyYW5zZmVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdpcmVUcmFuc2Zlci5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEFkZHJlc3MsXHJcblx0Q3JlZGl0Q2FyZCxcclxuXHRDdXN0b21lckFkZHJlc3MsXHJcblx0Q3VzdG9tZXJHcm91cCxcclxuXHRDdXN0b21lclBhc3N3b3JkUmVzZXQsXHJcblx0Q3VzdG9tZXJQYXltZW50U291cmNlLFxyXG5cdEN1c3RvbWVyU3Vic2NyaXB0aW9uLFxyXG5cdEN1c3RvbWVyLFxyXG5cdERlbGl2ZXJ5TGVhZFRpbWUsXHJcblx0SW1wb3J0LFxyXG5cdEludmVudG9yeU1vZGVsLFxyXG5cdExpbmVJdGVtT3B0aW9uLFxyXG5cdExpbmVJdGVtLFxyXG5cdE1hcmtldCxcclxuXHRNZXJjaGFudCxcclxuXHRPcmRlcixcclxuXHRQYXJjZWwsXHJcblx0UGF5bWVudE1ldGhvZCxcclxuXHRQYXlwYWxQYXltZW50LFxyXG5cdFByaWNlTGlzdCxcclxuXHRQcmljZSxcclxuXHRTaGlwbWVudCxcclxuXHRTaGlwcGluZ0NhdGVnb3J5LFxyXG5cdFNoaXBwaW5nTWV0aG9kLFxyXG5cdFNoaXBwaW5nWm9uZSxcclxuXHRTa3VPcHRpb24sXHJcblx0U2t1LFxyXG5cdFN0b2NrSXRlbSxcclxuXHRTdG9ja0xldmVsLFxyXG5cdFN0b2NrTG9jYXRpb24sXHJcblx0V2ViaG9vayxcclxuXHRXaXJlVHJhbnNmZXIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gKioqKioqKioqKiBIZWxwZXIgKioqKioqKioqKiAvL1xyXG5cclxubGV0IGhlbHBlciA9IHt9XHJcbm1vZHVsZS5leHBvcnRzLmhlbHBlciA9IGhlbHBlcjtcclxuXHJcbmhlbHBlci5hbGxFbGVtZW50cyA9ICgpID0+IHtcclxuXHRsZXQgZWxlbWVudHMgPSBbXTtcclxuXHRjb25zdCBtb2RlbCA9IG1vZHVsZS5leHBvcnRzO1xyXG5cdE9iamVjdC5rZXlzKG1vZGVsKS5zb21lKChjbCkgPT4ge1xyXG5cdFx0aWYgKCFjbC5zdGFydHNXaXRoKCdoZWxwZXInKSkgZWxlbWVudHMucHVzaChjbClcclxuXHR9KTtcclxuXHRyZXR1cm4gZWxlbWVudHM7XHJcbn1cclxuXHJcbmhlbHBlci5uZXdSZXNvdXJjZSA9ICh0eXBlLCBpZCwgZmllbGRzKSA9PiB7XHJcblx0bGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG5cdGNvbnN0IG1vZGVsID0gbW9kdWxlLmV4cG9ydHM7XHJcblx0Ly8gT2JqZWN0LmtleXMobW9kZWwpLnNvbWUoKGNsKSA9PiB7XHJcblx0Ly8gXHRpZiAoIWNsLnN0YXJ0c1dpdGgoJ2hlbHBlcicpKSB7XHJcblx0Ly8gXHRcdGxldCBjbF90eXBlID0gbW9kZWxbY2xdLlRZUEU7XHJcblx0Ly8gXHRcdGlmIChjbF90eXBlICYmIChjbF90eXBlID09IHR5cGUpKSB7XHJcblx0Ly8gXHRcdFx0aW5zdGFuY2UgPSBuZXcgbW9kZWxbY2xdKGlkIHx8IGZpZWxkcy5pZCwgZmllbGRzKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fVxyXG5cdC8vIFx0cmV0dXJuIChpbnN0YW5jZSAhPSB1bmRlZmluZWQpO1xyXG5cdC8vIH0pO1xyXG5cdGhlbHBlci5hbGxFbGVtZW50cygpLnNvbWUoY2wgPT4ge1xyXG5cdFx0bGV0IGNsX3R5cGUgPSBtb2RlbFtjbF0uVFlQRTtcclxuXHRcdGlmIChjbF90eXBlICYmIChjbF90eXBlID09IHR5cGUpKSB7XHJcblx0XHRcdGluc3RhbmNlID0gbmV3IG1vZGVsW2NsXShpZCB8fCBmaWVsZHMuaWQsIGZpZWxkcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKGluc3RhbmNlICE9IHVuZGVmaW5lZCk7XHJcblx0fSlcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmhlbHBlci5pc0FwaVJlc291cmNlID0gKHJlcykgPT4ge1xyXG5cdHJldHVybiAocmVzICYmIHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSk7XHJcbn1cclxuXHJcbmhlbHBlci5pc0FwaVJlc291cmNlQXJyYXkgPSAocmVzQXJyYXkpID0+IHtcclxuXHRyZXR1cm4gKHJlc0FycmF5ICYmIEFycmF5LmlzQXJyYXkocmVzQXJyYXkpICYmICgocmVzQXJyYXkubGVuZ3RoID09IDApIHx8IChoZWxwZXIuaXNBcGlSZXNvdXJjZShyZXNBcnJheVswXSkpKSk7XHJcbn1cclxuIiwiXHJcbmNsYXNzIFF1ZXJ5RmlsdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3BhcnNlX2ZpZWxkc2V0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmllbGRzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXN0b21fcGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1F1ZXJ5RmlsdGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHNvcnQoZmllbGQsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzLnB1c2goKGRlc2NlbmRpbmc/ICctJyA6ICcnKS5jb25jYXQoZmllbGQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHMocmVzb3VyY2UsIC4uLmZpZWxkcykge1xyXG4gICAgICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkKSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzb3VyY2VdID0gZmllbGRzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluY2x1ZGUoLi4ucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHJlc291cmNlcy5mb3JFYWNoKHJlcyA9PiB7IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzKSB9KVxyXG4gICAgICAgIC8vIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlc291cmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGZpbHRlciAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcnMoZmlsdGVycykge1xyXG4gICAgICAgIGlmIChmaWx0ZXJzICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaChmaWx0ZXIgPT4geyB0aGlzLmZpbHRlcihmaWx0ZXIsIGZpbHRlcnNbZmlsdGVyXSkgfSlcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKChrZXkgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkgdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4geyB0aGlzLnBhcmFtKGtleSwgcGFyYW1zW2tleV0pIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSAodGhpcy5wYWdlX251bWJlciAmJiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMucGFnZU51bWJlcikpPyBwYWdlX251bWJlcisrIDogMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZChqb2luKSB7XHJcblxyXG4gICAgICAgIGxldCBxc01hcCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5mb3JFYWNoKGZpbHRlciA9PiB7IHFzTWFwW2BmaWx0ZXJbJHtmaWx0ZXJ9XWBdID0gdGhpcy5maWx0ZXJfZmllbGRzW2ZpbHRlcl0gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5jbHVkZWQgUmVzb3VyY2VzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5pbmNsdWRlID0gdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBTcGFyc2UgRmllbGRzZXRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5mb3JFYWNoKHJlcyA9PiB7IHFzTWFwW2BmaWVsZHNbJHtyZXN9XWBdID0gdGhpcy5zcGFyc2VfZmllbGRzZXRzW3Jlc10uam9pbignLCcpIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNvcnRfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5zb3J0ID0gdGhpcy5zb3J0X2ZpZWxkcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBQYXJhbXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmZvckVhY2goa2V5ID0+IHsgcXNNYXBba2V5XSA9IHRoaXMuY3VzdG9tX3BhcmFtc1trZXldIH0pXHJcblxyXG4gICAgICAgIC8vIFBhZ2luYXRpb25cclxuICAgICAgICBpZiAodGhpcy5wYWdlX251bWJlciAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW251bWJlcl0nXSA9IHRoaXMucGFnZV9udW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9zaXplICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2Vbc2l6ZV0nXSA9IHRoaXMucGFnZV9zaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gIWpvaW4/IHFzTWFwIDogT2JqZWN0LmtleXMocXNNYXApLm1hcChrZXkgPT4geyByZXR1cm4gYCR7a2V5fT0ke3FzTWFwW2tleV19YCB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IHF1ZXJ5ID0gcmVxdWlyZSgnLi9xdWVyeScpXHJcblxyXG5cclxuY2xhc3MgUXVlcnlFeHByZXNzaW9uIGV4dGVuZHMgcXVlcnkuUXVlcnlGaWx0ZXIge1xyXG5cclxuICAgIHN0YXRpYyBleHBsYWluKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBwID0gUXVlcnlFeHByZXNzaW9uLlBSRURJQ0FURVNbdHlwZV07XHJcbiAgICAgICAgcmV0dXJuIChwICE9IHVuZGVmaW5lZCk/IHAgOiAoJ1Vua25vd24gcHJlZGljYXRlICcgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hY3RpdmVyZWNvcmQtaGFja2VyeS9yYW5zYWNrI3NlYXJjaC1tYXRjaGVyc1xyXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FjdGl2ZXJlY29yZC1oYWNrZXJ5L3JhbnNhY2svYmxvYi9tYXN0ZXIvbGliL3JhbnNhY2svbG9jYWxlL2VuLnltbCNMMTZcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBQUkVESUNBVEVTKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdlcSc6IFwiZXF1YWxzXCIsXHJcbiAgICAgICAgICAgICdlcV9hbnknOiBcImVxdWFscyBhbnlcIixcclxuICAgICAgICAgICAgJ2VxX2FsbCc6IFwiZXF1YWxzIGFsbFwiLFxyXG4gICAgICAgICAgICAnbm90X2VxJzogXCJub3QgZXF1YWwgdG9cIixcclxuICAgICAgICAgICAgJ25vdF9lcV9hbnknOiBcIm5vdCBlcXVhbCB0byBhbnlcIixcclxuICAgICAgICAgICAgJ25vdF9lcV9hbGwnOiBcIm5vdCBlcXVhbCB0byBhbGxcIixcclxuICAgICAgICAgICAgJ21hdGNoZXMnOiBcIm1hdGNoZXNcIixcclxuICAgICAgICAgICAgJ21hdGNoZXNfYW55JzogXCJtYXRjaGVzIGFueVwiLFxyXG4gICAgICAgICAgICAnbWF0Y2hlc19hbGwnOiBcIm1hdGNoZXMgYWxsXCIsXHJcbiAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaCc6IFwiZG9lc24ndCBtYXRjaFwiLFxyXG4gICAgICAgICAgICAnZG9lc19ub3RfbWF0Y2hfYW55JzogXCJkb2Vzbid0IG1hdGNoIGFueVwiLFxyXG4gICAgICAgICAgICAnZG9lc19ub3RfbWF0Y2hfYWxsJzogXCJkb2Vzbid0IG1hdGNoIGFsbFwiLFxyXG4gICAgICAgICAgICAnbHQnOiBcImxlc3MgdGhhblwiLFxyXG4gICAgICAgICAgICAnbHRfYW55JzogXCJsZXNzIHRoYW4gYW55XCIsXHJcbiAgICAgICAgICAgICdsdF9hbGwnOiBcImxlc3MgdGhhbiBhbGxcIixcclxuICAgICAgICAgICAgJ2x0ZXEnOiBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiLFxyXG4gICAgICAgICAgICAnbHRlcV9hbnknOiBcImxlc3MgdGhhbiBvciBlcXVhbCB0byBhbnlcIixcclxuICAgICAgICAgICAgJ2x0ZXFfYWxsJzogXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYWxsXCIsXHJcbiAgICAgICAgICAgICdndCc6IFwiZ3JlYXRlciB0aGFuXCIsXHJcbiAgICAgICAgICAgICdndF9hbnknOiBcImdyZWF0ZXIgdGhhbiBhbnlcIixcclxuICAgICAgICAgICAgJ2d0X2FsbCc6IFwiZ3JlYXRlciB0aGFuIGFsbFwiLFxyXG4gICAgICAgICAgICAnZ3RlcSc6IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIsXHJcbiAgICAgICAgICAgICdndGVxX2FueSc6IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGFueVwiLFxyXG4gICAgICAgICAgICAnZ3RlcV9hbGwnOiBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBhbGxcIixcclxuICAgICAgICAgICAgJ2luJzogXCJpblwiLFxyXG4gICAgICAgICAgICAnaW5fYW55JzogXCJpbiBhbnlcIixcclxuICAgICAgICAgICAgJ2luX2FsbCc6IFwiaW4gYWxsXCIsXHJcbiAgICAgICAgICAgICdub3RfaW4nOiBcIm5vdCBpblwiLFxyXG4gICAgICAgICAgICAnbm90X2luX2FueSc6IFwibm90IGluIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X2luX2FsbCc6IFwibm90IGluIGFsbFwiLFxyXG4gICAgICAgICAgICAnY29udCc6IFwiY29udGFpbnNcIixcclxuICAgICAgICAgICAgJ2NvbnRfYW55JzogXCJjb250YWlucyBhbnlcIixcclxuICAgICAgICAgICAgJ2NvbnRfYWxsJzogXCJjb250YWlucyBhbGxcIixcclxuICAgICAgICAgICAgJ25vdF9jb250JzogXCJkb2Vzbid0IGNvbnRhaW5cIixcclxuICAgICAgICAgICAgJ25vdF9jb250X2FueSc6IFwiZG9lc24ndCBjb250YWluIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X2NvbnRfYWxsJzogXCJkb2Vzbid0IGNvbnRhaW4gYWxsXCIsXHJcbiAgICAgICAgICAgICdzdGFydCc6IFwic3RhcnRzIHdpdGhcIixcclxuICAgICAgICAgICAgJ3N0YXJ0X2FueSc6IFwic3RhcnRzIHdpdGggYW55XCIsXHJcbiAgICAgICAgICAgICdzdGFydF9hbGwnOiBcInN0YXJ0cyB3aXRoIGFsbFwiLFxyXG4gICAgICAgICAgICAnbm90X3N0YXJ0JzogXCJkb2Vzbid0IHN0YXJ0IHdpdGhcIixcclxuICAgICAgICAgICAgJ25vdF9zdGFydF9hbnknOiBcImRvZXNuJ3Qgc3RhcnQgd2l0aCBhbnlcIixcclxuICAgICAgICAgICAgJ25vdF9zdGFydF9hbGwnOiBcImRvZXNuJ3Qgc3RhcnQgd2l0aCBhbGxcIixcclxuICAgICAgICAgICAgJ2VuZCc6IFwiZW5kcyB3aXRoXCIsXHJcbiAgICAgICAgICAgICdlbmRfYW55JzogXCJlbmRzIHdpdGggYW55XCIsXHJcbiAgICAgICAgICAgICdlbmRfYWxsJzogXCJlbmRzIHdpdGggYWxsXCIsXHJcbiAgICAgICAgICAgICdub3RfZW5kJzogXCJkb2Vzbid0IGVuZCB3aXRoXCIsXHJcbiAgICAgICAgICAgICdub3RfZW5kX2FueSc6IFwiZG9lc24ndCBlbmQgd2l0aCBhbnlcIixcclxuICAgICAgICAgICAgJ25vdF9lbmRfYWxsJzogXCJkb2Vzbid0IGVuZCB3aXRoIGFsbFwiLFxyXG4gICAgICAgICAgICAndHJ1ZSc6IFwiaXMgdHJ1ZVwiLFxyXG4gICAgICAgICAgICAnZmFsc2UnOiBcImlzIGZhbHNlXCIsXHJcbiAgICAgICAgICAgICdwcmVzZW50JzogXCJpcyBwcmVzZW50XCIsXHJcbiAgICAgICAgICAgICdibGFuayc6IFwiaXMgYmxhbmtcIixcclxuICAgICAgICAgICAgJ251bGwnOiBcImlzIG51bGxcIixcclxuICAgICAgICAgICAgJ25vdF9udWxsJzogXCJpcyBub3QgbnVsbFwiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBzdXBlci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucHJlZGljYXRlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUXVlcnlFeHByZXNzaW9uKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHByZWRpY2F0ZSh0eXBlLCB2YWx1ZSwgLi4uZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKChmaWVsZHMgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuX19kaXNhYmxlX3ByZWRpY2F0ZV9jaGVjayA9PSB1bmRlZmluZWQpIHx8ICh0aGlzLl9fZGlzYWJsZV9wcmVkaWNhdGVfY2hlY2sgIT09IHRydWUpKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhRdWVyeUV4cHJlc3Npb24uUFJFRElDQVRFUykuaW5jbHVkZXModHlwZSkpIHRocm93ICdVbmRlZmluZWQgcHJlZGljYXRlICcgKyB0eXBlXHJcbiAgICAgICAgICAgIGxldCBmaWVsZHNfID0gQXJyYXkuaXNBcnJheShmaWVsZHNbMF0pPyBmaWVsZHNbMF0gOiBmaWVsZHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGZpZWxkc18uam9pbignX29yXycpICsgJ18nICsgdHlwZTtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk/IHZhbHVlLmpvaW4oJywnKSA6IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZXNba2V5XSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUodHlwZSkgeyByZXR1cm4gUXVlcnlFeHByZXNzaW9uLmV4cGxhaW4odHlwZSkgfVxyXG5cclxuICAgIGJ1aWxkKGpvaW4pIHtcclxuICAgICAgICBsZXQgcXNNYXAgPSBzdXBlci5idWlsZChqb2luKTtcclxuICAgICAgICBpZiAoIWpvaW4pIE9iamVjdC5rZXlzKHRoaXMucHJlZGljYXRlcykuZm9yRWFjaChwID0+IHsgcXNNYXBbYGZpbHRlcltxXVske3B9XWBdID0gdGhpcy5wcmVkaWNhdGVzW3BdOyB9KVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocXNNYXAubGVuZ3RoID4gMCkgcXNNYXAgKz0gJyYnO1xyXG4gICAgICAgICAgICBxc01hcCArPSBPYmplY3Qua2V5cyh0aGlzLnByZWRpY2F0ZXMpLm1hcChwID0+IHsgcmV0dXJuIGBmaWx0ZXJbcV1bJHtwfV09JHt0aGlzLnByZWRpY2F0ZXNbcF19YCB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxc01hcDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUHJlZGljYXRlIHNob3J0Y3V0c1xyXG4gICAgX2VxKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdlcScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9lcV9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2VxX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9lcV9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2VxX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfZXEodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9lcScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfZXFfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfZXFfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9lcV9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9lcV9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbWF0Y2hlcyh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbWF0Y2hlcycsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9tYXRjaGVzX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbWF0Y2hlc19hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbWF0Y2hlc19hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ21hdGNoZXNfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2RvZXNfbm90X21hdGNoKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdkb2VzX25vdF9tYXRjaCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9kb2VzX25vdF9tYXRjaF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2RvZXNfbm90X21hdGNoX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9kb2VzX25vdF9tYXRjaF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2RvZXNfbm90X21hdGNoX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9sdCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbHQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbHRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdsdF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbHRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdsdF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbHRlcSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbHRlcScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9sdGVxX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbHRlcV9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbHRlcV9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2x0ZXFfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2d0KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdndCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ndF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2d0X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ndF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2d0X2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ndGVxKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdndGVxJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2d0ZXFfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdndGVxX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ndGVxX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZ3RlcV9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfaW4odmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2luJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2luX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnaW5fYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2luX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnaW5fYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9pbih2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2luJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9pbl9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9pbl9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2luX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2luX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9jb250KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdjb250JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2NvbnRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdjb250X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9jb250X2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnY29udF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2NvbnQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9jb250JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9jb250X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2NvbnRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9jb250KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfY29udCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfY29udF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9jb250X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfY29udF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9jb250X2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9zdGFydCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnc3RhcnQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfc3RhcnRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdzdGFydF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfc3RhcnRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdzdGFydF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X3N0YXJ0KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3Rfc3RhcnQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X3N0YXJ0X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X3N0YXJ0X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3Rfc3RhcnRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3Rfc3RhcnRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2VuZCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZW5kJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2VuZF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2VuZF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZW5kX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZW5kX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfZW5kKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfZW5kJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9lbmRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfZW5kX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfZW5kX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2VuZF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfdHJ1ZSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgndHJ1ZScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9mYWxzZSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZmFsc2UnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfcHJlc2VudCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgncHJlc2VudCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ibGFuayh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnYmxhbmsnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbnVsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbnVsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfbnVsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X251bGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBRdWVyeUV4cHJlc3Npb25cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RXhwcmVzc2lvbigpO1xyXG59XHJcbiIsIlxyXG5jb25zdCBsb2cgPSByZXF1aXJlKCcuL2xvZycpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBsb2cgOiAobWVzc2FnZSkgPT4geyAgICAvLyBCV0NcclxuICAgICAgICBsb2cubXNnKG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBleHRlbmRNYXAgOiAobWFwLCBleHQpID0+IHtcclxuICAgICAgICBpZiAobWFwID09IHVuZGVmaW5lZCkgbWFwID0ge307XHJcbiAgICAgICAgaWYgKGV4dCAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKGV4dCkuZm9yRWFjaChrZXkgPT4geyBtYXBba2V5XSA9IGV4dFtrZXldOyB9KTtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfSxcclxuXHJcbiAgICBtZXJnZU1hcHMgOiAobWFwMSwgbWFwMikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLm1hcDEsIC4uLm1hcDIgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbG9uZU1hcCA6IChtYXApID0+IHtcclxuICAgICAgICByZXR1cm4gKG1hcCA9PSB1bmRlZmluZWQpPyBtYXAgOiB7IC4uLm1hcCB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBzbGVlcCA6IChtcywgbXNnKSA9PiB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMubG9nKChtc2c/IGAke21zZ30gLSBgIDogJycpLmNvbmNhdChgd2FpdGluZyAke21zfSBtc2VjcyAuLi5gKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBndWlkIDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyAnLicgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKS5zdWJzdHIoMCwgNikpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhcGl0YWxpemUgOiAoc3RyKSA9PiB7XHJcbiAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKT8gJycgOiAgc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuanNvbkFwaU5vcm1hbGl6ZSA9IGZhY3RvcnkoKTtcbiAgICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBOb3JtYWxpemVyKGRhdGFzZXQsIHByb3BlcnR5KSB7XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vcm1hbGl6ZXIpKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplckluc3RhbmNlID0gbmV3IE5vcm1hbGl6ZXIoZGF0YXNldCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHkgPyBub3JtYWxpemVySW5zdGFuY2UuZ2V0KHByb3BlcnR5KSA6IG5vcm1hbGl6ZXJJbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YXNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGFzZXQgPSBKU09OLnBhcnNlKGRhdGFzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhc2V0IHx8ICFkYXRhc2V0LmRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBqc29uIGFwaSBub3JtYWxpemVyIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmlzQ29sbGVjdGlvbiA9IGlzQXJyYXkoZGF0YXNldC5kYXRhKTtcblxuICAgICAgICB0aGlzLmhheXN0YWNrID0gYnVpbGRIYXlzdGFjayhkYXRhc2V0LmluY2x1ZGVkLCB0aGlzLmlzQ29sbGVjdGlvbiA/IGRhdGFzZXQuZGF0YSA6IFtkYXRhc2V0LmRhdGFdKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkSGF5c3RhY2soaW5jbHVkZWQsIGFkZGl0aW9uYWxJdGVtcykge1xuXG4gICAgICAgIHZhciBzaWduYXR1cmVzID0gW107XG4gICAgICAgIHZhciBoYXlzdGFjayA9IGluY2x1ZGVkIHx8IFtdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgc2lnbmF0dXJlcy5wdXNoKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWFjaChhZGRpdGlvbmFsSXRlbXMsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZXMuaW5kZXhPZihlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaGF5c3RhY2sucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGtleSkgJiYgY2FsbGJhY2suY2FsbChjb250ZXh0LCBrZXksIGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGl0ZW0sIGtleSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0LCBvYmopIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvdXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgKG91dFtrZXldID0ge30pO1xuICAgICAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciBkYXRhID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eVRyZWUsIGZ1bmN0aW9uKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICBpZiAoIXJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHJlbGF0ZWRFbnRpdHkgPyBuZXcgTm9ybWFsaXplcih7ZGF0YTogcmVsYXRlZEVudGl0eSwgaW5jbHVkZWQ6IGhheXN0YWNrfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRSZWxhdGlvbkRhdGEocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KSB7XG5cbiAgICAgICAgcmV0dXJuIFsnaWQnLCAndHlwZSddLmluZGV4T2YocHJvcGVydHkpID49IDAgPyBlbnRpdHlbcHJvcGVydHldIDogZW50aXR5LmF0dHJpYnV0ZXNbcHJvcGVydHldO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRpb25EYXRhKHJlbGF0aW9uTmFtZSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdLmRhdGE7XG4gICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gcmVsYXRpb25EYXRhICYmIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkocmVsYXRlZEVudGl0eSkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcChyZWxhdGVkRW50aXR5LCBmdW5jdGlvbihzaW5nbGVSZWxhdGVkRW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCBzaW5nbGVSZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFyZWxhdGVkRW50aXR5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUmVsYXRpb24ocHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHJldHVybiBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbChuZXcgTm9ybWFsaXplcih7XG4gICAgICAgICAgICBkYXRhOiByZWxhdGVkRW50aXR5LFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGhheXN0YWNrXG4gICAgICAgIH0pLCBwcm9wZXJ0eVRyZWUpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICB2YXIgc2VhcmNoID0gaXNBcnJheShyZWxhdGlvbkRhdGEpID8gbWFwKHJlbGF0aW9uRGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQ7XG4gICAgICAgIH0pIDogW3JlbGF0aW9uRGF0YS50eXBlICsgJ0AnICsgcmVsYXRpb25EYXRhLmlkXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBzZWFyY2guaW5kZXhPZihpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkKSA+PSAwICYmIHRlbXAucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXAubGVuZ3RoID09PSAxICYmICFpc0FycmF5KHJlbGF0aW9uRGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9OZXN0ZWRPYmplY3QoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIHRlbXAgPSBvYmo7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2NvbGxlY3Rpb25baV1dID0gdGVtcFtjb2xsZWN0aW9uW2ldXSB8fCAoaSsxID09PSBjb2xsZWN0aW9uTGVuZ3RoID8gdW5kZWZpbmVkIDoge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUHJvcGVydHlUcmVlKHByb3BlcnR5TGlzdCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eUxpc3QsIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVBhcnRzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQodGVtcCwgYXJyYXlUb05lc3RlZE9iamVjdChwcm9wZXJ0eVBhcnRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbcHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlhUHJvcGVydHlUcmVlKHByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHRoaXMuZGF0YXNldC5kYXRhLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgdGhpcy5oYXlzdGFjayk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIHRoaXMuZGF0YXNldC5kYXRhLCB0aGlzLmhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBOb3JtYWxpemVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbCh0aGlzLCBidWlsZFByb3BlcnR5VHJlZShpc0FycmF5KHByb3BlcnR5KSA/IHByb3BlcnR5IDogW3Byb3BlcnR5XSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogbWFwKHJlc3VsdCwgZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbVtwcm9wZXJ0eV07IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogcmVzdWx0W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHJldHVybiBOb3JtYWxpemVyO1xuXG59KSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==