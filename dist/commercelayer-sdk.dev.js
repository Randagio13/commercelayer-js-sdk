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

// File automatically generated at 22/02/2019 13:57:47 by commercelayer-js-sdk-codegen
var client = __webpack_require__(/*! ./client */ "./lib/client.js");

var log = __webpack_require__(/*! ./log */ "./lib/log.js");

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
    value: function createAddress(address, filter) {
      return request(client.newRequest('/api/addresses', 'post').setBody(address).setParams(filter));
    }
  }, {
    key: "updateAddress",
    value: function updateAddress(id, address, filter) {
      return request(client.newRequest("/api/addresses/".concat(id), 'patch').setBody(address).setParams(filter));
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
    value: function createCreditCard(credit_card, filter) {
      return request(client.newRequest('/api/credit_cards', 'post').setBody(credit_card).setParams(filter));
    }
  }, {
    key: "updateCreditCard",
    value: function updateCreditCard(id, credit_card, filter) {
      return request(client.newRequest("/api/credit_cards/".concat(id), 'patch').setBody(credit_card).setParams(filter));
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
    value: function createCustomerAddress(customer_address, filter) {
      return request(client.newRequest('/api/customer_addresses', 'post').setBody(customer_address).setParams(filter));
    }
  }, {
    key: "updateCustomerAddress",
    value: function updateCustomerAddress(id, customer_address, filter) {
      return request(client.newRequest("/api/customer_addresses/".concat(id), 'patch').setBody(customer_address).setParams(filter));
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
    value: function createCustomerPasswordReset(customer_password_reset, filter) {
      return request(client.newRequest('/api/customer_password_resets', 'post').setBody(customer_password_reset).setParams(filter));
    }
  }, {
    key: "updateCustomerPasswordReset",
    value: function updateCustomerPasswordReset(id, customer_password_reset, filter) {
      return request(client.newRequest("/api/customer_password_resets/".concat(id), 'patch').setBody(customer_password_reset).setParams(filter));
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
    value: function createCustomerPaymentSource(customer_payment_source, filter) {
      return request(client.newRequest('/api/customer_payment_sources', 'post').setBody(customer_payment_source).setParams(filter));
    }
  }, {
    key: "updateCustomerPaymentSource",
    value: function updateCustomerPaymentSource(id, customer_payment_source, filter) {
      return request(client.newRequest("/api/customer_payment_sources/".concat(id), 'patch').setBody(customer_payment_source).setParams(filter));
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
    value: function createCustomerSubscription(customer_subscription, filter) {
      return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription).setParams(filter));
    }
  }, {
    key: "updateCustomerSubscription",
    value: function updateCustomerSubscription(id, customer_subscription, filter) {
      return request(client.newRequest("/api/customer_subscriptions/".concat(id), 'patch').setBody(customer_subscription).setParams(filter));
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
    value: function createCustomer(customer, filter) {
      return request(client.newRequest('/api/customers', 'post').setBody(customer).setParams(filter));
    }
  }, {
    key: "updateCustomer",
    value: function updateCustomer(id, customer, filter) {
      return request(client.newRequest("/api/customers/".concat(id), 'patch').setBody(customer).setParams(filter));
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
    value: function createDeliveryLeadTime(delivery_lead_time, filter) {
      return request(client.newRequest('/api/delivery_lead_times', 'post').setBody(delivery_lead_time).setParams(filter));
    }
  }, {
    key: "updateDeliveryLeadTime",
    value: function updateDeliveryLeadTime(id, delivery_lead_time, filter) {
      return request(client.newRequest("/api/delivery_lead_times/".concat(id), 'patch').setBody(delivery_lead_time).setParams(filter));
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
    value: function createInventoryModel(inventory_model, filter) {
      return request(client.newRequest('/api/inventory_models', 'post').setBody(inventory_model).setParams(filter));
    }
  }, {
    key: "updateInventoryModel",
    value: function updateInventoryModel(id, inventory_model, filter) {
      return request(client.newRequest("/api/inventory_models/".concat(id), 'patch').setBody(inventory_model).setParams(filter));
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
    value: function createLineItemOption(line_item_option, filter) {
      return request(client.newRequest('/api/line_item_options', 'post').setBody(line_item_option).setParams(filter));
    }
  }, {
    key: "updateLineItemOption",
    value: function updateLineItemOption(id, line_item_option, filter) {
      return request(client.newRequest("/api/line_item_options/".concat(id), 'patch').setBody(line_item_option).setParams(filter));
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
    value: function createLineItem(line_item, filter) {
      return request(client.newRequest('/api/line_items', 'post').setBody(line_item).setParams(filter));
    }
  }, {
    key: "updateLineItem",
    value: function updateLineItem(id, line_item, filter) {
      return request(client.newRequest("/api/line_items/".concat(id), 'patch').setBody(line_item).setParams(filter));
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
    value: function createMarket(market, filter) {
      return request(client.newRequest('/api/markets', 'post').setBody(market).setParams(filter));
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(id, market, filter) {
      return request(client.newRequest("/api/markets/".concat(id), 'patch').setBody(market).setParams(filter));
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
    value: function createMerchant(merchant, filter) {
      return request(client.newRequest('/api/merchants', 'post').setBody(merchant).setParams(filter));
    }
  }, {
    key: "updateMerchant",
    value: function updateMerchant(id, merchant, filter) {
      return request(client.newRequest("/api/merchants/".concat(id), 'patch').setBody(merchant).setParams(filter));
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
    value: function createOrder(order, filter) {
      return request(client.newRequest('/api/orders', 'post').setBody(order).setParams(filter));
    }
  }, {
    key: "updateOrder",
    value: function updateOrder(id, order, filter) {
      return request(client.newRequest("/api/orders/".concat(id), 'patch').setBody(order).setParams(filter));
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
    value: function createParcel(parcel, filter) {
      return request(client.newRequest('/api/parcels', 'post').setBody(parcel).setParams(filter));
    }
  }, {
    key: "updateParcel",
    value: function updateParcel(id, parcel, filter) {
      return request(client.newRequest("/api/parcels/".concat(id), 'patch').setBody(parcel).setParams(filter));
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
    value: function createPaymentMethod(payment_method, filter) {
      return request(client.newRequest('/api/payment_methods', 'post').setBody(payment_method).setParams(filter));
    }
  }, {
    key: "updatePaymentMethod",
    value: function updatePaymentMethod(id, payment_method, filter) {
      return request(client.newRequest("/api/payment_methods/".concat(id), 'patch').setBody(payment_method).setParams(filter));
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
    value: function createPaypalPayment(paypal_payment, filter) {
      return request(client.newRequest('/api/paypal_payments', 'post').setBody(paypal_payment).setParams(filter));
    }
  }, {
    key: "updatePaypalPayment",
    value: function updatePaypalPayment(id, paypal_payment, filter) {
      return request(client.newRequest("/api/paypal_payments/".concat(id), 'patch').setBody(paypal_payment).setParams(filter));
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
    value: function createPriceList(price_list, filter) {
      return request(client.newRequest('/api/price_lists', 'post').setBody(price_list).setParams(filter));
    }
  }, {
    key: "updatePriceList",
    value: function updatePriceList(id, price_list, filter) {
      return request(client.newRequest("/api/price_lists/".concat(id), 'patch').setBody(price_list).setParams(filter));
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
    value: function createPrice(price, filter) {
      return request(client.newRequest('/api/prices', 'post').setBody(price).setParams(filter));
    }
  }, {
    key: "updatePrice",
    value: function updatePrice(id, price, filter) {
      return request(client.newRequest("/api/prices/".concat(id), 'patch').setBody(price).setParams(filter));
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
    value: function createShipment(shipment, filter) {
      return request(client.newRequest('/api/shipments', 'post').setBody(shipment).setParams(filter));
    }
  }, {
    key: "updateShipment",
    value: function updateShipment(id, shipment, filter) {
      return request(client.newRequest("/api/shipments/".concat(id), 'patch').setBody(shipment).setParams(filter));
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
    value: function createShippingCategory(shipping_category, filter) {
      return request(client.newRequest('/api/shipping_categories', 'post').setBody(shipping_category).setParams(filter));
    }
  }, {
    key: "updateShippingCategory",
    value: function updateShippingCategory(id, shipping_category, filter) {
      return request(client.newRequest("/api/shipping_categories/".concat(id), 'patch').setBody(shipping_category).setParams(filter));
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
    value: function createShippingMethod(shipping_method, filter) {
      return request(client.newRequest('/api/shipping_methods', 'post').setBody(shipping_method).setParams(filter));
    }
  }, {
    key: "updateShippingMethod",
    value: function updateShippingMethod(id, shipping_method, filter) {
      return request(client.newRequest("/api/shipping_methods/".concat(id), 'patch').setBody(shipping_method).setParams(filter));
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
    value: function createShippingZone(shipping_zone, filter) {
      return request(client.newRequest('/api/shipping_zones', 'post').setBody(shipping_zone).setParams(filter));
    }
  }, {
    key: "updateShippingZone",
    value: function updateShippingZone(id, shipping_zone, filter) {
      return request(client.newRequest("/api/shipping_zones/".concat(id), 'patch').setBody(shipping_zone).setParams(filter));
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
    value: function createSkuOption(sku_option, filter) {
      return request(client.newRequest('/api/sku_options', 'post').setBody(sku_option).setParams(filter));
    }
  }, {
    key: "updateSkuOption",
    value: function updateSkuOption(id, sku_option, filter) {
      return request(client.newRequest("/api/sku_options/".concat(id), 'patch').setBody(sku_option).setParams(filter));
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
    value: function createSku(sku, filter) {
      return request(client.newRequest('/api/skus', 'post').setBody(sku).setParams(filter));
    }
  }, {
    key: "updateSku",
    value: function updateSku(id, sku, filter) {
      return request(client.newRequest("/api/skus/".concat(id), 'patch').setBody(sku).setParams(filter));
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
    value: function createStockItem(stock_item, filter) {
      return request(client.newRequest('/api/stock_items', 'post').setBody(stock_item).setParams(filter));
    }
  }, {
    key: "updateStockItem",
    value: function updateStockItem(id, stock_item, filter) {
      return request(client.newRequest("/api/stock_items/".concat(id), 'patch').setBody(stock_item).setParams(filter));
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
    value: function createStockLevel(stock_level, filter) {
      return request(client.newRequest('/api/stock_levels', 'post').setBody(stock_level).setParams(filter));
    }
  }, {
    key: "updateStockLevel",
    value: function updateStockLevel(id, stock_level, filter) {
      return request(client.newRequest("/api/stock_levels/".concat(id), 'patch').setBody(stock_level).setParams(filter));
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
    value: function createStockLocation(stock_location, filter) {
      return request(client.newRequest('/api/stock_locations', 'post').setBody(stock_location).setParams(filter));
    }
  }, {
    key: "updateStockLocation",
    value: function updateStockLocation(id, stock_location, filter) {
      return request(client.newRequest("/api/stock_locations/".concat(id), 'patch').setBody(stock_location).setParams(filter));
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
    value: function createWebhook(webhook, filter) {
      return request(client.newRequest('/api/webhooks', 'post').setBody(webhook).setParams(filter));
    }
  }, {
    key: "updateWebhook",
    value: function updateWebhook(id, webhook, filter) {
      return request(client.newRequest("/api/webhooks/".concat(id), 'patch').setBody(webhook).setParams(filter));
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
    value: function createWireTransfer(wire_transfer, filter) {
      return request(client.newRequest('/api/wire_transfers', 'post').setBody(wire_transfer).setParams(filter));
    }
  }, {
    key: "updateWireTransfer",
    value: function updateWireTransfer(id, wire_transfer, filter) {
      return request(client.newRequest("/api/wire_transfers/".concat(id), 'patch').setBody(wire_transfer).setParams(filter));
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
            options.response_type = 'raw'; // log.msg(`all()-->${listFunction.name} page 1`);

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
              // log.msg(`all()-->${listFunction.name} page ${pn+1}`);
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

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js"); // const AUTH_TOKENS = {};


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
    token.expires_in = response.data.expires_in; // cacheToken(auth.client_id, auth.grant_type, token);

    return token;
  });
}; // function cacheToken(client_id, grant_type, token) {
//     AUTH_TOKENS[tokenId(client_id, grant_type)] = token;
// }
// function getToken(client_id, grant_type) {
//     return AUTH_TOKENS[tokenId(client_id, grant_type)];
// }
// function tokenId(client_id, grant_type) {
//     return client_id + '-' + grant_type;
// }


function newAuthConfig(grant_type) {
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

var sdk = __webpack_require__(/*! ./config */ "./lib/config.js").sdk;

var auth = __webpack_require__(/*! ./auth */ "./lib/auth.js");

function checkApiConfig(config) {
  utils.log('config verification...');
  if (config == undefined) throw 'missing config';
  if (config.base_url == undefined) throw 'missing base_url';
  if (config.client_id == undefined) throw 'missing client_id'; // TODO: verificare configurazione in base al tipo di autenticazione (da rendere configurabile)

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
/***/ (function(module, exports, __webpack_require__) {

var auth = __webpack_require__(/*! ./auth */ "./lib/auth.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9qc29uYXBpLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbG9nLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9xdWVyeS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvanNvbi1hcGktbm9ybWFsaXplL3NyYy9qc29uQXBpTm9ybWFsaXplLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwibW9kZWwiLCJxdWVyeSIsImNsaWVudCIsImxvZyIsImpzb25hcGkiLCJDTEFwaSIsImZpbHRlciIsIm9wdGlvbnMiLCJyZXF1ZXN0IiwibmV3UmVxdWVzdCIsInNldFBhcmFtcyIsInNldE9wdGlvbnMiLCJhbGwiLCJsaXN0QWRkcmVzc2VzIiwiaWQiLCJhZGRyZXNzIiwic2V0Qm9keSIsImxpc3RDcmVkaXRDYXJkcyIsImNyZWRpdF9jYXJkIiwibGlzdEN1c3RvbWVyQWRkcmVzc2VzIiwiY3VzdG9tZXJfYWRkcmVzcyIsImxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzIiwiY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQiLCJsaXN0Q3VzdG9tZXJQYXltZW50U291cmNlcyIsImN1c3RvbWVyX3BheW1lbnRfc291cmNlIiwibGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucyIsImN1c3RvbWVyX3N1YnNjcmlwdGlvbiIsImxpc3RDdXN0b21lcnMiLCJjdXN0b21lciIsImxpc3REZWxpdmVyeUxlYWRUaW1lcyIsImRlbGl2ZXJ5X2xlYWRfdGltZSIsImxpc3RJbnZlbnRvcnlNb2RlbHMiLCJpbnZlbnRvcnlfbW9kZWwiLCJsaXN0TGluZUl0ZW1PcHRpb25zIiwibGluZV9pdGVtX29wdGlvbiIsImxpc3RMaW5lSXRlbXMiLCJsaW5lX2l0ZW0iLCJsaXN0TWFya2V0cyIsIm1hcmtldCIsImxpc3RNZXJjaGFudHMiLCJtZXJjaGFudCIsImxpc3RPcmRlcnMiLCJvcmRlciIsImxpc3RQYXJjZWxzIiwicGFyY2VsIiwibGlzdFBheW1lbnRNZXRob2RzIiwicGF5bWVudF9tZXRob2QiLCJsaXN0UGF5cGFsUGF5bWVudHMiLCJwYXlwYWxfcGF5bWVudCIsImxpc3RQcmljZUxpc3RzIiwicHJpY2VfbGlzdCIsImxpc3RQcmljZXMiLCJwcmljZSIsImxpc3RTaGlwbWVudHMiLCJzaGlwbWVudCIsImxpc3RTaGlwcGluZ0NhdGVnb3JpZXMiLCJzaGlwcGluZ19jYXRlZ29yeSIsImxpc3RTaGlwcGluZ01ldGhvZHMiLCJzaGlwcGluZ19tZXRob2QiLCJsaXN0U2hpcHBpbmdab25lcyIsInNoaXBwaW5nX3pvbmUiLCJsaXN0U2t1T3B0aW9ucyIsInNrdV9vcHRpb24iLCJsaXN0U2t1cyIsInNrdSIsImxpc3RTdG9ja0l0ZW1zIiwic3RvY2tfaXRlbSIsImxpc3RTdG9ja0xldmVscyIsInN0b2NrX2xldmVsIiwibGlzdFN0b2NrTG9jYXRpb25zIiwic3RvY2tfbG9jYXRpb24iLCJsaXN0V2ViaG9va3MiLCJ3ZWJob29rIiwibGlzdFdpcmVUcmFuc2ZlcnMiLCJ3aXJlX3RyYW5zZmVyIiwiYXBpIiwiY2xhcGkiLCJpbml0aWFsaXplIiwiY2ZnIiwibXNnIiwibmV3SW5zdGFuY2UiLCJhcGlSZXF1ZXN0IiwiY29ycmVsYXRpb25faWQiLCJhdHRlbXB0IiwicGF0aCIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZWplY3QiLCJuZXdFcnJvciIsImJvZHkiLCJzZXJpYWxpemUiLCJjYWxsIiwidGhlbiIsImFwaVJlc3BvbnNlIiwicmVzcG9uc2UiLCJyZXNwb25zZV90eXBlIiwiY2F0Y2giLCJlcnJvciIsImRhdGEiLCJlcnJvcnMiLCJhcGlfZXJyb3IiLCJzdGF0dXMiLCJ0aXRsZSIsImRldGFpbCIsImNvZGUiLCJzdGF0dXNUZXh0Iiwibm9ybWFsaXplIiwicmVzIiwiaXNBcGlSZXNvdXJjZSIsImRhdGFzZXQiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJsaXN0RnVuY3Rpb24iLCJzZXRQYWdlIiwic2l6ZSIsInBhZ2Vfc2l6ZSIsIm51bWJlciIsImlzUXVlcnlGaWx0ZXIiLCJwYWdlIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJmaXJzdFBhZ2UiLCJtYXhfcGFnZSIsIm1ldGEiLCJwYWdlX2NvdW50IiwibGVuZ3RoIiwicGFnZXMiLCJBcnJheSIsInBuIiwib3V0IiwicCIsImNvbmNhdCIsImZvckVhY2giLCJheGlvcyIsIkF1dGgiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwiZ3JhbnRfdHlwZSIsImNpZCIsImNzZWMiLCJDbGllbnRDcmVkZW50aWFscyIsInNjb3BlIiwiQXV0aG9yaXphdGlvbkNvZGUiLCJyZWRpcmVjdF91cmkiLCJ1cmkiLCJQYXNzd29yZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJSZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwidG9rZW4iLCJBcGlUb2tlbiIsImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiLCJvd25lcl90eXBlIiwib3duZXJfaWQiLCJjcmVhdGVkX2F0IiwiZXhwaXJlc19pbiIsImF1dGhlbnRpY2F0ZSIsImF1dGgiLCJwb3N0IiwibmV3QXV0aENvbmZpZyIsImNvbmZpZyIsInV0aWxzIiwic2V0dGluZ3MiLCJzZGsiLCJkZWZhdWx0IiwibWVyZ2VNYXBzIiwiY2xheWVyIiwibGFzdEFjY2Vzc1Rva2VuIiwiY2hlY2tBcGlDb25maWciLCJiYXNlX3VybCIsInNldEF4aW9zQ29uZmlnIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiaGVhZGVycyIsImNvbW1vbiIsImRlYnVnIiwidHJhY2UiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJBcGlDbGllbnQiLCJtZXRob2QiLCJBcGlSZXF1ZXN0IiwicGFyYW1zIiwiZ3VpZCIsImJ1aWxkIiwidHlwZSIsInJlc3BvbnNlVHlwZSIsInJhdyIsImF1dGhfYXR0ZW1wdHMiLCJhdXRoQ29uZmlnIiwiYXV0aGVudGljYXRpb24iLCJpc0F1dGhDb25maWciLCJjbGllbnRJZCIsIm1hcmtldFNjb3BlIiwibWFya2V0X2lkIiwiY2xpZW50U2VjcmV0IiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIkpzb25BcGlSZXNvdXJjZSIsImRlc2VyaWFsaXplIiwiamFwaSIsInJlc291cmNlIiwiYXR0cmlidXRlcyIsImZpZWxkIiwiaW5jbHVkZXMiLCJyZWxhdGlvbnNoaXBzIiwic3Vic3RyIiwiaXNBcnJheSIsInJlbCIsImhlbHBlciIsIm5ld1Jlc291cmNlIiwicmVsX2RhdGEiLCJyZWxSZXMiLCJzZXRSZXNvdXJjZSIsImluYyIsImpzb25hcGlJbmNsdWRlZCIsInNldEZpZWxkcyIsImluY2x1ZGVkIiwiaW5jUmVzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInByb2JlIiwiZW5hYmxlZCIsIlJlc291cmNlIiwicmVmZXJlbmNlIiwibWV0YWRhdGEiLCJ1cGRhdGVkX2F0IiwiZmllbGRzIiwidmFsdWUiLCJBZGRyZXNzIiwiVFlQRSIsImJ1c2luZXNzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvbXBhbnkiLCJsaW5lXzEiLCJsaW5lXzIiLCJjaXR5IiwiemlwX2NvZGUiLCJzdGF0ZV9jb2RlIiwicGhvbmUiLCJlbWFpbCIsIm5vdGVzIiwibGF0IiwibG5nIiwiYmlsbGluZ19pbmZvIiwiQ3JlZGl0Q2FyZCIsIm1vbnRoIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsIkN1c3RvbWVyQWRkcmVzcyIsIkN1c3RvbWVyUGFzc3dvcmRSZXNldCIsImN1c3RvbWVyX2VtYWlsIiwiY3VzdG9tZXJfcGFzc3dvcmQiLCJfcmVzZXRfcGFzc3dvcmRfdG9rZW4iLCJDdXN0b21lclBheW1lbnRTb3VyY2UiLCJDdXN0b21lclN1YnNjcmlwdGlvbiIsIkN1c3RvbWVyIiwiRGVsaXZlcnlMZWFkVGltZSIsIm1pbl9ob3VycyIsIm1heF9ob3VycyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW1PcHRpb24iLCJxdWFudGl0eSIsIkxpbmVJdGVtIiwic2t1X2NvZGUiLCJfdXBkYXRlX3F1YW50aXR5IiwiaW1hZ2VfdXJsIiwiTWFya2V0IiwiTWVyY2hhbnQiLCJPcmRlciIsImd1ZXN0Iiwic2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2siLCJjb3Vwb25fY29kZSIsImNhcnRfdXJsIiwicmV0dXJuX3VybCIsInRlcm1zX3VybCIsInByaXZhY3lfdXJsIiwiX3BsYWNlIiwiX2NhbmNlbCIsIl9hcHByb3ZlIiwiX3VwZGF0ZV90YXhlcyIsIl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZCIsIl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZCIsIl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZyIsIl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZyIsIl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldCIsIl9zYXZlX3NoaXBwaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rIiwiX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9yZWZyZXNoIiwiUGFyY2VsIiwid2VpZ2h0IiwidW5pdF9vZl93ZWlnaHQiLCJlZWxfcGZjIiwiY29udGVudHNfdHlwZSIsImNvbnRlbnRzX2V4cGxhbmF0aW9uIiwiY3VzdG9tc19jZXJ0aWZ5IiwiY3VzdG9tc19zaWduZXIiLCJub25fZGVsaXZlcnlfb3B0aW9uIiwicmVzdHJpY3Rpb25fdHlwZSIsInJlc3RyaWN0aW9uX2NvbW1lbnRzIiwiY3VzdG9tc19pbmZvX3JlcXVpcmVkIiwiUGF5bWVudE1ldGhvZCIsInBheW1lbnRfc291cmNlX3R5cGUiLCJwcmljZV9hbW91bnRfY2VudHMiLCJQYXlwYWxQYXltZW50IiwiY2FuY2VsX3VybCIsIm5vdGVfdG9fcGF5ZXIiLCJwYXlwYWxfcGF5ZXJfaWQiLCJQcmljZUxpc3QiLCJjdXJyZW5jeV9jb2RlIiwidGF4X2luY2x1ZGVkIiwiUHJpY2UiLCJhbW91bnRfY2VudHMiLCJjb21wYXJlX2F0X2Ftb3VudF9jZW50cyIsIlNoaXBtZW50IiwiX29uX2hvbGQiLCJfcGlja2luZyIsIl9wYWNraW5nIiwiX3JlYWR5X3RvX3NoaXAiLCJfc2hpcCIsIl9nZXRfcmF0ZXMiLCJzZWxlY3RlZF9yYXRlX2lkIiwiX3B1cmNoYXNlIiwiU2hpcHBpbmdDYXRlZ29yeSIsIlNoaXBwaW5nTWV0aG9kIiwiZnJlZV9vdmVyX2Ftb3VudF9jZW50cyIsIlNoaXBwaW5nWm9uZSIsImNvdW50cnlfY29kZV9yZWdleCIsIm5vdF9jb3VudHJ5X2NvZGVfcmVnZXgiLCJzdGF0ZV9jb2RlX3JlZ2V4Iiwibm90X3N0YXRlX2NvZGVfcmVnZXgiLCJ6aXBfY29kZV9yZWdleCIsIm5vdF96aXBfY29kZV9yZWdleCIsIlNrdU9wdGlvbiIsImRlbGF5X2hvdXJzIiwic2t1X2NvZGVfcmVnZXgiLCJTa3UiLCJ0YWdfbmFtZXMiLCJwaWVjZXNfcGVyX3BhY2siLCJTdG9ja0l0ZW0iLCJTdG9ja0xldmVsIiwicHJpb3JpdHkiLCJvbl9ob2xkIiwiU3RvY2tMb2NhdGlvbiIsImxhYmVsX2Zvcm1hdCIsIldlYmhvb2siLCJ0b3BpYyIsImNhbGxiYWNrX3VybCIsImluY2x1ZGVfcmVzb3VyY2VzIiwiV2lyZVRyYW5zZmVyIiwiaW5zdGFuY2UiLCJjbCIsImNsX3R5cGUiLCJRdWVyeUZpbHRlciIsImNsZWFyIiwic29ydF9maWVsZHMiLCJzcGFyc2VfZmllbGRzZXRzIiwiaW5jbHVkZWRfcmVzb3VyY2VzIiwiZmlsdGVyX2ZpZWxkcyIsImN1c3RvbV9wYXJhbXMiLCJwYWdlX251bWJlciIsImRlc2NlbmRpbmciLCJwdXNoIiwicmVzb3VyY2VzIiwiZmlsdGVycyIsInBhcmFtIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwicXNNYXAiLCJpbmNsdWRlIiwic29ydCIsImV4dCIsIm1hcDEiLCJtYXAyIiwiY2xvbmVNYXAiLCJtcyIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VB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OztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDLDBHQUEwRztBQUMxRzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNEVBQTRFLHVCQUF1QixFQUFFO0FBQ3JHLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JRRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImNvbW1lcmNlbGF5ZXItc2RrLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGF5ZXInKVxyXG5cclxuLy8gTW9kZWwgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxuLy8gUXVlcnlGaWx0ZXIgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKVxyXG4iLCIvLyBGaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGF0IDIyLzAyLzIwMTkgMTM6NTc6NDcgYnkgY29tbWVyY2VsYXllci1qcy1zZGstY29kZWdlblxyXG5cclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50JylcclxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi9sb2cnKVxyXG5jb25zdCBqc29uYXBpID0gcmVxdWlyZSgnLi9qc29uYXBpJylcclxuXHJcblxyXG5jbGFzcyBDTEFwaSB7XHJcblxyXG5cdC8vIEFkZHJlc3NcclxuXHRsaXN0QWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvYWRkcmVzc2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQWRkcmVzcyhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUFkZHJlc3MoYWRkcmVzcywgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2FkZHJlc3NlcycsICdwb3N0Jykuc2V0Qm9keShhZGRyZXNzKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVBZGRyZXNzKGlkLCBhZGRyZXNzLCBmaWx0ZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlZGl0IENhcmRcclxuXHRsaXN0Q3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbENyZWRpdENhcmRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDcmVkaXRDYXJkcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3JlZGl0Q2FyZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNyZWRpdENhcmQoY3JlZGl0X2NhcmQsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnLCAncG9zdCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUNyZWRpdENhcmQoaWQsIGNyZWRpdF9jYXJkLCBmaWx0ZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUNyZWRpdENhcmQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIEFkZHJlc3NcclxuXHRsaXN0Q3VzdG9tZXJBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lckFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJBZGRyZXNzKGN1c3RvbWVyX2FkZHJlc3MsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJBZGRyZXNzKGlkLCBjdXN0b21lcl9hZGRyZXNzLCBmaWx0ZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJBZGRyZXNzKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXNzd29yZCBSZXNldFxyXG5cdGxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBhc3N3b3JkUmVzZXQoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCwgY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXNzd29yZF9yZXNldCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXltZW50IFNvdXJjZVxyXG5cdGxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBheW1lbnRTb3VyY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBheW1lbnRTb3VyY2UoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBTdWJzY3JpcHRpb25cclxuXHRsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGN1c3RvbWVyX3N1YnNjcmlwdGlvbiwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclN1YnNjcmlwdGlvbihpZCwgY3VzdG9tZXJfc3Vic2NyaXB0aW9uLCBmaWx0ZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3N1YnNjcmlwdGlvbikuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lclxyXG5cdGxpc3RDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyKGN1c3RvbWVyLCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lcihpZCwgY3VzdG9tZXIsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcikuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVycy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlbGl2ZXJ5IExlYWQgVGltZVxyXG5cdGxpc3REZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3REZWxpdmVyeUxlYWRUaW1lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlRGVsaXZlcnlMZWFkVGltZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVEZWxpdmVyeUxlYWRUaW1lKGRlbGl2ZXJ5X2xlYWRfdGltZSwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnLCAncG9zdCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVEZWxpdmVyeUxlYWRUaW1lKGlkLCBkZWxpdmVyeV9sZWFkX3RpbWUsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVEZWxpdmVyeUxlYWRUaW1lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW52ZW50b3J5IE1vZGVsXHJcblx0bGlzdEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0SW52ZW50b3J5TW9kZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVJbnZlbnRvcnlNb2RlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJbnZlbnRvcnlNb2RlbChpbnZlbnRvcnlfbW9kZWwsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbnZlbnRvcnlfbW9kZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW52ZW50b3J5TW9kZWwoaWQsIGludmVudG9yeV9tb2RlbCwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShpbnZlbnRvcnlfbW9kZWwpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUludmVudG9yeU1vZGVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtIE9wdGlvblxyXG5cdGxpc3RMaW5lSXRlbU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1fb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbU9wdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtT3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbU9wdGlvbihsaW5lX2l0ZW1fb3B0aW9uLCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGluZUl0ZW1PcHRpb24oaWQsIGxpbmVfaXRlbV9vcHRpb24sIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUxpbmVJdGVtT3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpbmUgSXRlbVxyXG5cdGxpc3RMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdExpbmVJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTGluZUl0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTGluZUl0ZW0obGluZV9pdGVtLCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycsICdwb3N0Jykuc2V0Qm9keShsaW5lX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpbmVJdGVtKGlkLCBsaW5lX2l0ZW0sIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcmtldFxyXG5cdGxpc3RNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWFya2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTWFya2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWFya2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWFya2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1hcmtldChtYXJrZXQsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1hcmtldCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWFya2V0KGlkLCBtYXJrZXQsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobWFya2V0KS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNYXJrZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNZXJjaGFudFxyXG5cdGxpc3RNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tZXJjaGFudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbE1lcmNoYW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWVyY2hhbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNZXJjaGFudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1lcmNoYW50KG1lcmNoYW50LCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1lcmNoYW50KS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNZXJjaGFudChpZCwgbWVyY2hhbnQsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtZXJjaGFudCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTWVyY2hhbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21lcmNoYW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9yZGVyXHJcblx0bGlzdE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsT3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RPcmRlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZU9yZGVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL29yZGVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlT3JkZXIob3JkZXIsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnLCAncG9zdCcpLnNldEJvZHkob3JkZXIpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU9yZGVyKGlkLCBvcmRlciwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG9yZGVyKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVPcmRlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyY2VsXHJcblx0bGlzdFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXJjZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXJjZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXJjZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXJjZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFyY2VsKHBhcmNlbCwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnLCAncG9zdCcpLnNldEJvZHkocGFyY2VsKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXJjZWwoaWQsIHBhcmNlbCwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXJjZWwpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBhcmNlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheW1lbnQgTWV0aG9kXHJcblx0bGlzdFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5bWVudE1ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheW1lbnRNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXltZW50TWV0aG9kKHBheW1lbnRfbWV0aG9kLCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXltZW50TWV0aG9kKGlkLCBwYXltZW50X21ldGhvZCwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXltZW50TWV0aG9kKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXlwYWwgUGF5bWVudFxyXG5cdGxpc3RQYXlwYWxQYXltZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheXBhbF9wYXltZW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGF5cGFsUGF5bWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBheXBhbFBheW1lbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXlwYWxQYXltZW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGF5cGFsUGF5bWVudChwYXlwYWxfcGF5bWVudCwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheXBhbF9wYXltZW50cycsICdwb3N0Jykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGF5cGFsUGF5bWVudChpZCwgcGF5cGFsX3BheW1lbnQsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5cGFsUGF5bWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2UgTGlzdFxyXG5cdGxpc3RQcmljZUxpc3RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VfbGlzdHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlTGlzdHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVByaWNlTGlzdChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUHJpY2VMaXN0KHByaWNlX2xpc3QsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycsICdwb3N0Jykuc2V0Qm9keShwcmljZV9saXN0KS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZUxpc3QoaWQsIHByaWNlX2xpc3QsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHByaWNlX2xpc3QpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlTGlzdChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZVxyXG5cdGxpc3RQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQcmljZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVByaWNlKHByaWNlLCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZShpZCwgcHJpY2UsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZSkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUHJpY2UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBtZW50XHJcblx0bGlzdFNoaXBtZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBtZW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcG1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwbWVudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBtZW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBtZW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcG1lbnQoc2hpcG1lbnQsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwbWVudHMnLCAncG9zdCcpLnNldEJvZHkoc2hpcG1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBtZW50KGlkLCBzaGlwbWVudCwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBtZW50KS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwbWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgQ2F0ZWdvcnlcclxuXHRsaXN0U2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ0NhdGVnb3JpZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdDYXRlZ29yeShzaGlwcGluZ19jYXRlZ29yeSwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIHNoaXBwaW5nX2NhdGVnb3J5LCBmaWx0ZXIpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX2NhdGVnb3J5KS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ0NhdGVnb3J5KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgTWV0aG9kXHJcblx0bGlzdFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ01ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ01ldGhvZChzaGlwcGluZ19tZXRob2QsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdNZXRob2QoaWQsIHNoaXBwaW5nX21ldGhvZCwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nTWV0aG9kKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgWm9uZVxyXG5cdGxpc3RTaGlwcGluZ1pvbmVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfem9uZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nWm9uZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nWm9uZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nWm9uZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdab25lKHNoaXBwaW5nX3pvbmUsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ196b25lcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ196b25lKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ1pvbmUoaWQsIHNoaXBwaW5nX3pvbmUsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nWm9uZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3UgT3B0aW9uXHJcblx0bGlzdFNrdU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3Vfb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1T3B0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1T3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3VPcHRpb24oc2t1X29wdGlvbiwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNrdU9wdGlvbihpZCwgc2t1X29wdGlvbiwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1X29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1T3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdVxyXG5cdGxpc3RTa3VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdShza3UsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdSkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1KGlkLCBza3UsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1KS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTa3UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBJdGVtXHJcblx0bGlzdFN0b2NrSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tJdGVtcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0l0ZW0oc3RvY2tfaXRlbSwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrSXRlbShpZCwgc3RvY2tfaXRlbSwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIExldmVsXHJcblx0bGlzdFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0xldmVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tMZXZlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrTGV2ZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0xldmVsKHN0b2NrX2xldmVsLCBmaWx0ZXIpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2xldmVsKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0xldmVsKGlkLCBzdG9ja19sZXZlbCwgZmlsdGVyKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2xldmVsKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xldmVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBMb2NhdGlvblxyXG5cdGxpc3RTdG9ja0xvY2F0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrTG9jYXRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0xvY2F0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tMb2NhdGlvbihzdG9ja19sb2NhdGlvbiwgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMb2NhdGlvbihpZCwgc3RvY2tfbG9jYXRpb24sIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikuc2V0UGFyYW1zKGZpbHRlcikpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tMb2NhdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2ViaG9va1xyXG5cdGxpc3RXZWJob29rcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dlYmhvb2tzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxXZWJob29rcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0V2ViaG9va3MsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdlYmhvb2soaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVdlYmhvb2sod2ViaG9vaywgZmlsdGVyKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dlYmhvb2tzJywgJ3Bvc3QnKS5zZXRCb2R5KHdlYmhvb2spLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdlYmhvb2soaWQsIHdlYmhvb2ssIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdlYmhvb2spLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdlYmhvb2soaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2lyZSBUcmFuc2ZlclxyXG5cdGxpc3RXaXJlVHJhbnNmZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2lyZV90cmFuc2ZlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdpcmVUcmFuc2ZlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdpcmVUcmFuc2ZlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2lyZVRyYW5zZmVyKHdpcmVfdHJhbnNmZXIsIGZpbHRlcikge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycsICdwb3N0Jykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKS5zZXRQYXJhbXMoZmlsdGVyKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXaXJlVHJhbnNmZXIoaWQsIHdpcmVfdHJhbnNmZXIsIGZpbHRlcikge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdpcmVfdHJhbnNmZXIpLnNldFBhcmFtcyhmaWx0ZXIpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdpcmVUcmFuc2ZlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxudmFyIGFwaSA9IG5ldyBDTEFwaSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuY2xhcGkgPSBhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgbG9nLm1zZygnYXBpIGNsaWVudCBpbml0aWFsaXplZCB3aXRoIGNvbmZpZzonKTtcclxuICAgIGxvZy5tc2coY2ZnKTtcclxuICAgIGFwaS5jbGllbnQgPSAgY2xpZW50Lm5ld0luc3RhbmNlKGNmZyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICBsb2cubXNnKGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGNhbGxpbmcgJHthcGlSZXF1ZXN0LnBhdGh9IC4uLmApO1xyXG5cclxuICAgIGlmIChhcGkuY2xpZW50ID09IHVuZGVmaW5lZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKHVuZGVmaW5lZCwgJ2FwaSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgYm9keSA9IGpzb25hcGkuc2VyaWFsaXplKGFwaVJlcXVlc3QuYm9keSk7XHJcbiAgICAgICAgYXBpUmVxdWVzdC5zZXRCb2R5KGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBhcGkuY2xpZW50LmNhbGwoYXBpUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oYXBpUmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UoYXBpUmVzcG9uc2UsIGFwaVJlcXVlc3QucmVzcG9uc2VfdHlwZSk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yLnJlc3BvbnNlKSByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaV9lcnJvciA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcihhcGlfZXJyb3Iuc3RhdHVzLCBhcGlfZXJyb3IudGl0bGUsIGFwaV9lcnJvci5kZXRhaWwsIGFwaV9lcnJvci5jb2RlKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCByZXNwb25zZV90eXBlKSB7XHJcblx0aWYgKHJlc3BvbnNlX3R5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChyZXNwb25zZV90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHR0aHJvdyAnRGVzZXJpYWxpemF0aW9uIHRvIG1vZGVsIG5vdCBzdXBwb3J0ZWQnO1xyXG5cdFx0XHRjYXNlICdub3JtYWxpemVkJzpcclxuXHRcdFx0XHRyZXR1cm4ganNvbmFwaS5ub3JtYWxpemUoYXBpUmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdGNhc2UgJ2pzb25hcGknOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZS5kYXRhO1xyXG5cdFx0XHRjYXNlICdyYXcnOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBcIlVuc3VwcG9ydGVkIHJlc3BvbnNlX3R5cGU6ICdcIiArIGFwaVJlcXVlc3QucmVzcG9uc2VfdHlwZSArIFwiJ1wiO1xyXG5cdFx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGF0YShyZXMpIHtcclxuXHRpZiAocmVzLmlzQXBpUmVzb3VyY2UgJiYgKHJlcy5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKSByZXR1cm4gcmVzO1xyXG5cdGVsc2VcclxuXHRpZiAocmVzLmRhdGFzZXQpIHJldHVybiByZXMuZGF0YXNldC5kYXRhO1xyXG5cdGVsc2VcclxuXHRpZiAocmVzLmRhdGEpIHJldHVybiAocmVzLmRhdGEuZGF0YSk/IHJlcy5kYXRhLmRhdGEgOiByZXMuZGF0YTtcclxuXHRlbHNlIHJldHVybiByZXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdFcnJvcihzdGF0dXMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlLCBjb2RlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yIDogdHJ1ZSxcclxuICAgICAgICBzdGF0dXMgOiBzdGF0dXMsXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBtZXNzYWdlIDogbWVzc2FnZSxcclxuICAgICAgICBjb2RlIDogY29kZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWxsKGxpc3RGdW5jdGlvbiwgZmlsdGVyID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgIGlmICgobGlzdEZ1bmN0aW9uID09IHVuZGVmaW5lZCkgfHwgIWxpc3RGdW5jdGlvbi5uYW1lLnN0YXJ0c1dpdGgoJ2xpc3QnKSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiVW5kZWZpbmVkICdsaXN0JyBBUEkgZnVuY3Rpb25cIik7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFBhZ2UoZmlsdGVyLCBzaXplID0gZmlsdGVyLnBhZ2Vfc2l6ZSB8fCAxMCwgbnVtYmVyID0gMSkge1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc1F1ZXJ5RmlsdGVyICYmIChmaWx0ZXIuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSkgZmlsdGVyLnBhZ2UobnVtYmVyLCBzaXplKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW3NpemVdJ10gPSBzaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2VbbnVtYmVyXSddID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKGZpbHRlcik7XHJcblx0XHJcblx0Ly8gU2F2ZSBvcmlnaW5hbCBvcHRpb24gYW5kIGZvcnhlIHJlc3BvbnNlX3R5cGUgdG8gJ3JhdydcclxuXHRsZXQgcmVzcG9uc2VfdHlwZSA9IG9wdGlvbnMucmVzcG9uc2VfdHlwZTtcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSAncmF3JztcclxuXHJcblx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlIDFgKTtcclxuXHJcbiAgICBsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgbWF4X3BhZ2UgPSBmaXJzdFBhZ2UuZGF0YS5tZXRhLnBhZ2VfY291bnQ7XHJcblx0Y29uc3QgcGFnZV9zaXplID0gZmlyc3RQYWdlLmRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHJcblx0bGV0IHBhZ2VzID0gbmV3IEFycmF5KG1heF9wYWdlKTtcclxuICAgIHBhZ2VzWzBdID0gcmVzcG9uc2UoZmlyc3RQYWdlLCByZXNwb25zZV90eXBlKTtcclxuXHJcblx0Ly8gU3RhbmRhcmQgbGlzdEZ1bmN0aW9uIHJlc3BvbnNlXHJcblx0aWYgKG1heF9wYWdlID09IDEpIHJldHVybiBwYWdlc1swXTsgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICBmb3IgKHBuID0gMTsgcG4gPCBtYXhfcGFnZTsgcG4rKykge1xyXG5cdFx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlICR7cG4rMX1gKTtcclxuICAgICAgICBzZXRQYWdlKGZpbHRlciwgcGFnZV9zaXplLCBwbisxKTtcclxuICAgICAgICBwYWdlc1twbl0gPSBsaXN0RnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG5cdC8vIFNldCBvcmlnaW5hbCBvcHRpb25cclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG5cclxuXHRsZXQgb3V0ID0gW107XHJcblxyXG4gICAgKGF3YWl0IFByb21pc2UuYWxsKHBhZ2VzKSkuZm9yRWFjaChwID0+IHsgb3V0ID0gb3V0LmNvbmNhdChkYXRhKHJlc3BvbnNlKHAsIHJlc3BvbnNlX3R5cGUpKSkgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxuXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG5cclxuLy8gY29uc3QgQVVUSF9UT0tFTlMgPSB7fTtcclxuXHJcblxyXG5jbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY2xpZW50SWQoY2lkKSB7IHRoaXMuY2xpZW50X2lkID0gY2lkOyByZXR1cm4gdGhpczsgfVxyXG4gICAgY2xpZW50U2VjcmV0KGNzZWMpIHsgdGhpcy5jbGllbnRfc2VjcmV0ID0gY3NlYzsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGlzQXV0aENvbmZpZygpIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIENsaWVudENyZWRlbnRpYWxzIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlKSB7XHJcbiAgICAgICAgc3VwZXIoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnY2xpZW50X2NyZWRlbnRpYWxzJztcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBzZXRTY29wZShzY29wZSkgeyB0aGlzLnNjb3BlID0gc2NvcGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBtYXJrZXRTY29wZShtYXJrZXQpIHsgdGhpcy5zY29wZSA9IChtYXJrZXQgIT0gdW5kZWZpbmVkKT8gJ21hcmtldDonK21hcmtldCA6IG1hcmtldDsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb25Db2RlIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuY2xpZW50X3NlY3JldCwgY2ZnLnNjb3BlKVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNmZy5jb2RlO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gY2ZnLnJlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIHNldENvZGUoY29kZSkgeyB0aGlzLmNvZGUgPSBjb2RlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgcmVkaXJlY3RVcmkodXJpKSB7IHRoaXMucmVkaXJlY3RfdXJpID0gdXJpOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUGFzc3dvcmQgZXh0ZW5kcyBDbGllbnRDcmVkZW50aWFscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjZmcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNmZy5jbGllbnRfaWQsIGNmZy5jbGllbnRfc2VjcmV0LCBjZmcuc2NvcGUpXHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY2ZnLnVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjZmcucGFzc3dvcmQ7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSkgeyB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCkgeyB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBSZWZyZXNoVG9rZW4gZXh0ZW5kcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVmcmVzaF90b2tlbikge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3JlZnJlc2hfdG9rZW4nO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XHJcbiAgICB9XHJcbiAgICByZWZyZXNoVG9rZW4odG9rZW4pIHsgdGhpcy5yZWZyZXNoX3Rva2VuID0gdG9rZW47IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBcGlUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSAnYmVhcmVyJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm93bmVyX3R5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl9pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5leHBpcmVzX2luID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQ2xpZW50Q3JlZGVudGlhbHMsXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSxcclxuICAgIFBhc3N3b3JkLFxyXG4gICAgUmVmcmVzaFRva2VuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5hdXRoZW50aWNhdGUgPSAoYXV0aCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgZ3JhbnRfdHlwZTogYXV0aC5ncmFudF90eXBlLFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IGF1dGguY2xpZW50X2lkLFxyXG4gICAgICAgICAgICBzY29wZTogYXV0aC5zY29wZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogYXV0aC5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICBjb2RlOiBhdXRoLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogYXV0aC5yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogYXV0aC5wYXNzd29yZCxcclxuICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogYXV0aC5yZWZyZXNoX3Rva2VuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgQXBpVG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHRva2VuLmFjY2Vzc190b2tlbiA9IHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICB0b2tlbi5yZWZyZXNoX3Rva2VuID0gcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuO1xyXG4gICAgICAgICAgICB0b2tlbi5zY29wZSA9IHJlc3BvbnNlLmRhdGEuc2NvcGU7XHJcbiAgICAgICAgICAgIHRva2VuLm93bmVyX3R5cGUgPSByZXNwb25zZS5kYXRhLm93bmVyX3R5cGU7XHJcbiAgICAgICAgICAgIHRva2VuLm93bmVyX2lkID0gcmVzcG9uc2UuZGF0YS5vd25lcl9pZDtcclxuICAgICAgICAgICAgdG9rZW4uY3JlYXRlZF9hdCA9IHJlc3BvbnNlLmRhdGEuY3JlYXRlZF9hdDtcclxuICAgICAgICAgICAgdG9rZW4uZXhwaXJlc19pbiA9IHJlc3BvbnNlLmRhdGEuZXhwaXJlc19pbjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhY2hlVG9rZW4oYXV0aC5jbGllbnRfaWQsIGF1dGguZ3JhbnRfdHlwZSwgdG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY2FjaGVUb2tlbihjbGllbnRfaWQsIGdyYW50X3R5cGUsIHRva2VuKSB7XHJcbi8vICAgICBBVVRIX1RPS0VOU1t0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSldID0gdG9rZW47XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFRva2VuKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSkge1xyXG4vLyAgICAgcmV0dXJuIEFVVEhfVE9LRU5TW3Rva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlKV07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHRva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlKSB7XHJcbi8vICAgICByZXR1cm4gY2xpZW50X2lkICsgJy0nICsgZ3JhbnRfdHlwZTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gbmV3QXV0aENvbmZpZyhncmFudF90eXBlLCBjb25maWcgPSB7fSkge1xyXG4gICAgc3dpdGNoIChncmFudF90eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY2xpZW50X2NyZWRlbnRpYWxzJzogcmV0dXJuIG5ldyBDbGllbnRDcmVkZW50aWFscyhjb25maWcuY2xpZW50X2lkLCBjb25maWcuY2xpZW50X3NlY3JldCwgY29uZmlnLnNjb3BlKTtcclxuICAgICAgICBjYXNlICdhdXRob3JpemF0aW9uX2NvZGUnOiByZXR1cm4gbmV3IEF1dGhvcml6YXRpb25Db2RlKGNvbmZpZyk7XHJcbiAgICAgICAgY2FzZSAncGFzc3dvcmQnOiByZXR1cm4gbmV3IFBhc3N3b3JkKGNvbmZpZyk7XHJcbiAgICAgICAgY2FzZSAncmVmcmVzaF90b2tlbic6IHJldHVybiBuZXcgUmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufSIsImNvbnN0IGFwaSA9IHJlcXVpcmUoJy4vYXBpJylcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbi8vIEV4cG9zZSBhbGwgYXBpIGZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaS5jbGFwaTtcclxuXHJcbi8vIEV4cG9zZSBTREsgY29uZmlndXJhdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5zZXR0aW5ncyA9IGNvbmZpZy5zZGs7XHJcblxyXG5cclxuLy8gU0RLIGluaXRpYWxpemF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBpZiAoY2ZnICE9IHVuZGVmaW5lZCkgY2ZnLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgIGFwaS5pbml0aWFsaXplKHV0aWxzLm1lcmdlTWFwcyhjb25maWcuY2xheWVyLCBjZmcpKVxyXG59XHJcblxyXG5cclxuLy8gQXV0aGVudGljYXRpb24gdHlwZXNcclxubW9kdWxlLmV4cG9ydHMuYXV0aCA9IHtcclxuICAgIENsaWVudENyZWRlbnRpYWxzIDogKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkgPT4geyByZXR1cm4gbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHMoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KSB9LFxyXG4gICAgUGFzc3dvcmQgOiAoY2ZnKSA9PiB7IHJldHVybiBuZXcgYXV0aC5QYXNzd29yZChjZmcpIH0sXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSA6IChjZmcpID0+IHsgcmV0dXJuIG5ldyBhdXRoLkF1dGhvcml6YXRpb25Db2RlKGNmZykgfSxcclxuICAgIFJlZnJlc2hUb2tlbiA6IChjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pID0+IHsgcmV0dXJuIG5ldyBhdXRoLlJlZnJlc2hUb2tlbihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aC5sYXN0QWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLmNsYXBpLmNsaWVudC5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuY29uc3QgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQXBpQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIHZlcmlmaWNhdGlvbi4uLicpXHJcblxyXG4gICAgaWYgKGNvbmZpZyA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGNvbmZpZyc7XHJcbiAgICBpZiAoY29uZmlnLmJhc2VfdXJsID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYmFzZV91cmwnO1xyXG4gICAgaWYgKGNvbmZpZy5jbGllbnRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjbGllbnRfaWQnO1xyXG5cclxuICAgIC8vIFRPRE86IHZlcmlmaWNhcmUgY29uZmlndXJhemlvbmUgaW4gYmFzZSBhbCB0aXBvIGRpIGF1dGVudGljYXppb25lIChkYSByZW5kZXJlIGNvbmZpZ3VyYWJpbGUpXHJcblxyXG4gICAgdXRpbHMubG9nKCdjb25maWcgb2suJylcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBeGlvc0NvbmZpZyhjb25maWcpIHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gY29uZmlnLmJhc2VfdXJsO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0FjY2VwdCddID0gJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbic7XHJcblxyXG4gICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsudHJhY2UpIHtcclxuXHJcbiAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCdSRVFVRVNUIC0tPicpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2cocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2coJzwtLSBSRVNQT05TRScpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBuZXdJbnN0YW5jZSA6IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5BcGlDbGllbnQoY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgbmV3UmVxdWVzdCA6IGZ1bmN0aW9uKHBhdGgsIG1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5BcGlSZXF1ZXN0KHBhdGgsIG1ldGhvZCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBBcGlSZXF1ZXN0IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwYXRoID0gJy8nLCBtZXRob2QgPSAnZ2V0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoIHx8ICcvJztcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2QgfHwgJ2dldCc7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAvLyAtLS0tIC0tLS0gLS0tLSAtLS0tXHJcbiAgICAgICAgICAgIHRoaXMuYXR0ZW1wdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVsYXRpb25faWQgPSB1dGlscy5ndWlkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdHlwZSA9IHNkay5yZXNwb25zZV90eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGF0aChwYXRoKSB7IHRoaXMucGF0aCA9IHBhdGg7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0UGFyYW1zKHBhcmFtcykgeyB0aGlzLnBhcmFtcyA9IChwYXJhbXMgJiYgcGFyYW1zLmlzUXVlcnlGaWx0ZXIgJiYgKHBhcmFtcy5pc1F1ZXJ5RmlsdGVyKCkgPT09IHRydWUpKT8gcGFyYW1zLmJ1aWxkKCkgOiBwYXJhbXM7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0TWV0aG9kKG1ldGhvZCkgeyB0aGlzLm1ldGhvZCA9IG1ldGhvZDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRCb2R5KGJvZHkpIHsgdGhpcy5ib2R5ID0gYm9keTsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRIZWFkZXJzKGhlYWRlcnMpIHsgdGhpcy5oZWFkZXJzID0gaGVhZGVyczsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgbmV3QXR0ZW1wdCgpIHsgdGhpcy5hdHRlbXB0Kys7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3QgT3B0aW9uc1xyXG4gICAgICAgIGdldCByYXdfcmVzcG9uc2UoKSB7IHJldHVybiAodGhpcy5yZXNwb25zZVR5cGUgPT0gJ3JhdycpOyB9XHJcbiAgICAgICAgc2V0IHJhd19yZXNwb25zZShyYXcpIHsgdGhpcy5yZXNwb25zZV90eXBlID0gKHJhdyAmJiAocmF3ID09PSB0cnVlKSk/ICdyYXcnIDogJ25vcm1hbGl6ZWQnOyB9XHJcbiAgICAgICAgcmVzcG9uc2VUeXBlKHR5cGUpIHsgdGhpcy5yZXNwb25zZV90eXBlID0gdHlwZT8gdHlwZSA6IHNkay5yZXNwb25zZV90eXBlOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IHJlYWxseSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgYmVpbmcgc2V0dGVkXHJcbiAgICAgICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VUeXBlKG9wdGlvbnMucmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBBcGlDbGllbnQgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgICAgICBjaGVja0FwaUNvbmZpZyhjb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgc2V0QXhpb3NDb25maWcoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF1dGhlbnRpY2F0ZSgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGF1dGhDb25maWcgPSB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWF1dGhDb25maWcgfHwgIWF1dGhDb25maWcuaXNBdXRoQ29uZmlnIHx8IChhdXRoQ29uZmlnLmlzQXV0aENvbmZpZygpICE9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgYXV0aENvbmZpZyA9IG5ldyBhdXRoLkNsaWVudENyZWRlbnRpYWxzKClcclxuICAgICAgICAgICAgICAgICAgICAuY2xpZW50SWQodGhpcy5jb25maWcuY2xpZW50X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWVudFNlY3JldCh0aGlzLmNvbmZpZy5jbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZygndXNpbmcgY3VzdG9tIGF1dGhlbnRpY2F0aW9uIGNvbmZpZzogJyArIGF1dGhDb25maWcuZ3JhbnRfdHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhDb25maWcuY2xpZW50X2lkICYmIHRoaXMuY29uZmlnLmNsaWVudF9pZCkgYXV0aENvbmZpZy5jbGllbnRJZCh0aGlzLmNvbmZpZy5jbGllbnRfaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXV0aC5hdXRoZW50aWNhdGUoYXV0aENvbmZpZykudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbi5hY2Nlc3NfdG9rZW47IH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNhbGwoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVzc2FnZShtc2cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZD8gYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gYCA6ICcnKS5jb25jYXQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3QubmV3QXR0ZW1wdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZV9wYXRoID0gKCh0aGlzLmNvbmZpZy5iYXNlX3BhdGggIT0gdW5kZWZpbmVkKT8gdGhpcy5jb25maWcuYmFzZV9wYXRoIDogJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSAodG8gYmUgcmVtb3ZlZClcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VfcGF0aCArIGFwaVJlcXVlc3QucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gYXBpUmVxdWVzdC5wYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGFwaVJlcXVlc3QubWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcXVlcnlTdHJpbmdcclxuICAgICAgICAgICAgbGV0IGNhbGxVcmwgPSBwYXRoO1xyXG4gICAgICAgICAgICBpZiAoKHBhcmFtcyAhPSB1bmRlZmluZWQpICYmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbXNba2V5XVxyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbFVybCA9IGNhbGxVcmwuY29uY2F0KCc/JykuY29uY2F0KHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ3BhdGg6ICcgKyBjYWxsVXJsKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXhpb3NDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGNhbGxVcmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCB8fCAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHNkay50aW1lb3V0LnJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnZSBjdXN0b20gYW5kIGRlZmF1bHQgaGVhZGVyc1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmRNYXAoYXhpb3NDb25maWcuaGVhZGVycywgYXBpUmVxdWVzdC5oZWFkZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvZHlcclxuICAgICAgICAgICAgaWYgKGFwaVJlcXVlc3QuYm9keSAhPSB1bmRlZmluZWQpIGF4aW9zQ29uZmlnLmRhdGEgPSBhcGlSZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXhfYXR0ZW1wdHMgPSBzZGsuYXV0aF9hdHRlbXB0cz8gc2RrLmF1dGhfYXR0ZW1wdHMgOiAxO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkIGV4ZWN1dGUgYXV0aGVudGljYXRpb24gdGhlbiByZS1leGVjdXRlIGNhbGxcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhY2Nlc3NfdG9rZW4gbnVsbCwgYXV0aGVudGljYXRpb24gcmVxdWlyZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKyt0aGlzLmF1dGhfYXR0ZW1wdHMgPiBtYXhfYXR0ZW1wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNkay50aW1lb3V0LnJldHJ5KSB0aHJvdyBgUmVhY2hlZCBtYXhpbXVtIG51bWJlciBvZiBhdXRoZW50aWNhdGlvbiBhdHRlbXB0cyAoJHttYXhfYXR0ZW1wdHN9KSBhbmQgbm8gcmV0cnkgdGltZW91dCBjb25maWd1cmVkYDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNsZWVwKHNkay50aW1lb3V0LnJldHJ5LCBtZXNzYWdlKCdhbm90aGVyIGF1dGggcmVxdWVzdCBpcyBpbiBwcm9ncmVzcycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7IHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCkgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZSgpLnRoZW4oYWNjZXNzX3Rva2VuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdleGVjdXRpbmcgYXBpIGNhbGwgLi4uJykpO1xyXG4gICAgICAgICAgICAgICAgYXhpb3NDb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXBpIGNhbGwgc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoZXJyb3I/IGVycm9yIDogJ2Vycm9yIGRldGVjdGVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCd0aW1lb3V0IGV4Y2VwdGlvbjonICsgZXJyb3IuY29uZmlnLnRpbWVvdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcGkgZXJyb25lb3VzbHkgcmV0dXJuIGNvZGUgNDAxIGluc3RlYWQgb2YgY29kZSA0MDMgZm9yIFVOQVVUSE9SSVpFRCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgJiYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLmNvZGUgPT0gJ0lOVkFMSURfVE9LRU4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2ludmFsaWQgdG9rZW4sIGFjY2VzcyBkZW5pZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJjb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGNsYXllcjoge1xyXG5cclxuICAgICAgICBkZWZhdWx0IDogdHJ1ZSxcclxuXHJcbiAgICAgICAgYXV0aGVudGljYXRpb24gIDogbnVsbCxcclxuICBcclxuICAgICAgICBjbGllbnRfaWQgICAgICAgOiBudWxsLFxyXG4gICAgICAgIG1hcmtldF9pZCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgY2xpZW50X3NlY3JldCAgIDogbnVsbCxcclxuICAgICAgICBiYXNlX3VybCAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfcGF0aCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgY291bnRyeV9jb2RlICAgIDogJ1VTJyxcclxuICAgICAgICBsYW5ndWFnZV9jb2RlICAgOiAnZW4nLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2RrOiB7XHJcbiAgICAgICAgZGVidWcgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBkZWJ1ZyBtb2RlIGFjdGl2YXRlZFxyXG4gICAgICAgIGNvbnNvbGUgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gbG9nIHRvIGNvbnNvbGUgZW5hYmxlZFxyXG4gICAgICAgIHRyYWNlICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gdHJhY2UgY2xpZW50IHJlcXVlc3QvcmVzcG9uc2UgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNwb25zZSBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICB0aW1lb3V0IDogeyAvLyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgcmV0cnkgOiAyNTAsICAgIC8vIHJldHJ5IGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCA6IDIwMDAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImNvbnN0IG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ2pzb24tYXBpLW5vcm1hbGl6ZScpXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXHJcbmNvbnN0IG1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2VyaWFsaXplID0gKGJvZHkpID0+IHtcclxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkgcmV0dXJuIGJvZHk7XHJcbiAgICAvLyBObyBkYXRhID0gUGxhaW4gT2JqZWN0IG9yIEFwaSBSZXNvdXJjZVxyXG4gICAgZWxzZSByZXR1cm4gKGJvZHkuZGF0YSA9PSB1bmRlZmluZWQpPyBuZXcgSnNvbkFwaVJlc291cmNlKGJvZHkpLnNlcmlhbGl6ZSgpIDogYm9keTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplID0gKGphcGkpID0+IHtcclxuICAgIGlmIChqYXBpID09IHVuZGVmaW5lZCkgcmV0dXJuIGphcGk7XHJcbiAgICBlbHNlIHJldHVybiAoamFwaS5kYXRhID09IHVuZGVmaW5lZCk/IGphcGkgOiBuZXcgSnNvbkFwaVJlc291cmNlKGphcGkpLmRlc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5ub3JtYWxpemUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShkYXRhKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEpzb25BcGlSZXNvdXJjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2UgPSB7fSkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlLmRhdGEgIT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhLmF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogcG9ydGFyZSBpZCBlIHR5cGUgaW4gdGVzdGEgYWQgb2duaSBvYmplY3RcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gdGhpcy5yZXNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoWydpZCcsICd0eXBlJ10uaW5jbHVkZXMoa2V5KSkgdGhpcy5kYXRhW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5pc0FwaVJlc291cmNlICYmIGZpZWxkLmlzQXBpUmVzb3VyY2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHNba2V5LnN0YXJ0c1dpdGgoJ19fJyk/IGtleS5zdWJzdHIoJ19fJy5sZW5ndGgpIDoga2V5XSA9IHsgZGF0YTogeyB0eXBlOiBmaWVsZC50eXBlLCBpZDogZmllbGQuaWQgfSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpICYmIGtleS5zdGFydHNXaXRoKCdfXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRhdGEuYXR0cmlidXRlc1trZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2VyaWFsaXplKCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMucmVzb3VyY2UuZGF0YSA9PSB1bmRlZmluZWQpICYmIHRoaXMucmVzb3VyY2UuaXNBcGlSZXNvdXJjZSAmJiAodGhpcy5yZXNvdXJjZS5pc0FwaVJlc291cmNlKCkgPT09IHRydWUpKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnJlc291cmNlLmRhdGE7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBtb2RlbC5oZWxwZXIubmV3UmVzb3VyY2UoZGF0YS50eXBlLCBkYXRhLmlkLCBkYXRhLmF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgcmV0dXJuIHJlcztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5yZWxhdGlvbnNoaXBzKS5mb3JFYWNoKChyZWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbF9kYXRhID0gZGF0YS5yZWxhdGlvbnNoaXBzW3JlbF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKHJlbF9kYXRhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVsX2RhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbFJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZShyZWxfZGF0YS50eXBlLCByZWxfZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldFJlc291cmNlKHJlbCwgcmVsUmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5jID0ganNvbmFwaUluY2x1ZGVkKHRoaXMucmVzb3VyY2UsIHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxSZXMuc2V0RmllbGRzKGluYy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBqc29uYXBpSW5jbHVkZWQoZGF0YSwgdHlwZSwgaWQpIHtcclxuICAgIGlmICgoZGF0YSA9PSB1bmRlZmluZWQpIHx8IChkYXRhLmluY2x1ZGVkID09IHVuZGVmaW5lZCkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaW5jUmVzID0gdW5kZWZpbmVkO1xyXG4gICAgZGF0YS5pbmNsdWRlZC5mb3JFYWNoKGluYyA9PiB7XHJcbiAgICAgICAgaWYgKChpbmMudHlwZSA9PSB0eXBlKSAmJiAoaW5jLmlkID09IGlkKSkgaW5jUmVzID0gaW5jO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBpbmNSZXM7XHJcbn1cclxuIiwiY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG1zZyA6IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsuY29uc29sZSkgY29uc29sZS5sb2coKG1lc3NhZ2UgPT0gdW5kZWZpbmVkKT8gJycgOiBtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlIDogKCkgPT4ge1xyXG4gICAgICAgIHNkay5jb25zb2xlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZSA6ICgpID0+IHtcclxuICAgICAgICBzZGsuY29uc29sZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9iZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nIGVuYWJsZWQ6ICcgKyBzZGsuY29uc29sZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lmIGxvZyBpcyBlbmFibGVkIGJ1dCBpcyBub3QgdmlzaWJsZSBtYXliZSB5b3UgYXJlIG5vdCBpbiBkZWJ1ZyBtb2RlJylcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGVuYWJsZWQoKSB7IHJldHVybiBzZGsuY29uc29sZSA9PT0gdHJ1ZTsgfVxyXG5cclxufSIsIi8vIEZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXQgMTUvMDIvMjAxOSAxMjowNjo0MyBieSBjb21tZXJjZWxheWVyLWpzLXNkay1jb2RlZ2VuXHJcblxyXG5cclxuLy8gQmFzaWMgQWJzdHJhY3QgUmVzb3VyY2VcclxuY2xhc3MgUmVzb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHR5cGUsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaXNBcGlSZXNvdXJjZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHNldFJlc291cmNlKGZpZWxkLCByZXMpIHsgaWYgKChyZXMgIT0gdW5kZWZpbmVkKSAmJiByZXMuaXNBcGlSZXNvdXJjZSAmJiByZXMuaXNBcGlSZXNvdXJjZSgpKSB0aGlzWydfXycuY29uY2F0KGZpZWxkKV0gPSByZXM7IH1cclxuXHRnZXRSZXNvdXJjZShmaWVsZCkgeyByZXR1cm4gdGhpc1snX18nLmNvbmNhdChmaWVsZCldOyB9XHJcblx0c2V0RmllbGRzKGZpZWxkcyA9IHt9KSB7IE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmaWVsZCA9PiB7IHRoaXNbZmllbGRdID0gZmllbGRzW2ZpZWxkXSB9KTsgcmV0dXJuIHRoaXM7IH1cclxuXHRzZXRGaWVsZChuYW1lLCB2YWx1ZSkgeyBpZiAobmFtZSkgdGhpc1tuYW1lXSA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdhZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBBZGRyZXNzLlRZUEUpO1xyXG5cdFx0dGhpcy5idXNpbmVzcyA9IGZpZWxkcy5idXNpbmVzcztcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5jb21wYW55ID0gZmllbGRzLmNvbXBhbnk7XHJcblx0XHR0aGlzLmxpbmVfMSA9IGZpZWxkcy5saW5lXzE7XHJcblx0XHR0aGlzLmxpbmVfMiA9IGZpZWxkcy5saW5lXzI7XHJcblx0XHR0aGlzLmNpdHkgPSBmaWVsZHMuY2l0eTtcclxuXHRcdHRoaXMuemlwX2NvZGUgPSBmaWVsZHMuemlwX2NvZGU7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGUgPSBmaWVsZHMuc3RhdGVfY29kZTtcclxuXHRcdHRoaXMuY291bnRyeV9jb2RlID0gZmllbGRzLmNvdW50cnlfY29kZTtcclxuXHRcdHRoaXMucGhvbmUgPSBmaWVsZHMucGhvbmU7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5ub3RlcyA9IGZpZWxkcy5ub3RlcztcclxuXHRcdHRoaXMubGF0ID0gZmllbGRzLmxhdDtcclxuXHRcdHRoaXMubG5nID0gZmllbGRzLmxuZztcclxuXHRcdHRoaXMuYmlsbGluZ19pbmZvID0gZmllbGRzLmJpbGxpbmdfaW5mbztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGdlb2NvZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdnZW9jb2RlcicsIHZhbHVlKSB9XHJcblx0Z2V0IGdlb2NvZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2dlb2NvZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWRpdCBDYXJkIHJlc291cmNlXHJcbmNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3JlZGl0X2NhcmRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3JlZGl0Q2FyZC5UWVBFKTtcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5udW1iZXIgPSBmaWVsZHMubnVtYmVyO1xyXG5cdFx0dGhpcy5tb250aCA9IGZpZWxkcy5tb250aDtcclxuXHRcdHRoaXMueWVhciA9IGZpZWxkcy55ZWFyO1xyXG5cdFx0dGhpcy52ZXJpZmljYXRpb25fdmFsdWUgPSBmaWVsZHMudmVyaWZpY2F0aW9uX3ZhbHVlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lckFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJBZGRyZXNzLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUGFzc3dvcmQgUmVzZXQgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJQYXNzd29yZFJlc2V0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyUGFzc3dvcmRSZXNldC5UWVBFKTtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcblx0XHR0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG5cdFx0dGhpcy5fcmVzZXRfcGFzc3dvcmRfdG9rZW4gPSBmaWVsZHMuX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBQYXltZW50IFNvdXJjZSByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBheW1lbnRTb3VyY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXltZW50U291cmNlLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IHBheW1lbnRfc291cmNlKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclN1YnNjcmlwdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9zdWJzY3JpcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJTdWJzY3JpcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lci5UWVBFKTtcclxuXHRcdHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcblx0XHR0aGlzLnBhc3N3b3JkID0gZmllbGRzLnBhc3N3b3JkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBEZWxpdmVyeSBMZWFkIFRpbWUgcmVzb3VyY2VcclxuY2xhc3MgRGVsaXZlcnlMZWFkVGltZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdkZWxpdmVyeV9sZWFkX3RpbWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgRGVsaXZlcnlMZWFkVGltZS5UWVBFKTtcclxuXHRcdHRoaXMubWluX2hvdXJzID0gZmllbGRzLm1pbl9ob3VycztcclxuXHRcdHRoaXMubWF4X2hvdXJzID0gZmllbGRzLm1heF9ob3VycztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW52ZW50b3J5IE1vZGVsIHJlc291cmNlXHJcbmNsYXNzIEludmVudG9yeU1vZGVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ludmVudG9yeV9tb2RlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbnZlbnRvcnlNb2RlbC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtT3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTGluZUl0ZW1PcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBmaWVsZHMub3B0aW9ucztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGxpbmVfaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbGluZV9pdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgbGluZV9pdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScpIH1cclxuXHRzZXQgc2t1X29wdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1X29wdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdV9vcHRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1X29wdGlvbicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLl91cGRhdGVfcXVhbnRpdHkgPSBmaWVsZHMuX3VwZGF0ZV9xdWFudGl0eTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcblx0c2V0IGl0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2l0ZW0nLCB2YWx1ZSkgfVxyXG5cdGdldCBpdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2l0ZW0nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWFya2V0IHJlc291cmNlXHJcbmNsYXNzIE1hcmtldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtYXJrZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWFya2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtZXJjaGFudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWVyY2hhbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtZXJjaGFudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtZXJjaGFudCcpIH1cclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuXHRzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG5cdGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1lcmNoYW50IHJlc291cmNlXHJcbmNsYXNzIE1lcmNoYW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ21lcmNoYW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1lcmNoYW50LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE9yZGVyIHJlc291cmNlXHJcbmNsYXNzIE9yZGVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ29yZGVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE9yZGVyLlRZUEUpO1xyXG5cdFx0dGhpcy5ndWVzdCA9IGZpZWxkcy5ndWVzdDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcblx0XHR0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG5cdFx0dGhpcy5sYW5ndWFnZV9jb2RlID0gZmllbGRzLmxhbmd1YWdlX2NvZGU7XHJcblx0XHR0aGlzLnNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrID0gZmllbGRzLnNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrO1xyXG5cdFx0dGhpcy5jb3Vwb25fY29kZSA9IGZpZWxkcy5jb3Vwb25fY29kZTtcclxuXHRcdHRoaXMuY2FydF91cmwgPSBmaWVsZHMuY2FydF91cmw7XHJcblx0XHR0aGlzLnJldHVybl91cmwgPSBmaWVsZHMucmV0dXJuX3VybDtcclxuXHRcdHRoaXMudGVybXNfdXJsID0gZmllbGRzLnRlcm1zX3VybDtcclxuXHRcdHRoaXMucHJpdmFjeV91cmwgPSBmaWVsZHMucHJpdmFjeV91cmw7XHJcblx0XHR0aGlzLl9wbGFjZSA9IGZpZWxkcy5fcGxhY2U7XHJcblx0XHR0aGlzLl9jYW5jZWwgPSBmaWVsZHMuX2NhbmNlbDtcclxuXHRcdHRoaXMuX2FwcHJvdmUgPSBmaWVsZHMuX2FwcHJvdmU7XHJcblx0XHR0aGlzLl91cGRhdGVfdGF4ZXMgPSBmaWVsZHMuX3VwZGF0ZV90YXhlcztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZDtcclxuXHRcdHRoaXMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkID0gZmllbGRzLl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZDtcclxuXHRcdHRoaXMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZztcclxuXHRcdHRoaXMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0ID0gZmllbGRzLl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldDtcclxuXHRcdHRoaXMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2s7XHJcblx0XHR0aGlzLl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3JlZnJlc2ggPSBmaWVsZHMuX3JlZnJlc2g7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBzaGlwcGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJykgfVxyXG5cdHNldCBiaWxsaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGJpbGxpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IHBheW1lbnRfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJjZWwgcmVzb3VyY2VcclxuY2xhc3MgUGFyY2VsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BhcmNlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXJjZWwuVFlQRSk7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG5cdFx0dGhpcy5lZWxfcGZjID0gZmllbGRzLmVlbF9wZmM7XHJcblx0XHR0aGlzLmNvbnRlbnRzX3R5cGUgPSBmaWVsZHMuY29udGVudHNfdHlwZTtcclxuXHRcdHRoaXMuY29udGVudHNfZXhwbGFuYXRpb24gPSBmaWVsZHMuY29udGVudHNfZXhwbGFuYXRpb247XHJcblx0XHR0aGlzLmN1c3RvbXNfY2VydGlmeSA9IGZpZWxkcy5jdXN0b21zX2NlcnRpZnk7XHJcblx0XHR0aGlzLmN1c3RvbXNfc2lnbmVyID0gZmllbGRzLmN1c3RvbXNfc2lnbmVyO1xyXG5cdFx0dGhpcy5ub25fZGVsaXZlcnlfb3B0aW9uID0gZmllbGRzLm5vbl9kZWxpdmVyeV9vcHRpb247XHJcblx0XHR0aGlzLnJlc3RyaWN0aW9uX3R5cGUgPSBmaWVsZHMucmVzdHJpY3Rpb25fdHlwZTtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fY29tbWVudHMgPSBmaWVsZHMucmVzdHJpY3Rpb25fY29tbWVudHM7XHJcblx0XHR0aGlzLmN1c3RvbXNfaW5mb19yZXF1aXJlZCA9IGZpZWxkcy5jdXN0b21zX2luZm9fcmVxdWlyZWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwbWVudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcG1lbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwbWVudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwbWVudCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXltZW50IE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBQYXltZW50TWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BheW1lbnRfbWV0aG9kcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBheW1lbnRNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLnBheW1lbnRfc291cmNlX3R5cGUgPSBmaWVsZHMucGF5bWVudF9zb3VyY2VfdHlwZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgcGF5bWVudF9nYXRld2F5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X2dhdGV3YXkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheXBhbCBQYXltZW50IHJlc291cmNlXHJcbmNsYXNzIFBheXBhbFBheW1lbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5cGFsX3BheW1lbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5cGFsUGF5bWVudC5UWVBFKTtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy5jYW5jZWxfdXJsID0gZmllbGRzLmNhbmNlbF91cmw7XHJcblx0XHR0aGlzLm5vdGVfdG9fcGF5ZXIgPSBmaWVsZHMubm90ZV90b19wYXllcjtcclxuXHRcdHRoaXMucGF5cGFsX3BheWVyX2lkID0gZmllbGRzLnBheXBhbF9wYXllcl9pZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFByaWNlIExpc3QgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2VMaXN0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3ByaWNlX2xpc3RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2VMaXN0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmN1cnJlbmN5X2NvZGUgPSBmaWVsZHMuY3VycmVuY3lfY29kZTtcclxuXHRcdHRoaXMudGF4X2luY2x1ZGVkID0gZmllbGRzLnRheF9pbmNsdWRlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2UuVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5hbW91bnRfY2VudHMgPSBmaWVsZHMuYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cyA9IGZpZWxkcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwbWVudCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwbWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwbWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwbWVudC5UWVBFKTtcclxuXHRcdHRoaXMuX29uX2hvbGQgPSBmaWVsZHMuX29uX2hvbGQ7XHJcblx0XHR0aGlzLl9waWNraW5nID0gZmllbGRzLl9waWNraW5nO1xyXG5cdFx0dGhpcy5fcGFja2luZyA9IGZpZWxkcy5fcGFja2luZztcclxuXHRcdHRoaXMuX3JlYWR5X3RvX3NoaXAgPSBmaWVsZHMuX3JlYWR5X3RvX3NoaXA7XHJcblx0XHR0aGlzLl9zaGlwID0gZmllbGRzLl9zaGlwO1xyXG5cdFx0dGhpcy5fZ2V0X3JhdGVzID0gZmllbGRzLl9nZXRfcmF0ZXM7XHJcblx0XHR0aGlzLnNlbGVjdGVkX3JhdGVfaWQgPSBmaWVsZHMuc2VsZWN0ZWRfcmF0ZV9pZDtcclxuXHRcdHRoaXMuX3B1cmNoYXNlID0gZmllbGRzLl9wdXJjaGFzZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBDYXRlZ29yeSByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ0NhdGVnb3J5IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX2NhdGVnb3JpZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ0NhdGVnb3J5LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ01ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuXHRcdHRoaXMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBzaGlwcGluZ196b25lKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ196b25lJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfem9uZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ196b25lJykgfVxyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBab25lIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nWm9uZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ196b25lcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nWm9uZS5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMuY291bnRyeV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMuc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X3N0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3N0YXRlX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLnppcF9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfemlwX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3ppcF9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIFNrdU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3Vfb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNrdU9wdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5kZWxheV9ob3VycyA9IGZpZWxkcy5kZWxheV9ob3VycztcclxuXHRcdHRoaXMuc2t1X2NvZGVfcmVnZXggPSBmaWVsZHMuc2t1X2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2t1IHJlc291cmNlXHJcbmNsYXNzIFNrdSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1LlRZUEUpO1xyXG5cdFx0dGhpcy5jb2RlID0gZmllbGRzLmNvZGU7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBmaWVsZHMuZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcblx0XHR0aGlzLnRhZ19uYW1lcyA9IGZpZWxkcy50YWdfbmFtZXM7XHJcblx0XHR0aGlzLnBpZWNlc19wZXJfcGFjayA9IGZpZWxkcy5waWVjZXNfcGVyX3BhY2s7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0l0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0l0ZW0uVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgTGV2ZWwgcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tMZXZlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19sZXZlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0xldmVsLlRZUEUpO1xyXG5cdFx0dGhpcy5wcmlvcml0eSA9IGZpZWxkcy5wcmlvcml0eTtcclxuXHRcdHRoaXMub25faG9sZCA9IGZpZWxkcy5vbl9ob2xkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMb2NhdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xvY2F0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xvY2F0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTG9jYXRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMubGFiZWxfZm9ybWF0ID0gZmllbGRzLmxhYmVsX2Zvcm1hdDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gV2ViaG9vayByZXNvdXJjZVxyXG5jbGFzcyBXZWJob29rIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dlYmhvb2tzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2ViaG9vay5UWVBFKTtcclxuXHRcdHRoaXMudG9waWMgPSBmaWVsZHMudG9waWM7XHJcblx0XHR0aGlzLmNhbGxiYWNrX3VybCA9IGZpZWxkcy5jYWxsYmFja191cmw7XHJcblx0XHR0aGlzLmluY2x1ZGVfcmVzb3VyY2VzID0gZmllbGRzLmluY2x1ZGVfcmVzb3VyY2VzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBXaXJlIFRyYW5zZmVyIHJlc291cmNlXHJcbmNsYXNzIFdpcmVUcmFuc2ZlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3aXJlX3RyYW5zZmVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdpcmVUcmFuc2Zlci5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEFkZHJlc3MsXHJcblx0Q3JlZGl0Q2FyZCxcclxuXHRDdXN0b21lckFkZHJlc3MsXHJcblx0Q3VzdG9tZXJQYXNzd29yZFJlc2V0LFxyXG5cdEN1c3RvbWVyUGF5bWVudFNvdXJjZSxcclxuXHRDdXN0b21lclN1YnNjcmlwdGlvbixcclxuXHRDdXN0b21lcixcclxuXHREZWxpdmVyeUxlYWRUaW1lLFxyXG5cdEludmVudG9yeU1vZGVsLFxyXG5cdExpbmVJdGVtT3B0aW9uLFxyXG5cdExpbmVJdGVtLFxyXG5cdE1hcmtldCxcclxuXHRNZXJjaGFudCxcclxuXHRPcmRlcixcclxuXHRQYXJjZWwsXHJcblx0UGF5bWVudE1ldGhvZCxcclxuXHRQYXlwYWxQYXltZW50LFxyXG5cdFByaWNlTGlzdCxcclxuXHRQcmljZSxcclxuXHRTaGlwbWVudCxcclxuXHRTaGlwcGluZ0NhdGVnb3J5LFxyXG5cdFNoaXBwaW5nTWV0aG9kLFxyXG5cdFNoaXBwaW5nWm9uZSxcclxuXHRTa3VPcHRpb24sXHJcblx0U2t1LFxyXG5cdFN0b2NrSXRlbSxcclxuXHRTdG9ja0xldmVsLFxyXG5cdFN0b2NrTG9jYXRpb24sXHJcblx0V2ViaG9vayxcclxuXHRXaXJlVHJhbnNmZXIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gKioqKioqKioqKiBIZWxwZXIgKioqKioqKioqKiAvL1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaGVscGVyID0ge307XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5oZWxwZXIubmV3UmVzb3VyY2UgPSAodHlwZSwgaWQsIGZpZWxkcykgPT4ge1xyXG5cdGxldCBpbnN0YW5jZSA9IHVuZGVmaW5lZDtcclxuXHRsZXQgbW9kZWwgPSBtb2R1bGUuZXhwb3J0cztcclxuXHRPYmplY3Qua2V5cyhtb2RlbCkuZm9yRWFjaCgoY2wpID0+IHtcclxuXHRcdGlmICghY2wuc3RhcnRzV2l0aCgnaGVscGVyJykpIHtcclxuXHRcdFx0bGV0IGNsX3R5cGUgPSBtb2RlbFtjbF0uVFlQRTtcclxuXHRcdFx0aWYgKGNsX3R5cGUgJiYgKGNsX3R5cGUgPT0gdHlwZSkpIHtcclxuXHRcdFx0XHRpbnN0YW5jZSA9IG5ldyBtb2RlbFtjbF0oaWQsIGZpZWxkcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmhlbHBlci5pc0FwaVJlc291cmNlID0gKHJlcykgPT4ge1xyXG5cdHJldHVybiAocmVzICYmIHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSk7XHJcbn1cclxuIiwiXHJcbmNsYXNzIFF1ZXJ5RmlsdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3BhcnNlX2ZpZWxkc2V0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmllbGRzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXN0b21fcGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1F1ZXJ5RmlsdGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHNvcnQoZmllbGQsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzLnB1c2goKGRlc2NlbmRpbmc/ICctJyA6ICcnKS5jb25jYXQoZmllbGQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHMocmVzb3VyY2UsIC4uLmZpZWxkcykge1xyXG4gICAgICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkKSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzb3VyY2VdID0gZmllbGRzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluY2x1ZGUoLi4ucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgLy8gaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHJlc291cmNlcy5mb3JFYWNoKHJlcyA9PiB7IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzKSB9KVxyXG4gICAgICAgIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlc291cmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGZpbHRlciAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcnMoZmlsdGVycykge1xyXG4gICAgICAgIGlmIChmaWx0ZXJzICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaChmaWx0ZXIgPT4geyB0aGlzLmZpbHRlcihmaWx0ZXIsIGZpbHRlcnNbZmlsdGVyXSkgfSlcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKChrZXkgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkgdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4geyB0aGlzLnBhcmFtKGtleSwgcGFyYW1zW2tleV0pIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSAodGhpcy5wYWdlX251bWJlciAmJiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMucGFnZU51bWJlcikpPyBwYWdlX251bWJlcisrIDogMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZChqb2luKSB7XHJcblxyXG4gICAgICAgIGxldCBxc01hcCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5mb3JFYWNoKGZpbHRlciA9PiB7IHFzTWFwW2BmaWx0ZXJbJHtmaWx0ZXJ9XWBdID0gdGhpcy5maWx0ZXJfZmllbGRzW2ZpbHRlcl0gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5jbHVkZWQgUmVzb3VyY2VzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5pbmNsdWRlID0gdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBTcGFyc2UgRmllbGRzZXRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5mb3JFYWNoKHJlcyA9PiB7IHFzTWFwW2BmaWVsZHNbJHtyZXN9XWBdID0gdGhpcy5zcGFyc2VfZmllbGRzZXRzW3Jlc10uam9pbignLCcpIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNvcnRfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5zb3J0ID0gdGhpcy5zb3J0X2ZpZWxkcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBQYXJhbXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmZvckVhY2goa2V5ID0+IHsgcXNNYXBba2V5XSA9IHRoaXMuY3VzdG9tX3BhcmFtc1trZXldIH0pXHJcblxyXG4gICAgICAgIC8vIFBhZ2luYXRpb25cclxuICAgICAgICBpZiAodGhpcy5wYWdlX251bWJlciAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW251bWJlcl0nXSA9IHRoaXMucGFnZV9udW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9zaXplICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2Vbc2l6ZV0nXSA9IHRoaXMucGFnZV9zaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gIWpvaW4/IHFzTWFwIDogT2JqZWN0LmtleXMocXNNYXApLm1hcChrZXkgPT4geyByZXR1cm4ga2V5Kyc9Jytxc01hcFtrZXldIH0pLmpvaW4oJyYnKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBRdWVyeUZpbHRlclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5uZXdJbnN0YW5jZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUXVlcnlGaWx0ZXIoKTtcclxufVxyXG4iLCJcclxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi9sb2cnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbG9nIDogKG1lc3NhZ2UpID0+IHsgICAgLy8gQldDXHJcbiAgICAgICAgbG9nLm1zZyhtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZW5kTWFwIDogKG1hcCwgZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKG1hcCA9PSB1bmRlZmluZWQpIG1hcCA9IHt9O1xyXG4gICAgICAgIGlmIChleHQgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhleHQpLmZvckVhY2goa2V5ID0+IHsgbWFwW2tleV0gPSBleHRba2V5XTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2VNYXBzIDogKG1hcDEsIG1hcDIpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5tYXAxLCAuLi5tYXAyIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xvbmVNYXAgOiAobWFwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChtYXAgPT0gdW5kZWZpbmVkKT8gbWFwIDogeyAuLi5tYXAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgc2xlZXAgOiAobXMsIG1zZykgPT4ge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzLmxvZygobXNnPyBgJHttc2d9IC0gYCA6ICcnKS5jb25jYXQoYHdhaXRpbmcgJHttc30gbXNlY3MgLi4uYCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ3VpZCA6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgJy4nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikuc3Vic3RyKDAsIDYpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuanNvbkFwaU5vcm1hbGl6ZSA9IGZhY3RvcnkoKTtcbiAgICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBOb3JtYWxpemVyKGRhdGFzZXQsIHByb3BlcnR5KSB7XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vcm1hbGl6ZXIpKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplckluc3RhbmNlID0gbmV3IE5vcm1hbGl6ZXIoZGF0YXNldCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHkgPyBub3JtYWxpemVySW5zdGFuY2UuZ2V0KHByb3BlcnR5KSA6IG5vcm1hbGl6ZXJJbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YXNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGFzZXQgPSBKU09OLnBhcnNlKGRhdGFzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhc2V0IHx8ICFkYXRhc2V0LmRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBqc29uIGFwaSBub3JtYWxpemVyIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmlzQ29sbGVjdGlvbiA9IGlzQXJyYXkoZGF0YXNldC5kYXRhKTtcblxuICAgICAgICB0aGlzLmhheXN0YWNrID0gYnVpbGRIYXlzdGFjayhkYXRhc2V0LmluY2x1ZGVkLCB0aGlzLmlzQ29sbGVjdGlvbiA/IGRhdGFzZXQuZGF0YSA6IFtkYXRhc2V0LmRhdGFdKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkSGF5c3RhY2soaW5jbHVkZWQsIGFkZGl0aW9uYWxJdGVtcykge1xuXG4gICAgICAgIHZhciBzaWduYXR1cmVzID0gW107XG4gICAgICAgIHZhciBoYXlzdGFjayA9IGluY2x1ZGVkIHx8IFtdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgc2lnbmF0dXJlcy5wdXNoKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWFjaChhZGRpdGlvbmFsSXRlbXMsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZXMuaW5kZXhPZihlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaGF5c3RhY2sucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGtleSkgJiYgY2FsbGJhY2suY2FsbChjb250ZXh0LCBrZXksIGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGl0ZW0sIGtleSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0LCBvYmopIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvdXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgKG91dFtrZXldID0ge30pO1xuICAgICAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciBkYXRhID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eVRyZWUsIGZ1bmN0aW9uKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICBpZiAoIXJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHJlbGF0ZWRFbnRpdHkgPyBuZXcgTm9ybWFsaXplcih7ZGF0YTogcmVsYXRlZEVudGl0eSwgaW5jbHVkZWQ6IGhheXN0YWNrfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRSZWxhdGlvbkRhdGEocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KSB7XG5cbiAgICAgICAgcmV0dXJuIFsnaWQnLCAndHlwZSddLmluZGV4T2YocHJvcGVydHkpID49IDAgPyBlbnRpdHlbcHJvcGVydHldIDogZW50aXR5LmF0dHJpYnV0ZXNbcHJvcGVydHldO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRpb25EYXRhKHJlbGF0aW9uTmFtZSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdLmRhdGE7XG4gICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gcmVsYXRpb25EYXRhICYmIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkocmVsYXRlZEVudGl0eSkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcChyZWxhdGVkRW50aXR5LCBmdW5jdGlvbihzaW5nbGVSZWxhdGVkRW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCBzaW5nbGVSZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFyZWxhdGVkRW50aXR5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUmVsYXRpb24ocHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHJldHVybiBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbChuZXcgTm9ybWFsaXplcih7XG4gICAgICAgICAgICBkYXRhOiByZWxhdGVkRW50aXR5LFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGhheXN0YWNrXG4gICAgICAgIH0pLCBwcm9wZXJ0eVRyZWUpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICB2YXIgc2VhcmNoID0gaXNBcnJheShyZWxhdGlvbkRhdGEpID8gbWFwKHJlbGF0aW9uRGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQ7XG4gICAgICAgIH0pIDogW3JlbGF0aW9uRGF0YS50eXBlICsgJ0AnICsgcmVsYXRpb25EYXRhLmlkXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBzZWFyY2guaW5kZXhPZihpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkKSA+PSAwICYmIHRlbXAucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXAubGVuZ3RoID09PSAxICYmICFpc0FycmF5KHJlbGF0aW9uRGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9OZXN0ZWRPYmplY3QoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIHRlbXAgPSBvYmo7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2NvbGxlY3Rpb25baV1dID0gdGVtcFtjb2xsZWN0aW9uW2ldXSB8fCAoaSsxID09PSBjb2xsZWN0aW9uTGVuZ3RoID8gdW5kZWZpbmVkIDoge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUHJvcGVydHlUcmVlKHByb3BlcnR5TGlzdCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eUxpc3QsIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVBhcnRzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQodGVtcCwgYXJyYXlUb05lc3RlZE9iamVjdChwcm9wZXJ0eVBhcnRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbcHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlhUHJvcGVydHlUcmVlKHByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHRoaXMuZGF0YXNldC5kYXRhLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgdGhpcy5oYXlzdGFjayk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIHRoaXMuZGF0YXNldC5kYXRhLCB0aGlzLmhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBOb3JtYWxpemVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbCh0aGlzLCBidWlsZFByb3BlcnR5VHJlZShpc0FycmF5KHByb3BlcnR5KSA/IHByb3BlcnR5IDogW3Byb3BlcnR5XSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogbWFwKHJlc3VsdCwgZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbVtwcm9wZXJ0eV07IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogcmVzdWx0W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHJldHVybiBOb3JtYWxpemVyO1xuXG59KSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==