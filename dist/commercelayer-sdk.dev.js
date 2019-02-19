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

// File automatically generated at 11/02/2019 17:27:40 by commercelayer-js-sdk-codegen
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
    key: "listAddresses",
    // Address
    value: function listAddresses(filter, options) {
      return request(client.newRequest('/api/addresses').setParams(filter).setOptions(options));
    }
  }, {
    key: "allAddresses",
    value: function allAddresses(filter, options) {
      return all(this.listAddresses, filter, options);
    }
  }, {
    key: "retrieveAddress",
    value: function retrieveAddress(id, filter, options) {
      return request(client.newRequest("/api/addresses/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createAddress",
    value: function createAddress(address) {
      return request(client.newRequest('/api/addresses', 'post').setBody(address));
    }
  }, {
    key: "updateAddress",
    value: function updateAddress(id, address) {
      return request(client.newRequest("/api/addresses/".concat(id), 'patch').setBody(address));
    }
  }, {
    key: "deleteAddress",
    value: function deleteAddress(id) {
      return request(client.newRequest("/api/addresses/".concat(id), 'delete'));
    } // Credit Card

  }, {
    key: "listCreditCards",
    value: function listCreditCards(filter, options) {
      return request(client.newRequest('/api/credit_cards').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCreditCards",
    value: function allCreditCards(filter, options) {
      return all(this.listCreditCards, filter, options);
    }
  }, {
    key: "retrieveCreditCard",
    value: function retrieveCreditCard(id, filter, options) {
      return request(client.newRequest("/api/credit_cards/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCreditCard",
    value: function createCreditCard(credit_card) {
      return request(client.newRequest('/api/credit_cards', 'post').setBody(credit_card));
    }
  }, {
    key: "updateCreditCard",
    value: function updateCreditCard(id, credit_card) {
      return request(client.newRequest("/api/credit_cards/".concat(id), 'patch').setBody(credit_card));
    }
  }, {
    key: "deleteCreditCard",
    value: function deleteCreditCard(id) {
      return request(client.newRequest("/api/credit_cards/".concat(id), 'delete'));
    } // Customer Address

  }, {
    key: "listCustomerAddresses",
    value: function listCustomerAddresses(filter, options) {
      return request(client.newRequest('/api/customer_addresses').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCustomerAddresses",
    value: function allCustomerAddresses(filter, options) {
      return all(this.listCustomerAddresses, filter, options);
    }
  }, {
    key: "retrieveCustomerAddress",
    value: function retrieveCustomerAddress(id, filter, options) {
      return request(client.newRequest("/api/customer_addresses/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerAddress",
    value: function createCustomerAddress(customer_address) {
      return request(client.newRequest('/api/customer_addresses', 'post').setBody(customer_address));
    }
  }, {
    key: "updateCustomerAddress",
    value: function updateCustomerAddress(id, customer_address) {
      return request(client.newRequest("/api/customer_addresses/".concat(id), 'patch').setBody(customer_address));
    }
  }, {
    key: "deleteCustomerAddress",
    value: function deleteCustomerAddress(id) {
      return request(client.newRequest("/api/customer_addresses/".concat(id), 'delete'));
    } // Customer Password Reset

  }, {
    key: "listCustomerPasswordResets",
    value: function listCustomerPasswordResets(filter, options) {
      return request(client.newRequest('/api/customer_password_resets').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCustomerPasswordResets",
    value: function allCustomerPasswordResets(filter, options) {
      return all(this.listCustomerPasswordResets, filter, options);
    }
  }, {
    key: "retrieveCustomerPasswordReset",
    value: function retrieveCustomerPasswordReset(id, filter, options) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerPasswordReset",
    value: function createCustomerPasswordReset(customer_password_reset) {
      return request(client.newRequest('/api/customer_password_resets', 'post').setBody(customer_password_reset));
    }
  }, {
    key: "updateCustomerPasswordReset",
    value: function updateCustomerPasswordReset(id, customer_password_reset) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id), 'patch').setBody(customer_password_reset));
    }
  }, {
    key: "deleteCustomerPasswordReset",
    value: function deleteCustomerPasswordReset(id) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id), 'delete'));
    } // Customer Payment Source

  }, {
    key: "listCustomerPaymentSources",
    value: function listCustomerPaymentSources(filter, options) {
      return request(client.newRequest('/api/customer_payment_sources').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCustomerPaymentSources",
    value: function allCustomerPaymentSources(filter, options) {
      return all(this.listCustomerPaymentSources, filter, options);
    }
  }, {
    key: "retrieveCustomerPaymentSource",
    value: function retrieveCustomerPaymentSource(id, filter, options) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerPaymentSource",
    value: function createCustomerPaymentSource(customer_payment_source) {
      return request(client.newRequest('/api/customer_payment_sources', 'post').setBody(customer_payment_source));
    }
  }, {
    key: "updateCustomerPaymentSource",
    value: function updateCustomerPaymentSource(id, customer_payment_source) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id), 'patch').setBody(customer_payment_source));
    }
  }, {
    key: "deleteCustomerPaymentSource",
    value: function deleteCustomerPaymentSource(id) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id), 'delete'));
    } // Customer Subscription

  }, {
    key: "listCustomerSubscriptions",
    value: function listCustomerSubscriptions(filter, options) {
      return request(client.newRequest('/api/customer_subscriptions').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCustomerSubscriptions",
    value: function allCustomerSubscriptions(filter, options) {
      return all(this.listCustomerSubscriptions, filter, options);
    }
  }, {
    key: "retrieveCustomerSubscription",
    value: function retrieveCustomerSubscription(id, filter, options) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomerSubscription",
    value: function createCustomerSubscription(customer_subscription) {
      return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription));
    }
  }, {
    key: "updateCustomerSubscription",
    value: function updateCustomerSubscription(id, customer_subscription) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id), 'patch').setBody(customer_subscription));
    }
  }, {
    key: "deleteCustomerSubscription",
    value: function deleteCustomerSubscription(id) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id), 'delete'));
    } // Customer

  }, {
    key: "listCustomers",
    value: function listCustomers(filter, options) {
      return request(client.newRequest('/api/customers').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCustomers",
    value: function allCustomers(filter, options) {
      return all(this.listCustomers, filter, options);
    }
  }, {
    key: "retrieveCustomer",
    value: function retrieveCustomer(id, filter, options) {
      return request(client.newRequest("/api/customers/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createCustomer",
    value: function createCustomer(customer) {
      return request(client.newRequest('/api/customers', 'post').setBody(customer));
    }
  }, {
    key: "updateCustomer",
    value: function updateCustomer(id, customer) {
      return request(client.newRequest("/api/customers/".concat(id), 'patch').setBody(customer));
    }
  }, {
    key: "deleteCustomer",
    value: function deleteCustomer(id) {
      return request(client.newRequest("/api/customers/".concat(id), 'delete'));
    } // Delivery Lead Time

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
    }
  }, {
    key: "createDeliveryLeadTime",
    value: function createDeliveryLeadTime(delivery_lead_time) {
      return request(client.newRequest('/api/delivery_lead_times', 'post').setBody(delivery_lead_time));
    }
  }, {
    key: "updateDeliveryLeadTime",
    value: function updateDeliveryLeadTime(id, delivery_lead_time) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id), 'patch').setBody(delivery_lead_time));
    }
  }, {
    key: "deleteDeliveryLeadTime",
    value: function deleteDeliveryLeadTime(id) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id), 'delete'));
    } // Inventory Model

  }, {
    key: "listInventoryModels",
    value: function listInventoryModels(filter, options) {
      return request(client.newRequest('/api/inventory_models').setParams(filter).setOptions(options));
    }
  }, {
    key: "allInventoryModels",
    value: function allInventoryModels(filter, options) {
      return all(this.listInventoryModels, filter, options);
    }
  }, {
    key: "retrieveInventoryModel",
    value: function retrieveInventoryModel(id, filter, options) {
      return request(client.newRequest("/api/inventory_models/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createInventoryModel",
    value: function createInventoryModel(inventory_model) {
      return request(client.newRequest('/api/inventory_models', 'post').setBody(inventory_model));
    }
  }, {
    key: "updateInventoryModel",
    value: function updateInventoryModel(id, inventory_model) {
      return request(client.newRequest("/api/inventory_models/".concat(id), 'patch').setBody(inventory_model));
    }
  }, {
    key: "deleteInventoryModel",
    value: function deleteInventoryModel(id) {
      return request(client.newRequest("/api/inventory_models/".concat(id), 'delete'));
    } // Line Item Option

  }, {
    key: "listLineItemOptions",
    value: function listLineItemOptions(filter, options) {
      return request(client.newRequest('/api/line_item_options').setParams(filter).setOptions(options));
    }
  }, {
    key: "allLineItemOptions",
    value: function allLineItemOptions(filter, options) {
      return all(this.listLineItemOptions, filter, options);
    }
  }, {
    key: "retrieveLineItemOption",
    value: function retrieveLineItemOption(id, filter, options) {
      return request(client.newRequest("/api/line_item_options/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createLineItemOption",
    value: function createLineItemOption(line_item_option) {
      return request(client.newRequest('/api/line_item_options', 'post').setBody(line_item_option));
    }
  }, {
    key: "updateLineItemOption",
    value: function updateLineItemOption(id, line_item_option) {
      return request(client.newRequest("/api/line_item_options/".concat(id), 'patch').setBody(line_item_option));
    }
  }, {
    key: "deleteLineItemOption",
    value: function deleteLineItemOption(id) {
      return request(client.newRequest("/api/line_item_options/".concat(id), 'delete'));
    } // Line Item

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
    value: function retrieveLineItem(id, filter, options) {
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
    } // Market

  }, {
    key: "listMarkets",
    value: function listMarkets(filter, options) {
      return request(client.newRequest('/api/markets').setParams(filter).setOptions(options));
    }
  }, {
    key: "allMarkets",
    value: function allMarkets(filter, options) {
      return all(this.listMarkets, filter, options);
    }
  }, {
    key: "retrieveMarket",
    value: function retrieveMarket(id, filter, options) {
      return request(client.newRequest("/api/markets/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createMarket",
    value: function createMarket(market) {
      return request(client.newRequest('/api/markets', 'post').setBody(market));
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(id, market) {
      return request(client.newRequest("/api/markets/".concat(id), 'patch').setBody(market));
    }
  }, {
    key: "deleteMarket",
    value: function deleteMarket(id) {
      return request(client.newRequest("/api/markets/".concat(id), 'delete'));
    } // Merchant

  }, {
    key: "listMerchants",
    value: function listMerchants(filter, options) {
      return request(client.newRequest('/api/merchants').setParams(filter).setOptions(options));
    }
  }, {
    key: "allMerchants",
    value: function allMerchants(filter, options) {
      return all(this.listMerchants, filter, options);
    }
  }, {
    key: "retrieveMerchant",
    value: function retrieveMerchant(id, filter, options) {
      return request(client.newRequest("/api/merchants/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createMerchant",
    value: function createMerchant(merchant) {
      return request(client.newRequest('/api/merchants', 'post').setBody(merchant));
    }
  }, {
    key: "updateMerchant",
    value: function updateMerchant(id, merchant) {
      return request(client.newRequest("/api/merchants/".concat(id), 'patch').setBody(merchant));
    }
  }, {
    key: "deleteMerchant",
    value: function deleteMerchant(id) {
      return request(client.newRequest("/api/merchants/".concat(id), 'delete'));
    } // Order

  }, {
    key: "listOrders",
    value: function listOrders(filter, options) {
      return request(client.newRequest('/api/orders').setParams(filter).setOptions(options));
    }
  }, {
    key: "allOrders",
    value: function allOrders(filter, options) {
      return all(this.listOrders, filter, options);
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
    }
  }, {
    key: "updateOrder",
    value: function updateOrder(id, order) {
      return request(client.newRequest("/api/orders/".concat(id), 'patch').setBody(order));
    }
  }, {
    key: "deleteOrder",
    value: function deleteOrder(id) {
      return request(client.newRequest("/api/orders/".concat(id), 'delete'));
    } // Parcel

  }, {
    key: "listParcels",
    value: function listParcels(filter, options) {
      return request(client.newRequest('/api/parcels').setParams(filter).setOptions(options));
    }
  }, {
    key: "allParcels",
    value: function allParcels(filter, options) {
      return all(this.listParcels, filter, options);
    }
  }, {
    key: "retrieveParcel",
    value: function retrieveParcel(id, filter, options) {
      return request(client.newRequest("/api/parcels/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createParcel",
    value: function createParcel(parcel) {
      return request(client.newRequest('/api/parcels', 'post').setBody(parcel));
    }
  }, {
    key: "updateParcel",
    value: function updateParcel(id, parcel) {
      return request(client.newRequest("/api/parcels/".concat(id), 'patch').setBody(parcel));
    }
  }, {
    key: "deleteParcel",
    value: function deleteParcel(id) {
      return request(client.newRequest("/api/parcels/".concat(id), 'delete'));
    } // Payment Method

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
    }
  }, {
    key: "createPaymentMethod",
    value: function createPaymentMethod(payment_method) {
      return request(client.newRequest('/api/payment_methods', 'post').setBody(payment_method));
    }
  }, {
    key: "updatePaymentMethod",
    value: function updatePaymentMethod(id, payment_method) {
      return request(client.newRequest("/api/payment_methods/".concat(id), 'patch').setBody(payment_method));
    }
  }, {
    key: "deletePaymentMethod",
    value: function deletePaymentMethod(id) {
      return request(client.newRequest("/api/payment_methods/".concat(id), 'delete'));
    } // Paypal Payment

  }, {
    key: "listPaypalPayments",
    value: function listPaypalPayments(filter, options) {
      return request(client.newRequest('/api/paypal_payments').setParams(filter).setOptions(options));
    }
  }, {
    key: "allPaypalPayments",
    value: function allPaypalPayments(filter, options) {
      return all(this.listPaypalPayments, filter, options);
    }
  }, {
    key: "retrievePaypalPayment",
    value: function retrievePaypalPayment(id, filter, options) {
      return request(client.newRequest("/api/paypal_payments/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createPaypalPayment",
    value: function createPaypalPayment(paypal_payment) {
      return request(client.newRequest('/api/paypal_payments', 'post').setBody(paypal_payment));
    }
  }, {
    key: "updatePaypalPayment",
    value: function updatePaypalPayment(id, paypal_payment) {
      return request(client.newRequest("/api/paypal_payments/".concat(id), 'patch').setBody(paypal_payment));
    }
  }, {
    key: "deletePaypalPayment",
    value: function deletePaypalPayment(id) {
      return request(client.newRequest("/api/paypal_payments/".concat(id), 'delete'));
    } // Price List

  }, {
    key: "listPriceLists",
    value: function listPriceLists(filter, options) {
      return request(client.newRequest('/api/price_lists').setParams(filter).setOptions(options));
    }
  }, {
    key: "allPriceLists",
    value: function allPriceLists(filter, options) {
      return all(this.listPriceLists, filter, options);
    }
  }, {
    key: "retrievePriceList",
    value: function retrievePriceList(id, filter, options) {
      return request(client.newRequest("/api/price_lists/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createPriceList",
    value: function createPriceList(price_list) {
      return request(client.newRequest('/api/price_lists', 'post').setBody(price_list));
    }
  }, {
    key: "updatePriceList",
    value: function updatePriceList(id, price_list) {
      return request(client.newRequest("/api/price_lists/".concat(id), 'patch').setBody(price_list));
    }
  }, {
    key: "deletePriceList",
    value: function deletePriceList(id) {
      return request(client.newRequest("/api/price_lists/".concat(id), 'delete'));
    } // Price

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
    }
  }, {
    key: "createPrice",
    value: function createPrice(price) {
      return request(client.newRequest('/api/prices', 'post').setBody(price));
    }
  }, {
    key: "updatePrice",
    value: function updatePrice(id, price) {
      return request(client.newRequest("/api/prices/".concat(id), 'patch').setBody(price));
    }
  }, {
    key: "deletePrice",
    value: function deletePrice(id) {
      return request(client.newRequest("/api/prices/".concat(id), 'delete'));
    } // Shipment

  }, {
    key: "listShipments",
    value: function listShipments(filter, options) {
      return request(client.newRequest('/api/shipments').setParams(filter).setOptions(options));
    }
  }, {
    key: "allShipments",
    value: function allShipments(filter, options) {
      return all(this.listShipments, filter, options);
    }
  }, {
    key: "retrieveShipment",
    value: function retrieveShipment(id, filter, options) {
      return request(client.newRequest("/api/shipments/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShipment",
    value: function createShipment(shipment) {
      return request(client.newRequest('/api/shipments', 'post').setBody(shipment));
    }
  }, {
    key: "updateShipment",
    value: function updateShipment(id, shipment) {
      return request(client.newRequest("/api/shipments/".concat(id), 'patch').setBody(shipment));
    }
  }, {
    key: "deleteShipment",
    value: function deleteShipment(id) {
      return request(client.newRequest("/api/shipments/".concat(id), 'delete'));
    } // Shipping Category

  }, {
    key: "listShippingCategories",
    value: function listShippingCategories(filter, options) {
      return request(client.newRequest('/api/shipping_categories').setParams(filter).setOptions(options));
    }
  }, {
    key: "allShippingCategories",
    value: function allShippingCategories(filter, options) {
      return all(this.listShippingCategories, filter, options);
    }
  }, {
    key: "retrieveShippingCategory",
    value: function retrieveShippingCategory(id, filter, options) {
      return request(client.newRequest("/api/shipping_categories/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShippingCategory",
    value: function createShippingCategory(shipping_category) {
      return request(client.newRequest('/api/shipping_categories', 'post').setBody(shipping_category));
    }
  }, {
    key: "updateShippingCategory",
    value: function updateShippingCategory(id, shipping_category) {
      return request(client.newRequest("/api/shipping_categories/".concat(id), 'patch').setBody(shipping_category));
    }
  }, {
    key: "deleteShippingCategory",
    value: function deleteShippingCategory(id) {
      return request(client.newRequest("/api/shipping_categories/".concat(id), 'delete'));
    } // Shipping Method

  }, {
    key: "listShippingMethods",
    value: function listShippingMethods(filter, options) {
      return request(client.newRequest('/api/shipping_methods').setParams(filter).setOptions(options));
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
    }
  }, {
    key: "createShippingMethod",
    value: function createShippingMethod(shipping_method) {
      return request(client.newRequest('/api/shipping_methods', 'post').setBody(shipping_method));
    }
  }, {
    key: "updateShippingMethod",
    value: function updateShippingMethod(id, shipping_method) {
      return request(client.newRequest("/api/shipping_methods/".concat(id), 'patch').setBody(shipping_method));
    }
  }, {
    key: "deleteShippingMethod",
    value: function deleteShippingMethod(id) {
      return request(client.newRequest("/api/shipping_methods/".concat(id), 'delete'));
    } // Shipping Zone

  }, {
    key: "listShippingZones",
    value: function listShippingZones(filter, options) {
      return request(client.newRequest('/api/shipping_zones').setParams(filter).setOptions(options));
    }
  }, {
    key: "allShippingZones",
    value: function allShippingZones(filter, options) {
      return all(this.listShippingZones, filter, options);
    }
  }, {
    key: "retrieveShippingZone",
    value: function retrieveShippingZone(id, filter, options) {
      return request(client.newRequest("/api/shipping_zones/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createShippingZone",
    value: function createShippingZone(shipping_zone) {
      return request(client.newRequest('/api/shipping_zones', 'post').setBody(shipping_zone));
    }
  }, {
    key: "updateShippingZone",
    value: function updateShippingZone(id, shipping_zone) {
      return request(client.newRequest("/api/shipping_zones/".concat(id), 'patch').setBody(shipping_zone));
    }
  }, {
    key: "deleteShippingZone",
    value: function deleteShippingZone(id) {
      return request(client.newRequest("/api/shipping_zones/".concat(id), 'delete'));
    } // Sku Option

  }, {
    key: "listSkuOptions",
    value: function listSkuOptions(filter, options) {
      return request(client.newRequest('/api/sku_options').setParams(filter).setOptions(options));
    }
  }, {
    key: "allSkuOptions",
    value: function allSkuOptions(filter, options) {
      return all(this.listSkuOptions, filter, options);
    }
  }, {
    key: "retrieveSkuOption",
    value: function retrieveSkuOption(id, filter, options) {
      return request(client.newRequest("/api/sku_options/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createSkuOption",
    value: function createSkuOption(sku_option) {
      return request(client.newRequest('/api/sku_options', 'post').setBody(sku_option));
    }
  }, {
    key: "updateSkuOption",
    value: function updateSkuOption(id, sku_option) {
      return request(client.newRequest("/api/sku_options/".concat(id), 'patch').setBody(sku_option));
    }
  }, {
    key: "deleteSkuOption",
    value: function deleteSkuOption(id) {
      return request(client.newRequest("/api/sku_options/".concat(id), 'delete'));
    } // Sku

  }, {
    key: "listSkus",
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
    }
  }, {
    key: "createSku",
    value: function createSku(sku) {
      return request(client.newRequest('/api/skus', 'post').setBody(sku));
    }
  }, {
    key: "updateSku",
    value: function updateSku(id, sku) {
      return request(client.newRequest("/api/skus/".concat(id), 'patch').setBody(sku));
    }
  }, {
    key: "deleteSku",
    value: function deleteSku(id) {
      return request(client.newRequest("/api/skus/".concat(id), 'delete'));
    } // Stock Item

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
    }
  }, {
    key: "createStockItem",
    value: function createStockItem(stock_item) {
      return request(client.newRequest('/api/stock_items', 'post').setBody(stock_item));
    }
  }, {
    key: "updateStockItem",
    value: function updateStockItem(id, stock_item) {
      return request(client.newRequest("/api/stock_items/".concat(id), 'patch').setBody(stock_item));
    }
  }, {
    key: "deleteStockItem",
    value: function deleteStockItem(id) {
      return request(client.newRequest("/api/stock_items/".concat(id), 'delete'));
    } // Stock Level

  }, {
    key: "listStockLevels",
    value: function listStockLevels(filter, options) {
      return request(client.newRequest('/api/stock_levels').setParams(filter).setOptions(options));
    }
  }, {
    key: "allStockLevels",
    value: function allStockLevels(filter, options) {
      return all(this.listStockLevels, filter, options);
    }
  }, {
    key: "retrieveStockLevel",
    value: function retrieveStockLevel(id, filter, options) {
      return request(client.newRequest("/api/stock_levels/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createStockLevel",
    value: function createStockLevel(stock_level) {
      return request(client.newRequest('/api/stock_levels', 'post').setBody(stock_level));
    }
  }, {
    key: "updateStockLevel",
    value: function updateStockLevel(id, stock_level) {
      return request(client.newRequest("/api/stock_levels/".concat(id), 'patch').setBody(stock_level));
    }
  }, {
    key: "deleteStockLevel",
    value: function deleteStockLevel(id) {
      return request(client.newRequest("/api/stock_levels/".concat(id), 'delete'));
    } // Stock Location

  }, {
    key: "listStockLocations",
    value: function listStockLocations(filter, options) {
      return request(client.newRequest('/api/stock_locations').setParams(filter).setOptions(options));
    }
  }, {
    key: "allStockLocations",
    value: function allStockLocations(filter, options) {
      return all(this.listStockLocations, filter, options);
    }
  }, {
    key: "retrieveStockLocation",
    value: function retrieveStockLocation(id, filter, options) {
      return request(client.newRequest("/api/stock_locations/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createStockLocation",
    value: function createStockLocation(stock_location) {
      return request(client.newRequest('/api/stock_locations', 'post').setBody(stock_location));
    }
  }, {
    key: "updateStockLocation",
    value: function updateStockLocation(id, stock_location) {
      return request(client.newRequest("/api/stock_locations/".concat(id), 'patch').setBody(stock_location));
    }
  }, {
    key: "deleteStockLocation",
    value: function deleteStockLocation(id) {
      return request(client.newRequest("/api/stock_locations/".concat(id), 'delete'));
    } // Webhook

  }, {
    key: "listWebhooks",
    value: function listWebhooks(filter, options) {
      return request(client.newRequest('/api/webhooks').setParams(filter).setOptions(options));
    }
  }, {
    key: "allWebhooks",
    value: function allWebhooks(filter, options) {
      return all(this.listWebhooks, filter, options);
    }
  }, {
    key: "retrieveWebhook",
    value: function retrieveWebhook(id, filter, options) {
      return request(client.newRequest("/api/webhooks/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createWebhook",
    value: function createWebhook(webhook) {
      return request(client.newRequest('/api/webhooks', 'post').setBody(webhook));
    }
  }, {
    key: "updateWebhook",
    value: function updateWebhook(id, webhook) {
      return request(client.newRequest("/api/webhooks/".concat(id), 'patch').setBody(webhook));
    }
  }, {
    key: "deleteWebhook",
    value: function deleteWebhook(id) {
      return request(client.newRequest("/api/webhooks/".concat(id), 'delete'));
    } // Wire Transfer

  }, {
    key: "listWireTransfers",
    value: function listWireTransfers(filter, options) {
      return request(client.newRequest('/api/wire_transfers').setParams(filter).setOptions(options));
    }
  }, {
    key: "allWireTransfers",
    value: function allWireTransfers(filter, options) {
      return all(this.listWireTransfers, filter, options);
    }
  }, {
    key: "retrieveWireTransfer",
    value: function retrieveWireTransfer(id, filter, options) {
      return request(client.newRequest("/api/wire_transfers/".concat(id)).setParams(filter).setOptions(options));
    }
  }, {
    key: "createWireTransfer",
    value: function createWireTransfer(wire_transfer) {
      return request(client.newRequest('/api/wire_transfers', 'post').setBody(wire_transfer));
    }
  }, {
    key: "updateWireTransfer",
    value: function updateWireTransfer(id, wire_transfer) {
      return request(client.newRequest("/api/wire_transfers/".concat(id), 'patch').setBody(wire_transfer));
    }
  }, {
    key: "deleteWireTransfer",
    value: function deleteWireTransfer(id) {
      return request(client.newRequest("/api/wire_transfers/".concat(id), 'delete'));
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
    return api.client.call(apiRequest).then(function (apiResponse) {
      return response(apiResponse, apiRequest.response_type);
    }).catch(function (error) {
      if (!error.response) return error;else if (error.response.data && error.response.data.errors) {
        var api_error = error.response.data.errors[0];
        return Promise.reject(newError(api_error.status, api_error.title, api_error.detail, api_error.code));
      } else return Promise.reject(newError(error.response.status, error.response.statusText));
    });
  }
}

function response(apiResponse, response_type) {
  if (response_type == undefined) return apiResponse;else switch (response_type) {
    case 'model':
      throw 'Deserialization to model not supported';

    case 'normalized':
      return jsonapi.normalize(apiResponse.data);

    case 'jsonapi':
      return apiResponse.data;

    case 'raw':
      return apiResponse;

    default:
      throw "Unsupported response_type: '" + apiRequest.response_type + "'";
  }
}

function data(res) {
  if (res.isApiResource && res.isApiResource() === true) return res;else if (res.dataset) return res.dataset.data;else if (res.data) return res.data.data ? res.data.data : res.data;else return res;
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
        response_type,
        firstPage,
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
            setPage(filter); // Save original option and forxe response_type to 'raw'

            response_type = options.response_type;
            options.response_type = 'raw';
            _context.next = 10;
            return listFunction(filter, options);

          case 10:
            firstPage = _context.sent;
            max_page = firstPage.data.meta.page_count;
            page_size = firstPage.data.data.length;
            pages = new Array(max_page);
            pages[0] = response(firstPage, response_type); // Standard listFunction response

            if (!(max_page == 1)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", pages[0]);

          case 17:
            for (pn = 1; pn < max_page; pn++) {
              setPage(filter, page_size, pn + 1);
              pages[pn] = listFunction(filter, options);
            } // Set original option


            options.response_type = response_type;
            out = [];
            _context.next = 22;
            return Promise.all(pages);

          case 22:
            _context.t0 = function (p) {
              out = out.concat(data(response(p, response_type)));
            };

            _context.sent.forEach(_context.t0);

            return _context.abrupt("return", out);

          case 25:
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

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AuthorizationCode).call(this, cfg.client_id, cfg.scope, cfg.client_secret));
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

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Password).call(this, cfg.client_id, cfg.scope, cfg.client_secret));
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

  _createClass(RefreskToken, [{
    key: "refreshToken",
    value: function refreshToken(token) {
      this.refresh_token = token;
      return this;
    }
  }]);

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


module.exports = api.clapi; // Expose SDK configuration

module.exports.settings = config.sdk; // Probe function

module.exports.hey = function () {
  return 'Hello!';
}; // SDK initialization


module.exports.initialize = function (cfg) {
  if (cfg != undefined) cfg.default = false;
  api.initialize(utils.mergeMaps(config.clayer, cfg));
};

module.exports.lastAccessToken = function () {
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
      this.response_type = sdk.response_type;
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
      } // Only really available options are being setted

    }, {
      key: "setOptions",
      value: function setOptions(options) {
        if (options == undefined) return this;
        this.responseType(options.response_type);
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
        return auth.authenticate(new auth.ClientCredentials(this.config.client_id).marketScope(this.config.market_id).clientSecret(this.config.client_secret)).then(function (token) {
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
    // trace client input/output to console
    auth_attempts: 1,
    // number of attempts of authentication
    response_type: 'normalized',
    // Response format, possible values are: normalized | jsonapi | model | raw
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

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");

var model = __webpack_require__(/*! ./model */ "./lib/model.js");

module.exports.serialize = function (body) {
  if (body == undefined) return body; // No data = Plain Object or Api Resource
  else return body.data == undefined ? new JsonApiResource(body).serialize() : body;
};

module.exports.deserialize = function (japi) {
  if (japi == undefined) return japi;else return japi.data == undefined ? japi : new JsonApiResource(japi).deserialize();
};

module.exports.normalize = function (data) {
  return normalize(data);
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
      this.data.attributes = {}; // TODO: portare id e type in testa ad ogni object

      Object.keys(this.resource).forEach(function (key) {
        var field = _this.resource[key];

        if (field != undefined) {
          if (['id', 'type'].includes(key)) _this.data[key] = field;else if (field.isApiResource && field.isApiResource()) {
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

      if (this.resource.data == undefined && this.resource.isApiResource && this.resource.isApiResource() === true) return this.resource;
      var data = this.resource.data;
      var res = model.helper.newResource(data.type, data.id, data.attributes);
      if (data.relationships == undefined) return res;else Object.keys(data.relationships).forEach(function (rel) {
        var rel_data = data.relationships[rel].data;

        if (rel_data != undefined) {
          if (Array.isArray(rel_data)) {
            utils.log('Array Resource relationships not supported: ' + rel);
          } else {
            var relRes = model.helper.newResource(rel_data.type, rel_data.id);
            res.setResource(rel, relRes);
            var inc = jsonapiIncluded(_this2.resource, rel_data.type, rel_data.id);
            relRes.setFields(inc.attributes);
          }
        }
      });
      return res;
    }
  }]);

  return JsonApiResource;
}();

function jsonapiIncluded(data, type, id) {
  if (data == undefined || data.included == undefined) return undefined;
  var incRes = undefined;
  data.included.forEach(function (inc) {
    if (inc.type == type && inc.id == id) incRes = inc;
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

// File automatically generated at 15/02/2019 12:06:43 by commercelayer-js-sdk-codegen
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
}(Resource); // Customer Password Reset resource


var CustomerPasswordReset =
/*#__PURE__*/
function (_Resource4) {
  _inherits(CustomerPasswordReset, _Resource4);

  _createClass(CustomerPasswordReset, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_password_resets';
    }
  }]);

  function CustomerPasswordReset(id) {
    var _this4;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerPasswordReset);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerPasswordReset).call(this, id, CustomerPasswordReset.TYPE));
    _this4.customer_email = fields.customer_email;
    _this4.customer_password = fields.customer_password;
    _this4._reset_password_token = fields._reset_password_token;
    return _this4;
  } // Relationships


  return CustomerPasswordReset;
}(Resource); // Customer Payment Source resource


var CustomerPaymentSource =
/*#__PURE__*/
function (_Resource5) {
  _inherits(CustomerPaymentSource, _Resource5);

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
function (_Resource6) {
  _inherits(CustomerSubscription, _Resource6);

  _createClass(CustomerSubscription, null, [{
    key: "TYPE",
    get: function get() {
      return 'customer_subscriptions';
    }
  }]);

  function CustomerSubscription(id) {
    var _this5;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CustomerSubscription);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CustomerSubscription).call(this, id, CustomerSubscription.TYPE));
    _this5.customer_email = fields.customer_email;
    return _this5;
  } // Relationships


  return CustomerSubscription;
}(Resource); // Customer resource


var Customer =
/*#__PURE__*/
function (_Resource7) {
  _inherits(Customer, _Resource7);

  _createClass(Customer, null, [{
    key: "TYPE",
    get: function get() {
      return 'customers';
    }
  }]);

  function Customer(id) {
    var _this6;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Customer);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Customer).call(this, id, Customer.TYPE));
    _this6.email = fields.email;
    _this6.password = fields.password;
    return _this6;
  } // Relationships


  return Customer;
}(Resource); // Delivery Lead Time resource


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
    var _this7;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DeliveryLeadTime);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(DeliveryLeadTime).call(this, id, DeliveryLeadTime.TYPE));
    _this7.min_hours = fields.min_hours;
    _this7.max_hours = fields.max_hours;
    return _this7;
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
}(Resource); // Inventory Model resource


var InventoryModel =
/*#__PURE__*/
function (_Resource9) {
  _inherits(InventoryModel, _Resource9);

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
  } // Relationships


  return InventoryModel;
}(Resource); // Line Item Option resource


var LineItemOption =
/*#__PURE__*/
function (_Resource10) {
  _inherits(LineItemOption, _Resource10);

  _createClass(LineItemOption, null, [{
    key: "TYPE",
    get: function get() {
      return 'line_item_options';
    }
  }]);

  function LineItemOption(id) {
    var _this9;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LineItemOption);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(LineItemOption).call(this, id, LineItemOption.TYPE));
    _this9.name = fields.name;
    _this9.quantity = fields.quantity;
    _this9.options = fields.options;
    return _this9;
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
function (_Resource11) {
  _inherits(LineItem, _Resource11);

  _createClass(LineItem, null, [{
    key: "TYPE",
    get: function get() {
      return 'line_items';
    }
  }]);

  function LineItem(id) {
    var _this10;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LineItem);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(LineItem).call(this, id, LineItem.TYPE));
    _this10.sku_code = fields.sku_code;
    _this10.quantity = fields.quantity;
    _this10._update_quantity = fields._update_quantity;
    _this10.name = fields.name;
    _this10.image_url = fields.image_url;
    return _this10;
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
function (_Resource12) {
  _inherits(Market, _Resource12);

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
function (_Resource13) {
  _inherits(Merchant, _Resource13);

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
function (_Resource14) {
  _inherits(Order, _Resource14);

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
    _this13._place = fields._place;
    _this13._cancel = fields._cancel;
    _this13._approve = fields._approve;
    _this13._update_taxes = fields._update_taxes;
    _this13._billing_address_clone_id = fields._billing_address_clone_id;
    _this13._shipping_address_clone_id = fields._shipping_address_clone_id;
    _this13._customer_payment_source_id = fields._customer_payment_source_id;
    _this13._shipping_address_same_as_billing = fields._shipping_address_same_as_billing;
    _this13._billing_address_same_as_shipping = fields._billing_address_same_as_shipping;
    _this13._save_payment_source_to_customer_wallet = fields._save_payment_source_to_customer_wallet;
    _this13._save_shipping_address_to_customer_address_book = fields._save_shipping_address_to_customer_address_book;
    _this13._save_billing_address_to_customer_address_book = fields._save_billing_address_to_customer_address_book;
    _this13._refresh = fields._refresh;
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
function (_Resource15) {
  _inherits(Parcel, _Resource15);

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
}(Resource); // Payment Method resource


var PaymentMethod =
/*#__PURE__*/
function (_Resource16) {
  _inherits(PaymentMethod, _Resource16);

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
}(Resource); // Paypal Payment resource


var PaypalPayment =
/*#__PURE__*/
function (_Resource17) {
  _inherits(PaypalPayment, _Resource17);

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
    _this16.paypal_payer_id = fields.paypal_payer_id;
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
}(Resource); // Price List resource


var PriceList =
/*#__PURE__*/
function (_Resource18) {
  _inherits(PriceList, _Resource18);

  _createClass(PriceList, null, [{
    key: "TYPE",
    get: function get() {
      return 'price_lists';
    }
  }]);

  function PriceList(id) {
    var _this17;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PriceList);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(PriceList).call(this, id, PriceList.TYPE));
    _this17.name = fields.name;
    _this17.currency_code = fields.currency_code;
    _this17.tax_included = fields.tax_included;
    return _this17;
  } // Relationships


  return PriceList;
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
    var _this18;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Price);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Price).call(this, id, Price.TYPE));
    _this18.sku_code = fields.sku_code;
    _this18.amount_cents = fields.amount_cents;
    _this18.compare_at_amount_cents = fields.compare_at_amount_cents;
    return _this18;
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
function (_Resource20) {
  _inherits(Shipment, _Resource20);

  _createClass(Shipment, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipments';
    }
  }]);

  function Shipment(id) {
    var _this19;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Shipment);

    _this19 = _possibleConstructorReturn(this, _getPrototypeOf(Shipment).call(this, id, Shipment.TYPE));
    _this19._on_hold = fields._on_hold;
    _this19._picking = fields._picking;
    _this19._packing = fields._packing;
    _this19._ready_to_ship = fields._ready_to_ship;
    _this19._ship = fields._ship;
    _this19._get_rates = fields._get_rates;
    _this19.selected_rate_id = fields.selected_rate_id;
    _this19._purchase = fields._purchase;
    return _this19;
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
function (_Resource21) {
  _inherits(ShippingCategory, _Resource21);

  _createClass(ShippingCategory, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_categories';
    }
  }]);

  function ShippingCategory(id) {
    var _this20;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingCategory);

    _this20 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingCategory).call(this, id, ShippingCategory.TYPE));
    _this20.name = fields.name;
    return _this20;
  } // Relationships


  return ShippingCategory;
}(Resource); // Shipping Method resource


var ShippingMethod =
/*#__PURE__*/
function (_Resource22) {
  _inherits(ShippingMethod, _Resource22);

  _createClass(ShippingMethod, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_methods';
    }
  }]);

  function ShippingMethod(id) {
    var _this21;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingMethod);

    _this21 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingMethod).call(this, id, ShippingMethod.TYPE));
    _this21.name = fields.name;
    _this21.price_amount_cents = fields.price_amount_cents;
    _this21.free_over_amount_cents = fields.free_over_amount_cents;
    return _this21;
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
function (_Resource23) {
  _inherits(ShippingZone, _Resource23);

  _createClass(ShippingZone, null, [{
    key: "TYPE",
    get: function get() {
      return 'shipping_zones';
    }
  }]);

  function ShippingZone(id) {
    var _this22;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ShippingZone);

    _this22 = _possibleConstructorReturn(this, _getPrototypeOf(ShippingZone).call(this, id, ShippingZone.TYPE));
    _this22.name = fields.name;
    _this22.country_code_regex = fields.country_code_regex;
    _this22.not_country_code_regex = fields.not_country_code_regex;
    _this22.state_code_regex = fields.state_code_regex;
    _this22.not_state_code_regex = fields.not_state_code_regex;
    _this22.zip_code_regex = fields.zip_code_regex;
    _this22.not_zip_code_regex = fields.not_zip_code_regex;
    return _this22;
  } // Relationships


  return ShippingZone;
}(Resource); // Sku Option resource


var SkuOption =
/*#__PURE__*/
function (_Resource24) {
  _inherits(SkuOption, _Resource24);

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
    var _this24;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sku);

    _this24 = _possibleConstructorReturn(this, _getPrototypeOf(Sku).call(this, id, Sku.TYPE));
    _this24.code = fields.code;
    _this24.name = fields.name;
    _this24.description = fields.description;
    _this24.image_url = fields.image_url;
    _this24.tag_names = fields.tag_names;
    _this24.pieces_per_pack = fields.pieces_per_pack;
    _this24.weight = fields.weight;
    _this24.unit_of_weight = fields.unit_of_weight;
    return _this24;
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
function (_Resource26) {
  _inherits(StockItem, _Resource26);

  _createClass(StockItem, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_items';
    }
  }]);

  function StockItem(id) {
    var _this25;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockItem);

    _this25 = _possibleConstructorReturn(this, _getPrototypeOf(StockItem).call(this, id, StockItem.TYPE));
    _this25.sku_code = fields.sku_code;
    _this25.quantity = fields.quantity;
    return _this25;
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
function (_Resource27) {
  _inherits(StockLevel, _Resource27);

  _createClass(StockLevel, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_levels';
    }
  }]);

  function StockLevel(id) {
    var _this26;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockLevel);

    _this26 = _possibleConstructorReturn(this, _getPrototypeOf(StockLevel).call(this, id, StockLevel.TYPE));
    _this26.priority = fields.priority;
    _this26.on_hold = fields.on_hold;
    return _this26;
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
function (_Resource28) {
  _inherits(StockLocation, _Resource28);

  _createClass(StockLocation, null, [{
    key: "TYPE",
    get: function get() {
      return 'stock_locations';
    }
  }]);

  function StockLocation(id) {
    var _this27;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, StockLocation);

    _this27 = _possibleConstructorReturn(this, _getPrototypeOf(StockLocation).call(this, id, StockLocation.TYPE));
    _this27.name = fields.name;
    _this27.label_format = fields.label_format;
    return _this27;
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
function (_Resource29) {
  _inherits(Webhook, _Resource29);

  _createClass(Webhook, null, [{
    key: "TYPE",
    get: function get() {
      return 'webhooks';
    }
  }]);

  function Webhook(id) {
    var _this28;

    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Webhook);

    _this28 = _possibleConstructorReturn(this, _getPrototypeOf(Webhook).call(this, id, Webhook.TYPE));
    _this28.topic = fields.topic;
    _this28.callback_url = fields.callback_url;
    _this28.include_resources = fields.include_resources;
    return _this28;
  } // Relationships


  return Webhook;
}(Resource); // Wire Transfer resource


var WireTransfer =
/*#__PURE__*/
function (_Resource30) {
  _inherits(WireTransfer, _Resource30);

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
  CustomerPasswordReset: CustomerPasswordReset,
  CustomerPaymentSource: CustomerPaymentSource,
  CustomerSubscription: CustomerSubscription,
  Customer: Customer,
  DeliveryLeadTime: DeliveryLeadTime,
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
module.exports.helper = {};

module.exports.helper.newResource = function (type, id, fields) {
  var instance = undefined;
  var model = module.exports;
  Object.keys(model).forEach(function (cl) {
    if (!cl.startsWith('helper')) {
      var cl_type = model[cl].TYPE;

      if (cl_type && cl_type == type) {
        instance = new model[cl](id, fields);
      }
    }
  });
  return instance;
};

module.exports.helper.isApiResource = function (res) {
  return res && res.isApiResource && res.isApiResource() === true;
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
    key: "filters",
    value: function filters(_filters) {
      var _this = this;

      if (_filters != undefined) Object.keys(_filters).forEach(function (filter) {
        _this.filter(filter, _filters[filter]);
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
      var _this2 = this;

      if (_params != undefined) Object.keys(_params).forEach(function (key) {
        _this2.param(key, _params[key]);
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
      var _this3 = this;

      var qsMap = {}; // Filter Fields

      if (Object.keys(this.filter_fields).length > 0) Object.keys(this.filter_fields).forEach(function (filter) {
        qsMap["filter[".concat(filter, "]")] = _this3.filter_fields[filter];
      }); // Included Resources

      if (Object.keys(this.included_resources).length > 0) qsMap.include = this.included_resources.join(','); // Sparse Fieldsets

      if (Object.keys(this.sparse_fieldsets).length > 0) Object.keys(this.sparse_fieldsets).forEach(function (res) {
        qsMap["fields[".concat(res, "]")] = _this3.sparse_fieldsets[res].join(',');
      }); // Sort Fields

      if (Object.keys(this.sort_fields).length > 0) qsMap.sort = this.sort_fields.join(','); // Custom Params

      if (Object.keys(this.custom_params).length > 0) Object.keys(this.custom_params).forEach(function (key) {
        qsMap[key] = _this3.custom_params[key];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9qc29uYXBpLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbG9nLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvanNvbi1hcGktbm9ybWFsaXplL3NyYy9qc29uQXBpTm9ybWFsaXplLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwibW9kZWwiLCJxdWVyeSIsImNsaWVudCIsInV0aWxzIiwianNvbmFwaSIsIkNMQXBpIiwiZmlsdGVyIiwib3B0aW9ucyIsInJlcXVlc3QiLCJuZXdSZXF1ZXN0Iiwic2V0UGFyYW1zIiwic2V0T3B0aW9ucyIsImFsbCIsImxpc3RBZGRyZXNzZXMiLCJpZCIsImFkZHJlc3MiLCJzZXRCb2R5IiwibGlzdENyZWRpdENhcmRzIiwiY3JlZGl0X2NhcmQiLCJsaXN0Q3VzdG9tZXJBZGRyZXNzZXMiLCJjdXN0b21lcl9hZGRyZXNzIiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXNzd29yZF9yZXNldCIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UiLCJsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVycyIsImN1c3RvbWVyIiwibGlzdERlbGl2ZXJ5TGVhZFRpbWVzIiwiZGVsaXZlcnlfbGVhZF90aW1lIiwibGlzdEludmVudG9yeU1vZGVscyIsImludmVudG9yeV9tb2RlbCIsImxpc3RMaW5lSXRlbU9wdGlvbnMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtcyIsImxpbmVfaXRlbSIsImxpc3RNYXJrZXRzIiwibWFya2V0IiwibGlzdE1lcmNoYW50cyIsIm1lcmNoYW50IiwibGlzdE9yZGVycyIsIm9yZGVyIiwibGlzdFBhcmNlbHMiLCJwYXJjZWwiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXltZW50X21ldGhvZCIsImxpc3RQYXlwYWxQYXltZW50cyIsInBheXBhbF9wYXltZW50IiwibGlzdFByaWNlTGlzdHMiLCJwcmljZV9saXN0IiwibGlzdFByaWNlcyIsInByaWNlIiwibGlzdFNoaXBtZW50cyIsInNoaXBtZW50IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nTWV0aG9kcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ1pvbmVzIiwic2hpcHBpbmdfem9uZSIsImxpc3RTa3VPcHRpb25zIiwic2t1X29wdGlvbiIsImxpc3RTa3VzIiwic2t1IiwibGlzdFN0b2NrSXRlbXMiLCJzdG9ja19pdGVtIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbGV2ZWwiLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJzdG9ja19sb2NhdGlvbiIsImxpc3RXZWJob29rcyIsIndlYmhvb2siLCJsaXN0V2lyZVRyYW5zZmVycyIsIndpcmVfdHJhbnNmZXIiLCJhcGkiLCJjbGFwaSIsImluaXRpYWxpemUiLCJjZmciLCJsb2ciLCJuZXdJbnN0YW5jZSIsImFwaVJlcXVlc3QiLCJjb3JyZWxhdGlvbl9pZCIsImF0dGVtcHQiLCJwYXRoIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlamVjdCIsIm5ld0Vycm9yIiwiYm9keSIsInNlcmlhbGl6ZSIsImNhbGwiLCJ0aGVuIiwiYXBpUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlX3R5cGUiLCJjYXRjaCIsImVycm9yIiwiZGF0YSIsImVycm9ycyIsImFwaV9lcnJvciIsInN0YXR1cyIsInRpdGxlIiwiZGV0YWlsIiwiY29kZSIsInN0YXR1c1RleHQiLCJub3JtYWxpemUiLCJyZXMiLCJpc0FwaVJlc291cmNlIiwiZGF0YXNldCIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsImxpc3RGdW5jdGlvbiIsInNldFBhZ2UiLCJzaXplIiwicGFnZV9zaXplIiwibnVtYmVyIiwiaXNRdWVyeUZpbHRlciIsInBhZ2UiLCJuYW1lIiwic3RhcnRzV2l0aCIsImZpcnN0UGFnZSIsIm1heF9wYWdlIiwibWV0YSIsInBhZ2VfY291bnQiLCJsZW5ndGgiLCJwYWdlcyIsIkFycmF5IiwicG4iLCJvdXQiLCJwIiwiY29uY2F0IiwiZm9yRWFjaCIsImF4aW9zIiwiQVVUSF9UT0tFTlMiLCJBdXRoIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJ2YWx1ZSIsIkNsaWVudENyZWRlbnRpYWxzIiwic2NvcGUiLCJBdXRob3JpemF0aW9uQ29kZSIsInJlZGlyZWN0X3VyaSIsInVyaSIsIlBhc3N3b3JkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlJlZnJlc2tUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJ0b2tlbiIsIkFwaVRva2VuIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIm93bmVyX3R5cGUiLCJvd25lcl9pZCIsImNyZWF0ZWRfYXQiLCJleHBpcmVzX2luIiwiYXV0aGVudGljYXRlIiwiYXV0aCIsInBvc3QiLCJjYWNoZVRva2VuIiwiZ2V0VG9rZW4iLCJjb25maWciLCJzZXR0aW5ncyIsInNkayIsImhleSIsImRlZmF1bHQiLCJtZXJnZU1hcHMiLCJjbGF5ZXIiLCJsYXN0QWNjZXNzVG9rZW4iLCJjaGVja0FwaUNvbmZpZyIsImJhc2VfdXJsIiwibWFya2V0X2lkIiwic2V0QXhpb3NDb25maWciLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGVidWciLCJ0cmFjZSIsImludGVyY2VwdG9ycyIsInVzZSIsIkFwaUNsaWVudCIsIm1ldGhvZCIsIkFwaVJlcXVlc3QiLCJwYXJhbXMiLCJndWlkIiwiYnVpbGQiLCJ0eXBlIiwicmVzcG9uc2VUeXBlIiwicmF3IiwiYXV0aF9hdHRlbXB0cyIsIm1hcmtldFNjb3BlIiwiY2xpZW50U2VjcmV0IiwibXNnIiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIkpzb25BcGlSZXNvdXJjZSIsImRlc2VyaWFsaXplIiwiamFwaSIsInJlc291cmNlIiwiYXR0cmlidXRlcyIsImZpZWxkIiwiaW5jbHVkZXMiLCJyZWxhdGlvbnNoaXBzIiwic3Vic3RyIiwiaXNBcnJheSIsInJlbCIsImhlbHBlciIsIm5ld1Jlc291cmNlIiwicmVsX2RhdGEiLCJyZWxSZXMiLCJzZXRSZXNvdXJjZSIsImluYyIsImpzb25hcGlJbmNsdWRlZCIsInNldEZpZWxkcyIsImluY2x1ZGVkIiwiaW5jUmVzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInByb2JlIiwiZW5hYmxlZCIsIlJlc291cmNlIiwicmVmZXJlbmNlIiwibWV0YWRhdGEiLCJ1cGRhdGVkX2F0IiwiZmllbGRzIiwiQWRkcmVzcyIsIlRZUEUiLCJidXNpbmVzcyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb21wYW55IiwibGluZV8xIiwibGluZV8yIiwiY2l0eSIsInppcF9jb2RlIiwic3RhdGVfY29kZSIsInBob25lIiwiZW1haWwiLCJub3RlcyIsImxhdCIsImxuZyIsImJpbGxpbmdfaW5mbyIsIkNyZWRpdENhcmQiLCJtb250aCIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJDdXN0b21lckFkZHJlc3MiLCJDdXN0b21lclBhc3N3b3JkUmVzZXQiLCJjdXN0b21lcl9lbWFpbCIsImN1c3RvbWVyX3Bhc3N3b3JkIiwiX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuIiwiQ3VzdG9tZXJQYXltZW50U291cmNlIiwiQ3VzdG9tZXJTdWJzY3JpcHRpb24iLCJDdXN0b21lciIsIkRlbGl2ZXJ5TGVhZFRpbWUiLCJtaW5faG91cnMiLCJtYXhfaG91cnMiLCJJbnZlbnRvcnlNb2RlbCIsIkxpbmVJdGVtT3B0aW9uIiwicXVhbnRpdHkiLCJMaW5lSXRlbSIsInNrdV9jb2RlIiwiX3VwZGF0ZV9xdWFudGl0eSIsImltYWdlX3VybCIsIk1hcmtldCIsIk1lcmNoYW50IiwiT3JkZXIiLCJndWVzdCIsInNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrIiwiY291cG9uX2NvZGUiLCJjYXJ0X3VybCIsInJldHVybl91cmwiLCJ0ZXJtc191cmwiLCJwcml2YWN5X3VybCIsIl9wbGFjZSIsIl9jYW5jZWwiLCJfYXBwcm92ZSIsIl91cGRhdGVfdGF4ZXMiLCJfYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmciLCJfYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmciLCJfc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQiLCJfc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfcmVmcmVzaCIsIlBhcmNlbCIsIndlaWdodCIsInVuaXRfb2Zfd2VpZ2h0IiwiZWVsX3BmYyIsImNvbnRlbnRzX3R5cGUiLCJjb250ZW50c19leHBsYW5hdGlvbiIsImN1c3RvbXNfY2VydGlmeSIsImN1c3RvbXNfc2lnbmVyIiwibm9uX2RlbGl2ZXJ5X29wdGlvbiIsInJlc3RyaWN0aW9uX3R5cGUiLCJyZXN0cmljdGlvbl9jb21tZW50cyIsImN1c3RvbXNfaW5mb19yZXF1aXJlZCIsIlBheW1lbnRNZXRob2QiLCJwYXltZW50X3NvdXJjZV90eXBlIiwicHJpY2VfYW1vdW50X2NlbnRzIiwiUGF5cGFsUGF5bWVudCIsImNhbmNlbF91cmwiLCJub3RlX3RvX3BheWVyIiwicGF5cGFsX3BheWVyX2lkIiwiUHJpY2VMaXN0IiwiY3VycmVuY3lfY29kZSIsInRheF9pbmNsdWRlZCIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJTaGlwbWVudCIsIl9vbl9ob2xkIiwiX3BpY2tpbmciLCJfcGFja2luZyIsIl9yZWFkeV90b19zaGlwIiwiX3NoaXAiLCJfZ2V0X3JhdGVzIiwic2VsZWN0ZWRfcmF0ZV9pZCIsIl9wdXJjaGFzZSIsIlNoaXBwaW5nQ2F0ZWdvcnkiLCJTaGlwcGluZ01ldGhvZCIsImZyZWVfb3Zlcl9hbW91bnRfY2VudHMiLCJTaGlwcGluZ1pvbmUiLCJjb3VudHJ5X2NvZGVfcmVnZXgiLCJub3RfY291bnRyeV9jb2RlX3JlZ2V4Iiwic3RhdGVfY29kZV9yZWdleCIsIm5vdF9zdGF0ZV9jb2RlX3JlZ2V4IiwiemlwX2NvZGVfcmVnZXgiLCJub3RfemlwX2NvZGVfcmVnZXgiLCJTa3VPcHRpb24iLCJkZWxheV9ob3VycyIsInNrdV9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU3RvY2tJdGVtIiwiU3RvY2tMZXZlbCIsInByaW9yaXR5Iiwib25faG9sZCIsIlN0b2NrTG9jYXRpb24iLCJsYWJlbF9mb3JtYXQiLCJXZWJob29rIiwidG9waWMiLCJjYWxsYmFja191cmwiLCJpbmNsdWRlX3Jlc291cmNlcyIsIldpcmVUcmFuc2ZlciIsImluc3RhbmNlIiwiY2wiLCJjbF90eXBlIiwiUXVlcnlGaWx0ZXIiLCJjbGVhciIsInNvcnRfZmllbGRzIiwic3BhcnNlX2ZpZWxkc2V0cyIsImluY2x1ZGVkX3Jlc291cmNlcyIsImZpbHRlcl9maWVsZHMiLCJjdXN0b21fcGFyYW1zIiwicGFnZV9udW1iZXIiLCJkZXNjZW5kaW5nIiwicHVzaCIsInJlc291cmNlcyIsImZpbHRlcnMiLCJwYXJhbSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsIk51bWJlciIsImlzSW50ZWdlciIsInFzTWFwIiwiaW5jbHVkZSIsInNvcnQiLCJleHQiLCJtYXAxIiwibWFwMiIsImNsb25lTWFwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7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Q0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImNvbW1lcmNlbGF5ZXItc2RrLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGF5ZXInKVxyXG5cclxuLy8gTW9kZWwgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxuLy8gUXVlcnlGaWx0ZXIgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKVxyXG4iLCIvLyBGaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGF0IDExLzAyLzIwMTkgMTc6Mjc6NDAgYnkgY29tbWVyY2VsYXllci1qcy1zZGstY29kZWdlblxyXG5cclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50JylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QganNvbmFwaSA9IHJlcXVpcmUoJy4vanNvbmFwaScpXHJcblxyXG5cclxuY2xhc3MgQ0xBcGkge1xyXG5cclxuXHQvLyBBZGRyZXNzXHJcblx0bGlzdEFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2FkZHJlc3NlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RBZGRyZXNzZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUFkZHJlc3MoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBZGRyZXNzKGFkZHJlc3MpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvYWRkcmVzc2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGFkZHJlc3MpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUFkZHJlc3MoaWQsIGFkZHJlc3MpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoYWRkcmVzcykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlZGl0IENhcmRcclxuXHRsaXN0Q3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbENyZWRpdENhcmRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDcmVkaXRDYXJkcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3JlZGl0Q2FyZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNyZWRpdENhcmQoY3JlZGl0X2NhcmQpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3JlZGl0X2NhcmRzJywgJ3Bvc3QnKS5zZXRCb2R5KGNyZWRpdF9jYXJkKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDcmVkaXRDYXJkKGlkLCBjcmVkaXRfY2FyZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjcmVkaXRfY2FyZCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgQWRkcmVzc1xyXG5cdGxpc3RDdXN0b21lckFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX2FkZHJlc3NlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyQWRkcmVzc2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lckFkZHJlc3MoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lckFkZHJlc3MoY3VzdG9tZXJfYWRkcmVzcykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJBZGRyZXNzKGlkLCBjdXN0b21lcl9hZGRyZXNzKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX2FkZHJlc3MpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgUGFzc3dvcmQgUmVzZXRcclxuXHRsaXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJQYXNzd29yZFJlc2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9wYXNzd29yZF9yZXNldCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkLCBjdXN0b21lcl9wYXNzd29yZF9yZXNldCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXNzd29yZF9yZXNldCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXltZW50IFNvdXJjZVxyXG5cdGxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBheW1lbnRTb3VyY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBheW1lbnRTb3VyY2UoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3BheW1lbnRfc291cmNlKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQsIGN1c3RvbWVyX3BheW1lbnRfc291cmNlKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3BheW1lbnRfc291cmNlKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvblxyXG5cdGxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclN1YnNjcmlwdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oY3VzdG9tZXJfc3Vic2NyaXB0aW9uKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclN1YnNjcmlwdGlvbihpZCwgY3VzdG9tZXJfc3Vic2NyaXB0aW9uKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXJcclxuXHRsaXN0Q3VzdG9tZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lcihjdXN0b21lcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyKGlkLCBjdXN0b21lcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlbGl2ZXJ5IExlYWQgVGltZVxyXG5cdGxpc3REZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3REZWxpdmVyeUxlYWRUaW1lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlRGVsaXZlcnlMZWFkVGltZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVEZWxpdmVyeUxlYWRUaW1lKGRlbGl2ZXJ5X2xlYWRfdGltZSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJywgJ3Bvc3QnKS5zZXRCb2R5KGRlbGl2ZXJ5X2xlYWRfdGltZSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRGVsaXZlcnlMZWFkVGltZShpZCwgZGVsaXZlcnlfbGVhZF90aW1lKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShkZWxpdmVyeV9sZWFkX3RpbWUpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZURlbGl2ZXJ5TGVhZFRpbWUoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnZlbnRvcnkgTW9kZWxcclxuXHRsaXN0SW52ZW50b3J5TW9kZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW52ZW50b3J5X21vZGVscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsSW52ZW50b3J5TW9kZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RJbnZlbnRvcnlNb2RlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUludmVudG9yeU1vZGVsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUludmVudG9yeU1vZGVsKGludmVudG9yeV9tb2RlbCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbnZlbnRvcnlfbW9kZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW52ZW50b3J5TW9kZWwoaWQsIGludmVudG9yeV9tb2RlbCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoaW52ZW50b3J5X21vZGVsKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVJbnZlbnRvcnlNb2RlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpbmUgSXRlbSBPcHRpb25cclxuXHRsaXN0TGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbExpbmVJdGVtT3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TGluZUl0ZW1PcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVMaW5lSXRlbU9wdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTGluZUl0ZW1PcHRpb24obGluZV9pdGVtX29wdGlvbikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1fb3B0aW9ucycsICdwb3N0Jykuc2V0Qm9keShsaW5lX2l0ZW1fb3B0aW9uKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaW5lSXRlbU9wdGlvbihpZCwgbGluZV9pdGVtX29wdGlvbikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUxpbmVJdGVtT3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpbmUgSXRlbVxyXG5cdGxpc3RMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdExpbmVJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTGluZUl0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTGluZUl0ZW0obGluZV9pdGVtKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaW5lSXRlbShpZCwgbGluZV9pdGVtKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShsaW5lX2l0ZW0pKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUxpbmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFya2V0XHJcblx0bGlzdE1hcmtldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RNYXJrZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNYXJrZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTWFya2V0KG1hcmtldCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1hcmtldCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWFya2V0KGlkLCBtYXJrZXQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG1hcmtldCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTWFya2V0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWVyY2hhbnRcclxuXHRsaXN0TWVyY2hhbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE1lcmNoYW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWVyY2hhbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVNZXJjaGFudChtZXJjaGFudCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tZXJjaGFudHMnLCAncG9zdCcpLnNldEJvZHkobWVyY2hhbnQpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1lcmNoYW50KGlkLCBtZXJjaGFudCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtZXJjaGFudCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTWVyY2hhbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9yZGVyXHJcblx0bGlzdE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsT3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RPcmRlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU9yZGVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlT3JkZXIob3JkZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KG9yZGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVPcmRlcihpZCwgb3JkZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkob3JkZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU9yZGVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJjZWxcclxuXHRsaXN0UGFyY2VscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBhcmNlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBhcmNlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXJjZWwocGFyY2VsKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnLCAncG9zdCcpLnNldEJvZHkocGFyY2VsKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXJjZWwoaWQsIHBhcmNlbCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGFyY2VsKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXJjZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXltZW50IE1ldGhvZFxyXG5cdGxpc3RQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGF5bWVudE1ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBheW1lbnRNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXltZW50TWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGF5bWVudE1ldGhvZChwYXltZW50X21ldGhvZCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXltZW50X21ldGhvZHMnLCAncG9zdCcpLnNldEJvZHkocGF5bWVudF9tZXRob2QpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBheW1lbnRNZXRob2QoaWQsIHBheW1lbnRfbWV0aG9kKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXltZW50TWV0aG9kKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXlwYWwgUGF5bWVudFxyXG5cdGxpc3RQYXlwYWxQYXltZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheXBhbF9wYXltZW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGF5cGFsUGF5bWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBheXBhbFBheW1lbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXlwYWxQYXltZW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGF5cGFsUGF5bWVudChwYXlwYWxfcGF5bWVudCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXlwYWxfcGF5bWVudHMnLCAncG9zdCcpLnNldEJvZHkocGF5cGFsX3BheW1lbnQpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBheXBhbFBheW1lbnQoaWQsIHBheXBhbF9wYXltZW50KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBheXBhbF9wYXltZW50KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXlwYWxQYXltZW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZSBMaXN0XHJcblx0bGlzdFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUHJpY2VMaXN0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VMaXN0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUHJpY2VMaXN0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmljZUxpc3QocHJpY2VfbGlzdCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycsICdwb3N0Jykuc2V0Qm9keShwcmljZV9saXN0KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZUxpc3QoaWQsIHByaWNlX2xpc3QpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZV9saXN0KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQcmljZUxpc3QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2VcclxuXHRsaXN0UHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUHJpY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmljZShwcmljZSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZXMnLCAncG9zdCcpLnNldEJvZHkocHJpY2UpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByaWNlKGlkLCBwcmljZSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUHJpY2UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBtZW50XHJcblx0bGlzdFNoaXBtZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBtZW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcG1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwbWVudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBtZW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcG1lbnQoc2hpcG1lbnQpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcG1lbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBtZW50KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwbWVudChpZCwgc2hpcG1lbnQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcG1lbnQpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBtZW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBDYXRlZ29yeVxyXG5cdGxpc3RTaGlwcGluZ0NhdGVnb3JpZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ0NhdGVnb3JpZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nQ2F0ZWdvcmllcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdDYXRlZ29yeShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ0NhdGVnb3J5KHNoaXBwaW5nX2NhdGVnb3J5KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIHNoaXBwaW5nX2NhdGVnb3J5KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19jYXRlZ29yeSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdDYXRlZ29yeShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIE1ldGhvZFxyXG5cdGxpc3RTaGlwcGluZ01ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ01ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nTWV0aG9kcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdNZXRob2Qoc2hpcHBpbmdfbWV0aG9kKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfbWV0aG9kKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ01ldGhvZChpZCwgc2hpcHBpbmdfbWV0aG9kKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nTWV0aG9kKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgWm9uZVxyXG5cdGxpc3RTaGlwcGluZ1pvbmVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfem9uZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nWm9uZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nWm9uZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nWm9uZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdab25lKHNoaXBwaW5nX3pvbmUpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfem9uZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfem9uZSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdab25lKGlkLCBzaGlwcGluZ196b25lKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfem9uZSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdab25lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdSBPcHRpb25cclxuXHRsaXN0U2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTa3VPcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTa3VPcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTa3VPcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdU9wdGlvbihza3Vfb3B0aW9uKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdV9vcHRpb24pKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNrdU9wdGlvbihpZCwgc2t1X29wdGlvbikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNrdV9vcHRpb24pKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNrdU9wdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3VcclxuXHRsaXN0U2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNrdXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNrdXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNrdShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3Uoc2t1KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdXMnLCAncG9zdCcpLnNldEJvZHkoc2t1KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTa3UoaWQsIHNrdSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTa3UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBJdGVtXHJcblx0bGlzdFN0b2NrSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0l0ZW0oc3RvY2tfaXRlbSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19pdGVtKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0l0ZW0oaWQsIHN0b2NrX2l0ZW0pIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19pdGVtKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0l0ZW0oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgTGV2ZWxcclxuXHRsaXN0U3RvY2tMZXZlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sZXZlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0xldmVscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tMZXZlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrTGV2ZWwoc3RvY2tfbGV2ZWwpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2xldmVsKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0xldmVsKGlkLCBzdG9ja19sZXZlbCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sZXZlbCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tMZXZlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgTG9jYXRpb25cclxuXHRsaXN0U3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sb2NhdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrTG9jYXRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0xvY2F0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tMb2NhdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrTG9jYXRpb24oc3RvY2tfbG9jYXRpb24pIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbG9jYXRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2xvY2F0aW9uKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0xvY2F0aW9uKGlkLCBzdG9ja19sb2NhdGlvbikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tMb2NhdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2ViaG9va1xyXG5cdGxpc3RXZWJob29rcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dlYmhvb2tzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxXZWJob29rcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0V2ViaG9va3MsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdlYmhvb2soaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVdlYmhvb2sod2ViaG9vaykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93ZWJob29rcycsICdwb3N0Jykuc2V0Qm9keSh3ZWJob29rKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXZWJob29rKGlkLCB3ZWJob29rKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkod2ViaG9vaykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlV2ViaG9vayhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBXaXJlIFRyYW5zZmVyXHJcblx0bGlzdFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsV2lyZVRyYW5zZmVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0V2lyZVRyYW5zZmVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlV2lyZVRyYW5zZmVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXaXJlVHJhbnNmZXIod2lyZV90cmFuc2Zlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycsICdwb3N0Jykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXaXJlVHJhbnNmZXIoaWQsIHdpcmVfdHJhbnNmZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVXaXJlVHJhbnNmZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbnZhciBhcGkgPSBuZXcgQ0xBcGkoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmNsYXBpID0gYXBpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IChjZmcpID0+IHtcclxuICAgIHV0aWxzLmxvZygnYXBpIGNsaWVudCBpbml0aWFsaXplZCB3aXRoIGNvbmZpZzonKTtcclxuICAgIHV0aWxzLmxvZyhjZmcpO1xyXG4gICAgYXBpLmNsaWVudCA9ICBjbGllbnQubmV3SW5zdGFuY2UoY2ZnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgIHV0aWxzLmxvZyhgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBjYWxsaW5nICR7YXBpUmVxdWVzdC5wYXRofSAuLi5gKTtcclxuXHJcbiAgICBpZiAoYXBpLmNsaWVudCA9PSB1bmRlZmluZWQpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcih1bmRlZmluZWQsICdhcGkgbm90IGluaXRpYWxpemVkJykpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBqc29uYXBpLnNlcmlhbGl6ZShhcGlSZXF1ZXN0LmJvZHkpO1xyXG4gICAgICAgIGFwaVJlcXVlc3Quc2V0Qm9keShib2R5KTtcclxuICAgICAgICByZXR1cm4gYXBpLmNsaWVudC5jYWxsKGFwaVJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKGFwaVJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCBhcGlSZXF1ZXN0LnJlc3BvbnNlX3R5cGUpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvci5yZXNwb25zZSkgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlfZXJyb3IgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IoYXBpX2Vycm9yLnN0YXR1cywgYXBpX2Vycm9yLnRpdGxlLCBhcGlfZXJyb3IuZGV0YWlsLCBhcGlfZXJyb3IuY29kZSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXNwb25zZShhcGlSZXNwb25zZSwgcmVzcG9uc2VfdHlwZSkge1xyXG5cdGlmIChyZXNwb25zZV90eXBlID09IHVuZGVmaW5lZCkgcmV0dXJuIGFwaVJlc3BvbnNlO1xyXG5cdGVsc2VcclxuXHRcdHN3aXRjaCAocmVzcG9uc2VfdHlwZSkge1xyXG5cdFx0XHRjYXNlICdtb2RlbCc6XHJcblx0XHRcdFx0dGhyb3cgJ0Rlc2VyaWFsaXphdGlvbiB0byBtb2RlbCBub3Qgc3VwcG9ydGVkJztcclxuXHRcdFx0Y2FzZSAnbm9ybWFsaXplZCc6XHJcblx0XHRcdFx0cmV0dXJuIGpzb25hcGkubm9ybWFsaXplKGFwaVJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdqc29uYXBpJzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0Y2FzZSAncmF3JzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgXCJVbnN1cHBvcnRlZCByZXNwb25zZV90eXBlOiAnXCIgKyBhcGlSZXF1ZXN0LnJlc3BvbnNlX3R5cGUgKyBcIidcIjtcclxuXHRcdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRhdGEocmVzKSB7XHJcblx0aWYgKHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSkgcmV0dXJuIHJlcztcclxuXHRlbHNlXHJcblx0aWYgKHJlcy5kYXRhc2V0KSByZXR1cm4gcmVzLmRhdGFzZXQuZGF0YTtcclxuXHRlbHNlXHJcblx0aWYgKHJlcy5kYXRhKSByZXR1cm4gKHJlcy5kYXRhLmRhdGEpPyByZXMuZGF0YS5kYXRhIDogcmVzLmRhdGE7XHJcblx0ZWxzZSByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV3RXJyb3Ioc3RhdHVzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZSwgY29kZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvciA6IHRydWUsXHJcbiAgICAgICAgc3RhdHVzIDogc3RhdHVzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWVzc2FnZSA6IG1lc3NhZ2UsXHJcbiAgICAgICAgY29kZSA6IGNvZGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFsbChsaXN0RnVuY3Rpb24sIGZpbHRlciA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcbiAgICBpZiAoKGxpc3RGdW5jdGlvbiA9PSB1bmRlZmluZWQpIHx8ICFsaXN0RnVuY3Rpb24ubmFtZS5zdGFydHNXaXRoKCdsaXN0JykpIHJldHVybiBQcm9taXNlLnJlamVjdChcIlVuZGVmaW5lZCAnbGlzdCcgQVBJIGZ1bmN0aW9uXCIpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRQYWdlKGZpbHRlciwgc2l6ZSA9IGZpbHRlci5wYWdlX3NpemUgfHwgMTAsIG51bWJlciA9IDEpIHtcclxuXHRcdFxyXG4gICAgICAgIGlmIChmaWx0ZXIuaXNRdWVyeUZpbHRlciAmJiAoZmlsdGVyLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpIGZpbHRlci5wYWdlKG51bWJlciwgc2l6ZSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlclsncGFnZVtzaXplXSddID0gc2l6ZTtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW251bWJlcl0nXSA9IG51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShmaWx0ZXIpO1xyXG5cdFxyXG5cdC8vIFNhdmUgb3JpZ2luYWwgb3B0aW9uIGFuZCBmb3J4ZSByZXNwb25zZV90eXBlIHRvICdyYXcnXHJcblx0bGV0IHJlc3BvbnNlX3R5cGUgPSBvcHRpb25zLnJlc3BvbnNlX3R5cGU7XHJcblx0b3B0aW9ucy5yZXNwb25zZV90eXBlID0gJ3Jhdyc7XHJcblxyXG4gICAgbGV0IGZpcnN0UGFnZSA9IGF3YWl0IGxpc3RGdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IG1heF9wYWdlID0gZmlyc3RQYWdlLmRhdGEubWV0YS5wYWdlX2NvdW50O1xyXG5cdGNvbnN0IHBhZ2Vfc2l6ZSA9IGZpcnN0UGFnZS5kYXRhLmRhdGEubGVuZ3RoO1xyXG5cdFxyXG5cdGxldCBwYWdlcyA9IG5ldyBBcnJheShtYXhfcGFnZSk7XHJcbiAgICBwYWdlc1swXSA9IHJlc3BvbnNlKGZpcnN0UGFnZSwgcmVzcG9uc2VfdHlwZSk7XHJcblxyXG5cdC8vIFN0YW5kYXJkIGxpc3RGdW5jdGlvbiByZXNwb25zZVxyXG5cdGlmIChtYXhfcGFnZSA9PSAxKSByZXR1cm4gcGFnZXNbMF07ICAgIFxyXG4gICAgXHJcbiAgIFxyXG4gICAgZm9yIChwbiA9IDE7IHBuIDwgbWF4X3BhZ2U7IHBuKyspIHtcclxuICAgICAgICBzZXRQYWdlKGZpbHRlciwgcGFnZV9zaXplLCBwbisxKTtcclxuICAgICAgICBwYWdlc1twbl0gPSBsaXN0RnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG5cdC8vIFNldCBvcmlnaW5hbCBvcHRpb25cclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG5cclxuXHRsZXQgb3V0ID0gW107XHJcblxyXG4gICAgKGF3YWl0IFByb21pc2UuYWxsKHBhZ2VzKSkuZm9yRWFjaChwID0+IHsgb3V0ID0gb3V0LmNvbmNhdChkYXRhKHJlc3BvbnNlKHAsIHJlc3BvbnNlX3R5cGUpKSkgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxuXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG5cclxuY29uc3QgQVVUSF9UT0tFTlMgPSB7fTtcclxuXHJcblxyXG5jbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY2xpZW50U2VjcmV0KHZhbHVlKSB7IHRoaXMuY2xpZW50X3NlY3JldCA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQ2xpZW50Q3JlZGVudGlhbHMgZXh0ZW5kcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgc2NvcGUsIGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICBzdXBlcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdjbGllbnRfY3JlZGVudGlhbHMnO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgIH1cclxuICAgIHNldFNjb3BlKHNjb3BlKSB7IHRoaXMuc2NvcGUgPSBzY29wZTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIG1hcmtldFNjb3BlKG1hcmtldCkgeyB0aGlzLnNjb3BlID0gKG1hcmtldCAhPSB1bmRlZmluZWQpPyAnbWFya2V0OicrbWFya2V0IDogbWFya2V0OyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQXV0aG9yaXphdGlvbkNvZGUgZXh0ZW5kcyBDbGllbnRDcmVkZW50aWFscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjZmcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNmZy5jbGllbnRfaWQsIGNmZy5zY29wZSwgY2ZnLmNsaWVudF9zZWNyZXQpXHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ2F1dGhvcml6YXRpb25fY29kZSc7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY2ZnLmNvZGU7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdF91cmkgPSBjZmcucmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgc2V0Q29kZShjb2RlKSB7IHRoaXMuY29kZSA9IGNvZGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICByZWRpcmVjdFVyaSh1cmkpIHsgdGhpcy5yZWRpcmVjdF91cmkgPSB1cmk7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBQYXNzd29yZCBleHRlbmRzIENsaWVudENyZWRlbnRpYWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNmZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY2ZnLmNsaWVudF9pZCwgY2ZnLnNjb3BlLCBjZmcuY2xpZW50X3NlY3JldClcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBjZmcudXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNmZy5wYXNzd29yZDtcclxuICAgIH1cclxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKSB7IHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7IHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFJlZnJlc2tUb2tlbiBleHRlbmRzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3JlZnJlc2hfdG9rZW4nO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJlZnJlc2hUb2tlbih0b2tlbikgeyB0aGlzLnJlZnJlc2hfdG9rZW4gPSB0b2tlbjsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEFwaVRva2VuIHtcclxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc190b2tlbikge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9ICdiZWFyZXInO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNjb3BlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3duZXJfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm93bmVyX2lkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmV4cGlyZXNfaW4gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAvLyBDbGllbnRDcmVkZW50aWFscyA6IChjbGllbnRfaWQpID0+IHsgcmV0dXJuIG5ldyBDbGllbnRDcmVkZW50aWFscyhjbGllbnRfaWQpIH0sXHJcbiAgICBDbGllbnRDcmVkZW50aWFscyxcclxuICAgIEF1dGhvcml6YXRpb25Db2RlLFxyXG4gICAgUGFzc3dvcmQsXHJcbiAgICBSZWZyZXNrVG9rZW5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmF1dGhlbnRpY2F0ZSA9IChhdXRoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgICAucG9zdCgnL29hdXRoL3Rva2VuJywge1xyXG4gICAgICAgICAgICBncmFudF90eXBlOiBhdXRoLmdyYW50X3R5cGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogYXV0aC5jbGllbnRfaWQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBhdXRoLnNjb3BlLFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBhdXRoLmNsaWVudF9zZWNyZXQsXHJcbiAgICAgICAgICAgIGNvZGU6IGF1dGguY29kZSxcclxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBhdXRoLnJlZGlyZWN0X3VyaSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGF1dGgudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRoLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiBhdXRoLnJlZnJlc2hfdG9rZW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBBcGlUb2tlbigpO1xyXG5cclxuICAgICAgICAgICAgdG9rZW4uYWNjZXNzX3Rva2VuID0gcmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIHRva2VuLnJlZnJlc2hfdG9rZW4gPSByZXNwb25zZS5kYXRhLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgIHRva2VuLnNjb3BlID0gcmVzcG9uc2UuZGF0YS5zY29wZTtcclxuICAgICAgICAgICAgdG9rZW4ub3duZXJfdHlwZSA9IHJlc3BvbnNlLmRhdGEub3duZXJfdHlwZTtcclxuICAgICAgICAgICAgdG9rZW4ub3duZXJfaWQgPSByZXNwb25zZS5kYXRhLm93bmVyX2lkO1xyXG4gICAgICAgICAgICB0b2tlbi5jcmVhdGVkX2F0ID0gcmVzcG9uc2UuZGF0YS5jcmVhdGVkX2F0O1xyXG4gICAgICAgICAgICB0b2tlbi5leHBpcmVzX2luID0gcmVzcG9uc2UuZGF0YS5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgY2FjaGVUb2tlbihhdXRoLmNsaWVudF9pZCwgdG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2FjaGVUb2tlbihjbGllbnRfaWQsIHRva2VuKSB7XHJcbiAgICBBVVRIX1RPS0VOU1tjbGllbnRfaWRdID0gdG9rZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRva2VuKGNsaWVudF9pZCkge1xyXG4gICAgcmV0dXJuIEFVVEhfVE9LRU5TW2NsaWVudF9pZF07XHJcbn1cclxuIiwiY29uc3QgYXBpID0gcmVxdWlyZSgnLi9hcGknKVxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcblxyXG4vLyBFeHBvc2UgYWxsIGFwaSBmdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMgPSBhcGkuY2xhcGk7XHJcblxyXG4vLyBFeHBvc2UgU0RLIGNvbmZpZ3VyYXRpb25cclxubW9kdWxlLmV4cG9ydHMuc2V0dGluZ3MgPSBjb25maWcuc2RrO1xyXG5cclxuLy8gUHJvYmUgZnVuY3Rpb25cclxubW9kdWxlLmV4cG9ydHMuaGV5ID0gKCkgPT4geyByZXR1cm4gJ0hlbGxvIScgfVxyXG5cclxuLy8gU0RLIGluaXRpYWxpemF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBpZiAoY2ZnICE9IHVuZGVmaW5lZCkgY2ZnLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgIGFwaS5pbml0aWFsaXplKHV0aWxzLm1lcmdlTWFwcyhjb25maWcuY2xheWVyLCBjZmcpKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5sYXN0QWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLmNsYXBpLmNsaWVudC5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuY29uc3QgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQXBpQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIHZlcmlmaWNhdGlvbi4uLicpXHJcblxyXG4gICAgaWYgKGNvbmZpZyA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGNvbmZpZyc7XHJcbiAgICBpZiAoY29uZmlnLmJhc2VfdXJsID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYmFzZV91cmwnO1xyXG4gICAgaWYgKGNvbmZpZy5tYXJrZXRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBtYXJrZXRfaWQnO1xyXG4gICAgaWYgKGNvbmZpZy5jbGllbnRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjbGllbnRfaWQnO1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIG9rLicpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3R5cGUgPSBzZGsucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhdGgocGF0aCkgeyB0aGlzLnBhdGggPSBwYXRoOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldFBhcmFtcyhwYXJhbXMpIHsgdGhpcy5wYXJhbXMgPSAocGFyYW1zICYmIHBhcmFtcy5pc1F1ZXJ5RmlsdGVyICYmIChwYXJhbXMuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSk/IHBhcmFtcy5idWlsZCgpIDogcGFyYW1zOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldE1ldGhvZChtZXRob2QpIHsgdGhpcy5tZXRob2QgPSBtZXRob2Q7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0Qm9keShib2R5KSB7IHRoaXMuYm9keSA9IGJvZHk7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0SGVhZGVycyhoZWFkZXJzKSB7IHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIG5ld0F0dGVtcHQoKSB7IHRoaXMuYXR0ZW1wdCsrOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBSZXF1ZXN0IE9wdGlvbnNcclxuICAgICAgICBnZXQgcmF3X3Jlc3BvbnNlKCkgeyByZXR1cm4gKHRoaXMucmVzcG9uc2VUeXBlID09ICdyYXcnKTsgfVxyXG4gICAgICAgIHNldCByYXdfcmVzcG9uc2UocmF3KSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IChyYXcgJiYgKHJhdyA9PT0gdHJ1ZSkpPyAncmF3JyA6ICdub3JtYWxpemVkJzsgfVxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSh0eXBlKSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IHR5cGU/IHR5cGUgOiBzZGsucmVzcG9uc2VfdHlwZTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gT25seSByZWFsbHkgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGJlaW5nIHNldHRlZFxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZShvcHRpb25zLnJlc3BvbnNlX3R5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAgICAgY2hlY2tBcGlDb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAvLyAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjb3BlOiAnbWFya2V0OicgKyB0aGlzLmNvbmZpZy5tYXJrZXRfaWRcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGF1dGguYXV0aGVudGljYXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHModGhpcy5jb25maWcuY2xpZW50X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWVudFNlY3JldCh0aGlzLmNvbmZpZy5jbGllbnRfc2VjcmV0KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKHRva2VuID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbi5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY2FsbChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtZXNzYWdlKG1zZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkPyBgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBgIDogJycpLmNvbmNhdChtc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBpUmVxdWVzdC5uZXdBdHRlbXB0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXNlX3BhdGggPSAoKHRoaXMuY29uZmlnLmJhc2VfcGF0aCAhPSB1bmRlZmluZWQpPyB0aGlzLmNvbmZpZy5iYXNlX3BhdGggOiAnJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5ICh0byBiZSByZW1vdmVkKVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gYmFzZV9wYXRoICsgYXBpUmVxdWVzdC5wYXRoO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhcGlSZXF1ZXN0LnBhcmFtcztcclxuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gYXBpUmVxdWVzdC5tZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBxdWVyeVN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgY2FsbFVybCA9IHBhdGg7XHJcbiAgICAgICAgICAgIGlmICgocGFyYW1zICE9IHVuZGVmaW5lZCkgJiYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtc1trZXldXHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsVXJsID0gY2FsbFVybC5jb25jYXQoJz8nKS5jb25jYXQocXVlcnlTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgncGF0aDogJyArIGNhbGxVcmwpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBheGlvc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogY2FsbFVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogc2RrLnRpbWVvdXQucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdlIGN1c3RvbSBhbmQgZGVmYXVsdCBoZWFkZXJzXHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZE1hcChheGlvc0NvbmZpZy5oZWFkZXJzLCBhcGlSZXF1ZXN0LmhlYWRlcnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQm9keVxyXG4gICAgICAgICAgICBpZiAoYXBpUmVxdWVzdC5ib2R5ICE9IHVuZGVmaW5lZCkgYXhpb3NDb25maWcuZGF0YSA9IGFwaVJlcXVlc3QuYm9keTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heF9hdHRlbXB0cyA9IHNkay5hdXRoX2F0dGVtcHRzPyBzZGsuYXV0aF9hdHRlbXB0cyA6IDE7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQgZXhlY3V0ZSBhdXRoZW50aWNhdGlvbiB0aGVuIHJlLWV4ZWN1dGUgY2FsbFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FjY2Vzc190b2tlbiBudWxsLCBhdXRoZW50aWNhdGlvbiByZXF1aXJlZCcpKTtcclxuICAgICAgICAgICAgICAgIGlmICgrK3RoaXMuYXV0aF9hdHRlbXB0cyA+IG1heF9hdHRlbXB0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2RrLnRpbWVvdXQucmV0cnkpIHRocm93IGBSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIGF1dGhlbnRpY2F0aW9uIGF0dGVtcHRzICgke21heF9hdHRlbXB0c30pIGFuZCBubyByZXRyeSB0aW1lb3V0IGNvbmZpZ3VyZWRgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuc2xlZXAoc2RrLnRpbWVvdXQucmV0cnksIG1lc3NhZ2UoJ2Fub3RoZXIgYXV0aCByZXF1ZXN0IGlzIGluIHByb2dyZXNzJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHsgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlKCkudGhlbihhY2Nlc3NfdG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhfYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2V4ZWN1dGluZyBhcGkgY2FsbCAuLi4nKSk7XHJcbiAgICAgICAgICAgICAgICBheGlvc0NvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc0NvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhcGkgY2FsbCBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZShlcnJvcj8gZXJyb3IgOiAnZXJyb3IgZGV0ZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnRUNPTk5BQk9SVEVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ3RpbWVvdXQgZXhjZXB0aW9uOicgKyBlcnJvci5jb25maWcudGltZW91dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwaSBlcnJvbmVvdXNseSByZXR1cm4gY29kZSA0MDEgaW5zdGVhZCBvZiBjb2RlIDQwMyBmb3IgVU5BVVRIT1JJWkVEIGNhbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyAmJiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0uY29kZSA9PSAnSU5WQUxJRF9UT0tFTicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnaW52YWxpZCB0b2tlbiwgYWNjZXNzIGRlbmllZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBjbGF5ZXI6IHtcclxuXHJcbiAgICAgICAgZGVmYXVsdCA6IHRydWUsXHJcbiAgXHJcbiAgICAgICAgY2xpZW50X2lkICAgICAgIDogbnVsbCxcclxuICAgICAgICBtYXJrZXRfaWQgICAgICAgOiBudWxsLFxyXG4gICAgICAgIGNsaWVudF9zZWNyZXQgICA6IG51bGwsXHJcbiAgICAgICAgYmFzZV91cmwgICAgICAgIDogbnVsbCxcclxuICAgICAgICBiYXNlX3BhdGggICAgICAgOiBudWxsLFxyXG4gICAgICAgIGNvdW50cnlfY29kZSAgICA6ICdVUycsXHJcbiAgICAgICAgbGFuZ3VhZ2VfY29kZSAgIDogJ2VuJyxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNkazoge1xyXG4gICAgICAgIGRlYnVnICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gZGVidWcgbW9kZSBhY3RpdmF0ZWRcclxuICAgICAgICBjb25zb2xlICAgICAgICAgOiBmYWxzZSwgICAgICAgIC8vIGxvZyB0byBjb25zb2xlIGVuYWJsZWRcclxuICAgICAgICB0cmFjZSAgICAgICAgICAgOiBmYWxzZSwgICAgICAgIC8vIHRyYWNlIGNsaWVudCBpbnB1dC9vdXRwdXQgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNwb25zZSBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICB0aW1lb3V0IDogeyAvLyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgcmV0cnkgOiAyNTAsICAgIC8vIHJldHJ5IGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCA6IDIwMDAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImNvbnN0IG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ2pzb24tYXBpLW5vcm1hbGl6ZScpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcbmNvbnN0IG1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gKGJvZHkpID0+IHtcclxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkgcmV0dXJuIGJvZHk7XHJcbiAgICAvLyBObyBkYXRhID0gUGxhaW4gT2JqZWN0IG9yIEFwaSBSZXNvdXJjZVxyXG4gICAgZWxzZSByZXR1cm4gKGJvZHkuZGF0YSA9PSB1bmRlZmluZWQpPyBuZXcgSnNvbkFwaVJlc291cmNlKGJvZHkpLnNlcmlhbGl6ZSgpIDogYm9keTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIGlmIChqYXBpID09IHVuZGVmaW5lZCkgcmV0dXJuIGphcGk7XHJcbiAgICBlbHNlIHJldHVybiAoamFwaS5kYXRhID09IHVuZGVmaW5lZCk/IGphcGkgOiBuZXcgSnNvbkFwaVJlc291cmNlKGphcGkpLmRlc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5ub3JtYWxpemUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShkYXRhKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEpzb25BcGlSZXNvdXJjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2UgPSB7fSkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlLmRhdGEgIT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhLmF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogcG9ydGFyZSBpZCBlIHR5cGUgaW4gdGVzdGEgYWQgb2duaSBvYmplY3RcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gdGhpcy5yZXNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoWydpZCcsICd0eXBlJ10uaW5jbHVkZXMoa2V5KSkgdGhpcy5kYXRhW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5pc0FwaVJlc291cmNlICYmIGZpZWxkLmlzQXBpUmVzb3VyY2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHNba2V5LnN0YXJ0c1dpdGgoJ19fJyk/IGtleS5zdWJzdHIoJ19fJy5sZW5ndGgpIDoga2V5XSA9IHsgZGF0YTogeyB0eXBlOiBmaWVsZC50eXBlLCBpZDogZmllbGQuaWQgfSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpICYmIGtleS5zdGFydHNXaXRoKCdfXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRhdGEuYXR0cmlidXRlc1trZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2VyaWFsaXplKCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMucmVzb3VyY2UuZGF0YSA9PSB1bmRlZmluZWQpICYmIHRoaXMucmVzb3VyY2UuaXNBcGlSZXNvdXJjZSAmJiAodGhpcy5yZXNvdXJjZS5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnJlc291cmNlLmRhdGE7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBtb2RlbC5oZWxwZXIubmV3UmVzb3VyY2UoZGF0YS50eXBlLCBkYXRhLmlkLCBkYXRhLmF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgcmV0dXJuIHJlcztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5yZWxhdGlvbnNoaXBzKS5mb3JFYWNoKChyZWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbF9kYXRhID0gZGF0YS5yZWxhdGlvbnNoaXBzW3JlbF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKHJlbF9kYXRhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVsX2RhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbFJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZShyZWxfZGF0YS50eXBlLCByZWxfZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldFJlc291cmNlKHJlbCwgcmVsUmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5jID0ganNvbmFwaUluY2x1ZGVkKHRoaXMucmVzb3VyY2UsIHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxSZXMuc2V0RmllbGRzKGluYy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBqc29uYXBpSW5jbHVkZWQoZGF0YSwgdHlwZSwgaWQpIHtcclxuICAgIGlmICgoZGF0YSA9PSB1bmRlZmluZWQpIHx8IChkYXRhLmluY2x1ZGVkID09IHVuZGVmaW5lZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaW5jUmVzID0gdW5kZWZpbmVkO1xyXG4gICAgZGF0YS5pbmNsdWRlZC5mb3JFYWNoKGluYyA9PiB7XHJcbiAgICAgICAgaWYgKChpbmMudHlwZSA9PSB0eXBlKSAmJiAoaW5jLmlkID09IGlkKSkgaW5jUmVzID0gaW5jO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBpbmNSZXM7XHJcbn1cclxuIiwiY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG1zZyA6IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsuY29uc29sZSkgY29uc29sZS5sb2coKG1lc3NhZ2UgPT0gdW5kZWZpbmVkKT8gJycgOiBtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlIDogKCkgPT4ge1xyXG4gICAgICAgIHNkay5jb25zb2xlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZSA6ICgpID0+IHtcclxuICAgICAgICBzZGsuY29uc29sZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9iZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nIGVuYWJsZWQ6ICcgKyBzZGsuY29uc29sZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lmIGxvZyBpcyBlbmFibGVkIGJ1dCBpcyBub3QgdmlzaWJsZSBtYXliZSB5b3UgYXJlIG5vdCBpbiBkZWJ1ZyBtb2RlJylcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGVuYWJsZWQoKSB7IHJldHVybiBzZGsuY29uc29sZSA9PT0gdHJ1ZTsgfVxyXG5cclxufSIsIi8vIEZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXQgMTUvMDIvMjAxOSAxMjowNjo0MyBieSBjb21tZXJjZWxheWVyLWpzLXNkay1jb2RlZ2VuXHJcblxyXG5cclxuLy8gQmFzaWMgQWJzdHJhY3QgUmVzb3VyY2VcclxuY2xhc3MgUmVzb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHR5cGUsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaXNBcGlSZXNvdXJjZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHNldFJlc291cmNlKGZpZWxkLCByZXMpIHsgaWYgKChyZXMgIT0gdW5kZWZpbmVkKSAmJiByZXMuaXNBcGlSZXNvdXJjZSAmJiByZXMuaXNBcGlSZXNvdXJjZSgpKSB0aGlzWydfXycuY29uY2F0KGZpZWxkKV0gPSByZXM7IH1cclxuXHRnZXRSZXNvdXJjZShmaWVsZCkgeyByZXR1cm4gdGhpc1snX18nLmNvbmNhdChmaWVsZCldOyB9XHJcblx0c2V0RmllbGRzKGZpZWxkcyA9IHt9KSB7IE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmaWVsZCA9PiB7IHRoaXNbZmllbGRdID0gZmllbGRzW2ZpZWxkXSB9KTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBZGRyZXNzIHJlc291cmNlXHJcbmNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQWRkcmVzcy5UWVBFKTtcclxuXHRcdHRoaXMuYnVzaW5lc3MgPSBmaWVsZHMuYnVzaW5lc3M7XHJcblx0XHR0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuXHRcdHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuXHRcdHRoaXMuY29tcGFueSA9IGZpZWxkcy5jb21wYW55O1xyXG5cdFx0dGhpcy5saW5lXzEgPSBmaWVsZHMubGluZV8xO1xyXG5cdFx0dGhpcy5saW5lXzIgPSBmaWVsZHMubGluZV8yO1xyXG5cdFx0dGhpcy5jaXR5ID0gZmllbGRzLmNpdHk7XHJcblx0XHR0aGlzLnppcF9jb2RlID0gZmllbGRzLnppcF9jb2RlO1xyXG5cdFx0dGhpcy5zdGF0ZV9jb2RlID0gZmllbGRzLnN0YXRlX2NvZGU7XHJcblx0XHR0aGlzLmNvdW50cnlfY29kZSA9IGZpZWxkcy5jb3VudHJ5X2NvZGU7XHJcblx0XHR0aGlzLnBob25lID0gZmllbGRzLnBob25lO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuXHRcdHRoaXMubm90ZXMgPSBmaWVsZHMubm90ZXM7XHJcblx0XHR0aGlzLmxhdCA9IGZpZWxkcy5sYXQ7XHJcblx0XHR0aGlzLmxuZyA9IGZpZWxkcy5sbmc7XHJcblx0XHR0aGlzLmJpbGxpbmdfaW5mbyA9IGZpZWxkcy5iaWxsaW5nX2luZm87XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBnZW9jb2Rlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnZ2VvY29kZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBnZW9jb2RlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdnZW9jb2RlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVkaXQgQ2FyZCByZXNvdXJjZVxyXG5jbGFzcyBDcmVkaXRDYXJkIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2NyZWRpdF9jYXJkcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIENyZWRpdENhcmQuVFlQRSk7XHJcblx0XHR0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuXHRcdHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuXHRcdHRoaXMubnVtYmVyID0gZmllbGRzLm51bWJlcjtcclxuXHRcdHRoaXMubW9udGggPSBmaWVsZHMubW9udGg7XHJcblx0XHR0aGlzLnllYXIgPSBmaWVsZHMueWVhcjtcclxuXHRcdHRoaXMudmVyaWZpY2F0aW9uX3ZhbHVlID0gZmllbGRzLnZlcmlmaWNhdGlvbl92YWx1ZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJBZGRyZXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX2FkZHJlc3NlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyQWRkcmVzcy5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFBhc3N3b3JkIFJlc2V0IHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGFzc3dvcmRSZXNldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXNzd29yZF9yZXNldHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBhc3N3b3JkUmVzZXQuVFlQRSk7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuXHRcdHRoaXMuX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuID0gZmllbGRzLl9yZXNldF9wYXNzd29yZF90b2tlbjtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUGF5bWVudCBTb3VyY2UgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJQYXltZW50U291cmNlIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyUGF5bWVudFNvdXJjZS5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBTdWJzY3JpcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJTdWJzY3JpcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyU3Vic2NyaXB0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXIuVFlQRSk7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5wYXNzd29yZCA9IGZpZWxkcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gRGVsaXZlcnkgTGVhZCBUaW1lIHJlc291cmNlXHJcbmNsYXNzIERlbGl2ZXJ5TGVhZFRpbWUgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnZGVsaXZlcnlfbGVhZF90aW1lcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIERlbGl2ZXJ5TGVhZFRpbWUuVFlQRSk7XHJcblx0XHR0aGlzLm1pbl9ob3VycyA9IGZpZWxkcy5taW5faG91cnM7XHJcblx0XHR0aGlzLm1heF9ob3VycyA9IGZpZWxkcy5tYXhfaG91cnM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEludmVudG9yeSBNb2RlbCByZXNvdXJjZVxyXG5jbGFzcyBJbnZlbnRvcnlNb2RlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdpbnZlbnRvcnlfbW9kZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgSW52ZW50b3J5TW9kZWwuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gTGluZSBJdGVtIE9wdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBMaW5lSXRlbU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdsaW5lX2l0ZW1fb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtT3B0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG5cdFx0dGhpcy5vcHRpb25zID0gZmllbGRzLm9wdGlvbnM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBsaW5lX2l0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScsIHZhbHVlKSB9XHJcblx0Z2V0IGxpbmVfaXRlbSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdsaW5lX2l0ZW0nKSB9XHJcblx0c2V0IHNrdV9vcHRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBza3Vfb3B0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTGluZSBJdGVtIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG5cdFx0dGhpcy5fdXBkYXRlX3F1YW50aXR5ID0gZmllbGRzLl91cGRhdGVfcXVhbnRpdHk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG5cdHNldCBpdGVtKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgaXRlbSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpdGVtJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hcmtldCByZXNvdXJjZVxyXG5jbGFzcyBNYXJrZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWFya2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1hcmtldC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWVyY2hhbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21lcmNoYW50JywgdmFsdWUpIH1cclxuXHRnZXQgbWVyY2hhbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWVyY2hhbnQnKSB9XHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNZXJjaGFudCByZXNvdXJjZVxyXG5jbGFzcyBNZXJjaGFudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtZXJjaGFudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBNZXJjaGFudC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBPcmRlciByZXNvdXJjZVxyXG5jbGFzcyBPcmRlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdvcmRlcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBPcmRlci5UWVBFKTtcclxuXHRcdHRoaXMuZ3Vlc3QgPSBmaWVsZHMuZ3Vlc3Q7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuXHRcdHRoaXMubGFuZ3VhZ2VfY29kZSA9IGZpZWxkcy5sYW5ndWFnZV9jb2RlO1xyXG5cdFx0dGhpcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayA9IGZpZWxkcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jaztcclxuXHRcdHRoaXMuY291cG9uX2NvZGUgPSBmaWVsZHMuY291cG9uX2NvZGU7XHJcblx0XHR0aGlzLmNhcnRfdXJsID0gZmllbGRzLmNhcnRfdXJsO1xyXG5cdFx0dGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcblx0XHR0aGlzLnRlcm1zX3VybCA9IGZpZWxkcy50ZXJtc191cmw7XHJcblx0XHR0aGlzLnByaXZhY3lfdXJsID0gZmllbGRzLnByaXZhY3lfdXJsO1xyXG5cdFx0dGhpcy5fcGxhY2UgPSBmaWVsZHMuX3BsYWNlO1xyXG5cdFx0dGhpcy5fY2FuY2VsID0gZmllbGRzLl9jYW5jZWw7XHJcblx0XHR0aGlzLl9hcHByb3ZlID0gZmllbGRzLl9hcHByb3ZlO1xyXG5cdFx0dGhpcy5fdXBkYXRlX3RheGVzID0gZmllbGRzLl91cGRhdGVfdGF4ZXM7XHJcblx0XHR0aGlzLl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQgPSBmaWVsZHMuX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZDtcclxuXHRcdHRoaXMuX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQgPSBmaWVsZHMuX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQ7XHJcblx0XHR0aGlzLl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZCA9IGZpZWxkcy5fY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQ7XHJcblx0XHR0aGlzLl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZyA9IGZpZWxkcy5fc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmc7XHJcblx0XHR0aGlzLl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZyA9IGZpZWxkcy5fYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmc7XHJcblx0XHR0aGlzLl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldCA9IGZpZWxkcy5fc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQ7XHJcblx0XHR0aGlzLl9zYXZlX3NoaXBwaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rID0gZmllbGRzLl9zYXZlX3NoaXBwaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rO1xyXG5cdFx0dGhpcy5fc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rID0gZmllbGRzLl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2s7XHJcblx0XHR0aGlzLl9yZWZyZXNoID0gZmllbGRzLl9yZWZyZXNoO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgc2hpcHBpbmdfYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2FkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfYWRkcmVzcycpIH1cclxuXHRzZXQgYmlsbGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBiaWxsaW5nX2FkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYmlsbGluZ19hZGRyZXNzJykgfVxyXG5cdHNldCBwYXltZW50X21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcpIH1cclxuXHRzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGFyY2VsIHJlc291cmNlXHJcbmNsYXNzIFBhcmNlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXJjZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGFyY2VsLlRZUEUpO1xyXG5cdFx0dGhpcy53ZWlnaHQgPSBmaWVsZHMud2VpZ2h0O1xyXG5cdFx0dGhpcy51bml0X29mX3dlaWdodCA9IGZpZWxkcy51bml0X29mX3dlaWdodDtcclxuXHRcdHRoaXMuZWVsX3BmYyA9IGZpZWxkcy5lZWxfcGZjO1xyXG5cdFx0dGhpcy5jb250ZW50c190eXBlID0gZmllbGRzLmNvbnRlbnRzX3R5cGU7XHJcblx0XHR0aGlzLmNvbnRlbnRzX2V4cGxhbmF0aW9uID0gZmllbGRzLmNvbnRlbnRzX2V4cGxhbmF0aW9uO1xyXG5cdFx0dGhpcy5jdXN0b21zX2NlcnRpZnkgPSBmaWVsZHMuY3VzdG9tc19jZXJ0aWZ5O1xyXG5cdFx0dGhpcy5jdXN0b21zX3NpZ25lciA9IGZpZWxkcy5jdXN0b21zX3NpZ25lcjtcclxuXHRcdHRoaXMubm9uX2RlbGl2ZXJ5X29wdGlvbiA9IGZpZWxkcy5ub25fZGVsaXZlcnlfb3B0aW9uO1xyXG5cdFx0dGhpcy5yZXN0cmljdGlvbl90eXBlID0gZmllbGRzLnJlc3RyaWN0aW9uX3R5cGU7XHJcblx0XHR0aGlzLnJlc3RyaWN0aW9uX2NvbW1lbnRzID0gZmllbGRzLnJlc3RyaWN0aW9uX2NvbW1lbnRzO1xyXG5cdFx0dGhpcy5jdXN0b21zX2luZm9fcmVxdWlyZWQgPSBmaWVsZHMuY3VzdG9tc19pbmZvX3JlcXVpcmVkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcG1lbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBtZW50JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcG1lbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcG1lbnQnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGF5bWVudCBNZXRob2QgcmVzb3VyY2VcclxuY2xhc3MgUGF5bWVudE1ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXltZW50X21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXltZW50TWV0aG9kLlRZUEUpO1xyXG5cdFx0dGhpcy5wYXltZW50X3NvdXJjZV90eXBlID0gZmllbGRzLnBheW1lbnRfc291cmNlX3R5cGU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IHBheW1lbnRfZ2F0ZXdheSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9nYXRld2F5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXlwYWwgUGF5bWVudCByZXNvdXJjZVxyXG5jbGFzcyBQYXlwYWxQYXltZW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BheXBhbF9wYXltZW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBheXBhbFBheW1lbnQuVFlQRSk7XHJcblx0XHR0aGlzLnJldHVybl91cmwgPSBmaWVsZHMucmV0dXJuX3VybDtcclxuXHRcdHRoaXMuY2FuY2VsX3VybCA9IGZpZWxkcy5jYW5jZWxfdXJsO1xyXG5cdFx0dGhpcy5ub3RlX3RvX3BheWVyID0gZmllbGRzLm5vdGVfdG9fcGF5ZXI7XHJcblx0XHR0aGlzLnBheXBhbF9wYXllcl9pZCA9IGZpZWxkcy5wYXlwYWxfcGF5ZXJfaWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQcmljZSBMaXN0IHJlc291cmNlXHJcbmNsYXNzIFByaWNlTGlzdCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwcmljZV9saXN0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFByaWNlTGlzdC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5jdXJyZW5jeV9jb2RlID0gZmllbGRzLmN1cnJlbmN5X2NvZGU7XHJcblx0XHR0aGlzLnRheF9pbmNsdWRlZCA9IGZpZWxkcy50YXhfaW5jbHVkZWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFByaWNlIHJlc291cmNlXHJcbmNsYXNzIFByaWNlIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3ByaWNlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFByaWNlLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMuYW1vdW50X2NlbnRzID0gZmllbGRzLmFtb3VudF9jZW50cztcclxuXHRcdHRoaXMuY29tcGFyZV9hdF9hbW91bnRfY2VudHMgPSBmaWVsZHMuY29tcGFyZV9hdF9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG5cdHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcG1lbnQgcmVzb3VyY2VcclxuY2xhc3MgU2hpcG1lbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcG1lbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcG1lbnQuVFlQRSk7XHJcblx0XHR0aGlzLl9vbl9ob2xkID0gZmllbGRzLl9vbl9ob2xkO1xyXG5cdFx0dGhpcy5fcGlja2luZyA9IGZpZWxkcy5fcGlja2luZztcclxuXHRcdHRoaXMuX3BhY2tpbmcgPSBmaWVsZHMuX3BhY2tpbmc7XHJcblx0XHR0aGlzLl9yZWFkeV90b19zaGlwID0gZmllbGRzLl9yZWFkeV90b19zaGlwO1xyXG5cdFx0dGhpcy5fc2hpcCA9IGZpZWxkcy5fc2hpcDtcclxuXHRcdHRoaXMuX2dldF9yYXRlcyA9IGZpZWxkcy5fZ2V0X3JhdGVzO1xyXG5cdFx0dGhpcy5zZWxlY3RlZF9yYXRlX2lkID0gZmllbGRzLnNlbGVjdGVkX3JhdGVfaWQ7XHJcblx0XHR0aGlzLl9wdXJjaGFzZSA9IGZpZWxkcy5fcHVyY2hhc2U7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgQ2F0ZWdvcnkgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdDYXRlZ29yeSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19jYXRlZ29yaWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdDYXRlZ29yeS5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBNZXRob2QgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfbWV0aG9kcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nTWV0aG9kLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHMgPSBmaWVsZHMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgc2hpcHBpbmdfem9uZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX3pvbmUoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScpIH1cclxuXHRzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgWm9uZSByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ1pvbmUgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfem9uZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ1pvbmUuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLmNvdW50cnlfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X2NvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5zdGF0ZV9jb2RlX3JlZ2V4ID0gZmllbGRzLnN0YXRlX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF9zdGF0ZV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9zdGF0ZV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy56aXBfY29kZV9yZWdleCA9IGZpZWxkcy56aXBfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X3ppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF96aXBfY29kZV9yZWdleDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2t1IE9wdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTa3VPcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2t1X29wdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3VPcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuXHRcdHRoaXMuZGVsYXlfaG91cnMgPSBmaWVsZHMuZGVsYXlfaG91cnM7XHJcblx0XHR0aGlzLnNrdV9jb2RlX3JlZ2V4ID0gZmllbGRzLnNrdV9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNrdSByZXNvdXJjZVxyXG5jbGFzcyBTa3UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2t1cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNrdS5UWVBFKTtcclxuXHRcdHRoaXMuY29kZSA9IGZpZWxkcy5jb2RlO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZmllbGRzLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG5cdFx0dGhpcy50YWdfbmFtZXMgPSBmaWVsZHMudGFnX25hbWVzO1xyXG5cdFx0dGhpcy5waWVjZXNfcGVyX3BhY2sgPSBmaWVsZHMucGllY2VzX3Blcl9wYWNrO1xyXG5cdFx0dGhpcy53ZWlnaHQgPSBmaWVsZHMud2VpZ2h0O1xyXG5cdFx0dGhpcy51bml0X29mX3dlaWdodCA9IGZpZWxkcy51bml0X29mX3dlaWdodDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIEl0ZW0gcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tJdGVtIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2l0ZW1zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tJdGVtLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG5cdGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIExldmVsIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTGV2ZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbGV2ZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMZXZlbC5UWVBFKTtcclxuXHRcdHRoaXMucHJpb3JpdHkgPSBmaWVsZHMucHJpb3JpdHk7XHJcblx0XHR0aGlzLm9uX2hvbGQgPSBmaWVsZHMub25faG9sZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcblx0Z2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgTG9jYXRpb24gcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tMb2NhdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19sb2NhdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0xvY2F0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmxhYmVsX2Zvcm1hdCA9IGZpZWxkcy5sYWJlbF9mb3JtYXQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFdlYmhvb2sgcmVzb3VyY2VcclxuY2xhc3MgV2ViaG9vayBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3ZWJob29rcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdlYmhvb2suVFlQRSk7XHJcblx0XHR0aGlzLnRvcGljID0gZmllbGRzLnRvcGljO1xyXG5cdFx0dGhpcy5jYWxsYmFja191cmwgPSBmaWVsZHMuY2FsbGJhY2tfdXJsO1xyXG5cdFx0dGhpcy5pbmNsdWRlX3Jlc291cmNlcyA9IGZpZWxkcy5pbmNsdWRlX3Jlc291cmNlcztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gV2lyZSBUcmFuc2ZlciByZXNvdXJjZVxyXG5jbGFzcyBXaXJlVHJhbnNmZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnd2lyZV90cmFuc2ZlcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBXaXJlVHJhbnNmZXIuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRBZGRyZXNzLFxyXG5cdENyZWRpdENhcmQsXHJcblx0Q3VzdG9tZXJBZGRyZXNzLFxyXG5cdEN1c3RvbWVyUGFzc3dvcmRSZXNldCxcclxuXHRDdXN0b21lclBheW1lbnRTb3VyY2UsXHJcblx0Q3VzdG9tZXJTdWJzY3JpcHRpb24sXHJcblx0Q3VzdG9tZXIsXHJcblx0RGVsaXZlcnlMZWFkVGltZSxcclxuXHRJbnZlbnRvcnlNb2RlbCxcclxuXHRMaW5lSXRlbU9wdGlvbixcclxuXHRMaW5lSXRlbSxcclxuXHRNYXJrZXQsXHJcblx0TWVyY2hhbnQsXHJcblx0T3JkZXIsXHJcblx0UGFyY2VsLFxyXG5cdFBheW1lbnRNZXRob2QsXHJcblx0UGF5cGFsUGF5bWVudCxcclxuXHRQcmljZUxpc3QsXHJcblx0UHJpY2UsXHJcblx0U2hpcG1lbnQsXHJcblx0U2hpcHBpbmdDYXRlZ29yeSxcclxuXHRTaGlwcGluZ01ldGhvZCxcclxuXHRTaGlwcGluZ1pvbmUsXHJcblx0U2t1T3B0aW9uLFxyXG5cdFNrdSxcclxuXHRTdG9ja0l0ZW0sXHJcblx0U3RvY2tMZXZlbCxcclxuXHRTdG9ja0xvY2F0aW9uLFxyXG5cdFdlYmhvb2ssXHJcblx0V2lyZVRyYW5zZmVyLFxyXG59XHJcblxyXG5cclxuXHJcbi8vICoqKioqKioqKiogSGVscGVyICoqKioqKioqKiogLy9cclxuXHJcbm1vZHVsZS5leHBvcnRzLmhlbHBlciA9IHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaGVscGVyLm5ld1Jlc291cmNlID0gKHR5cGUsIGlkLCBmaWVsZHMpID0+IHtcclxuXHRsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblx0bGV0IG1vZGVsID0gbW9kdWxlLmV4cG9ydHM7XHJcblx0T2JqZWN0LmtleXMobW9kZWwpLmZvckVhY2goKGNsKSA9PiB7XHJcblx0XHRpZiAoIWNsLnN0YXJ0c1dpdGgoJ2hlbHBlcicpKSB7XHJcblx0XHRcdGxldCBjbF90eXBlID0gbW9kZWxbY2xdLlRZUEU7XHJcblx0XHRcdGlmIChjbF90eXBlICYmIChjbF90eXBlID09IHR5cGUpKSB7XHJcblx0XHRcdFx0aW5zdGFuY2UgPSBuZXcgbW9kZWxbY2xdKGlkLCBmaWVsZHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0cmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5oZWxwZXIuaXNBcGlSZXNvdXJjZSA9IChyZXMpID0+IHtcclxuXHRyZXR1cm4gKHJlcyAmJiByZXMuaXNBcGlSZXNvdXJjZSAmJiAocmVzLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpO1xyXG59XHJcbiIsIlxyXG5jbGFzcyBRdWVyeUZpbHRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNwYXJzZV9maWVsZHNldHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpZWxkcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tX3BhcmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNRdWVyeUZpbHRlcigpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICBzb3J0KGZpZWxkLCBkZXNjZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcy5wdXNoKChkZXNjZW5kaW5nPyAnLScgOiAnJykuY29uY2F0KGZpZWxkKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGRzKHJlc291cmNlLCAuLi5maWVsZHMpIHtcclxuICAgICAgICBpZiAoZmllbGRzICE9IHVuZGVmaW5lZCkgdGhpcy5zcGFyc2VfZmllbGRzZXRzW3Jlc291cmNlXSA9IGZpZWxkcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbmNsdWRlKC4uLnJlc291cmNlcykge1xyXG4gICAgICAgIC8vIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSByZXNvdXJjZXMuZm9yRWFjaChyZXMgPT4geyB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlcykgfSlcclxuICAgICAgICBpZiAocmVzb3VyY2VzICE9IHVuZGVmaW5lZCkgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMucHVzaChyZXNvdXJjZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihmaWx0ZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKChmaWx0ZXIgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkgdGhpcy5maWx0ZXJfZmllbGRzW2ZpbHRlcl0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJzKGZpbHRlcnMpIHtcclxuICAgICAgICBpZiAoZmlsdGVycyAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goZmlsdGVyID0+IHsgdGhpcy5maWx0ZXIoZmlsdGVyLCBmaWx0ZXJzW2ZpbHRlcl0pIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoa2V5ICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuY3VzdG9tX3BhcmFtc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHsgdGhpcy5wYXJhbShrZXksIHBhcmFtc1trZXldKSB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2UobnVtYmVyLCBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyKG51bWJlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZShzaXplKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdlU2l6ZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSBzaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IG51bWJlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gKHRoaXMucGFnZV9udW1iZXIgJiYgTnVtYmVyLmlzSW50ZWdlcih0aGlzLnBhZ2VOdW1iZXIpKT8gcGFnZV9udW1iZXIrKyA6IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoam9pbikge1xyXG5cclxuICAgICAgICBsZXQgcXNNYXAgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykuZm9yRWFjaChmaWx0ZXIgPT4geyBxc01hcFtgZmlsdGVyWyR7ZmlsdGVyfV1gXSA9IHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluY2x1ZGVkIFJlc291cmNlc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmluY2x1ZGVkX3Jlc291cmNlcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuaW5jbHVkZSA9IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gU3BhcnNlIEZpZWxkc2V0c1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykuZm9yRWFjaChyZXMgPT4geyBxc01hcFtgZmllbGRzWyR7cmVzfV1gXSA9IHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNdLmpvaW4oJywnKSB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zb3J0X2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuc29ydCA9IHRoaXMuc29ydF9maWVsZHMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gUGFyYW1zXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7IHFzTWFwW2tleV0gPSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSB9KVxyXG5cclxuICAgICAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9udW1iZXIgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtudW1iZXJdJ10gPSB0aGlzLnBhZ2VfbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2Vfc2l6ZSAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW3NpemVdJ10gPSB0aGlzLnBhZ2Vfc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFqb2luPyBxc01hcCA6IE9iamVjdC5rZXlzKHFzTWFwKS5tYXAoa2V5ID0+IHsgcmV0dXJuIGtleSsnPScrcXNNYXBba2V5XSB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGxvZyA6IChtZXNzYWdlKSA9PiB7ICAgIC8vIEJXQ1xyXG4gICAgICAgIGxvZy5tc2cobWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZE1hcCA6IChtYXAsIGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXAgPT0gdW5kZWZpbmVkKSBtYXAgPSB7fTtcclxuICAgICAgICBpZiAoZXh0ICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGtleSA9PiB7IG1hcFtrZXldID0gZXh0W2tleV07IH0pO1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlTWFwcyA6IChtYXAxLCBtYXAyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubWFwMSwgLi4ubWFwMiB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lTWFwIDogKG1hcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobWFwID09IHVuZGVmaW5lZCk/IG1hcCA6IHsgLi4ubWFwIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwIDogKG1zLCBtc2cpID0+IHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cy5sb2coKG1zZz8gYCR7bXNnfSAtIGAgOiAnJykuY29uY2F0KGB3YWl0aW5nICR7bXN9IG1zZWNzIC4uLmApKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGd1aWQgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArICcuJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLnN1YnN0cigwLCA2KSkudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290Lmpzb25BcGlOb3JtYWxpemUgPSBmYWN0b3J5KCk7XG4gICAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gTm9ybWFsaXplcihkYXRhc2V0LCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb3JtYWxpemVyKSkge1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZXJJbnN0YW5jZSA9IG5ldyBOb3JtYWxpemVyKGRhdGFzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5ID8gbm9ybWFsaXplckluc3RhbmNlLmdldChwcm9wZXJ0eSkgOiBub3JtYWxpemVySW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhc2V0ID0gSlNPTi5wYXJzZShkYXRhc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YXNldCB8fCAhZGF0YXNldC5kYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQganNvbiBhcGkgbm9ybWFsaXplciBpbnB1dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gZGF0YXNldDtcbiAgICAgICAgdGhpcy5pc0NvbGxlY3Rpb24gPSBpc0FycmF5KGRhdGFzZXQuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5oYXlzdGFjayA9IGJ1aWxkSGF5c3RhY2soZGF0YXNldC5pbmNsdWRlZCwgdGhpcy5pc0NvbGxlY3Rpb24gPyBkYXRhc2V0LmRhdGEgOiBbZGF0YXNldC5kYXRhXSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEhheXN0YWNrKGluY2x1ZGVkLCBhZGRpdGlvbmFsSXRlbXMpIHtcblxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IFtdO1xuICAgICAgICB2YXIgaGF5c3RhY2sgPSBpbmNsdWRlZCB8fCBbXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZXMucHVzaChlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVhY2goYWRkaXRpb25hbEl0ZW1zLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVzLmluZGV4T2YoZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpIDwgMCkge1xuICAgICAgICAgICAgICAgIGhheXN0YWNrLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICBpZiAoaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNhbGxiYWNrLmNhbGwoY29udGV4dCwga2V5LCBjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIGVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0LCBpdGVtLCBrZXkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWVwRXh0ZW5kKG91dCwgb2JqKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb3V0W2tleV0gPT09ICd1bmRlZmluZWQnICYmIChvdXRba2V5XSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVlcEV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlUcmVlLCBmdW5jdGlvbihwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0uZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbkRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSByZWxhdGVkRW50aXR5ID8gbmV3IE5vcm1hbGl6ZXIoe2RhdGE6IHJlbGF0ZWRFbnRpdHksIGluY2x1ZGVkOiBoYXlzdGFja30pIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0UmVsYXRpb25EYXRhKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSkge1xuXG4gICAgICAgIHJldHVybiBbJ2lkJywgJ3R5cGUnXS5pbmRleE9mKHByb3BlcnR5KSA+PSAwID8gZW50aXR5W3Byb3BlcnR5XSA6IGVudGl0eS5hdHRyaWJ1dGVzW3Byb3BlcnR5XTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0aW9uRGF0YShyZWxhdGlvbk5hbWUsIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXS5kYXRhO1xuICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IHJlbGF0aW9uRGF0YSAmJiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgIGlmIChpc0FycmF5KHJlbGF0ZWRFbnRpdHkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAocmVsYXRlZEVudGl0eSwgZnVuY3Rpb24oc2luZ2xlUmVsYXRlZEVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgc2luZ2xlUmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghcmVsYXRlZEVudGl0eSkge1xuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVJlbGF0aW9uKHByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICByZXR1cm4gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwobmV3IE5vcm1hbGl6ZXIoe1xuICAgICAgICAgICAgZGF0YTogcmVsYXRlZEVudGl0eSxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBoYXlzdGFja1xuICAgICAgICB9KSwgcHJvcGVydHlUcmVlKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgdmFyIHNlYXJjaCA9IGlzQXJyYXkocmVsYXRpb25EYXRhKSA/IG1hcChyZWxhdGlvbkRhdGEsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkO1xuICAgICAgICB9KSA6IFtyZWxhdGlvbkRhdGEudHlwZSArICdAJyArIHJlbGF0aW9uRGF0YS5pZF07XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgc2VhcmNoLmluZGV4T2YoaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZCkgPj0gMCAmJiB0ZW1wLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wLmxlbmd0aCA9PT0gMSAmJiAhaXNBcnJheShyZWxhdGlvbkRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvTmVzdGVkT2JqZWN0KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHZhciB0ZW1wID0gb2JqO1xuICAgICAgICB2YXIgY29sbGVjdGlvbkxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtjb2xsZWN0aW9uW2ldXSA9IHRlbXBbY29sbGVjdGlvbltpXV0gfHwgKGkrMSA9PT0gY29sbGVjdGlvbkxlbmd0aCA/IHVuZGVmaW5lZCA6IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFByb3BlcnR5VHJlZShwcm9wZXJ0eUxpc3QpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlMaXN0LCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlQYXJ0cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKHRlbXAsIGFycmF5VG9OZXN0ZWRPYmplY3QocHJvcGVydHlQYXJ0cykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpYVByb3BlcnR5VHJlZShwcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcCh0aGlzLmRhdGFzZXQuZGF0YSwgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIHRoaXMuaGF5c3RhY2spO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCB0aGlzLmRhdGFzZXQuZGF0YSwgdGhpcy5oYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgTm9ybWFsaXplci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwodGhpcywgYnVpbGRQcm9wZXJ0eVRyZWUoaXNBcnJheShwcm9wZXJ0eSkgPyBwcm9wZXJ0eSA6IFtwcm9wZXJ0eV0pKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IG1hcChyZXN1bHQsIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bcHJvcGVydHldOyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IHJlc3VsdFtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gTm9ybWFsaXplcjtcblxufSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=