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
    client_id: null,
    market_id: null,
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

var _log = __webpack_require__(/*! ./log */ "./lib/log.js");

module.exports = {
  log: function log(message) {
    if (sdk.debug && sdk.console) _log.msg(message == undefined ? '' : message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9qc29uYXBpLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbG9nLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvanNvbi1hcGktbm9ybWFsaXplL3NyYy9qc29uQXBpTm9ybWFsaXplLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwibW9kZWwiLCJxdWVyeSIsImNsaWVudCIsInV0aWxzIiwianNvbmFwaSIsIkNMQXBpIiwiZmlsdGVyIiwib3B0aW9ucyIsInJlcXVlc3QiLCJuZXdSZXF1ZXN0Iiwic2V0UGFyYW1zIiwic2V0T3B0aW9ucyIsImFsbCIsImxpc3RBZGRyZXNzZXMiLCJpZCIsImFkZHJlc3MiLCJzZXRCb2R5IiwibGlzdENyZWRpdENhcmRzIiwiY3JlZGl0X2NhcmQiLCJsaXN0Q3VzdG9tZXJBZGRyZXNzZXMiLCJjdXN0b21lcl9hZGRyZXNzIiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXNzd29yZF9yZXNldCIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UiLCJsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVycyIsImN1c3RvbWVyIiwibGlzdERlbGl2ZXJ5TGVhZFRpbWVzIiwiZGVsaXZlcnlfbGVhZF90aW1lIiwibGlzdEludmVudG9yeU1vZGVscyIsImludmVudG9yeV9tb2RlbCIsImxpc3RMaW5lSXRlbU9wdGlvbnMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtcyIsImxpbmVfaXRlbSIsImxpc3RNYXJrZXRzIiwibWFya2V0IiwibGlzdE1lcmNoYW50cyIsIm1lcmNoYW50IiwibGlzdE9yZGVycyIsIm9yZGVyIiwibGlzdFBhcmNlbHMiLCJwYXJjZWwiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXltZW50X21ldGhvZCIsImxpc3RQYXlwYWxQYXltZW50cyIsInBheXBhbF9wYXltZW50IiwibGlzdFByaWNlTGlzdHMiLCJwcmljZV9saXN0IiwibGlzdFByaWNlcyIsInByaWNlIiwibGlzdFNoaXBtZW50cyIsInNoaXBtZW50IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nTWV0aG9kcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ1pvbmVzIiwic2hpcHBpbmdfem9uZSIsImxpc3RTa3VPcHRpb25zIiwic2t1X29wdGlvbiIsImxpc3RTa3VzIiwic2t1IiwibGlzdFN0b2NrSXRlbXMiLCJzdG9ja19pdGVtIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbGV2ZWwiLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJzdG9ja19sb2NhdGlvbiIsImxpc3RXZWJob29rcyIsIndlYmhvb2siLCJsaXN0V2lyZVRyYW5zZmVycyIsIndpcmVfdHJhbnNmZXIiLCJhcGkiLCJjbGFwaSIsImluaXRpYWxpemUiLCJjZmciLCJsb2ciLCJuZXdJbnN0YW5jZSIsImFwaVJlcXVlc3QiLCJjb3JyZWxhdGlvbl9pZCIsImF0dGVtcHQiLCJwYXRoIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlamVjdCIsIm5ld0Vycm9yIiwiYm9keSIsInNlcmlhbGl6ZSIsImNhbGwiLCJ0aGVuIiwiYXBpUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlX3R5cGUiLCJjYXRjaCIsImVycm9yIiwiZGF0YSIsImVycm9ycyIsImFwaV9lcnJvciIsInN0YXR1cyIsInRpdGxlIiwiZGV0YWlsIiwiY29kZSIsInN0YXR1c1RleHQiLCJub3JtYWxpemUiLCJyZXMiLCJpc0FwaVJlc291cmNlIiwiZGF0YXNldCIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsImxpc3RGdW5jdGlvbiIsInNldFBhZ2UiLCJzaXplIiwicGFnZV9zaXplIiwibnVtYmVyIiwiaXNRdWVyeUZpbHRlciIsInBhZ2UiLCJuYW1lIiwic3RhcnRzV2l0aCIsImZpcnN0UGFnZSIsIm1heF9wYWdlIiwibWV0YSIsInBhZ2VfY291bnQiLCJsZW5ndGgiLCJwYWdlcyIsIkFycmF5IiwicG4iLCJvdXQiLCJwIiwiY29uY2F0IiwiZm9yRWFjaCIsImF4aW9zIiwiQVVUSF9UT0tFTlMiLCJBdXRoIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJ2YWx1ZSIsIkNsaWVudENyZWRlbnRpYWxzIiwic2NvcGUiLCJBdXRob3JpemF0aW9uQ29kZSIsInJlZGlyZWN0X3VyaSIsIlBhc3N3b3JkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlJlZnJlc2tUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJBcGlUb2tlbiIsImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiLCJvd25lcl90eXBlIiwib3duZXJfaWQiLCJjcmVhdGVkX2F0IiwiZXhwaXJlc19pbiIsImF1dGhlbnRpY2F0ZSIsImF1dGgiLCJwb3N0IiwidG9rZW4iLCJjYWNoZVRva2VuIiwiZ2V0VG9rZW4iLCJjb25maWciLCJkZWZhdWx0IiwibWVyZ2VNYXBzIiwiY2xheWVyIiwibGFzdEFjY2Vzc1Rva2VuIiwic2V0dGluZ3MiLCJzZGsiLCJoZXkiLCJjaGVja0FwaUNvbmZpZyIsImJhc2VfdXJsIiwibWFya2V0X2lkIiwic2V0QXhpb3NDb25maWciLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGVidWciLCJ0cmFjZSIsImludGVyY2VwdG9ycyIsInVzZSIsIkFwaUNsaWVudCIsIm1ldGhvZCIsIkFwaVJlcXVlc3QiLCJwYXJhbXMiLCJndWlkIiwiYnVpbGQiLCJ0eXBlIiwicmVzcG9uc2VUeXBlIiwicmF3IiwiYXV0aF9hdHRlbXB0cyIsIm1hcmtldFNjb3BlIiwibXNnIiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIkpzb25BcGlSZXNvdXJjZSIsImRlc2VyaWFsaXplIiwiamFwaSIsInJlc291cmNlIiwiYXR0cmlidXRlcyIsImZpZWxkIiwiaW5jbHVkZXMiLCJyZWxhdGlvbnNoaXBzIiwic3Vic3RyIiwiaXNBcnJheSIsInJlbCIsImhlbHBlciIsIm5ld1Jlc291cmNlIiwicmVsX2RhdGEiLCJyZWxSZXMiLCJzZXRSZXNvdXJjZSIsImluYyIsImpzb25hcGlJbmNsdWRlZCIsInNldEZpZWxkcyIsImluY2x1ZGVkIiwiaW5jUmVzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInByb2JlIiwiZW5hYmxlZCIsIlJlc291cmNlIiwicmVmZXJlbmNlIiwibWV0YWRhdGEiLCJ1cGRhdGVkX2F0IiwiZmllbGRzIiwiQWRkcmVzcyIsIlRZUEUiLCJidXNpbmVzcyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb21wYW55IiwibGluZV8xIiwibGluZV8yIiwiY2l0eSIsInppcF9jb2RlIiwic3RhdGVfY29kZSIsInBob25lIiwiZW1haWwiLCJub3RlcyIsImxhdCIsImxuZyIsImJpbGxpbmdfaW5mbyIsIkNyZWRpdENhcmQiLCJtb250aCIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJDdXN0b21lckFkZHJlc3MiLCJDdXN0b21lclBhc3N3b3JkUmVzZXQiLCJjdXN0b21lcl9lbWFpbCIsImN1c3RvbWVyX3Bhc3N3b3JkIiwiX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuIiwiQ3VzdG9tZXJQYXltZW50U291cmNlIiwiQ3VzdG9tZXJTdWJzY3JpcHRpb24iLCJDdXN0b21lciIsIkRlbGl2ZXJ5TGVhZFRpbWUiLCJtaW5faG91cnMiLCJtYXhfaG91cnMiLCJJbnZlbnRvcnlNb2RlbCIsIkxpbmVJdGVtT3B0aW9uIiwicXVhbnRpdHkiLCJMaW5lSXRlbSIsInNrdV9jb2RlIiwiX3VwZGF0ZV9xdWFudGl0eSIsImltYWdlX3VybCIsIk1hcmtldCIsIk1lcmNoYW50IiwiT3JkZXIiLCJndWVzdCIsInNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrIiwiY291cG9uX2NvZGUiLCJjYXJ0X3VybCIsInJldHVybl91cmwiLCJ0ZXJtc191cmwiLCJwcml2YWN5X3VybCIsIl9wbGFjZSIsIl9jYW5jZWwiLCJfYXBwcm92ZSIsIl91cGRhdGVfdGF4ZXMiLCJfYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmciLCJfYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmciLCJfc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQiLCJfc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfcmVmcmVzaCIsIlBhcmNlbCIsIndlaWdodCIsInVuaXRfb2Zfd2VpZ2h0IiwiZWVsX3BmYyIsImNvbnRlbnRzX3R5cGUiLCJjb250ZW50c19leHBsYW5hdGlvbiIsImN1c3RvbXNfY2VydGlmeSIsImN1c3RvbXNfc2lnbmVyIiwibm9uX2RlbGl2ZXJ5X29wdGlvbiIsInJlc3RyaWN0aW9uX3R5cGUiLCJyZXN0cmljdGlvbl9jb21tZW50cyIsImN1c3RvbXNfaW5mb19yZXF1aXJlZCIsIlBheW1lbnRNZXRob2QiLCJwYXltZW50X3NvdXJjZV90eXBlIiwicHJpY2VfYW1vdW50X2NlbnRzIiwiUGF5cGFsUGF5bWVudCIsImNhbmNlbF91cmwiLCJub3RlX3RvX3BheWVyIiwicGF5cGFsX3BheWVyX2lkIiwiUHJpY2VMaXN0IiwiY3VycmVuY3lfY29kZSIsInRheF9pbmNsdWRlZCIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJTaGlwbWVudCIsIl9vbl9ob2xkIiwiX3BpY2tpbmciLCJfcGFja2luZyIsIl9yZWFkeV90b19zaGlwIiwiX3NoaXAiLCJfZ2V0X3JhdGVzIiwic2VsZWN0ZWRfcmF0ZV9pZCIsIl9wdXJjaGFzZSIsIlNoaXBwaW5nQ2F0ZWdvcnkiLCJTaGlwcGluZ01ldGhvZCIsImZyZWVfb3Zlcl9hbW91bnRfY2VudHMiLCJTaGlwcGluZ1pvbmUiLCJjb3VudHJ5X2NvZGVfcmVnZXgiLCJub3RfY291bnRyeV9jb2RlX3JlZ2V4Iiwic3RhdGVfY29kZV9yZWdleCIsIm5vdF9zdGF0ZV9jb2RlX3JlZ2V4IiwiemlwX2NvZGVfcmVnZXgiLCJub3RfemlwX2NvZGVfcmVnZXgiLCJTa3VPcHRpb24iLCJkZWxheV9ob3VycyIsInNrdV9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU3RvY2tJdGVtIiwiU3RvY2tMZXZlbCIsInByaW9yaXR5Iiwib25faG9sZCIsIlN0b2NrTG9jYXRpb24iLCJsYWJlbF9mb3JtYXQiLCJXZWJob29rIiwidG9waWMiLCJjYWxsYmFja191cmwiLCJpbmNsdWRlX3Jlc291cmNlcyIsIldpcmVUcmFuc2ZlciIsImluc3RhbmNlIiwiY2wiLCJjbF90eXBlIiwiUXVlcnlGaWx0ZXIiLCJjbGVhciIsInNvcnRfZmllbGRzIiwic3BhcnNlX2ZpZWxkc2V0cyIsImluY2x1ZGVkX3Jlc291cmNlcyIsImZpbHRlcl9maWVsZHMiLCJjdXN0b21fcGFyYW1zIiwicGFnZV9udW1iZXIiLCJkZXNjZW5kaW5nIiwicHVzaCIsInJlc291cmNlcyIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInFzTWFwIiwiaW5jbHVkZSIsInNvcnQiLCJleHQiLCJtYXAxIiwibWFwMiIsImNsb25lTWFwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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TDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoiY29tbWVyY2VsYXllci1zZGsuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2NsYXllcicpXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vbGliL21vZGVsJylcclxuXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKSIsIi8vIEZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXQgMTEvMDIvMjAxOSAxNzoyNzo0MCBieSBjb21tZXJjZWxheWVyLWpzLXNkay1jb2RlZ2VuXHJcblxyXG5cclxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBqc29uYXBpID0gcmVxdWlyZSgnLi9qc29uYXBpJylcclxuXHJcblxyXG5jbGFzcyBDTEFwaSB7XHJcblxyXG5cdC8vIEFkZHJlc3NcclxuXHRsaXN0QWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvYWRkcmVzc2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQWRkcmVzcyhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUFkZHJlc3MoYWRkcmVzcykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoYWRkcmVzcykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQWRkcmVzcyhpZCwgYWRkcmVzcykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShhZGRyZXNzKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVBZGRyZXNzKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVkaXQgQ2FyZFxyXG5cdGxpc3RDcmVkaXRDYXJkcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2NyZWRpdF9jYXJkcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdENyZWRpdENhcmRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDcmVkaXRDYXJkKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3JlZGl0Q2FyZChjcmVkaXRfY2FyZCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnLCAncG9zdCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUNyZWRpdENhcmQoaWQsIGNyZWRpdF9jYXJkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGNyZWRpdF9jYXJkKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDcmVkaXRDYXJkKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBBZGRyZXNzXHJcblx0bGlzdEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lckFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJBZGRyZXNzZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyQWRkcmVzcyhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyQWRkcmVzcyhjdXN0b21lcl9hZGRyZXNzKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX2FkZHJlc3NlcycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9hZGRyZXNzKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lckFkZHJlc3MoaWQsIGN1c3RvbWVyX2FkZHJlc3MpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJBZGRyZXNzKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXNzd29yZCBSZXNldFxyXG5cdGxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBhc3N3b3JkUmVzZXQoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQsIGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFBheW1lbnQgU291cmNlXHJcblx0bGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyUGF5bWVudFNvdXJjZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgU3Vic2NyaXB0aW9uXHJcblx0bGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyU3Vic2NyaXB0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclN1YnNjcmlwdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclN1YnNjcmlwdGlvbihjdXN0b21lcl9zdWJzY3JpcHRpb24pIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBjdXN0b21lcl9zdWJzY3JpcHRpb24pIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3N1YnNjcmlwdGlvbikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lclxyXG5cdGxpc3RDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyKGN1c3RvbWVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXIoaWQsIGN1c3RvbWVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVsaXZlcnkgTGVhZCBUaW1lXHJcblx0bGlzdERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsRGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdERlbGl2ZXJ5TGVhZFRpbWVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVEZWxpdmVyeUxlYWRUaW1lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZURlbGl2ZXJ5TGVhZFRpbWUoZGVsaXZlcnlfbGVhZF90aW1lKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnLCAncG9zdCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVEZWxpdmVyeUxlYWRUaW1lKGlkLCBkZWxpdmVyeV9sZWFkX3RpbWUpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGRlbGl2ZXJ5X2xlYWRfdGltZSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlRGVsaXZlcnlMZWFkVGltZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEludmVudG9yeSBNb2RlbFxyXG5cdGxpc3RJbnZlbnRvcnlNb2RlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbnZlbnRvcnlfbW9kZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxJbnZlbnRvcnlNb2RlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEludmVudG9yeU1vZGVscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlSW52ZW50b3J5TW9kZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW52ZW50b3J5TW9kZWwoaW52ZW50b3J5X21vZGVsKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnLCAncG9zdCcpLnNldEJvZHkoaW52ZW50b3J5X21vZGVsKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbnZlbnRvcnlNb2RlbChpZCwgaW52ZW50b3J5X21vZGVsKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShpbnZlbnRvcnlfbW9kZWwpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUludmVudG9yeU1vZGVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtIE9wdGlvblxyXG5cdGxpc3RMaW5lSXRlbU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1fb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbU9wdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtT3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbU9wdGlvbihsaW5lX2l0ZW1fb3B0aW9uKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpbmVJdGVtT3B0aW9uKGlkLCBsaW5lX2l0ZW1fb3B0aW9uKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTGluZUl0ZW1PcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtXHJcblx0bGlzdExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TGluZUl0ZW1zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVMaW5lSXRlbShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbShsaW5lX2l0ZW0pIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycsICdwb3N0Jykuc2V0Qm9keShsaW5lX2l0ZW0pKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpbmVJdGVtKGlkLCBsaW5lX2l0ZW0pIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbSkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTGluZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXJrZXRcclxuXHRsaXN0TWFya2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21hcmtldHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbE1hcmtldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE1hcmtldHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU1hcmtldChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVNYXJrZXQobWFya2V0KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21hcmtldHMnLCAncG9zdCcpLnNldEJvZHkobWFya2V0KSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNYXJrZXQoaWQsIG1hcmtldCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobWFya2V0KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNYXJrZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNZXJjaGFudFxyXG5cdGxpc3RNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tZXJjaGFudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbE1lcmNoYW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWVyY2hhbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNZXJjaGFudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1lcmNoYW50KG1lcmNoYW50KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21lcmNoYW50cycsICdwb3N0Jykuc2V0Qm9keShtZXJjaGFudCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWVyY2hhbnQoaWQsIG1lcmNoYW50KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG1lcmNoYW50KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNZXJjaGFudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3JkZXJcclxuXHRsaXN0T3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxPcmRlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE9yZGVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlT3JkZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVPcmRlcihvcmRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnLCAncG9zdCcpLnNldEJvZHkob3JkZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU9yZGVyKGlkLCBvcmRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShvcmRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlT3JkZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcmNlbFxyXG5cdGxpc3RQYXJjZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGFyY2VscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGFyY2VscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGFyY2VscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGFyY2VsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBhcmNlbChwYXJjZWwpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGFyY2VscycsICdwb3N0Jykuc2V0Qm9keShwYXJjZWwpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBhcmNlbChpZCwgcGFyY2VsKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXJjZWwpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBhcmNlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheW1lbnQgTWV0aG9kXHJcblx0bGlzdFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5bWVudE1ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheW1lbnRNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXltZW50TWV0aG9kKHBheW1lbnRfbWV0aG9kKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycsICdwb3N0Jykuc2V0Qm9keShwYXltZW50X21ldGhvZCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGF5bWVudE1ldGhvZChpZCwgcGF5bWVudF9tZXRob2QpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGF5bWVudF9tZXRob2QpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBheW1lbnRNZXRob2QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheXBhbCBQYXltZW50XHJcblx0bGlzdFBheXBhbFBheW1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5cGFsX3BheW1lbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXlwYWxQYXltZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5cGFsUGF5bWVudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheXBhbFBheW1lbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXlwYWxQYXltZW50KHBheXBhbF9wYXltZW50KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheXBhbF9wYXltZW50cycsICdwb3N0Jykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGF5cGFsUGF5bWVudChpZCwgcGF5cGFsX3BheW1lbnQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGF5cGFsX3BheW1lbnQpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBheXBhbFBheW1lbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByaWNlIExpc3RcclxuXHRsaXN0UHJpY2VMaXN0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlX2xpc3RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQcmljZUxpc3RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQcmljZUxpc3RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQcmljZUxpc3QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVByaWNlTGlzdChwcmljZV9saXN0KSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlX2xpc3RzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlX2xpc3QpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByaWNlTGlzdChpZCwgcHJpY2VfbGlzdCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHByaWNlX2xpc3QpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlTGlzdChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZVxyXG5cdGxpc3RQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQcmljZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVByaWNlKHByaWNlKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycsICdwb3N0Jykuc2V0Qm9keShwcmljZSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUHJpY2UoaWQsIHByaWNlKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHByaWNlKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQcmljZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcG1lbnRcclxuXHRsaXN0U2hpcG1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcG1lbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwbWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBtZW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcG1lbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwbWVudChzaGlwbWVudCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwbWVudHMnLCAncG9zdCcpLnNldEJvZHkoc2hpcG1lbnQpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBtZW50KGlkLCBzaGlwbWVudCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwbWVudCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcG1lbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIENhdGVnb3J5XHJcblx0bGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nQ2F0ZWdvcmllcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdDYXRlZ29yaWVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ0NhdGVnb3J5KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nQ2F0ZWdvcnkoc2hpcHBpbmdfY2F0ZWdvcnkpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ19jYXRlZ29yeSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdDYXRlZ29yeShpZCwgc2hpcHBpbmdfY2F0ZWdvcnkpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX2NhdGVnb3J5KSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ0NhdGVnb3J5KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgTWV0aG9kXHJcblx0bGlzdFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ01ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ01ldGhvZChzaGlwcGluZ19tZXRob2QpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfbWV0aG9kcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nTWV0aG9kKGlkLCBzaGlwcGluZ19tZXRob2QpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdNZXRob2QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBab25lXHJcblx0bGlzdFNoaXBwaW5nWm9uZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ196b25lcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdab25lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdab25lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdab25lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ1pvbmUoc2hpcHBpbmdfem9uZSkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ196b25lcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ196b25lKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ1pvbmUoaWQsIHNoaXBwaW5nX3pvbmUpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ196b25lKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ1pvbmUoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2t1IE9wdGlvblxyXG5cdGxpc3RTa3VPcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1X29wdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNrdU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNrdU9wdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNrdU9wdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2t1T3B0aW9uKHNrdV9vcHRpb24pIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1X29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoc2t1X29wdGlvbikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1T3B0aW9uKGlkLCBza3Vfb3B0aW9uKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1X29wdGlvbikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1T3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdVxyXG5cdGxpc3RTa3VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdShza3UpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycsICdwb3N0Jykuc2V0Qm9keShza3UpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNrdShpZCwgc2t1KSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShza3UpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNrdShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIEl0ZW1cclxuXHRsaXN0U3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0l0ZW1zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0l0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrSXRlbShzdG9ja19pdGVtKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2l0ZW0pKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrSXRlbShpZCwgc3RvY2tfaXRlbSkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2l0ZW0pKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBMZXZlbFxyXG5cdGxpc3RTdG9ja0xldmVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xldmVscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tMZXZlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrTGV2ZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0xldmVsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tMZXZlbChzdG9ja19sZXZlbCkge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sZXZlbHMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfbGV2ZWwpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrTGV2ZWwoaWQsIHN0b2NrX2xldmVsKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2xldmVsKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xldmVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBMb2NhdGlvblxyXG5cdGxpc3RTdG9ja0xvY2F0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrTG9jYXRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0xvY2F0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tMb2NhdGlvbihzdG9ja19sb2NhdGlvbikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sb2NhdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfbG9jYXRpb24pKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrTG9jYXRpb24oaWQsIHN0b2NrX2xvY2F0aW9uKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2xvY2F0aW9uKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xvY2F0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBXZWJob29rXHJcblx0bGlzdFdlYmhvb2tzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2ViaG9va3MnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdlYmhvb2tzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RXZWJob29rcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlV2ViaG9vayhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2ViaG9vayh3ZWJob29rKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dlYmhvb2tzJywgJ3Bvc3QnKS5zZXRCb2R5KHdlYmhvb2spKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdlYmhvb2soaWQsIHdlYmhvb2spIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keSh3ZWJob29rKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVXZWJob29rKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFdpcmUgVHJhbnNmZXJcclxuXHRsaXN0V2lyZVRyYW5zZmVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dpcmVfdHJhbnNmZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxXaXJlVHJhbnNmZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RXaXJlVHJhbnNmZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVXaXJlVHJhbnNmZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVdpcmVUcmFuc2Zlcih3aXJlX3RyYW5zZmVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dpcmVfdHJhbnNmZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KHdpcmVfdHJhbnNmZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpcmVUcmFuc2ZlcihpZCwgd2lyZV90cmFuc2Zlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdpcmVfdHJhbnNmZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdpcmVUcmFuc2ZlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxudmFyIGFwaSA9IG5ldyBDTEFwaSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuY2xhcGkgPSBhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgdXRpbHMubG9nKCdhcGkgY2xpZW50IGluaXRpYWxpemVkIHdpdGggY29uZmlnOicpO1xyXG4gICAgdXRpbHMubG9nKGNmZyk7XHJcbiAgICBhcGkuY2xpZW50ID0gIGNsaWVudC5uZXdJbnN0YW5jZShjZmcpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgdXRpbHMubG9nKGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGNhbGxpbmcgJHthcGlSZXF1ZXN0LnBhdGh9IC4uLmApO1xyXG5cclxuICAgIGlmIChhcGkuY2xpZW50ID09IHVuZGVmaW5lZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKHVuZGVmaW5lZCwgJ2FwaSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgYm9keSA9IGpzb25hcGkuc2VyaWFsaXplKGFwaVJlcXVlc3QuYm9keSk7XHJcbiAgICAgICAgYXBpUmVxdWVzdC5zZXRCb2R5KGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBhcGkuY2xpZW50LmNhbGwoYXBpUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oYXBpUmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UoYXBpUmVzcG9uc2UsIGFwaVJlcXVlc3QucmVzcG9uc2VfdHlwZSk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yLnJlc3BvbnNlKSByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaV9lcnJvciA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcihhcGlfZXJyb3Iuc3RhdHVzLCBhcGlfZXJyb3IudGl0bGUsIGFwaV9lcnJvci5kZXRhaWwsIGFwaV9lcnJvci5jb2RlKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCByZXNwb25zZV90eXBlKSB7XHJcblx0aWYgKHJlc3BvbnNlX3R5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChyZXNwb25zZV90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHR0aHJvdyAnRGVzZXJpYWxpemF0aW9uIHRvIG1vZGVsIG5vdCBzdXBwb3J0ZWQnO1xyXG5cdFx0XHRjYXNlICdub3JtYWxpemVkJzpcclxuXHRcdFx0XHRyZXR1cm4ganNvbmFwaS5ub3JtYWxpemUoYXBpUmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdGNhc2UgJ2pzb25hcGknOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZS5kYXRhO1xyXG5cdFx0XHRjYXNlICdyYXcnOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBcIlVuc3VwcG9ydGVkIHJlc3BvbnNlX3R5cGU6ICdcIiArIGFwaVJlcXVlc3QucmVzcG9uc2VfdHlwZSArIFwiJ1wiO1xyXG5cdFx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGF0YShyZXMpIHtcclxuXHRpZiAocmVzLmlzQXBpUmVzb3VyY2UgJiYgKHJlcy5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKSByZXR1cm4gcmVzO1xyXG5cdGVsc2VcclxuXHRpZiAocmVzLmRhdGFzZXQpIHJldHVybiByZXMuZGF0YXNldC5kYXRhO1xyXG5cdGVsc2VcclxuXHRpZiAocmVzLmRhdGEpIHJldHVybiAocmVzLmRhdGEuZGF0YSk/IHJlcy5kYXRhLmRhdGEgOiByZXMuZGF0YTtcclxuXHRlbHNlIHJldHVybiByZXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdFcnJvcihzdGF0dXMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlLCBjb2RlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yIDogdHJ1ZSxcclxuICAgICAgICBzdGF0dXMgOiBzdGF0dXMsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBtZXNzYWdlIDogbWVzc2FnZSxcclxuICAgICAgICBjb2RlIDogY29kZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWxsKGxpc3RGdW5jdGlvbiwgZmlsdGVyID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgIGlmICgobGlzdEZ1bmN0aW9uID09IHVuZGVmaW5lZCkgfHwgIWxpc3RGdW5jdGlvbi5uYW1lLnN0YXJ0c1dpdGgoJ2xpc3QnKSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiVW5kZWZpbmVkICdsaXN0JyBBUEkgZnVuY3Rpb25cIik7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFBhZ2UoZmlsdGVyLCBzaXplID0gZmlsdGVyLnBhZ2Vfc2l6ZSB8fCAxMCwgbnVtYmVyID0gMSkge1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc1F1ZXJ5RmlsdGVyICYmIChmaWx0ZXIuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSkgZmlsdGVyLnBhZ2UobnVtYmVyLCBzaXplKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW3NpemVdJ10gPSBzaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2VbbnVtYmVyXSddID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKGZpbHRlcik7XHJcblx0XHJcblx0Ly8gU2F2ZSBvcmlnaW5hbCBvcHRpb24gYW5kIGZvcnhlIHJlc3BvbnNlX3R5cGUgdG8gJ3JhdydcclxuXHRsZXQgcmVzcG9uc2VfdHlwZSA9IG9wdGlvbnMucmVzcG9uc2VfdHlwZTtcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSAncmF3JztcclxuXHJcbiAgICBsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgbWF4X3BhZ2UgPSBmaXJzdFBhZ2UuZGF0YS5tZXRhLnBhZ2VfY291bnQ7XHJcblx0Y29uc3QgcGFnZV9zaXplID0gZmlyc3RQYWdlLmRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHJcblx0bGV0IHBhZ2VzID0gbmV3IEFycmF5KG1heF9wYWdlKTtcclxuICAgIHBhZ2VzWzBdID0gcmVzcG9uc2UoZmlyc3RQYWdlLCByZXNwb25zZV90eXBlKTtcclxuXHJcblx0Ly8gU3RhbmRhcmQgbGlzdEZ1bmN0aW9uIHJlc3BvbnNlXHJcblx0aWYgKG1heF9wYWdlID09IDEpIHJldHVybiBwYWdlc1swXTsgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICBmb3IgKHBuID0gMTsgcG4gPCBtYXhfcGFnZTsgcG4rKykge1xyXG4gICAgICAgIHNldFBhZ2UoZmlsdGVyLCBwYWdlX3NpemUsIHBuKzEpO1xyXG4gICAgICAgIHBhZ2VzW3BuXSA9IGxpc3RGdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0Ly8gU2V0IG9yaWdpbmFsIG9wdGlvblxyXG5cdG9wdGlvbnMucmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGU7XHJcblxyXG5cdGxldCBvdXQgPSBbXTtcclxuXHJcbiAgICAoYXdhaXQgUHJvbWlzZS5hbGwocGFnZXMpKS5mb3JFYWNoKHAgPT4geyBvdXQgPSBvdXQuY29uY2F0KGRhdGEocmVzcG9uc2UocCwgcmVzcG9uc2VfdHlwZSkpKSB9KTtcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG5cclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuXHJcblxyXG5jb25zdCBBVVRIX1RPS0VOUyA9IHt9O1xyXG5cclxuXHJcbmNsYXNzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KSB7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBjbGllbnRTZWNyZXQodmFsdWUpIHsgdGhpcy5jbGllbnRfc2VjcmV0ID0gdmFsdWU7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDbGllbnRDcmVkZW50aWFscyBleHRlbmRzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50X2lkLCBzY29wZSwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ2NsaWVudF9jcmVkZW50aWFscyc7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgfVxyXG4gICAgc2V0U2NvcGUodmFsdWUpIHsgdGhpcy5zY29wZSA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgbWFya2V0U2NvcGUodmFsdWUpIHsgdGhpcy5zY29wZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpPyAnbWFya2V0OicrdmFsdWUgOiB2YWx1ZTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb25Db2RlIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuc2NvcGUsIGNmZy5jbGllbnRfc2VjcmV0KVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNmZy5jb2RlO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gY2ZnLnJlZGlyZWN0X3VyaTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBhc3N3b3JkIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuc2NvcGUsIGNmZy5jbGllbnRfc2VjcmV0KVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGNmZy51c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gY2ZnLnBhc3N3b3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUmVmcmVza1Rva2VuIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAncmVmcmVzaF90b2tlbic7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQXBpVG9rZW4ge1xyXG4gICAgY29uc3RydWN0b3IoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gJ2JlYXJlcic7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl90eXBlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3duZXJfaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIC8vIENsaWVudENyZWRlbnRpYWxzIDogKGNsaWVudF9pZCkgPT4geyByZXR1cm4gbmV3IENsaWVudENyZWRlbnRpYWxzKGNsaWVudF9pZCkgfSxcclxuICAgIENsaWVudENyZWRlbnRpYWxzLFxyXG4gICAgQXV0aG9yaXphdGlvbkNvZGUsXHJcbiAgICBQYXNzd29yZCxcclxuICAgIFJlZnJlc2tUb2tlblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aGVudGljYXRlID0gKGF1dGgpID0+IHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5wb3N0KCcvb2F1dGgvdG9rZW4nLCB7XHJcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IGF1dGguZ3JhbnRfdHlwZSxcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBhdXRoLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgc2NvcGU6IGF1dGguc2NvcGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGF1dGguY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZTogYXV0aC5jb2RlLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IGF1dGgucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogYXV0aC51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IGF1dGgucmVmcmVzaF90b2tlblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IEFwaVRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0b2tlbi5hY2Nlc3NfdG9rZW4gPSByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4ucmVmcmVzaF90b2tlbiA9IHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4uc2NvcGUgPSByZXNwb25zZS5kYXRhLnNjb3BlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl90eXBlID0gcmVzcG9uc2UuZGF0YS5vd25lcl90eXBlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl9pZCA9IHJlc3BvbnNlLmRhdGEub3duZXJfaWQ7XHJcbiAgICAgICAgICAgIHRva2VuLmNyZWF0ZWRfYXQgPSByZXNwb25zZS5kYXRhLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgIHRva2VuLmV4cGlyZXNfaW4gPSByZXNwb25zZS5kYXRhLmV4cGlyZXNfaW47XHJcblxyXG4gICAgICAgICAgICBjYWNoZVRva2VuKGF1dGguY2xpZW50X2lkLCB0b2tlbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcblxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYWNoZVRva2VuKGNsaWVudF9pZCwgdG9rZW4pIHtcclxuICAgIEFVVEhfVE9LRU5TW2NsaWVudF9pZF0gPSB0b2tlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9rZW4oY2xpZW50X2lkKSB7XHJcbiAgICByZXR1cm4gQVVUSF9UT0tFTlNbY2xpZW50X2lkXTtcclxufVxyXG4iLCJjb25zdCBhcGkgPSByZXF1aXJlKCcuL2FwaScpXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuXHJcbi8vIEV4cG9zZSBhbGwgYXBpIGZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaS5jbGFwaTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBpZiAoY2ZnICE9IHVuZGVmaW5lZCkgY2ZnLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgIGFwaS5pbml0aWFsaXplKHV0aWxzLm1lcmdlTWFwcyhjb25maWcuY2xheWVyLCBjZmcpKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5sYXN0QWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLmNsYXBpLmNsaWVudC5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zZXR0aW5ncyA9IGNvbmZpZy5zZGs7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5oZXkgPSAoKSA9PiB7IHJldHVybiAnSGVsbG8hJyB9XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuY29uc3QgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQXBpQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIHZlcmlmaWNhdGlvbi4uLicpXHJcblxyXG4gICAgaWYgKGNvbmZpZyA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGNvbmZpZyc7XHJcbiAgICBpZiAoY29uZmlnLmJhc2VfdXJsID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYmFzZV91cmwnO1xyXG4gICAgaWYgKGNvbmZpZy5tYXJrZXRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBtYXJrZXRfaWQnO1xyXG4gICAgaWYgKGNvbmZpZy5jbGllbnRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjbGllbnRfaWQnO1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIG9rLicpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3R5cGUgPSBzZGsucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhdGgocGF0aCkgeyB0aGlzLnBhdGggPSBwYXRoOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldFBhcmFtcyhwYXJhbXMpIHsgdGhpcy5wYXJhbXMgPSAocGFyYW1zICYmIHBhcmFtcy5pc1F1ZXJ5RmlsdGVyICYmIChwYXJhbXMuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSk/IHBhcmFtcy5idWlsZCgpIDogcGFyYW1zOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldE1ldGhvZChtZXRob2QpIHsgdGhpcy5tZXRob2QgPSBtZXRob2Q7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0Qm9keShib2R5KSB7IHRoaXMuYm9keSA9IGJvZHk7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0SGVhZGVycyhoZWFkZXJzKSB7IHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIG5ld0F0dGVtcHQoKSB7IHRoaXMuYXR0ZW1wdCsrOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBSZXF1ZXN0IE9wdGlvbnNcclxuICAgICAgICBnZXQgcmF3X3Jlc3BvbnNlKCkgeyByZXR1cm4gKHRoaXMucmVzcG9uc2VUeXBlID09ICdyYXcnKTsgfVxyXG4gICAgICAgIHNldCByYXdfcmVzcG9uc2UocmF3KSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IChyYXcgJiYgKHJhdyA9PT0gdHJ1ZSkpPyAncmF3JyA6ICdub3JtYWxpemVkJzsgfVxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSh0eXBlKSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IHR5cGU/IHR5cGUgOiBzZGsucmVzcG9uc2VfdHlwZTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gT25seSByZWFsbHkgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGJlaW5nIHNldHRlZFxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZShvcHRpb25zLnJlc3BvbnNlX3R5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpQ2xpZW50IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICAgICAgY2hlY2tBcGlDb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgIHNldEF4aW9zQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGUoKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBheGlvc1xyXG4gICAgICAgICAgICAvLyAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNjb3BlOiAnbWFya2V0OicgKyB0aGlzLmNvbmZpZy5tYXJrZXRfaWRcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGF1dGguYXV0aGVudGljYXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHModGhpcy5jb25maWcuY2xpZW50X2lkKS5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYWxsKGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lc3NhZ2UobXNnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFwaVJlcXVlc3QuY29ycmVsYXRpb25faWQ/IGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGAgOiAnJykuY29uY2F0KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcGlSZXF1ZXN0Lm5ld0F0dGVtcHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VfcGF0aCA9ICgodGhpcy5jb25maWcuYmFzZV9wYXRoICE9IHVuZGVmaW5lZCk/IHRoaXMuY29uZmlnLmJhc2VfcGF0aCA6ICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgKHRvIGJlIHJlbW92ZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBiYXNlX3BhdGggKyBhcGlSZXF1ZXN0LnBhdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGFwaVJlcXVlc3QucGFyYW1zO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBhcGlSZXF1ZXN0Lm1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHF1ZXJ5U3RyaW5nXHJcbiAgICAgICAgICAgIGxldCBjYWxsVXJsID0gcGF0aDtcclxuICAgICAgICAgICAgaWYgKChwYXJhbXMgIT0gdW5kZWZpbmVkKSAmJiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW1zW2tleV1cclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgIGNhbGxVcmwgPSBjYWxsVXJsLmNvbmNhdCgnPycpLmNvbmNhdChxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdwYXRoOiAnICsgY2FsbFVybCkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGF4aW9zQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjYWxsVXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZGsudGltZW91dC5yZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWVyZ2UgY3VzdG9tIGFuZCBkZWZhdWx0IGhlYWRlcnNcclxuICAgICAgICAgICAgdXRpbHMuZXh0ZW5kTWFwKGF4aW9zQ29uZmlnLmhlYWRlcnMsIGFwaVJlcXVlc3QuaGVhZGVycyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2R5XHJcbiAgICAgICAgICAgIGlmIChhcGlSZXF1ZXN0LmJvZHkgIT0gdW5kZWZpbmVkKSBheGlvc0NvbmZpZy5kYXRhID0gYXBpUmVxdWVzdC5ib2R5O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF4X2F0dGVtcHRzID0gc2RrLmF1dGhfYXR0ZW1wdHM/IHNkay5hdXRoX2F0dGVtcHRzIDogMTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiBub3QgYXV0aGVudGljYXRlZCBleGVjdXRlIGF1dGhlbnRpY2F0aW9uIHRoZW4gcmUtZXhlY3V0ZSBjYWxsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYWNjZXNzX3Rva2VuIG51bGwsIGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5hdXRoX2F0dGVtcHRzID4gbWF4X2F0dGVtcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZGsudGltZW91dC5yZXRyeSkgdGhyb3cgYFJlYWNoZWQgbWF4aW11bSBudW1iZXIgb2YgYXV0aGVudGljYXRpb24gYXR0ZW1wdHMgKCR7bWF4X2F0dGVtcHRzfSkgYW5kIG5vIHJldHJ5IHRpbWVvdXQgY29uZmlndXJlZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5zbGVlcChzZGsudGltZW91dC5yZXRyeSwgbWVzc2FnZSgnYW5vdGhlciBhdXRoIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4geyByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGUoKS50aGVuKGFjY2Vzc190b2tlbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID0gYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aF9hdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2F1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnZXhlY3V0aW5nIGFwaSBjYWxsIC4uLicpKTtcclxuICAgICAgICAgICAgICAgIGF4aW9zQ29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zQ29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FwaSBjYWxsIHN1Y2Nlc3NmdWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKGVycm9yPyBlcnJvciA6ICdlcnJvciBkZXRlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdFQ09OTkFCT1JURUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgndGltZW91dCBleGNlcHRpb246JyArIGVycm9yLmNvbmZpZy50aW1lb3V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBpIGVycm9uZW91c2x5IHJldHVybiBjb2RlIDQwMSBpbnN0ZWFkIG9mIGNvZGUgNDAzIGZvciBVTkFVVEhPUklaRUQgY2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICYmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1swXS5jb2RlID09ICdJTlZBTElEX1RPS0VOJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdpbnZhbGlkIHRva2VuLCBhY2Nlc3MgZGVuaWVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGNsYXllcjoge1xyXG5cclxuICAgICAgICBkZWZhdWx0IDogdHJ1ZSxcclxuICBcclxuICAgICAgICBjbGllbnRfaWQgOiBudWxsLFxyXG4gICAgICAgIG1hcmtldF9pZCA6IG51bGwsXHJcbiAgICAgICAgYmFzZV91cmwgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfcGF0aCA6IG51bGwsXHJcbiAgICAgICAgY291bnRyeV9jb2RlIDogJ1VTJyxcclxuICAgICAgICBsYW5ndWFnZV9jb2RlIDogJ2VuJyxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNkazoge1xyXG4gICAgICAgIGRlYnVnICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gZGVidWcgbW9kZSBhY3RpdmF0ZWRcclxuICAgICAgICBjb25zb2xlICAgICAgICAgOiBmYWxzZSwgICAgICAgIC8vIGxvZyB0byBjb25zb2xlIGVuYWJsZWRcclxuICAgICAgICB0cmFjZSAgICAgICAgICAgOiBmYWxzZSwgICAgICAgIC8vIHRyYWNlIGNsaWVudCBpbnB1dC9vdXRwdXQgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNvbnNlIGZvcm1hdC4gcG9zc2libGUgdmFsdWVzIGFyZTogbm9ybWFsaXplZCB8IGpzb25hcGkgfCBtb2RlbCB8IHJhd1xyXG4gICAgICAgIHRpbWVvdXQgOiB7IC8vIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgICAgICByZXRyeSA6IDI1MCwgICAgLy8gcmV0cnkgYWZ0ZXIgYXV0aGVudGljYXRpb24gcmVxdWVzdCBpbiBwcm9ncmVzcyBkZXRlY3RlZFxyXG4gICAgICAgICAgICByZXF1ZXN0IDogMjAwMCAgLy8gY2xpZW50IHJlcXVlc3QgdGltZW91dFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiY29uc3Qgbm9ybWFsaXplID0gcmVxdWlyZSgnanNvbi1hcGktbm9ybWFsaXplJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QgbW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJylcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zZXJpYWxpemUgPSAoYm9keSkgPT4ge1xyXG4gICAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSByZXR1cm4gYm9keTtcclxuICAgIC8vIE5vIGRhdGEgPSBQbGFpbiBPYmplY3Qgb3IgQXBpIFJlc291cmNlXHJcbiAgICBlbHNlIHJldHVybiAoYm9keS5kYXRhID09IHVuZGVmaW5lZCk/IG5ldyBKc29uQXBpUmVzb3VyY2UoYm9keSkuc2VyaWFsaXplKCkgOiBib2R5O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZGVzZXJpYWxpemUgPSAoamFwaSkgPT4ge1xyXG4gICAgaWYgKGphcGkgPT0gdW5kZWZpbmVkKSByZXR1cm4gamFwaTtcclxuICAgIGVsc2UgcmV0dXJuIChqYXBpLmRhdGEgPT0gdW5kZWZpbmVkKT8gamFwaSA6IG5ldyBKc29uQXBpUmVzb3VyY2UoamFwaSkuZGVzZXJpYWxpemUoKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5vcm1hbGl6ZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplKGRhdGEpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgSnNvbkFwaVJlc291cmNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXNvdXJjZSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2UuZGF0YSAhPSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGEuYXR0cmlidXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBwb3J0YXJlIGlkIGUgdHlwZSBpbiB0ZXN0YSBhZCBvZ25pIG9iamVjdFxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmllbGQgPSB0aGlzLnJlc291cmNlW2tleV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChbJ2lkJywgJ3R5cGUnXS5pbmNsdWRlcyhrZXkpKSB0aGlzLmRhdGFba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmlzQXBpUmVzb3VyY2UgJiYgZmllbGQuaXNBcGlSZXNvdXJjZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEucmVsYXRpb25zaGlwc1trZXkuc3RhcnRzV2l0aCgnX18nKT8ga2V5LnN1YnN0cignX18nLmxlbmd0aCkgOiBrZXldID0geyBkYXRhOiB7IHR5cGU6IGZpZWxkLnR5cGUsIGlkOiBmaWVsZC5pZCB9IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkgJiYga2V5LnN0YXJ0c1dpdGgoJ19fJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ0FycmF5IFJlc291cmNlIHJlbGF0aW9uc2hpcHMgbm90IHN1cHBvcnRlZDogJyArIHJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGF0YS5hdHRyaWJ1dGVzW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLmRhdGEgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5yZXNvdXJjZS5kYXRhID09IHVuZGVmaW5lZCkgJiYgdGhpcy5yZXNvdXJjZS5pc0FwaVJlc291cmNlICYmICh0aGlzLnJlc291cmNlLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucmVzb3VyY2UuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZShkYXRhLnR5cGUsIGRhdGEuaWQsIGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnJlbGF0aW9uc2hpcHMpLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVsX2RhdGEgPSBkYXRhLnJlbGF0aW9uc2hpcHNbcmVsXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAocmVsX2RhdGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWxfZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ0FycmF5IFJlc291cmNlIHJlbGF0aW9uc2hpcHMgbm90IHN1cHBvcnRlZDogJyArIHJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVsUmVzID0gbW9kZWwuaGVscGVyLm5ld1Jlc291cmNlKHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0UmVzb3VyY2UocmVsLCByZWxSZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmMgPSBqc29uYXBpSW5jbHVkZWQodGhpcy5yZXNvdXJjZSwgcmVsX2RhdGEudHlwZSwgcmVsX2RhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbFJlcy5zZXRGaWVsZHMoaW5jLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGpzb25hcGlJbmNsdWRlZChkYXRhLCB0eXBlLCBpZCkge1xyXG4gICAgaWYgKChkYXRhID09IHVuZGVmaW5lZCkgfHwgKGRhdGEuaW5jbHVkZWQgPT0gdW5kZWZpbmVkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGxldCBpbmNSZXMgPSB1bmRlZmluZWQ7XHJcbiAgICBkYXRhLmluY2x1ZGVkLmZvckVhY2goaW5jID0+IHtcclxuICAgICAgICBpZiAoKGluYy50eXBlID09IHR5cGUpICYmIChpbmMuaWQgPT0gaWQpKSBpbmNSZXMgPSBpbmM7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGluY1JlcztcclxufVxyXG4iLCJjb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbXNnIDogKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc2RrLmRlYnVnICYmIHNkay5jb25zb2xlKSBjb25zb2xlLmxvZygobWVzc2FnZSA9PSB1bmRlZmluZWQpPyAnJyA6IG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmFibGUgOiAoKSA9PiB7XHJcbiAgICAgICAgc2RrLmNvbnNvbGUgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNhYmxlIDogKCkgPT4ge1xyXG4gICAgICAgIHNkay5jb25zb2xlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHByb2JlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2cgZW5hYmxlZDogJyArIHNkay5jb25zb2xlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWYgbG9nIGlzIGVuYWJsZWQgYnV0IGlzIG5vdCB2aXNpYmxlIG1heWJlIHlvdSBhcmUgbm90IGluIGRlYnVnIG1vZGUnKVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXQgZW5hYmxlZCgpIHsgcmV0dXJuIHNkay5jb25zb2xlID09PSB0cnVlOyB9XHJcblxyXG59IiwiLy8gRmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhdCAxNS8wMi8yMDE5IDEyOjA2OjQzIGJ5IGNvbW1lcmNlbGF5ZXItanMtc2RrLWNvZGVnZW5cclxuXHJcblxyXG4vLyBCYXNpYyBBYnN0cmFjdCBSZXNvdXJjZVxyXG5jbGFzcyBSZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdHlwZSwpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpc0FwaVJlc291cmNlKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgc2V0UmVzb3VyY2UoZmllbGQsIHJlcykgeyBpZiAoKHJlcyAhPSB1bmRlZmluZWQpICYmIHJlcy5pc0FwaVJlc291cmNlICYmIHJlcy5pc0FwaVJlc291cmNlKCkpIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXSA9IHJlczsgfVxyXG5cdGdldFJlc291cmNlKGZpZWxkKSB7IHJldHVybiB0aGlzWydfXycuY29uY2F0KGZpZWxkKV07IH1cclxuXHRzZXRGaWVsZHMoZmllbGRzID0ge30pIHsgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZpZWxkID0+IHsgdGhpc1tmaWVsZF0gPSBmaWVsZHNbZmllbGRdIH0pOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdhZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBBZGRyZXNzLlRZUEUpO1xyXG5cdFx0dGhpcy5idXNpbmVzcyA9IGZpZWxkcy5idXNpbmVzcztcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5jb21wYW55ID0gZmllbGRzLmNvbXBhbnk7XHJcblx0XHR0aGlzLmxpbmVfMSA9IGZpZWxkcy5saW5lXzE7XHJcblx0XHR0aGlzLmxpbmVfMiA9IGZpZWxkcy5saW5lXzI7XHJcblx0XHR0aGlzLmNpdHkgPSBmaWVsZHMuY2l0eTtcclxuXHRcdHRoaXMuemlwX2NvZGUgPSBmaWVsZHMuemlwX2NvZGU7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGUgPSBmaWVsZHMuc3RhdGVfY29kZTtcclxuXHRcdHRoaXMuY291bnRyeV9jb2RlID0gZmllbGRzLmNvdW50cnlfY29kZTtcclxuXHRcdHRoaXMucGhvbmUgPSBmaWVsZHMucGhvbmU7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5ub3RlcyA9IGZpZWxkcy5ub3RlcztcclxuXHRcdHRoaXMubGF0ID0gZmllbGRzLmxhdDtcclxuXHRcdHRoaXMubG5nID0gZmllbGRzLmxuZztcclxuXHRcdHRoaXMuYmlsbGluZ19pbmZvID0gZmllbGRzLmJpbGxpbmdfaW5mbztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGdlb2NvZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdnZW9jb2RlcicsIHZhbHVlKSB9XHJcblx0Z2V0IGdlb2NvZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2dlb2NvZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWRpdCBDYXJkIHJlc291cmNlXHJcbmNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3JlZGl0X2NhcmRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3JlZGl0Q2FyZC5UWVBFKTtcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5udW1iZXIgPSBmaWVsZHMubnVtYmVyO1xyXG5cdFx0dGhpcy5tb250aCA9IGZpZWxkcy5tb250aDtcclxuXHRcdHRoaXMueWVhciA9IGZpZWxkcy55ZWFyO1xyXG5cdFx0dGhpcy52ZXJpZmljYXRpb25fdmFsdWUgPSBmaWVsZHMudmVyaWZpY2F0aW9uX3ZhbHVlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lckFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJBZGRyZXNzLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUGFzc3dvcmQgUmVzZXQgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJQYXNzd29yZFJlc2V0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyUGFzc3dvcmRSZXNldC5UWVBFKTtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcblx0XHR0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG5cdFx0dGhpcy5fcmVzZXRfcGFzc3dvcmRfdG9rZW4gPSBmaWVsZHMuX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBQYXltZW50IFNvdXJjZSByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBheW1lbnRTb3VyY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXltZW50U291cmNlLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IHBheW1lbnRfc291cmNlKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclN1YnNjcmlwdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9zdWJzY3JpcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJTdWJzY3JpcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lci5UWVBFKTtcclxuXHRcdHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcblx0XHR0aGlzLnBhc3N3b3JkID0gZmllbGRzLnBhc3N3b3JkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBEZWxpdmVyeSBMZWFkIFRpbWUgcmVzb3VyY2VcclxuY2xhc3MgRGVsaXZlcnlMZWFkVGltZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdkZWxpdmVyeV9sZWFkX3RpbWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgRGVsaXZlcnlMZWFkVGltZS5UWVBFKTtcclxuXHRcdHRoaXMubWluX2hvdXJzID0gZmllbGRzLm1pbl9ob3VycztcclxuXHRcdHRoaXMubWF4X2hvdXJzID0gZmllbGRzLm1heF9ob3VycztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW52ZW50b3J5IE1vZGVsIHJlc291cmNlXHJcbmNsYXNzIEludmVudG9yeU1vZGVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ludmVudG9yeV9tb2RlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbnZlbnRvcnlNb2RlbC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtT3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTGluZUl0ZW1PcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBmaWVsZHMub3B0aW9ucztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGxpbmVfaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbGluZV9pdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgbGluZV9pdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScpIH1cclxuXHRzZXQgc2t1X29wdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1X29wdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdV9vcHRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1X29wdGlvbicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLl91cGRhdGVfcXVhbnRpdHkgPSBmaWVsZHMuX3VwZGF0ZV9xdWFudGl0eTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcblx0c2V0IGl0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2l0ZW0nLCB2YWx1ZSkgfVxyXG5cdGdldCBpdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2l0ZW0nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWFya2V0IHJlc291cmNlXHJcbmNsYXNzIE1hcmtldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtYXJrZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWFya2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtZXJjaGFudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWVyY2hhbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtZXJjaGFudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtZXJjaGFudCcpIH1cclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuXHRzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG5cdGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1lcmNoYW50IHJlc291cmNlXHJcbmNsYXNzIE1lcmNoYW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ21lcmNoYW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1lcmNoYW50LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE9yZGVyIHJlc291cmNlXHJcbmNsYXNzIE9yZGVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ29yZGVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE9yZGVyLlRZUEUpO1xyXG5cdFx0dGhpcy5ndWVzdCA9IGZpZWxkcy5ndWVzdDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcblx0XHR0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG5cdFx0dGhpcy5sYW5ndWFnZV9jb2RlID0gZmllbGRzLmxhbmd1YWdlX2NvZGU7XHJcblx0XHR0aGlzLnNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrID0gZmllbGRzLnNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrO1xyXG5cdFx0dGhpcy5jb3Vwb25fY29kZSA9IGZpZWxkcy5jb3Vwb25fY29kZTtcclxuXHRcdHRoaXMuY2FydF91cmwgPSBmaWVsZHMuY2FydF91cmw7XHJcblx0XHR0aGlzLnJldHVybl91cmwgPSBmaWVsZHMucmV0dXJuX3VybDtcclxuXHRcdHRoaXMudGVybXNfdXJsID0gZmllbGRzLnRlcm1zX3VybDtcclxuXHRcdHRoaXMucHJpdmFjeV91cmwgPSBmaWVsZHMucHJpdmFjeV91cmw7XHJcblx0XHR0aGlzLl9wbGFjZSA9IGZpZWxkcy5fcGxhY2U7XHJcblx0XHR0aGlzLl9jYW5jZWwgPSBmaWVsZHMuX2NhbmNlbDtcclxuXHRcdHRoaXMuX2FwcHJvdmUgPSBmaWVsZHMuX2FwcHJvdmU7XHJcblx0XHR0aGlzLl91cGRhdGVfdGF4ZXMgPSBmaWVsZHMuX3VwZGF0ZV90YXhlcztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZDtcclxuXHRcdHRoaXMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkID0gZmllbGRzLl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZDtcclxuXHRcdHRoaXMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZztcclxuXHRcdHRoaXMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0ID0gZmllbGRzLl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldDtcclxuXHRcdHRoaXMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2s7XHJcblx0XHR0aGlzLl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3JlZnJlc2ggPSBmaWVsZHMuX3JlZnJlc2g7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBzaGlwcGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJykgfVxyXG5cdHNldCBiaWxsaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGJpbGxpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IHBheW1lbnRfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJjZWwgcmVzb3VyY2VcclxuY2xhc3MgUGFyY2VsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BhcmNlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXJjZWwuVFlQRSk7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG5cdFx0dGhpcy5lZWxfcGZjID0gZmllbGRzLmVlbF9wZmM7XHJcblx0XHR0aGlzLmNvbnRlbnRzX3R5cGUgPSBmaWVsZHMuY29udGVudHNfdHlwZTtcclxuXHRcdHRoaXMuY29udGVudHNfZXhwbGFuYXRpb24gPSBmaWVsZHMuY29udGVudHNfZXhwbGFuYXRpb247XHJcblx0XHR0aGlzLmN1c3RvbXNfY2VydGlmeSA9IGZpZWxkcy5jdXN0b21zX2NlcnRpZnk7XHJcblx0XHR0aGlzLmN1c3RvbXNfc2lnbmVyID0gZmllbGRzLmN1c3RvbXNfc2lnbmVyO1xyXG5cdFx0dGhpcy5ub25fZGVsaXZlcnlfb3B0aW9uID0gZmllbGRzLm5vbl9kZWxpdmVyeV9vcHRpb247XHJcblx0XHR0aGlzLnJlc3RyaWN0aW9uX3R5cGUgPSBmaWVsZHMucmVzdHJpY3Rpb25fdHlwZTtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fY29tbWVudHMgPSBmaWVsZHMucmVzdHJpY3Rpb25fY29tbWVudHM7XHJcblx0XHR0aGlzLmN1c3RvbXNfaW5mb19yZXF1aXJlZCA9IGZpZWxkcy5jdXN0b21zX2luZm9fcmVxdWlyZWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwbWVudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcG1lbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwbWVudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwbWVudCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXltZW50IE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBQYXltZW50TWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BheW1lbnRfbWV0aG9kcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBheW1lbnRNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLnBheW1lbnRfc291cmNlX3R5cGUgPSBmaWVsZHMucGF5bWVudF9zb3VyY2VfdHlwZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgcGF5bWVudF9nYXRld2F5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X2dhdGV3YXkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheXBhbCBQYXltZW50IHJlc291cmNlXHJcbmNsYXNzIFBheXBhbFBheW1lbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5cGFsX3BheW1lbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5cGFsUGF5bWVudC5UWVBFKTtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy5jYW5jZWxfdXJsID0gZmllbGRzLmNhbmNlbF91cmw7XHJcblx0XHR0aGlzLm5vdGVfdG9fcGF5ZXIgPSBmaWVsZHMubm90ZV90b19wYXllcjtcclxuXHRcdHRoaXMucGF5cGFsX3BheWVyX2lkID0gZmllbGRzLnBheXBhbF9wYXllcl9pZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFByaWNlIExpc3QgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2VMaXN0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3ByaWNlX2xpc3RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2VMaXN0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmN1cnJlbmN5X2NvZGUgPSBmaWVsZHMuY3VycmVuY3lfY29kZTtcclxuXHRcdHRoaXMudGF4X2luY2x1ZGVkID0gZmllbGRzLnRheF9pbmNsdWRlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2UuVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5hbW91bnRfY2VudHMgPSBmaWVsZHMuYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cyA9IGZpZWxkcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwbWVudCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwbWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwbWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwbWVudC5UWVBFKTtcclxuXHRcdHRoaXMuX29uX2hvbGQgPSBmaWVsZHMuX29uX2hvbGQ7XHJcblx0XHR0aGlzLl9waWNraW5nID0gZmllbGRzLl9waWNraW5nO1xyXG5cdFx0dGhpcy5fcGFja2luZyA9IGZpZWxkcy5fcGFja2luZztcclxuXHRcdHRoaXMuX3JlYWR5X3RvX3NoaXAgPSBmaWVsZHMuX3JlYWR5X3RvX3NoaXA7XHJcblx0XHR0aGlzLl9zaGlwID0gZmllbGRzLl9zaGlwO1xyXG5cdFx0dGhpcy5fZ2V0X3JhdGVzID0gZmllbGRzLl9nZXRfcmF0ZXM7XHJcblx0XHR0aGlzLnNlbGVjdGVkX3JhdGVfaWQgPSBmaWVsZHMuc2VsZWN0ZWRfcmF0ZV9pZDtcclxuXHRcdHRoaXMuX3B1cmNoYXNlID0gZmllbGRzLl9wdXJjaGFzZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBDYXRlZ29yeSByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ0NhdGVnb3J5IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX2NhdGVnb3JpZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ0NhdGVnb3J5LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ01ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuXHRcdHRoaXMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBzaGlwcGluZ196b25lKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ196b25lJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfem9uZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ196b25lJykgfVxyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBab25lIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nWm9uZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ196b25lcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nWm9uZS5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMuY291bnRyeV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMuc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X3N0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3N0YXRlX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLnppcF9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfemlwX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3ppcF9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIFNrdU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3Vfb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNrdU9wdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5kZWxheV9ob3VycyA9IGZpZWxkcy5kZWxheV9ob3VycztcclxuXHRcdHRoaXMuc2t1X2NvZGVfcmVnZXggPSBmaWVsZHMuc2t1X2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2t1IHJlc291cmNlXHJcbmNsYXNzIFNrdSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1LlRZUEUpO1xyXG5cdFx0dGhpcy5jb2RlID0gZmllbGRzLmNvZGU7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBmaWVsZHMuZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcblx0XHR0aGlzLnRhZ19uYW1lcyA9IGZpZWxkcy50YWdfbmFtZXM7XHJcblx0XHR0aGlzLnBpZWNlc19wZXJfcGFjayA9IGZpZWxkcy5waWVjZXNfcGVyX3BhY2s7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0l0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0l0ZW0uVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgTGV2ZWwgcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tMZXZlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19sZXZlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0xldmVsLlRZUEUpO1xyXG5cdFx0dGhpcy5wcmlvcml0eSA9IGZpZWxkcy5wcmlvcml0eTtcclxuXHRcdHRoaXMub25faG9sZCA9IGZpZWxkcy5vbl9ob2xkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMb2NhdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xvY2F0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xvY2F0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTG9jYXRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMubGFiZWxfZm9ybWF0ID0gZmllbGRzLmxhYmVsX2Zvcm1hdDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gV2ViaG9vayByZXNvdXJjZVxyXG5jbGFzcyBXZWJob29rIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dlYmhvb2tzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2ViaG9vay5UWVBFKTtcclxuXHRcdHRoaXMudG9waWMgPSBmaWVsZHMudG9waWM7XHJcblx0XHR0aGlzLmNhbGxiYWNrX3VybCA9IGZpZWxkcy5jYWxsYmFja191cmw7XHJcblx0XHR0aGlzLmluY2x1ZGVfcmVzb3VyY2VzID0gZmllbGRzLmluY2x1ZGVfcmVzb3VyY2VzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBXaXJlIFRyYW5zZmVyIHJlc291cmNlXHJcbmNsYXNzIFdpcmVUcmFuc2ZlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3aXJlX3RyYW5zZmVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdpcmVUcmFuc2Zlci5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEFkZHJlc3MsXHJcblx0Q3JlZGl0Q2FyZCxcclxuXHRDdXN0b21lckFkZHJlc3MsXHJcblx0Q3VzdG9tZXJQYXNzd29yZFJlc2V0LFxyXG5cdEN1c3RvbWVyUGF5bWVudFNvdXJjZSxcclxuXHRDdXN0b21lclN1YnNjcmlwdGlvbixcclxuXHRDdXN0b21lcixcclxuXHREZWxpdmVyeUxlYWRUaW1lLFxyXG5cdEludmVudG9yeU1vZGVsLFxyXG5cdExpbmVJdGVtT3B0aW9uLFxyXG5cdExpbmVJdGVtLFxyXG5cdE1hcmtldCxcclxuXHRNZXJjaGFudCxcclxuXHRPcmRlcixcclxuXHRQYXJjZWwsXHJcblx0UGF5bWVudE1ldGhvZCxcclxuXHRQYXlwYWxQYXltZW50LFxyXG5cdFByaWNlTGlzdCxcclxuXHRQcmljZSxcclxuXHRTaGlwbWVudCxcclxuXHRTaGlwcGluZ0NhdGVnb3J5LFxyXG5cdFNoaXBwaW5nTWV0aG9kLFxyXG5cdFNoaXBwaW5nWm9uZSxcclxuXHRTa3VPcHRpb24sXHJcblx0U2t1LFxyXG5cdFN0b2NrSXRlbSxcclxuXHRTdG9ja0xldmVsLFxyXG5cdFN0b2NrTG9jYXRpb24sXHJcblx0V2ViaG9vayxcclxuXHRXaXJlVHJhbnNmZXIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gKioqKioqKioqKiBIZWxwZXIgKioqKioqKioqKiAvL1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaGVscGVyID0ge307XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5oZWxwZXIubmV3UmVzb3VyY2UgPSAodHlwZSwgaWQsIGZpZWxkcykgPT4ge1xyXG5cdGxldCBpbnN0YW5jZSA9IHVuZGVmaW5lZDtcclxuXHRsZXQgbW9kZWwgPSBtb2R1bGUuZXhwb3J0cztcclxuXHRPYmplY3Qua2V5cyhtb2RlbCkuZm9yRWFjaCgoY2wpID0+IHtcclxuXHRcdGlmICghY2wuc3RhcnRzV2l0aCgnaGVscGVyJykpIHtcclxuXHRcdFx0bGV0IGNsX3R5cGUgPSBtb2RlbFtjbF0uVFlQRTtcclxuXHRcdFx0aWYgKGNsX3R5cGUgJiYgKGNsX3R5cGUgPT0gdHlwZSkpIHtcclxuXHRcdFx0XHRpbnN0YW5jZSA9IG5ldyBtb2RlbFtjbF0oaWQsIGZpZWxkcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmhlbHBlci5pc0FwaVJlc291cmNlID0gKHJlcykgPT4ge1xyXG5cdHJldHVybiAocmVzICYmIHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSk7XHJcbn1cclxuIiwiXHJcbmNsYXNzIFF1ZXJ5RmlsdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3BhcnNlX2ZpZWxkc2V0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmllbGRzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXN0b21fcGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1F1ZXJ5RmlsdGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHNvcnQoZmllbGQsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzLnB1c2goKGRlc2NlbmRpbmc/ICctJyA6ICcnKS5jb25jYXQoZmllbGQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHMocmVzb3VyY2UsIC4uLmZpZWxkcykge1xyXG4gICAgICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkKSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzb3VyY2VdID0gZmllbGRzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluY2x1ZGUoLi4ucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgLy8gaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHJlc291cmNlcy5mb3JFYWNoKHJlcyA9PiB7IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzKSB9KVxyXG4gICAgICAgIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlc291cmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGZpbHRlciAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFtKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGtleSAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2UobnVtYmVyLCBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyKG51bWJlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZShzaXplKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdlU2l6ZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSBzaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IG51bWJlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gcGFnZV9udW1iZXI/IHBhZ2VfbnVtYmVyKysgOiAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKGpvaW4pIHtcclxuXHJcbiAgICAgICAgbGV0IHFzTWFwID0ge307XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmZvckVhY2goZmlsdGVyID0+IHsgcXNNYXBbYGZpbHRlclske2ZpbHRlcn1dYF0gPSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbmNsdWRlZCBSZXNvdXJjZXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHFzTWFwLmluY2x1ZGUgPSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIFNwYXJzZSBGaWVsZHNldHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmZvckVhY2gocmVzID0+IHsgcXNNYXBbYGZpZWxkc1ske3Jlc31dYF0gPSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzXS5qb2luKCcsJykgfSk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc29ydF9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHFzTWFwLnNvcnQgPSB0aGlzLnNvcnRfZmllbGRzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIFBhcmFtc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykuZm9yRWFjaChrZXkgPT4geyBxc01hcFtrZXldID0gdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gfSlcclxuXHJcbiAgICAgICAgLy8gUGFnaW5hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VfbnVtYmVyICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2VbbnVtYmVyXSddID0gdGhpcy5wYWdlX251bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5wYWdlX3NpemUgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtzaXplXSddID0gdGhpcy5wYWdlX3NpemU7XHJcblxyXG4gICAgICAgIHJldHVybiAham9pbj8gcXNNYXAgOiBPYmplY3Qua2V5cyhxc01hcCkubWFwKGtleSA9PiB7IHJldHVybiBrZXkrJz0nK3FzTWFwW2tleV0gfSkuam9pbignJicpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFF1ZXJ5RmlsdGVyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5ld0luc3RhbmNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBRdWVyeUZpbHRlcigpO1xyXG59XHJcbiIsIlxyXG5jb25zdCBsb2cgPSByZXF1aXJlKCcuL2xvZycpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBsb2cgOiAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLmNvbnNvbGUpIGxvZy5tc2coKG1lc3NhZ2UgPT0gdW5kZWZpbmVkKT8gJycgOiBtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZW5kTWFwIDogKG1hcCwgZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKG1hcCA9PSB1bmRlZmluZWQpIG1hcCA9IHt9O1xyXG4gICAgICAgIGlmIChleHQgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhleHQpLmZvckVhY2goa2V5ID0+IHsgbWFwW2tleV0gPSBleHRba2V5XTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2VNYXBzIDogKG1hcDEsIG1hcDIpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5tYXAxLCAuLi5tYXAyIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xvbmVNYXAgOiAobWFwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChtYXAgPT0gdW5kZWZpbmVkKT8gbWFwIDogeyAuLi5tYXAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgc2xlZXAgOiAobXMsIG1zZykgPT4ge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzLmxvZygobXNnPyBgJHttc2d9IC0gYCA6ICcnKS5jb25jYXQoYHdhaXRpbmcgJHttc30gbXNlY3MgLi4uYCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ3VpZCA6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgJy4nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikuc3Vic3RyKDAsIDYpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuanNvbkFwaU5vcm1hbGl6ZSA9IGZhY3RvcnkoKTtcbiAgICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBOb3JtYWxpemVyKGRhdGFzZXQsIHByb3BlcnR5KSB7XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vcm1hbGl6ZXIpKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplckluc3RhbmNlID0gbmV3IE5vcm1hbGl6ZXIoZGF0YXNldCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHkgPyBub3JtYWxpemVySW5zdGFuY2UuZ2V0KHByb3BlcnR5KSA6IG5vcm1hbGl6ZXJJbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YXNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGFzZXQgPSBKU09OLnBhcnNlKGRhdGFzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhc2V0IHx8ICFkYXRhc2V0LmRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBqc29uIGFwaSBub3JtYWxpemVyIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmlzQ29sbGVjdGlvbiA9IGlzQXJyYXkoZGF0YXNldC5kYXRhKTtcblxuICAgICAgICB0aGlzLmhheXN0YWNrID0gYnVpbGRIYXlzdGFjayhkYXRhc2V0LmluY2x1ZGVkLCB0aGlzLmlzQ29sbGVjdGlvbiA/IGRhdGFzZXQuZGF0YSA6IFtkYXRhc2V0LmRhdGFdKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkSGF5c3RhY2soaW5jbHVkZWQsIGFkZGl0aW9uYWxJdGVtcykge1xuXG4gICAgICAgIHZhciBzaWduYXR1cmVzID0gW107XG4gICAgICAgIHZhciBoYXlzdGFjayA9IGluY2x1ZGVkIHx8IFtdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgc2lnbmF0dXJlcy5wdXNoKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWFjaChhZGRpdGlvbmFsSXRlbXMsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZXMuaW5kZXhPZihlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaGF5c3RhY2sucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGtleSkgJiYgY2FsbGJhY2suY2FsbChjb250ZXh0LCBrZXksIGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGl0ZW0sIGtleSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0LCBvYmopIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvdXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgKG91dFtrZXldID0ge30pO1xuICAgICAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciBkYXRhID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eVRyZWUsIGZ1bmN0aW9uKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICBpZiAoIXJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHJlbGF0ZWRFbnRpdHkgPyBuZXcgTm9ybWFsaXplcih7ZGF0YTogcmVsYXRlZEVudGl0eSwgaW5jbHVkZWQ6IGhheXN0YWNrfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRSZWxhdGlvbkRhdGEocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KSB7XG5cbiAgICAgICAgcmV0dXJuIFsnaWQnLCAndHlwZSddLmluZGV4T2YocHJvcGVydHkpID49IDAgPyBlbnRpdHlbcHJvcGVydHldIDogZW50aXR5LmF0dHJpYnV0ZXNbcHJvcGVydHldO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRpb25EYXRhKHJlbGF0aW9uTmFtZSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdLmRhdGE7XG4gICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gcmVsYXRpb25EYXRhICYmIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkocmVsYXRlZEVudGl0eSkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcChyZWxhdGVkRW50aXR5LCBmdW5jdGlvbihzaW5nbGVSZWxhdGVkRW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCBzaW5nbGVSZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFyZWxhdGVkRW50aXR5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUmVsYXRpb24ocHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHJldHVybiBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbChuZXcgTm9ybWFsaXplcih7XG4gICAgICAgICAgICBkYXRhOiByZWxhdGVkRW50aXR5LFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGhheXN0YWNrXG4gICAgICAgIH0pLCBwcm9wZXJ0eVRyZWUpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICB2YXIgc2VhcmNoID0gaXNBcnJheShyZWxhdGlvbkRhdGEpID8gbWFwKHJlbGF0aW9uRGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQ7XG4gICAgICAgIH0pIDogW3JlbGF0aW9uRGF0YS50eXBlICsgJ0AnICsgcmVsYXRpb25EYXRhLmlkXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBzZWFyY2guaW5kZXhPZihpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkKSA+PSAwICYmIHRlbXAucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXAubGVuZ3RoID09PSAxICYmICFpc0FycmF5KHJlbGF0aW9uRGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9OZXN0ZWRPYmplY3QoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIHRlbXAgPSBvYmo7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2NvbGxlY3Rpb25baV1dID0gdGVtcFtjb2xsZWN0aW9uW2ldXSB8fCAoaSsxID09PSBjb2xsZWN0aW9uTGVuZ3RoID8gdW5kZWZpbmVkIDoge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUHJvcGVydHlUcmVlKHByb3BlcnR5TGlzdCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eUxpc3QsIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVBhcnRzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQodGVtcCwgYXJyYXlUb05lc3RlZE9iamVjdChwcm9wZXJ0eVBhcnRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbcHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlhUHJvcGVydHlUcmVlKHByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHRoaXMuZGF0YXNldC5kYXRhLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgdGhpcy5oYXlzdGFjayk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIHRoaXMuZGF0YXNldC5kYXRhLCB0aGlzLmhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBOb3JtYWxpemVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbCh0aGlzLCBidWlsZFByb3BlcnR5VHJlZShpc0FycmF5KHByb3BlcnR5KSA/IHByb3BlcnR5IDogW3Byb3BlcnR5XSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogbWFwKHJlc3VsdCwgZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbVtwcm9wZXJ0eV07IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogcmVzdWx0W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHJldHVybiBOb3JtYWxpemVyO1xuXG59KSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==