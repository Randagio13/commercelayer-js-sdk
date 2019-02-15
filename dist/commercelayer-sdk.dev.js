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
    response_type: 'normalized',
    // Resonse format. possible values are: normalized | jsonapi | model | raw
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
      var res = utils.newResource(data.type, data.id, data.attributes);
      if (data.relationships == undefined) return res;else Object.keys(data.relationships).forEach(function (rel) {
        var rel_data = data.relationships[rel].data;

        if (rel_data != undefined) {
          if (Array.isArray(rel_data)) {
            utils.log('Array Resource relationships not supported: ' + rel);
          } else {
            var relRes = utils.newResource(rel_data.type, rel_data.id);
            res.setResource(rel, relRes);
            var inc = utils.getIncluded(_this2.resource, rel_data.type, rel_data.id);
            relRes.setFields(inc.attributes);
          }
        }
      });
      return res;
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

var model = __webpack_require__(/*! ./model */ "./lib/model.js");

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
  },
  newResource: function newResource(type, id, fields) {
    var instance = undefined;
    Object.keys(model).forEach(function (cl) {
      var cl_type = model[cl].TYPE;

      if (cl_type && cl_type == type) {
        instance = new model[cl](id, fields);
      }
    });
    return instance;
  },
  getIncluded: function getIncluded(data, type, id) {
    if (data == undefined || data.included == undefined) return undefined;
    var incRes = undefined;
    data.included.forEach(function (inc) {
      if (inc.type == type && inc.id == id) incRes = inc;
    });
    return incRes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9qc29uYXBpLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvanNvbi1hcGktbm9ybWFsaXplL3NyYy9qc29uQXBpTm9ybWFsaXplLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwibW9kZWwiLCJxdWVyeSIsImNsaWVudCIsInV0aWxzIiwianNvbmFwaSIsIkNMQXBpIiwiZmlsdGVyIiwib3B0aW9ucyIsInJlcXVlc3QiLCJuZXdSZXF1ZXN0Iiwic2V0UGFyYW1zIiwic2V0T3B0aW9ucyIsImFsbCIsImxpc3RBZGRyZXNzZXMiLCJpZCIsImFkZHJlc3MiLCJzZXRCb2R5IiwibGlzdENyZWRpdENhcmRzIiwiY3JlZGl0X2NhcmQiLCJsaXN0Q3VzdG9tZXJBZGRyZXNzZXMiLCJjdXN0b21lcl9hZGRyZXNzIiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXNzd29yZF9yZXNldCIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UiLCJsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVycyIsImN1c3RvbWVyIiwibGlzdERlbGl2ZXJ5TGVhZFRpbWVzIiwiZGVsaXZlcnlfbGVhZF90aW1lIiwibGlzdEludmVudG9yeU1vZGVscyIsImludmVudG9yeV9tb2RlbCIsImxpc3RMaW5lSXRlbU9wdGlvbnMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtcyIsImxpbmVfaXRlbSIsImxpc3RNYXJrZXRzIiwibWFya2V0IiwibGlzdE1lcmNoYW50cyIsIm1lcmNoYW50IiwibGlzdE9yZGVycyIsIm9yZGVyIiwibGlzdFBhcmNlbHMiLCJwYXJjZWwiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXltZW50X21ldGhvZCIsImxpc3RQYXlwYWxQYXltZW50cyIsInBheXBhbF9wYXltZW50IiwibGlzdFByaWNlTGlzdHMiLCJwcmljZV9saXN0IiwibGlzdFByaWNlcyIsInByaWNlIiwibGlzdFNoaXBtZW50cyIsInNoaXBtZW50IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nTWV0aG9kcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ1pvbmVzIiwic2hpcHBpbmdfem9uZSIsImxpc3RTa3VPcHRpb25zIiwic2t1X29wdGlvbiIsImxpc3RTa3VzIiwic2t1IiwibGlzdFN0b2NrSXRlbXMiLCJzdG9ja19pdGVtIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbGV2ZWwiLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJzdG9ja19sb2NhdGlvbiIsImxpc3RXZWJob29rcyIsIndlYmhvb2siLCJsaXN0V2lyZVRyYW5zZmVycyIsIndpcmVfdHJhbnNmZXIiLCJhcGkiLCJjbGFwaSIsImluaXRpYWxpemUiLCJjZmciLCJsb2ciLCJuZXdJbnN0YW5jZSIsImFwaVJlcXVlc3QiLCJjb3JyZWxhdGlvbl9pZCIsImF0dGVtcHQiLCJwYXRoIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlamVjdCIsIm5ld0Vycm9yIiwiYm9keSIsInNlcmlhbGl6ZSIsImNhbGwiLCJ0aGVuIiwiYXBpUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlX3R5cGUiLCJjYXRjaCIsImVycm9yIiwiZGF0YSIsImVycm9ycyIsImFwaV9lcnJvciIsInN0YXR1cyIsInRpdGxlIiwiZGV0YWlsIiwiY29kZSIsInN0YXR1c1RleHQiLCJub3JtYWxpemUiLCJyZXMiLCJpc0FwaVJlc291cmNlIiwiZGF0YXNldCIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsImxpc3RGdW5jdGlvbiIsInNldFBhZ2UiLCJzaXplIiwicGFnZV9zaXplIiwibnVtYmVyIiwiaXNRdWVyeUZpbHRlciIsInBhZ2UiLCJuYW1lIiwic3RhcnRzV2l0aCIsImZpcnN0UGFnZSIsIm1heF9wYWdlIiwibWV0YSIsInBhZ2VfY291bnQiLCJsZW5ndGgiLCJwYWdlcyIsIkFycmF5IiwicG4iLCJvdXQiLCJwIiwiY29uY2F0IiwiZm9yRWFjaCIsImF4aW9zIiwiQVVUSF9UT0tFTlMiLCJBdXRoIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJ2YWx1ZSIsIkNsaWVudENyZWRlbnRpYWxzIiwic2NvcGUiLCJBdXRob3JpemF0aW9uQ29kZSIsInJlZGlyZWN0X3VyaSIsIlBhc3N3b3JkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlJlZnJlc2tUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBcGlUb2tlbiIsImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiLCJvd25lcl90eXBlIiwib3duZXJfaWQiLCJjcmVhdGVkX2F0IiwiZXhwaXJlc19pbiIsImF1dGhlbnRpY2F0ZSIsImF1dGgiLCJwb3N0IiwidG9rZW4iLCJjYWNoZVRva2VuIiwiZ2V0VG9rZW4iLCJjb25maWciLCJkZWZhdWx0IiwibWVyZ2VNYXBzIiwiY2xheWVyIiwibGFzdEFjY2Vzc1Rva2VuIiwic2V0dGluZ3MiLCJzZGsiLCJoZXkiLCJjaGVja0FwaUNvbmZpZyIsImJhc2VfdXJsIiwibWFya2V0X2lkIiwic2V0QXhpb3NDb25maWciLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGVidWciLCJ0cmFjZSIsImludGVyY2VwdG9ycyIsInVzZSIsIkFwaUNsaWVudCIsIm1ldGhvZCIsIkFwaVJlcXVlc3QiLCJwYXJhbXMiLCJndWlkIiwiYnVpbGQiLCJ0eXBlIiwicmVzcG9uc2VUeXBlIiwicmF3IiwiYXV0aF9hdHRlbXB0cyIsIm1hcmtldFNjb3BlIiwibXNnIiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIkpzb25BcGlSZXNvdXJjZSIsImRlc2VyaWFsaXplIiwiamFwaSIsInJlc291cmNlIiwiYXR0cmlidXRlcyIsImZpZWxkIiwiaW5jbHVkZXMiLCJyZWxhdGlvbnNoaXBzIiwic3Vic3RyIiwiaXNBcnJheSIsInJlbCIsIm5ld1Jlc291cmNlIiwicmVsX2RhdGEiLCJyZWxSZXMiLCJzZXRSZXNvdXJjZSIsImluYyIsImdldEluY2x1ZGVkIiwic2V0RmllbGRzIiwiUmVzb3VyY2UiLCJyZWZlcmVuY2UiLCJtZXRhZGF0YSIsInVwZGF0ZWRfYXQiLCJmaWVsZHMiLCJBZGRyZXNzIiwiVFlQRSIsImJ1c2luZXNzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvbXBhbnkiLCJsaW5lXzEiLCJsaW5lXzIiLCJjaXR5IiwiemlwX2NvZGUiLCJzdGF0ZV9jb2RlIiwicGhvbmUiLCJlbWFpbCIsIm5vdGVzIiwibGF0IiwibG5nIiwiYmlsbGluZ19pbmZvIiwiQ3JlZGl0Q2FyZCIsIm1vbnRoIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsIkN1c3RvbWVyQWRkcmVzcyIsIkN1c3RvbWVyUGFzc3dvcmRSZXNldCIsImN1c3RvbWVyX2VtYWlsIiwiY3VzdG9tZXJfcGFzc3dvcmQiLCJfcmVzZXRfcGFzc3dvcmRfdG9rZW4iLCJDdXN0b21lclBheW1lbnRTb3VyY2UiLCJDdXN0b21lclN1YnNjcmlwdGlvbiIsIkN1c3RvbWVyIiwiRGVsaXZlcnlMZWFkVGltZSIsIm1pbl9ob3VycyIsIm1heF9ob3VycyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW1PcHRpb24iLCJxdWFudGl0eSIsIkxpbmVJdGVtIiwic2t1X2NvZGUiLCJfdXBkYXRlX3F1YW50aXR5IiwiaW1hZ2VfdXJsIiwiTWFya2V0IiwiTWVyY2hhbnQiLCJPcmRlciIsImd1ZXN0Iiwic2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2siLCJjb3Vwb25fY29kZSIsImNhcnRfdXJsIiwicmV0dXJuX3VybCIsInRlcm1zX3VybCIsInByaXZhY3lfdXJsIiwiX3BsYWNlIiwiX2NhbmNlbCIsIl9hcHByb3ZlIiwiX3VwZGF0ZV90YXhlcyIsIl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZCIsIl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZCIsIl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZyIsIl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZyIsIl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldCIsIl9zYXZlX3NoaXBwaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rIiwiX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9yZWZyZXNoIiwiUGFyY2VsIiwid2VpZ2h0IiwidW5pdF9vZl93ZWlnaHQiLCJlZWxfcGZjIiwiY29udGVudHNfdHlwZSIsImNvbnRlbnRzX2V4cGxhbmF0aW9uIiwiY3VzdG9tc19jZXJ0aWZ5IiwiY3VzdG9tc19zaWduZXIiLCJub25fZGVsaXZlcnlfb3B0aW9uIiwicmVzdHJpY3Rpb25fdHlwZSIsInJlc3RyaWN0aW9uX2NvbW1lbnRzIiwiY3VzdG9tc19pbmZvX3JlcXVpcmVkIiwiUGF5bWVudE1ldGhvZCIsInBheW1lbnRfc291cmNlX3R5cGUiLCJwcmljZV9hbW91bnRfY2VudHMiLCJQYXlwYWxQYXltZW50IiwiY2FuY2VsX3VybCIsIm5vdGVfdG9fcGF5ZXIiLCJwYXlwYWxfcGF5ZXJfaWQiLCJQcmljZUxpc3QiLCJjdXJyZW5jeV9jb2RlIiwidGF4X2luY2x1ZGVkIiwiUHJpY2UiLCJhbW91bnRfY2VudHMiLCJjb21wYXJlX2F0X2Ftb3VudF9jZW50cyIsIlNoaXBtZW50IiwiX29uX2hvbGQiLCJfcGlja2luZyIsIl9wYWNraW5nIiwiX3JlYWR5X3RvX3NoaXAiLCJfc2hpcCIsIl9nZXRfcmF0ZXMiLCJzZWxlY3RlZF9yYXRlX2lkIiwiX3B1cmNoYXNlIiwiU2hpcHBpbmdDYXRlZ29yeSIsIlNoaXBwaW5nTWV0aG9kIiwiZnJlZV9vdmVyX2Ftb3VudF9jZW50cyIsIlNoaXBwaW5nWm9uZSIsImNvdW50cnlfY29kZV9yZWdleCIsIm5vdF9jb3VudHJ5X2NvZGVfcmVnZXgiLCJzdGF0ZV9jb2RlX3JlZ2V4Iiwibm90X3N0YXRlX2NvZGVfcmVnZXgiLCJ6aXBfY29kZV9yZWdleCIsIm5vdF96aXBfY29kZV9yZWdleCIsIlNrdU9wdGlvbiIsImRlbGF5X2hvdXJzIiwic2t1X2NvZGVfcmVnZXgiLCJTa3UiLCJ0YWdfbmFtZXMiLCJwaWVjZXNfcGVyX3BhY2siLCJTdG9ja0l0ZW0iLCJTdG9ja0xldmVsIiwicHJpb3JpdHkiLCJvbl9ob2xkIiwiU3RvY2tMb2NhdGlvbiIsImxhYmVsX2Zvcm1hdCIsIldlYmhvb2siLCJ0b3BpYyIsImNhbGxiYWNrX3VybCIsImluY2x1ZGVfcmVzb3VyY2VzIiwiV2lyZVRyYW5zZmVyIiwiUXVlcnlGaWx0ZXIiLCJjbGVhciIsInNvcnRfZmllbGRzIiwic3BhcnNlX2ZpZWxkc2V0cyIsImluY2x1ZGVkX3Jlc291cmNlcyIsImZpbHRlcl9maWVsZHMiLCJjdXN0b21fcGFyYW1zIiwicGFnZV9udW1iZXIiLCJkZXNjZW5kaW5nIiwicHVzaCIsInJlc291cmNlcyIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInFzTWFwIiwiaW5jbHVkZSIsInNvcnQiLCJleHQiLCJtYXAxIiwibWFwMiIsImNsb25lTWFwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInRvVXBwZXJDYXNlIiwib2JqIiwiaW5zdGFuY2UiLCJjbCIsImNsX3R5cGUiLCJpbmNsdWRlZCIsImluY1JlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxtQkFBTyxDQUFDLHFDQUFELENBQXhCO0FBRUFGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRSxLQUFmLEdBQXVCRCxtQkFBTyxDQUFDLG1DQUFELENBQTlCO0FBRUFGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRyxLQUFmLEdBQXVCRixtQkFBTyxDQUFDLG1DQUFELENBQTlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBR0EsSUFBTUcsTUFBTSxHQUFHSCxtQkFBTyxDQUFDLGlDQUFELENBQXRCOztBQUNBLElBQU1JLEtBQUssR0FBR0osbUJBQU8sQ0FBQywrQkFBRCxDQUFyQjs7QUFDQSxJQUFNSyxPQUFPLEdBQUdMLG1CQUFPLENBQUMsbUNBQUQsQ0FBdkI7O0lBR01NLEs7Ozs7Ozs7OztBQUVMO2tDQUNjQyxNLEVBQVFDLE8sRUFBUztBQUM5QixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixnQkFBbEIsRUFBb0NDLFNBQXBDLENBQThDSixNQUE5QyxFQUFzREssVUFBdEQsQ0FBaUVKLE9BQWpFLENBQUQsQ0FBZDtBQUNBOzs7aUNBRVlELE0sRUFBUUMsTyxFQUFTO0FBQzdCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLQyxhQUFOLEVBQXFCUCxNQUFyQixFQUE2QkMsT0FBN0IsQ0FBVjtBQUNBOzs7b0NBRWVPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDcEMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsMEJBQW9DSyxFQUFwQyxHQUEwQ0osU0FBMUMsQ0FBb0RKLE1BQXBELEVBQTRESyxVQUE1RCxDQUF1RUosT0FBdkUsQ0FBRCxDQUFkO0FBQ0E7OztrQ0FFYVEsTyxFQUFTO0FBQ25CLGFBQU9QLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGdCQUFsQixFQUFvQyxNQUFwQyxFQUE0Q08sT0FBNUMsQ0FBb0RELE9BQXBELENBQUQsQ0FBZDtBQUNIOzs7a0NBRWFELEUsRUFBSUMsTyxFQUFTO0FBQzFCLGFBQU9QLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDBCQUFvQ0ssRUFBcEMsR0FBMEMsT0FBMUMsRUFBbURFLE9BQW5ELENBQTJERCxPQUEzRCxDQUFELENBQWQ7QUFDQTs7O2tDQUVhRCxFLEVBQUk7QUFDakIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsMEJBQW9DSyxFQUFwQyxHQUEwQyxRQUExQyxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7b0NBQ2dCUixNLEVBQVFDLE8sRUFBUztBQUNoQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixtQkFBbEIsRUFBdUNDLFNBQXZDLENBQWlESixNQUFqRCxFQUF5REssVUFBekQsQ0FBb0VKLE9BQXBFLENBQUQsQ0FBZDtBQUNBOzs7bUNBRWNELE0sRUFBUUMsTyxFQUFTO0FBQy9CLGFBQU9LLEdBQUcsQ0FBQyxLQUFLSyxlQUFOLEVBQXVCWCxNQUF2QixFQUErQkMsT0FBL0IsQ0FBVjtBQUNBOzs7dUNBRWtCTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQ3ZDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDZCQUF1Q0ssRUFBdkMsR0FBNkNKLFNBQTdDLENBQXVESixNQUF2RCxFQUErREssVUFBL0QsQ0FBMEVKLE9BQTFFLENBQUQsQ0FBZDtBQUNBOzs7cUNBRWdCVyxXLEVBQWE7QUFDMUIsYUFBT1YsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsbUJBQWxCLEVBQXVDLE1BQXZDLEVBQStDTyxPQUEvQyxDQUF1REUsV0FBdkQsQ0FBRCxDQUFkO0FBQ0g7OztxQ0FFZ0JKLEUsRUFBSUksVyxFQUFhO0FBQ2pDLGFBQU9WLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDZCQUF1Q0ssRUFBdkMsR0FBNkMsT0FBN0MsRUFBc0RFLE9BQXRELENBQThERSxXQUE5RCxDQUFELENBQWQ7QUFDQTs7O3FDQUVnQkosRSxFQUFJO0FBQ3BCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDZCQUF1Q0ssRUFBdkMsR0FBNkMsUUFBN0MsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7OzBDQUNzQlIsTSxFQUFRQyxPLEVBQVM7QUFDdEMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IseUJBQWxCLEVBQTZDQyxTQUE3QyxDQUF1REosTUFBdkQsRUFBK0RLLFVBQS9ELENBQTBFSixPQUExRSxDQUFELENBQWQ7QUFDQTs7O3lDQUVvQkQsTSxFQUFRQyxPLEVBQVM7QUFDckMsYUFBT0ssR0FBRyxDQUFDLEtBQUtPLHFCQUFOLEVBQTZCYixNQUE3QixFQUFxQ0MsT0FBckMsQ0FBVjtBQUNBOzs7NENBRXVCTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQzVDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLG1DQUE2Q0ssRUFBN0MsR0FBbURKLFNBQW5ELENBQTZESixNQUE3RCxFQUFxRUssVUFBckUsQ0FBZ0ZKLE9BQWhGLENBQUQsQ0FBZDtBQUNBOzs7MENBRXFCYSxnQixFQUFrQjtBQUNwQyxhQUFPWixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQix5QkFBbEIsRUFBNkMsTUFBN0MsRUFBcURPLE9BQXJELENBQTZESSxnQkFBN0QsQ0FBRCxDQUFkO0FBQ0g7OzswQ0FFcUJOLEUsRUFBSU0sZ0IsRUFBa0I7QUFDM0MsYUFBT1osT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsbUNBQTZDSyxFQUE3QyxHQUFtRCxPQUFuRCxFQUE0REUsT0FBNUQsQ0FBb0VJLGdCQUFwRSxDQUFELENBQWQ7QUFDQTs7OzBDQUVxQk4sRSxFQUFJO0FBQ3pCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLG1DQUE2Q0ssRUFBN0MsR0FBbUQsUUFBbkQsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7OytDQUMyQlIsTSxFQUFRQyxPLEVBQVM7QUFDM0MsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsK0JBQWxCLEVBQW1EQyxTQUFuRCxDQUE2REosTUFBN0QsRUFBcUVLLFVBQXJFLENBQWdGSixPQUFoRixDQUFELENBQWQ7QUFDQTs7OzhDQUV5QkQsTSxFQUFRQyxPLEVBQVM7QUFDMUMsYUFBT0ssR0FBRyxDQUFDLEtBQUtTLDBCQUFOLEVBQWtDZixNQUFsQyxFQUEwQ0MsT0FBMUMsQ0FBVjtBQUNBOzs7a0RBRTZCTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQ2xELGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHlDQUFtREssRUFBbkQsR0FBeURKLFNBQXpELENBQW1FSixNQUFuRSxFQUEyRUssVUFBM0UsQ0FBc0ZKLE9BQXRGLENBQUQsQ0FBZDtBQUNBOzs7Z0RBRTJCZSx1QixFQUF5QjtBQUNqRCxhQUFPZCxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQiwrQkFBbEIsRUFBbUQsTUFBbkQsRUFBMkRPLE9BQTNELENBQW1FTSx1QkFBbkUsQ0FBRCxDQUFkO0FBQ0g7OztnREFFMkJSLEUsRUFBSVEsdUIsRUFBeUI7QUFDeEQsYUFBT2QsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAseUNBQW1ESyxFQUFuRCxHQUF5RCxPQUF6RCxFQUFrRUUsT0FBbEUsQ0FBMEVNLHVCQUExRSxDQUFELENBQWQ7QUFDQTs7O2dEQUUyQlIsRSxFQUFJO0FBQy9CLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHlDQUFtREssRUFBbkQsR0FBeUQsUUFBekQsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7OytDQUMyQlIsTSxFQUFRQyxPLEVBQVM7QUFDM0MsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsK0JBQWxCLEVBQW1EQyxTQUFuRCxDQUE2REosTUFBN0QsRUFBcUVLLFVBQXJFLENBQWdGSixPQUFoRixDQUFELENBQWQ7QUFDQTs7OzhDQUV5QkQsTSxFQUFRQyxPLEVBQVM7QUFDMUMsYUFBT0ssR0FBRyxDQUFDLEtBQUtXLDBCQUFOLEVBQWtDakIsTUFBbEMsRUFBMENDLE9BQTFDLENBQVY7QUFDQTs7O2tEQUU2Qk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUNsRCxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx5Q0FBbURLLEVBQW5ELEdBQXlESixTQUF6RCxDQUFtRUosTUFBbkUsRUFBMkVLLFVBQTNFLENBQXNGSixPQUF0RixDQUFELENBQWQ7QUFDQTs7O2dEQUUyQmlCLHVCLEVBQXlCO0FBQ2pELGFBQU9oQixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQiwrQkFBbEIsRUFBbUQsTUFBbkQsRUFBMkRPLE9BQTNELENBQW1FUSx1QkFBbkUsQ0FBRCxDQUFkO0FBQ0g7OztnREFFMkJWLEUsRUFBSVUsdUIsRUFBeUI7QUFDeEQsYUFBT2hCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHlDQUFtREssRUFBbkQsR0FBeUQsT0FBekQsRUFBa0VFLE9BQWxFLENBQTBFUSx1QkFBMUUsQ0FBRCxDQUFkO0FBQ0E7OztnREFFMkJWLEUsRUFBSTtBQUMvQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx5Q0FBbURLLEVBQW5ELEdBQXlELFFBQXpELENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7Ozs4Q0FDMEJSLE0sRUFBUUMsTyxFQUFTO0FBQzFDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLDZCQUFsQixFQUFpREMsU0FBakQsQ0FBMkRKLE1BQTNELEVBQW1FSyxVQUFuRSxDQUE4RUosT0FBOUUsQ0FBRCxDQUFkO0FBQ0E7Ozs2Q0FFd0JELE0sRUFBUUMsTyxFQUFTO0FBQ3pDLGFBQU9LLEdBQUcsQ0FBQyxLQUFLYSx5QkFBTixFQUFpQ25CLE1BQWpDLEVBQXlDQyxPQUF6QyxDQUFWO0FBQ0E7OztpREFFNEJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDakQsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsdUNBQWlESyxFQUFqRCxHQUF1REosU0FBdkQsQ0FBaUVKLE1BQWpFLEVBQXlFSyxVQUF6RSxDQUFvRkosT0FBcEYsQ0FBRCxDQUFkO0FBQ0E7OzsrQ0FFMEJtQixxQixFQUF1QjtBQUM5QyxhQUFPbEIsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsNkJBQWxCLEVBQWlELE1BQWpELEVBQXlETyxPQUF6RCxDQUFpRVUscUJBQWpFLENBQUQsQ0FBZDtBQUNIOzs7K0NBRTBCWixFLEVBQUlZLHFCLEVBQXVCO0FBQ3JELGFBQU9sQixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx1Q0FBaURLLEVBQWpELEdBQXVELE9BQXZELEVBQWdFRSxPQUFoRSxDQUF3RVUscUJBQXhFLENBQUQsQ0FBZDtBQUNBOzs7K0NBRTBCWixFLEVBQUk7QUFDOUIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsdUNBQWlESyxFQUFqRCxHQUF1RCxRQUF2RCxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7a0NBQ2NSLE0sRUFBUUMsTyxFQUFTO0FBQzlCLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGdCQUFsQixFQUFvQ0MsU0FBcEMsQ0FBOENKLE1BQTlDLEVBQXNESyxVQUF0RCxDQUFpRUosT0FBakUsQ0FBRCxDQUFkO0FBQ0E7OztpQ0FFWUQsTSxFQUFRQyxPLEVBQVM7QUFDN0IsYUFBT0ssR0FBRyxDQUFDLEtBQUtlLGFBQU4sRUFBcUJyQixNQUFyQixFQUE2QkMsT0FBN0IsQ0FBVjtBQUNBOzs7cUNBRWdCTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQ3JDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDBCQUFvQ0ssRUFBcEMsR0FBMENKLFNBQTFDLENBQW9ESixNQUFwRCxFQUE0REssVUFBNUQsQ0FBdUVKLE9BQXZFLENBQUQsQ0FBZDtBQUNBOzs7bUNBRWNxQixRLEVBQVU7QUFDckIsYUFBT3BCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGdCQUFsQixFQUFvQyxNQUFwQyxFQUE0Q08sT0FBNUMsQ0FBb0RZLFFBQXBELENBQUQsQ0FBZDtBQUNIOzs7bUNBRWNkLEUsRUFBSWMsUSxFQUFVO0FBQzVCLGFBQU9wQixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCwwQkFBb0NLLEVBQXBDLEdBQTBDLE9BQTFDLEVBQW1ERSxPQUFuRCxDQUEyRFksUUFBM0QsQ0FBRCxDQUFkO0FBQ0E7OzttQ0FFY2QsRSxFQUFJO0FBQ2xCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDBCQUFvQ0ssRUFBcEMsR0FBMEMsUUFBMUMsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7OzBDQUNzQlIsTSxFQUFRQyxPLEVBQVM7QUFDdEMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsMEJBQWxCLEVBQThDQyxTQUE5QyxDQUF3REosTUFBeEQsRUFBZ0VLLFVBQWhFLENBQTJFSixPQUEzRSxDQUFELENBQWQ7QUFDQTs7O3lDQUVvQkQsTSxFQUFRQyxPLEVBQVM7QUFDckMsYUFBT0ssR0FBRyxDQUFDLEtBQUtpQixxQkFBTixFQUE2QnZCLE1BQTdCLEVBQXFDQyxPQUFyQyxDQUFWO0FBQ0E7Ozs2Q0FFd0JPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDN0MsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsb0NBQThDSyxFQUE5QyxHQUFvREosU0FBcEQsQ0FBOERKLE1BQTlELEVBQXNFSyxVQUF0RSxDQUFpRkosT0FBakYsQ0FBRCxDQUFkO0FBQ0E7OzsyQ0FFc0J1QixrQixFQUFvQjtBQUN2QyxhQUFPdEIsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsMEJBQWxCLEVBQThDLE1BQTlDLEVBQXNETyxPQUF0RCxDQUE4RGMsa0JBQTlELENBQUQsQ0FBZDtBQUNIOzs7MkNBRXNCaEIsRSxFQUFJZ0Isa0IsRUFBb0I7QUFDOUMsYUFBT3RCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLG9DQUE4Q0ssRUFBOUMsR0FBb0QsT0FBcEQsRUFBNkRFLE9BQTdELENBQXFFYyxrQkFBckUsQ0FBRCxDQUFkO0FBQ0E7OzsyQ0FFc0JoQixFLEVBQUk7QUFDMUIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsb0NBQThDSyxFQUE5QyxHQUFvRCxRQUFwRCxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7d0NBQ29CUixNLEVBQVFDLE8sRUFBUztBQUNwQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQix1QkFBbEIsRUFBMkNDLFNBQTNDLENBQXFESixNQUFyRCxFQUE2REssVUFBN0QsQ0FBd0VKLE9BQXhFLENBQUQsQ0FBZDtBQUNBOzs7dUNBRWtCRCxNLEVBQVFDLE8sRUFBUztBQUNuQyxhQUFPSyxHQUFHLENBQUMsS0FBS21CLG1CQUFOLEVBQTJCekIsTUFBM0IsRUFBbUNDLE9BQW5DLENBQVY7QUFDQTs7OzJDQUVzQk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUMzQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxpQ0FBMkNLLEVBQTNDLEdBQWlESixTQUFqRCxDQUEyREosTUFBM0QsRUFBbUVLLFVBQW5FLENBQThFSixPQUE5RSxDQUFELENBQWQ7QUFDQTs7O3lDQUVvQnlCLGUsRUFBaUI7QUFDbEMsYUFBT3hCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLHVCQUFsQixFQUEyQyxNQUEzQyxFQUFtRE8sT0FBbkQsQ0FBMkRnQixlQUEzRCxDQUFELENBQWQ7QUFDSDs7O3lDQUVvQmxCLEUsRUFBSWtCLGUsRUFBaUI7QUFDekMsYUFBT3hCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGlDQUEyQ0ssRUFBM0MsR0FBaUQsT0FBakQsRUFBMERFLE9BQTFELENBQWtFZ0IsZUFBbEUsQ0FBRCxDQUFkO0FBQ0E7Ozt5Q0FFb0JsQixFLEVBQUk7QUFDeEIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsaUNBQTJDSyxFQUEzQyxHQUFpRCxRQUFqRCxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7d0NBQ29CUixNLEVBQVFDLE8sRUFBUztBQUNwQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQix3QkFBbEIsRUFBNENDLFNBQTVDLENBQXNESixNQUF0RCxFQUE4REssVUFBOUQsQ0FBeUVKLE9BQXpFLENBQUQsQ0FBZDtBQUNBOzs7dUNBRWtCRCxNLEVBQVFDLE8sRUFBUztBQUNuQyxhQUFPSyxHQUFHLENBQUMsS0FBS3FCLG1CQUFOLEVBQTJCM0IsTUFBM0IsRUFBbUNDLE9BQW5DLENBQVY7QUFDQTs7OzJDQUVzQk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUMzQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxrQ0FBNENLLEVBQTVDLEdBQWtESixTQUFsRCxDQUE0REosTUFBNUQsRUFBb0VLLFVBQXBFLENBQStFSixPQUEvRSxDQUFELENBQWQ7QUFDQTs7O3lDQUVvQjJCLGdCLEVBQWtCO0FBQ25DLGFBQU8xQixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQix3QkFBbEIsRUFBNEMsTUFBNUMsRUFBb0RPLE9BQXBELENBQTREa0IsZ0JBQTVELENBQUQsQ0FBZDtBQUNIOzs7eUNBRW9CcEIsRSxFQUFJb0IsZ0IsRUFBa0I7QUFDMUMsYUFBTzFCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGtDQUE0Q0ssRUFBNUMsR0FBa0QsT0FBbEQsRUFBMkRFLE9BQTNELENBQW1Fa0IsZ0JBQW5FLENBQUQsQ0FBZDtBQUNBOzs7eUNBRW9CcEIsRSxFQUFJO0FBQ3hCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGtDQUE0Q0ssRUFBNUMsR0FBa0QsUUFBbEQsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O2tDQUNjUixNLEVBQVFDLE8sRUFBUztBQUM5QixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixpQkFBbEIsRUFBcUNDLFNBQXJDLENBQStDSixNQUEvQyxFQUF1REssVUFBdkQsQ0FBa0VKLE9BQWxFLENBQUQsQ0FBZDtBQUNBOzs7aUNBRVlELE0sRUFBUUMsTyxFQUFTO0FBQzdCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLdUIsYUFBTixFQUFxQjdCLE1BQXJCLEVBQTZCQyxPQUE3QixDQUFWO0FBQ0E7OztxQ0FFZ0JPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDckMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsMkJBQXFDSyxFQUFyQyxHQUEyQ0osU0FBM0MsQ0FBcURKLE1BQXJELEVBQTZESyxVQUE3RCxDQUF3RUosT0FBeEUsQ0FBRCxDQUFkO0FBQ0E7OzttQ0FFYzZCLFMsRUFBVztBQUN0QixhQUFPNUIsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsaUJBQWxCLEVBQXFDLE1BQXJDLEVBQTZDTyxPQUE3QyxDQUFxRG9CLFNBQXJELENBQUQsQ0FBZDtBQUNIOzs7bUNBRWN0QixFLEVBQUlzQixTLEVBQVc7QUFDN0IsYUFBTzVCLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDJCQUFxQ0ssRUFBckMsR0FBMkMsT0FBM0MsRUFBb0RFLE9BQXBELENBQTREb0IsU0FBNUQsQ0FBRCxDQUFkO0FBQ0E7OzttQ0FFY3RCLEUsRUFBSTtBQUNsQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCwyQkFBcUNLLEVBQXJDLEdBQTJDLFFBQTNDLENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7OztnQ0FDWVIsTSxFQUFRQyxPLEVBQVM7QUFDNUIsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsY0FBbEIsRUFBa0NDLFNBQWxDLENBQTRDSixNQUE1QyxFQUFvREssVUFBcEQsQ0FBK0RKLE9BQS9ELENBQUQsQ0FBZDtBQUNBOzs7K0JBRVVELE0sRUFBUUMsTyxFQUFTO0FBQzNCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLeUIsV0FBTixFQUFtQi9CLE1BQW5CLEVBQTJCQyxPQUEzQixDQUFWO0FBQ0E7OzttQ0FFY08sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUNuQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx3QkFBa0NLLEVBQWxDLEdBQXdDSixTQUF4QyxDQUFrREosTUFBbEQsRUFBMERLLFVBQTFELENBQXFFSixPQUFyRSxDQUFELENBQWQ7QUFDQTs7O2lDQUVZK0IsTSxFQUFRO0FBQ2pCLGFBQU85QixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixjQUFsQixFQUFrQyxNQUFsQyxFQUEwQ08sT0FBMUMsQ0FBa0RzQixNQUFsRCxDQUFELENBQWQ7QUFDSDs7O2lDQUVZeEIsRSxFQUFJd0IsTSxFQUFRO0FBQ3hCLGFBQU85QixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx3QkFBa0NLLEVBQWxDLEdBQXdDLE9BQXhDLEVBQWlERSxPQUFqRCxDQUF5RHNCLE1BQXpELENBQUQsQ0FBZDtBQUNBOzs7aUNBRVl4QixFLEVBQUk7QUFDaEIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsd0JBQWtDSyxFQUFsQyxHQUF3QyxRQUF4QyxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7a0NBQ2NSLE0sRUFBUUMsTyxFQUFTO0FBQzlCLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGdCQUFsQixFQUFvQ0MsU0FBcEMsQ0FBOENKLE1BQTlDLEVBQXNESyxVQUF0RCxDQUFpRUosT0FBakUsQ0FBRCxDQUFkO0FBQ0E7OztpQ0FFWUQsTSxFQUFRQyxPLEVBQVM7QUFDN0IsYUFBT0ssR0FBRyxDQUFDLEtBQUsyQixhQUFOLEVBQXFCakMsTUFBckIsRUFBNkJDLE9BQTdCLENBQVY7QUFDQTs7O3FDQUVnQk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUNyQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCwwQkFBb0NLLEVBQXBDLEdBQTBDSixTQUExQyxDQUFvREosTUFBcEQsRUFBNERLLFVBQTVELENBQXVFSixPQUF2RSxDQUFELENBQWQ7QUFDQTs7O21DQUVjaUMsUSxFQUFVO0FBQ3JCLGFBQU9oQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixnQkFBbEIsRUFBb0MsTUFBcEMsRUFBNENPLE9BQTVDLENBQW9Ed0IsUUFBcEQsQ0FBRCxDQUFkO0FBQ0g7OzttQ0FFYzFCLEUsRUFBSTBCLFEsRUFBVTtBQUM1QixhQUFPaEMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsMEJBQW9DSyxFQUFwQyxHQUEwQyxPQUExQyxFQUFtREUsT0FBbkQsQ0FBMkR3QixRQUEzRCxDQUFELENBQWQ7QUFDQTs7O21DQUVjMUIsRSxFQUFJO0FBQ2xCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDBCQUFvQ0ssRUFBcEMsR0FBMEMsUUFBMUMsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7OytCQUNXUixNLEVBQVFDLE8sRUFBUztBQUMzQixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixhQUFsQixFQUFpQ0MsU0FBakMsQ0FBMkNKLE1BQTNDLEVBQW1ESyxVQUFuRCxDQUE4REosT0FBOUQsQ0FBRCxDQUFkO0FBQ0E7Ozs4QkFFU0QsTSxFQUFRQyxPLEVBQVM7QUFDMUIsYUFBT0ssR0FBRyxDQUFDLEtBQUs2QixVQUFOLEVBQWtCbkMsTUFBbEIsRUFBMEJDLE9BQTFCLENBQVY7QUFDQTs7O2tDQUVhTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQ2xDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHVCQUFpQ0ssRUFBakMsR0FBdUNKLFNBQXZDLENBQWlESixNQUFqRCxFQUF5REssVUFBekQsQ0FBb0VKLE9BQXBFLENBQUQsQ0FBZDtBQUNBOzs7Z0NBRVdtQyxLLEVBQU87QUFDZixhQUFPbEMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsYUFBbEIsRUFBaUMsTUFBakMsRUFBeUNPLE9BQXpDLENBQWlEMEIsS0FBakQsQ0FBRCxDQUFkO0FBQ0g7OztnQ0FFVzVCLEUsRUFBSTRCLEssRUFBTztBQUN0QixhQUFPbEMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsdUJBQWlDSyxFQUFqQyxHQUF1QyxPQUF2QyxFQUFnREUsT0FBaEQsQ0FBd0QwQixLQUF4RCxDQUFELENBQWQ7QUFDQTs7O2dDQUVXNUIsRSxFQUFJO0FBQ2YsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsdUJBQWlDSyxFQUFqQyxHQUF1QyxRQUF2QyxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7Z0NBQ1lSLE0sRUFBUUMsTyxFQUFTO0FBQzVCLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGNBQWxCLEVBQWtDQyxTQUFsQyxDQUE0Q0osTUFBNUMsRUFBb0RLLFVBQXBELENBQStESixPQUEvRCxDQUFELENBQWQ7QUFDQTs7OytCQUVVRCxNLEVBQVFDLE8sRUFBUztBQUMzQixhQUFPSyxHQUFHLENBQUMsS0FBSytCLFdBQU4sRUFBbUJyQyxNQUFuQixFQUEyQkMsT0FBM0IsQ0FBVjtBQUNBOzs7bUNBRWNPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDbkMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsd0JBQWtDSyxFQUFsQyxHQUF3Q0osU0FBeEMsQ0FBa0RKLE1BQWxELEVBQTBESyxVQUExRCxDQUFxRUosT0FBckUsQ0FBRCxDQUFkO0FBQ0E7OztpQ0FFWXFDLE0sRUFBUTtBQUNqQixhQUFPcEMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsY0FBbEIsRUFBa0MsTUFBbEMsRUFBMENPLE9BQTFDLENBQWtENEIsTUFBbEQsQ0FBRCxDQUFkO0FBQ0g7OztpQ0FFWTlCLEUsRUFBSThCLE0sRUFBUTtBQUN4QixhQUFPcEMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsd0JBQWtDSyxFQUFsQyxHQUF3QyxPQUF4QyxFQUFpREUsT0FBakQsQ0FBeUQ0QixNQUF6RCxDQUFELENBQWQ7QUFDQTs7O2lDQUVZOUIsRSxFQUFJO0FBQ2hCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHdCQUFrQ0ssRUFBbEMsR0FBd0MsUUFBeEMsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O3VDQUNtQlIsTSxFQUFRQyxPLEVBQVM7QUFDbkMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0Isc0JBQWxCLEVBQTBDQyxTQUExQyxDQUFvREosTUFBcEQsRUFBNERLLFVBQTVELENBQXVFSixPQUF2RSxDQUFELENBQWQ7QUFDQTs7O3NDQUVpQkQsTSxFQUFRQyxPLEVBQVM7QUFDbEMsYUFBT0ssR0FBRyxDQUFDLEtBQUtpQyxrQkFBTixFQUEwQnZDLE1BQTFCLEVBQWtDQyxPQUFsQyxDQUFWO0FBQ0E7OzswQ0FFcUJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDMUMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsZ0NBQTBDSyxFQUExQyxHQUFnREosU0FBaEQsQ0FBMERKLE1BQTFELEVBQWtFSyxVQUFsRSxDQUE2RUosT0FBN0UsQ0FBRCxDQUFkO0FBQ0E7Ozt3Q0FFbUJ1QyxjLEVBQWdCO0FBQ2hDLGFBQU90QyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixzQkFBbEIsRUFBMEMsTUFBMUMsRUFBa0RPLE9BQWxELENBQTBEOEIsY0FBMUQsQ0FBRCxDQUFkO0FBQ0g7Ozt3Q0FFbUJoQyxFLEVBQUlnQyxjLEVBQWdCO0FBQ3ZDLGFBQU90QyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxnQ0FBMENLLEVBQTFDLEdBQWdELE9BQWhELEVBQXlERSxPQUF6RCxDQUFpRThCLGNBQWpFLENBQUQsQ0FBZDtBQUNBOzs7d0NBRW1CaEMsRSxFQUFJO0FBQ3ZCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGdDQUEwQ0ssRUFBMUMsR0FBZ0QsUUFBaEQsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O3VDQUNtQlIsTSxFQUFRQyxPLEVBQVM7QUFDbkMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0Isc0JBQWxCLEVBQTBDQyxTQUExQyxDQUFvREosTUFBcEQsRUFBNERLLFVBQTVELENBQXVFSixPQUF2RSxDQUFELENBQWQ7QUFDQTs7O3NDQUVpQkQsTSxFQUFRQyxPLEVBQVM7QUFDbEMsYUFBT0ssR0FBRyxDQUFDLEtBQUttQyxrQkFBTixFQUEwQnpDLE1BQTFCLEVBQWtDQyxPQUFsQyxDQUFWO0FBQ0E7OzswQ0FFcUJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDMUMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsZ0NBQTBDSyxFQUExQyxHQUFnREosU0FBaEQsQ0FBMERKLE1BQTFELEVBQWtFSyxVQUFsRSxDQUE2RUosT0FBN0UsQ0FBRCxDQUFkO0FBQ0E7Ozt3Q0FFbUJ5QyxjLEVBQWdCO0FBQ2hDLGFBQU94QyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixzQkFBbEIsRUFBMEMsTUFBMUMsRUFBa0RPLE9BQWxELENBQTBEZ0MsY0FBMUQsQ0FBRCxDQUFkO0FBQ0g7Ozt3Q0FFbUJsQyxFLEVBQUlrQyxjLEVBQWdCO0FBQ3ZDLGFBQU94QyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxnQ0FBMENLLEVBQTFDLEdBQWdELE9BQWhELEVBQXlERSxPQUF6RCxDQUFpRWdDLGNBQWpFLENBQUQsQ0FBZDtBQUNBOzs7d0NBRW1CbEMsRSxFQUFJO0FBQ3ZCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGdDQUEwQ0ssRUFBMUMsR0FBZ0QsUUFBaEQsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O21DQUNlUixNLEVBQVFDLE8sRUFBUztBQUMvQixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixrQkFBbEIsRUFBc0NDLFNBQXRDLENBQWdESixNQUFoRCxFQUF3REssVUFBeEQsQ0FBbUVKLE9BQW5FLENBQUQsQ0FBZDtBQUNBOzs7a0NBRWFELE0sRUFBUUMsTyxFQUFTO0FBQzlCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLcUMsY0FBTixFQUFzQjNDLE1BQXRCLEVBQThCQyxPQUE5QixDQUFWO0FBQ0E7OztzQ0FFaUJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDdEMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsNEJBQXNDSyxFQUF0QyxHQUE0Q0osU0FBNUMsQ0FBc0RKLE1BQXRELEVBQThESyxVQUE5RCxDQUF5RUosT0FBekUsQ0FBRCxDQUFkO0FBQ0E7OztvQ0FFZTJDLFUsRUFBWTtBQUN4QixhQUFPMUMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0Isa0JBQWxCLEVBQXNDLE1BQXRDLEVBQThDTyxPQUE5QyxDQUFzRGtDLFVBQXRELENBQUQsQ0FBZDtBQUNIOzs7b0NBRWVwQyxFLEVBQUlvQyxVLEVBQVk7QUFDL0IsYUFBTzFDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDRCQUFzQ0ssRUFBdEMsR0FBNEMsT0FBNUMsRUFBcURFLE9BQXJELENBQTZEa0MsVUFBN0QsQ0FBRCxDQUFkO0FBQ0E7OztvQ0FFZXBDLEUsRUFBSTtBQUNuQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCw0QkFBc0NLLEVBQXRDLEdBQTRDLFFBQTVDLENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7OzsrQkFDV1IsTSxFQUFRQyxPLEVBQVM7QUFDM0IsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsYUFBbEIsRUFBaUNDLFNBQWpDLENBQTJDSixNQUEzQyxFQUFtREssVUFBbkQsQ0FBOERKLE9BQTlELENBQUQsQ0FBZDtBQUNBOzs7OEJBRVNELE0sRUFBUUMsTyxFQUFTO0FBQzFCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLdUMsVUFBTixFQUFrQjdDLE1BQWxCLEVBQTBCQyxPQUExQixDQUFWO0FBQ0E7OztrQ0FFYU8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUNsQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx1QkFBaUNLLEVBQWpDLEdBQXVDSixTQUF2QyxDQUFpREosTUFBakQsRUFBeURLLFVBQXpELENBQW9FSixPQUFwRSxDQUFELENBQWQ7QUFDQTs7O2dDQUVXNkMsSyxFQUFPO0FBQ2YsYUFBTzVDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGFBQWxCLEVBQWlDLE1BQWpDLEVBQXlDTyxPQUF6QyxDQUFpRG9DLEtBQWpELENBQUQsQ0FBZDtBQUNIOzs7Z0NBRVd0QyxFLEVBQUlzQyxLLEVBQU87QUFDdEIsYUFBTzVDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHVCQUFpQ0ssRUFBakMsR0FBdUMsT0FBdkMsRUFBZ0RFLE9BQWhELENBQXdEb0MsS0FBeEQsQ0FBRCxDQUFkO0FBQ0E7OztnQ0FFV3RDLEUsRUFBSTtBQUNmLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHVCQUFpQ0ssRUFBakMsR0FBdUMsUUFBdkMsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O2tDQUNjUixNLEVBQVFDLE8sRUFBUztBQUM5QixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixnQkFBbEIsRUFBb0NDLFNBQXBDLENBQThDSixNQUE5QyxFQUFzREssVUFBdEQsQ0FBaUVKLE9BQWpFLENBQUQsQ0FBZDtBQUNBOzs7aUNBRVlELE0sRUFBUUMsTyxFQUFTO0FBQzdCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLeUMsYUFBTixFQUFxQi9DLE1BQXJCLEVBQTZCQyxPQUE3QixDQUFWO0FBQ0E7OztxQ0FFZ0JPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDckMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsMEJBQW9DSyxFQUFwQyxHQUEwQ0osU0FBMUMsQ0FBb0RKLE1BQXBELEVBQTRESyxVQUE1RCxDQUF1RUosT0FBdkUsQ0FBRCxDQUFkO0FBQ0E7OzttQ0FFYytDLFEsRUFBVTtBQUNyQixhQUFPOUMsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsZ0JBQWxCLEVBQW9DLE1BQXBDLEVBQTRDTyxPQUE1QyxDQUFvRHNDLFFBQXBELENBQUQsQ0FBZDtBQUNIOzs7bUNBRWN4QyxFLEVBQUl3QyxRLEVBQVU7QUFDNUIsYUFBTzlDLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDBCQUFvQ0ssRUFBcEMsR0FBMEMsT0FBMUMsRUFBbURFLE9BQW5ELENBQTJEc0MsUUFBM0QsQ0FBRCxDQUFkO0FBQ0E7OzttQ0FFY3hDLEUsRUFBSTtBQUNsQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCwwQkFBb0NLLEVBQXBDLEdBQTBDLFFBQTFDLENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7OzsyQ0FDdUJSLE0sRUFBUUMsTyxFQUFTO0FBQ3ZDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLDBCQUFsQixFQUE4Q0MsU0FBOUMsQ0FBd0RKLE1BQXhELEVBQWdFSyxVQUFoRSxDQUEyRUosT0FBM0UsQ0FBRCxDQUFkO0FBQ0E7OzswQ0FFcUJELE0sRUFBUUMsTyxFQUFTO0FBQ3RDLGFBQU9LLEdBQUcsQ0FBQyxLQUFLMkMsc0JBQU4sRUFBOEJqRCxNQUE5QixFQUFzQ0MsT0FBdEMsQ0FBVjtBQUNBOzs7NkNBRXdCTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQzdDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLG9DQUE4Q0ssRUFBOUMsR0FBb0RKLFNBQXBELENBQThESixNQUE5RCxFQUFzRUssVUFBdEUsQ0FBaUZKLE9BQWpGLENBQUQsQ0FBZDtBQUNBOzs7MkNBRXNCaUQsaUIsRUFBbUI7QUFDdEMsYUFBT2hELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLDBCQUFsQixFQUE4QyxNQUE5QyxFQUFzRE8sT0FBdEQsQ0FBOER3QyxpQkFBOUQsQ0FBRCxDQUFkO0FBQ0g7OzsyQ0FFc0IxQyxFLEVBQUkwQyxpQixFQUFtQjtBQUM3QyxhQUFPaEQsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsb0NBQThDSyxFQUE5QyxHQUFvRCxPQUFwRCxFQUE2REUsT0FBN0QsQ0FBcUV3QyxpQkFBckUsQ0FBRCxDQUFkO0FBQ0E7OzsyQ0FFc0IxQyxFLEVBQUk7QUFDMUIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsb0NBQThDSyxFQUE5QyxHQUFvRCxRQUFwRCxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7d0NBQ29CUixNLEVBQVFDLE8sRUFBUztBQUNwQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQix1QkFBbEIsRUFBMkNDLFNBQTNDLENBQXFESixNQUFyRCxFQUE2REssVUFBN0QsQ0FBd0VKLE9BQXhFLENBQUQsQ0FBZDtBQUNBOzs7dUNBRWtCRCxNLEVBQVFDLE8sRUFBUztBQUNuQyxhQUFPSyxHQUFHLENBQUMsS0FBSzZDLG1CQUFOLEVBQTJCbkQsTUFBM0IsRUFBbUNDLE9BQW5DLENBQVY7QUFDQTs7OzJDQUVzQk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUMzQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxpQ0FBMkNLLEVBQTNDLEdBQWlESixTQUFqRCxDQUEyREosTUFBM0QsRUFBbUVLLFVBQW5FLENBQThFSixPQUE5RSxDQUFELENBQWQ7QUFDQTs7O3lDQUVvQm1ELGUsRUFBaUI7QUFDbEMsYUFBT2xELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLHVCQUFsQixFQUEyQyxNQUEzQyxFQUFtRE8sT0FBbkQsQ0FBMkQwQyxlQUEzRCxDQUFELENBQWQ7QUFDSDs7O3lDQUVvQjVDLEUsRUFBSTRDLGUsRUFBaUI7QUFDekMsYUFBT2xELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGlDQUEyQ0ssRUFBM0MsR0FBaUQsT0FBakQsRUFBMERFLE9BQTFELENBQWtFMEMsZUFBbEUsQ0FBRCxDQUFkO0FBQ0E7Ozt5Q0FFb0I1QyxFLEVBQUk7QUFDeEIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsaUNBQTJDSyxFQUEzQyxHQUFpRCxRQUFqRCxDQUFELENBQWQ7QUFDQSxLLENBSUQ7Ozs7c0NBQ2tCUixNLEVBQVFDLE8sRUFBUztBQUNsQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixxQkFBbEIsRUFBeUNDLFNBQXpDLENBQW1ESixNQUFuRCxFQUEyREssVUFBM0QsQ0FBc0VKLE9BQXRFLENBQUQsQ0FBZDtBQUNBOzs7cUNBRWdCRCxNLEVBQVFDLE8sRUFBUztBQUNqQyxhQUFPSyxHQUFHLENBQUMsS0FBSytDLGlCQUFOLEVBQXlCckQsTUFBekIsRUFBaUNDLE9BQWpDLENBQVY7QUFDQTs7O3lDQUVvQk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUN6QyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCwrQkFBeUNLLEVBQXpDLEdBQStDSixTQUEvQyxDQUF5REosTUFBekQsRUFBaUVLLFVBQWpFLENBQTRFSixPQUE1RSxDQUFELENBQWQ7QUFDQTs7O3VDQUVrQnFELGEsRUFBZTtBQUM5QixhQUFPcEQsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IscUJBQWxCLEVBQXlDLE1BQXpDLEVBQWlETyxPQUFqRCxDQUF5RDRDLGFBQXpELENBQUQsQ0FBZDtBQUNIOzs7dUNBRWtCOUMsRSxFQUFJOEMsYSxFQUFlO0FBQ3JDLGFBQU9wRCxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCwrQkFBeUNLLEVBQXpDLEdBQStDLE9BQS9DLEVBQXdERSxPQUF4RCxDQUFnRTRDLGFBQWhFLENBQUQsQ0FBZDtBQUNBOzs7dUNBRWtCOUMsRSxFQUFJO0FBQ3RCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLCtCQUF5Q0ssRUFBekMsR0FBK0MsUUFBL0MsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O21DQUNlUixNLEVBQVFDLE8sRUFBUztBQUMvQixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixrQkFBbEIsRUFBc0NDLFNBQXRDLENBQWdESixNQUFoRCxFQUF3REssVUFBeEQsQ0FBbUVKLE9BQW5FLENBQUQsQ0FBZDtBQUNBOzs7a0NBRWFELE0sRUFBUUMsTyxFQUFTO0FBQzlCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLaUQsY0FBTixFQUFzQnZELE1BQXRCLEVBQThCQyxPQUE5QixDQUFWO0FBQ0E7OztzQ0FFaUJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDdEMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsNEJBQXNDSyxFQUF0QyxHQUE0Q0osU0FBNUMsQ0FBc0RKLE1BQXRELEVBQThESyxVQUE5RCxDQUF5RUosT0FBekUsQ0FBRCxDQUFkO0FBQ0E7OztvQ0FFZXVELFUsRUFBWTtBQUN4QixhQUFPdEQsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0Isa0JBQWxCLEVBQXNDLE1BQXRDLEVBQThDTyxPQUE5QyxDQUFzRDhDLFVBQXRELENBQUQsQ0FBZDtBQUNIOzs7b0NBRWVoRCxFLEVBQUlnRCxVLEVBQVk7QUFDL0IsYUFBT3RELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDRCQUFzQ0ssRUFBdEMsR0FBNEMsT0FBNUMsRUFBcURFLE9BQXJELENBQTZEOEMsVUFBN0QsQ0FBRCxDQUFkO0FBQ0E7OztvQ0FFZWhELEUsRUFBSTtBQUNuQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCw0QkFBc0NLLEVBQXRDLEdBQTRDLFFBQTVDLENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7Ozs2QkFDU1IsTSxFQUFRQyxPLEVBQVM7QUFDekIsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsV0FBbEIsRUFBK0JDLFNBQS9CLENBQXlDSixNQUF6QyxFQUFpREssVUFBakQsQ0FBNERKLE9BQTVELENBQUQsQ0FBZDtBQUNBOzs7NEJBRU9ELE0sRUFBUUMsTyxFQUFTO0FBQ3hCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLbUQsUUFBTixFQUFnQnpELE1BQWhCLEVBQXdCQyxPQUF4QixDQUFWO0FBQ0E7OztnQ0FFV08sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUNoQyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxxQkFBK0JLLEVBQS9CLEdBQXFDSixTQUFyQyxDQUErQ0osTUFBL0MsRUFBdURLLFVBQXZELENBQWtFSixPQUFsRSxDQUFELENBQWQ7QUFDQTs7OzhCQUVTeUQsRyxFQUFLO0FBQ1gsYUFBT3hELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLFdBQWxCLEVBQStCLE1BQS9CLEVBQXVDTyxPQUF2QyxDQUErQ2dELEdBQS9DLENBQUQsQ0FBZDtBQUNIOzs7OEJBRVNsRCxFLEVBQUlrRCxHLEVBQUs7QUFDbEIsYUFBT3hELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHFCQUErQkssRUFBL0IsR0FBcUMsT0FBckMsRUFBOENFLE9BQTlDLENBQXNEZ0QsR0FBdEQsQ0FBRCxDQUFkO0FBQ0E7Ozs4QkFFU2xELEUsRUFBSTtBQUNiLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHFCQUErQkssRUFBL0IsR0FBcUMsUUFBckMsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O21DQUNlUixNLEVBQVFDLE8sRUFBUztBQUMvQixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixrQkFBbEIsRUFBc0NDLFNBQXRDLENBQWdESixNQUFoRCxFQUF3REssVUFBeEQsQ0FBbUVKLE9BQW5FLENBQUQsQ0FBZDtBQUNBOzs7a0NBRWFELE0sRUFBUUMsTyxFQUFTO0FBQzlCLGFBQU9LLEdBQUcsQ0FBQyxLQUFLcUQsY0FBTixFQUFzQjNELE1BQXRCLEVBQThCQyxPQUE5QixDQUFWO0FBQ0E7OztzQ0FFaUJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDdEMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsNEJBQXNDSyxFQUF0QyxHQUE0Q0osU0FBNUMsQ0FBc0RKLE1BQXRELEVBQThESyxVQUE5RCxDQUF5RUosT0FBekUsQ0FBRCxDQUFkO0FBQ0E7OztvQ0FFZTJELFUsRUFBWTtBQUN4QixhQUFPMUQsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0Isa0JBQWxCLEVBQXNDLE1BQXRDLEVBQThDTyxPQUE5QyxDQUFzRGtELFVBQXRELENBQUQsQ0FBZDtBQUNIOzs7b0NBRWVwRCxFLEVBQUlvRCxVLEVBQVk7QUFDL0IsYUFBTzFELE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDRCQUFzQ0ssRUFBdEMsR0FBNEMsT0FBNUMsRUFBcURFLE9BQXJELENBQTZEa0QsVUFBN0QsQ0FBRCxDQUFkO0FBQ0E7OztvQ0FFZXBELEUsRUFBSTtBQUNuQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCw0QkFBc0NLLEVBQXRDLEdBQTRDLFFBQTVDLENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7OztvQ0FDZ0JSLE0sRUFBUUMsTyxFQUFTO0FBQ2hDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLG1CQUFsQixFQUF1Q0MsU0FBdkMsQ0FBaURKLE1BQWpELEVBQXlESyxVQUF6RCxDQUFvRUosT0FBcEUsQ0FBRCxDQUFkO0FBQ0E7OzttQ0FFY0QsTSxFQUFRQyxPLEVBQVM7QUFDL0IsYUFBT0ssR0FBRyxDQUFDLEtBQUt1RCxlQUFOLEVBQXVCN0QsTUFBdkIsRUFBK0JDLE9BQS9CLENBQVY7QUFDQTs7O3VDQUVrQk8sRSxFQUFJUixNLEVBQVFDLE8sRUFBUztBQUN2QyxhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCw2QkFBdUNLLEVBQXZDLEdBQTZDSixTQUE3QyxDQUF1REosTUFBdkQsRUFBK0RLLFVBQS9ELENBQTBFSixPQUExRSxDQUFELENBQWQ7QUFDQTs7O3FDQUVnQjZELFcsRUFBYTtBQUMxQixhQUFPNUQsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsbUJBQWxCLEVBQXVDLE1BQXZDLEVBQStDTyxPQUEvQyxDQUF1RG9ELFdBQXZELENBQUQsQ0FBZDtBQUNIOzs7cUNBRWdCdEQsRSxFQUFJc0QsVyxFQUFhO0FBQ2pDLGFBQU81RCxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCw2QkFBdUNLLEVBQXZDLEdBQTZDLE9BQTdDLEVBQXNERSxPQUF0RCxDQUE4RG9ELFdBQTlELENBQUQsQ0FBZDtBQUNBOzs7cUNBRWdCdEQsRSxFQUFJO0FBQ3BCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLDZCQUF1Q0ssRUFBdkMsR0FBNkMsUUFBN0MsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O3VDQUNtQlIsTSxFQUFRQyxPLEVBQVM7QUFDbkMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsQ0FBa0Isc0JBQWxCLEVBQTBDQyxTQUExQyxDQUFvREosTUFBcEQsRUFBNERLLFVBQTVELENBQXVFSixPQUF2RSxDQUFELENBQWQ7QUFDQTs7O3NDQUVpQkQsTSxFQUFRQyxPLEVBQVM7QUFDbEMsYUFBT0ssR0FBRyxDQUFDLEtBQUt5RCxrQkFBTixFQUEwQi9ELE1BQTFCLEVBQWtDQyxPQUFsQyxDQUFWO0FBQ0E7OzswQ0FFcUJPLEUsRUFBSVIsTSxFQUFRQyxPLEVBQVM7QUFDMUMsYUFBT0MsT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsZ0NBQTBDSyxFQUExQyxHQUFnREosU0FBaEQsQ0FBMERKLE1BQTFELEVBQWtFSyxVQUFsRSxDQUE2RUosT0FBN0UsQ0FBRCxDQUFkO0FBQ0E7Ozt3Q0FFbUIrRCxjLEVBQWdCO0FBQ2hDLGFBQU85RCxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixzQkFBbEIsRUFBMEMsTUFBMUMsRUFBa0RPLE9BQWxELENBQTBEc0QsY0FBMUQsQ0FBRCxDQUFkO0FBQ0g7Ozt3Q0FFbUJ4RCxFLEVBQUl3RCxjLEVBQWdCO0FBQ3ZDLGFBQU85RCxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxnQ0FBMENLLEVBQTFDLEdBQWdELE9BQWhELEVBQXlERSxPQUF6RCxDQUFpRXNELGNBQWpFLENBQUQsQ0FBZDtBQUNBOzs7d0NBRW1CeEQsRSxFQUFJO0FBQ3ZCLGFBQU9OLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLGdDQUEwQ0ssRUFBMUMsR0FBZ0QsUUFBaEQsQ0FBRCxDQUFkO0FBQ0EsSyxDQUlEOzs7O2lDQUNhUixNLEVBQVFDLE8sRUFBUztBQUM3QixhQUFPQyxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixlQUFsQixFQUFtQ0MsU0FBbkMsQ0FBNkNKLE1BQTdDLEVBQXFESyxVQUFyRCxDQUFnRUosT0FBaEUsQ0FBRCxDQUFkO0FBQ0E7OztnQ0FFV0QsTSxFQUFRQyxPLEVBQVM7QUFDNUIsYUFBT0ssR0FBRyxDQUFDLEtBQUsyRCxZQUFOLEVBQW9CakUsTUFBcEIsRUFBNEJDLE9BQTVCLENBQVY7QUFDQTs7O29DQUVlTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQ3BDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHlCQUFtQ0ssRUFBbkMsR0FBeUNKLFNBQXpDLENBQW1ESixNQUFuRCxFQUEyREssVUFBM0QsQ0FBc0VKLE9BQXRFLENBQUQsQ0FBZDtBQUNBOzs7a0NBRWFpRSxPLEVBQVM7QUFDbkIsYUFBT2hFLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLGVBQWxCLEVBQW1DLE1BQW5DLEVBQTJDTyxPQUEzQyxDQUFtRHdELE9BQW5ELENBQUQsQ0FBZDtBQUNIOzs7a0NBRWExRCxFLEVBQUkwRCxPLEVBQVM7QUFDMUIsYUFBT2hFLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLHlCQUFtQ0ssRUFBbkMsR0FBeUMsT0FBekMsRUFBa0RFLE9BQWxELENBQTBEd0QsT0FBMUQsQ0FBRCxDQUFkO0FBQ0E7OztrQ0FFYTFELEUsRUFBSTtBQUNqQixhQUFPTixPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCx5QkFBbUNLLEVBQW5DLEdBQXlDLFFBQXpDLENBQUQsQ0FBZDtBQUNBLEssQ0FJRDs7OztzQ0FDa0JSLE0sRUFBUUMsTyxFQUFTO0FBQ2xDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLHFCQUFsQixFQUF5Q0MsU0FBekMsQ0FBbURKLE1BQW5ELEVBQTJESyxVQUEzRCxDQUFzRUosT0FBdEUsQ0FBRCxDQUFkO0FBQ0E7OztxQ0FFZ0JELE0sRUFBUUMsTyxFQUFTO0FBQ2pDLGFBQU9LLEdBQUcsQ0FBQyxLQUFLNkQsaUJBQU4sRUFBeUJuRSxNQUF6QixFQUFpQ0MsT0FBakMsQ0FBVjtBQUNBOzs7eUNBRW9CTyxFLEVBQUlSLE0sRUFBUUMsTyxFQUFTO0FBQ3pDLGFBQU9DLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLCtCQUF5Q0ssRUFBekMsR0FBK0NKLFNBQS9DLENBQXlESixNQUF6RCxFQUFpRUssVUFBakUsQ0FBNEVKLE9BQTVFLENBQUQsQ0FBZDtBQUNBOzs7dUNBRWtCbUUsYSxFQUFlO0FBQzlCLGFBQU9sRSxPQUFPLENBQUNOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixxQkFBbEIsRUFBeUMsTUFBekMsRUFBaURPLE9BQWpELENBQXlEMEQsYUFBekQsQ0FBRCxDQUFkO0FBQ0g7Ozt1Q0FFa0I1RCxFLEVBQUk0RCxhLEVBQWU7QUFDckMsYUFBT2xFLE9BQU8sQ0FBQ04sTUFBTSxDQUFDTyxVQUFQLCtCQUF5Q0ssRUFBekMsR0FBK0MsT0FBL0MsRUFBd0RFLE9BQXhELENBQWdFMEQsYUFBaEUsQ0FBRCxDQUFkO0FBQ0E7Ozt1Q0FFa0I1RCxFLEVBQUk7QUFDdEIsYUFBT04sT0FBTyxDQUFDTixNQUFNLENBQUNPLFVBQVAsK0JBQXlDSyxFQUF6QyxHQUErQyxRQUEvQyxDQUFELENBQWQ7QUFDQTs7Ozs7O0FBTUYsSUFBSTZELEdBQUcsR0FBRyxJQUFJdEUsS0FBSixFQUFWO0FBRUFSLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlOEUsS0FBZixHQUF1QkQsR0FBdkI7O0FBRUE5RSxNQUFNLENBQUNDLE9BQVAsQ0FBZStFLFVBQWYsR0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDM0UsT0FBSyxDQUFDNEUsR0FBTixDQUFVLHFDQUFWO0FBQ0E1RSxPQUFLLENBQUM0RSxHQUFOLENBQVVELEdBQVY7QUFDQUgsS0FBRyxDQUFDekUsTUFBSixHQUFjQSxNQUFNLENBQUM4RSxXQUFQLENBQW1CRixHQUFuQixDQUFkO0FBQ0gsQ0FKRDs7QUFPQSxTQUFTdEUsT0FBVCxDQUFpQnlFLFVBQWpCLEVBQTZCO0FBRXpCOUUsT0FBSyxDQUFDNEUsR0FBTixZQUFjRSxVQUFVLENBQUNDLGNBQXpCLGNBQTJDRCxVQUFVLENBQUNFLE9BQXRELHVCQUEwRUYsVUFBVSxDQUFDRyxJQUFyRjtBQUVBLE1BQUlULEdBQUcsQ0FBQ3pFLE1BQUosSUFBY21GLFNBQWxCLEVBQTZCLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxRQUFRLENBQUNILFNBQUQsRUFBWSxxQkFBWixDQUF2QixDQUFQLENBQTdCLEtBQ0s7QUFDRCxRQUFJSSxJQUFJLEdBQUdyRixPQUFPLENBQUNzRixTQUFSLENBQWtCVCxVQUFVLENBQUNRLElBQTdCLENBQVg7QUFDQVIsY0FBVSxDQUFDakUsT0FBWCxDQUFtQnlFLElBQW5CO0FBQ0EsV0FBT2QsR0FBRyxDQUFDekUsTUFBSixDQUFXeUYsSUFBWCxDQUFnQlYsVUFBaEIsRUFDRlcsSUFERSxDQUNHLFVBQUFDLFdBQVcsRUFBSTtBQUFFLGFBQU9DLFFBQVEsQ0FBQ0QsV0FBRCxFQUFjWixVQUFVLENBQUNjLGFBQXpCLENBQWY7QUFBeUQsS0FEN0UsRUFFRkMsS0FGRSxDQUVJLFVBQUFDLEtBQUssRUFBSTtBQUNaLFVBQUksQ0FBQ0EsS0FBSyxDQUFDSCxRQUFYLEVBQXFCLE9BQU9HLEtBQVAsQ0FBckIsS0FFQSxJQUFJQSxLQUFLLENBQUNILFFBQU4sQ0FBZUksSUFBZixJQUF1QkQsS0FBSyxDQUFDSCxRQUFOLENBQWVJLElBQWYsQ0FBb0JDLE1BQS9DLEVBQXVEO0FBQ25ELFlBQU1DLFNBQVMsR0FBR0gsS0FBSyxDQUFDSCxRQUFOLENBQWVJLElBQWYsQ0FBb0JDLE1BQXBCLENBQTJCLENBQTNCLENBQWxCO0FBQ0EsZUFBT2IsT0FBTyxDQUFDQyxNQUFSLENBQWVDLFFBQVEsQ0FBQ1ksU0FBUyxDQUFDQyxNQUFYLEVBQW1CRCxTQUFTLENBQUNFLEtBQTdCLEVBQW9DRixTQUFTLENBQUNHLE1BQTlDLEVBQXNESCxTQUFTLENBQUNJLElBQWhFLENBQXZCLENBQVA7QUFDSCxPQUhELE1BSUssT0FBT2xCLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxRQUFRLENBQUNTLEtBQUssQ0FBQ0gsUUFBTixDQUFlTyxNQUFoQixFQUF3QkosS0FBSyxDQUFDSCxRQUFOLENBQWVXLFVBQXZDLENBQXZCLENBQVA7QUFDWixLQVZNLENBQVA7QUFXSDtBQUNKOztBQUdELFNBQVNYLFFBQVQsQ0FBa0JELFdBQWxCLEVBQStCRSxhQUEvQixFQUE4QztBQUM3QyxNQUFJQSxhQUFhLElBQUlWLFNBQXJCLEVBQWdDLE9BQU9RLFdBQVAsQ0FBaEMsS0FFQyxRQUFRRSxhQUFSO0FBQ0MsU0FBSyxPQUFMO0FBQ0MsWUFBTSx3Q0FBTjs7QUFDRCxTQUFLLFlBQUw7QUFDQyxhQUFPM0YsT0FBTyxDQUFDc0csU0FBUixDQUFrQmIsV0FBVyxDQUFDSyxJQUE5QixDQUFQOztBQUNELFNBQUssU0FBTDtBQUNDLGFBQU9MLFdBQVcsQ0FBQ0ssSUFBbkI7O0FBQ0QsU0FBSyxLQUFMO0FBQ0MsYUFBT0wsV0FBUDs7QUFDRDtBQUNDLFlBQU0saUNBQWlDWixVQUFVLENBQUNjLGFBQTVDLEdBQTRELEdBQWxFO0FBVkY7QUFZRDs7QUFHRCxTQUFTRyxJQUFULENBQWNTLEdBQWQsRUFBbUI7QUFDbEIsTUFBSUEsR0FBRyxDQUFDQyxhQUFKLElBQXNCRCxHQUFHLENBQUNDLGFBQUosT0FBd0IsSUFBbEQsRUFBeUQsT0FBT0QsR0FBUCxDQUF6RCxLQUVBLElBQUlBLEdBQUcsQ0FBQ0UsT0FBUixFQUFpQixPQUFPRixHQUFHLENBQUNFLE9BQUosQ0FBWVgsSUFBbkIsQ0FBakIsS0FFQSxJQUFJUyxHQUFHLENBQUNULElBQVIsRUFBYyxPQUFRUyxHQUFHLENBQUNULElBQUosQ0FBU0EsSUFBVixHQUFpQlMsR0FBRyxDQUFDVCxJQUFKLENBQVNBLElBQTFCLEdBQWlDUyxHQUFHLENBQUNULElBQTVDLENBQWQsS0FDSyxPQUFPUyxHQUFQO0FBQ0w7O0FBR0QsU0FBU25CLFFBQVQsQ0FBa0JhLE1BQWxCLEVBQTBCUyxXQUExQixFQUF1Q0MsT0FBdkMsRUFBZ0RQLElBQWhELEVBQXNEO0FBQ2xELFNBQU87QUFDSFAsU0FBSyxFQUFHLElBREw7QUFFSEksVUFBTSxFQUFHQSxNQUZOO0FBR0hTLGVBQVcsRUFBR0EsV0FIWDtBQUlIQyxXQUFPLEVBQUdBLE9BSlA7QUFLSFAsUUFBSSxFQUFHQTtBQUxKLEdBQVA7QUFPSDs7U0FHYzVGLEc7Ozs7Ozs7MEJBQWYsaUJBQW1Cb0csWUFBbkI7QUFBQTtBQUFBO0FBQUEsUUFJYUMsT0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJYUEsbUJBSmIsaUJBSXFCM0csTUFKckIsRUFJd0U7QUFBQSxrQkFBM0M0RyxJQUEyQyx1RUFBcEM1RyxNQUFNLENBQUM2RyxTQUFQLElBQW9CLEVBQWdCO0FBQUEsa0JBQVpDLE1BQVksdUVBQUgsQ0FBRztBQUNoRSxrQkFBSWpILEtBQUssQ0FBQ2tILGFBQU4sQ0FBb0IvRyxNQUFwQixDQUFKLEVBQWlDQSxNQUFNLENBQUNnSCxJQUFQLENBQVlGLE1BQVosRUFBb0JGLElBQXBCLEVBQWpDLEtBQ0s7QUFDRDVHLHNCQUFNLENBQUMsWUFBRCxDQUFOLEdBQXVCNEcsSUFBdkI7QUFDQTVHLHNCQUFNLENBQUMsY0FBRCxDQUFOLEdBQXlCOEcsTUFBekI7QUFDSDtBQUNKLGFBVkw7O0FBQWlDOUcsa0JBQWpDLDJEQUEwQyxFQUExQztBQUE4Q0MsbUJBQTlDLDJEQUF3RCxFQUF4RDs7QUFBQSxrQkFFU3lHLFlBQVksSUFBSTNCLFNBQWpCLElBQStCLENBQUMyQixZQUFZLENBQUNPLElBQWIsQ0FBa0JDLFVBQWxCLENBQTZCLE1BQTdCLENBRnhDO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQUVxRmxDLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLCtCQUFmLENBRnJGOztBQUFBO0FBWUkwQixtQkFBTyxDQUFDM0csTUFBRCxDQUFQLENBWkosQ0FjQzs7QUFDSXlGLHlCQWZMLEdBZXFCeEYsT0FBTyxDQUFDd0YsYUFmN0I7QUFnQkN4RixtQkFBTyxDQUFDd0YsYUFBUixHQUF3QixLQUF4QjtBQWhCRDtBQUFBLG1CQWtCMEJpQixZQUFZLENBQUMxRyxNQUFELEVBQVNDLE9BQVQsQ0FsQnRDOztBQUFBO0FBa0JRa0gscUJBbEJSO0FBb0JVQyxvQkFwQlYsR0FvQnFCRCxTQUFTLENBQUN2QixJQUFWLENBQWV5QixJQUFmLENBQW9CQyxVQXBCekM7QUFxQk9ULHFCQXJCUCxHQXFCbUJNLFNBQVMsQ0FBQ3ZCLElBQVYsQ0FBZUEsSUFBZixDQUFvQjJCLE1BckJ2QztBQXVCS0MsaUJBdkJMLEdBdUJhLElBQUlDLEtBQUosQ0FBVUwsUUFBVixDQXZCYjtBQXdCSUksaUJBQUssQ0FBQyxDQUFELENBQUwsR0FBV2hDLFFBQVEsQ0FBQzJCLFNBQUQsRUFBWTFCLGFBQVosQ0FBbkIsQ0F4QkosQ0EwQkM7O0FBMUJELGtCQTJCSzJCLFFBQVEsSUFBSSxDQTNCakI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBMkIyQkksS0FBSyxDQUFDLENBQUQsQ0EzQmhDOztBQUFBO0FBOEJJLGlCQUFLRSxFQUFFLEdBQUcsQ0FBVixFQUFhQSxFQUFFLEdBQUdOLFFBQWxCLEVBQTRCTSxFQUFFLEVBQTlCLEVBQWtDO0FBQzlCZixxQkFBTyxDQUFDM0csTUFBRCxFQUFTNkcsU0FBVCxFQUFvQmEsRUFBRSxHQUFDLENBQXZCLENBQVA7QUFDQUYsbUJBQUssQ0FBQ0UsRUFBRCxDQUFMLEdBQVloQixZQUFZLENBQUMxRyxNQUFELEVBQVNDLE9BQVQsQ0FBeEI7QUFDSCxhQWpDTCxDQW1DQzs7O0FBQ0FBLG1CQUFPLENBQUN3RixhQUFSLEdBQXdCQSxhQUF4QjtBQUVJa0MsZUF0Q0wsR0FzQ1csRUF0Q1g7QUFBQTtBQUFBLG1CQXdDVzNDLE9BQU8sQ0FBQzFFLEdBQVIsQ0FBWWtILEtBQVosQ0F4Q1g7O0FBQUE7QUFBQSwwQkF3Q3VDLFVBQUFJLENBQUMsRUFBSTtBQUFFRCxpQkFBRyxHQUFHQSxHQUFHLENBQUNFLE1BQUosQ0FBV2pDLElBQUksQ0FBQ0osUUFBUSxDQUFDb0MsQ0FBRCxFQUFJbkMsYUFBSixDQUFULENBQWYsQ0FBTjtBQUFvRCxhQXhDbEc7O0FBQUEsMEJBd0MrQnFDLE9BeEMvQjs7QUFBQSw2Q0EwQ1dILEdBMUNYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvM0JBLElBQU1JLEtBQUssR0FBR3RJLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBR0EsSUFBTXVJLFdBQVcsR0FBRyxFQUFwQjs7SUFHTUMsSTs7O0FBQ0YsZ0JBQVlDLFNBQVosRUFBdUJDLGFBQXZCLEVBQXNDO0FBQUE7O0FBQ2xDLFNBQUtDLFVBQUwsR0FBa0JyRCxTQUFsQjtBQUNBLFNBQUttRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7Ozs7aUNBQ1lFLEssRUFBTztBQUFFLFdBQUtGLGFBQUwsR0FBcUJFLEtBQXJCO0FBQTRCLGFBQU8sSUFBUDtBQUFjOzs7Ozs7SUFJOURDLGlCOzs7OztBQUNGLDZCQUFZSixTQUFaLEVBQXVCSyxLQUF2QixFQUE4QkosYUFBOUIsRUFBNkM7QUFBQTs7QUFBQTs7QUFDekMsMkZBQU1ELFNBQU4sRUFBaUJDLGFBQWpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixvQkFBbEI7QUFDQSxVQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFIeUM7QUFJNUM7Ozs7NkJBQ1FGLEssRUFBTztBQUFFLFdBQUtFLEtBQUwsR0FBYUYsS0FBYjtBQUFvQixhQUFPLElBQVA7QUFBYzs7O2dDQUN4Q0EsSyxFQUFPO0FBQUUsV0FBS0UsS0FBTCxHQUFjRixLQUFLLElBQUl0RCxTQUFWLEdBQXNCLFlBQVVzRCxLQUFoQyxHQUF3Q0EsS0FBckQ7QUFBNEQsYUFBTyxJQUFQO0FBQWM7Ozs7RUFQbkVKLEk7O0lBVzFCTyxpQjs7Ozs7QUFDRiwrQkFBc0I7QUFBQTs7QUFBQSxRQUFWaEUsR0FBVSx1RUFBSixFQUFJOztBQUFBOztBQUNsQiw0RkFBTUEsR0FBRyxDQUFDMEQsU0FBVixFQUFxQjFELEdBQUcsQ0FBQytELEtBQXpCLEVBQWdDL0QsR0FBRyxDQUFDMkQsYUFBcEM7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLG9CQUFsQjtBQUNBLFdBQUtsQyxJQUFMLEdBQVkxQixHQUFHLENBQUMwQixJQUFoQjtBQUNBLFdBQUt1QyxZQUFMLEdBQW9CakUsR0FBRyxDQUFDaUUsWUFBeEI7QUFKa0I7QUFLckI7OztFQU4yQkgsaUI7O0lBVTFCSSxROzs7OztBQUNGLHNCQUFzQjtBQUFBOztBQUFBLFFBQVZsRSxHQUFVLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xCLG1GQUFNQSxHQUFHLENBQUMwRCxTQUFWLEVBQXFCMUQsR0FBRyxDQUFDK0QsS0FBekIsRUFBZ0MvRCxHQUFHLENBQUMyRCxhQUFwQztBQUNBLFdBQUtDLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxXQUFLTyxRQUFMLEdBQWdCbkUsR0FBRyxDQUFDbUUsUUFBcEI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCcEUsR0FBRyxDQUFDb0UsUUFBcEI7QUFKa0I7QUFLckI7OztFQU5rQk4saUI7O0lBVWpCTyxZOzs7OztBQUNGLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsV0FBS1QsVUFBTCxHQUFrQixlQUFsQjtBQUNBLFdBQUtVLGFBQUwsR0FBcUIvRCxTQUFyQjtBQUZVO0FBR2I7OztFQUpzQmtELEk7O0lBUXJCYyxRLEdBQ0Ysa0JBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFDdEIsT0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLFFBQWxCO0FBQ0EsT0FBS0gsYUFBTCxHQUFxQi9ELFNBQXJCO0FBQ0EsT0FBS3dELEtBQUwsR0FBYXhELFNBQWI7QUFDQSxPQUFLbUUsVUFBTCxHQUFrQm5FLFNBQWxCO0FBQ0EsT0FBS29FLFFBQUwsR0FBZ0JwRSxTQUFoQjtBQUNBLE9BQUtxRSxVQUFMLEdBQWtCckUsU0FBbEI7QUFDQSxPQUFLc0UsVUFBTCxHQUFrQnRFLFNBQWxCO0FBQ0gsQzs7QUFLTHhGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiO0FBQ0E4SSxtQkFBaUIsRUFBakJBLGlCQUZhO0FBR2JFLG1CQUFpQixFQUFqQkEsaUJBSGE7QUFJYkUsVUFBUSxFQUFSQSxRQUphO0FBS2JHLGNBQVksRUFBWkE7QUFMYSxDQUFqQjs7QUFTQXRKLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlOEosWUFBZixHQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDcEMsU0FBT3hCLEtBQUssQ0FDUHlCLElBREUsQ0FDRyxjQURILEVBQ21CO0FBQ2xCcEIsY0FBVSxFQUFFbUIsSUFBSSxDQUFDbkIsVUFEQztBQUVsQkYsYUFBUyxFQUFFcUIsSUFBSSxDQUFDckIsU0FGRTtBQUdsQkssU0FBSyxFQUFFZ0IsSUFBSSxDQUFDaEIsS0FITTtBQUlsQkosaUJBQWEsRUFBRW9CLElBQUksQ0FBQ3BCLGFBSkY7QUFLbEJqQyxRQUFJLEVBQUVxRCxJQUFJLENBQUNyRCxJQUxPO0FBTWxCdUMsZ0JBQVksRUFBRWMsSUFBSSxDQUFDZCxZQU5EO0FBT2xCRSxZQUFRLEVBQUVZLElBQUksQ0FBQ1osUUFQRztBQVFsQkMsWUFBUSxFQUFFVyxJQUFJLENBQUNYLFFBUkc7QUFTbEJFLGlCQUFhLEVBQUVTLElBQUksQ0FBQ1Q7QUFURixHQURuQixFQVlGeEQsSUFaRSxDQVlHLFVBQUFFLFFBQVEsRUFBSTtBQUVkLFFBQUlpRSxLQUFLLEdBQUcsSUFBSVYsUUFBSixFQUFaO0FBRUFVLFNBQUssQ0FBQ1QsWUFBTixHQUFxQnhELFFBQVEsQ0FBQ0ksSUFBVCxDQUFjb0QsWUFBbkM7QUFDQVMsU0FBSyxDQUFDWCxhQUFOLEdBQXNCdEQsUUFBUSxDQUFDSSxJQUFULENBQWNrRCxhQUFwQztBQUNBVyxTQUFLLENBQUNsQixLQUFOLEdBQWMvQyxRQUFRLENBQUNJLElBQVQsQ0FBYzJDLEtBQTVCO0FBQ0FrQixTQUFLLENBQUNQLFVBQU4sR0FBbUIxRCxRQUFRLENBQUNJLElBQVQsQ0FBY3NELFVBQWpDO0FBQ0FPLFNBQUssQ0FBQ04sUUFBTixHQUFpQjNELFFBQVEsQ0FBQ0ksSUFBVCxDQUFjdUQsUUFBL0I7QUFDQU0sU0FBSyxDQUFDTCxVQUFOLEdBQW1CNUQsUUFBUSxDQUFDSSxJQUFULENBQWN3RCxVQUFqQztBQUNBSyxTQUFLLENBQUNKLFVBQU4sR0FBbUI3RCxRQUFRLENBQUNJLElBQVQsQ0FBY3lELFVBQWpDO0FBRUFLLGNBQVUsQ0FBQ0gsSUFBSSxDQUFDckIsU0FBTixFQUFpQnVCLEtBQWpCLENBQVY7QUFFQSxXQUFPQSxLQUFQO0FBRUgsR0E1QkUsQ0FBUDtBQTZCSCxDQTlCRDs7QUFpQ0EsU0FBU0MsVUFBVCxDQUFvQnhCLFNBQXBCLEVBQStCdUIsS0FBL0IsRUFBc0M7QUFDbEN6QixhQUFXLENBQUNFLFNBQUQsQ0FBWCxHQUF5QnVCLEtBQXpCO0FBQ0g7O0FBRUQsU0FBU0UsUUFBVCxDQUFrQnpCLFNBQWxCLEVBQTZCO0FBQ3pCLFNBQU9GLFdBQVcsQ0FBQ0UsU0FBRCxDQUFsQjtBQUNILEM7Ozs7Ozs7Ozs7O0FDdEhELElBQU03RCxHQUFHLEdBQUc1RSxtQkFBTyxDQUFDLDJCQUFELENBQW5COztBQUNBLElBQU1tSyxNQUFNLEdBQUduSyxtQkFBTyxDQUFDLGlDQUFELENBQXRCOztBQUNBLElBQU1JLEtBQUssR0FBR0osbUJBQU8sQ0FBQywrQkFBRCxDQUFyQixDLENBRUE7OztBQUNBRixNQUFNLENBQUNDLE9BQVAsR0FBaUI2RSxHQUFHLENBQUNDLEtBQXJCOztBQUVBL0UsTUFBTSxDQUFDQyxPQUFQLENBQWUrRSxVQUFmLEdBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQyxNQUFJQSxHQUFHLElBQUlPLFNBQVgsRUFBc0JQLEdBQUcsQ0FBQ3FGLE9BQUosR0FBYyxLQUFkO0FBQ3RCeEYsS0FBRyxDQUFDRSxVQUFKLENBQWUxRSxLQUFLLENBQUNpSyxTQUFOLENBQWdCRixNQUFNLENBQUNHLE1BQXZCLEVBQStCdkYsR0FBL0IsQ0FBZjtBQUNILENBSEQ7O0FBS0FqRixNQUFNLENBQUNDLE9BQVAsQ0FBZXdLLGVBQWYsR0FBaUMsWUFBTTtBQUNuQyxTQUFPM0YsR0FBRyxDQUFDQyxLQUFKLENBQVUxRSxNQUFWLENBQWlCZ0ssTUFBakIsQ0FBd0JaLFlBQS9CO0FBQ0gsQ0FGRDs7QUFJQXpKLE1BQU0sQ0FBQ0MsT0FBUCxDQUFleUssUUFBZixHQUEwQkwsTUFBTSxDQUFDTSxHQUFqQzs7QUFFQTNLLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkssR0FBZixHQUFxQixZQUFNO0FBQUUsU0FBTyxRQUFQO0FBQWlCLENBQTlDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLElBQU1wQyxLQUFLLEdBQUd0SSxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBLElBQU1JLEtBQUssR0FBR0osbUJBQU8sQ0FBQywrQkFBRCxDQUFyQjs7QUFDQSxJQUFNeUssR0FBRyxHQUFHekssbUJBQU8sQ0FBQyxpQ0FBRCxDQUFQLENBQW9CeUssR0FBaEM7O0FBQ0EsSUFBTVgsSUFBSSxHQUFHOUosbUJBQU8sQ0FBQyw2QkFBRCxDQUFwQjs7QUFJQSxTQUFTMkssY0FBVCxDQUF3QlIsTUFBeEIsRUFBZ0M7QUFFNUIvSixPQUFLLENBQUM0RSxHQUFOLENBQVUsd0JBQVY7QUFFQSxNQUFJbUYsTUFBTSxJQUFJN0UsU0FBZCxFQUF5QixNQUFNLGdCQUFOO0FBQ3pCLE1BQUk2RSxNQUFNLENBQUNTLFFBQVAsSUFBbUJ0RixTQUF2QixFQUFrQyxNQUFNLGtCQUFOO0FBQ2xDLE1BQUk2RSxNQUFNLENBQUNVLFNBQVAsSUFBb0J2RixTQUF4QixFQUFtQyxNQUFNLG1CQUFOO0FBQ25DLE1BQUk2RSxNQUFNLENBQUMxQixTQUFQLElBQW9CbkQsU0FBeEIsRUFBbUMsTUFBTSxtQkFBTjtBQUVuQ2xGLE9BQUssQ0FBQzRFLEdBQU4sQ0FBVSxZQUFWO0FBRUEsU0FBTyxJQUFQO0FBRUg7O0FBR0QsU0FBUzhGLGNBQVQsQ0FBd0JYLE1BQXhCLEVBQWdDO0FBRTVCN0IsT0FBSyxDQUFDeUMsUUFBTixDQUFlQyxPQUFmLEdBQXlCYixNQUFNLENBQUNTLFFBQWhDO0FBQ0F0QyxPQUFLLENBQUN5QyxRQUFOLENBQWVFLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLFFBQTlCLElBQTBDLDBCQUExQzs7QUFFQSxNQUFJVCxHQUFHLENBQUNVLEtBQUosSUFBYVYsR0FBRyxDQUFDVyxLQUFyQixFQUE0QjtBQUV4QjlDLFNBQUssQ0FBQytDLFlBQU4sQ0FBbUI1SyxPQUFuQixDQUEyQjZLLEdBQTNCLENBQStCLFVBQUE3SyxPQUFPLEVBQUk7QUFDdENMLFdBQUssQ0FBQzRFLEdBQU47QUFDQTVFLFdBQUssQ0FBQzRFLEdBQU4sQ0FBVSxhQUFWO0FBQ0E1RSxXQUFLLENBQUM0RSxHQUFOLENBQVV2RSxPQUFWO0FBQ0EsYUFBT0EsT0FBUDtBQUNILEtBTEQ7QUFPQTZILFNBQUssQ0FBQytDLFlBQU4sQ0FBbUJ0RixRQUFuQixDQUE0QnVGLEdBQTVCLENBQWdDLFVBQUF2RixRQUFRLEVBQUk7QUFDeEMzRixXQUFLLENBQUM0RSxHQUFOO0FBQ0E1RSxXQUFLLENBQUM0RSxHQUFOLENBQVUsY0FBVjtBQUNBNUUsV0FBSyxDQUFDNEUsR0FBTixDQUFVZSxRQUFRLENBQUNJLElBQW5CO0FBQ0EsYUFBT0osUUFBUDtBQUNILEtBTEQ7QUFPSDtBQUVKOztBQUdEakcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBRWJrRixhQUFXLEVBQUcscUJBQVNrRixNQUFULEVBQWlCO0FBQzNCLFdBQU8sSUFBSSxLQUFLb0IsU0FBVCxDQUFtQnBCLE1BQW5CLENBQVA7QUFDSCxHQUpZO0FBTWJ6SixZQUFVLEVBQUcsb0JBQVMyRSxJQUFULEVBQWVtRyxNQUFmLEVBQXVCO0FBQ2hDLFdBQU8sSUFBSSxLQUFLQyxVQUFULENBQW9CcEcsSUFBcEIsRUFBMEJtRyxNQUExQixDQUFQO0FBQ0gsR0FSWTtBQVdiQyxZQUFVO0FBQUE7QUFBQTtBQUVOLDBCQUF3QztBQUFBLFVBQTVCcEcsSUFBNEIsdUVBQXJCLEdBQXFCO0FBQUEsVUFBaEJtRyxNQUFnQix1RUFBUCxLQUFPOztBQUFBOztBQUNwQyxXQUFLbkcsSUFBTCxHQUFZQSxJQUFJLElBQUksR0FBcEI7QUFDQSxXQUFLcUcsTUFBTCxHQUFjLEVBQWQ7QUFDQSxXQUFLRixNQUFMLEdBQWNBLE1BQU0sSUFBSSxLQUF4QjtBQUNBLFdBQUs5RixJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUt1RixPQUFMLEdBQWUsRUFBZixDQUxvQyxDQU1wQzs7QUFDQSxXQUFLN0YsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFLRCxjQUFMLEdBQXNCL0UsS0FBSyxDQUFDdUwsSUFBTixFQUF0QjtBQUNBLFdBQUszRixhQUFMLEdBQXFCeUUsR0FBRyxDQUFDekUsYUFBekI7QUFDSDs7QUFaSztBQUFBO0FBQUEsOEJBY0VYLElBZEYsRUFjUTtBQUFFLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUFrQixlQUFPLElBQVA7QUFBYztBQWQxQztBQUFBO0FBQUEsZ0NBZUlxRyxNQWZKLEVBZVk7QUFBRSxhQUFLQSxNQUFMLEdBQWVBLE1BQU0sSUFBSUEsTUFBTSxDQUFDcEUsYUFBakIsSUFBbUNvRSxNQUFNLENBQUNwRSxhQUFQLE9BQTJCLElBQS9ELEdBQXVFb0UsTUFBTSxDQUFDRSxLQUFQLEVBQXZFLEdBQXdGRixNQUF0RztBQUE4RyxlQUFPLElBQVA7QUFBYztBQWYxSTtBQUFBO0FBQUEsZ0NBZ0JJRixNQWhCSixFQWdCWTtBQUFFLGFBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUFzQixlQUFPLElBQVA7QUFBYztBQWhCbEQ7QUFBQTtBQUFBLDhCQWlCRTlGLElBakJGLEVBaUJRO0FBQUUsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQWtCLGVBQU8sSUFBUDtBQUFjO0FBakIxQztBQUFBO0FBQUEsaUNBa0JLdUYsT0FsQkwsRUFrQmM7QUFBRSxhQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFBd0IsZUFBTyxJQUFQO0FBQWM7QUFsQnREO0FBQUE7QUFBQSxtQ0FvQk87QUFBRSxhQUFLN0YsT0FBTDtBQUFnQixlQUFPLElBQVA7QUFBYyxPQXBCdkMsQ0FzQk47O0FBdEJNO0FBQUE7QUFBQSxtQ0F5Qk95RyxJQXpCUCxFQXlCYTtBQUFFLGFBQUs3RixhQUFMLEdBQXFCNkYsSUFBSSxHQUFFQSxJQUFGLEdBQVNwQixHQUFHLENBQUN6RSxhQUF0QztBQUFxRCxlQUFPLElBQVA7QUFBYyxPQXpCbEYsQ0EyQk47O0FBM0JNO0FBQUE7QUFBQSxpQ0E0Qkt4RixPQTVCTCxFQTRCYztBQUNoQixZQUFJQSxPQUFPLElBQUk4RSxTQUFmLEVBQTBCLE9BQU8sSUFBUDtBQUMxQixhQUFLd0csWUFBTCxDQUFrQnRMLE9BQU8sQ0FBQ3dGLGFBQTFCO0FBQ0EsZUFBTyxJQUFQO0FBQ0g7QUFoQ0s7QUFBQTtBQUFBLDBCQXVCYTtBQUFFLGVBQVEsS0FBSzhGLFlBQUwsSUFBcUIsS0FBN0I7QUFBc0MsT0F2QnJEO0FBQUEsd0JBd0JXQyxHQXhCWCxFQXdCZ0I7QUFBRSxhQUFLL0YsYUFBTCxHQUFzQitGLEdBQUcsSUFBS0EsR0FBRyxLQUFLLElBQWpCLEdBQXlCLEtBQXpCLEdBQWlDLFlBQXREO0FBQXFFO0FBeEJ2Rjs7QUFBQTtBQUFBLEtBWEc7QUFnRGJSLFdBQVM7QUFBQTtBQUFBO0FBRUwsdUJBQVlwQixNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCUSxvQkFBYyxDQUFDUixNQUFELENBQWQ7QUFDQSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLNkIsYUFBTCxHQUFxQixDQUFyQjtBQUNBbEIsb0JBQWMsQ0FBQ1gsTUFBRCxDQUFkO0FBQ0g7O0FBUEk7QUFBQTtBQUFBLHFDQVNVO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBT0wsSUFBSSxDQUFDRCxZQUFMLENBQ0gsSUFBSUMsSUFBSSxDQUFDakIsaUJBQVQsQ0FBMkIsS0FBS3NCLE1BQUwsQ0FBWTFCLFNBQXZDLEVBQWtEd0QsV0FBbEQsQ0FBOEQsS0FBSzlCLE1BQUwsQ0FBWVUsU0FBMUUsQ0FERyxFQUdOaEYsSUFITSxDQUdELFVBQUFtRSxLQUFLLEVBQUk7QUFDWCxpQkFBT0EsS0FBSyxDQUFDVCxZQUFiO0FBQ0gsU0FMTSxDQUFQO0FBTUg7QUF6Qkk7QUFBQTtBQUFBLDJCQTRCQXJFLFVBNUJBLEVBNEJZO0FBQUE7O0FBRWIsaUJBQVM4QixPQUFULENBQWlCa0YsR0FBakIsRUFBc0I7QUFDbEIsaUJBQU8sQ0FBQ2hILFVBQVUsQ0FBQ0MsY0FBWCxjQUErQkQsVUFBVSxDQUFDQyxjQUExQyxjQUE0REQsVUFBVSxDQUFDRSxPQUF2RSxVQUFxRixFQUF0RixFQUEwRmdELE1BQTFGLENBQWlHOEQsR0FBakcsQ0FBUDtBQUNIOztBQUdEaEgsa0JBQVUsQ0FBQ2lILFVBQVg7QUFFQSxZQUFNQyxTQUFTLEdBQUssS0FBS2pDLE1BQUwsQ0FBWWlDLFNBQVosSUFBeUI5RyxTQUExQixHQUFzQyxLQUFLNkUsTUFBTCxDQUFZaUMsU0FBbEQsR0FBOEQsRUFBakYsQ0FUYSxDQVdiOztBQUNBLFlBQU0vRyxJQUFJLEdBQUcrRyxTQUFTLEdBQUdsSCxVQUFVLENBQUNHLElBQXBDO0FBQ0EsWUFBTXFHLE1BQU0sR0FBR3hHLFVBQVUsQ0FBQ3dHLE1BQTFCO0FBQ0EsWUFBTUYsTUFBTSxHQUFHdEcsVUFBVSxDQUFDc0csTUFBMUIsQ0FkYSxDQWdCYjs7QUFDQSxZQUFJYSxPQUFPLEdBQUdoSCxJQUFkOztBQUNBLFlBQUtxRyxNQUFNLElBQUlwRyxTQUFYLElBQTBCZ0gsTUFBTSxDQUFDQyxJQUFQLENBQVliLE1BQVosRUFBb0I1RCxNQUFwQixHQUE2QixDQUEzRCxFQUErRDtBQUMzRCxjQUFJMEUsV0FBVyxHQUFHRixNQUFNLENBQUNDLElBQVAsQ0FBWWIsTUFBWixFQUFvQmUsR0FBcEIsQ0FBd0IsVUFBQUMsR0FBRyxFQUFJO0FBQzdDLG1CQUFPQSxHQUFHLEdBQUcsR0FBTixHQUFZaEIsTUFBTSxDQUFDZ0IsR0FBRCxDQUF6QjtBQUNILFdBRmlCLEVBRWZDLElBRmUsQ0FFVixHQUZVLENBQWxCO0FBR0FOLGlCQUFPLEdBQUdBLE9BQU8sQ0FBQ2pFLE1BQVIsQ0FBZSxHQUFmLEVBQW9CQSxNQUFwQixDQUEyQm9FLFdBQTNCLENBQVY7QUFDSDs7QUFFRHBNLGFBQUssQ0FBQzRFLEdBQU4sQ0FBVWdDLE9BQU8sQ0FBQyxXQUFXcUYsT0FBWixDQUFqQjtBQUVBLFlBQUlPLFdBQVcsR0FBRztBQUNkQyxhQUFHLEVBQUVSLE9BRFM7QUFFZGIsZ0JBQU0sRUFBRUEsTUFBTSxJQUFJLEtBRko7QUFHZHNCLGlCQUFPLEVBQUVyQyxHQUFHLENBQUNxQyxPQUFKLENBQVlyTSxPQUhQO0FBSWR3SyxpQkFBTyxFQUFFO0FBQ0wsc0JBQVUsMEJBREw7QUFFTCw0QkFBZ0I7QUFGWCxXQUpLLENBVWxCOztBQVZrQixTQUFsQjtBQVdBN0ssYUFBSyxDQUFDMk0sU0FBTixDQUFnQkgsV0FBVyxDQUFDM0IsT0FBNUIsRUFBcUMvRixVQUFVLENBQUMrRixPQUFoRCxFQXRDYSxDQXdDYjs7QUFDQSxZQUFJL0YsVUFBVSxDQUFDUSxJQUFYLElBQW1CSixTQUF2QixFQUFrQ3NILFdBQVcsQ0FBQ3pHLElBQVosR0FBbUJqQixVQUFVLENBQUNRLElBQTlCO0FBRWxDLFlBQU1zSCxZQUFZLEdBQUd2QyxHQUFHLENBQUN1QixhQUFKLEdBQW1CdkIsR0FBRyxDQUFDdUIsYUFBdkIsR0FBdUMsQ0FBNUQsQ0EzQ2EsQ0E4Q2I7O0FBQ0EsWUFBSSxLQUFLN0IsTUFBTCxDQUFZWixZQUFaLElBQTRCakUsU0FBaEMsRUFBMkM7QUFDdkNsRixlQUFLLENBQUM0RSxHQUFOLENBQVVnQyxPQUFPLENBQUMsNENBQUQsQ0FBakI7O0FBQ0EsY0FBSSxFQUFFLEtBQUtnRixhQUFQLEdBQXVCZ0IsWUFBM0IsRUFBeUM7QUFDckMsZ0JBQUksQ0FBQ3ZDLEdBQUcsQ0FBQ3FDLE9BQUosQ0FBWUcsS0FBakIsRUFBd0IsbUVBQTRERCxZQUE1RCx1Q0FBeEIsS0FFQSxPQUFPNU0sS0FBSyxDQUFDOE0sS0FBTixDQUFZekMsR0FBRyxDQUFDcUMsT0FBSixDQUFZRyxLQUF4QixFQUErQmpHLE9BQU8sQ0FBQyxxQ0FBRCxDQUF0QyxFQUNGbkIsSUFERSxDQUNHLFlBQU07QUFBRSxxQkFBTyxLQUFJLENBQUNELElBQUwsQ0FBVVYsVUFBVixDQUFQO0FBQThCLGFBRHpDLENBQVA7QUFFSCxXQUxELE1BTUssT0FBTyxLQUFLMkUsWUFBTCxHQUFvQmhFLElBQXBCLENBQXlCLFVBQUEwRCxZQUFZLEVBQUk7QUFDakQsaUJBQUksQ0FBQ1ksTUFBTCxDQUFZWixZQUFaLEdBQTJCQSxZQUEzQjtBQUNBLGlCQUFJLENBQUN5QyxhQUFMLEdBQXFCLENBQXJCO0FBQ0E1TCxpQkFBSyxDQUFDNEUsR0FBTixDQUFVZ0MsT0FBTyxDQUFDLDJCQUFELENBQWpCO0FBQ0EsbUJBQU8sS0FBSSxDQUFDcEIsSUFBTCxDQUFVVixVQUFWLENBQVA7QUFDSCxXQUxXLENBQVA7QUFNUixTQWRELE1BZUs7QUFDRDlFLGVBQUssQ0FBQzRFLEdBQU4sQ0FBVWdDLE9BQU8sQ0FBQyx3QkFBRCxDQUFqQjtBQUNBNEYscUJBQVcsQ0FBQzNCLE9BQVosQ0FBb0JrQyxhQUFwQixHQUFvQyxZQUFZLEtBQUtoRCxNQUFMLENBQVlaLFlBQTVEO0FBQ0EsaUJBQU9qQixLQUFLLENBQUM3SCxPQUFOLENBQWNtTSxXQUFkLEVBQ0YvRyxJQURFLENBQ0csVUFBQUUsUUFBUSxFQUFJO0FBQ2QzRixpQkFBSyxDQUFDNEUsR0FBTixDQUFVZ0MsT0FBTyxDQUFDLHFCQUFELENBQWpCO0FBQ0EsbUJBQU9qQixRQUFQO0FBQ0gsV0FKRSxFQUtGRSxLQUxFLENBS0ksVUFBQUMsS0FBSyxFQUFJO0FBQ1o5RixpQkFBSyxDQUFDNEUsR0FBTixDQUFVZ0MsT0FBTyxDQUFDZCxLQUFLLEdBQUVBLEtBQUYsR0FBVSxnQkFBaEIsQ0FBakI7O0FBQ0EsZ0JBQUlBLEtBQUssQ0FBQ08sSUFBTixLQUFlLGNBQW5CLEVBQW1DO0FBQy9CckcsbUJBQUssQ0FBQzRFLEdBQU4sQ0FBVWdDLE9BQU8sQ0FBQyx1QkFBdUJkLEtBQUssQ0FBQ2lFLE1BQU4sQ0FBYTJDLE9BQXJDLENBQWpCO0FBQ0EscUJBQU92SCxPQUFPLENBQUNDLE1BQVIsQ0FBZVUsS0FBZixDQUFQO0FBQ0gsYUFIRCxNQUlLO0FBQ0Q7QUFDQSxrQkFBS0EsS0FBSyxDQUFDSCxRQUFOLENBQWVPLE1BQWYsS0FBMEIsR0FBM0IsSUFDQ0osS0FBSyxDQUFDSCxRQUFOLENBQWVJLElBQWYsQ0FBb0JDLE1BQXBCLElBQStCRixLQUFLLENBQUNILFFBQU4sQ0FBZUksSUFBZixDQUFvQkMsTUFBcEIsQ0FBMkIsQ0FBM0IsRUFBOEJLLElBQTlCLElBQXNDLGVBRDFFLEVBRU07QUFDRXJHLHFCQUFLLENBQUM0RSxHQUFOLENBQVVnQyxPQUFPLENBQUMsOEJBQUQsQ0FBakI7QUFDQSxxQkFBSSxDQUFDbUQsTUFBTCxDQUFZWixZQUFaLEdBQTJCLElBQTNCO0FBQ0EsdUJBQU8sS0FBSSxDQUFDM0QsSUFBTCxDQUFVVixVQUFWLENBQVA7QUFDSCxlQU5MLE1BT0ssT0FBT0ssT0FBTyxDQUFDQyxNQUFSLENBQWVVLEtBQWYsQ0FBUDtBQUNSO0FBQ0osV0F0QkUsQ0FBUDtBQXVCSDtBQUNKO0FBckhJOztBQUFBO0FBQUE7QUFoREksQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNoREFwRyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFFYnVLLFFBQU0sRUFBRTtBQUVKRixXQUFPLEVBQUcsSUFGTjtBQUlKM0IsYUFBUyxFQUFHLGtFQUpSO0FBS0pvQyxhQUFTLEVBQUcsS0FMUjtBQU1KRCxZQUFRLEVBQUcsMENBTlA7QUFPSndCLGFBQVMsRUFBRyxJQVBSO0FBUUpnQixnQkFBWSxFQUFHLElBUlg7QUFTSkMsaUJBQWEsRUFBRztBQVRaLEdBRks7QUFlYjVDLEtBQUcsRUFBRTtBQUNEVSxTQUFLLEVBQWEsS0FEakI7QUFDK0I7QUFDaENtQyxXQUFPLEVBQVcsS0FGakI7QUFFK0I7QUFDaENsQyxTQUFLLEVBQWEsS0FIakI7QUFHK0I7QUFDaENZLGlCQUFhLEVBQUssQ0FKakI7QUFJK0I7QUFDaENoRyxpQkFBYSxFQUFLLFlBTGpCO0FBSytCO0FBQ2hDOEcsV0FBTyxFQUFHO0FBQUU7QUFDUkcsV0FBSyxFQUFHLEdBREY7QUFDVTtBQUNoQnhNLGFBQU8sRUFBRyxJQUZKLENBRVU7O0FBRlY7QUFOVDtBQWZRLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTWtHLFNBQVMsR0FBRzNHLG1CQUFPLENBQUMscUZBQUQsQ0FBekI7O0FBQ0EsSUFBTUksS0FBSyxHQUFHSixtQkFBTyxDQUFDLCtCQUFELENBQXJCOztBQUdBRixNQUFNLENBQUNDLE9BQVAsQ0FBZTRGLFNBQWYsR0FBMkIsVUFBQ0QsSUFBRCxFQUFVO0FBQ2pDLE1BQUlBLElBQUksSUFBSUosU0FBWixFQUF1QixPQUFPSSxJQUFQLENBQXZCLENBQ0E7QUFEQSxPQUVLLE9BQVFBLElBQUksQ0FBQ1MsSUFBTCxJQUFhYixTQUFkLEdBQTBCLElBQUlpSSxlQUFKLENBQW9CN0gsSUFBcEIsRUFBMEJDLFNBQTFCLEVBQTFCLEdBQWtFRCxJQUF6RTtBQUNSLENBSkQ7O0FBT0E1RixNQUFNLENBQUNDLE9BQVAsQ0FBZXlOLFdBQWYsR0FBNkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ25DLE1BQUlBLElBQUksSUFBSW5JLFNBQVosRUFBdUIsT0FBT21JLElBQVAsQ0FBdkIsS0FDSyxPQUFRQSxJQUFJLENBQUN0SCxJQUFMLElBQWFiLFNBQWQsR0FBMEJtSSxJQUExQixHQUFpQyxJQUFJRixlQUFKLENBQW9CRSxJQUFwQixFQUEwQkQsV0FBMUIsRUFBeEM7QUFDUixDQUhEOztBQU1BMU4sTUFBTSxDQUFDQyxPQUFQLENBQWU0RyxTQUFmLEdBQTJCLFVBQUNSLElBQUQsRUFBVTtBQUNqQyxTQUFPUSxTQUFTLENBQUNSLElBQUQsQ0FBaEI7QUFDSCxDQUZEOztJQUtNb0gsZTs7O0FBRUYsNkJBQTJCO0FBQUEsUUFBZkcsUUFBZSx1RUFBSixFQUFJOztBQUFBOztBQUN2QixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7O2dDQUVXO0FBQUE7O0FBRVIsVUFBSSxLQUFLQSxRQUFMLENBQWN2SCxJQUFkLElBQXNCYixTQUExQixFQUFxQyxPQUFPLEtBQUtvSSxRQUFaO0FBRXJDLFdBQUt2SCxJQUFMLEdBQVksRUFBWjtBQUNBLFdBQUtBLElBQUwsQ0FBVXdILFVBQVYsR0FBdUIsRUFBdkIsQ0FMUSxDQU9SOztBQUNBckIsWUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS21CLFFBQWpCLEVBQTJCckYsT0FBM0IsQ0FBbUMsVUFBQ3FFLEdBQUQsRUFBUztBQUN4QyxZQUFJa0IsS0FBSyxHQUFHLEtBQUksQ0FBQ0YsUUFBTCxDQUFjaEIsR0FBZCxDQUFaOztBQUNBLFlBQUlrQixLQUFLLElBQUl0SSxTQUFiLEVBQXdCO0FBQ3BCLGNBQUksQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFldUksUUFBZixDQUF3Qm5CLEdBQXhCLENBQUosRUFBa0MsS0FBSSxDQUFDdkcsSUFBTCxDQUFVdUcsR0FBVixJQUFpQmtCLEtBQWpCLENBQWxDLEtBRUEsSUFBSUEsS0FBSyxDQUFDL0csYUFBTixJQUF1QitHLEtBQUssQ0FBQy9HLGFBQU4sRUFBM0IsRUFBa0Q7QUFDOUMsZ0JBQUksS0FBSSxDQUFDVixJQUFMLENBQVUySCxhQUFWLElBQTJCeEksU0FBL0IsRUFBMEMsS0FBSSxDQUFDYSxJQUFMLENBQVUySCxhQUFWLEdBQTBCLEVBQTFCO0FBQzFDLGlCQUFJLENBQUMzSCxJQUFMLENBQVUySCxhQUFWLENBQXdCcEIsR0FBRyxDQUFDakYsVUFBSixDQUFlLElBQWYsSUFBc0JpRixHQUFHLENBQUNxQixNQUFKLENBQVcsS0FBS2pHLE1BQWhCLENBQXRCLEdBQWdENEUsR0FBeEUsSUFBK0U7QUFBRXZHLGtCQUFJLEVBQUU7QUFBRTBGLG9CQUFJLEVBQUUrQixLQUFLLENBQUMvQixJQUFkO0FBQW9COUssa0JBQUUsRUFBRTZNLEtBQUssQ0FBQzdNO0FBQTlCO0FBQVIsYUFBL0U7QUFDSCxXQUhELE1BS0EsSUFBSWlILEtBQUssQ0FBQ2dHLE9BQU4sQ0FBY0osS0FBZCxLQUF3QmxCLEdBQUcsQ0FBQ2pGLFVBQUosQ0FBZSxJQUFmLENBQTVCLEVBQWtEO0FBQzlDckgsaUJBQUssQ0FBQzRFLEdBQU4sQ0FBVSxpREFBaURpSixHQUEzRDtBQUNILFdBRkQsTUFHSyxLQUFJLENBQUM5SCxJQUFMLENBQVV3SCxVQUFWLENBQXFCakIsR0FBckIsSUFBNEJrQixLQUE1QjtBQUNSO0FBQ0osT0FmRDtBQWlCQSxhQUFPO0FBQUV6SCxZQUFJLEVBQUUsS0FBS0E7QUFBYixPQUFQO0FBRUg7OztrQ0FHYTtBQUFBOztBQUVWLFVBQUssS0FBS3VILFFBQUwsQ0FBY3ZILElBQWQsSUFBc0JiLFNBQXZCLElBQXFDLEtBQUtvSSxRQUFMLENBQWM3RyxhQUFuRCxJQUFxRSxLQUFLNkcsUUFBTCxDQUFjN0csYUFBZCxPQUFrQyxJQUEzRyxFQUFrSCxPQUFPLEtBQUs2RyxRQUFaO0FBRWxILFVBQUl2SCxJQUFJLEdBQUcsS0FBS3VILFFBQUwsQ0FBY3ZILElBQXpCO0FBRUEsVUFBSVMsR0FBRyxHQUFHeEcsS0FBSyxDQUFDOE4sV0FBTixDQUFrQi9ILElBQUksQ0FBQzBGLElBQXZCLEVBQTZCMUYsSUFBSSxDQUFDcEYsRUFBbEMsRUFBc0NvRixJQUFJLENBQUN3SCxVQUEzQyxDQUFWO0FBRUEsVUFBSXhILElBQUksQ0FBQzJILGFBQUwsSUFBc0J4SSxTQUExQixFQUFxQyxPQUFPc0IsR0FBUCxDQUFyQyxLQUVBMEYsTUFBTSxDQUFDQyxJQUFQLENBQVlwRyxJQUFJLENBQUMySCxhQUFqQixFQUFnQ3pGLE9BQWhDLENBQXdDLFVBQUM0RixHQUFELEVBQVM7QUFDN0MsWUFBSUUsUUFBUSxHQUFHaEksSUFBSSxDQUFDMkgsYUFBTCxDQUFtQkcsR0FBbkIsRUFBd0I5SCxJQUF2Qzs7QUFDQSxZQUFJZ0ksUUFBUSxJQUFJN0ksU0FBaEIsRUFBMkI7QUFDdkIsY0FBSTBDLEtBQUssQ0FBQ2dHLE9BQU4sQ0FBY0csUUFBZCxDQUFKLEVBQTZCO0FBQ3pCL04saUJBQUssQ0FBQzRFLEdBQU4sQ0FBVSxpREFBaURpSixHQUEzRDtBQUNILFdBRkQsTUFHSztBQUNELGdCQUFJRyxNQUFNLEdBQUdoTyxLQUFLLENBQUM4TixXQUFOLENBQWtCQyxRQUFRLENBQUN0QyxJQUEzQixFQUFpQ3NDLFFBQVEsQ0FBQ3BOLEVBQTFDLENBQWI7QUFDQTZGLGVBQUcsQ0FBQ3lILFdBQUosQ0FBZ0JKLEdBQWhCLEVBQXFCRyxNQUFyQjtBQUNBLGdCQUFJRSxHQUFHLEdBQUdsTyxLQUFLLENBQUNtTyxXQUFOLENBQWtCLE1BQUksQ0FBQ2IsUUFBdkIsRUFBaUNTLFFBQVEsQ0FBQ3RDLElBQTFDLEVBQWdEc0MsUUFBUSxDQUFDcE4sRUFBekQsQ0FBVjtBQUNBcU4sa0JBQU0sQ0FBQ0ksU0FBUCxDQUFpQkYsR0FBRyxDQUFDWCxVQUFyQjtBQUNIO0FBQ0o7QUFDSixPQWJEO0FBZ0JBLGFBQU8vRyxHQUFQO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Rkw7QUFHQTtJQUNNNkgsUTs7O0FBQ0Ysb0JBQVkxTixFQUFaLEVBQWdCOEssSUFBaEIsRUFBc0I7QUFBQTs7QUFDbEIsU0FBSzlLLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUs4SyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLNkMsU0FBTCxHQUFpQnBKLFNBQWpCO0FBQ0EsU0FBS3FKLFFBQUwsR0FBZ0JySixTQUFoQjtBQUNBLFNBQUtxRSxVQUFMLEdBQWtCckUsU0FBbEI7QUFDQSxTQUFLc0osVUFBTCxHQUFrQnRKLFNBQWxCO0FBQ0g7Ozs7b0NBQ2U7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUNwQnNJLEssRUFBT2hILEcsRUFBSztBQUFFLFVBQUtBLEdBQUcsSUFBSXRCLFNBQVIsSUFBc0JzQixHQUFHLENBQUNDLGFBQTFCLElBQTJDRCxHQUFHLENBQUNDLGFBQUosRUFBL0MsRUFBb0UsS0FBSyxLQUFLdUIsTUFBTCxDQUFZd0YsS0FBWixDQUFMLElBQTJCaEgsR0FBM0I7QUFBaUM7OztnQ0FDdEhnSCxLLEVBQU87QUFBRSxhQUFPLEtBQUssS0FBS3hGLE1BQUwsQ0FBWXdGLEtBQVosQ0FBTCxDQUFQO0FBQWtDOzs7Z0NBQ2hDO0FBQUE7O0FBQUEsVUFBYmlCLE1BQWEsdUVBQUosRUFBSTtBQUFFdkMsWUFBTSxDQUFDQyxJQUFQLENBQVlzQyxNQUFaLEVBQW9CeEcsT0FBcEIsQ0FBNEIsVUFBQXVGLEtBQUssRUFBSTtBQUFFLGFBQUksQ0FBQ0EsS0FBRCxDQUFKLEdBQWNpQixNQUFNLENBQUNqQixLQUFELENBQXBCO0FBQTZCLE9BQXBFO0FBQXVFLGFBQU8sSUFBUDtBQUFjOzs7O0tBSy9HOzs7SUFDTWtCLE87Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxXQUFQO0FBQW9COzs7QUFDeEMsbUJBQVkvTixFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsa0ZBQU05TixFQUFOLEVBQVUrTixPQUFPLENBQUNDLElBQWxCO0FBQ04sV0FBS0MsUUFBTCxHQUFnQkgsTUFBTSxDQUFDRyxRQUF2QjtBQUNBLFdBQUtDLFVBQUwsR0FBa0JKLE1BQU0sQ0FBQ0ksVUFBekI7QUFDQSxXQUFLQyxTQUFMLEdBQWlCTCxNQUFNLENBQUNLLFNBQXhCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlTixNQUFNLENBQUNNLE9BQXRCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjUCxNQUFNLENBQUNPLE1BQXJCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjUixNQUFNLENBQUNRLE1BQXJCO0FBQ0EsV0FBS0MsSUFBTCxHQUFZVCxNQUFNLENBQUNTLElBQW5CO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQlYsTUFBTSxDQUFDVSxRQUF2QjtBQUNBLFdBQUtDLFVBQUwsR0FBa0JYLE1BQU0sQ0FBQ1csVUFBekI7QUFDQSxXQUFLcEMsWUFBTCxHQUFvQnlCLE1BQU0sQ0FBQ3pCLFlBQTNCO0FBQ0EsV0FBS3FDLEtBQUwsR0FBYVosTUFBTSxDQUFDWSxLQUFwQjtBQUNBLFdBQUtDLEtBQUwsR0FBYWIsTUFBTSxDQUFDYSxLQUFwQjtBQUNBLFdBQUtDLEtBQUwsR0FBYWQsTUFBTSxDQUFDYyxLQUFwQjtBQUNBLFdBQUtDLEdBQUwsR0FBV2YsTUFBTSxDQUFDZSxHQUFsQjtBQUNBLFdBQUtDLEdBQUwsR0FBV2hCLE1BQU0sQ0FBQ2dCLEdBQWxCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQmpCLE1BQU0sQ0FBQ2lCLFlBQTNCO0FBakIrQjtBQWtCNUIsRyxDQUNKOzs7OztzQkFDYWxILEssRUFBTztBQUFFLCtFQUFrQixVQUFsQixFQUE4QkEsS0FBOUI7QUFBc0MsSzt3QkFDN0M7QUFBRSxzRkFBeUIsVUFBekI7QUFBc0M7Ozs7RUF2QmxDNkYsUSxHQTRCdEI7OztJQUNNc0IsVTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGNBQVA7QUFBdUI7OztBQUMzQyxzQkFBWWhQLEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QixxRkFBTTlOLEVBQU4sRUFBVWdQLFVBQVUsQ0FBQ2hCLElBQXJCO0FBQ04sV0FBS0UsVUFBTCxHQUFrQkosTUFBTSxDQUFDSSxVQUF6QjtBQUNBLFdBQUtDLFNBQUwsR0FBaUJMLE1BQU0sQ0FBQ0ssU0FBeEI7QUFDQSxXQUFLN0gsTUFBTCxHQUFjd0gsTUFBTSxDQUFDeEgsTUFBckI7QUFDQSxXQUFLMkksS0FBTCxHQUFhbkIsTUFBTSxDQUFDbUIsS0FBcEI7QUFDQSxXQUFLQyxJQUFMLEdBQVlwQixNQUFNLENBQUNvQixJQUFuQjtBQUNBLFdBQUtDLGtCQUFMLEdBQTBCckIsTUFBTSxDQUFDcUIsa0JBQWpDO0FBUCtCO0FBUTVCLEcsQ0FDSjs7Ozs7c0JBQ1V0SCxLLEVBQU87QUFBRSxrRkFBa0IsT0FBbEIsRUFBMkJBLEtBQTNCO0FBQW1DLEs7d0JBQzFDO0FBQUUseUZBQXlCLE9BQXpCO0FBQW1DOzs7O0VBYnpCNkYsUSxHQWtCekI7OztJQUNNMEIsZTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLG9CQUFQO0FBQTZCOzs7QUFDakQsMkJBQVlwUCxFQUFaLEVBQTZCO0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSx3RkFDbkI5TixFQURtQixFQUNmb1AsZUFBZSxDQUFDcEIsSUFERDtBQUU1QixHLENBQ0o7Ozs7O3NCQUNhbkcsSyxFQUFPO0FBQUUsdUZBQWtCLFVBQWxCLEVBQThCQSxLQUE5QjtBQUFzQyxLO3dCQUM3QztBQUFFLDhGQUF5QixVQUF6QjtBQUFzQzs7O3NCQUMzQ0EsSyxFQUFPO0FBQUUsdUZBQWtCLFNBQWxCLEVBQTZCQSxLQUE3QjtBQUFxQyxLO3dCQUM1QztBQUFFLDhGQUF5QixTQUF6QjtBQUFxQzs7OztFQVR4QjZGLFEsR0FjOUI7OztJQUNNMkIscUI7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTywwQkFBUDtBQUFtQzs7O0FBQ3ZELGlDQUFZclAsRUFBWixFQUE2QjtBQUFBOztBQUFBLFFBQWI4TixNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3pCLGdHQUFNOU4sRUFBTixFQUFVcVAscUJBQXFCLENBQUNyQixJQUFoQztBQUNOLFdBQUtzQixjQUFMLEdBQXNCeEIsTUFBTSxDQUFDd0IsY0FBN0I7QUFDQSxXQUFLQyxpQkFBTCxHQUF5QnpCLE1BQU0sQ0FBQ3lCLGlCQUFoQztBQUNBLFdBQUtDLHFCQUFMLEdBQTZCMUIsTUFBTSxDQUFDMEIscUJBQXBDO0FBSitCO0FBSzVCLEcsQ0FDSjs7OztFQVJtQzlCLFEsR0FhcEM7OztJQUNNK0IscUI7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTywwQkFBUDtBQUFtQzs7O0FBQ3ZELGlDQUFZelAsRUFBWixFQUE2QjtBQUFBLFFBQWI4TixNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsOEZBQ25COU4sRUFEbUIsRUFDZnlQLHFCQUFxQixDQUFDekIsSUFEUDtBQUU1QixHLENBQ0o7Ozs7O3NCQUNhbkcsSyxFQUFPO0FBQUUsNkZBQWtCLFVBQWxCLEVBQThCQSxLQUE5QjtBQUFzQyxLO3dCQUM3QztBQUFFLG9HQUF5QixVQUF6QjtBQUFzQzs7O3NCQUNwQ0EsSyxFQUFPO0FBQUUsNkZBQWtCLGdCQUFsQixFQUFvQ0EsS0FBcEM7QUFBNEMsSzt3QkFDbkQ7QUFBRSxvR0FBeUIsZ0JBQXpCO0FBQTRDOzs7O0VBVGhDNkYsUSxHQWNwQzs7O0lBQ01nQyxvQjs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLHdCQUFQO0FBQWlDOzs7QUFDckQsZ0NBQVkxUCxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsK0ZBQU05TixFQUFOLEVBQVUwUCxvQkFBb0IsQ0FBQzFCLElBQS9CO0FBQ04sV0FBS3NCLGNBQUwsR0FBc0J4QixNQUFNLENBQUN3QixjQUE3QjtBQUYrQjtBQUc1QixHLENBQ0o7Ozs7RUFOa0M1QixRLEdBV25DOzs7SUFDTWlDLFE7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxXQUFQO0FBQW9COzs7QUFDeEMsb0JBQVkzUCxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsbUZBQU05TixFQUFOLEVBQVUyUCxRQUFRLENBQUMzQixJQUFuQjtBQUNOLFdBQUtXLEtBQUwsR0FBYWIsTUFBTSxDQUFDYSxLQUFwQjtBQUNBLFdBQUt2RyxRQUFMLEdBQWdCMEYsTUFBTSxDQUFDMUYsUUFBdkI7QUFIK0I7QUFJNUIsRyxDQUNKOzs7O0VBUHNCc0YsUSxHQVl2Qjs7O0lBQ01rQyxnQjs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLHFCQUFQO0FBQThCOzs7QUFDbEQsNEJBQVk1UCxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsMkZBQU05TixFQUFOLEVBQVU0UCxnQkFBZ0IsQ0FBQzVCLElBQTNCO0FBQ04sV0FBSzZCLFNBQUwsR0FBaUIvQixNQUFNLENBQUMrQixTQUF4QjtBQUNBLFdBQUtDLFNBQUwsR0FBaUJoQyxNQUFNLENBQUNnQyxTQUF4QjtBQUgrQjtBQUk1QixHLENBQ0o7Ozs7O3NCQUNtQmpJLEssRUFBTztBQUFFLHdGQUFrQixnQkFBbEIsRUFBb0NBLEtBQXBDO0FBQTRDLEs7d0JBQ25EO0FBQUUsK0ZBQXlCLGdCQUF6QjtBQUE0Qzs7O3NCQUMvQ0EsSyxFQUFPO0FBQUUsd0ZBQWtCLGlCQUFsQixFQUFxQ0EsS0FBckM7QUFBNkMsSzt3QkFDcEQ7QUFBRSwrRkFBeUIsaUJBQXpCO0FBQTZDOzs7O0VBWHZDNkYsUSxHQWdCL0I7OztJQUNNcUMsYzs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGtCQUFQO0FBQTJCOzs7QUFDL0MsMEJBQVkvUCxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIseUZBQU05TixFQUFOLEVBQVUrUCxjQUFjLENBQUMvQixJQUF6QjtBQUNOLFdBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUYrQjtBQUc1QixHLENBQ0o7Ozs7RUFONEJpSCxRLEdBVzdCOzs7SUFDTXNDLGM7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxtQkFBUDtBQUE0Qjs7O0FBQ2hELDBCQUFZaFEsRUFBWixFQUE2QjtBQUFBOztBQUFBLFFBQWI4TixNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3pCLHlGQUFNOU4sRUFBTixFQUFVZ1EsY0FBYyxDQUFDaEMsSUFBekI7QUFDTixXQUFLdkgsSUFBTCxHQUFZcUgsTUFBTSxDQUFDckgsSUFBbkI7QUFDQSxXQUFLd0osUUFBTCxHQUFnQm5DLE1BQU0sQ0FBQ21DLFFBQXZCO0FBQ0EsV0FBS3hRLE9BQUwsR0FBZXFPLE1BQU0sQ0FBQ3JPLE9BQXRCO0FBSitCO0FBSzVCLEcsQ0FDSjs7Ozs7c0JBQ2NvSSxLLEVBQU87QUFBRSxzRkFBa0IsV0FBbEIsRUFBK0JBLEtBQS9CO0FBQXVDLEs7d0JBQzlDO0FBQUUsNkZBQXlCLFdBQXpCO0FBQXVDOzs7c0JBQzFDQSxLLEVBQU87QUFBRSxzRkFBa0IsWUFBbEIsRUFBZ0NBLEtBQWhDO0FBQXdDLEs7d0JBQy9DO0FBQUUsNkZBQXlCLFlBQXpCO0FBQXdDOzs7O0VBWi9CNkYsUSxHQWlCN0I7OztJQUNNd0MsUTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLFlBQVA7QUFBcUI7OztBQUN6QyxvQkFBWWxRLEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QixvRkFBTTlOLEVBQU4sRUFBVWtRLFFBQVEsQ0FBQ2xDLElBQW5CO0FBQ04sWUFBS21DLFFBQUwsR0FBZ0JyQyxNQUFNLENBQUNxQyxRQUF2QjtBQUNBLFlBQUtGLFFBQUwsR0FBZ0JuQyxNQUFNLENBQUNtQyxRQUF2QjtBQUNBLFlBQUtHLGdCQUFMLEdBQXdCdEMsTUFBTSxDQUFDc0MsZ0JBQS9CO0FBQ0EsWUFBSzNKLElBQUwsR0FBWXFILE1BQU0sQ0FBQ3JILElBQW5CO0FBQ0EsWUFBSzRKLFNBQUwsR0FBaUJ2QyxNQUFNLENBQUN1QyxTQUF4QjtBQU4rQjtBQU81QixHLENBQ0o7Ozs7O3NCQUNVeEksSyxFQUFPO0FBQUUsZ0ZBQWtCLE9BQWxCLEVBQTJCQSxLQUEzQjtBQUFtQyxLO3dCQUMxQztBQUFFLHVGQUF5QixPQUF6QjtBQUFtQzs7O3NCQUN4Q0EsSyxFQUFPO0FBQUUsZ0ZBQWtCLE1BQWxCLEVBQTBCQSxLQUExQjtBQUFrQyxLO3dCQUN6QztBQUFFLHVGQUF5QixNQUF6QjtBQUFrQzs7OztFQWR6QjZGLFEsR0FtQnZCOzs7SUFDTTRDLE07Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxTQUFQO0FBQWtCOzs7QUFDdEMsa0JBQVl0USxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsa0ZBQU05TixFQUFOLEVBQVVzUSxNQUFNLENBQUN0QyxJQUFqQjtBQUNOLFlBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUYrQjtBQUc1QixHLENBQ0o7Ozs7O3NCQUNhb0IsSyxFQUFPO0FBQUUsOEVBQWtCLFVBQWxCLEVBQThCQSxLQUE5QjtBQUFzQyxLO3dCQUM3QztBQUFFLHFGQUF5QixVQUF6QjtBQUFzQzs7O3NCQUN4Q0EsSyxFQUFPO0FBQUUsOEVBQWtCLFlBQWxCLEVBQWdDQSxLQUFoQztBQUF3QyxLO3dCQUMvQztBQUFFLHFGQUF5QixZQUF6QjtBQUF3Qzs7O3NCQUN2Q0EsSyxFQUFPO0FBQUUsOEVBQWtCLGlCQUFsQixFQUFxQ0EsS0FBckM7QUFBNkMsSzt3QkFDcEQ7QUFBRSxxRkFBeUIsaUJBQXpCO0FBQTZDOzs7O0VBWmpENkYsUSxHQWlCckI7OztJQUNNNkMsUTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLFdBQVA7QUFBb0I7OztBQUN4QyxvQkFBWXZRLEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QixvRkFBTTlOLEVBQU4sRUFBVXVRLFFBQVEsQ0FBQ3ZDLElBQW5CO0FBQ04sWUFBS3ZILElBQUwsR0FBWXFILE1BQU0sQ0FBQ3JILElBQW5CO0FBRitCO0FBRzVCLEcsQ0FDSjs7Ozs7c0JBQ1lvQixLLEVBQU87QUFBRSxnRkFBa0IsU0FBbEIsRUFBNkJBLEtBQTdCO0FBQXFDLEs7d0JBQzVDO0FBQUUsdUZBQXlCLFNBQXpCO0FBQXFDOzs7O0VBUi9CNkYsUSxHQWF2Qjs7O0lBQ004QyxLOzs7Ozs7O3dCQUNnQjtBQUFFLGFBQU8sUUFBUDtBQUFpQjs7O0FBQ3JDLGlCQUFZeFEsRUFBWixFQUE2QjtBQUFBOztBQUFBLFFBQWI4TixNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3pCLGlGQUFNOU4sRUFBTixFQUFVd1EsS0FBSyxDQUFDeEMsSUFBaEI7QUFDTixZQUFLeUMsS0FBTCxHQUFhM0MsTUFBTSxDQUFDMkMsS0FBcEI7QUFDQSxZQUFLbkIsY0FBTCxHQUFzQnhCLE1BQU0sQ0FBQ3dCLGNBQTdCO0FBQ0EsWUFBS0MsaUJBQUwsR0FBeUJ6QixNQUFNLENBQUN5QixpQkFBaEM7QUFDQSxZQUFLakQsYUFBTCxHQUFxQndCLE1BQU0sQ0FBQ3hCLGFBQTVCO0FBQ0EsWUFBS29FLDBCQUFMLEdBQWtDNUMsTUFBTSxDQUFDNEMsMEJBQXpDO0FBQ0EsWUFBS0MsV0FBTCxHQUFtQjdDLE1BQU0sQ0FBQzZDLFdBQTFCO0FBQ0EsWUFBS0MsUUFBTCxHQUFnQjlDLE1BQU0sQ0FBQzhDLFFBQXZCO0FBQ0EsWUFBS0MsVUFBTCxHQUFrQi9DLE1BQU0sQ0FBQytDLFVBQXpCO0FBQ0EsWUFBS0MsU0FBTCxHQUFpQmhELE1BQU0sQ0FBQ2dELFNBQXhCO0FBQ0EsWUFBS0MsV0FBTCxHQUFtQmpELE1BQU0sQ0FBQ2lELFdBQTFCO0FBQ0EsWUFBS0MsTUFBTCxHQUFjbEQsTUFBTSxDQUFDa0QsTUFBckI7QUFDQSxZQUFLQyxPQUFMLEdBQWVuRCxNQUFNLENBQUNtRCxPQUF0QjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0JwRCxNQUFNLENBQUNvRCxRQUF2QjtBQUNBLFlBQUtDLGFBQUwsR0FBcUJyRCxNQUFNLENBQUNxRCxhQUE1QjtBQUNBLFlBQUtDLHlCQUFMLEdBQWlDdEQsTUFBTSxDQUFDc0QseUJBQXhDO0FBQ0EsWUFBS0MsMEJBQUwsR0FBa0N2RCxNQUFNLENBQUN1RCwwQkFBekM7QUFDQSxZQUFLQywyQkFBTCxHQUFtQ3hELE1BQU0sQ0FBQ3dELDJCQUExQztBQUNBLFlBQUtDLGlDQUFMLEdBQXlDekQsTUFBTSxDQUFDeUQsaUNBQWhEO0FBQ0EsWUFBS0MsaUNBQUwsR0FBeUMxRCxNQUFNLENBQUMwRCxpQ0FBaEQ7QUFDQSxZQUFLQyx1Q0FBTCxHQUErQzNELE1BQU0sQ0FBQzJELHVDQUF0RDtBQUNBLFlBQUtDLCtDQUFMLEdBQXVENUQsTUFBTSxDQUFDNEQsK0NBQTlEO0FBQ0EsWUFBS0MsOENBQUwsR0FBc0Q3RCxNQUFNLENBQUM2RCw4Q0FBN0Q7QUFDQSxZQUFLQyxRQUFMLEdBQWdCOUQsTUFBTSxDQUFDOEQsUUFBdkI7QUF4QitCO0FBeUI1QixHLENBQ0o7Ozs7O3NCQUNXL0osSyxFQUFPO0FBQUUsNkVBQWtCLFFBQWxCLEVBQTRCQSxLQUE1QjtBQUFvQyxLO3dCQUMzQztBQUFFLG9GQUF5QixRQUF6QjtBQUFvQzs7O3NCQUN0Q0EsSyxFQUFPO0FBQUUsNkVBQWtCLFVBQWxCLEVBQThCQSxLQUE5QjtBQUFzQyxLO3dCQUM3QztBQUFFLG9GQUF5QixVQUF6QjtBQUFzQzs7O3NCQUNsQ0EsSyxFQUFPO0FBQUUsNkVBQWtCLGtCQUFsQixFQUFzQ0EsS0FBdEM7QUFBOEMsSzt3QkFDckQ7QUFBRSxvRkFBeUIsa0JBQXpCO0FBQThDOzs7c0JBQ25EQSxLLEVBQU87QUFBRSw2RUFBa0IsaUJBQWxCLEVBQXFDQSxLQUFyQztBQUE2QyxLO3dCQUNwRDtBQUFFLG9GQUF5QixpQkFBekI7QUFBNkM7OztzQkFDbERBLEssRUFBTztBQUFFLDZFQUFrQixnQkFBbEIsRUFBb0NBLEtBQXBDO0FBQTRDLEs7d0JBQ25EO0FBQUUsb0ZBQXlCLGdCQUF6QjtBQUE0Qzs7O3NCQUNoREEsSyxFQUFPO0FBQUUsNkVBQWtCLGdCQUFsQixFQUFvQ0EsS0FBcEM7QUFBNEMsSzt3QkFDbkQ7QUFBRSxvRkFBeUIsZ0JBQXpCO0FBQTRDOzs7O0VBeENoRDZGLFEsR0E2Q3BCOzs7SUFDTW1FLE07Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxTQUFQO0FBQWtCOzs7QUFDdEMsa0JBQVk3UixFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsa0ZBQU05TixFQUFOLEVBQVU2UixNQUFNLENBQUM3RCxJQUFqQjtBQUNOLFlBQUs4RCxNQUFMLEdBQWNoRSxNQUFNLENBQUNnRSxNQUFyQjtBQUNBLFlBQUtDLGNBQUwsR0FBc0JqRSxNQUFNLENBQUNpRSxjQUE3QjtBQUNBLFlBQUtDLE9BQUwsR0FBZWxFLE1BQU0sQ0FBQ2tFLE9BQXRCO0FBQ0EsWUFBS0MsYUFBTCxHQUFxQm5FLE1BQU0sQ0FBQ21FLGFBQTVCO0FBQ0EsWUFBS0Msb0JBQUwsR0FBNEJwRSxNQUFNLENBQUNvRSxvQkFBbkM7QUFDQSxZQUFLQyxlQUFMLEdBQXVCckUsTUFBTSxDQUFDcUUsZUFBOUI7QUFDQSxZQUFLQyxjQUFMLEdBQXNCdEUsTUFBTSxDQUFDc0UsY0FBN0I7QUFDQSxZQUFLQyxtQkFBTCxHQUEyQnZFLE1BQU0sQ0FBQ3VFLG1CQUFsQztBQUNBLFlBQUtDLGdCQUFMLEdBQXdCeEUsTUFBTSxDQUFDd0UsZ0JBQS9CO0FBQ0EsWUFBS0Msb0JBQUwsR0FBNEJ6RSxNQUFNLENBQUN5RSxvQkFBbkM7QUFDQSxZQUFLQyxxQkFBTCxHQUE2QjFFLE1BQU0sQ0FBQzBFLHFCQUFwQztBQVorQjtBQWE1QixHLENBQ0o7Ozs7O3NCQUNhM0ssSyxFQUFPO0FBQUUsOEVBQWtCLFVBQWxCLEVBQThCQSxLQUE5QjtBQUFzQyxLO3dCQUM3QztBQUFFLHFGQUF5QixVQUF6QjtBQUFzQzs7OztFQWxCbkM2RixRLEdBdUJyQjs7O0lBQ00rRSxhOzs7Ozs7O3dCQUNnQjtBQUFFLGFBQU8saUJBQVA7QUFBMEI7OztBQUM5Qyx5QkFBWXpTLEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6Qix5RkFBTTlOLEVBQU4sRUFBVXlTLGFBQWEsQ0FBQ3pFLElBQXhCO0FBQ04sWUFBSzBFLG1CQUFMLEdBQTJCNUUsTUFBTSxDQUFDNEUsbUJBQWxDO0FBQ0EsWUFBS0Msa0JBQUwsR0FBMEI3RSxNQUFNLENBQUM2RSxrQkFBakM7QUFIK0I7QUFJNUIsRyxDQUNKOzs7OztzQkFDVzlLLEssRUFBTztBQUFFLHFGQUFrQixRQUFsQixFQUE0QkEsS0FBNUI7QUFBb0MsSzt3QkFDM0M7QUFBRSw0RkFBeUIsUUFBekI7QUFBb0M7OztzQkFDL0JBLEssRUFBTztBQUFFLHFGQUFrQixpQkFBbEIsRUFBcUNBLEtBQXJDO0FBQTZDLEs7d0JBQ3BEO0FBQUUsNEZBQXlCLGlCQUF6QjtBQUE2Qzs7OztFQVgxQzZGLFEsR0FnQjVCOzs7SUFDTWtGLGE7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxpQkFBUDtBQUEwQjs7O0FBQzlDLHlCQUFZNVMsRUFBWixFQUE2QjtBQUFBOztBQUFBLFFBQWI4TixNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3pCLHlGQUFNOU4sRUFBTixFQUFVNFMsYUFBYSxDQUFDNUUsSUFBeEI7QUFDTixZQUFLNkMsVUFBTCxHQUFrQi9DLE1BQU0sQ0FBQytDLFVBQXpCO0FBQ0EsWUFBS2dDLFVBQUwsR0FBa0IvRSxNQUFNLENBQUMrRSxVQUF6QjtBQUNBLFlBQUtDLGFBQUwsR0FBcUJoRixNQUFNLENBQUNnRixhQUE1QjtBQUNBLFlBQUtDLGVBQUwsR0FBdUJqRixNQUFNLENBQUNpRixlQUE5QjtBQUwrQjtBQU01QixHLENBQ0o7Ozs7O3NCQUNVbEwsSyxFQUFPO0FBQUUscUZBQWtCLE9BQWxCLEVBQTJCQSxLQUEzQjtBQUFtQyxLO3dCQUMxQztBQUFFLDRGQUF5QixPQUF6QjtBQUFtQzs7OztFQVh0QjZGLFEsR0FnQjVCOzs7SUFDTXNGLFM7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxhQUFQO0FBQXNCOzs7QUFDMUMscUJBQVloVCxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIscUZBQU05TixFQUFOLEVBQVVnVCxTQUFTLENBQUNoRixJQUFwQjtBQUNOLFlBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUNBLFlBQUt3TSxhQUFMLEdBQXFCbkYsTUFBTSxDQUFDbUYsYUFBNUI7QUFDQSxZQUFLQyxZQUFMLEdBQW9CcEYsTUFBTSxDQUFDb0YsWUFBM0I7QUFKK0I7QUFLNUIsRyxDQUNKOzs7O0VBUnVCeEYsUSxHQWF4Qjs7O0lBQ015RixLOzs7Ozs7O3dCQUNnQjtBQUFFLGFBQU8sUUFBUDtBQUFpQjs7O0FBQ3JDLGlCQUFZblQsRUFBWixFQUE2QjtBQUFBOztBQUFBLFFBQWI4TixNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3pCLGlGQUFNOU4sRUFBTixFQUFVbVQsS0FBSyxDQUFDbkYsSUFBaEI7QUFDTixZQUFLbUMsUUFBTCxHQUFnQnJDLE1BQU0sQ0FBQ3FDLFFBQXZCO0FBQ0EsWUFBS2lELFlBQUwsR0FBb0J0RixNQUFNLENBQUNzRixZQUEzQjtBQUNBLFlBQUtDLHVCQUFMLEdBQStCdkYsTUFBTSxDQUFDdUYsdUJBQXRDO0FBSitCO0FBSzVCLEcsQ0FDSjs7Ozs7c0JBQ2V4TCxLLEVBQU87QUFBRSw2RUFBa0IsWUFBbEIsRUFBZ0NBLEtBQWhDO0FBQXdDLEs7d0JBQy9DO0FBQUUsb0ZBQXlCLFlBQXpCO0FBQXdDOzs7c0JBQ25EQSxLLEVBQU87QUFBRSw2RUFBa0IsS0FBbEIsRUFBeUJBLEtBQXpCO0FBQWlDLEs7d0JBQ3hDO0FBQUUsb0ZBQXlCLEtBQXpCO0FBQWlDOzs7O0VBWjFCNkYsUSxHQWlCcEI7OztJQUNNNEYsUTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLFdBQVA7QUFBb0I7OztBQUN4QyxvQkFBWXRULEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QixvRkFBTTlOLEVBQU4sRUFBVXNULFFBQVEsQ0FBQ3RGLElBQW5CO0FBQ04sWUFBS3VGLFFBQUwsR0FBZ0J6RixNQUFNLENBQUN5RixRQUF2QjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0IxRixNQUFNLENBQUMwRixRQUF2QjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0IzRixNQUFNLENBQUMyRixRQUF2QjtBQUNBLFlBQUtDLGNBQUwsR0FBc0I1RixNQUFNLENBQUM0RixjQUE3QjtBQUNBLFlBQUtDLEtBQUwsR0FBYTdGLE1BQU0sQ0FBQzZGLEtBQXBCO0FBQ0EsWUFBS0MsVUFBTCxHQUFrQjlGLE1BQU0sQ0FBQzhGLFVBQXpCO0FBQ0EsWUFBS0MsZ0JBQUwsR0FBd0IvRixNQUFNLENBQUMrRixnQkFBL0I7QUFDQSxZQUFLQyxTQUFMLEdBQWlCaEcsTUFBTSxDQUFDZ0csU0FBeEI7QUFUK0I7QUFVNUIsRyxDQUNKOzs7OztzQkFDb0JqTSxLLEVBQU87QUFBRSxnRkFBa0IsaUJBQWxCLEVBQXFDQSxLQUFyQztBQUE2QyxLO3dCQUNwRDtBQUFFLHVGQUF5QixpQkFBekI7QUFBNkM7Ozs7RUFmL0M2RixRLEdBb0J2Qjs7O0lBQ01xRyxnQjs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLHFCQUFQO0FBQThCOzs7QUFDbEQsNEJBQVkvVCxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsNEZBQU05TixFQUFOLEVBQVUrVCxnQkFBZ0IsQ0FBQy9GLElBQTNCO0FBQ04sWUFBS3ZILElBQUwsR0FBWXFILE1BQU0sQ0FBQ3JILElBQW5CO0FBRitCO0FBRzVCLEcsQ0FDSjs7OztFQU44QmlILFEsR0FXL0I7OztJQUNNc0csYzs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGtCQUFQO0FBQTJCOzs7QUFDL0MsMEJBQVloVSxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsMEZBQU05TixFQUFOLEVBQVVnVSxjQUFjLENBQUNoRyxJQUF6QjtBQUNOLFlBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUNBLFlBQUtrTSxrQkFBTCxHQUEwQjdFLE1BQU0sQ0FBQzZFLGtCQUFqQztBQUNBLFlBQUtzQixzQkFBTCxHQUE4Qm5HLE1BQU0sQ0FBQ21HLHNCQUFyQztBQUorQjtBQUs1QixHLENBQ0o7Ozs7O3NCQUNXcE0sSyxFQUFPO0FBQUUsc0ZBQWtCLFFBQWxCLEVBQTRCQSxLQUE1QjtBQUFvQyxLO3dCQUMzQztBQUFFLDZGQUF5QixRQUF6QjtBQUFvQzs7O3NCQUNqQ0EsSyxFQUFPO0FBQUUsc0ZBQWtCLGVBQWxCLEVBQW1DQSxLQUFuQztBQUEyQyxLO3dCQUNsRDtBQUFFLDZGQUF5QixlQUF6QjtBQUEyQzs7O3NCQUMzQ0EsSyxFQUFPO0FBQUUsc0ZBQWtCLG1CQUFsQixFQUF1Q0EsS0FBdkM7QUFBK0MsSzt3QkFDdEQ7QUFBRSw2RkFBeUIsbUJBQXpCO0FBQStDOzs7O0VBZDdDNkYsUSxHQW1CN0I7OztJQUNNd0csWTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGdCQUFQO0FBQXlCOzs7QUFDN0Msd0JBQVlsVSxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsd0ZBQU05TixFQUFOLEVBQVVrVSxZQUFZLENBQUNsRyxJQUF2QjtBQUNOLFlBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUNBLFlBQUswTixrQkFBTCxHQUEwQnJHLE1BQU0sQ0FBQ3FHLGtCQUFqQztBQUNBLFlBQUtDLHNCQUFMLEdBQThCdEcsTUFBTSxDQUFDc0csc0JBQXJDO0FBQ0EsWUFBS0MsZ0JBQUwsR0FBd0J2RyxNQUFNLENBQUN1RyxnQkFBL0I7QUFDQSxZQUFLQyxvQkFBTCxHQUE0QnhHLE1BQU0sQ0FBQ3dHLG9CQUFuQztBQUNBLFlBQUtDLGNBQUwsR0FBc0J6RyxNQUFNLENBQUN5RyxjQUE3QjtBQUNBLFlBQUtDLGtCQUFMLEdBQTBCMUcsTUFBTSxDQUFDMEcsa0JBQWpDO0FBUitCO0FBUzVCLEcsQ0FDSjs7OztFQVowQjlHLFEsR0FpQjNCOzs7SUFDTStHLFM7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxhQUFQO0FBQXNCOzs7QUFDMUMscUJBQVl6VSxFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIscUZBQU05TixFQUFOLEVBQVV5VSxTQUFTLENBQUN6RyxJQUFwQjtBQUNOLFlBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUNBLFlBQUtrTSxrQkFBTCxHQUEwQjdFLE1BQU0sQ0FBQzZFLGtCQUFqQztBQUNBLFlBQUsrQixXQUFMLEdBQW1CNUcsTUFBTSxDQUFDNEcsV0FBMUI7QUFDQSxZQUFLQyxjQUFMLEdBQXNCN0csTUFBTSxDQUFDNkcsY0FBN0I7QUFMK0I7QUFNNUIsRyxDQUNKOzs7OztzQkFDVzlNLEssRUFBTztBQUFFLGlGQUFrQixRQUFsQixFQUE0QkEsS0FBNUI7QUFBb0MsSzt3QkFDM0M7QUFBRSx3RkFBeUIsUUFBekI7QUFBb0M7Ozs7RUFYNUI2RixRLEdBZ0J4Qjs7O0lBQ01rSCxHOzs7Ozs7O3dCQUNnQjtBQUFFLGFBQU8sTUFBUDtBQUFlOzs7QUFDbkMsZUFBWTVVLEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QiwrRUFBTTlOLEVBQU4sRUFBVTRVLEdBQUcsQ0FBQzVHLElBQWQ7QUFDTixZQUFLdEksSUFBTCxHQUFZb0ksTUFBTSxDQUFDcEksSUFBbkI7QUFDQSxZQUFLZSxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUNBLFlBQUtULFdBQUwsR0FBbUI4SCxNQUFNLENBQUM5SCxXQUExQjtBQUNBLFlBQUtxSyxTQUFMLEdBQWlCdkMsTUFBTSxDQUFDdUMsU0FBeEI7QUFDQSxZQUFLd0UsU0FBTCxHQUFpQi9HLE1BQU0sQ0FBQytHLFNBQXhCO0FBQ0EsWUFBS0MsZUFBTCxHQUF1QmhILE1BQU0sQ0FBQ2dILGVBQTlCO0FBQ0EsWUFBS2hELE1BQUwsR0FBY2hFLE1BQU0sQ0FBQ2dFLE1BQXJCO0FBQ0EsWUFBS0MsY0FBTCxHQUFzQmpFLE1BQU0sQ0FBQ2lFLGNBQTdCO0FBVCtCO0FBVTVCLEcsQ0FDSjs7Ozs7c0JBQ3NCbEssSyxFQUFPO0FBQUUsMkVBQWtCLG1CQUFsQixFQUF1Q0EsS0FBdkM7QUFBK0MsSzt3QkFDdEQ7QUFBRSxrRkFBeUIsbUJBQXpCO0FBQStDOzs7O0VBZnhENkYsUSxHQW9CbEI7OztJQUNNcUgsUzs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGFBQVA7QUFBc0I7OztBQUMxQyxxQkFBWS9VLEVBQVosRUFBNkI7QUFBQTs7QUFBQSxRQUFiOE4sTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QixxRkFBTTlOLEVBQU4sRUFBVStVLFNBQVMsQ0FBQy9HLElBQXBCO0FBQ04sWUFBS21DLFFBQUwsR0FBZ0JyQyxNQUFNLENBQUNxQyxRQUF2QjtBQUNBLFlBQUtGLFFBQUwsR0FBZ0JuQyxNQUFNLENBQUNtQyxRQUF2QjtBQUgrQjtBQUk1QixHLENBQ0o7Ozs7O3NCQUNtQnBJLEssRUFBTztBQUFFLGlGQUFrQixnQkFBbEIsRUFBb0NBLEtBQXBDO0FBQTRDLEs7d0JBQ25EO0FBQUUsd0ZBQXlCLGdCQUF6QjtBQUE0Qzs7O3NCQUMzREEsSyxFQUFPO0FBQUUsaUZBQWtCLEtBQWxCLEVBQXlCQSxLQUF6QjtBQUFpQyxLO3dCQUN4QztBQUFFLHdGQUF5QixLQUF6QjtBQUFpQzs7OztFQVh0QjZGLFEsR0FnQnhCOzs7SUFDTXNILFU7Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxjQUFQO0FBQXVCOzs7QUFDM0Msc0JBQVloVixFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsc0ZBQU05TixFQUFOLEVBQVVnVixVQUFVLENBQUNoSCxJQUFyQjtBQUNOLFlBQUtpSCxRQUFMLEdBQWdCbkgsTUFBTSxDQUFDbUgsUUFBdkI7QUFDQSxZQUFLQyxPQUFMLEdBQWVwSCxNQUFNLENBQUNvSCxPQUF0QjtBQUgrQjtBQUk1QixHLENBQ0o7Ozs7O3NCQUNtQnJOLEssRUFBTztBQUFFLGtGQUFrQixnQkFBbEIsRUFBb0NBLEtBQXBDO0FBQTRDLEs7d0JBQ25EO0FBQUUseUZBQXlCLGdCQUF6QjtBQUE0Qzs7O3NCQUMvQ0EsSyxFQUFPO0FBQUUsa0ZBQWtCLGlCQUFsQixFQUFxQ0EsS0FBckM7QUFBNkMsSzt3QkFDcEQ7QUFBRSx5RkFBeUIsaUJBQXpCO0FBQTZDOzs7O0VBWDdDNkYsUSxHQWdCekI7OztJQUNNeUgsYTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGlCQUFQO0FBQTBCOzs7QUFDOUMseUJBQVluVixFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIseUZBQU05TixFQUFOLEVBQVVtVixhQUFhLENBQUNuSCxJQUF4QjtBQUNOLFlBQUt2SCxJQUFMLEdBQVlxSCxNQUFNLENBQUNySCxJQUFuQjtBQUNBLFlBQUsyTyxZQUFMLEdBQW9CdEgsTUFBTSxDQUFDc0gsWUFBM0I7QUFIK0I7QUFJNUIsRyxDQUNKOzs7OztzQkFDWXZOLEssRUFBTztBQUFFLHFGQUFrQixTQUFsQixFQUE2QkEsS0FBN0I7QUFBcUMsSzt3QkFDNUM7QUFBRSw0RkFBeUIsU0FBekI7QUFBcUM7Ozs7RUFUMUI2RixRLEdBYzVCOzs7SUFDTTJILE87Ozs7Ozs7d0JBQ2dCO0FBQUUsYUFBTyxVQUFQO0FBQW1COzs7QUFDdkMsbUJBQVlyVixFQUFaLEVBQTZCO0FBQUE7O0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDekIsbUZBQU05TixFQUFOLEVBQVVxVixPQUFPLENBQUNySCxJQUFsQjtBQUNOLFlBQUtzSCxLQUFMLEdBQWF4SCxNQUFNLENBQUN3SCxLQUFwQjtBQUNBLFlBQUtDLFlBQUwsR0FBb0J6SCxNQUFNLENBQUN5SCxZQUEzQjtBQUNBLFlBQUtDLGlCQUFMLEdBQXlCMUgsTUFBTSxDQUFDMEgsaUJBQWhDO0FBSitCO0FBSzVCLEcsQ0FDSjs7OztFQVJxQjlILFEsR0FhdEI7OztJQUNNK0gsWTs7Ozs7Ozt3QkFDZ0I7QUFBRSxhQUFPLGdCQUFQO0FBQXlCOzs7QUFDN0Msd0JBQVl6VixFQUFaLEVBQTZCO0FBQUEsUUFBYjhOLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxxRkFDbkI5TixFQURtQixFQUNmeVYsWUFBWSxDQUFDekgsSUFERTtBQUU1QixHLENBQ0o7Ozs7O3NCQUNVbkcsSyxFQUFPO0FBQUUsb0ZBQWtCLE9BQWxCLEVBQTJCQSxLQUEzQjtBQUFtQyxLO3dCQUMxQztBQUFFLDJGQUF5QixPQUF6QjtBQUFtQzs7OztFQVB2QjZGLFE7O0FBWTNCM08sTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCK08sU0FBTyxFQUFQQSxPQURnQjtBQUVoQmlCLFlBQVUsRUFBVkEsVUFGZ0I7QUFHaEJJLGlCQUFlLEVBQWZBLGVBSGdCO0FBSWhCQyx1QkFBcUIsRUFBckJBLHFCQUpnQjtBQUtoQkksdUJBQXFCLEVBQXJCQSxxQkFMZ0I7QUFNaEJDLHNCQUFvQixFQUFwQkEsb0JBTmdCO0FBT2hCQyxVQUFRLEVBQVJBLFFBUGdCO0FBUWhCQyxrQkFBZ0IsRUFBaEJBLGdCQVJnQjtBQVNoQkcsZ0JBQWMsRUFBZEEsY0FUZ0I7QUFVaEJDLGdCQUFjLEVBQWRBLGNBVmdCO0FBV2hCRSxVQUFRLEVBQVJBLFFBWGdCO0FBWWhCSSxRQUFNLEVBQU5BLE1BWmdCO0FBYWhCQyxVQUFRLEVBQVJBLFFBYmdCO0FBY2hCQyxPQUFLLEVBQUxBLEtBZGdCO0FBZWhCcUIsUUFBTSxFQUFOQSxNQWZnQjtBQWdCaEJZLGVBQWEsRUFBYkEsYUFoQmdCO0FBaUJoQkcsZUFBYSxFQUFiQSxhQWpCZ0I7QUFrQmhCSSxXQUFTLEVBQVRBLFNBbEJnQjtBQW1CaEJHLE9BQUssRUFBTEEsS0FuQmdCO0FBb0JoQkcsVUFBUSxFQUFSQSxRQXBCZ0I7QUFxQmhCUyxrQkFBZ0IsRUFBaEJBLGdCQXJCZ0I7QUFzQmhCQyxnQkFBYyxFQUFkQSxjQXRCZ0I7QUF1QmhCRSxjQUFZLEVBQVpBLFlBdkJnQjtBQXdCaEJPLFdBQVMsRUFBVEEsU0F4QmdCO0FBeUJoQkcsS0FBRyxFQUFIQSxHQXpCZ0I7QUEwQmhCRyxXQUFTLEVBQVRBLFNBMUJnQjtBQTJCaEJDLFlBQVUsRUFBVkEsVUEzQmdCO0FBNEJoQkcsZUFBYSxFQUFiQSxhQTVCZ0I7QUE2QmhCRSxTQUFPLEVBQVBBLE9BN0JnQjtBQThCaEJJLGNBQVksRUFBWkE7QUE5QmdCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN2lCTUMsVzs7O0FBRUYseUJBQWM7QUFBQTs7QUFDVixTQUFLQyxLQUFMO0FBQ0g7Ozs7NEJBRU87QUFDSixXQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxXQUFLQyxrQkFBTCxHQUEwQixFQUExQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQjFSLFNBQW5CO0FBQ0EsV0FBSzhCLFNBQUwsR0FBaUI5QixTQUFqQjtBQUNIOzs7b0NBRWU7QUFBRSxhQUFPLElBQVA7QUFBYzs7O3lCQUUzQnNJLEssRUFBT3FKLFUsRUFBWTtBQUNwQixXQUFLTixXQUFMLENBQWlCTyxJQUFqQixDQUFzQixDQUFDRCxVQUFVLEdBQUUsR0FBRixHQUFRLEVBQW5CLEVBQXVCN08sTUFBdkIsQ0FBOEJ3RixLQUE5QixDQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7MkJBRU1GLFEsRUFBcUI7QUFBQSx3Q0FBUm1CLE9BQVE7QUFBUkEsZUFBUTtBQUFBOztBQUN4QixVQUFJQSxPQUFNLElBQUl2SixTQUFkLEVBQXlCLEtBQUtzUixnQkFBTCxDQUFzQmxKLFFBQXRCLElBQWtDbUIsT0FBbEM7QUFDekIsYUFBTyxJQUFQO0FBQ0g7Ozs4QkFFcUI7QUFBQSx5Q0FBWHNJLFNBQVc7QUFBWEEsaUJBQVc7QUFBQTs7QUFDbEI7QUFDQSxVQUFJQSxTQUFTLElBQUk3UixTQUFqQixFQUE0QixLQUFLdVIsa0JBQUwsQ0FBd0JLLElBQXhCLENBQTZCQyxTQUE3QjtBQUM1QixhQUFPLElBQVA7QUFDSDs7OzJCQUVNNVcsTyxFQUFRcUksSyxFQUFPO0FBQ2xCLFVBQUtySSxPQUFNLElBQUkrRSxTQUFYLElBQTBCc0QsS0FBSyxJQUFJdEQsU0FBdkMsRUFBbUQsS0FBS3dSLGFBQUwsQ0FBbUJ2VyxPQUFuQixJQUE2QnFJLEtBQTdCO0FBQ25ELGFBQU8sSUFBUDtBQUNIOzs7MEJBRUs4RCxHLEVBQUs5RCxLLEVBQU87QUFDZCxVQUFLOEQsR0FBRyxJQUFJcEgsU0FBUixJQUF1QnNELEtBQUssSUFBSXRELFNBQXBDLEVBQWdELEtBQUt5UixhQUFMLENBQW1CckssR0FBbkIsSUFBMEI5RCxLQUExQjtBQUNoRCxhQUFPLElBQVA7QUFDSDs7O3lCQUVJdkIsTSxFQUFRRixJLEVBQU07QUFDZixXQUFLaVEsVUFBTCxDQUFnQi9QLE1BQWhCO0FBQ0EsV0FBS2dRLFFBQUwsQ0FBY2xRLElBQWQ7QUFDQSxhQUFPLElBQVA7QUFDSDs7OzZCQUVRQSxJLEVBQU07QUFDWCxXQUFLQyxTQUFMLEdBQWlCRCxJQUFqQjtBQUNBLGFBQU8sSUFBUDtBQUNIOzs7K0JBRVVFLE0sRUFBUTtBQUNmLFdBQUsyUCxXQUFMLEdBQW1CM1AsTUFBbkI7QUFDQSxhQUFPLElBQVA7QUFDSDs7OytCQUVVO0FBQ1AsV0FBSzJQLFdBQUwsR0FBbUJBLFdBQVcsR0FBRUEsV0FBVyxFQUFiLEdBQWtCLENBQWhEO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OzswQkFFS3JLLEksRUFBTTtBQUFBOztBQUVSLFVBQUkySyxLQUFLLEdBQUcsRUFBWixDQUZRLENBSVI7O0FBQ0EsVUFBSWhMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUt1SyxhQUFqQixFQUFnQ2hQLE1BQWhDLEdBQXlDLENBQTdDLEVBQ0l3RSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLdUssYUFBakIsRUFBZ0N6TyxPQUFoQyxDQUF3QyxVQUFBOUgsTUFBTSxFQUFJO0FBQUUrVyxhQUFLLGtCQUFXL1csTUFBWCxPQUFMLEdBQTZCLEtBQUksQ0FBQ3VXLGFBQUwsQ0FBbUJ2VyxNQUFuQixDQUE3QjtBQUF5RCxPQUE3RyxFQU5JLENBUVI7O0FBQ0EsVUFBSStMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtzSyxrQkFBakIsRUFBcUMvTyxNQUFyQyxHQUE4QyxDQUFsRCxFQUNJd1AsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLEtBQUtWLGtCQUFMLENBQXdCbEssSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBaEIsQ0FWSSxDQVlSOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtxSyxnQkFBakIsRUFBbUM5TyxNQUFuQyxHQUE0QyxDQUFoRCxFQUNJd0UsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS3FLLGdCQUFqQixFQUFtQ3ZPLE9BQW5DLENBQTJDLFVBQUF6QixHQUFHLEVBQUk7QUFBRTBRLGFBQUssa0JBQVcxUSxHQUFYLE9BQUwsR0FBMEIsS0FBSSxDQUFDZ1EsZ0JBQUwsQ0FBc0JoUSxHQUF0QixFQUEyQitGLElBQTNCLENBQWdDLEdBQWhDLENBQTFCO0FBQWdFLE9BQXBILEVBZEksQ0FnQlI7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS29LLFdBQWpCLEVBQThCN08sTUFBOUIsR0FBdUMsQ0FBM0MsRUFDSXdQLEtBQUssQ0FBQ0UsSUFBTixHQUFhLEtBQUtiLFdBQUwsQ0FBaUJoSyxJQUFqQixDQUFzQixHQUF0QixDQUFiLENBbEJJLENBb0JSOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUt3SyxhQUFqQixFQUFnQ2pQLE1BQWhDLEdBQXlDLENBQTdDLEVBQ0l3RSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLd0ssYUFBakIsRUFBZ0MxTyxPQUFoQyxDQUF3QyxVQUFBcUUsR0FBRyxFQUFJO0FBQUU0SyxhQUFLLENBQUM1SyxHQUFELENBQUwsR0FBYSxLQUFJLENBQUNxSyxhQUFMLENBQW1CckssR0FBbkIsQ0FBYjtBQUFzQyxPQUF2RixFQXRCSSxDQXdCUjs7QUFDQSxVQUFJLEtBQUtzSyxXQUFMLElBQW9CMVIsU0FBeEIsRUFBbUNnUyxLQUFLLENBQUMsY0FBRCxDQUFMLEdBQXdCLEtBQUtOLFdBQTdCO0FBQ25DLFVBQUksS0FBSzVQLFNBQUwsSUFBa0I5QixTQUF0QixFQUFpQ2dTLEtBQUssQ0FBQyxZQUFELENBQUwsR0FBc0IsS0FBS2xRLFNBQTNCO0FBRWpDLGFBQU8sQ0FBQ3VGLElBQUQsR0FBTzJLLEtBQVAsR0FBZWhMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZK0ssS0FBWixFQUFtQjdLLEdBQW5CLENBQXVCLFVBQUFDLEdBQUcsRUFBSTtBQUFFLGVBQU9BLEdBQUcsR0FBQyxHQUFKLEdBQVE0SyxLQUFLLENBQUM1SyxHQUFELENBQXBCO0FBQTJCLE9BQTNELEVBQTZEQyxJQUE3RCxDQUFrRSxHQUFsRSxDQUF0QjtBQUVIOzs7Ozs7QUFLTDdNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiMFcsYUFBVyxFQUFYQTtBQURhLENBQWpCOztBQUlBM1csTUFBTSxDQUFDQyxPQUFQLENBQWVrRixXQUFmLEdBQTZCLFlBQU07QUFDL0IsU0FBTyxJQUFJd1IsV0FBSixFQUFQO0FBQ0gsQ0FGRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUN4R0EsSUFBTWhNLEdBQUcsR0FBR3pLLG1CQUFPLENBQUMsaUNBQUQsQ0FBUCxDQUFvQnlLLEdBQWhDOztBQUNBLElBQU14SyxLQUFLLEdBQUdELG1CQUFPLENBQUMsK0JBQUQsQ0FBckI7O0FBRUFGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUViaUYsS0FBRyxFQUFHLGFBQUNnQyxPQUFELEVBQWE7QUFDZixRQUFJeUQsR0FBRyxDQUFDVSxLQUFKLElBQWFWLEdBQUcsQ0FBQzZDLE9BQXJCLEVBQThCQSxPQUFPLENBQUN0SSxHQUFSLENBQWFnQyxPQUFPLElBQUkxQixTQUFaLEdBQXdCLEVBQXhCLEdBQTZCMEIsT0FBekM7QUFDakMsR0FKWTtBQU1iK0YsV0FBUyxFQUFHLG1CQUFDTixHQUFELEVBQU1nTCxHQUFOLEVBQWM7QUFDdEIsUUFBSWhMLEdBQUcsSUFBSW5ILFNBQVgsRUFBc0JtSCxHQUFHLEdBQUcsRUFBTjtBQUN0QixRQUFJZ0wsR0FBRyxJQUFJblMsU0FBWCxFQUFzQmdILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZa0wsR0FBWixFQUFpQnBQLE9BQWpCLENBQXlCLFVBQUFxRSxHQUFHLEVBQUk7QUFBRUQsU0FBRyxDQUFDQyxHQUFELENBQUgsR0FBVytLLEdBQUcsQ0FBQy9LLEdBQUQsQ0FBZDtBQUFzQixLQUF4RDtBQUN0QixXQUFPRCxHQUFQO0FBQ0gsR0FWWTtBQVlicEMsV0FBUyxFQUFHLG1CQUFDcU4sSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3hCLDZCQUFZRCxJQUFaLEVBQXFCQyxJQUFyQjtBQUNILEdBZFk7QUFnQmJDLFVBQVEsRUFBRyxrQkFBQ25MLEdBQUQsRUFBUztBQUNoQixXQUFRQSxHQUFHLElBQUluSCxTQUFSLEdBQW9CbUgsR0FBcEIscUJBQStCQSxHQUEvQixDQUFQO0FBQ0gsR0FsQlk7QUFvQmJTLE9BQUssRUFBRyxlQUFDMkssRUFBRCxFQUFLM0wsR0FBTCxFQUFhO0FBQ2pCcE0sVUFBTSxDQUFDQyxPQUFQLENBQWVpRixHQUFmLENBQW1CLENBQUNrSCxHQUFHLGFBQUtBLEdBQUwsV0FBZ0IsRUFBcEIsRUFBd0I5RCxNQUF4QixtQkFBMEN5UCxFQUExQyxnQkFBbkI7QUFDQSxXQUFPLElBQUl0UyxPQUFKLENBQVksVUFBQXVTLE9BQU87QUFBQSxhQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUQsRUFBVixDQUFkO0FBQUEsS0FBbkIsQ0FBUDtBQUNILEdBdkJZO0FBeUJibE0sTUFBSSxFQUFHLGdCQUFNO0FBQ1QsV0FBTyxDQUFDcU0sSUFBSSxDQUFDQyxHQUFMLEdBQVdDLFFBQVgsQ0FBb0IsRUFBcEIsSUFBMEIsR0FBMUIsR0FBZ0NDLElBQUksQ0FBQ0MsTUFBTCxHQUFjRixRQUFkLENBQXVCLEVBQXZCLEVBQTJCRyxLQUEzQixDQUFpQyxDQUFqQyxFQUFvQ3RLLE1BQXBDLENBQTJDLENBQTNDLEVBQThDLENBQTlDLENBQWpDLEVBQW1GdUssV0FBbkYsRUFBUDtBQUNILEdBM0JZO0FBNkJiaFIsZUE3QmEseUJBNkJDaVIsR0E3QkQsRUE2Qk07QUFDZixXQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ2pSLGFBQVgsSUFBNkJpUixHQUFHLENBQUNqUixhQUFKLE9BQXdCLElBQTdEO0FBQ0gsR0EvQlk7QUFpQ2I0RyxhQWpDYSx1QkFpQ0RyQyxJQWpDQyxFQWlDSzlLLEVBakNMLEVBaUNTOE4sTUFqQ1QsRUFpQ2lCO0FBQzFCLFFBQUkySixRQUFRLEdBQUdsVCxTQUFmO0FBQ0FnSCxVQUFNLENBQUNDLElBQVAsQ0FBWXRNLEtBQVosRUFBbUJvSSxPQUFuQixDQUEyQixVQUFDb1EsRUFBRCxFQUFRO0FBQy9CLFVBQUlDLE9BQU8sR0FBR3pZLEtBQUssQ0FBQ3dZLEVBQUQsQ0FBTCxDQUFVMUosSUFBeEI7O0FBQ0EsVUFBSTJKLE9BQU8sSUFBS0EsT0FBTyxJQUFJN00sSUFBM0IsRUFBa0M7QUFDOUIyTSxnQkFBUSxHQUFHLElBQUl2WSxLQUFLLENBQUN3WSxFQUFELENBQVQsQ0FBYzFYLEVBQWQsRUFBa0I4TixNQUFsQixDQUFYO0FBQ0g7QUFDSixLQUxEO0FBTUEsV0FBTzJKLFFBQVA7QUFDSCxHQTFDWTtBQTRDYmpLLGFBNUNhLHVCQTRDRHBJLElBNUNDLEVBNENLMEYsSUE1Q0wsRUE0Q1c5SyxFQTVDWCxFQTRDZTtBQUN4QixRQUFLb0YsSUFBSSxJQUFJYixTQUFULElBQXdCYSxJQUFJLENBQUN3UyxRQUFMLElBQWlCclQsU0FBN0MsRUFBeUQsT0FBT0EsU0FBUDtBQUN6RCxRQUFJc1QsTUFBTSxHQUFHdFQsU0FBYjtBQUNBYSxRQUFJLENBQUN3UyxRQUFMLENBQWN0USxPQUFkLENBQXNCLFVBQUFpRyxHQUFHLEVBQUk7QUFDekIsVUFBS0EsR0FBRyxDQUFDekMsSUFBSixJQUFZQSxJQUFiLElBQXVCeUMsR0FBRyxDQUFDdk4sRUFBSixJQUFVQSxFQUFyQyxFQUEwQzZYLE1BQU0sR0FBR3RLLEdBQVQ7QUFDN0MsS0FGRDtBQUdBLFdBQU9zSyxNQUFQO0FBQ0g7QUFuRFksQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNKQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMseUZBQThCO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLHlFQUFxQjtBQUMvQyx5RkFBeUYsbUJBQU8sQ0FBQyxtRUFBbUI7O0FBRXBIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQStCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMseUVBQXNCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ25MYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsa0RBQVM7QUFDN0IsV0FBVyxtQkFBTyxDQUFDLGdFQUFnQjtBQUNuQyxZQUFZLG1CQUFPLENBQUMsNERBQWM7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLHdEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBaUI7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsNEVBQXNCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLHNFQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0VBQWtCOztBQUV6Qzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMkRBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hEYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsMkRBQWU7QUFDdEMsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLHlCQUF5QixtQkFBTyxDQUFDLGlGQUFzQjtBQUN2RCxzQkFBc0IsbUJBQU8sQ0FBQywyRUFBbUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQ0FBa0MsY0FBYztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUM5RWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkRhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLHFFQUFnQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsb0JBQW9CLG1CQUFPLENBQUMsdUVBQWlCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyx1RUFBb0I7QUFDM0MsZUFBZSxtQkFBTyxDQUFDLHlEQUFhO0FBQ3BDLG9CQUFvQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN4RCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNyRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsbUVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBLCtDQUFhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QiwwQkFBMEIsbUJBQU8sQ0FBQyw4RkFBK0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdFQUFnQjtBQUN0QyxHQUFHO0FBQ0g7QUFDQSxjQUFjLG1CQUFPLENBQUMsaUVBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQy9GYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDLE9BQU87O0FBRVA7QUFDQSwwREFBMEQsd0JBQXdCO0FBQ2xGO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDZCQUE2QixhQUFhLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ25FYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsbURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ1hhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLG9EQUFXOztBQUVsQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLFFBQVEsSUFBMEM7QUFDbEQsUUFBUSxpQ0FBTyxFQUFFLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDM0IsS0FBSyxNQUFNLEVBSU47O0FBRUwsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxxRUFBcUUsd0NBQXdDOztBQUU3RyxpQkFBaUI7O0FBRWpCOztBQUVBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHNCQUFzQjtBQUM3QywwR0FBMEc7QUFDMUc7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDRFQUE0RSx1QkFBdUIsRUFBRTtBQUNyRyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyUUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJjb21tZXJjZWxheWVyLXNkay5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvY2xheWVyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMucXVlcnkgPSByZXF1aXJlKCcuL2xpYi9xdWVyeScpIiwiLy8gRmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhdCAxMS8wMi8yMDE5IDE3OjI3OjQwIGJ5IGNvbW1lcmNlbGF5ZXItanMtc2RrLWNvZGVnZW5cclxuXHJcblxyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcbmNvbnN0IGpzb25hcGkgPSByZXF1aXJlKCcuL2pzb25hcGknKVxyXG5cclxuXHJcbmNsYXNzIENMQXBpIHtcclxuXHJcblx0Ly8gQWRkcmVzc1xyXG5cdGxpc3RBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0QWRkcmVzc2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQWRkcmVzcyhhZGRyZXNzKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2FkZHJlc3NlcycsICdwb3N0Jykuc2V0Qm9keShhZGRyZXNzKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVBZGRyZXNzKGlkLCBhZGRyZXNzKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGFkZHJlc3MpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUFkZHJlc3MoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWRpdCBDYXJkXHJcblx0bGlzdENyZWRpdENhcmRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3JlZGl0X2NhcmRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDcmVkaXRDYXJkcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3JlZGl0Q2FyZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUNyZWRpdENhcmQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDcmVkaXRDYXJkKGNyZWRpdF9jYXJkKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2NyZWRpdF9jYXJkcycsICdwb3N0Jykuc2V0Qm9keShjcmVkaXRfY2FyZCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3JlZGl0Q2FyZChpZCwgY3JlZGl0X2NhcmQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUNyZWRpdENhcmQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIEFkZHJlc3NcclxuXHRsaXN0Q3VzdG9tZXJBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lckFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJBZGRyZXNzKGN1c3RvbWVyX2FkZHJlc3MpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX2FkZHJlc3MpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyQWRkcmVzcyhpZCwgY3VzdG9tZXJfYWRkcmVzcykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9hZGRyZXNzKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lckFkZHJlc3MoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFBhc3N3b3JkIFJlc2V0XHJcblx0bGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyUGFzc3dvcmRSZXNldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChjdXN0b21lcl9wYXNzd29yZF9yZXNldCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCwgY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgUGF5bWVudCBTb3VyY2VcclxuXHRsaXN0Q3VzdG9tZXJQYXltZW50U291cmNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJQYXltZW50U291cmNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJQYXltZW50U291cmNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGN1c3RvbWVyX3BheW1lbnRfc291cmNlKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkLCBjdXN0b21lcl9wYXltZW50X3NvdXJjZSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBTdWJzY3JpcHRpb25cclxuXHRsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGN1c3RvbWVyX3N1YnNjcmlwdGlvbikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3N1YnNjcmlwdGlvbikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQsIGN1c3RvbWVyX3N1YnNjcmlwdGlvbikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclN1YnNjcmlwdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyXHJcblx0bGlzdEN1c3RvbWVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXIoY3VzdG9tZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lcihpZCwgY3VzdG9tZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZWxpdmVyeSBMZWFkIFRpbWVcclxuXHRsaXN0RGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxEZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0RGVsaXZlcnlMZWFkVGltZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGVsaXZlcnlMZWFkVGltZShkZWxpdmVyeV9sZWFkX3RpbWUpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcycsICdwb3N0Jykuc2V0Qm9keShkZWxpdmVyeV9sZWFkX3RpbWUpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGRlbGl2ZXJ5X2xlYWRfdGltZSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVEZWxpdmVyeUxlYWRUaW1lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW52ZW50b3J5IE1vZGVsXHJcblx0bGlzdEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0SW52ZW50b3J5TW9kZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVJbnZlbnRvcnlNb2RlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJbnZlbnRvcnlNb2RlbChpbnZlbnRvcnlfbW9kZWwpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW52ZW50b3J5X21vZGVscycsICdwb3N0Jykuc2V0Qm9keShpbnZlbnRvcnlfbW9kZWwpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUludmVudG9yeU1vZGVsKGlkLCBpbnZlbnRvcnlfbW9kZWwpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlSW52ZW50b3J5TW9kZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaW5lIEl0ZW0gT3B0aW9uXHJcblx0bGlzdExpbmVJdGVtT3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbV9vcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxMaW5lSXRlbU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdExpbmVJdGVtT3B0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTGluZUl0ZW1PcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxpbmVJdGVtT3B0aW9uKGxpbmVfaXRlbV9vcHRpb24pIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGluZUl0ZW1PcHRpb24oaWQsIGxpbmVfaXRlbV9vcHRpb24pIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShsaW5lX2l0ZW1fb3B0aW9uKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbU9wdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaW5lIEl0ZW1cclxuXHRsaXN0TGluZUl0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxpbmVJdGVtKGxpbmVfaXRlbSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGluZUl0ZW0oaWQsIGxpbmVfaXRlbSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcmtldFxyXG5cdGxpc3RNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWFya2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTWFya2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWFya2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWFya2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1hcmtldChtYXJrZXQpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWFya2V0cycsICdwb3N0Jykuc2V0Qm9keShtYXJrZXQpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1hcmtldChpZCwgbWFya2V0KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtYXJrZXQpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU1hcmtldChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1lcmNoYW50XHJcblx0bGlzdE1lcmNoYW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21lcmNoYW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTWVyY2hhbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RNZXJjaGFudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU1lcmNoYW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTWVyY2hhbnQobWVyY2hhbnQpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1lcmNoYW50KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNZXJjaGFudChpZCwgbWVyY2hhbnQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobWVyY2hhbnQpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU1lcmNoYW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcmRlclxyXG5cdGxpc3RPcmRlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0T3JkZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVPcmRlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU9yZGVyKG9yZGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycsICdwb3N0Jykuc2V0Qm9keShvcmRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlT3JkZXIoaWQsIG9yZGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG9yZGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVPcmRlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyY2VsXHJcblx0bGlzdFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXJjZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXJjZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXJjZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXJjZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFyY2VsKHBhcmNlbCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXJjZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KHBhcmNlbCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGFyY2VsKGlkLCBwYXJjZWwpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBhcmNlbCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGFyY2VsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGF5bWVudCBNZXRob2RcclxuXHRsaXN0UGF5bWVudE1ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXltZW50X21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXltZW50TWV0aG9kcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGF5bWVudE1ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBheW1lbnRNZXRob2QocGF5bWVudF9tZXRob2QpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXltZW50TWV0aG9kKGlkLCBwYXltZW50X21ldGhvZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXltZW50X21ldGhvZCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5bWVudE1ldGhvZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGF5cGFsIFBheW1lbnRcclxuXHRsaXN0UGF5cGFsUGF5bWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXlwYWxfcGF5bWVudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBheXBhbFBheW1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXlwYWxQYXltZW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGF5cGFsUGF5bWVudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBheXBhbFBheW1lbnQocGF5cGFsX3BheW1lbnQpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5cGFsX3BheW1lbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheXBhbF9wYXltZW50KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXlwYWxQYXltZW50KGlkLCBwYXlwYWxfcGF5bWVudCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5cGFsUGF5bWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2UgTGlzdFxyXG5cdGxpc3RQcmljZUxpc3RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VfbGlzdHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlTGlzdHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVByaWNlTGlzdChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUHJpY2VMaXN0KHByaWNlX2xpc3QpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VfbGlzdHMnLCAncG9zdCcpLnNldEJvZHkocHJpY2VfbGlzdCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUHJpY2VMaXN0KGlkLCBwcmljZV9saXN0KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocHJpY2VfbGlzdCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUHJpY2VMaXN0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByaWNlXHJcblx0bGlzdFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQcmljZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVByaWNlKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUHJpY2UocHJpY2UpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZShpZCwgcHJpY2UpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocHJpY2UpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwbWVudFxyXG5cdGxpc3RTaGlwbWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwbWVudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBtZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcG1lbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwbWVudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBtZW50KHNoaXBtZW50KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBtZW50cycsICdwb3N0Jykuc2V0Qm9keShzaGlwbWVudCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcG1lbnQoaWQsIHNoaXBtZW50KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBtZW50KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwbWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgQ2F0ZWdvcnlcclxuXHRsaXN0U2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ0NhdGVnb3JpZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdDYXRlZ29yeShzaGlwcGluZ19jYXRlZ29yeSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX2NhdGVnb3J5KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ0NhdGVnb3J5KGlkLCBzaGlwcGluZ19jYXRlZ29yeSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBNZXRob2RcclxuXHRsaXN0U2hpcHBpbmdNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ01ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nTWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nTWV0aG9kKHNoaXBwaW5nX21ldGhvZCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdNZXRob2QoaWQsIHNoaXBwaW5nX21ldGhvZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfbWV0aG9kKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ01ldGhvZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIFpvbmVcclxuXHRsaXN0U2hpcHBpbmdab25lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX3pvbmVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ1pvbmVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ1pvbmVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ1pvbmUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nWm9uZShzaGlwcGluZ196b25lKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX3pvbmVzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nWm9uZShpZCwgc2hpcHBpbmdfem9uZSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nWm9uZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3UgT3B0aW9uXHJcblx0bGlzdFNrdU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3Vfb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1T3B0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1T3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3VPcHRpb24oc2t1X29wdGlvbikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3Vfb3B0aW9ucycsICdwb3N0Jykuc2V0Qm9keShza3Vfb3B0aW9uKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTa3VPcHRpb24oaWQsIHNrdV9vcHRpb24pIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShza3Vfb3B0aW9uKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTa3VPcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2t1XHJcblx0bGlzdFNrdXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTa3VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTa3VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTa3UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2t1KHNrdSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1KGlkLCBza3UpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNrdSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgSXRlbVxyXG5cdGxpc3RTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfaXRlbXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrSXRlbShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tJdGVtKHN0b2NrX2l0ZW0pIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfaXRlbSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tJdGVtKGlkLCBzdG9ja19pdGVtKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfaXRlbSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIExldmVsXHJcblx0bGlzdFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0xldmVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tMZXZlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrTGV2ZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0xldmVsKHN0b2NrX2xldmVsKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xldmVscycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19sZXZlbCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMZXZlbChpZCwgc3RvY2tfbGV2ZWwpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfbGV2ZWwpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrTGV2ZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIExvY2F0aW9uXHJcblx0bGlzdFN0b2NrTG9jYXRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbG9jYXRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0xvY2F0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tMb2NhdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrTG9jYXRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0xvY2F0aW9uKHN0b2NrX2xvY2F0aW9uKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMb2NhdGlvbihpZCwgc3RvY2tfbG9jYXRpb24pIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfbG9jYXRpb24pKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrTG9jYXRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFdlYmhvb2tcclxuXHRsaXN0V2ViaG9va3MoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93ZWJob29rcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsV2ViaG9va3MoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdlYmhvb2tzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVXZWJob29rKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXZWJob29rKHdlYmhvb2spIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2ViaG9va3MnLCAncG9zdCcpLnNldEJvZHkod2ViaG9vaykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2ViaG9vayhpZCwgd2ViaG9vaykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdlYmhvb2spKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdlYmhvb2soaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2lyZSBUcmFuc2ZlclxyXG5cdGxpc3RXaXJlVHJhbnNmZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2lyZV90cmFuc2ZlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdpcmVUcmFuc2ZlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdpcmVUcmFuc2ZlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2lyZVRyYW5zZmVyKHdpcmVfdHJhbnNmZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2lyZV90cmFuc2ZlcnMnLCAncG9zdCcpLnNldEJvZHkod2lyZV90cmFuc2ZlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2lyZVRyYW5zZmVyKGlkLCB3aXJlX3RyYW5zZmVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkod2lyZV90cmFuc2ZlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlV2lyZVRyYW5zZmVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG52YXIgYXBpID0gbmV3IENMQXBpKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jbGFwaSA9IGFwaTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICB1dGlscy5sb2coJ2FwaSBjbGllbnQgaW5pdGlhbGl6ZWQgd2l0aCBjb25maWc6Jyk7XHJcbiAgICB1dGlscy5sb2coY2ZnKTtcclxuICAgIGFwaS5jbGllbnQgPSAgY2xpZW50Lm5ld0luc3RhbmNlKGNmZyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICB1dGlscy5sb2coYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gY2FsbGluZyAke2FwaVJlcXVlc3QucGF0aH0gLi4uYCk7XHJcblxyXG4gICAgaWYgKGFwaS5jbGllbnQgPT0gdW5kZWZpbmVkKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IodW5kZWZpbmVkLCAnYXBpIG5vdCBpbml0aWFsaXplZCcpKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBib2R5ID0ganNvbmFwaS5zZXJpYWxpemUoYXBpUmVxdWVzdC5ib2R5KTtcclxuICAgICAgICBhcGlSZXF1ZXN0LnNldEJvZHkoYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGFwaS5jbGllbnQuY2FsbChhcGlSZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbihhcGlSZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZShhcGlSZXNwb25zZSwgYXBpUmVxdWVzdC5yZXNwb25zZV90eXBlKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyb3IucmVzcG9uc2UpIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpX2Vycm9yID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKGFwaV9lcnJvci5zdGF0dXMsIGFwaV9lcnJvci50aXRsZSwgYXBpX2Vycm9yLmRldGFpbCwgYXBpX2Vycm9yLmNvZGUpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0KSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzcG9uc2UoYXBpUmVzcG9uc2UsIHJlc3BvbnNlX3R5cGUpIHtcclxuXHRpZiAocmVzcG9uc2VfdHlwZSA9PSB1bmRlZmluZWQpIHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRlbHNlXHJcblx0XHRzd2l0Y2ggKHJlc3BvbnNlX3R5cGUpIHtcclxuXHRcdFx0Y2FzZSAnbW9kZWwnOlxyXG5cdFx0XHRcdHRocm93ICdEZXNlcmlhbGl6YXRpb24gdG8gbW9kZWwgbm90IHN1cHBvcnRlZCc7XHJcblx0XHRcdGNhc2UgJ25vcm1hbGl6ZWQnOlxyXG5cdFx0XHRcdHJldHVybiBqc29uYXBpLm5vcm1hbGl6ZShhcGlSZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0Y2FzZSAnanNvbmFwaSc6XHJcblx0XHRcdFx0cmV0dXJuIGFwaVJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdGNhc2UgJ3Jhdyc6XHJcblx0XHRcdFx0cmV0dXJuIGFwaVJlc3BvbnNlO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IFwiVW5zdXBwb3J0ZWQgcmVzcG9uc2VfdHlwZTogJ1wiICsgYXBpUmVxdWVzdC5yZXNwb25zZV90eXBlICsgXCInXCI7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkYXRhKHJlcykge1xyXG5cdGlmIChyZXMuaXNBcGlSZXNvdXJjZSAmJiAocmVzLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpIHJldHVybiByZXM7XHJcblx0ZWxzZVxyXG5cdGlmIChyZXMuZGF0YXNldCkgcmV0dXJuIHJlcy5kYXRhc2V0LmRhdGE7XHJcblx0ZWxzZVxyXG5cdGlmIChyZXMuZGF0YSkgcmV0dXJuIChyZXMuZGF0YS5kYXRhKT8gcmVzLmRhdGEuZGF0YSA6IHJlcy5kYXRhO1xyXG5cdGVsc2UgcmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0Vycm9yKHN0YXR1cywgZGVzY3JpcHRpb24sIG1lc3NhZ2UsIGNvZGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3IgOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1cyA6IHN0YXR1cyxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1lc3NhZ2UgOiBtZXNzYWdlLFxyXG4gICAgICAgIGNvZGUgOiBjb2RlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBhbGwobGlzdEZ1bmN0aW9uLCBmaWx0ZXIgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG4gICAgaWYgKChsaXN0RnVuY3Rpb24gPT0gdW5kZWZpbmVkKSB8fCAhbGlzdEZ1bmN0aW9uLm5hbWUuc3RhcnRzV2l0aCgnbGlzdCcpKSByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJVbmRlZmluZWQgJ2xpc3QnIEFQSSBmdW5jdGlvblwiKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0UGFnZShmaWx0ZXIsIHNpemUgPSBmaWx0ZXIucGFnZV9zaXplIHx8IDEwLCBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzUXVlcnlGaWx0ZXIoZmlsdGVyKSkgZmlsdGVyLnBhZ2UobnVtYmVyLCBzaXplKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW3NpemVdJ10gPSBzaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2VbbnVtYmVyXSddID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKGZpbHRlcik7XHJcblx0XHJcblx0Ly8gU2F2ZSBvcmlnaW5hbCBvcHRpb24gYW5kIGZvcnhlIHJlc3BvbnNlX3R5cGUgdG8gJ3JhdydcclxuXHRsZXQgcmVzcG9uc2VfdHlwZSA9IG9wdGlvbnMucmVzcG9uc2VfdHlwZTtcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSAncmF3JztcclxuXHJcbiAgICBsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgbWF4X3BhZ2UgPSBmaXJzdFBhZ2UuZGF0YS5tZXRhLnBhZ2VfY291bnQ7XHJcblx0Y29uc3QgcGFnZV9zaXplID0gZmlyc3RQYWdlLmRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHJcblx0bGV0IHBhZ2VzID0gbmV3IEFycmF5KG1heF9wYWdlKTtcclxuICAgIHBhZ2VzWzBdID0gcmVzcG9uc2UoZmlyc3RQYWdlLCByZXNwb25zZV90eXBlKTtcclxuXHJcblx0Ly8gU3RhbmRhcmQgbGlzdEZ1bmN0aW9uIHJlc3BvbnNlXHJcblx0aWYgKG1heF9wYWdlID09IDEpIHJldHVybiBwYWdlc1swXTsgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICBmb3IgKHBuID0gMTsgcG4gPCBtYXhfcGFnZTsgcG4rKykge1xyXG4gICAgICAgIHNldFBhZ2UoZmlsdGVyLCBwYWdlX3NpemUsIHBuKzEpO1xyXG4gICAgICAgIHBhZ2VzW3BuXSA9IGxpc3RGdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0Ly8gU2V0IG9yaWdpbmFsIG9wdGlvblxyXG5cdG9wdGlvbnMucmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGU7XHJcblxyXG5cdGxldCBvdXQgPSBbXTtcclxuXHJcbiAgICAoYXdhaXQgUHJvbWlzZS5hbGwocGFnZXMpKS5mb3JFYWNoKHAgPT4geyBvdXQgPSBvdXQuY29uY2F0KGRhdGEocmVzcG9uc2UocCwgcmVzcG9uc2VfdHlwZSkpKSB9KTtcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG5cclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuXHJcblxyXG5jb25zdCBBVVRIX1RPS0VOUyA9IHt9O1xyXG5cclxuXHJcbmNsYXNzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KSB7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBjbGllbnRTZWNyZXQodmFsdWUpIHsgdGhpcy5jbGllbnRfc2VjcmV0ID0gdmFsdWU7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDbGllbnRDcmVkZW50aWFscyBleHRlbmRzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50X2lkLCBzY29wZSwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ2NsaWVudF9jcmVkZW50aWFscyc7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgfVxyXG4gICAgc2V0U2NvcGUodmFsdWUpIHsgdGhpcy5zY29wZSA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgbWFya2V0U2NvcGUodmFsdWUpIHsgdGhpcy5zY29wZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpPyAnbWFya2V0OicrdmFsdWUgOiB2YWx1ZTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb25Db2RlIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuc2NvcGUsIGNmZy5jbGllbnRfc2VjcmV0KVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNmZy5jb2RlO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gY2ZnLnJlZGlyZWN0X3VyaTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBhc3N3b3JkIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuc2NvcGUsIGNmZy5jbGllbnRfc2VjcmV0KVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGNmZy51c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gY2ZnLnBhc3N3b3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUmVmcmVza1Rva2VuIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAncmVmcmVzaF90b2tlbic7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQXBpVG9rZW4ge1xyXG4gICAgY29uc3RydWN0b3IoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gJ2JlYXJlcic7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl90eXBlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3duZXJfaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIC8vIENsaWVudENyZWRlbnRpYWxzIDogKGNsaWVudF9pZCkgPT4geyByZXR1cm4gbmV3IENsaWVudENyZWRlbnRpYWxzKGNsaWVudF9pZCkgfSxcclxuICAgIENsaWVudENyZWRlbnRpYWxzLFxyXG4gICAgQXV0aG9yaXphdGlvbkNvZGUsXHJcbiAgICBQYXNzd29yZCxcclxuICAgIFJlZnJlc2tUb2tlblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aGVudGljYXRlID0gKGF1dGgpID0+IHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5wb3N0KCcvb2F1dGgvdG9rZW4nLCB7XHJcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IGF1dGguZ3JhbnRfdHlwZSxcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBhdXRoLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgc2NvcGU6IGF1dGguc2NvcGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGF1dGguY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZTogYXV0aC5jb2RlLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IGF1dGgucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogYXV0aC51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IGF1dGgucmVmcmVzaF90b2tlblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IEFwaVRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0b2tlbi5hY2Nlc3NfdG9rZW4gPSByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4ucmVmcmVzaF90b2tlbiA9IHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4uc2NvcGUgPSByZXNwb25zZS5kYXRhLnNjb3BlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl90eXBlID0gcmVzcG9uc2UuZGF0YS5vd25lcl90eXBlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl9pZCA9IHJlc3BvbnNlLmRhdGEub3duZXJfaWQ7XHJcbiAgICAgICAgICAgIHRva2VuLmNyZWF0ZWRfYXQgPSByZXNwb25zZS5kYXRhLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgIHRva2VuLmV4cGlyZXNfaW4gPSByZXNwb25zZS5kYXRhLmV4cGlyZXNfaW47XHJcblxyXG4gICAgICAgICAgICBjYWNoZVRva2VuKGF1dGguY2xpZW50X2lkLCB0b2tlbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcblxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYWNoZVRva2VuKGNsaWVudF9pZCwgdG9rZW4pIHtcclxuICAgIEFVVEhfVE9LRU5TW2NsaWVudF9pZF0gPSB0b2tlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9rZW4oY2xpZW50X2lkKSB7XHJcbiAgICByZXR1cm4gQVVUSF9UT0tFTlNbY2xpZW50X2lkXTtcclxufVxyXG4iLCJjb25zdCBhcGkgPSByZXF1aXJlKCcuL2FwaScpXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuXHJcbi8vIEV4cG9zZSBhbGwgYXBpIGZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaS5jbGFwaTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBpZiAoY2ZnICE9IHVuZGVmaW5lZCkgY2ZnLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgIGFwaS5pbml0aWFsaXplKHV0aWxzLm1lcmdlTWFwcyhjb25maWcuY2xheWVyLCBjZmcpKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5sYXN0QWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLmNsYXBpLmNsaWVudC5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zZXR0aW5ncyA9IGNvbmZpZy5zZGs7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5oZXkgPSAoKSA9PiB7IHJldHVybiAnSGVsbG8hJyB9XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuY29uc3QgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQXBpQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIHZlcmlmaWNhdGlvbi4uLicpXHJcblxyXG4gICAgaWYgKGNvbmZpZyA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGNvbmZpZyc7XHJcbiAgICBpZiAoY29uZmlnLmJhc2VfdXJsID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYmFzZV91cmwnO1xyXG4gICAgaWYgKGNvbmZpZy5tYXJrZXRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBtYXJrZXRfaWQnO1xyXG4gICAgaWYgKGNvbmZpZy5jbGllbnRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjbGllbnRfaWQnO1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIG9rLicpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3R5cGUgPSBzZGsucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhdGgocGF0aCkgeyB0aGlzLnBhdGggPSBwYXRoOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldFBhcmFtcyhwYXJhbXMpIHsgdGhpcy5wYXJhbXMgPSAocGFyYW1zICYmIHBhcmFtcy5pc1F1ZXJ5RmlsdGVyICYmIChwYXJhbXMuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSk/IHBhcmFtcy5idWlsZCgpIDogcGFyYW1zOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldE1ldGhvZChtZXRob2QpIHsgdGhpcy5tZXRob2QgPSBtZXRob2Q7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0Qm9keShib2R5KSB7IHRoaXMuYm9keSA9IGJvZHk7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0SGVhZGVycyhoZWFkZXJzKSB7IHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIG5ld0F0dGVtcHQoKSB7IHRoaXMuYXR0ZW1wdCsrOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBSZXF1ZXN0IE9wdGlvbnNcclxuICAgICAgICBnZXQgcmF3X3Jlc3BvbnNlKCkgeyByZXR1cm4gKHRoaXMucmVzcG9uc2VUeXBlID09ICdyYXcnKTsgfVxyXG4gICAgICAgIHNldCByYXdfcmVzcG9uc2UocmF3KSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IChyYXcgJiYgKHJhdyA9PT0gdHJ1ZSkpPyAncmF3JyA6ICdub3JtYWxpemVkJzsgfVxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSh0eXBlKSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IHR5cGU/IHR5cGUgOiBzZGsucmVzcG9uc2VfdHlwZTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gT25seSByZWFsbHkgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGJlaW5nIHNldHRlZFxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZShvcHRpb25zLnJlc3BvbnNlX3R5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAgICAgY2hlY2tBcGlDb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAvLyAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjb3BlOiAnbWFya2V0OicgKyB0aGlzLmNvbmZpZy5tYXJrZXRfaWRcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGF1dGguYXV0aGVudGljYXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHModGhpcy5jb25maWcuY2xpZW50X2lkKS5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYWxsKGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lc3NhZ2UobXNnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFwaVJlcXVlc3QuY29ycmVsYXRpb25faWQ/IGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGAgOiAnJykuY29uY2F0KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcGlSZXF1ZXN0Lm5ld0F0dGVtcHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VfcGF0aCA9ICgodGhpcy5jb25maWcuYmFzZV9wYXRoICE9IHVuZGVmaW5lZCk/IHRoaXMuY29uZmlnLmJhc2VfcGF0aCA6ICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgKHRvIGJlIHJlbW92ZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBiYXNlX3BhdGggKyBhcGlSZXF1ZXN0LnBhdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGFwaVJlcXVlc3QucGFyYW1zO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBhcGlSZXF1ZXN0Lm1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHF1ZXJ5U3RyaW5nXHJcbiAgICAgICAgICAgIGxldCBjYWxsVXJsID0gcGF0aDtcclxuICAgICAgICAgICAgaWYgKChwYXJhbXMgIT0gdW5kZWZpbmVkKSAmJiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW1zW2tleV1cclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgIGNhbGxVcmwgPSBjYWxsVXJsLmNvbmNhdCgnPycpLmNvbmNhdChxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdwYXRoOiAnICsgY2FsbFVybCkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjYWxsVXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZGsudGltZW91dC5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2UgY3VzdG9tIGFuZCBkZWZhdWx0IGhlYWRlcnNcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kTWFwKGF4aW9zQ29uZmlnLmhlYWRlcnMsIGFwaVJlcXVlc3QuaGVhZGVycyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2R5XHJcbiAgICAgICAgICAgIGlmIChhcGlSZXF1ZXN0LmJvZHkgIT0gdW5kZWZpbmVkKSBheGlvc0NvbmZpZy5kYXRhID0gYXBpUmVxdWVzdC5ib2R5O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF4X2F0dGVtcHRzID0gc2RrLmF1dGhfYXR0ZW1wdHM/IHNkay5hdXRoX2F0dGVtcHRzIDogMTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgYXV0aGVudGljYXRlZCBleGVjdXRlIGF1dGhlbnRpY2F0aW9uIHRoZW4gcmUtZXhlY3V0ZSBjYWxsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYWNjZXNzX3Rva2VuIG51bGwsIGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5hdXRoX2F0dGVtcHRzID4gbWF4X2F0dGVtcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZGsudGltZW91dC5yZXRyeSkgdGhyb3cgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgYXV0aGVudGljYXRpb24gYXR0ZW1wdHMgKCR7bWF4X2F0dGVtcHRzfSkgYW5kIG5vIHJldHJ5IHRpbWVvdXQgY29uZmlndXJlZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5zbGVlcChzZGsudGltZW91dC5yZXRyeSwgbWVzc2FnZSgnYW5vdGhlciBhdXRoIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4geyByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGUoKS50aGVuKGFjY2Vzc190b2tlbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnZXhlY3V0aW5nIGFwaSBjYWxsIC4uLicpKTtcclxuICAgICAgICAgICAgICAgIGF4aW9zQ29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zQ29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FwaSBjYWxsIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKGVycm9yPyBlcnJvciA6ICdlcnJvciBkZXRlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdFQ09OTkFCT1JURUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgndGltZW91dCBleGNlcHRpb246JyArIGVycm9yLmNvbmZpZy50aW1lb3V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBpIGVycm9uZW91c2x5IHJldHVybiBjb2RlIDQwMSBpbnN0ZWFkIG9mIGNvZGUgNDAzIGZvciBVTkFVVEhPUklaRUQgY2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICYmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5jb2RlID09ICdJTlZBTElEX1RPS0VOJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdpbnZhbGlkIHRva2VuLCBhY2Nlc3MgZGVuaWVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGNsYXllcjoge1xyXG5cclxuICAgICAgICBkZWZhdWx0IDogdHJ1ZSxcclxuICBcclxuICAgICAgICBjbGllbnRfaWQgOiAnMzUxMDIwZTljODRmMjA3Njc1NTA4M2YwOGJmZThlNDczNjVhNzYzOTVkYjEwNTljMzIxOWMzN2FiZmY4NjUzNCcsXHJcbiAgICAgICAgbWFya2V0X2lkIDogJzE4NScsXHJcbiAgICAgICAgYmFzZV91cmwgOiBcImh0dHBzOi8vc3RhdGljLWNvbW1lcmNlLmNvbW1lcmNlbGF5ZXIuaW9cIixcclxuICAgICAgICBiYXNlX3BhdGggOiBudWxsLFxyXG4gICAgICAgIGNvdW50cnlfY29kZSA6ICdVUycsXHJcbiAgICAgICAgbGFuZ3VhZ2VfY29kZSA6ICdlbicsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZGs6IHtcclxuICAgICAgICBkZWJ1ZyAgICAgICAgICAgOiBmYWxzZSwgICAgICAgIC8vIGRlYnVnIG1vZGUgYWN0aXZhdGVkXHJcbiAgICAgICAgY29uc29sZSAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBsb2cgdG8gY29uc29sZSBlbmFibGVkXHJcbiAgICAgICAgdHJhY2UgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyB0cmFjZSBjbGllbnQgaW5wdXQvb3V0cHV0IHRvIGNvbnNvbGVcclxuICAgICAgICBhdXRoX2F0dGVtcHRzICAgOiAxLCAgICAgICAgICAgIC8vIG51bWJlciBvZiBhdHRlbXB0cyBvZiBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgIHJlc3BvbnNlX3R5cGUgICA6ICdub3JtYWxpemVkJywgLy8gUmVzb25zZSBmb3JtYXQuIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICB0aW1lb3V0IDogeyAvLyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgcmV0cnkgOiAyNTAsICAgIC8vIHJldHJ5IGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCA6IDIwMDAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImNvbnN0IG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ2pzb24tYXBpLW5vcm1hbGl6ZScpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gKGJvZHkpID0+IHtcclxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkgcmV0dXJuIGJvZHk7XHJcbiAgICAvLyBObyBkYXRhID0gUGxhaW4gT2JqZWN0IG9yIEFwaSBSZXNvdXJjZVxyXG4gICAgZWxzZSByZXR1cm4gKGJvZHkuZGF0YSA9PSB1bmRlZmluZWQpPyBuZXcgSnNvbkFwaVJlc291cmNlKGJvZHkpLnNlcmlhbGl6ZSgpIDogYm9keTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIGlmIChqYXBpID09IHVuZGVmaW5lZCkgcmV0dXJuIGphcGk7XHJcbiAgICBlbHNlIHJldHVybiAoamFwaS5kYXRhID09IHVuZGVmaW5lZCk/IGphcGkgOiBuZXcgSnNvbkFwaVJlc291cmNlKGphcGkpLmRlc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5ub3JtYWxpemUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShkYXRhKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEpzb25BcGlSZXNvdXJjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2UgPSB7fSkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlLmRhdGEgIT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhLmF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogcG9ydGFyZSBpZCBlIHR5cGUgaW4gdGVzdGEgYWQgb2duaSBvYmplY3RcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gdGhpcy5yZXNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoWydpZCcsICd0eXBlJ10uaW5jbHVkZXMoa2V5KSkgdGhpcy5kYXRhW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5pc0FwaVJlc291cmNlICYmIGZpZWxkLmlzQXBpUmVzb3VyY2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHNba2V5LnN0YXJ0c1dpdGgoJ19fJyk/IGtleS5zdWJzdHIoJ19fJy5sZW5ndGgpIDoga2V5XSA9IHsgZGF0YTogeyB0eXBlOiBmaWVsZC50eXBlLCBpZDogZmllbGQuaWQgfSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpICYmIGtleS5zdGFydHNXaXRoKCdfXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRhdGEuYXR0cmlidXRlc1trZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2VyaWFsaXplKCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMucmVzb3VyY2UuZGF0YSA9PSB1bmRlZmluZWQpICYmIHRoaXMucmVzb3VyY2UuaXNBcGlSZXNvdXJjZSAmJiAodGhpcy5yZXNvdXJjZS5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnJlc291cmNlLmRhdGE7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSB1dGlscy5uZXdSZXNvdXJjZShkYXRhLnR5cGUsIGRhdGEuaWQsIGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnJlbGF0aW9uc2hpcHMpLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVsX2RhdGEgPSBkYXRhLnJlbGF0aW9uc2hpcHNbcmVsXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAocmVsX2RhdGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWxfZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ0FycmF5IFJlc291cmNlIHJlbGF0aW9uc2hpcHMgbm90IHN1cHBvcnRlZDogJyArIHJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVsUmVzID0gdXRpbHMubmV3UmVzb3VyY2UocmVsX2RhdGEudHlwZSwgcmVsX2RhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXRSZXNvdXJjZShyZWwsIHJlbFJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluYyA9IHV0aWxzLmdldEluY2x1ZGVkKHRoaXMucmVzb3VyY2UsIHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxSZXMuc2V0RmllbGRzKGluYy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gRmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhdCAxNS8wMi8yMDE5IDEyOjA2OjQzIGJ5IGNvbW1lcmNlbGF5ZXItanMtc2RrLWNvZGVnZW5cclxuXHJcblxyXG4vLyBCYXNpYyBBYnN0cmFjdCBSZXNvdXJjZVxyXG5jbGFzcyBSZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlzQXBpUmVzb3VyY2UoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBzZXRSZXNvdXJjZShmaWVsZCwgcmVzKSB7IGlmICgocmVzICE9IHVuZGVmaW5lZCkgJiYgcmVzLmlzQXBpUmVzb3VyY2UgJiYgcmVzLmlzQXBpUmVzb3VyY2UoKSkgdGhpc1snX18nLmNvbmNhdChmaWVsZCldID0gcmVzOyB9XHJcblx0Z2V0UmVzb3VyY2UoZmllbGQpIHsgcmV0dXJuIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXTsgfVxyXG5cdHNldEZpZWxkcyhmaWVsZHMgPSB7fSkgeyBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGQgPT4geyB0aGlzW2ZpZWxkXSA9IGZpZWxkc1tmaWVsZF0gfSk7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBBZGRyZXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2FkZHJlc3NlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEFkZHJlc3MuVFlQRSk7XHJcblx0XHR0aGlzLmJ1c2luZXNzID0gZmllbGRzLmJ1c2luZXNzO1xyXG5cdFx0dGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcblx0XHR0aGlzLmxhc3RfbmFtZSA9IGZpZWxkcy5sYXN0X25hbWU7XHJcblx0XHR0aGlzLmNvbXBhbnkgPSBmaWVsZHMuY29tcGFueTtcclxuXHRcdHRoaXMubGluZV8xID0gZmllbGRzLmxpbmVfMTtcclxuXHRcdHRoaXMubGluZV8yID0gZmllbGRzLmxpbmVfMjtcclxuXHRcdHRoaXMuY2l0eSA9IGZpZWxkcy5jaXR5O1xyXG5cdFx0dGhpcy56aXBfY29kZSA9IGZpZWxkcy56aXBfY29kZTtcclxuXHRcdHRoaXMuc3RhdGVfY29kZSA9IGZpZWxkcy5zdGF0ZV9jb2RlO1xyXG5cdFx0dGhpcy5jb3VudHJ5X2NvZGUgPSBmaWVsZHMuY291bnRyeV9jb2RlO1xyXG5cdFx0dGhpcy5waG9uZSA9IGZpZWxkcy5waG9uZTtcclxuXHRcdHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcblx0XHR0aGlzLm5vdGVzID0gZmllbGRzLm5vdGVzO1xyXG5cdFx0dGhpcy5sYXQgPSBmaWVsZHMubGF0O1xyXG5cdFx0dGhpcy5sbmcgPSBmaWVsZHMubG5nO1xyXG5cdFx0dGhpcy5iaWxsaW5nX2luZm8gPSBmaWVsZHMuYmlsbGluZ19pbmZvO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgZ2VvY29kZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2dlb2NvZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgZ2VvY29kZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnZ2VvY29kZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlZGl0IENhcmQgcmVzb3VyY2VcclxuY2xhc3MgQ3JlZGl0Q2FyZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjcmVkaXRfY2FyZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDcmVkaXRDYXJkLlRZUEUpO1xyXG5cdFx0dGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcblx0XHR0aGlzLmxhc3RfbmFtZSA9IGZpZWxkcy5sYXN0X25hbWU7XHJcblx0XHR0aGlzLm51bWJlciA9IGZpZWxkcy5udW1iZXI7XHJcblx0XHR0aGlzLm1vbnRoID0gZmllbGRzLm1vbnRoO1xyXG5cdFx0dGhpcy55ZWFyID0gZmllbGRzLnllYXI7XHJcblx0XHR0aGlzLnZlcmlmaWNhdGlvbl92YWx1ZSA9IGZpZWxkcy52ZXJpZmljYXRpb25fdmFsdWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBBZGRyZXNzIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9hZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lckFkZHJlc3MuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBQYXNzd29yZCBSZXNldCByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBhc3N3b3JkUmVzZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXNzd29yZFJlc2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcblx0XHR0aGlzLl9yZXNldF9wYXNzd29yZF90b2tlbiA9IGZpZWxkcy5fcmVzZXRfcGFzc3dvcmRfdG9rZW47XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFBheW1lbnQgU291cmNlIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGF5bWVudFNvdXJjZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXltZW50X3NvdXJjZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBheW1lbnRTb3VyY2UuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgU3Vic2NyaXB0aW9uIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyU3Vic2NyaXB0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclN1YnNjcmlwdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyLlRZUEUpO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuXHRcdHRoaXMucGFzc3dvcmQgPSBmaWVsZHMucGFzc3dvcmQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIERlbGl2ZXJ5IExlYWQgVGltZSByZXNvdXJjZVxyXG5jbGFzcyBEZWxpdmVyeUxlYWRUaW1lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2RlbGl2ZXJ5X2xlYWRfdGltZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBEZWxpdmVyeUxlYWRUaW1lLlRZUEUpO1xyXG5cdFx0dGhpcy5taW5faG91cnMgPSBmaWVsZHMubWluX2hvdXJzO1xyXG5cdFx0dGhpcy5tYXhfaG91cnMgPSBmaWVsZHMubWF4X2hvdXJzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnZlbnRvcnkgTW9kZWwgcmVzb3VyY2VcclxuY2xhc3MgSW52ZW50b3J5TW9kZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnaW52ZW50b3J5X21vZGVscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEludmVudG9yeU1vZGVsLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIExpbmUgSXRlbSBPcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW1PcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtX29wdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbU9wdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IGZpZWxkcy5vcHRpb25zO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbGluZV9pdGVtKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdsaW5lX2l0ZW0nLCB2YWx1ZSkgfVxyXG5cdGdldCBsaW5lX2l0ZW0oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbGluZV9pdGVtJykgfVxyXG5cdHNldCBza3Vfb3B0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3Vfb3B0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc2t1X29wdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3Vfb3B0aW9uJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIExpbmUgSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBMaW5lSXRlbSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdsaW5lX2l0ZW1zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTGluZUl0ZW0uVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuXHRcdHRoaXMuX3VwZGF0ZV9xdWFudGl0eSA9IGZpZWxkcy5fdXBkYXRlX3F1YW50aXR5O1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxuXHRzZXQgaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaXRlbScsIHZhbHVlKSB9XHJcblx0Z2V0IGl0ZW0oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaXRlbScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXJrZXQgcmVzb3VyY2VcclxuY2xhc3MgTWFya2V0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ21hcmtldHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBNYXJrZXQuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1lcmNoYW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtZXJjaGFudCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1lcmNoYW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21lcmNoYW50JykgfVxyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG5cdHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcblx0Z2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVyY2hhbnQgcmVzb3VyY2VcclxuY2xhc3MgTWVyY2hhbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWVyY2hhbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWVyY2hhbnQuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gT3JkZXIgcmVzb3VyY2VcclxuY2xhc3MgT3JkZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnb3JkZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgT3JkZXIuVFlQRSk7XHJcblx0XHR0aGlzLmd1ZXN0ID0gZmllbGRzLmd1ZXN0O1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcblx0XHR0aGlzLmxhbmd1YWdlX2NvZGUgPSBmaWVsZHMubGFuZ3VhZ2VfY29kZTtcclxuXHRcdHRoaXMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2sgPSBmaWVsZHMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2s7XHJcblx0XHR0aGlzLmNvdXBvbl9jb2RlID0gZmllbGRzLmNvdXBvbl9jb2RlO1xyXG5cdFx0dGhpcy5jYXJ0X3VybCA9IGZpZWxkcy5jYXJ0X3VybDtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy50ZXJtc191cmwgPSBmaWVsZHMudGVybXNfdXJsO1xyXG5cdFx0dGhpcy5wcml2YWN5X3VybCA9IGZpZWxkcy5wcml2YWN5X3VybDtcclxuXHRcdHRoaXMuX3BsYWNlID0gZmllbGRzLl9wbGFjZTtcclxuXHRcdHRoaXMuX2NhbmNlbCA9IGZpZWxkcy5fY2FuY2VsO1xyXG5cdFx0dGhpcy5fYXBwcm92ZSA9IGZpZWxkcy5fYXBwcm92ZTtcclxuXHRcdHRoaXMuX3VwZGF0ZV90YXhlcyA9IGZpZWxkcy5fdXBkYXRlX3RheGVzO1xyXG5cdFx0dGhpcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQ7XHJcblx0XHR0aGlzLl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQgPSBmaWVsZHMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmcgPSBmaWVsZHMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nO1xyXG5cdFx0dGhpcy5fYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmcgPSBmaWVsZHMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nO1xyXG5cdFx0dGhpcy5fc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQgPSBmaWVsZHMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0O1xyXG5cdFx0dGhpcy5fc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayA9IGZpZWxkcy5fc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayA9IGZpZWxkcy5fc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rO1xyXG5cdFx0dGhpcy5fcmVmcmVzaCA9IGZpZWxkcy5fcmVmcmVzaDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IHNoaXBwaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IGJpbGxpbmdfYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYmlsbGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYmlsbGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycpIH1cclxuXHRzZXQgcGF5bWVudF9tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9tZXRob2QnKSB9XHJcblx0c2V0IHBheW1lbnRfc291cmNlKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBhcmNlbCByZXNvdXJjZVxyXG5jbGFzcyBQYXJjZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGFyY2VscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBhcmNlbC5UWVBFKTtcclxuXHRcdHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuXHRcdHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcblx0XHR0aGlzLmVlbF9wZmMgPSBmaWVsZHMuZWVsX3BmYztcclxuXHRcdHRoaXMuY29udGVudHNfdHlwZSA9IGZpZWxkcy5jb250ZW50c190eXBlO1xyXG5cdFx0dGhpcy5jb250ZW50c19leHBsYW5hdGlvbiA9IGZpZWxkcy5jb250ZW50c19leHBsYW5hdGlvbjtcclxuXHRcdHRoaXMuY3VzdG9tc19jZXJ0aWZ5ID0gZmllbGRzLmN1c3RvbXNfY2VydGlmeTtcclxuXHRcdHRoaXMuY3VzdG9tc19zaWduZXIgPSBmaWVsZHMuY3VzdG9tc19zaWduZXI7XHJcblx0XHR0aGlzLm5vbl9kZWxpdmVyeV9vcHRpb24gPSBmaWVsZHMubm9uX2RlbGl2ZXJ5X29wdGlvbjtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fdHlwZSA9IGZpZWxkcy5yZXN0cmljdGlvbl90eXBlO1xyXG5cdFx0dGhpcy5yZXN0cmljdGlvbl9jb21tZW50cyA9IGZpZWxkcy5yZXN0cmljdGlvbl9jb21tZW50cztcclxuXHRcdHRoaXMuY3VzdG9tc19pbmZvX3JlcXVpcmVkID0gZmllbGRzLmN1c3RvbXNfaW5mb19yZXF1aXJlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBtZW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwbWVudCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBtZW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBtZW50JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheW1lbnQgTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFBheW1lbnRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5bWVudF9tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5bWVudE1ldGhvZC5UWVBFKTtcclxuXHRcdHRoaXMucGF5bWVudF9zb3VyY2VfdHlwZSA9IGZpZWxkcy5wYXltZW50X3NvdXJjZV90eXBlO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBwYXltZW50X2dhdGV3YXkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfZ2F0ZXdheSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGF5cGFsIFBheW1lbnQgcmVzb3VyY2VcclxuY2xhc3MgUGF5cGFsUGF5bWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXlwYWxfcGF5bWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXlwYWxQYXltZW50LlRZUEUpO1xyXG5cdFx0dGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcblx0XHR0aGlzLmNhbmNlbF91cmwgPSBmaWVsZHMuY2FuY2VsX3VybDtcclxuXHRcdHRoaXMubm90ZV90b19wYXllciA9IGZpZWxkcy5ub3RlX3RvX3BheWVyO1xyXG5cdFx0dGhpcy5wYXlwYWxfcGF5ZXJfaWQgPSBmaWVsZHMucGF5cGFsX3BheWVyX2lkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgTGlzdCByZXNvdXJjZVxyXG5jbGFzcyBQcmljZUxpc3QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VfbGlzdHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZUxpc3QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuY3VycmVuY3lfY29kZSA9IGZpZWxkcy5jdXJyZW5jeV9jb2RlO1xyXG5cdFx0dGhpcy50YXhfaW5jbHVkZWQgPSBmaWVsZHMudGF4X2luY2x1ZGVkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBQcmljZSByZXNvdXJjZVxyXG5jbGFzcyBQcmljZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwcmljZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLmFtb3VudF9jZW50cyA9IGZpZWxkcy5hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzID0gZmllbGRzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuXHRzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG5cdGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBtZW50IHJlc291cmNlXHJcbmNsYXNzIFNoaXBtZW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBtZW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBtZW50LlRZUEUpO1xyXG5cdFx0dGhpcy5fb25faG9sZCA9IGZpZWxkcy5fb25faG9sZDtcclxuXHRcdHRoaXMuX3BpY2tpbmcgPSBmaWVsZHMuX3BpY2tpbmc7XHJcblx0XHR0aGlzLl9wYWNraW5nID0gZmllbGRzLl9wYWNraW5nO1xyXG5cdFx0dGhpcy5fcmVhZHlfdG9fc2hpcCA9IGZpZWxkcy5fcmVhZHlfdG9fc2hpcDtcclxuXHRcdHRoaXMuX3NoaXAgPSBmaWVsZHMuX3NoaXA7XHJcblx0XHR0aGlzLl9nZXRfcmF0ZXMgPSBmaWVsZHMuX2dldF9yYXRlcztcclxuXHRcdHRoaXMuc2VsZWN0ZWRfcmF0ZV9pZCA9IGZpZWxkcy5zZWxlY3RlZF9yYXRlX2lkO1xyXG5cdFx0dGhpcy5fcHVyY2hhc2UgPSBmaWVsZHMuX3B1cmNoYXNlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIENhdGVnb3J5IHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nQ2F0ZWdvcnkgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfY2F0ZWdvcmllcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nQ2F0ZWdvcnkuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ01ldGhvZC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzID0gZmllbGRzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IHNoaXBwaW5nX3pvbmUodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ196b25lKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnKSB9XHJcblx0c2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIFpvbmUgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdab25lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX3pvbmVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdab25lLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmNvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMubm90X2NvdW50cnlfY29kZV9yZWdleDtcclxuXHRcdHRoaXMuc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5zdGF0ZV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3Rfc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5ub3Rfc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMuemlwX2NvZGVfcmVnZXggPSBmaWVsZHMuemlwX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF96aXBfY29kZV9yZWdleCA9IGZpZWxkcy5ub3RfemlwX2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNrdSBPcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgU2t1T3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1T3B0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmRlbGF5X2hvdXJzID0gZmllbGRzLmRlbGF5X2hvdXJzO1xyXG5cdFx0dGhpcy5za3VfY29kZV9yZWdleCA9IGZpZWxkcy5za3VfY29kZV9yZWdleDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgcmVzb3VyY2VcclxuY2xhc3MgU2t1IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3UuVFlQRSk7XHJcblx0XHR0aGlzLmNvZGUgPSBmaWVsZHMuY29kZTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGZpZWxkcy5kZXNjcmlwdGlvbjtcclxuXHRcdHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuXHRcdHRoaXMudGFnX25hbWVzID0gZmllbGRzLnRhZ19uYW1lcztcclxuXHRcdHRoaXMucGllY2VzX3Blcl9wYWNrID0gZmllbGRzLnBpZWNlc19wZXJfcGFjaztcclxuXHRcdHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuXHRcdHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBJdGVtIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrSXRlbSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrSXRlbS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMZXZlbCByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xldmVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xldmVscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTGV2ZWwuVFlQRSk7XHJcblx0XHR0aGlzLnByaW9yaXR5ID0gZmllbGRzLnByaW9yaXR5O1xyXG5cdFx0dGhpcy5vbl9ob2xkID0gZmllbGRzLm9uX2hvbGQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG5cdGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIExvY2F0aW9uIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTG9jYXRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbG9jYXRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMb2NhdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5sYWJlbF9mb3JtYXQgPSBmaWVsZHMubGFiZWxfZm9ybWF0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBXZWJob29rIHJlc291cmNlXHJcbmNsYXNzIFdlYmhvb2sgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnd2ViaG9va3MnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBXZWJob29rLlRZUEUpO1xyXG5cdFx0dGhpcy50b3BpYyA9IGZpZWxkcy50b3BpYztcclxuXHRcdHRoaXMuY2FsbGJhY2tfdXJsID0gZmllbGRzLmNhbGxiYWNrX3VybDtcclxuXHRcdHRoaXMuaW5jbHVkZV9yZXNvdXJjZXMgPSBmaWVsZHMuaW5jbHVkZV9yZXNvdXJjZXM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFdpcmUgVHJhbnNmZXIgcmVzb3VyY2VcclxuY2xhc3MgV2lyZVRyYW5zZmVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dpcmVfdHJhbnNmZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2lyZVRyYW5zZmVyLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0QWRkcmVzcyxcclxuXHRDcmVkaXRDYXJkLFxyXG5cdEN1c3RvbWVyQWRkcmVzcyxcclxuXHRDdXN0b21lclBhc3N3b3JkUmVzZXQsXHJcblx0Q3VzdG9tZXJQYXltZW50U291cmNlLFxyXG5cdEN1c3RvbWVyU3Vic2NyaXB0aW9uLFxyXG5cdEN1c3RvbWVyLFxyXG5cdERlbGl2ZXJ5TGVhZFRpbWUsXHJcblx0SW52ZW50b3J5TW9kZWwsXHJcblx0TGluZUl0ZW1PcHRpb24sXHJcblx0TGluZUl0ZW0sXHJcblx0TWFya2V0LFxyXG5cdE1lcmNoYW50LFxyXG5cdE9yZGVyLFxyXG5cdFBhcmNlbCxcclxuXHRQYXltZW50TWV0aG9kLFxyXG5cdFBheXBhbFBheW1lbnQsXHJcblx0UHJpY2VMaXN0LFxyXG5cdFByaWNlLFxyXG5cdFNoaXBtZW50LFxyXG5cdFNoaXBwaW5nQ2F0ZWdvcnksXHJcblx0U2hpcHBpbmdNZXRob2QsXHJcblx0U2hpcHBpbmdab25lLFxyXG5cdFNrdU9wdGlvbixcclxuXHRTa3UsXHJcblx0U3RvY2tJdGVtLFxyXG5cdFN0b2NrTGV2ZWwsXHJcblx0U3RvY2tMb2NhdGlvbixcclxuXHRXZWJob29rLFxyXG5cdFdpcmVUcmFuc2ZlcixcclxufVxyXG4iLCJcclxuY2xhc3MgUXVlcnlGaWx0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzID0gW107XHJcbiAgICAgICAgdGhpcy5zcGFyc2VfZmllbGRzZXRzID0ge307XHJcbiAgICAgICAgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcl9maWVsZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmN1c3RvbV9wYXJhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucGFnZV9zaXplID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUXVlcnlGaWx0ZXIoKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgc29ydChmaWVsZCwgZGVzY2VuZGluZykge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMucHVzaCgoZGVzY2VuZGluZz8gJy0nIDogJycpLmNvbmNhdChmaWVsZCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkcyhyZXNvdXJjZSwgLi4uZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkcyAhPSB1bmRlZmluZWQpIHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNvdXJjZV0gPSBmaWVsZHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jbHVkZSguLi5yZXNvdXJjZXMpIHtcclxuICAgICAgICAvLyBpZiAocmVzb3VyY2VzICE9IHVuZGVmaW5lZCkgcmVzb3VyY2VzLmZvckVhY2gocmVzID0+IHsgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMucHVzaChyZXMpIH0pXHJcbiAgICAgICAgaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzb3VyY2VzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZmlsdGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoZmlsdGVyICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoa2V5ICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuY3VzdG9tX3BhcmFtc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSBwYWdlX251bWJlcj8gcGFnZV9udW1iZXIrKyA6IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoam9pbikge1xyXG5cclxuICAgICAgICBsZXQgcXNNYXAgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykuZm9yRWFjaChmaWx0ZXIgPT4geyBxc01hcFtgZmlsdGVyWyR7ZmlsdGVyfV1gXSA9IHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluY2x1ZGVkIFJlc291cmNlc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmluY2x1ZGVkX3Jlc291cmNlcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuaW5jbHVkZSA9IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gU3BhcnNlIEZpZWxkc2V0c1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykuZm9yRWFjaChyZXMgPT4geyBxc01hcFtgZmllbGRzWyR7cmVzfV1gXSA9IHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNdLmpvaW4oJywnKSB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zb3J0X2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuc29ydCA9IHRoaXMuc29ydF9maWVsZHMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gUGFyYW1zXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7IHFzTWFwW2tleV0gPSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSB9KVxyXG5cclxuICAgICAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9udW1iZXIgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtudW1iZXJdJ10gPSB0aGlzLnBhZ2VfbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2Vfc2l6ZSAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW3NpemVdJ10gPSB0aGlzLnBhZ2Vfc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFqb2luPyBxc01hcCA6IE9iamVjdC5rZXlzKHFzTWFwKS5tYXAoa2V5ID0+IHsgcmV0dXJuIGtleSsnPScrcXNNYXBba2V5XSB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcbmNvbnN0IG1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBsb2cgOiAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLmNvbnNvbGUpIGNvbnNvbGUubG9nKChtZXNzYWdlID09IHVuZGVmaW5lZCk/ICcnIDogbWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZE1hcCA6IChtYXAsIGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXAgPT0gdW5kZWZpbmVkKSBtYXAgPSB7fTtcclxuICAgICAgICBpZiAoZXh0ICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGtleSA9PiB7IG1hcFtrZXldID0gZXh0W2tleV07IH0pO1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlTWFwcyA6IChtYXAxLCBtYXAyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubWFwMSwgLi4ubWFwMiB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lTWFwIDogKG1hcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobWFwID09IHVuZGVmaW5lZCk/IG1hcCA6IHsgLi4ubWFwIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwIDogKG1zLCBtc2cpID0+IHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cy5sb2coKG1zZz8gYCR7bXNnfSAtIGAgOiAnJykuY29uY2F0KGB3YWl0aW5nICR7bXN9IG1zZWNzIC4uLmApKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGd1aWQgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArICcuJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLnN1YnN0cigwLCA2KSkudG9VcHBlckNhc2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNRdWVyeUZpbHRlcihvYmopIHtcclxuICAgICAgICByZXR1cm4gKG9iaiAmJiBvYmouaXNRdWVyeUZpbHRlciAmJiAob2JqLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBuZXdSZXNvdXJjZSh0eXBlLCBpZCwgZmllbGRzKSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGVsKS5mb3JFYWNoKChjbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xfdHlwZSA9IG1vZGVsW2NsXS5UWVBFO1xyXG4gICAgICAgICAgICBpZiAoY2xfdHlwZSAmJiAoY2xfdHlwZSA9PSB0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgbW9kZWxbY2xdKGlkLCBmaWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRJbmNsdWRlZChkYXRhLCB0eXBlLCBpZCkge1xyXG4gICAgICAgIGlmICgoZGF0YSA9PSB1bmRlZmluZWQpIHx8IChkYXRhLmluY2x1ZGVkID09IHVuZGVmaW5lZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IGluY1JlcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkYXRhLmluY2x1ZGVkLmZvckVhY2goaW5jID0+IHtcclxuICAgICAgICAgICAgaWYgKChpbmMudHlwZSA9PSB0eXBlKSAmJiAoaW5jLmlkID09IGlkKSkgaW5jUmVzID0gaW5jO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGluY1JlcztcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290Lmpzb25BcGlOb3JtYWxpemUgPSBmYWN0b3J5KCk7XG4gICAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gTm9ybWFsaXplcihkYXRhc2V0LCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb3JtYWxpemVyKSkge1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZXJJbnN0YW5jZSA9IG5ldyBOb3JtYWxpemVyKGRhdGFzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5ID8gbm9ybWFsaXplckluc3RhbmNlLmdldChwcm9wZXJ0eSkgOiBub3JtYWxpemVySW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhc2V0ID0gSlNPTi5wYXJzZShkYXRhc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YXNldCB8fCAhZGF0YXNldC5kYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQganNvbiBhcGkgbm9ybWFsaXplciBpbnB1dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gZGF0YXNldDtcbiAgICAgICAgdGhpcy5pc0NvbGxlY3Rpb24gPSBpc0FycmF5KGRhdGFzZXQuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5oYXlzdGFjayA9IGJ1aWxkSGF5c3RhY2soZGF0YXNldC5pbmNsdWRlZCwgdGhpcy5pc0NvbGxlY3Rpb24gPyBkYXRhc2V0LmRhdGEgOiBbZGF0YXNldC5kYXRhXSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEhheXN0YWNrKGluY2x1ZGVkLCBhZGRpdGlvbmFsSXRlbXMpIHtcblxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IFtdO1xuICAgICAgICB2YXIgaGF5c3RhY2sgPSBpbmNsdWRlZCB8fCBbXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZXMucHVzaChlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVhY2goYWRkaXRpb25hbEl0ZW1zLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVzLmluZGV4T2YoZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpIDwgMCkge1xuICAgICAgICAgICAgICAgIGhheXN0YWNrLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICBpZiAoaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNhbGxiYWNrLmNhbGwoY29udGV4dCwga2V5LCBjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIGVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0LCBpdGVtLCBrZXkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWVwRXh0ZW5kKG91dCwgb2JqKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb3V0W2tleV0gPT09ICd1bmRlZmluZWQnICYmIChvdXRba2V5XSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVlcEV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlUcmVlLCBmdW5jdGlvbihwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0uZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbkRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSByZWxhdGVkRW50aXR5ID8gbmV3IE5vcm1hbGl6ZXIoe2RhdGE6IHJlbGF0ZWRFbnRpdHksIGluY2x1ZGVkOiBoYXlzdGFja30pIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0UmVsYXRpb25EYXRhKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSkge1xuXG4gICAgICAgIHJldHVybiBbJ2lkJywgJ3R5cGUnXS5pbmRleE9mKHByb3BlcnR5KSA+PSAwID8gZW50aXR5W3Byb3BlcnR5XSA6IGVudGl0eS5hdHRyaWJ1dGVzW3Byb3BlcnR5XTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0aW9uRGF0YShyZWxhdGlvbk5hbWUsIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXS5kYXRhO1xuICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IHJlbGF0aW9uRGF0YSAmJiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgIGlmIChpc0FycmF5KHJlbGF0ZWRFbnRpdHkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAocmVsYXRlZEVudGl0eSwgZnVuY3Rpb24oc2luZ2xlUmVsYXRlZEVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgc2luZ2xlUmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghcmVsYXRlZEVudGl0eSkge1xuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVJlbGF0aW9uKHByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICByZXR1cm4gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwobmV3IE5vcm1hbGl6ZXIoe1xuICAgICAgICAgICAgZGF0YTogcmVsYXRlZEVudGl0eSxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBoYXlzdGFja1xuICAgICAgICB9KSwgcHJvcGVydHlUcmVlKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgdmFyIHNlYXJjaCA9IGlzQXJyYXkocmVsYXRpb25EYXRhKSA/IG1hcChyZWxhdGlvbkRhdGEsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkO1xuICAgICAgICB9KSA6IFtyZWxhdGlvbkRhdGEudHlwZSArICdAJyArIHJlbGF0aW9uRGF0YS5pZF07XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgc2VhcmNoLmluZGV4T2YoaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZCkgPj0gMCAmJiB0ZW1wLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wLmxlbmd0aCA9PT0gMSAmJiAhaXNBcnJheShyZWxhdGlvbkRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvTmVzdGVkT2JqZWN0KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHZhciB0ZW1wID0gb2JqO1xuICAgICAgICB2YXIgY29sbGVjdGlvbkxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtjb2xsZWN0aW9uW2ldXSA9IHRlbXBbY29sbGVjdGlvbltpXV0gfHwgKGkrMSA9PT0gY29sbGVjdGlvbkxlbmd0aCA/IHVuZGVmaW5lZCA6IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFByb3BlcnR5VHJlZShwcm9wZXJ0eUxpc3QpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlMaXN0LCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlQYXJ0cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKHRlbXAsIGFycmF5VG9OZXN0ZWRPYmplY3QocHJvcGVydHlQYXJ0cykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpYVByb3BlcnR5VHJlZShwcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcCh0aGlzLmRhdGFzZXQuZGF0YSwgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIHRoaXMuaGF5c3RhY2spO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCB0aGlzLmRhdGFzZXQuZGF0YSwgdGhpcy5oYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgTm9ybWFsaXplci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwodGhpcywgYnVpbGRQcm9wZXJ0eVRyZWUoaXNBcnJheShwcm9wZXJ0eSkgPyBwcm9wZXJ0eSA6IFtwcm9wZXJ0eV0pKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IG1hcChyZXN1bHQsIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bcHJvcGVydHldOyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IHJlc3VsdFtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gTm9ybWFsaXplcjtcblxufSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=