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
    console.log(resArray);
    return resArray;
  } else return japi.data == undefined ? japi : new JsonApiResource(japi).deserialize();
};

module.exports.normalize = function (japi) {
  return normalize(japi);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25zdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2Vycm9yLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvanNvbmFwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2xvZy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL21vZGVsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2pzb24tYXBpLW5vcm1hbGl6ZS9zcmMvanNvbkFwaU5vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIm1vZGVsIiwicXVlcnkiLCJxdWVyeXgiLCJjb25zdCIsImNsaWVudCIsImxvZyIsImpzb25hcGkiLCJlcnJvclJlc3BvbnNlIiwic2RrIiwiQ0xBcGkiLCJmaWx0ZXIiLCJvcHRpb25zIiwicmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJzZXRQYXJhbXMiLCJzZXRPcHRpb25zIiwiaWQiLCJhZGRyZXNzIiwic2V0Qm9keSIsImFsbCIsImxpc3RBZGRyZXNzZXMiLCJjcmVkaXRfY2FyZCIsImxpc3RDcmVkaXRDYXJkcyIsImN1c3RvbWVyX2FkZHJlc3MiLCJsaXN0Q3VzdG9tZXJBZGRyZXNzZXMiLCJjdXN0b21lcl9ncm91cCIsImxpc3RDdXN0b21lckdyb3VwcyIsImN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0IiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXltZW50X3NvdXJjZSIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucyIsImN1c3RvbWVyIiwibGlzdEN1c3RvbWVycyIsImRlbGl2ZXJ5X2xlYWRfdGltZSIsImxpc3REZWxpdmVyeUxlYWRUaW1lcyIsImltcG9ydF8iLCJsaXN0SW1wb3J0cyIsImludmVudG9yeV9tb2RlbCIsImxpc3RJbnZlbnRvcnlNb2RlbHMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtT3B0aW9ucyIsImxpbmVfaXRlbSIsImxpc3RMaW5lSXRlbXMiLCJtYXJrZXQiLCJsaXN0TWFya2V0cyIsIm1lcmNoYW50IiwibGlzdE1lcmNoYW50cyIsIm9yZGVyIiwibGlzdE9yZGVycyIsInBhcmNlbCIsImxpc3RQYXJjZWxzIiwicGF5bWVudF9tZXRob2QiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXlwYWxfcGF5bWVudCIsImxpc3RQYXlwYWxQYXltZW50cyIsInByaWNlX2xpc3QiLCJsaXN0UHJpY2VMaXN0cyIsInByaWNlIiwibGlzdFByaWNlcyIsInNoaXBtZW50IiwibGlzdFNoaXBtZW50cyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ01ldGhvZHMiLCJzaGlwcGluZ196b25lIiwibGlzdFNoaXBwaW5nWm9uZXMiLCJza3Vfb3B0aW9uIiwibGlzdFNrdU9wdGlvbnMiLCJza3UiLCJsaXN0U2t1cyIsInN0b2NrX2l0ZW0iLCJsaXN0U3RvY2tJdGVtcyIsInN0b2NrX2xldmVsIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbG9jYXRpb24iLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJ3ZWJob29rIiwibGlzdFdlYmhvb2tzIiwid2lyZV90cmFuc2ZlciIsImxpc3RXaXJlVHJhbnNmZXJzIiwiYXBpIiwiY2xhcGkiLCJpbml0aWFsaXplIiwiY2ZnIiwibXNnIiwibmV3SW5zdGFuY2UiLCJhcGlSZXF1ZXN0IiwiY29ycmVsYXRpb25faWQiLCJhdHRlbXB0IiwicGF0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZWplY3QiLCJuZXdFcnJvciIsImJvZHkiLCJzZXJpYWxpemUiLCJjYWxsIiwidGhlbiIsImFwaVJlc3BvbnNlIiwicmVzcG9uc2UiLCJyZXNwb25zZV90eXBlIiwiY2F0Y2giLCJhcGlFcnJvciIsImVycm9yIiwiZXJyb3JfdHlwZSIsImRlc2VyaWFsaXplIiwiZGF0YSIsIm5vcm1hbGl6ZSIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JzIiwic3RhdHVzIiwiYWRkQXBpRXJyb3JzIiwic3RhdHVzVGV4dCIsInJlcyIsImlzQXBpUmVzb3VyY2UiLCJkYXRhc2V0IiwibGlzdEZ1bmN0aW9uIiwic2V0UGFnZSIsInNpemUiLCJwYWdlX3NpemUiLCJudW1iZXIiLCJpc1F1ZXJ5RmlsdGVyIiwicGFnZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiZmlyc3RQYWdlIiwibWF4X3BhZ2UiLCJtZXRhIiwicGFnZV9jb3VudCIsImxlbmd0aCIsInBhZ2VzIiwiQXJyYXkiLCJwbiIsInBhZ2VzT3V0IiwiaXNBcnJheSIsIm91dCIsImZvckVhY2giLCJwIiwiY29uY2F0IiwiYXhpb3MiLCJBVVRIX1RPS0VOUyIsImNhY2hlVG9rZW4iLCJjbGllbnRfaWQiLCJncmFudF90eXBlIiwic2NvcGUiLCJ0b2tlbiIsImF1dGhfY2FjaGUiLCJ0b2tlbklkIiwiZ2V0VG9rZW4iLCJBdXRoIiwiY2xpZW50X3NlY3JldCIsImNpZCIsImNzZWMiLCJDbGllbnRDcmVkZW50aWFscyIsIkF1dGhvcml6YXRpb25Db2RlIiwicmVkaXJlY3RfdXJpIiwidXJpIiwiUGFzc3dvcmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiUmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsIkFwaVRva2VuIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIm93bmVyX3R5cGUiLCJvd25lcl9pZCIsImNyZWF0ZWRfYXQiLCJleHBpcmVzX2luIiwiYXV0aGVudGljYXRlIiwiYXV0aCIsInBvc3QiLCJuZXdBdXRoQ29uZmlnIiwiY29uZmlnIiwidXRpbHMiLCJzZXR0aW5ncyIsImRlZmF1bHQiLCJtZXJnZU1hcHMiLCJjbGF5ZXIiLCJsYXN0QWNjZXNzVG9rZW4iLCJzZXRBeGlvc0NvbmZpZyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImJhc2VfdXJsIiwiaGVhZGVycyIsImNvbW1vbiIsImRlYnVnIiwidHJhY2UiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJBcGlDbGllbnQiLCJtZXRob2QiLCJBcGlSZXF1ZXN0IiwicGFyYW1zIiwiZ3VpZCIsImJ1aWxkIiwidHlwZSIsInJlc3BvbnNlVHlwZSIsImVycm9yVHlwZSIsInJhdyIsImNoZWNrQXBpQ29uZmlnIiwiYXV0aF9hdHRlbXB0cyIsImF1dGhDb25maWciLCJhdXRoZW50aWNhdGlvbiIsImlzQXV0aENvbmZpZyIsImNsaWVudElkIiwibWFya2V0U2NvcGUiLCJtYXJrZXRfaWQiLCJjbGllbnRTZWNyZXQiLCJuZXdBdHRlbXB0IiwiYmFzZV9wYXRoIiwiY2FsbFVybCIsIk9iamVjdCIsImtleXMiLCJxdWVyeVN0cmluZyIsIm1hcCIsImtleSIsImpvaW4iLCJheGlvc0NvbmZpZyIsInVybCIsInRpbWVvdXQiLCJleHRlbmRNYXAiLCJtYXhfYXR0ZW1wdHMiLCJyZXRyeSIsInNsZWVwIiwiQXV0aG9yaXphdGlvbiIsImF1dG9zZW5zZSIsImNvdW50cnlfY29kZSIsImxhbmd1YWdlX2NvZGUiLCJjb25zb2xlIiwiUmVzcG9uc2VUeXBlIiwiRXJyb3JUeXBlIiwiRXJyb3IiLCJ0aXRsZSIsImRldGFpbCIsInNvdXJjZSIsInBvaW50ZXIiLCJFcnJvclJlc3BvbnNlIiwiZGVzY3JpcHRpb24iLCJpc0FwaUVycm9yIiwicHVzaCIsImFkZEVycm9yIiwiYXBpRXJyb3JzIiwiYWRkQXBpRXJyb3IiLCJhcGlFcnJvcnNDb3VudCIsImluZGV4IiwiZXJyIiwieCIsIkpzb25BcGlSZXNvdXJjZSIsImphcGkiLCJyZXNBcnJheSIsInJlc291cmNlIiwiYXR0cmlidXRlcyIsImZpZWxkIiwiaW5jbHVkZXMiLCJoZWxwZXIiLCJyZWxhdGlvbnNoaXBzIiwic3Vic3RyIiwicmVsIiwibmV3UmVzb3VyY2UiLCJyZWxfZGF0YSIsInJkIiwicmVsUmVzIiwicmVsYXRlZFJlc291cmNlIiwic2V0UmVzb3VyY2UiLCJpbmMiLCJqc29uYXBpSW5jbHVkZWQiLCJzZXRGaWVsZHMiLCJpbmNsdWRlZCIsImluY1JlcyIsInNvbWUiLCJlbmFibGUiLCJkaXNhYmxlIiwicHJvYmUiLCJlbmFibGVkIiwiUmVzb3VyY2UiLCJyZWZlcmVuY2UiLCJtZXRhZGF0YSIsInVwZGF0ZWRfYXQiLCJpc0FwaVJlc291cmNlQXJyYXkiLCJmaWVsZHMiLCJ2YWx1ZSIsIkFkZHJlc3MiLCJUWVBFIiwiYnVzaW5lc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiY29tcGFueSIsImxpbmVfMSIsImxpbmVfMiIsImNpdHkiLCJ6aXBfY29kZSIsInN0YXRlX2NvZGUiLCJwaG9uZSIsImVtYWlsIiwibm90ZXMiLCJsYXQiLCJsbmciLCJiaWxsaW5nX2luZm8iLCJDcmVkaXRDYXJkIiwibW9udGgiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiQ3VzdG9tZXJBZGRyZXNzIiwiQ3VzdG9tZXJHcm91cCIsIkN1c3RvbWVyUGFzc3dvcmRSZXNldCIsImN1c3RvbWVyX2VtYWlsIiwiY3VzdG9tZXJfcGFzc3dvcmQiLCJfcmVzZXRfcGFzc3dvcmRfdG9rZW4iLCJDdXN0b21lclBheW1lbnRTb3VyY2UiLCJDdXN0b21lclN1YnNjcmlwdGlvbiIsIkN1c3RvbWVyIiwiRGVsaXZlcnlMZWFkVGltZSIsIm1pbl9ob3VycyIsIm1heF9ob3VycyIsIkltcG9ydCIsInJlc291cmNlX3R5cGUiLCJwYXJlbnRfcmVzb3VyY2VfaWQiLCJpbnB1dHMiLCJjbGVhbnVwX3JlY29yZHMiLCJJbnZlbnRvcnlNb2RlbCIsIkxpbmVJdGVtT3B0aW9uIiwicXVhbnRpdHkiLCJMaW5lSXRlbSIsInNrdV9jb2RlIiwiX3VwZGF0ZV9xdWFudGl0eSIsImltYWdlX3VybCIsIk1hcmtldCIsImZhY2Vib29rX3BpeGVsX2lkIiwiTWVyY2hhbnQiLCJPcmRlciIsImd1ZXN0Iiwic2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2siLCJjb3Vwb25fY29kZSIsImNhcnRfdXJsIiwicmV0dXJuX3VybCIsInRlcm1zX3VybCIsInByaXZhY3lfdXJsIiwiX3BsYWNlIiwiX2NhbmNlbCIsIl9hcHByb3ZlIiwiX2NhcHR1cmUiLCJfdXBkYXRlX3RheGVzIiwiX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZCIsIl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nIiwiX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nIiwiX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0IiwiX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rIiwiX3JlZnJlc2giLCJQYXJjZWwiLCJ3ZWlnaHQiLCJ1bml0X29mX3dlaWdodCIsImVlbF9wZmMiLCJjb250ZW50c190eXBlIiwiY29udGVudHNfZXhwbGFuYXRpb24iLCJjdXN0b21zX2NlcnRpZnkiLCJjdXN0b21zX3NpZ25lciIsIm5vbl9kZWxpdmVyeV9vcHRpb24iLCJyZXN0cmljdGlvbl90eXBlIiwicmVzdHJpY3Rpb25fY29tbWVudHMiLCJjdXN0b21zX2luZm9fcmVxdWlyZWQiLCJQYXltZW50TWV0aG9kIiwicGF5bWVudF9zb3VyY2VfdHlwZSIsInByaWNlX2Ftb3VudF9jZW50cyIsIlBheXBhbFBheW1lbnQiLCJjYW5jZWxfdXJsIiwibm90ZV90b19wYXllciIsInBheXBhbF9wYXllcl9pZCIsIlByaWNlTGlzdCIsImN1cnJlbmN5X2NvZGUiLCJ0YXhfaW5jbHVkZWQiLCJQcmljZSIsImFtb3VudF9jZW50cyIsImNvbXBhcmVfYXRfYW1vdW50X2NlbnRzIiwiU2hpcG1lbnQiLCJfb25faG9sZCIsIl9waWNraW5nIiwiX3BhY2tpbmciLCJfcmVhZHlfdG9fc2hpcCIsIl9zaGlwIiwiX2dldF9yYXRlcyIsInNlbGVjdGVkX3JhdGVfaWQiLCJfcHVyY2hhc2UiLCJTaGlwcGluZ0NhdGVnb3J5IiwiU2hpcHBpbmdNZXRob2QiLCJmcmVlX292ZXJfYW1vdW50X2NlbnRzIiwiU2hpcHBpbmdab25lIiwiY291bnRyeV9jb2RlX3JlZ2V4Iiwibm90X2NvdW50cnlfY29kZV9yZWdleCIsInN0YXRlX2NvZGVfcmVnZXgiLCJub3Rfc3RhdGVfY29kZV9yZWdleCIsInppcF9jb2RlX3JlZ2V4Iiwibm90X3ppcF9jb2RlX3JlZ2V4IiwiU2t1T3B0aW9uIiwiZGVsYXlfaG91cnMiLCJza3VfY29kZV9yZWdleCIsIlNrdSIsInRhZ19uYW1lcyIsInBpZWNlc19wZXJfcGFjayIsIlN0b2NrSXRlbSIsIlN0b2NrTGV2ZWwiLCJwcmlvcml0eSIsIm9uX2hvbGQiLCJTdG9ja0xvY2F0aW9uIiwibGFiZWxfZm9ybWF0IiwiV2ViaG9vayIsInRvcGljIiwiY2FsbGJhY2tfdXJsIiwiaW5jbHVkZV9yZXNvdXJjZXMiLCJXaXJlVHJhbnNmZXIiLCJhbGxFbGVtZW50cyIsImVsZW1lbnRzIiwiY2wiLCJpbnN0YW5jZSIsImNsX3R5cGUiLCJRdWVyeUZpbHRlciIsImNsZWFyIiwic29ydF9maWVsZHMiLCJzcGFyc2VfZmllbGRzZXRzIiwiaW5jbHVkZWRfcmVzb3VyY2VzIiwiZmlsdGVyX2ZpZWxkcyIsImN1c3RvbV9wYXJhbXMiLCJwYWdlX251bWJlciIsImRlc2NlbmRpbmciLCJyZXNvdXJjZXMiLCJmaWx0ZXJzIiwicGFyYW0iLCJwYWdlTnVtYmVyIiwicGFnZVNpemUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJxc01hcCIsImluY2x1ZGUiLCJzb3J0IiwiUXVlcnlFeHByZXNzaW9uIiwiUFJFRElDQVRFUyIsInByZWRpY2F0ZXMiLCJfX2Rpc2FibGVfcHJlZGljYXRlX2NoZWNrIiwiZmllbGRzXyIsInZhbCIsImV4cGxhaW4iLCJwcmVkaWNhdGUiLCJleHQiLCJtYXAxIiwibWFwMiIsImNsb25lTWFwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsInN0ciIsImNoYXJBdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImNvbW1lcmNlbGF5ZXItc2RrLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGF5ZXInKVxyXG5cclxuLy8gTW9kZWwgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxuLy8gUXVlcnlGaWx0ZXIgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKVxyXG4vLyBRdWVyeUV4cHJlc3Npb24gRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5eCA9IHJlcXVpcmUoJy4vbGliL3F1ZXJ5eCcpXHJcblxyXG4vLyBDb21tZXJjZUxheWVyIGNvbnN0YW50c1xyXG5tb2R1bGUuZXhwb3J0cy5jb25zdCA9IHJlcXVpcmUoJy4vbGliL2NvbnN0JylcclxuIiwiLy8gRmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhdCAwMi8wMy8yMDE5IDE5OjI3OjU4IGJ5IGNvbW1lcmNlbGF5ZXItanMtc2RrLWNvZGVnZW5cclxuXHJcblxyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpXHJcbmNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcclxuY29uc3QganNvbmFwaSA9IHJlcXVpcmUoJy4vanNvbmFwaScpXHJcbmNvbnN0IGVycm9yUmVzcG9uc2UgPSByZXF1aXJlKCcuL2Vycm9yJykuZXJyb3JSZXNwb25zZVxyXG5jb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxuXHJcbmNsYXNzIENMQXBpIHtcclxuXHJcblx0Ly8gQWRkcmVzc1xyXG5cdGxpc3RBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQWRkcmVzcyhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUFkZHJlc3MoYWRkcmVzcywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2FkZHJlc3NlcycsICdwb3N0Jykuc2V0Qm9keShhZGRyZXNzKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUFkZHJlc3MoaWQsIGFkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShhZGRyZXNzKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUFkZHJlc3MoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlZGl0IENhcmRcclxuXHRsaXN0Q3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3JlZGl0Q2FyZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNyZWRpdENhcmQoY3JlZGl0X2NhcmQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnLCAncG9zdCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3JlZGl0Q2FyZChpZCwgY3JlZGl0X2NhcmQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjcmVkaXRfY2FyZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDcmVkaXRDYXJkKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdENyZWRpdENhcmRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBBZGRyZXNzXHJcblx0bGlzdEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyQWRkcmVzcyhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyQWRkcmVzcyhjdXN0b21lcl9hZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX2FkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJBZGRyZXNzKGlkLCBjdXN0b21lcl9hZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lckFkZHJlc3MoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lckFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJBZGRyZXNzZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIEdyb3VwXHJcblx0bGlzdEN1c3RvbWVyR3JvdXBzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfZ3JvdXBzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyR3JvdXAoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfZ3JvdXBzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lckdyb3VwKGN1c3RvbWVyX2dyb3VwLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfZ3JvdXBzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX2dyb3VwKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyR3JvdXAoaWQsIGN1c3RvbWVyX2dyb3VwLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2dyb3Vwcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfZ3JvdXApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJHcm91cChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfZ3JvdXBzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyR3JvdXBzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lckdyb3VwcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgUGFzc3dvcmQgUmVzZXRcclxuXHRsaXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBhc3N3b3JkUmVzZXQoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkLCBjdXN0b21lcl9wYXNzd29yZF9yZXNldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyUGFzc3dvcmRSZXNldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFBheW1lbnQgU291cmNlXHJcblx0bGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGN1c3RvbWVyX3BheW1lbnRfc291cmNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3BheW1lbnRfc291cmNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBheW1lbnRTb3VyY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBTdWJzY3JpcHRpb25cclxuXHRsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclN1YnNjcmlwdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclN1YnNjcmlwdGlvbihjdXN0b21lcl9zdWJzY3JpcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3N1YnNjcmlwdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclN1YnNjcmlwdGlvbihpZCwgY3VzdG9tZXJfc3Vic2NyaXB0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3N1YnNjcmlwdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclN1YnNjcmlwdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclN1YnNjcmlwdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXJcclxuXHRsaXN0Q3VzdG9tZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXIoY3VzdG9tZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXIoaWQsIGN1c3RvbWVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVsaXZlcnkgTGVhZCBUaW1lXHJcblx0bGlzdERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVEZWxpdmVyeUxlYWRUaW1lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZURlbGl2ZXJ5TGVhZFRpbWUoZGVsaXZlcnlfbGVhZF90aW1lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcycsICdwb3N0Jykuc2V0Qm9keShkZWxpdmVyeV9sZWFkX3RpbWUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRGVsaXZlcnlMZWFkVGltZShpZCwgZGVsaXZlcnlfbGVhZF90aW1lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGRlbGl2ZXJ5X2xlYWRfdGltZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVEZWxpdmVyeUxlYWRUaW1lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3REZWxpdmVyeUxlYWRUaW1lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW1wb3J0XHJcblx0bGlzdEltcG9ydHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbXBvcnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUltcG9ydChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbXBvcnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJbXBvcnQoaW1wb3J0XywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ltcG9ydHMnLCAncG9zdCcpLnNldEJvZHkoaW1wb3J0Xykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbXBvcnQoaWQsIGltcG9ydF8sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW1wb3J0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoaW1wb3J0Xykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVJbXBvcnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ltcG9ydHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsSW1wb3J0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0SW1wb3J0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW52ZW50b3J5IE1vZGVsXHJcblx0bGlzdEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlSW52ZW50b3J5TW9kZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW52ZW50b3J5TW9kZWwoaW52ZW50b3J5X21vZGVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW52ZW50b3J5X21vZGVscycsICdwb3N0Jykuc2V0Qm9keShpbnZlbnRvcnlfbW9kZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW52ZW50b3J5TW9kZWwoaWQsIGludmVudG9yeV9tb2RlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShpbnZlbnRvcnlfbW9kZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlSW52ZW50b3J5TW9kZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsSW52ZW50b3J5TW9kZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RJbnZlbnRvcnlNb2RlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpbmUgSXRlbSBPcHRpb25cclxuXHRsaXN0TGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTGluZUl0ZW1PcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxpbmVJdGVtT3B0aW9uKGxpbmVfaXRlbV9vcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1fb3B0aW9ucycsICdwb3N0Jykuc2V0Qm9keShsaW5lX2l0ZW1fb3B0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpbmVJdGVtT3B0aW9uKGlkLCBsaW5lX2l0ZW1fb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShsaW5lX2l0ZW1fb3B0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUxpbmVJdGVtT3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxMaW5lSXRlbU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdExpbmVJdGVtT3B0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtXHJcblx0bGlzdExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTGluZUl0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTGluZUl0ZW0obGluZV9pdGVtLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycsICdwb3N0Jykuc2V0Qm9keShsaW5lX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGluZUl0ZW0oaWQsIGxpbmVfaXRlbSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShsaW5lX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTGluZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcmtldFxyXG5cdGxpc3RNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWFya2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNYXJrZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTWFya2V0KG1hcmtldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21hcmtldHMnLCAncG9zdCcpLnNldEJvZHkobWFya2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1hcmtldChpZCwgbWFya2V0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG1hcmtldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNYXJrZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsTWFya2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWFya2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWVyY2hhbnRcclxuXHRsaXN0TWVyY2hhbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU1lcmNoYW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTWVyY2hhbnQobWVyY2hhbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tZXJjaGFudHMnLCAncG9zdCcpLnNldEJvZHkobWVyY2hhbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWVyY2hhbnQoaWQsIG1lcmNoYW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobWVyY2hhbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTWVyY2hhbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE1lcmNoYW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3JkZXJcclxuXHRsaXN0T3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU9yZGVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlT3JkZXIob3JkZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnLCAncG9zdCcpLnNldEJvZHkob3JkZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlT3JkZXIoaWQsIG9yZGVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkob3JkZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlT3JkZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxPcmRlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE9yZGVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyY2VsXHJcblx0bGlzdFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXJjZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBhcmNlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXJjZWwocGFyY2VsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGFyY2VscycsICdwb3N0Jykuc2V0Qm9keShwYXJjZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGFyY2VsKGlkLCBwYXJjZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGFyY2VsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBhcmNlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXJjZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXJjZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXltZW50IE1ldGhvZFxyXG5cdGxpc3RQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXltZW50TWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGF5bWVudE1ldGhvZChwYXltZW50X21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycsICdwb3N0Jykuc2V0Qm9keShwYXltZW50X21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXltZW50TWV0aG9kKGlkLCBwYXltZW50X21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBheW1lbnRNZXRob2QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5bWVudE1ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheXBhbCBQYXltZW50XHJcblx0bGlzdFBheXBhbFBheW1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5cGFsX3BheW1lbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheXBhbFBheW1lbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXlwYWxQYXltZW50KHBheXBhbF9wYXltZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5cGFsX3BheW1lbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheXBhbF9wYXltZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBheXBhbFBheW1lbnQoaWQsIHBheXBhbF9wYXltZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGF5cGFsX3BheW1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5cGFsUGF5bWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBheXBhbFBheW1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXlwYWxQYXltZW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2UgTGlzdFxyXG5cdGxpc3RQcmljZUxpc3RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VfbGlzdHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUHJpY2VMaXN0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmljZUxpc3QocHJpY2VfbGlzdCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlX2xpc3RzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlX2xpc3QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUHJpY2VMaXN0KGlkLCBwcmljZV9saXN0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZV9saXN0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlTGlzdChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsUHJpY2VMaXN0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VMaXN0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2VcclxuXHRsaXN0UHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVByaWNlKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUHJpY2UocHJpY2UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZXMnLCAncG9zdCcpLnNldEJvZHkocHJpY2UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUHJpY2UoaWQsIHByaWNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocHJpY2UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUHJpY2UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcG1lbnRcclxuXHRsaXN0U2hpcG1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcG1lbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBtZW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcG1lbnQoc2hpcG1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwbWVudHMnLCAncG9zdCcpLnNldEJvZHkoc2hpcG1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcG1lbnQoaWQsIHNoaXBtZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcG1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcG1lbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwbWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBtZW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgQ2F0ZWdvcnlcclxuXHRsaXN0U2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ0NhdGVnb3J5KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nQ2F0ZWdvcnkoc2hpcHBpbmdfY2F0ZWdvcnksIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX2NhdGVnb3J5KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIHNoaXBwaW5nX2NhdGVnb3J5LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX2NhdGVnb3J5KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ0NhdGVnb3JpZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIE1ldGhvZFxyXG5cdGxpc3RTaGlwcGluZ01ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nTWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nTWV0aG9kKHNoaXBwaW5nX21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nTWV0aG9kKGlkLCBzaGlwcGluZ19tZXRob2QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nTWV0aG9kKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBab25lXHJcblx0bGlzdFNoaXBwaW5nWm9uZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ196b25lcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ1pvbmUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nWm9uZShzaGlwcGluZ196b25lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfem9uZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfem9uZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ1pvbmUoaWQsIHNoaXBwaW5nX3pvbmUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdab25lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ1pvbmVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ1pvbmVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3UgT3B0aW9uXHJcblx0bGlzdFNrdU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3Vfb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTa3VPcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdU9wdGlvbihza3Vfb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1X29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoc2t1X29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTa3VPcHRpb24oaWQsIHNrdV9vcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNrdV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1T3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTa3VPcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTa3VPcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3VcclxuXHRsaXN0U2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdShza3UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTa3UoaWQsIHNrdSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShza3UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNrdXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNrdXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIEl0ZW1cclxuXHRsaXN0U3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrSXRlbShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tJdGVtKHN0b2NrX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrSXRlbShpZCwgc3RvY2tfaXRlbSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0l0ZW0oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIExldmVsXHJcblx0bGlzdFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrTGV2ZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0xldmVsKHN0b2NrX2xldmVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2xldmVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrTGV2ZWwoaWQsIHN0b2NrX2xldmVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfbGV2ZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tMZXZlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0xldmVscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgTG9jYXRpb25cclxuXHRsaXN0U3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sb2NhdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tMb2NhdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrTG9jYXRpb24oc3RvY2tfbG9jYXRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sb2NhdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfbG9jYXRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMb2NhdGlvbihpZCwgc3RvY2tfbG9jYXRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xvY2F0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrTG9jYXRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBXZWJob29rXHJcblx0bGlzdFdlYmhvb2tzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2ViaG9va3MnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlV2ViaG9vayhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2ViaG9vayh3ZWJob29rLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2ViaG9va3MnLCAncG9zdCcpLnNldEJvZHkod2ViaG9vaykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXZWJob29rKGlkLCB3ZWJob29rLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keSh3ZWJob29rKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdlYmhvb2soaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdlYmhvb2tzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RXZWJob29rcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2lyZSBUcmFuc2ZlclxyXG5cdGxpc3RXaXJlVHJhbnNmZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2lyZV90cmFuc2ZlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlV2lyZVRyYW5zZmVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXaXJlVHJhbnNmZXIod2lyZV90cmFuc2ZlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dpcmVfdHJhbnNmZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KHdpcmVfdHJhbnNmZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2lyZVRyYW5zZmVyKGlkLCB3aXJlX3RyYW5zZmVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdpcmVUcmFuc2ZlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsV2lyZVRyYW5zZmVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0V2lyZVRyYW5zZmVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbnZhciBhcGkgPSBuZXcgQ0xBcGkoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmNsYXBpID0gYXBpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IChjZmcpID0+IHtcclxuICAgIGxvZy5tc2coJ2FwaSBjbGllbnQgaW5pdGlhbGl6ZWQgd2l0aCBjb25maWc6Jyk7XHJcbiAgICBsb2cubXNnKGNmZyk7XHJcbiAgICBhcGkuY2xpZW50ID0gIGNsaWVudC5uZXdJbnN0YW5jZShjZmcpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgbG9nLm1zZyhgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBjYWxsaW5nICR7YXBpUmVxdWVzdC5wYXRofSAuLi5gKTtcclxuXHJcbiAgICBpZiAoYXBpLmNsaWVudCA9PSB1bmRlZmluZWQpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcih1bmRlZmluZWQsICdhcGkgbm90IGluaXRpYWxpemVkJykpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBqc29uYXBpLnNlcmlhbGl6ZShhcGlSZXF1ZXN0LmJvZHkpO1xyXG4gICAgICAgIGFwaVJlcXVlc3Quc2V0Qm9keShib2R5KTtcclxuICAgICAgICByZXR1cm4gYXBpLmNsaWVudC5jYWxsKGFwaVJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKGFwaVJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCBhcGlSZXF1ZXN0LnJlc3BvbnNlX3R5cGUpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goYXBpRXJyb3IgPT4geyByZXR1cm4gZXJyb3IoYXBpRXJyb3IsIGFwaVJlcXVlc3QuZXJyb3JfdHlwZSk7IH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXNwb25zZShhcGlSZXNwb25zZSwgcmVzcG9uc2VfdHlwZSkge1xyXG5cdGlmICgoYXBpUmVzcG9uc2UgPT0gdW5kZWZpbmVkKSB8fCAocmVzcG9uc2VfdHlwZSA9PSB1bmRlZmluZWQpKSByZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChyZXNwb25zZV90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHRyZXR1cm4ganNvbmFwaS5kZXNlcmlhbGl6ZShhcGlSZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0Y2FzZSAnbm9ybWFsaXplZCc6XHJcblx0XHRcdFx0cmV0dXJuIGpzb25hcGkubm9ybWFsaXplKGFwaVJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdqc29uYXBpJzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0Y2FzZSAncmF3JzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgXCJVbnN1cHBvcnRlZCByZXNwb25zZV90eXBlOiAnXCIgKyByZXNwb25zZV90eXBlICsgXCInXCI7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBlcnJvcihhcGlFcnJvciwgZXJyb3JfdHlwZSkge1xyXG5cdGlmIChlcnJvcl90eXBlID09IHVuZGVmaW5lZCkgcmV0dXJuIGFwaUVycm9yLnJlc3BvbnNlO1xyXG5cdGVsc2VcclxuXHRcdHN3aXRjaCAoZXJyb3JfdHlwZSkge1xyXG5cdFx0XHRjYXNlICdtb2RlbCc6XHJcblx0XHRcdFx0aWYgKCFhcGlFcnJvci5yZXNwb25zZSlcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvclJlc3BvbnNlKGFwaUVycm9yLmNvZGUsIGFwaUVycm9yLm1lc3NhZ2UpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0aWYgKGFwaUVycm9yLnJlc3BvbnNlLmRhdGEgJiYgYXBpRXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpXHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JSZXNwb25zZShhcGlFcnJvci5yZXNwb25zZS5zdGF0dXMpLmFkZEFwaUVycm9ycyhhcGlFcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykpO1xyXG5cdFx0XHRcdGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yUmVzcG9uc2UoYXBpRXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBhcGlFcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0KSk7XHJcblx0XHRcdGNhc2UgJ2pzb25hcGknOlxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhcGlFcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0Y2FzZSAncmF3JzpcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYXBpRXJyb3IucmVzcG9uc2UpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IFwiVW5zdXBwb3J0ZWQgZXJyb3JfdHlwZTogJ1wiICsgZXJyb3JfdHlwZSArIFwiJ1wiO1xyXG5cdFx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGF0YShyZXMpIHtcclxuXHRpZiAocmVzLmlzQXBpUmVzb3VyY2UgJiYgKHJlcy5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKSByZXR1cm4gcmVzO1xyXG5cdGVsc2VcclxuXHRpZiAocmVzLmRhdGFzZXQpIHJldHVybiByZXMuZGF0YXNldC5kYXRhO1xyXG5cdGVsc2VcclxuXHRpZiAocmVzLmRhdGEpIHJldHVybiAocmVzLmRhdGEuZGF0YSk/IHJlcy5kYXRhLmRhdGEgOiByZXMuZGF0YTtcclxuXHRlbHNlIHJldHVybiByZXM7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBhbGwobGlzdEZ1bmN0aW9uLCBmaWx0ZXIgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG5cdGlmICgobGlzdEZ1bmN0aW9uID09IHVuZGVmaW5lZCkgfHwgIWxpc3RGdW5jdGlvbi5uYW1lLnN0YXJ0c1dpdGgoJ2xpc3QnKSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiVW5kZWZpbmVkICdsaXN0JyBBUEkgZnVuY3Rpb25cIik7XHJcblx0XHJcblx0b3B0aW9ucy5yZXNwb25zZV90eXBlID0gb3B0aW9ucy5yZXNwb25zZV90eXBlIHx8IHNkay5yZXNwb25zZV90eXBlO1xyXG5cdGlmIChvcHRpb25zLnJlc3BvbnNlX3R5cGUgPT0gJ3JhdycpIHJldHVybiBQcm9taXNlLnJlamVjdCgnVXNlIG9mIHJhdyByZXNwb25zZV90eXBlIG5vdCBhbGxvd2VkIGluIGxpc3QtYWxsIGZ1bmN0aW9uczogJyk7XHJcblx0XHJcbiAgICBmdW5jdGlvbiBzZXRQYWdlKGZpbHRlciwgc2l6ZSA9IGZpbHRlci5wYWdlX3NpemUgfHwgMTAsIG51bWJlciA9IDEpIHtcclxuXHRcdFxyXG4gICAgICAgIGlmIChmaWx0ZXIuaXNRdWVyeUZpbHRlciAmJiAoZmlsdGVyLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpIGZpbHRlci5wYWdlKG51bWJlciwgc2l6ZSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlclsncGFnZVtzaXplXSddID0gc2l6ZTtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW251bWJlcl0nXSA9IG51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShmaWx0ZXIpO1xyXG5cdFxyXG5cdC8vIFNhdmUgb3JpZ2luYWwgb3B0aW9uIGFuZCBmb3J4ZSByZXNwb25zZV90eXBlIHRvICdyYXcnXHJcblx0Y29uc3QgcmVzcG9uc2VfdHlwZSA9IG9wdGlvbnMucmVzcG9uc2VfdHlwZTtcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSAncmF3JztcclxuXHJcblx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlIDFgKTtcclxuXHJcblx0bGV0IGZpcnN0UGFnZSA9IGF3YWl0IGxpc3RGdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cclxuXHQvLyBmaXJzdFBhZ2UgY29udGFpbnMgZXJyb3JzXHJcblx0aWYgKCFmaXJzdFBhZ2UuZGF0YSkgcmV0dXJuIGZpcnN0UGFnZTtcclxuXHJcbiAgICBjb25zdCBtYXhfcGFnZSA9IGZpcnN0UGFnZS5kYXRhLm1ldGEucGFnZV9jb3VudDtcclxuXHRjb25zdCBwYWdlX3NpemUgPSBmaXJzdFBhZ2UuZGF0YS5kYXRhLmxlbmd0aDtcclxuXHRcclxuXHRsZXQgcGFnZXMgPSBuZXcgQXJyYXkobWF4X3BhZ2UpO1xyXG4gICAgXHJcblx0Ly8gU3RhbmRhcmQgbGlzdEZ1bmN0aW9uIHJlc3BvbnNlXHJcblx0aWYgKG1heF9wYWdlID09IDEpIHJldHVybiByZXNwb25zZShmaXJzdFBhZ2UsIHJlc3BvbnNlX3R5cGUpO1xyXG5cdGVsc2UgcGFnZXNbMF0gPSBmaXJzdFBhZ2U7XHJcblx0XHJcblx0XHJcblx0Ly8gTXVsdGlwbGUgcGFnZXNcclxuICAgIGZvciAocG4gPSAxOyBwbiA8IG1heF9wYWdlOyBwbisrKSB7XHJcblx0XHQvLyBsb2cubXNnKGBhbGwoKS0tPiR7bGlzdEZ1bmN0aW9uLm5hbWV9IHBhZ2UgJHtwbisxfWApO1xyXG4gICAgICAgIHNldFBhZ2UoZmlsdGVyLCBwYWdlX3NpemUsIHBuKzEpO1xyXG4gICAgICAgIHBhZ2VzW3BuXSA9IGxpc3RGdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0Ly8gU2V0IG9yaWdpbmFsIG9wdGlvblxyXG5cdG9wdGlvbnMucmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGU7XHJcblxyXG5cdGxldCBwYWdlc091dCA9IGF3YWl0IFByb21pc2UuYWxsKHBhZ2VzKTtcclxuXHJcblx0aWYgKCFBcnJheS5pc0FycmF5KHBhZ2VzT3V0KSAmJiAhcGFnZXNPdXQuZGF0YSkgcmV0dXJuIHBhZ2VzT3V0O1xyXG4gICAgZWxzZSB7XHJcblx0XHRsZXQgb3V0ID0gW107XHJcblx0XHRwYWdlc091dC5mb3JFYWNoKHAgPT4geyBvdXQgPSBvdXQuY29uY2F0KGRhdGEocCkpIH0pO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlKHsgZGF0YTogeyBkYXRhOiBvdXQgfSB9LCByZXNwb25zZV90eXBlKTtcclxuXHR9XHJcblxyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUb2tlbiBDYWNoZSBcclxuICovXHJcbmNvbnN0IEFVVEhfVE9LRU5TID0ge307XHJcblxyXG5mdW5jdGlvbiBjYWNoZVRva2VuKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSwgc2NvcGUsIHRva2VuKSB7XHJcbiAgICBpZiAoc2RrLmF1dGhfY2FjaGUpIEFVVEhfVE9LRU5TW3Rva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlLCBzY29wZSldID0gdG9rZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRva2VuKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSwgc2NvcGUpIHtcclxuICAgIHJldHVybiBBVVRIX1RPS0VOU1t0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSwgc2NvcGUpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9rZW5JZChjbGllbnRfaWQsIGdyYW50X3R5cGUpIHtcclxuICAgIHJldHVybiBjbGllbnRfaWQgKyAnLScgKyBncmFudF90eXBlICsgJy0nICsgKHNjb3BlPyBzY29wZSA6ICd1bnNjb3BlZCcpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcclxuICAgIH1cclxuICAgIGNsaWVudElkKGNpZCkgeyB0aGlzLmNsaWVudF9pZCA9IGNpZDsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGNsaWVudFNlY3JldChjc2VjKSB7IHRoaXMuY2xpZW50X3NlY3JldCA9IGNzZWM7IHJldHVybiB0aGlzOyB9XHJcbiAgICBpc0F1dGhDb25maWcoKSB7IHJldHVybiB0cnVlOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDbGllbnRDcmVkZW50aWFscyBleHRlbmRzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCBzY29wZSkge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ2NsaWVudF9jcmVkZW50aWFscyc7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgfVxyXG4gICAgc2V0U2NvcGUoc2NvcGUpIHsgdGhpcy5zY29wZSA9IHNjb3BlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgbWFya2V0U2NvcGUobWFya2V0KSB7IHRoaXMuc2NvcGUgPSAobWFya2V0ICE9IHVuZGVmaW5lZCk/ICdtYXJrZXQ6JyttYXJrZXQgOiBtYXJrZXQ7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBdXRob3JpemF0aW9uQ29kZSBleHRlbmRzIENsaWVudENyZWRlbnRpYWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNmZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY2ZnLmNsaWVudF9pZCwgY2ZnLmNsaWVudF9zZWNyZXQsIGNmZy5zY29wZSlcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcclxuICAgICAgICB0aGlzLmNvZGUgPSBjZmcuY29kZTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IGNmZy5yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBzZXRDb2RlKGNvZGUpIHsgdGhpcy5jb2RlID0gY29kZTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIHJlZGlyZWN0VXJpKHVyaSkgeyB0aGlzLnJlZGlyZWN0X3VyaSA9IHVyaTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBhc3N3b3JkIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuY2xpZW50X3NlY3JldCwgY2ZnLnNjb3BlKVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGNmZy51c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gY2ZnLnBhc3N3b3JkO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpIHsgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lOyByZXR1cm4gdGhpczsgfVxyXG4gICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpIHsgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUmVmcmVzaFRva2VuIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICBzdXBlcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdyZWZyZXNoX3Rva2VuJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSByZWZyZXNoX3Rva2VuO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaFRva2VuKHRva2VuKSB7IHRoaXMucmVmcmVzaF90b2tlbiA9IHRva2VuOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQXBpVG9rZW4ge1xyXG4gICAgY29uc3RydWN0b3IoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gJ2JlYXJlcic7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl90eXBlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3duZXJfaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIENsaWVudENyZWRlbnRpYWxzLFxyXG4gICAgQXV0aG9yaXphdGlvbkNvZGUsXHJcbiAgICBQYXNzd29yZCxcclxuICAgIFJlZnJlc2hUb2tlblxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmF1dGhlbnRpY2F0ZSA9IChhdXRoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAucG9zdCgnL29hdXRoL3Rva2VuJywge1xyXG4gICAgICAgICAgICBncmFudF90eXBlOiBhdXRoLmdyYW50X3R5cGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogYXV0aC5jbGllbnRfaWQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBhdXRoLnNjb3BlLFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBhdXRoLmNsaWVudF9zZWNyZXQsXHJcbiAgICAgICAgICAgIGNvZGU6IGF1dGguY29kZSxcclxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBhdXRoLnJlZGlyZWN0X3VyaSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGF1dGgudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiBhdXRoLnJlZnJlc2hfdG9rZW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBBcGlUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgdG9rZW4uYWNjZXNzX3Rva2VuID0gcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIHRva2VuLnJlZnJlc2hfdG9rZW4gPSByZXNwb25zZS5kYXRhLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgIHRva2VuLnNjb3BlID0gcmVzcG9uc2UuZGF0YS5zY29wZTtcclxuICAgICAgICAgICAgdG9rZW4ub3duZXJfdHlwZSA9IHJlc3BvbnNlLmRhdGEub3duZXJfdHlwZTtcclxuICAgICAgICAgICAgdG9rZW4ub3duZXJfaWQgPSByZXNwb25zZS5kYXRhLm93bmVyX2lkO1xyXG4gICAgICAgICAgICB0b2tlbi5jcmVhdGVkX2F0ID0gcmVzcG9uc2UuZGF0YS5jcmVhdGVkX2F0O1xyXG4gICAgICAgICAgICB0b2tlbi5leHBpcmVzX2luID0gcmVzcG9uc2UuZGF0YS5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNkay5hdXRoX2NhY2hlKVxyXG4gICAgICAgICAgICAgICAgY2FjaGVUb2tlbihhdXRoLmNsaWVudF9pZCwgYXV0aC5ncmFudF90eXBlLCBhdXRoLnNjb3BlLCB0b2tlbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcblxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5uZXdBdXRoQ29uZmlnID0gKGdyYW50X3R5cGUsIGNvbmZpZyA9IHt9KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGdyYW50X3R5cGUpIHtcclxuICAgICAgICBjYXNlICdjbGllbnRfY3JlZGVudGlhbHMnOiByZXR1cm4gbmV3IENsaWVudENyZWRlbnRpYWxzKGNvbmZpZy5jbGllbnRfaWQsIGNvbmZpZy5jbGllbnRfc2VjcmV0LCBjb25maWcuc2NvcGUpO1xyXG4gICAgICAgIGNhc2UgJ2F1dGhvcml6YXRpb25fY29kZSc6IHJldHVybiBuZXcgQXV0aG9yaXphdGlvbkNvZGUoY29uZmlnKTtcclxuICAgICAgICBjYXNlICdwYXNzd29yZCc6IHJldHVybiBuZXcgUGFzc3dvcmQoY29uZmlnKTtcclxuICAgICAgICBjYXNlICdyZWZyZXNoX3Rva2VuJzogcmV0dXJuIG5ldyBSZWZyZXNoVG9rZW4oKTtcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGFwaSA9IHJlcXVpcmUoJy4vYXBpJylcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbi8vIEV4cG9zZSBhbGwgYXBpIGZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaS5jbGFwaTtcclxuXHJcbi8vIEV4cG9zZSBTREsgY29uZmlndXJhdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5zZXR0aW5ncyA9IGNvbmZpZy5zZGs7XHJcblxyXG5cclxuLy8gU0RLIGluaXRpYWxpemF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBpZiAoY2ZnICE9IHVuZGVmaW5lZCkgY2ZnLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgIGFwaS5pbml0aWFsaXplKHV0aWxzLm1lcmdlTWFwcyhjb25maWcuY2xheWVyLCBjZmcpKVxyXG59XHJcblxyXG5cclxuLy8gQXV0aGVudGljYXRpb24gdHlwZXNcclxubW9kdWxlLmV4cG9ydHMuYXV0aCA9IHtcclxuICAgIENsaWVudENyZWRlbnRpYWxzIDogKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkgPT4geyByZXR1cm4gbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHMoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KSB9LFxyXG4gICAgUGFzc3dvcmQgOiAoY2ZnKSA9PiB7IHJldHVybiBuZXcgYXV0aC5QYXNzd29yZChjZmcpIH0sXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSA6IChjZmcpID0+IHsgcmV0dXJuIG5ldyBhdXRoLkF1dGhvcml6YXRpb25Db2RlKGNmZykgfSxcclxuICAgIFJlZnJlc2hUb2tlbiA6IChjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pID0+IHsgcmV0dXJuIG5ldyBhdXRoLlJlZnJlc2hUb2tlbihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aC5sYXN0QWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLmNsYXBpLmNsaWVudC5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxyXG5jb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbmNvbnN0IHNkayA9IGNvbmZpZy5zZGs7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEF4aW9zQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBjb25maWcuYmFzZV91cmw7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQWNjZXB0J10gPSAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJztcclxuXHJcbiAgICBpZiAoc2RrLmRlYnVnICYmIHNkay50cmFjZSkge1xyXG5cclxuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UocmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2coJ1JFUVVFU1QgLS0+Jyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhyZXF1ZXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnPC0tIFJFU1BPTlNFJyk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG5ld0luc3RhbmNlIDogZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkFwaUNsaWVudChjb25maWcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBuZXdSZXF1ZXN0IDogZnVuY3Rpb24ocGF0aCwgbWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkFwaVJlcXVlc3QocGF0aCwgbWV0aG9kKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIEFwaVJlcXVlc3QgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHBhdGggPSAnLycsIG1ldGhvZCA9ICdnZXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IHBhdGggfHwgJy8nO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZCB8fCAnZ2V0JztcclxuICAgICAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgIC8vIC0tLS0gLS0tLSAtLS0tIC0tLS1cclxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb3JyZWxhdGlvbl9pZCA9IHV0aWxzLmd1aWQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZV90eXBlID0gc2RrLnJlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JfdHlwZSA9IHNkay5lcnJvcl90eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGF0aChwYXRoKSB7IHRoaXMucGF0aCA9IHBhdGg7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0UGFyYW1zKHBhcmFtcykgeyB0aGlzLnBhcmFtcyA9IChwYXJhbXMgJiYgcGFyYW1zLmlzUXVlcnlGaWx0ZXIgJiYgKHBhcmFtcy5pc1F1ZXJ5RmlsdGVyKCkgPT09IHRydWUpKT8gcGFyYW1zLmJ1aWxkKCkgOiBwYXJhbXM7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0TWV0aG9kKG1ldGhvZCkgeyB0aGlzLm1ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRCb2R5KGJvZHkpIHsgdGhpcy5ib2R5ID0gYm9keTsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRIZWFkZXJzKGhlYWRlcnMpIHsgdGhpcy5oZWFkZXJzID0gaGVhZGVyczsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgbmV3QXR0ZW1wdCgpIHsgdGhpcy5hdHRlbXB0Kys7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3QgT3B0aW9uc1xyXG4gICAgICAgIGdldCByYXdfcmVzcG9uc2UoKSB7IHJldHVybiAodGhpcy5yZXNwb25zZVR5cGUgPT0gJ3JhdycpOyB9XHJcbiAgICAgICAgc2V0IHJhd19yZXNwb25zZShyYXcpIHsgdGhpcy5yZXNwb25zZV90eXBlID0gKHJhdyAmJiAocmF3ID09PSB0cnVlKSk/ICdyYXcnIDogJ25vcm1hbGl6ZWQnOyB9XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlKHR5cGUpIHsgdGhpcy5yZXNwb25zZV90eXBlID0gdHlwZT8gdHlwZSA6IHNkay5yZXNwb25zZV90eXBlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIGVycm9yVHlwZSh0eXBlKSB7IHRoaXMuZXJyb3JfdHlwZSA9IHR5cGU/IHR5cGUgOiBzZGsuZXJyb3JfdHlwZTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gT25seSByZWFsbHkgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGJlaW5nIHNldHRlZFxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZShvcHRpb25zLnJlc3BvbnNlX3R5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yVHlwZShvcHRpb25zLmVycm9yX3R5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihjZmcpIHtcclxuICAgICAgICAgICAgY29uZmlnLmNoZWNrQXBpQ29uZmlnKGNmZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gY2ZnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhfYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICBzZXRBeGlvc0NvbmZpZyhjZmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXV0aGVudGljYXRlKCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYXV0aENvbmZpZyA9IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghYXV0aENvbmZpZyB8fCAhYXV0aENvbmZpZy5pc0F1dGhDb25maWcgfHwgKGF1dGhDb25maWcuaXNBdXRoQ29uZmlnKCkgIT09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoQ29uZmlnID0gbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGllbnRJZCh0aGlzLmNvbmZpZy5jbGllbnRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcmtldFNjb3BlKHRoaXMuY29uZmlnLm1hcmtldF9pZClcclxuICAgICAgICAgICAgICAgICAgICAuY2xpZW50U2VjcmV0KHRoaXMuY29uZmlnLmNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKCd1c2luZyBjdXN0b20gYXV0aGVudGljYXRpb24gY29uZmlnOiAnICsgYXV0aENvbmZpZy5ncmFudF90eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmICghYXV0aENvbmZpZy5jbGllbnRfaWQgJiYgdGhpcy5jb25maWcuY2xpZW50X2lkKSBhdXRoQ29uZmlnLmNsaWVudElkKHRoaXMuY29uZmlnLmNsaWVudF9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhdXRoLmF1dGhlbnRpY2F0ZShhdXRoQ29uZmlnKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuLmFjY2Vzc190b2tlbjsgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY2FsbChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtZXNzYWdlKG1zZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkPyBgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBgIDogJycpLmNvbmNhdChtc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBpUmVxdWVzdC5uZXdBdHRlbXB0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXNlX3BhdGggPSAoKHRoaXMuY29uZmlnLmJhc2VfcGF0aCAhPSB1bmRlZmluZWQpPyB0aGlzLmNvbmZpZy5iYXNlX3BhdGggOiAnJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5ICh0byBiZSByZW1vdmVkKVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gYmFzZV9wYXRoICsgYXBpUmVxdWVzdC5wYXRoO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhcGlSZXF1ZXN0LnBhcmFtcztcclxuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gYXBpUmVxdWVzdC5tZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBxdWVyeVN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgY2FsbFVybCA9IHBhdGg7XHJcbiAgICAgICAgICAgIGlmICgocGFyYW1zICE9IHVuZGVmaW5lZCkgJiYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtc1trZXldXHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsVXJsID0gY2FsbFVybC5jb25jYXQoJz8nKS5jb25jYXQocXVlcnlTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgncGF0aDogJyArIGNhbGxVcmwpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBheGlvc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogY2FsbFVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogc2RrLnRpbWVvdXQucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdlIGN1c3RvbSBhbmQgZGVmYXVsdCBoZWFkZXJzXHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZE1hcChheGlvc0NvbmZpZy5oZWFkZXJzLCBhcGlSZXF1ZXN0LmhlYWRlcnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQm9keVxyXG4gICAgICAgICAgICBpZiAoYXBpUmVxdWVzdC5ib2R5ICE9IHVuZGVmaW5lZCkgYXhpb3NDb25maWcuZGF0YSA9IGFwaVJlcXVlc3QuYm9keTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heF9hdHRlbXB0cyA9IHNkay5hdXRoX2F0dGVtcHRzPyBzZGsuYXV0aF9hdHRlbXB0cyA6IDE7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQgZXhlY3V0ZSBhdXRoZW50aWNhdGlvbiB0aGVuIHJlLWV4ZWN1dGUgY2FsbFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FjY2Vzc190b2tlbiBudWxsLCBhdXRoZW50aWNhdGlvbiByZXF1aXJlZCcpKTtcclxuICAgICAgICAgICAgICAgIGlmICgrK3RoaXMuYXV0aF9hdHRlbXB0cyA+IG1heF9hdHRlbXB0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2RrLnRpbWVvdXQucmV0cnkpIHRocm93IGBSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIGF1dGhlbnRpY2F0aW9uIGF0dGVtcHRzICgke21heF9hdHRlbXB0c30pIGFuZCBubyByZXRyeSB0aW1lb3V0IGNvbmZpZ3VyZWRgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuc2xlZXAoc2RrLnRpbWVvdXQucmV0cnksIG1lc3NhZ2UoJ2Fub3RoZXIgYXV0aCByZXF1ZXN0IGlzIGluIHByb2dyZXNzJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHsgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlKCkudGhlbihhY2Nlc3NfdG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhfYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2V4ZWN1dGluZyBhcGkgY2FsbCAuLi4nKSk7XHJcbiAgICAgICAgICAgICAgICBheGlvc0NvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc0NvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhcGkgY2FsbCBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZShlcnJvcj8gZXJyb3IgOiAnZXJyb3IgZGV0ZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnRUNPTk5BQk9SVEVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoYHRpbWVvdXQgZXhjZXB0aW9uOiAke2Vycm9yLmNvbmZpZy50aW1lb3V0fW1zYCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGltZW91dCBhdXRvc2Vuc2UgaXMgZW5hYmxlZCB3YWl0ICB0aW1lIGluY3JlYXNlZCBieSAxIHNlY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNkay50aW1lb3V0LmF1dG9zZW5zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkay50aW1lb3V0LnJlcXVlc3QgKz0gMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ25ldyByZXF1ZXN0IHRpbWVvdXQ6ICcgKyBzZGsudGltZW91dC5yZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcGkgZXJyb25lb3VzbHkgcmV0dXJuIGNvZGUgNDAxIGluc3RlYWQgb2YgY29kZSA0MDMgZm9yIFVOQVVUSE9SSVpFRCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgJiYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLmNvZGUgPT0gJ0lOVkFMSURfVE9LRU4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2ludmFsaWQgdG9rZW4sIGFjY2VzcyBkZW5pZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgY2xheWVyOiB7XHJcblxyXG4gICAgICAgIGRlZmF1bHQgOiB0cnVlLFxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGlvbiAgOiBudWxsLFxyXG4gIFxyXG4gICAgICAgIGNsaWVudF9pZCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgbWFya2V0X2lkICAgICAgIDogbnVsbCxcclxuICAgICAgICBjbGllbnRfc2VjcmV0ICAgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfdXJsICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgYmFzZV9wYXRoICAgICAgIDogbnVsbCxcclxuICAgICAgICBjb3VudHJ5X2NvZGUgICAgOiAnVVMnLFxyXG4gICAgICAgIGxhbmd1YWdlX2NvZGUgICA6ICdlbicsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZGs6IHtcclxuXHJcbiAgICAgICAgZGVidWcgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBkZWJ1ZyBtb2RlIGFjdGl2YXRlZFxyXG4gICAgICAgIGNvbnNvbGUgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gbG9nIHRvIGNvbnNvbGUgZW5hYmxlZFxyXG4gICAgICAgIHRyYWNlICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gdHJhY2UgY2xpZW50IHJlcXVlc3QvcmVzcG9uc2UgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgYXV0aF9jYWNoZSAgICAgIDogZmFsc2UsICAgICAgICAvLyBjYWNoZSB0b2tlbnMgcmVjZWl2ZWQgZnJvbSBzZXJ2aWNlXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNwb25zZSBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICBlcnJvcl90eXBlICAgICAgOiAnbW9kZWwnLCAgICAgIC8vIEVycm9yIGZvcm1ldCwgcG9zc2libGUgdmFsdWVzIGFyZToganNvbmFwaSB8IG1vZGVsIHwgcmF3XHJcblxyXG4gICAgICAgIHRpbWVvdXQgOiB7IC8vIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAgICByZXRyeSAgICAgICA6IDI1MCwgICAgICAgICAgLy8gd2FpdCB0aW1lIGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCAgICAgOiAzMDAwLCAgICAgICAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICAgICAgYXV0b3NlbnNlICAgOiB0cnVlICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgaW5jcmVtZW50IHdhaXQgdGltZSBpZiB0aW1lb3V0IG9jY3VycyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmNoZWNrQXBpQ29uZmlnID0gKGNvbmZpZykgPT4ge1xyXG5cclxuICAgIGlmIChjb25maWcgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjb25maWcnO1xyXG4gICAgaWYgKGNvbmZpZy5iYXNlX3VybCA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGJhc2VfdXJsJztcclxuICAgIGlmICgoY29uZmlnLmNsaWVudF9pZCA9PSB1bmRlZmluZWQpICYmIChjb25maWcuYXV0aGVudGljYXRpb24gPT0gdW5kZWZpbmVkKSkgdGhyb3cgJ21pc3NpbmcgY2xpZW50X2lkJztcclxuXHJcbiAgICBpZiAoY29uZmlnLmF1dGhlbnRpY2F0aW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBjb25maWcuYXV0aGVudGljYXRpb247XHJcbiAgICAgICAgaWYgKGF1dGguY2xpZW50X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYXV0aGVudGljYXRpb24uY2xpZW50X2lkJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICAgIFxyXG59XHJcbiIsIlxyXG5jbGFzcyBSZXNwb25zZVR5cGUge1xyXG4gICAgc3RhdGljIGdldCBOb3JtYWxpemVkKCkgeyByZXR1cm4gJ25vcm1hbGl6ZWQnIH1cclxuICAgIHN0YXRpYyBnZXQgSlNPTkFwaSgpIHsgcmV0dXJuICdqc29uYXBpJyB9XHJcbiAgICBzdGF0aWMgZ2V0IE1vZGVsKCkgeyByZXR1cm4gJ21vZGVsJyB9XHJcbiAgICBzdGF0aWMgZ2V0IFJhdygpIHsgcmV0dXJuICdyYXcnIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEVycm9yVHlwZSB7XHJcbiAgICBzdGF0aWMgZ2V0IEpTT05BcGkoKSB7IHJldHVybiAnanNvbmFwaScgfVxyXG4gICAgc3RhdGljIGdldCBNb2RlbCgpIHsgcmV0dXJuICdtb2RlbCcgfVxyXG4gICAgc3RhdGljIGdldCBSYXcoKSB7IHJldHVybiAncmF3JyB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFJlc3BvbnNlVHlwZSxcclxuICAgIEVycm9yVHlwZVxyXG59IiwiXHJcbmNsYXNzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwaUVycm9yID0ge30pIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBhcGlFcnJvci5jb2RlO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBhcGlFcnJvci50aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbCA9IGFwaUVycm9yLmRldGFpbDtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IGFwaUVycm9yLnNvdXJjZSB8fCB7fTtcclxuICAgICAgICB0aGlzLm1ldGEgPSBhcGlFcnJvci5tZXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXBpRXJyb3IoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBnZXRTb3VyY2VQb2ludGVyKCkgeyByZXR1cm4gdGhpcy5zb3VyY2UucG9pbnRlcjsgfVxyXG4gICAgZ2V0U291cmNlSXRlbShrZXkpIHsgcmV0dXJuIHRoaXMuc291cmNlW2tleV07IH1cclxuICAgIGdldE1ldGFJdGVtKGtleSkgeyByZXR1cm4gdGhpcy5tZXRhW2tleV07IH1cclxuXHJcbiAgICB0b1N0cmluZygpIHsgcmV0dXJuIGBbJHt0aGlzLmNvZGV9LCAke3RoaXMudGl0bGV9LCAke3RoaXMuZGV0YWlsfV1gOyB9XHJcblxyXG59XHJcblxyXG5cclxuY2xhc3MgRXJyb3JSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzRXJyb3JSZXNwb25zZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIGFkZEVycm9yKGVycm9yKSB7IGlmIChlcnJvciAmJiBlcnJvci5pc0FwaUVycm9yICYmIChlcnJvci5pc0FwaUVycm9yKCkgPT09IHRydWUpKSB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFkZEFwaUVycm9yKGFwaUVycm9yKSB7IHRoaXMuYWRkRXJyb3IobmV3IEVycm9yKGFwaUVycm9yKSk7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhZGRFcnJvcnMoZXJyb3JzID0gW10pIHsgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4gdGhpcy5hZGRFcnJvcihlcnJvcikpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYWRkQXBpRXJyb3JzKGFwaUVycm9ycyA9IFtdKSB7IGFwaUVycm9ycy5mb3JFYWNoKGFwaUVycm9yID0+IHRoaXMuYWRkQXBpRXJyb3IoYXBpRXJyb3IpKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFwaUVycm9yc0NvdW50KCkgeyByZXR1cm4gKHRoaXMuZXJyb3JzID09IHVuZGVmaW5lZCk/IDAgOiB0aGlzLmVycm9ycy5sZW5ndGg7IH1cclxuICAgIGhhc0FwaUVycm9ycygpIHsgcmV0dXJuICh0aGlzLmFwaUVycm9yc0NvdW50KCkgPiAwKTsgfVxyXG4gICAgZ2V0QXBpRXJyb3IoaW5kZXgpIHsgcmV0dXJuICgoaW5kZXggPj0gMCkgJiYgKGluZGV4IDwgdGhpcy5hcGlFcnJvcnNDb3VudCgpKT8gdGhpcy5lcnJvcnNbaW5kZXhdIDogbnVsbCk7IH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgZXJyID0gJ1snICsgdGhpcy5zdGF0dXMgKyAodGhpcy5kZXNjcmlwdGlvbj8gJywgJyArIHRoaXMuZGVzY3JpcHRpb24gOiAnJykgKyAnXSc7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzICYmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICBlcnIgKz0gJyAtLT4geyc7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLmZvckVhY2goeCA9PiBlcnIgKz0geCk7XHJcbiAgICAgICAgICAgIGVyciArPSAnfSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAgZXJyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZXJyb3JSZXNwb25zZSA6IChzdGF0dXMsIGRlc2NyaXB0aW9uKSA9PiB7IHJldHVybiBuZXcgRXJyb3JSZXNwb25zZShzdGF0dXMsIGRlc2NyaXB0aW9uKTsgfVxyXG59IiwiY29uc3Qgbm9ybWFsaXplID0gcmVxdWlyZSgnanNvbi1hcGktbm9ybWFsaXplJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QgbW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJylcclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gKGJvZHkpID0+IHtcclxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkgcmV0dXJuIGJvZHk7XHJcbiAgICAvLyBObyBkYXRhID0gUGxhaW4gT2JqZWN0IG9yIEFwaSBSZXNvdXJjZVxyXG4gICAgZWxzZSByZXR1cm4gKGJvZHkuZGF0YSA9PSB1bmRlZmluZWQpPyBuZXcgSnNvbkFwaVJlc291cmNlKGJvZHkpLnNlcmlhbGl6ZSgpIDogYm9keTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIGlmIChqYXBpID09IHVuZGVmaW5lZCkgcmV0dXJuIGphcGk7XHJcbiAgICBlbHNlXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqYXBpLmRhdGEpKSB7XHJcbiAgICAgICAgbGV0IHJlc0FycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgamFwaS5kYXRhLmZvckVhY2gocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzQXJyYXkucHVzaChtb2R1bGUuZXhwb3J0cy5kZXNlcmlhbGl6ZSh7IGRhdGEgOiByZXMgfSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzQXJyYXkpXHJcbiAgICAgICAgcmV0dXJuIHJlc0FycmF5O1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gKGphcGkuZGF0YSA9PSB1bmRlZmluZWQpPyBqYXBpIDogbmV3IEpzb25BcGlSZXNvdXJjZShqYXBpKS5kZXNlcmlhbGl6ZSgpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMubm9ybWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIHJldHVybiBub3JtYWxpemUoamFwaSk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBKc29uQXBpUmVzb3VyY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlID0ge30pIHtcclxuICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXNvdXJjZS5kYXRhICE9IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMucmVzb3VyY2U7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YS5hdHRyaWJ1dGVzID0ge307XHJcblxyXG4gICAgICAgIC8vIFRPRE86IHBvcnRhcmUgaWQgZSB0eXBlIGluIHRlc3RhIGFkIG9nbmkgb2JqZWN0IFtCVEZdXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZCA9IHRoaXMucmVzb3VyY2Vba2V5XTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFsnaWQnLCAndHlwZSddLmluY2x1ZGVzKGtleSkpIHRoaXMuZGF0YVtrZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZWwuaGVscGVyLmlzQXBpUmVzb3VyY2UoZmllbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEucmVsYXRpb25zaGlwc1trZXkuc3RhcnRzV2l0aCgnX18nKT8ga2V5LnN1YnN0cignX18nLmxlbmd0aCkgOiBrZXldID0geyBkYXRhOiB7IHR5cGU6IGZpZWxkLnR5cGUsIGlkOiBmaWVsZC5pZCB9IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkgJiYga2V5LnN0YXJ0c1dpdGgoJ19fJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ0FycmF5IFJlc291cmNlIHJlbGF0aW9uc2hpcHMgbm90IHN1cHBvcnRlZDogJyArIHJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGF0YS5hdHRyaWJ1dGVzW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLmRhdGEgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5yZXNvdXJjZS5kYXRhID09IHVuZGVmaW5lZCkgJiYgbW9kZWwuaGVscGVyLmlzQXBpUmVzb3VyY2UodGhpcy5yZXNvdXJjZSkpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXNvdXJjZS5kYXRhPyB0aGlzLnJlc291cmNlLmRhdGEgOiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICBsZXQgcmVzID0gbW9kZWwuaGVscGVyLm5ld1Jlc291cmNlKGRhdGEudHlwZSwgZGF0YS5pZCwgZGF0YS5hdHRyaWJ1dGVzKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHJldHVybiByZXM7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEucmVsYXRpb25zaGlwcykuZm9yRWFjaCgocmVsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZWxfZGF0YSA9IGRhdGEucmVsYXRpb25zaGlwc1tyZWxdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChyZWxfZGF0YSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlbF9kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbF9kYXRhLmZvckVhY2gocmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVsUmVzID0gcmVsYXRlZFJlc291cmNlKHRoaXMucmVzb3VyY2UsIHJkLnR5cGUsIHJkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzQXJyYXkucHVzaChyZWxSZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXRSZXNvdXJjZShyZWwsIHJlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWxSZXMgPSByZWxhdGVkUmVzb3VyY2UodGhpcy5yZXNvdXJjZSwgcmVsX2RhdGEudHlwZSwgcmVsX2RhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXRSZXNvdXJjZShyZWwsIHJlbFJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBqYXBpICBKU09OQXBpIGRhdGFcclxuICogQHBhcmFtIHsqfSB0eXBlICByZXNvdXJjZSB0eXBlXHJcbiAqIEBwYXJhbSB7Kn0gaWQgICAgcmVzb3VyY2UgaWRcclxuICogXHJcbiAqIENyZWF0ZSByZWxhdGlvbnNoaXAgaW4gcmVzb3VyY2Ugb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiByZWxhdGVkUmVzb3VyY2UoamFwaSwgdHlwZSwgaWQpIHtcclxuICAgIGxldCByZWxSZXMgPSBtb2RlbC5oZWxwZXIubmV3UmVzb3VyY2UodHlwZSwgaWQpO1xyXG4gICAgbGV0IGluYyA9IGpzb25hcGlJbmNsdWRlZChqYXBpLCB0eXBlLCBpZCk7XHJcbiAgICByZWxSZXMuc2V0RmllbGRzKGluYy5hdHRyaWJ1dGVzKTtcclxuICAgIHJldHVybiByZWxSZXM7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gamFwaSAgSlNPTkFwaSBkYXRhIFxyXG4gKiBAcGFyYW0geyp9IHR5cGUgIHJlc291cmNlIHR5cGVcclxuICogQHBhcmFtIHsqfSBpZCAgICByZXNvdXJjZSBpZFxyXG4gKlxyXG4gKiBTZWFyY2ggZm9yIGluY2x1ZGVkIHJlc291cmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBqc29uYXBpSW5jbHVkZWQoamFwaSwgdHlwZSwgaWQpIHtcclxuICAgIGlmICgoamFwaSA9PSB1bmRlZmluZWQpIHx8IChqYXBpLmluY2x1ZGVkID09IHVuZGVmaW5lZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaW5jUmVzID0gdW5kZWZpbmVkO1xyXG4gICAgamFwaS5pbmNsdWRlZC5zb21lKGluYyA9PiB7XHJcbiAgICAgICAgaWYgKChpbmMudHlwZSA9PSB0eXBlKSAmJiAoaW5jLmlkID09IGlkKSkgaW5jUmVzID0gaW5jO1xyXG4gICAgICAgIHJldHVybiAoaW5jUmVzICE9IHVuZGVmaW5lZCk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGluY1JlcztcclxufVxyXG4iLCJjb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbXNnIDogKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc2RrLmRlYnVnICYmIHNkay5jb25zb2xlKSBjb25zb2xlLmxvZygobWVzc2FnZSA9PSB1bmRlZmluZWQpPyAnJyA6IG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlcnIgOiAoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoc2RrLmRlYnVnICYmIHNkay5jb25zb2xlKSBjb25zb2xlLmVycm9yKChlcnJvciA9PSB1bmRlZmluZWQpPyAnJyA6IGVycm9yKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlIDogKCkgPT4ge1xyXG4gICAgICAgIHNkay5jb25zb2xlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZSA6ICgpID0+IHtcclxuICAgICAgICBzZGsuY29uc29sZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9iZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nIGVuYWJsZWQ6ICcgKyBzZGsuY29uc29sZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lmIGxvZyBpcyBlbmFibGVkIGJ1dCBpcyBub3QgdmlzaWJsZSBtYXliZSB5b3UgYXJlIG5vdCBpbiBkZWJ1ZyBtb2RlJylcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGVuYWJsZWQoKSB7IHJldHVybiBzZGsuY29uc29sZSA9PT0gdHJ1ZTsgfVxyXG5cclxufSIsIi8vIEZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXQgMDIvMDMvMjAxOSAxOToyNzo1OSBieSBjb21tZXJjZWxheWVyLWpzLXNkay1jb2RlZ2VuXHJcblxyXG5cclxuLy8gQmFzaWMgQWJzdHJhY3QgUmVzb3VyY2VcclxuY2xhc3MgUmVzb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHR5cGUsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaXNBcGlSZXNvdXJjZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHNldFJlc291cmNlKGZpZWxkLCByZXMpIHsgaWYgKChyZXMgIT0gdW5kZWZpbmVkKSAmJiAoaGVscGVyLmlzQXBpUmVzb3VyY2UocmVzKSB8fCBoZWxwZXIuaXNBcGlSZXNvdXJjZUFycmF5KHJlcykpKSB0aGlzWydfXycuY29uY2F0KGZpZWxkKV0gPSByZXM7IH1cclxuXHRnZXRSZXNvdXJjZShmaWVsZCkgeyByZXR1cm4gdGhpc1snX18nLmNvbmNhdChmaWVsZCldOyB9XHJcblx0c2V0RmllbGRzKGZpZWxkcyA9IHt9KSB7IE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmaWVsZCA9PiB7IHRoaXNbZmllbGRdID0gZmllbGRzW2ZpZWxkXSB9KTsgcmV0dXJuIHRoaXM7IH1cclxuXHRzZXRGaWVsZChuYW1lLCB2YWx1ZSkgeyBpZiAobmFtZSkgdGhpc1tuYW1lXSA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdhZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBBZGRyZXNzLlRZUEUpO1xyXG5cdFx0dGhpcy5idXNpbmVzcyA9IGZpZWxkcy5idXNpbmVzcztcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5jb21wYW55ID0gZmllbGRzLmNvbXBhbnk7XHJcblx0XHR0aGlzLmxpbmVfMSA9IGZpZWxkcy5saW5lXzE7XHJcblx0XHR0aGlzLmxpbmVfMiA9IGZpZWxkcy5saW5lXzI7XHJcblx0XHR0aGlzLmNpdHkgPSBmaWVsZHMuY2l0eTtcclxuXHRcdHRoaXMuemlwX2NvZGUgPSBmaWVsZHMuemlwX2NvZGU7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGUgPSBmaWVsZHMuc3RhdGVfY29kZTtcclxuXHRcdHRoaXMuY291bnRyeV9jb2RlID0gZmllbGRzLmNvdW50cnlfY29kZTtcclxuXHRcdHRoaXMucGhvbmUgPSBmaWVsZHMucGhvbmU7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5ub3RlcyA9IGZpZWxkcy5ub3RlcztcclxuXHRcdHRoaXMubGF0ID0gZmllbGRzLmxhdDtcclxuXHRcdHRoaXMubG5nID0gZmllbGRzLmxuZztcclxuXHRcdHRoaXMuYmlsbGluZ19pbmZvID0gZmllbGRzLmJpbGxpbmdfaW5mbztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGdlb2NvZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdnZW9jb2RlcicsIHZhbHVlKSB9XHJcblx0Z2V0IGdlb2NvZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2dlb2NvZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWRpdCBDYXJkIHJlc291cmNlXHJcbmNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3JlZGl0X2NhcmRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3JlZGl0Q2FyZC5UWVBFKTtcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5udW1iZXIgPSBmaWVsZHMubnVtYmVyO1xyXG5cdFx0dGhpcy5tb250aCA9IGZpZWxkcy5tb250aDtcclxuXHRcdHRoaXMueWVhciA9IGZpZWxkcy55ZWFyO1xyXG5cdFx0dGhpcy52ZXJpZmljYXRpb25fdmFsdWUgPSBmaWVsZHMudmVyaWZpY2F0aW9uX3ZhbHVlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lckFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJBZGRyZXNzLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgR3JvdXAgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJHcm91cCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9ncm91cHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lckdyb3VwLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFBhc3N3b3JkIFJlc2V0IHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGFzc3dvcmRSZXNldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXNzd29yZF9yZXNldHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBhc3N3b3JkUmVzZXQuVFlQRSk7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuXHRcdHRoaXMuX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuID0gZmllbGRzLl9yZXNldF9wYXNzd29yZF90b2tlbjtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUGF5bWVudCBTb3VyY2UgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJQYXltZW50U291cmNlIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyUGF5bWVudFNvdXJjZS5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBTdWJzY3JpcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJTdWJzY3JpcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyU3Vic2NyaXB0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXIuVFlQRSk7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5wYXNzd29yZCA9IGZpZWxkcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyX2dyb3VwKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcl9ncm91cCcsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyX2dyb3VwKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyX2dyb3VwJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIERlbGl2ZXJ5IExlYWQgVGltZSByZXNvdXJjZVxyXG5jbGFzcyBEZWxpdmVyeUxlYWRUaW1lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2RlbGl2ZXJ5X2xlYWRfdGltZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBEZWxpdmVyeUxlYWRUaW1lLlRZUEUpO1xyXG5cdFx0dGhpcy5taW5faG91cnMgPSBmaWVsZHMubWluX2hvdXJzO1xyXG5cdFx0dGhpcy5tYXhfaG91cnMgPSBmaWVsZHMubWF4X2hvdXJzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbXBvcnQgcmVzb3VyY2VcclxuY2xhc3MgSW1wb3J0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ltcG9ydHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbXBvcnQuVFlQRSk7XHJcblx0XHR0aGlzLnJlc291cmNlX3R5cGUgPSBmaWVsZHMucmVzb3VyY2VfdHlwZTtcclxuXHRcdHRoaXMucGFyZW50X3Jlc291cmNlX2lkID0gZmllbGRzLnBhcmVudF9yZXNvdXJjZV9pZDtcclxuXHRcdHRoaXMuaW5wdXRzID0gZmllbGRzLmlucHV0cztcclxuXHRcdHRoaXMuY2xlYW51cF9yZWNvcmRzID0gZmllbGRzLmNsZWFudXBfcmVjb3JkcztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW52ZW50b3J5IE1vZGVsIHJlc291cmNlXHJcbmNsYXNzIEludmVudG9yeU1vZGVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ludmVudG9yeV9tb2RlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbnZlbnRvcnlNb2RlbC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtT3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTGluZUl0ZW1PcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBmaWVsZHMub3B0aW9ucztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGxpbmVfaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbGluZV9pdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgbGluZV9pdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScpIH1cclxuXHRzZXQgc2t1X29wdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1X29wdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdV9vcHRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1X29wdGlvbicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLl91cGRhdGVfcXVhbnRpdHkgPSBmaWVsZHMuX3VwZGF0ZV9xdWFudGl0eTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcblx0c2V0IGl0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2l0ZW0nLCB2YWx1ZSkgfVxyXG5cdGdldCBpdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2l0ZW0nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWFya2V0IHJlc291cmNlXHJcbmNsYXNzIE1hcmtldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtYXJrZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWFya2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmZhY2Vib29rX3BpeGVsX2lkID0gZmllbGRzLmZhY2Vib29rX3BpeGVsX2lkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWVyY2hhbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21lcmNoYW50JywgdmFsdWUpIH1cclxuXHRnZXQgbWVyY2hhbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWVyY2hhbnQnKSB9XHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNZXJjaGFudCByZXNvdXJjZVxyXG5jbGFzcyBNZXJjaGFudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtZXJjaGFudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBNZXJjaGFudC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBPcmRlciByZXNvdXJjZVxyXG5jbGFzcyBPcmRlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdvcmRlcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBPcmRlci5UWVBFKTtcclxuXHRcdHRoaXMuZ3Vlc3QgPSBmaWVsZHMuZ3Vlc3Q7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuXHRcdHRoaXMubGFuZ3VhZ2VfY29kZSA9IGZpZWxkcy5sYW5ndWFnZV9jb2RlO1xyXG5cdFx0dGhpcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayA9IGZpZWxkcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jaztcclxuXHRcdHRoaXMuY291cG9uX2NvZGUgPSBmaWVsZHMuY291cG9uX2NvZGU7XHJcblx0XHR0aGlzLmNhcnRfdXJsID0gZmllbGRzLmNhcnRfdXJsO1xyXG5cdFx0dGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcblx0XHR0aGlzLnRlcm1zX3VybCA9IGZpZWxkcy50ZXJtc191cmw7XHJcblx0XHR0aGlzLnByaXZhY3lfdXJsID0gZmllbGRzLnByaXZhY3lfdXJsO1xyXG5cdFx0dGhpcy5fcGxhY2UgPSBmaWVsZHMuX3BsYWNlO1xyXG5cdFx0dGhpcy5fY2FuY2VsID0gZmllbGRzLl9jYW5jZWw7XHJcblx0XHR0aGlzLl9hcHByb3ZlID0gZmllbGRzLl9hcHByb3ZlO1xyXG5cdFx0dGhpcy5fY2FwdHVyZSA9IGZpZWxkcy5fY2FwdHVyZTtcclxuXHRcdHRoaXMuX3VwZGF0ZV90YXhlcyA9IGZpZWxkcy5fdXBkYXRlX3RheGVzO1xyXG5cdFx0dGhpcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQ7XHJcblx0XHR0aGlzLl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQgPSBmaWVsZHMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmcgPSBmaWVsZHMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nO1xyXG5cdFx0dGhpcy5fYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmcgPSBmaWVsZHMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nO1xyXG5cdFx0dGhpcy5fc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQgPSBmaWVsZHMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0O1xyXG5cdFx0dGhpcy5fc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayA9IGZpZWxkcy5fc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayA9IGZpZWxkcy5fc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rO1xyXG5cdFx0dGhpcy5fcmVmcmVzaCA9IGZpZWxkcy5fcmVmcmVzaDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IHNoaXBwaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IGJpbGxpbmdfYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYmlsbGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYmlsbGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycpIH1cclxuXHRzZXQgcGF5bWVudF9tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9tZXRob2QnKSB9XHJcblx0c2V0IHBheW1lbnRfc291cmNlKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBhcmNlbCByZXNvdXJjZVxyXG5jbGFzcyBQYXJjZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGFyY2VscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBhcmNlbC5UWVBFKTtcclxuXHRcdHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuXHRcdHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcblx0XHR0aGlzLmVlbF9wZmMgPSBmaWVsZHMuZWVsX3BmYztcclxuXHRcdHRoaXMuY29udGVudHNfdHlwZSA9IGZpZWxkcy5jb250ZW50c190eXBlO1xyXG5cdFx0dGhpcy5jb250ZW50c19leHBsYW5hdGlvbiA9IGZpZWxkcy5jb250ZW50c19leHBsYW5hdGlvbjtcclxuXHRcdHRoaXMuY3VzdG9tc19jZXJ0aWZ5ID0gZmllbGRzLmN1c3RvbXNfY2VydGlmeTtcclxuXHRcdHRoaXMuY3VzdG9tc19zaWduZXIgPSBmaWVsZHMuY3VzdG9tc19zaWduZXI7XHJcblx0XHR0aGlzLm5vbl9kZWxpdmVyeV9vcHRpb24gPSBmaWVsZHMubm9uX2RlbGl2ZXJ5X29wdGlvbjtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fdHlwZSA9IGZpZWxkcy5yZXN0cmljdGlvbl90eXBlO1xyXG5cdFx0dGhpcy5yZXN0cmljdGlvbl9jb21tZW50cyA9IGZpZWxkcy5yZXN0cmljdGlvbl9jb21tZW50cztcclxuXHRcdHRoaXMuY3VzdG9tc19pbmZvX3JlcXVpcmVkID0gZmllbGRzLmN1c3RvbXNfaW5mb19yZXF1aXJlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBtZW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwbWVudCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBtZW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBtZW50JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheW1lbnQgTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFBheW1lbnRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5bWVudF9tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5bWVudE1ldGhvZC5UWVBFKTtcclxuXHRcdHRoaXMucGF5bWVudF9zb3VyY2VfdHlwZSA9IGZpZWxkcy5wYXltZW50X3NvdXJjZV90eXBlO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBwYXltZW50X2dhdGV3YXkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfZ2F0ZXdheSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGF5cGFsIFBheW1lbnQgcmVzb3VyY2VcclxuY2xhc3MgUGF5cGFsUGF5bWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXlwYWxfcGF5bWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXlwYWxQYXltZW50LlRZUEUpO1xyXG5cdFx0dGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcblx0XHR0aGlzLmNhbmNlbF91cmwgPSBmaWVsZHMuY2FuY2VsX3VybDtcclxuXHRcdHRoaXMubm90ZV90b19wYXllciA9IGZpZWxkcy5ub3RlX3RvX3BheWVyO1xyXG5cdFx0dGhpcy5wYXlwYWxfcGF5ZXJfaWQgPSBmaWVsZHMucGF5cGFsX3BheWVyX2lkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgTGlzdCByZXNvdXJjZVxyXG5jbGFzcyBQcmljZUxpc3QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VfbGlzdHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZUxpc3QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuY3VycmVuY3lfY29kZSA9IGZpZWxkcy5jdXJyZW5jeV9jb2RlO1xyXG5cdFx0dGhpcy50YXhfaW5jbHVkZWQgPSBmaWVsZHMudGF4X2luY2x1ZGVkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBQcmljZSByZXNvdXJjZVxyXG5jbGFzcyBQcmljZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwcmljZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLmFtb3VudF9jZW50cyA9IGZpZWxkcy5hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzID0gZmllbGRzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuXHRzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG5cdGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBtZW50IHJlc291cmNlXHJcbmNsYXNzIFNoaXBtZW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBtZW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBtZW50LlRZUEUpO1xyXG5cdFx0dGhpcy5fb25faG9sZCA9IGZpZWxkcy5fb25faG9sZDtcclxuXHRcdHRoaXMuX3BpY2tpbmcgPSBmaWVsZHMuX3BpY2tpbmc7XHJcblx0XHR0aGlzLl9wYWNraW5nID0gZmllbGRzLl9wYWNraW5nO1xyXG5cdFx0dGhpcy5fcmVhZHlfdG9fc2hpcCA9IGZpZWxkcy5fcmVhZHlfdG9fc2hpcDtcclxuXHRcdHRoaXMuX3NoaXAgPSBmaWVsZHMuX3NoaXA7XHJcblx0XHR0aGlzLl9nZXRfcmF0ZXMgPSBmaWVsZHMuX2dldF9yYXRlcztcclxuXHRcdHRoaXMuc2VsZWN0ZWRfcmF0ZV9pZCA9IGZpZWxkcy5zZWxlY3RlZF9yYXRlX2lkO1xyXG5cdFx0dGhpcy5fcHVyY2hhc2UgPSBmaWVsZHMuX3B1cmNoYXNlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIENhdGVnb3J5IHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nQ2F0ZWdvcnkgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfY2F0ZWdvcmllcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nQ2F0ZWdvcnkuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ01ldGhvZC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzID0gZmllbGRzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IHNoaXBwaW5nX3pvbmUodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ196b25lKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnKSB9XHJcblx0c2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIFpvbmUgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdab25lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX3pvbmVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdab25lLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmNvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMubm90X2NvdW50cnlfY29kZV9yZWdleDtcclxuXHRcdHRoaXMuc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5zdGF0ZV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3Rfc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5ub3Rfc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMuemlwX2NvZGVfcmVnZXggPSBmaWVsZHMuemlwX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF96aXBfY29kZV9yZWdleCA9IGZpZWxkcy5ub3RfemlwX2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNrdSBPcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgU2t1T3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1T3B0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmRlbGF5X2hvdXJzID0gZmllbGRzLmRlbGF5X2hvdXJzO1xyXG5cdFx0dGhpcy5za3VfY29kZV9yZWdleCA9IGZpZWxkcy5za3VfY29kZV9yZWdleDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgcmVzb3VyY2VcclxuY2xhc3MgU2t1IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3UuVFlQRSk7XHJcblx0XHR0aGlzLmNvZGUgPSBmaWVsZHMuY29kZTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGZpZWxkcy5kZXNjcmlwdGlvbjtcclxuXHRcdHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuXHRcdHRoaXMudGFnX25hbWVzID0gZmllbGRzLnRhZ19uYW1lcztcclxuXHRcdHRoaXMucGllY2VzX3Blcl9wYWNrID0gZmllbGRzLnBpZWNlc19wZXJfcGFjaztcclxuXHRcdHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuXHRcdHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBJdGVtIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrSXRlbSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrSXRlbS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMZXZlbCByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xldmVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xldmVscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTGV2ZWwuVFlQRSk7XHJcblx0XHR0aGlzLnByaW9yaXR5ID0gZmllbGRzLnByaW9yaXR5O1xyXG5cdFx0dGhpcy5vbl9ob2xkID0gZmllbGRzLm9uX2hvbGQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG5cdGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIExvY2F0aW9uIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTG9jYXRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbG9jYXRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMb2NhdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5sYWJlbF9mb3JtYXQgPSBmaWVsZHMubGFiZWxfZm9ybWF0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBXZWJob29rIHJlc291cmNlXHJcbmNsYXNzIFdlYmhvb2sgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnd2ViaG9va3MnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBXZWJob29rLlRZUEUpO1xyXG5cdFx0dGhpcy50b3BpYyA9IGZpZWxkcy50b3BpYztcclxuXHRcdHRoaXMuY2FsbGJhY2tfdXJsID0gZmllbGRzLmNhbGxiYWNrX3VybDtcclxuXHRcdHRoaXMuaW5jbHVkZV9yZXNvdXJjZXMgPSBmaWVsZHMuaW5jbHVkZV9yZXNvdXJjZXM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFdpcmUgVHJhbnNmZXIgcmVzb3VyY2VcclxuY2xhc3MgV2lyZVRyYW5zZmVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dpcmVfdHJhbnNmZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2lyZVRyYW5zZmVyLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0QWRkcmVzcyxcclxuXHRDcmVkaXRDYXJkLFxyXG5cdEN1c3RvbWVyQWRkcmVzcyxcclxuXHRDdXN0b21lckdyb3VwLFxyXG5cdEN1c3RvbWVyUGFzc3dvcmRSZXNldCxcclxuXHRDdXN0b21lclBheW1lbnRTb3VyY2UsXHJcblx0Q3VzdG9tZXJTdWJzY3JpcHRpb24sXHJcblx0Q3VzdG9tZXIsXHJcblx0RGVsaXZlcnlMZWFkVGltZSxcclxuXHRJbXBvcnQsXHJcblx0SW52ZW50b3J5TW9kZWwsXHJcblx0TGluZUl0ZW1PcHRpb24sXHJcblx0TGluZUl0ZW0sXHJcblx0TWFya2V0LFxyXG5cdE1lcmNoYW50LFxyXG5cdE9yZGVyLFxyXG5cdFBhcmNlbCxcclxuXHRQYXltZW50TWV0aG9kLFxyXG5cdFBheXBhbFBheW1lbnQsXHJcblx0UHJpY2VMaXN0LFxyXG5cdFByaWNlLFxyXG5cdFNoaXBtZW50LFxyXG5cdFNoaXBwaW5nQ2F0ZWdvcnksXHJcblx0U2hpcHBpbmdNZXRob2QsXHJcblx0U2hpcHBpbmdab25lLFxyXG5cdFNrdU9wdGlvbixcclxuXHRTa3UsXHJcblx0U3RvY2tJdGVtLFxyXG5cdFN0b2NrTGV2ZWwsXHJcblx0U3RvY2tMb2NhdGlvbixcclxuXHRXZWJob29rLFxyXG5cdFdpcmVUcmFuc2ZlcixcclxufVxyXG5cclxuXHJcblxyXG4vLyAqKioqKioqKioqIEhlbHBlciAqKioqKioqKioqIC8vXHJcblxyXG5sZXQgaGVscGVyID0ge31cclxubW9kdWxlLmV4cG9ydHMuaGVscGVyID0gaGVscGVyO1xyXG5cclxuaGVscGVyLmFsbEVsZW1lbnRzID0gKCkgPT4ge1xyXG5cdGxldCBlbGVtZW50cyA9IFtdO1xyXG5cdGNvbnN0IG1vZGVsID0gbW9kdWxlLmV4cG9ydHM7XHJcblx0T2JqZWN0LmtleXMobW9kZWwpLnNvbWUoKGNsKSA9PiB7XHJcblx0XHRpZiAoIWNsLnN0YXJ0c1dpdGgoJ2hlbHBlcicpKSBlbGVtZW50cy5wdXNoKGNsKVxyXG5cdH0pO1xyXG5cdHJldHVybiBlbGVtZW50cztcclxufVxyXG5cclxuaGVscGVyLm5ld1Jlc291cmNlID0gKHR5cGUsIGlkLCBmaWVsZHMpID0+IHtcclxuXHRsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblx0Y29uc3QgbW9kZWwgPSBtb2R1bGUuZXhwb3J0cztcclxuXHQvLyBPYmplY3Qua2V5cyhtb2RlbCkuc29tZSgoY2wpID0+IHtcclxuXHQvLyBcdGlmICghY2wuc3RhcnRzV2l0aCgnaGVscGVyJykpIHtcclxuXHQvLyBcdFx0bGV0IGNsX3R5cGUgPSBtb2RlbFtjbF0uVFlQRTtcclxuXHQvLyBcdFx0aWYgKGNsX3R5cGUgJiYgKGNsX3R5cGUgPT0gdHlwZSkpIHtcclxuXHQvLyBcdFx0XHRpbnN0YW5jZSA9IG5ldyBtb2RlbFtjbF0oaWQgfHwgZmllbGRzLmlkLCBmaWVsZHMpO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHRyZXR1cm4gKGluc3RhbmNlICE9IHVuZGVmaW5lZCk7XHJcblx0Ly8gfSk7XHJcblx0aGVscGVyLmFsbEVsZW1lbnRzKCkuc29tZShjbCA9PiB7XHJcblx0XHRsZXQgY2xfdHlwZSA9IG1vZGVsW2NsXS5UWVBFO1xyXG5cdFx0aWYgKGNsX3R5cGUgJiYgKGNsX3R5cGUgPT0gdHlwZSkpIHtcclxuXHRcdFx0aW5zdGFuY2UgPSBuZXcgbW9kZWxbY2xdKGlkIHx8IGZpZWxkcy5pZCwgZmllbGRzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAoaW5zdGFuY2UgIT0gdW5kZWZpbmVkKTtcclxuXHR9KVxyXG5cdHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuaGVscGVyLmlzQXBpUmVzb3VyY2UgPSAocmVzKSA9PiB7XHJcblx0cmV0dXJuIChyZXMgJiYgcmVzLmlzQXBpUmVzb3VyY2UgJiYgKHJlcy5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKTtcclxufVxyXG5cclxuaGVscGVyLmlzQXBpUmVzb3VyY2VBcnJheSA9IChyZXNBcnJheSkgPT4ge1xyXG5cdHJldHVybiAocmVzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShyZXNBcnJheSkgJiYgKChyZXNBcnJheS5sZW5ndGggPT0gMCkgfHwgKGhlbHBlci5pc0FwaVJlc291cmNlKHJlc0FycmF5WzBdKSkpKTtcclxufVxyXG4iLCJcclxuY2xhc3MgUXVlcnlGaWx0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5zcGFyc2VfZmllbGRzZXRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcl9maWVsZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmN1c3RvbV9wYXJhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucGFnZV9zaXplID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUXVlcnlGaWx0ZXIoKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgc29ydChmaWVsZCwgZGVzY2VuZGluZykge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMucHVzaCgoZGVzY2VuZGluZz8gJy0nIDogJycpLmNvbmNhdChmaWVsZCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkcyhyZXNvdXJjZSwgLi4uZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkcyAhPSB1bmRlZmluZWQpIHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNvdXJjZV0gPSBmaWVsZHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jbHVkZSguLi5yZXNvdXJjZXMpIHtcclxuICAgICAgICBpZiAocmVzb3VyY2VzICE9IHVuZGVmaW5lZCkgcmVzb3VyY2VzLmZvckVhY2gocmVzID0+IHsgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMucHVzaChyZXMpIH0pXHJcbiAgICAgICAgLy8gaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzb3VyY2VzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZmlsdGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoZmlsdGVyICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVycyhmaWx0ZXJzKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlcnMgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5mb3JFYWNoKGZpbHRlciA9PiB7IHRoaXMuZmlsdGVyKGZpbHRlciwgZmlsdGVyc1tmaWx0ZXJdKSB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFtKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGtleSAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFtcyhwYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7IHRoaXMucGFyYW0oa2V5LCBwYXJhbXNba2V5XSkgfSlcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdlKG51bWJlciwgc2l6ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlcihudW1iZXIpO1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUoc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZVNpemUoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZV9zaXplID0gc2l6ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdlTnVtYmVyKG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSBudW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9ICh0aGlzLnBhZ2VfbnVtYmVyICYmIE51bWJlci5pc0ludGVnZXIodGhpcy5wYWdlTnVtYmVyKSk/IHBhZ2VfbnVtYmVyKysgOiAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGpvaW4pIHtcclxuXHJcbiAgICAgICAgbGV0IHFzTWFwID0ge307XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmZvckVhY2goZmlsdGVyID0+IHsgcXNNYXBbYGZpbHRlclske2ZpbHRlcn1dYF0gPSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbmNsdWRlZCBSZXNvdXJjZXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHFzTWFwLmluY2x1ZGUgPSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIFNwYXJzZSBGaWVsZHNldHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmZvckVhY2gocmVzID0+IHsgcXNNYXBbYGZpZWxkc1ske3Jlc31dYF0gPSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzXS5qb2luKCcsJykgfSk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc29ydF9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHFzTWFwLnNvcnQgPSB0aGlzLnNvcnRfZmllbGRzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIFBhcmFtc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykuZm9yRWFjaChrZXkgPT4geyBxc01hcFtrZXldID0gdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gfSlcclxuXHJcbiAgICAgICAgLy8gUGFnaW5hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VfbnVtYmVyICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2VbbnVtYmVyXSddID0gdGhpcy5wYWdlX251bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5wYWdlX3NpemUgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtzaXplXSddID0gdGhpcy5wYWdlX3NpemU7XHJcblxyXG4gICAgICAgIHJldHVybiAham9pbj8gcXNNYXAgOiBPYmplY3Qua2V5cyhxc01hcCkubWFwKGtleSA9PiB7IHJldHVybiBgJHtrZXl9PSR7cXNNYXBba2V5XX1gIH0pLmpvaW4oJyYnKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBRdWVyeUZpbHRlclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5uZXdJbnN0YW5jZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUXVlcnlGaWx0ZXIoKTtcclxufVxyXG4iLCJcclxuY29uc3QgcXVlcnkgPSByZXF1aXJlKCcuL3F1ZXJ5JylcclxuXHJcblxyXG5jbGFzcyBRdWVyeUV4cHJlc3Npb24gZXh0ZW5kcyBxdWVyeS5RdWVyeUZpbHRlciB7XHJcblxyXG4gICAgc3RhdGljIGV4cGxhaW4odHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBRdWVyeUV4cHJlc3Npb24uUFJFRElDQVRFU1t0eXBlXTtcclxuICAgICAgICByZXR1cm4gKHAgIT0gdW5kZWZpbmVkKT8gcCA6ICgnVW5rbm93biBwcmVkaWNhdGUgJyArIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FjdGl2ZXJlY29yZC1oYWNrZXJ5L3JhbnNhY2sjc2VhcmNoLW1hdGNoZXJzXHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYWN0aXZlcmVjb3JkLWhhY2tlcnkvcmFuc2Fjay9ibG9iL21hc3Rlci9saWIvcmFuc2Fjay9sb2NhbGUvZW4ueW1sI0wxNlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IFBSRURJQ0FURVMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2VxJzogXCJlcXVhbHNcIixcclxuICAgICAgICAgICAgJ2VxX2FueSc6IFwiZXF1YWxzIGFueVwiLFxyXG4gICAgICAgICAgICAnZXFfYWxsJzogXCJlcXVhbHMgYWxsXCIsXHJcbiAgICAgICAgICAgICdub3RfZXEnOiBcIm5vdCBlcXVhbCB0b1wiLFxyXG4gICAgICAgICAgICAnbm90X2VxX2FueSc6IFwibm90IGVxdWFsIHRvIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X2VxX2FsbCc6IFwibm90IGVxdWFsIHRvIGFsbFwiLFxyXG4gICAgICAgICAgICAnbWF0Y2hlcyc6IFwibWF0Y2hlc1wiLFxyXG4gICAgICAgICAgICAnbWF0Y2hlc19hbnknOiBcIm1hdGNoZXMgYW55XCIsXHJcbiAgICAgICAgICAgICdtYXRjaGVzX2FsbCc6IFwibWF0Y2hlcyBhbGxcIixcclxuICAgICAgICAgICAgJ2RvZXNfbm90X21hdGNoJzogXCJkb2Vzbid0IG1hdGNoXCIsXHJcbiAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaF9hbnknOiBcImRvZXNuJ3QgbWF0Y2ggYW55XCIsXHJcbiAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaF9hbGwnOiBcImRvZXNuJ3QgbWF0Y2ggYWxsXCIsXHJcbiAgICAgICAgICAgICdsdCc6IFwibGVzcyB0aGFuXCIsXHJcbiAgICAgICAgICAgICdsdF9hbnknOiBcImxlc3MgdGhhbiBhbnlcIixcclxuICAgICAgICAgICAgJ2x0X2FsbCc6IFwibGVzcyB0aGFuIGFsbFwiLFxyXG4gICAgICAgICAgICAnbHRlcSc6IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIsXHJcbiAgICAgICAgICAgICdsdGVxX2FueSc6IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvIGFueVwiLFxyXG4gICAgICAgICAgICAnbHRlcV9hbGwnOiBcImxlc3MgdGhhbiBvciBlcXVhbCB0byBhbGxcIixcclxuICAgICAgICAgICAgJ2d0JzogXCJncmVhdGVyIHRoYW5cIixcclxuICAgICAgICAgICAgJ2d0X2FueSc6IFwiZ3JlYXRlciB0aGFuIGFueVwiLFxyXG4gICAgICAgICAgICAnZ3RfYWxsJzogXCJncmVhdGVyIHRoYW4gYWxsXCIsXHJcbiAgICAgICAgICAgICdndGVxJzogXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIixcclxuICAgICAgICAgICAgJ2d0ZXFfYW55JzogXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYW55XCIsXHJcbiAgICAgICAgICAgICdndGVxX2FsbCc6IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGFsbFwiLFxyXG4gICAgICAgICAgICAnaW4nOiBcImluXCIsXHJcbiAgICAgICAgICAgICdpbl9hbnknOiBcImluIGFueVwiLFxyXG4gICAgICAgICAgICAnaW5fYWxsJzogXCJpbiBhbGxcIixcclxuICAgICAgICAgICAgJ25vdF9pbic6IFwibm90IGluXCIsXHJcbiAgICAgICAgICAgICdub3RfaW5fYW55JzogXCJub3QgaW4gYW55XCIsXHJcbiAgICAgICAgICAgICdub3RfaW5fYWxsJzogXCJub3QgaW4gYWxsXCIsXHJcbiAgICAgICAgICAgICdjb250JzogXCJjb250YWluc1wiLFxyXG4gICAgICAgICAgICAnY29udF9hbnknOiBcImNvbnRhaW5zIGFueVwiLFxyXG4gICAgICAgICAgICAnY29udF9hbGwnOiBcImNvbnRhaW5zIGFsbFwiLFxyXG4gICAgICAgICAgICAnbm90X2NvbnQnOiBcImRvZXNuJ3QgY29udGFpblwiLFxyXG4gICAgICAgICAgICAnbm90X2NvbnRfYW55JzogXCJkb2Vzbid0IGNvbnRhaW4gYW55XCIsXHJcbiAgICAgICAgICAgICdub3RfY29udF9hbGwnOiBcImRvZXNuJ3QgY29udGFpbiBhbGxcIixcclxuICAgICAgICAgICAgJ3N0YXJ0JzogXCJzdGFydHMgd2l0aFwiLFxyXG4gICAgICAgICAgICAnc3RhcnRfYW55JzogXCJzdGFydHMgd2l0aCBhbnlcIixcclxuICAgICAgICAgICAgJ3N0YXJ0X2FsbCc6IFwic3RhcnRzIHdpdGggYWxsXCIsXHJcbiAgICAgICAgICAgICdub3Rfc3RhcnQnOiBcImRvZXNuJ3Qgc3RhcnQgd2l0aFwiLFxyXG4gICAgICAgICAgICAnbm90X3N0YXJ0X2FueSc6IFwiZG9lc24ndCBzdGFydCB3aXRoIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X3N0YXJ0X2FsbCc6IFwiZG9lc24ndCBzdGFydCB3aXRoIGFsbFwiLFxyXG4gICAgICAgICAgICAnZW5kJzogXCJlbmRzIHdpdGhcIixcclxuICAgICAgICAgICAgJ2VuZF9hbnknOiBcImVuZHMgd2l0aCBhbnlcIixcclxuICAgICAgICAgICAgJ2VuZF9hbGwnOiBcImVuZHMgd2l0aCBhbGxcIixcclxuICAgICAgICAgICAgJ25vdF9lbmQnOiBcImRvZXNuJ3QgZW5kIHdpdGhcIixcclxuICAgICAgICAgICAgJ25vdF9lbmRfYW55JzogXCJkb2Vzbid0IGVuZCB3aXRoIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X2VuZF9hbGwnOiBcImRvZXNuJ3QgZW5kIHdpdGggYWxsXCIsXHJcbiAgICAgICAgICAgICd0cnVlJzogXCJpcyB0cnVlXCIsXHJcbiAgICAgICAgICAgICdmYWxzZSc6IFwiaXMgZmFsc2VcIixcclxuICAgICAgICAgICAgJ3ByZXNlbnQnOiBcImlzIHByZXNlbnRcIixcclxuICAgICAgICAgICAgJ2JsYW5rJzogXCJpcyBibGFua1wiLFxyXG4gICAgICAgICAgICAnbnVsbCc6IFwiaXMgbnVsbFwiLFxyXG4gICAgICAgICAgICAnbm90X251bGwnOiBcImlzIG5vdCBudWxsXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHN1cGVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5wcmVkaWNhdGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaXNRdWVyeUV4cHJlc3Npb24oKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgcHJlZGljYXRlKHR5cGUsIHZhbHVlLCAuLi5maWVsZHMpIHtcclxuICAgICAgICBpZiAoKGZpZWxkcyAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fX2Rpc2FibGVfcHJlZGljYXRlX2NoZWNrID09IHVuZGVmaW5lZCkgfHwgKHRoaXMuX19kaXNhYmxlX3ByZWRpY2F0ZV9jaGVjayAhPT0gdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKFF1ZXJ5RXhwcmVzc2lvbi5QUkVESUNBVEVTKS5pbmNsdWRlcyh0eXBlKSkgdGhyb3cgJ1VuZGVmaW5lZCBwcmVkaWNhdGUgJyArIHR5cGVcclxuICAgICAgICAgICAgbGV0IGZpZWxkc18gPSBBcnJheS5pc0FycmF5KGZpZWxkc1swXSk/IGZpZWxkc1swXSA6IGZpZWxkcztcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZmllbGRzXy5qb2luKCdfb3JfJykgKyAnXycgKyB0eXBlO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBBcnJheS5pc0FycmF5KHZhbHVlKT8gdmFsdWUuam9pbignLCcpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJlZGljYXRlc1trZXldID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZSh0eXBlKSB7IHJldHVybiBRdWVyeUV4cHJlc3Npb24uZXhwbGFpbih0eXBlKSB9XHJcblxyXG4gICAgYnVpbGQoam9pbikge1xyXG4gICAgICAgIGxldCBxc01hcCA9IHN1cGVyLmJ1aWxkKGpvaW4pO1xyXG4gICAgICAgIGlmICgham9pbikgT2JqZWN0LmtleXModGhpcy5wcmVkaWNhdGVzKS5mb3JFYWNoKHAgPT4geyBxc01hcFtgZmlsdGVyW3FdWyR7cH1dYF0gPSB0aGlzLnByZWRpY2F0ZXNbcF07IH0pXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChxc01hcC5sZW5ndGggPiAwKSBxc01hcCArPSAnJic7XHJcbiAgICAgICAgICAgIHFzTWFwICs9IE9iamVjdC5rZXlzKHRoaXMucHJlZGljYXRlcykubWFwKHAgPT4geyByZXR1cm4gYGZpbHRlcltxXVske3B9XT0ke3RoaXMucHJlZGljYXRlc1twXX1gIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHFzTWFwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBQcmVkaWNhdGUgc2hvcnRjdXRzXHJcbiAgICBfZXEodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2VxJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2VxX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZXFfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2VxX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZXFfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9lcSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2VxJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9lcV9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9lcV9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2VxX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2VxX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9tYXRjaGVzKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdtYXRjaGVzJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX21hdGNoZXNfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdtYXRjaGVzX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9tYXRjaGVzX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbWF0Y2hlc19hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZG9lc19ub3RfbWF0Y2godmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2RvZXNfbm90X21hdGNoJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2RvZXNfbm90X21hdGNoX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZG9lc19ub3RfbWF0Y2hfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2RvZXNfbm90X21hdGNoX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZG9lc19ub3RfbWF0Y2hfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2x0KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdsdCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9sdF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2x0X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9sdF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2x0X2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9sdGVxKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdsdGVxJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2x0ZXFfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdsdGVxX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9sdGVxX2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbHRlcV9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZ3QodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2d0JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2d0X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZ3RfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2d0X2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZ3RfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2d0ZXEodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2d0ZXEnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZ3RlcV9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2d0ZXFfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2d0ZXFfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdndGVxX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9pbih2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnaW4nLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfaW5fYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdpbl9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfaW5fYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdpbl9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2luKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfaW4nLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2luX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2luX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfaW5fYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfaW5fYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2NvbnQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2NvbnQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfY29udF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2NvbnRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2NvbnRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdjb250X2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfY29udCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2NvbnQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2NvbnRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfY29udF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2NvbnQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9jb250JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9jb250X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2NvbnRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9jb250X2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2NvbnRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX3N0YXJ0KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdzdGFydCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9zdGFydF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ3N0YXJ0X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9zdGFydF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ3N0YXJ0X2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3Rfc3RhcnQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9zdGFydCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3Rfc3RhcnRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3Rfc3RhcnRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9zdGFydF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9zdGFydF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZW5kKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdlbmQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZW5kX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZW5kX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9lbmRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdlbmRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9lbmQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9lbmQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2VuZF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9lbmRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9lbmRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfZW5kX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF90cnVlKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCd0cnVlJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2ZhbHNlKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdmYWxzZScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9wcmVzZW50KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdwcmVzZW50JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2JsYW5rKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdibGFuaycsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9udWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdudWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9udWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfbnVsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFF1ZXJ5RXhwcmVzc2lvblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5uZXdJbnN0YW5jZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUXVlcnlFeHByZXNzaW9uKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGxvZyA6IChtZXNzYWdlKSA9PiB7ICAgIC8vIEJXQ1xyXG4gICAgICAgIGxvZy5tc2cobWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZE1hcCA6IChtYXAsIGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXAgPT0gdW5kZWZpbmVkKSBtYXAgPSB7fTtcclxuICAgICAgICBpZiAoZXh0ICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGtleSA9PiB7IG1hcFtrZXldID0gZXh0W2tleV07IH0pO1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlTWFwcyA6IChtYXAxLCBtYXAyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubWFwMSwgLi4ubWFwMiB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lTWFwIDogKG1hcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobWFwID09IHVuZGVmaW5lZCk/IG1hcCA6IHsgLi4ubWFwIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwIDogKG1zLCBtc2cpID0+IHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cy5sb2coKG1zZz8gYCR7bXNnfSAtIGAgOiAnJykuY29uY2F0KGB3YWl0aW5nICR7bXN9IG1zZWNzIC4uLmApKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGd1aWQgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArICcuJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLnN1YnN0cigwLCA2KSkudG9VcHBlckNhc2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FwaXRhbGl6ZSA6IChzdHIpID0+IHtcclxuICAgICAgIHJldHVybiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpPyAnJyA6ICBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5qc29uQXBpTm9ybWFsaXplID0gZmFjdG9yeSgpO1xuICAgIH1cblxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIE5vcm1hbGl6ZXIoZGF0YXNldCwgcHJvcGVydHkpIHtcblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTm9ybWFsaXplcikpIHtcbiAgICAgICAgICAgIHZhciBub3JtYWxpemVySW5zdGFuY2UgPSBuZXcgTm9ybWFsaXplcihkYXRhc2V0KTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eSA/IG5vcm1hbGl6ZXJJbnN0YW5jZS5nZXQocHJvcGVydHkpIDogbm9ybWFsaXplckluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZGF0YXNldCA9IEpTT04ucGFyc2UoZGF0YXNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGFzZXQgfHwgIWRhdGFzZXQuZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGpzb24gYXBpIG5vcm1hbGl6ZXIgaW5wdXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YXNldCA9IGRhdGFzZXQ7XG4gICAgICAgIHRoaXMuaXNDb2xsZWN0aW9uID0gaXNBcnJheShkYXRhc2V0LmRhdGEpO1xuXG4gICAgICAgIHRoaXMuaGF5c3RhY2sgPSBidWlsZEhheXN0YWNrKGRhdGFzZXQuaW5jbHVkZWQsIHRoaXMuaXNDb2xsZWN0aW9uID8gZGF0YXNldC5kYXRhIDogW2RhdGFzZXQuZGF0YV0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRIYXlzdGFjayhpbmNsdWRlZCwgYWRkaXRpb25hbEl0ZW1zKSB7XG5cbiAgICAgICAgdmFyIHNpZ25hdHVyZXMgPSBbXTtcbiAgICAgICAgdmFyIGhheXN0YWNrID0gaW5jbHVkZWQgfHwgW107XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICBzaWduYXR1cmVzLnB1c2goZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlYWNoKGFkZGl0aW9uYWxJdGVtcywgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICBpZiAoc2lnbmF0dXJlcy5pbmRleE9mKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKSA8IDApIHtcbiAgICAgICAgICAgICAgICBoYXlzdGFjay5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRpb25zID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgY29sbGVjdGlvbltpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGtleSwgY29sbGVjdGlvbltrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICBlYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdGVtcC5wdXNoKGNhbGxiYWNrLmNhbGwoY29udGV4dCwgaXRlbSwga2V5KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVlcEV4dGVuZChvdXQsIG9iaikge1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmIG9ialtrZXldICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG91dFtrZXldID09PSAndW5kZWZpbmVkJyAmJiAob3V0W2tleV0gPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQob3V0W2tleV0sIG9ialtrZXldKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgICBlYWNoKHByb3BlcnR5VHJlZSwgZnVuY3Rpb24ocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgIGlmICghcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgICAgIHZhciByZWxhdGlvbkRhdGEgPSBlbnRpdHkucmVsYXRpb25zaGlwcyAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25EYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWRFbnRpdHkgPSBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gcmVsYXRlZEVudGl0eSA/IG5ldyBOb3JtYWxpemVyKHtkYXRhOiByZWxhdGVkRW50aXR5LCBpbmNsdWRlZDogaGF5c3RhY2t9KSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldFJlbGF0aW9uRGF0YShwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpIHtcblxuICAgICAgICByZXR1cm4gWydpZCcsICd0eXBlJ10uaW5kZXhPZihwcm9wZXJ0eSkgPj0gMCA/IGVudGl0eVtwcm9wZXJ0eV0gOiBlbnRpdHkuYXR0cmlidXRlc1twcm9wZXJ0eV07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWxhdGlvbkRhdGEocmVsYXRpb25OYW1lLCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciByZWxhdGlvbkRhdGEgPSBlbnRpdHkucmVsYXRpb25zaGlwcyAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0uZGF0YTtcbiAgICAgICAgdmFyIHJlbGF0ZWRFbnRpdHkgPSByZWxhdGlvbkRhdGEgJiYgZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICBpZiAoaXNBcnJheShyZWxhdGVkRW50aXR5KSkge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHJlbGF0ZWRFbnRpdHksIGZ1bmN0aW9uKHNpbmdsZVJlbGF0ZWRFbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplUmVsYXRpb24ocmVsYXRpb25Qcm9wZXJ0eVRyZWUsIHNpbmdsZVJlbGF0ZWRFbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlbGF0ZWRFbnRpdHkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplUmVsYXRpb24ocmVsYXRpb25Qcm9wZXJ0eVRyZWUsIHJlbGF0ZWRFbnRpdHksIGhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVSZWxhdGlvbihwcm9wZXJ0eVRyZWUsIHJlbGF0ZWRFbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgcmV0dXJuIGdldFZpYVByb3BlcnR5VHJlZS5jYWxsKG5ldyBOb3JtYWxpemVyKHtcbiAgICAgICAgICAgIGRhdGE6IHJlbGF0ZWRFbnRpdHksXG4gICAgICAgICAgICBpbmNsdWRlZDogaGF5c3RhY2tcbiAgICAgICAgfSksIHByb3BlcnR5VHJlZSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIHZhciBzZWFyY2ggPSBpc0FycmF5KHJlbGF0aW9uRGF0YSkgPyBtYXAocmVsYXRpb25EYXRhLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZDtcbiAgICAgICAgfSkgOiBbcmVsYXRpb25EYXRhLnR5cGUgKyAnQCcgKyByZWxhdGlvbkRhdGEuaWRdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHNlYXJjaC5pbmRleE9mKGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQpID49IDAgJiYgdGVtcC5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcC5sZW5ndGggPT09IDEgJiYgIWlzQXJyYXkocmVsYXRpb25EYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlUb05lc3RlZE9iamVjdChjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB2YXIgdGVtcCA9IG9iajtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25MZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb25MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcCA9IHRlbXBbY29sbGVjdGlvbltpXV0gPSB0ZW1wW2NvbGxlY3Rpb25baV1dIHx8IChpKzEgPT09IGNvbGxlY3Rpb25MZW5ndGggPyB1bmRlZmluZWQgOiB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGRQcm9wZXJ0eVRyZWUocHJvcGVydHlMaXN0KSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSB7fTtcblxuICAgICAgICBlYWNoKHByb3BlcnR5TGlzdCwgZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICAgICAgdmFyIHByb3BlcnR5UGFydHMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgZGVlcEV4dGVuZCh0ZW1wLCBhcnJheVRvTmVzdGVkT2JqZWN0KHByb3BlcnR5UGFydHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFtwcm9wZXJ0eV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWFQcm9wZXJ0eVRyZWUocHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAodGhpcy5kYXRhc2V0LmRhdGEsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCB0aGlzLmhheXN0YWNrKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgdGhpcy5kYXRhc2V0LmRhdGEsIHRoaXMuaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIE5vcm1hbGl6ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGdldFZpYVByb3BlcnR5VHJlZS5jYWxsKHRoaXMsIGJ1aWxkUHJvcGVydHlUcmVlKGlzQXJyYXkocHJvcGVydHkpID8gcHJvcGVydHkgOiBbcHJvcGVydHldKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheShwcm9wZXJ0eSkgPyByZXN1bHQgOiBtYXAocmVzdWx0LCBmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtW3Byb3BlcnR5XTsgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheShwcm9wZXJ0eSkgPyByZXN1bHQgOiByZXN1bHRbcHJvcGVydHldO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIE5vcm1hbGl6ZXI7XG5cbn0pKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9