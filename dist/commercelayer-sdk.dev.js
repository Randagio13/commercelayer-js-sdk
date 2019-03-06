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

module.exports.queryx = __webpack_require__(/*! ./lib/queryx */ "./lib/queryx.js");

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
  if (response_type == undefined) return apiResponse;else switch (response_type) {
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
  if (error_type == undefined) return apiError;else switch (error_type) {
    case 'model':
      if (!apiError.response) return apiError;else if (apiError.response.data && apiError.response.data.errors) {
        return Promise.reject(errorResponse(apiError.response.status).addApiErrors(apiError.response.data.errors));
      } else return Promise.reject(errorResponse(apiError.response.status, apiError.response.statusText));

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

module.exports.settings = config.sdk; // Expose SDK constants
// module.exports.const = require('./const')
// SDK initialization

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
  if (config.client_id == undefined) throw 'missing client_id'; // TODO: verificare configurazione in base al tipo di autenticazione

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
    error_type: 'model',
    // Error formet, possible values are: jsonapi | model | raw
    timeout: {
      // in milliseconds
      retry: 250,
      // retry after authentication request in progress detected
      request: 2000 // client request timeout

    }
  }
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
        var key = 'filter[q][' + fields_.join('_or_') + '_' + type + ']';
        var val = Array.isArray(value) ? value.join(',') : value;
        this.predicates[key] = val;
      }

      return this;
    }
  }, {
    key: "explain",
    value: function explain(type) {
      return QueryExpression.explain(type);
    }
  }, {
    key: "build",
    value: function build(join) {
      var _this2 = this;

      var qsMap = _get(_getPrototypeOf(QueryExpression.prototype), "build", this).call(this, join);

      if (!join) Object.keys(this.predicates).forEach(function (p) {
        qsMap[p] = _this2.predicates[p];
      });else {
        if (qsMap.length > 0) qsMap += '&';
        qsMap += Object.keys(this.predicates).map(function (key) {
          return key + '=' + _this2.predicates[key];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9lcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2pzb25hcGkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9sb2cuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9tb2RlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3F1ZXJ5LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvcXVlcnl4LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9qc29uLWFwaS1ub3JtYWxpemUvc3JjL2pzb25BcGlOb3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJtb2RlbCIsInF1ZXJ5IiwicXVlcnl4IiwiY2xpZW50IiwibG9nIiwianNvbmFwaSIsImVycm9yUmVzcG9uc2UiLCJDTEFwaSIsImZpbHRlciIsIm9wdGlvbnMiLCJyZXF1ZXN0IiwibmV3UmVxdWVzdCIsInNldFBhcmFtcyIsInNldE9wdGlvbnMiLCJpZCIsImFkZHJlc3MiLCJzZXRCb2R5IiwiYWxsIiwibGlzdEFkZHJlc3NlcyIsImNyZWRpdF9jYXJkIiwibGlzdENyZWRpdENhcmRzIiwiY3VzdG9tZXJfYWRkcmVzcyIsImxpc3RDdXN0b21lckFkZHJlc3NlcyIsImN1c3RvbWVyX2dyb3VwIiwibGlzdEN1c3RvbWVyR3JvdXBzIiwiY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQiLCJsaXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cyIsImN1c3RvbWVyX3BheW1lbnRfc291cmNlIiwibGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMiLCJjdXN0b21lcl9zdWJzY3JpcHRpb24iLCJsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zIiwiY3VzdG9tZXIiLCJsaXN0Q3VzdG9tZXJzIiwiZGVsaXZlcnlfbGVhZF90aW1lIiwibGlzdERlbGl2ZXJ5TGVhZFRpbWVzIiwiaW1wb3J0XyIsImxpc3RJbXBvcnRzIiwiaW52ZW50b3J5X21vZGVsIiwibGlzdEludmVudG9yeU1vZGVscyIsImxpbmVfaXRlbV9vcHRpb24iLCJsaXN0TGluZUl0ZW1PcHRpb25zIiwibGluZV9pdGVtIiwibGlzdExpbmVJdGVtcyIsIm1hcmtldCIsImxpc3RNYXJrZXRzIiwibWVyY2hhbnQiLCJsaXN0TWVyY2hhbnRzIiwib3JkZXIiLCJsaXN0T3JkZXJzIiwicGFyY2VsIiwibGlzdFBhcmNlbHMiLCJwYXltZW50X21ldGhvZCIsImxpc3RQYXltZW50TWV0aG9kcyIsInBheXBhbF9wYXltZW50IiwibGlzdFBheXBhbFBheW1lbnRzIiwicHJpY2VfbGlzdCIsImxpc3RQcmljZUxpc3RzIiwicHJpY2UiLCJsaXN0UHJpY2VzIiwic2hpcG1lbnQiLCJsaXN0U2hpcG1lbnRzIiwic2hpcHBpbmdfY2F0ZWdvcnkiLCJsaXN0U2hpcHBpbmdDYXRlZ29yaWVzIiwic2hpcHBpbmdfbWV0aG9kIiwibGlzdFNoaXBwaW5nTWV0aG9kcyIsInNoaXBwaW5nX3pvbmUiLCJsaXN0U2hpcHBpbmdab25lcyIsInNrdV9vcHRpb24iLCJsaXN0U2t1T3B0aW9ucyIsInNrdSIsImxpc3RTa3VzIiwic3RvY2tfaXRlbSIsImxpc3RTdG9ja0l0ZW1zIiwic3RvY2tfbGV2ZWwiLCJsaXN0U3RvY2tMZXZlbHMiLCJzdG9ja19sb2NhdGlvbiIsImxpc3RTdG9ja0xvY2F0aW9ucyIsIndlYmhvb2siLCJsaXN0V2ViaG9va3MiLCJ3aXJlX3RyYW5zZmVyIiwibGlzdFdpcmVUcmFuc2ZlcnMiLCJhcGkiLCJjbGFwaSIsImluaXRpYWxpemUiLCJjZmciLCJtc2ciLCJuZXdJbnN0YW5jZSIsImFwaVJlcXVlc3QiLCJjb3JyZWxhdGlvbl9pZCIsImF0dGVtcHQiLCJwYXRoIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlamVjdCIsIm5ld0Vycm9yIiwiYm9keSIsInNlcmlhbGl6ZSIsImNhbGwiLCJ0aGVuIiwiYXBpUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlX3R5cGUiLCJjYXRjaCIsImFwaUVycm9yIiwiZXJyb3IiLCJlcnJvcl90eXBlIiwiZGVzZXJpYWxpemUiLCJkYXRhIiwibm9ybWFsaXplIiwiZXJyb3JzIiwic3RhdHVzIiwiYWRkQXBpRXJyb3JzIiwic3RhdHVzVGV4dCIsInJlcyIsImlzQXBpUmVzb3VyY2UiLCJkYXRhc2V0IiwibGlzdEZ1bmN0aW9uIiwic2V0UGFnZSIsInNpemUiLCJwYWdlX3NpemUiLCJudW1iZXIiLCJpc1F1ZXJ5RmlsdGVyIiwicGFnZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiZmlyc3RQYWdlIiwibWF4X3BhZ2UiLCJtZXRhIiwicGFnZV9jb3VudCIsImxlbmd0aCIsInBhZ2VzIiwiQXJyYXkiLCJwbiIsIm91dCIsInAiLCJjb25jYXQiLCJmb3JFYWNoIiwiYXhpb3MiLCJBdXRoIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJjaWQiLCJjc2VjIiwiQ2xpZW50Q3JlZGVudGlhbHMiLCJzY29wZSIsIkF1dGhvcml6YXRpb25Db2RlIiwiY29kZSIsInJlZGlyZWN0X3VyaSIsInVyaSIsIlBhc3N3b3JkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJ0b2tlbiIsIkFwaVRva2VuIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIm93bmVyX3R5cGUiLCJvd25lcl9pZCIsImNyZWF0ZWRfYXQiLCJleHBpcmVzX2luIiwiYXV0aGVudGljYXRlIiwiYXV0aCIsInBvc3QiLCJuZXdBdXRoQ29uZmlnIiwiY29uZmlnIiwidXRpbHMiLCJzZXR0aW5ncyIsInNkayIsImRlZmF1bHQiLCJtZXJnZU1hcHMiLCJjbGF5ZXIiLCJsYXN0QWNjZXNzVG9rZW4iLCJjaGVja0FwaUNvbmZpZyIsImJhc2VfdXJsIiwic2V0QXhpb3NDb25maWciLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGVidWciLCJ0cmFjZSIsImludGVyY2VwdG9ycyIsInVzZSIsIkFwaUNsaWVudCIsIm1ldGhvZCIsIkFwaVJlcXVlc3QiLCJwYXJhbXMiLCJndWlkIiwiYnVpbGQiLCJ0eXBlIiwicmVzcG9uc2VUeXBlIiwiZXJyb3JUeXBlIiwicmF3IiwiYXV0aF9hdHRlbXB0cyIsImF1dGhDb25maWciLCJhdXRoZW50aWNhdGlvbiIsImlzQXV0aENvbmZpZyIsImNsaWVudElkIiwibWFya2V0U2NvcGUiLCJtYXJrZXRfaWQiLCJjbGllbnRTZWNyZXQiLCJtZXNzYWdlIiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIkVycm9yIiwidGl0bGUiLCJkZXRhaWwiLCJzb3VyY2UiLCJwb2ludGVyIiwiRXJyb3JSZXNwb25zZSIsImRlc2NyaXB0aW9uIiwiaXNBcGlFcnJvciIsInB1c2giLCJhZGRFcnJvciIsImFwaUVycm9ycyIsImFkZEFwaUVycm9yIiwiYXBpRXJyb3JzQ291bnQiLCJpbmRleCIsImVyciIsIngiLCJKc29uQXBpUmVzb3VyY2UiLCJqYXBpIiwiaXNBcnJheSIsInJlc0FycmF5IiwicmVzb3VyY2UiLCJhdHRyaWJ1dGVzIiwiZmllbGQiLCJpbmNsdWRlcyIsImhlbHBlciIsInJlbGF0aW9uc2hpcHMiLCJzdWJzdHIiLCJyZWwiLCJuZXdSZXNvdXJjZSIsInJlbF9kYXRhIiwicmQiLCJyZWxSZXMiLCJyZWxhdGVkUmVzb3VyY2UiLCJzZXRSZXNvdXJjZSIsImluYyIsImpzb25hcGlJbmNsdWRlZCIsInNldEZpZWxkcyIsImluY2x1ZGVkIiwiaW5jUmVzIiwic29tZSIsImVuYWJsZSIsImRpc2FibGUiLCJwcm9iZSIsImVuYWJsZWQiLCJSZXNvdXJjZSIsInJlZmVyZW5jZSIsIm1ldGFkYXRhIiwidXBkYXRlZF9hdCIsImlzQXBpUmVzb3VyY2VBcnJheSIsImZpZWxkcyIsInZhbHVlIiwiQWRkcmVzcyIsIlRZUEUiLCJidXNpbmVzcyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb21wYW55IiwibGluZV8xIiwibGluZV8yIiwiY2l0eSIsInppcF9jb2RlIiwic3RhdGVfY29kZSIsInBob25lIiwiZW1haWwiLCJub3RlcyIsImxhdCIsImxuZyIsImJpbGxpbmdfaW5mbyIsIkNyZWRpdENhcmQiLCJtb250aCIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJDdXN0b21lckFkZHJlc3MiLCJDdXN0b21lckdyb3VwIiwiQ3VzdG9tZXJQYXNzd29yZFJlc2V0IiwiY3VzdG9tZXJfZW1haWwiLCJjdXN0b21lcl9wYXNzd29yZCIsIl9yZXNldF9wYXNzd29yZF90b2tlbiIsIkN1c3RvbWVyUGF5bWVudFNvdXJjZSIsIkN1c3RvbWVyU3Vic2NyaXB0aW9uIiwiQ3VzdG9tZXIiLCJEZWxpdmVyeUxlYWRUaW1lIiwibWluX2hvdXJzIiwibWF4X2hvdXJzIiwiSW1wb3J0IiwicmVzb3VyY2VfdHlwZSIsInBhcmVudF9yZXNvdXJjZV9pZCIsImlucHV0cyIsImNsZWFudXBfcmVjb3JkcyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW1PcHRpb24iLCJxdWFudGl0eSIsIkxpbmVJdGVtIiwic2t1X2NvZGUiLCJfdXBkYXRlX3F1YW50aXR5IiwiaW1hZ2VfdXJsIiwiTWFya2V0IiwiZmFjZWJvb2tfcGl4ZWxfaWQiLCJNZXJjaGFudCIsIk9yZGVyIiwiZ3Vlc3QiLCJzaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayIsImNvdXBvbl9jb2RlIiwiY2FydF91cmwiLCJyZXR1cm5fdXJsIiwidGVybXNfdXJsIiwicHJpdmFjeV91cmwiLCJfcGxhY2UiLCJfY2FuY2VsIiwiX2FwcHJvdmUiLCJfY2FwdHVyZSIsIl91cGRhdGVfdGF4ZXMiLCJfYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmciLCJfYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmciLCJfc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQiLCJfc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfcmVmcmVzaCIsIlBhcmNlbCIsIndlaWdodCIsInVuaXRfb2Zfd2VpZ2h0IiwiZWVsX3BmYyIsImNvbnRlbnRzX3R5cGUiLCJjb250ZW50c19leHBsYW5hdGlvbiIsImN1c3RvbXNfY2VydGlmeSIsImN1c3RvbXNfc2lnbmVyIiwibm9uX2RlbGl2ZXJ5X29wdGlvbiIsInJlc3RyaWN0aW9uX3R5cGUiLCJyZXN0cmljdGlvbl9jb21tZW50cyIsImN1c3RvbXNfaW5mb19yZXF1aXJlZCIsIlBheW1lbnRNZXRob2QiLCJwYXltZW50X3NvdXJjZV90eXBlIiwicHJpY2VfYW1vdW50X2NlbnRzIiwiUGF5cGFsUGF5bWVudCIsImNhbmNlbF91cmwiLCJub3RlX3RvX3BheWVyIiwicGF5cGFsX3BheWVyX2lkIiwiUHJpY2VMaXN0IiwiY3VycmVuY3lfY29kZSIsInRheF9pbmNsdWRlZCIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJTaGlwbWVudCIsIl9vbl9ob2xkIiwiX3BpY2tpbmciLCJfcGFja2luZyIsIl9yZWFkeV90b19zaGlwIiwiX3NoaXAiLCJfZ2V0X3JhdGVzIiwic2VsZWN0ZWRfcmF0ZV9pZCIsIl9wdXJjaGFzZSIsIlNoaXBwaW5nQ2F0ZWdvcnkiLCJTaGlwcGluZ01ldGhvZCIsImZyZWVfb3Zlcl9hbW91bnRfY2VudHMiLCJTaGlwcGluZ1pvbmUiLCJjb3VudHJ5X2NvZGVfcmVnZXgiLCJub3RfY291bnRyeV9jb2RlX3JlZ2V4Iiwic3RhdGVfY29kZV9yZWdleCIsIm5vdF9zdGF0ZV9jb2RlX3JlZ2V4IiwiemlwX2NvZGVfcmVnZXgiLCJub3RfemlwX2NvZGVfcmVnZXgiLCJTa3VPcHRpb24iLCJkZWxheV9ob3VycyIsInNrdV9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU3RvY2tJdGVtIiwiU3RvY2tMZXZlbCIsInByaW9yaXR5Iiwib25faG9sZCIsIlN0b2NrTG9jYXRpb24iLCJsYWJlbF9mb3JtYXQiLCJXZWJob29rIiwidG9waWMiLCJjYWxsYmFja191cmwiLCJpbmNsdWRlX3Jlc291cmNlcyIsIldpcmVUcmFuc2ZlciIsImFsbEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjbCIsImluc3RhbmNlIiwiY2xfdHlwZSIsIlF1ZXJ5RmlsdGVyIiwiY2xlYXIiLCJzb3J0X2ZpZWxkcyIsInNwYXJzZV9maWVsZHNldHMiLCJpbmNsdWRlZF9yZXNvdXJjZXMiLCJmaWx0ZXJfZmllbGRzIiwiY3VzdG9tX3BhcmFtcyIsInBhZ2VfbnVtYmVyIiwiZGVzY2VuZGluZyIsInJlc291cmNlcyIsImZpbHRlcnMiLCJwYXJhbSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsIk51bWJlciIsImlzSW50ZWdlciIsInFzTWFwIiwiaW5jbHVkZSIsInNvcnQiLCJRdWVyeUV4cHJlc3Npb24iLCJQUkVESUNBVEVTIiwicHJlZGljYXRlcyIsIl9fZGlzYWJsZV9wcmVkaWNhdGVfY2hlY2siLCJmaWVsZHNfIiwidmFsIiwiZXhwbGFpbiIsInByZWRpY2F0ZSIsImV4dCIsIm1hcDEiLCJtYXAyIiwiY2xvbmVNYXAiLCJtcyIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplIiwic3RyIiwiY2hhckF0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFD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QSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFh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VDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNEVBQTRFLHVCQUF1QixFQUFFO0FBQ3JHLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JRRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImNvbW1lcmNlbGF5ZXItc2RrLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGF5ZXInKVxyXG5cclxuLy8gTW9kZWwgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxuLy8gUXVlcnlGaWx0ZXIgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKVxyXG4vLyBRdWVyeUV4cHJlc3Npb24gRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5eCA9IHJlcXVpcmUoJy4vbGliL3F1ZXJ5eCcpXHJcbiIsIi8vIEZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXQgMDIvMDMvMjAxOSAxOToyNzo1OCBieSBjb21tZXJjZWxheWVyLWpzLXNkay1jb2RlZ2VuXHJcblxyXG5cclxuY29uc3QgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKVxyXG5jb25zdCBsb2cgPSByZXF1aXJlKCcuL2xvZycpXHJcbmNvbnN0IGpzb25hcGkgPSByZXF1aXJlKCcuL2pzb25hcGknKVxyXG5jb25zdCBlcnJvclJlc3BvbnNlID0gcmVxdWlyZSgnLi9lcnJvcicpLmVycm9yUmVzcG9uc2VcclxuXHJcblxyXG5jbGFzcyBDTEFwaSB7XHJcblxyXG5cdC8vIEFkZHJlc3NcclxuXHRsaXN0QWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvYWRkcmVzc2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUFkZHJlc3MoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBZGRyZXNzKGFkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVBZGRyZXNzKGlkLCBhZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVBZGRyZXNzKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RBZGRyZXNzZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWRpdCBDYXJkXHJcblx0bGlzdENyZWRpdENhcmRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3JlZGl0X2NhcmRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUNyZWRpdENhcmQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDcmVkaXRDYXJkKGNyZWRpdF9jYXJkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3JlZGl0X2NhcmRzJywgJ3Bvc3QnKS5zZXRCb2R5KGNyZWRpdF9jYXJkKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUNyZWRpdENhcmQoaWQsIGNyZWRpdF9jYXJkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3JlZGl0Q2FyZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbENyZWRpdENhcmRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDcmVkaXRDYXJkcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgQWRkcmVzc1xyXG5cdGxpc3RDdXN0b21lckFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX2FkZHJlc3NlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lckFkZHJlc3MoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lckFkZHJlc3MoY3VzdG9tZXJfYWRkcmVzcywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX2FkZHJlc3NlcycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9hZGRyZXNzKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyQWRkcmVzcyhpZCwgY3VzdG9tZXJfYWRkcmVzcywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX2FkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJBZGRyZXNzKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyQWRkcmVzc2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBHcm91cFxyXG5cdGxpc3RDdXN0b21lckdyb3VwcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX2dyb3VwcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lckdyb3VwKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2dyb3Vwcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJHcm91cChjdXN0b21lcl9ncm91cCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX2dyb3VwcycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9ncm91cCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lckdyb3VwKGlkLCBjdXN0b21lcl9ncm91cCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9ncm91cHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX2dyb3VwKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyR3JvdXAoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2dyb3Vwcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lckdyb3VwcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJHcm91cHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFBhc3N3b3JkIFJlc2V0XHJcblx0bGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCwgY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXNzd29yZF9yZXNldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXltZW50IFNvdXJjZVxyXG5cdGxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShjdXN0b21lcl9wYXltZW50X3NvdXJjZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQsIGN1c3RvbWVyX3BheW1lbnRfc291cmNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJQYXltZW50U291cmNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJQYXltZW50U291cmNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgU3Vic2NyaXB0aW9uXHJcblx0bGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oY3VzdG9tZXJfc3Vic2NyaXB0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQsIGN1c3RvbWVyX3N1YnNjcmlwdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyXHJcblx0bGlzdEN1c3RvbWVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyKGN1c3RvbWVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyKGlkLCBjdXN0b21lciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERlbGl2ZXJ5IExlYWQgVGltZVxyXG5cdGxpc3REZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlRGVsaXZlcnlMZWFkVGltZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVEZWxpdmVyeUxlYWRUaW1lKGRlbGl2ZXJ5X2xlYWRfdGltZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMnLCAncG9zdCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGRlbGl2ZXJ5X2xlYWRfdGltZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShkZWxpdmVyeV9sZWFkX3RpbWUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlRGVsaXZlcnlMZWFkVGltZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxEZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0RGVsaXZlcnlMZWFkVGltZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEltcG9ydFxyXG5cdGxpc3RJbXBvcnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW1wb3J0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVJbXBvcnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW1wb3J0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW1wb3J0KGltcG9ydF8sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbXBvcnRzJywgJ3Bvc3QnKS5zZXRCb2R5KGltcG9ydF8pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW1wb3J0KGlkLCBpbXBvcnRfLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ltcG9ydHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGltcG9ydF8pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlSW1wb3J0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbXBvcnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEltcG9ydHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEltcG9ydHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEludmVudG9yeSBNb2RlbFxyXG5cdGxpc3RJbnZlbnRvcnlNb2RlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbnZlbnRvcnlfbW9kZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUludmVudG9yeU1vZGVsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUludmVudG9yeU1vZGVsKGludmVudG9yeV9tb2RlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnLCAncG9zdCcpLnNldEJvZHkoaW52ZW50b3J5X21vZGVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUludmVudG9yeU1vZGVsKGlkLCBpbnZlbnRvcnlfbW9kZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoaW52ZW50b3J5X21vZGVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUludmVudG9yeU1vZGVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0SW52ZW50b3J5TW9kZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaW5lIEl0ZW0gT3B0aW9uXHJcblx0bGlzdExpbmVJdGVtT3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbV9vcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtT3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbU9wdGlvbihsaW5lX2l0ZW1fb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaW5lSXRlbU9wdGlvbihpZCwgbGluZV9pdGVtX29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbU9wdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbU9wdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpbmUgSXRlbVxyXG5cdGxpc3RMaW5lSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxpbmVJdGVtKGxpbmVfaXRlbSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpbmVJdGVtKGlkLCBsaW5lX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUxpbmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TGluZUl0ZW1zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNYXJrZXRcclxuXHRsaXN0TWFya2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21hcmtldHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWFya2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1hcmtldChtYXJrZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1hcmtldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNYXJrZXQoaWQsIG1hcmtldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtYXJrZXQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTWFya2V0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbE1hcmtldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE1hcmtldHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1lcmNoYW50XHJcblx0bGlzdE1lcmNoYW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21lcmNoYW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNZXJjaGFudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1lcmNoYW50KG1lcmNoYW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1lcmNoYW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1lcmNoYW50KGlkLCBtZXJjaGFudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG1lcmNoYW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU1lcmNoYW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsTWVyY2hhbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RNZXJjaGFudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE9yZGVyXHJcblx0bGlzdE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVPcmRlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU9yZGVyKG9yZGVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KG9yZGVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU9yZGVyKGlkLCBvcmRlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG9yZGVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU9yZGVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsT3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RPcmRlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcmNlbFxyXG5cdGxpc3RQYXJjZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGFyY2VscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXJjZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFyY2VsKHBhcmNlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnLCAncG9zdCcpLnNldEJvZHkocGFyY2VsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBhcmNlbChpZCwgcGFyY2VsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBhcmNlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXJjZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGFyY2VscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGFyY2VscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGF5bWVudCBNZXRob2RcclxuXHRsaXN0UGF5bWVudE1ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXltZW50X21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGF5bWVudE1ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBheW1lbnRNZXRob2QocGF5bWVudF9tZXRob2QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXltZW50X21ldGhvZHMnLCAncG9zdCcpLnNldEJvZHkocGF5bWVudF9tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGF5bWVudE1ldGhvZChpZCwgcGF5bWVudF9tZXRob2QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXltZW50X21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXltZW50TWV0aG9kKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGF5bWVudE1ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBheW1lbnRNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXlwYWwgUGF5bWVudFxyXG5cdGxpc3RQYXlwYWxQYXltZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheXBhbF9wYXltZW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXlwYWxQYXltZW50KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGF5cGFsUGF5bWVudChwYXlwYWxfcGF5bWVudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheXBhbF9wYXltZW50cycsICdwb3N0Jykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXlwYWxQYXltZW50KGlkLCBwYXlwYWxfcGF5bWVudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBheXBhbF9wYXltZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBheXBhbFBheW1lbnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXlwYWxQYXltZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5cGFsUGF5bWVudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByaWNlIExpc3RcclxuXHRsaXN0UHJpY2VMaXN0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlX2xpc3RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVByaWNlTGlzdChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUHJpY2VMaXN0KHByaWNlX2xpc3QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycsICdwb3N0Jykuc2V0Qm9keShwcmljZV9saXN0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByaWNlTGlzdChpZCwgcHJpY2VfbGlzdCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocHJpY2VfbGlzdCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQcmljZUxpc3QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlTGlzdHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByaWNlXHJcblx0bGlzdFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQcmljZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVByaWNlKHByaWNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByaWNlKGlkLCBwcmljZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHByaWNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsUHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQcmljZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBtZW50XHJcblx0bGlzdFNoaXBtZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBtZW50cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwbWVudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBtZW50KHNoaXBtZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcG1lbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBtZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBtZW50KGlkLCBzaGlwbWVudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBtZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBtZW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcG1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwbWVudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIENhdGVnb3J5XHJcblx0bGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdDYXRlZ29yeShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ0NhdGVnb3J5KHNoaXBwaW5nX2NhdGVnb3J5LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ19jYXRlZ29yeSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ0NhdGVnb3J5KGlkLCBzaGlwcGluZ19jYXRlZ29yeSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19jYXRlZ29yeSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ0NhdGVnb3J5KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nQ2F0ZWdvcmllcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdDYXRlZ29yaWVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBNZXRob2RcclxuXHRsaXN0U2hpcHBpbmdNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ01ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ01ldGhvZChzaGlwcGluZ19tZXRob2QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ01ldGhvZChpZCwgc2hpcHBpbmdfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ01ldGhvZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ01ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nTWV0aG9kcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgWm9uZVxyXG5cdGxpc3RTaGlwcGluZ1pvbmVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfem9uZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdab25lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ1pvbmUoc2hpcHBpbmdfem9uZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX3pvbmVzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdab25lKGlkLCBzaGlwcGluZ196b25lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ196b25lKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nWm9uZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdab25lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdab25lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2t1IE9wdGlvblxyXG5cdGxpc3RTa3VPcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1X29wdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1T3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3VPcHRpb24oc2t1X29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1T3B0aW9uKGlkLCBza3Vfb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShza3Vfb3B0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNrdU9wdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1T3B0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2t1XHJcblx0bGlzdFNrdXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNrdShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3Uoc2t1LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycsICdwb3N0Jykuc2V0Qm9keShza3UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1KGlkLCBza3UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNrdShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTa3VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTa3VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBJdGVtXHJcblx0bGlzdFN0b2NrSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0l0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrSXRlbShzdG9ja19pdGVtLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0l0ZW0oaWQsIHN0b2NrX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0l0ZW1zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBMZXZlbFxyXG5cdGxpc3RTdG9ja0xldmVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xldmVscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0xldmVsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tMZXZlbChzdG9ja19sZXZlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xldmVscycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19sZXZlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0xldmVsKGlkLCBzdG9ja19sZXZlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2xldmVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrTGV2ZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0xldmVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tMZXZlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIExvY2F0aW9uXHJcblx0bGlzdFN0b2NrTG9jYXRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbG9jYXRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrTG9jYXRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0xvY2F0aW9uKHN0b2NrX2xvY2F0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbG9jYXRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2xvY2F0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrTG9jYXRpb24oaWQsIHN0b2NrX2xvY2F0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfbG9jYXRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tMb2NhdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrTG9jYXRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0xvY2F0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2ViaG9va1xyXG5cdGxpc3RXZWJob29rcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dlYmhvb2tzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdlYmhvb2soaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVdlYmhvb2sod2ViaG9vaywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dlYmhvb2tzJywgJ3Bvc3QnKS5zZXRCb2R5KHdlYmhvb2spLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2ViaG9vayhpZCwgd2ViaG9vaywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkod2ViaG9vaykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVXZWJob29rKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHRhbGxXZWJob29rcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0V2ViaG9va3MsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFdpcmUgVHJhbnNmZXJcclxuXHRsaXN0V2lyZVRyYW5zZmVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dpcmVfdHJhbnNmZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdpcmVUcmFuc2ZlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2lyZVRyYW5zZmVyKHdpcmVfdHJhbnNmZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycsICdwb3N0Jykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpcmVUcmFuc2ZlcihpZCwgd2lyZV90cmFuc2ZlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkod2lyZV90cmFuc2Zlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVXaXJlVHJhbnNmZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdpcmVUcmFuc2ZlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG52YXIgYXBpID0gbmV3IENMQXBpKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jbGFwaSA9IGFwaTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBsb2cubXNnKCdhcGkgY2xpZW50IGluaXRpYWxpemVkIHdpdGggY29uZmlnOicpO1xyXG4gICAgbG9nLm1zZyhjZmcpO1xyXG4gICAgYXBpLmNsaWVudCA9ICBjbGllbnQubmV3SW5zdGFuY2UoY2ZnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgIGxvZy5tc2coYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gY2FsbGluZyAke2FwaVJlcXVlc3QucGF0aH0gLi4uYCk7XHJcblxyXG4gICAgaWYgKGFwaS5jbGllbnQgPT0gdW5kZWZpbmVkKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3RXJyb3IodW5kZWZpbmVkLCAnYXBpIG5vdCBpbml0aWFsaXplZCcpKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBib2R5ID0ganNvbmFwaS5zZXJpYWxpemUoYXBpUmVxdWVzdC5ib2R5KTtcclxuICAgICAgICBhcGlSZXF1ZXN0LnNldEJvZHkoYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGFwaS5jbGllbnQuY2FsbChhcGlSZXF1ZXN0KVxyXG4gICAgICAgICAgICAudGhlbihhcGlSZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZShhcGlSZXNwb25zZSwgYXBpUmVxdWVzdC5yZXNwb25zZV90eXBlKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGFwaUVycm9yID0+IHsgcmV0dXJuIGVycm9yKGFwaUVycm9yLCBhcGlSZXF1ZXN0LmVycm9yX3R5cGUpOyB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVzcG9uc2UoYXBpUmVzcG9uc2UsIHJlc3BvbnNlX3R5cGUpIHtcclxuXHRpZiAocmVzcG9uc2VfdHlwZSA9PSB1bmRlZmluZWQpIHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRlbHNlXHJcblx0XHRzd2l0Y2ggKHJlc3BvbnNlX3R5cGUpIHtcclxuXHRcdFx0Y2FzZSAnbW9kZWwnOlxyXG5cdFx0XHRcdHJldHVybiBqc29uYXBpLmRlc2VyaWFsaXplKGFwaVJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdub3JtYWxpemVkJzpcclxuXHRcdFx0XHRyZXR1cm4ganNvbmFwaS5ub3JtYWxpemUoYXBpUmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdGNhc2UgJ2pzb25hcGknOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZS5kYXRhO1xyXG5cdFx0XHRjYXNlICdyYXcnOlxyXG5cdFx0XHRcdHJldHVybiBhcGlSZXNwb25zZTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBcIlVuc3VwcG9ydGVkIHJlc3BvbnNlX3R5cGU6ICdcIiArIHJlc3BvbnNlX3R5cGUgKyBcIidcIjtcclxuXHRcdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycm9yKGFwaUVycm9yLCBlcnJvcl90eXBlKSB7XHJcblx0aWYgKGVycm9yX3R5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm4gYXBpRXJyb3I7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChlcnJvcl90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHRpZiAoIWFwaUVycm9yLnJlc3BvbnNlKSByZXR1cm4gYXBpRXJyb3I7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGlmIChhcGlFcnJvci5yZXNwb25zZS5kYXRhICYmIGFwaUVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JSZXNwb25zZShhcGlFcnJvci5yZXNwb25zZS5zdGF0dXMpLmFkZEFwaUVycm9ycyhhcGlFcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvclJlc3BvbnNlKGFwaUVycm9yLnJlc3BvbnNlLnN0YXR1cywgYXBpRXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xyXG5cdFx0XHRjYXNlICdqc29uYXBpJzpcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYXBpRXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdGNhc2UgJ3Jhdyc6XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFwaUVycm9yLnJlc3BvbnNlKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBcIlVuc3VwcG9ydGVkIGVycm9yX3R5cGU6ICdcIiArIGVycm9yX3R5cGUgKyBcIidcIjtcclxuXHRcdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRhdGEocmVzKSB7XHJcblx0aWYgKHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSkgcmV0dXJuIHJlcztcclxuXHRlbHNlXHJcblx0aWYgKHJlcy5kYXRhc2V0KSByZXR1cm4gcmVzLmRhdGFzZXQuZGF0YTtcclxuXHRlbHNlXHJcblx0aWYgKHJlcy5kYXRhKSByZXR1cm4gKHJlcy5kYXRhLmRhdGEpPyByZXMuZGF0YS5kYXRhIDogcmVzLmRhdGE7XHJcblx0ZWxzZSByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWxsKGxpc3RGdW5jdGlvbiwgZmlsdGVyID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgIGlmICgobGlzdEZ1bmN0aW9uID09IHVuZGVmaW5lZCkgfHwgIWxpc3RGdW5jdGlvbi5uYW1lLnN0YXJ0c1dpdGgoJ2xpc3QnKSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiVW5kZWZpbmVkICdsaXN0JyBBUEkgZnVuY3Rpb25cIik7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFBhZ2UoZmlsdGVyLCBzaXplID0gZmlsdGVyLnBhZ2Vfc2l6ZSB8fCAxMCwgbnVtYmVyID0gMSkge1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc1F1ZXJ5RmlsdGVyICYmIChmaWx0ZXIuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSkgZmlsdGVyLnBhZ2UobnVtYmVyLCBzaXplKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW3NpemVdJ10gPSBzaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2VbbnVtYmVyXSddID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKGZpbHRlcik7XHJcblx0XHJcblx0Ly8gU2F2ZSBvcmlnaW5hbCBvcHRpb24gYW5kIGZvcnhlIHJlc3BvbnNlX3R5cGUgdG8gJ3JhdydcclxuXHRsZXQgcmVzcG9uc2VfdHlwZSA9IG9wdGlvbnMucmVzcG9uc2VfdHlwZTtcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSAncmF3JztcclxuXHJcblx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlIDFgKTtcclxuXHJcbiAgICBsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgbWF4X3BhZ2UgPSBmaXJzdFBhZ2UuZGF0YS5tZXRhLnBhZ2VfY291bnQ7XHJcblx0Y29uc3QgcGFnZV9zaXplID0gZmlyc3RQYWdlLmRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHJcblx0bGV0IHBhZ2VzID0gbmV3IEFycmF5KG1heF9wYWdlKTtcclxuICAgIHBhZ2VzWzBdID0gcmVzcG9uc2UoZmlyc3RQYWdlLCByZXNwb25zZV90eXBlKTtcclxuXHJcblx0Ly8gU3RhbmRhcmQgbGlzdEZ1bmN0aW9uIHJlc3BvbnNlXHJcblx0aWYgKG1heF9wYWdlID09IDEpIHJldHVybiBwYWdlc1swXTsgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICBmb3IgKHBuID0gMTsgcG4gPCBtYXhfcGFnZTsgcG4rKykge1xyXG5cdFx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlICR7cG4rMX1gKTtcclxuICAgICAgICBzZXRQYWdlKGZpbHRlciwgcGFnZV9zaXplLCBwbisxKTtcclxuICAgICAgICBwYWdlc1twbl0gPSBsaXN0RnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG5cdC8vIFNldCBvcmlnaW5hbCBvcHRpb25cclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG5cclxuXHRsZXQgb3V0ID0gW107XHJcblxyXG4gICAgKGF3YWl0IFByb21pc2UuYWxsKHBhZ2VzKSkuZm9yRWFjaChwID0+IHsgb3V0ID0gb3V0LmNvbmNhdChkYXRhKHJlc3BvbnNlKHAsIHJlc3BvbnNlX3R5cGUpKSkgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxuXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG5cclxuLy8gY29uc3QgQVVUSF9UT0tFTlMgPSB7fTtcclxuXHJcblxyXG5jbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY2xpZW50SWQoY2lkKSB7IHRoaXMuY2xpZW50X2lkID0gY2lkOyByZXR1cm4gdGhpczsgfVxyXG4gICAgY2xpZW50U2VjcmV0KGNzZWMpIHsgdGhpcy5jbGllbnRfc2VjcmV0ID0gY3NlYzsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGlzQXV0aENvbmZpZygpIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIENsaWVudENyZWRlbnRpYWxzIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlKSB7XHJcbiAgICAgICAgc3VwZXIoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnY2xpZW50X2NyZWRlbnRpYWxzJztcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBzZXRTY29wZShzY29wZSkgeyB0aGlzLnNjb3BlID0gc2NvcGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBtYXJrZXRTY29wZShtYXJrZXQpIHsgdGhpcy5zY29wZSA9IChtYXJrZXQgIT0gdW5kZWZpbmVkKT8gJ21hcmtldDonK21hcmtldCA6IG1hcmtldDsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb25Db2RlIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuY2xpZW50X3NlY3JldCwgY2ZnLnNjb3BlKVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNmZy5jb2RlO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gY2ZnLnJlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIHNldENvZGUoY29kZSkgeyB0aGlzLmNvZGUgPSBjb2RlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgcmVkaXJlY3RVcmkodXJpKSB7IHRoaXMucmVkaXJlY3RfdXJpID0gdXJpOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUGFzc3dvcmQgZXh0ZW5kcyBDbGllbnRDcmVkZW50aWFscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjZmcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNmZy5jbGllbnRfaWQsIGNmZy5jbGllbnRfc2VjcmV0LCBjZmcuc2NvcGUpXHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY2ZnLnVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjZmcucGFzc3dvcmQ7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSkgeyB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCkgeyB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBSZWZyZXNoVG9rZW4gZXh0ZW5kcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVmcmVzaF90b2tlbikge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3JlZnJlc2hfdG9rZW4nO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XHJcbiAgICB9XHJcbiAgICByZWZyZXNoVG9rZW4odG9rZW4pIHsgdGhpcy5yZWZyZXNoX3Rva2VuID0gdG9rZW47IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBcGlUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSAnYmVhcmVyJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm93bmVyX3R5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl9pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5leHBpcmVzX2luID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQ2xpZW50Q3JlZGVudGlhbHMsXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSxcclxuICAgIFBhc3N3b3JkLFxyXG4gICAgUmVmcmVzaFRva2VuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5hdXRoZW50aWNhdGUgPSAoYXV0aCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgZ3JhbnRfdHlwZTogYXV0aC5ncmFudF90eXBlLFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IGF1dGguY2xpZW50X2lkLFxyXG4gICAgICAgICAgICBzY29wZTogYXV0aC5zY29wZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogYXV0aC5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICBjb2RlOiBhdXRoLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogYXV0aC5yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogYXV0aC5wYXNzd29yZCxcclxuICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogYXV0aC5yZWZyZXNoX3Rva2VuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgQXBpVG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHRva2VuLmFjY2Vzc190b2tlbiA9IHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICB0b2tlbi5yZWZyZXNoX3Rva2VuID0gcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuO1xyXG4gICAgICAgICAgICB0b2tlbi5zY29wZSA9IHJlc3BvbnNlLmRhdGEuc2NvcGU7XHJcbiAgICAgICAgICAgIHRva2VuLm93bmVyX3R5cGUgPSByZXNwb25zZS5kYXRhLm93bmVyX3R5cGU7XHJcbiAgICAgICAgICAgIHRva2VuLm93bmVyX2lkID0gcmVzcG9uc2UuZGF0YS5vd25lcl9pZDtcclxuICAgICAgICAgICAgdG9rZW4uY3JlYXRlZF9hdCA9IHJlc3BvbnNlLmRhdGEuY3JlYXRlZF9hdDtcclxuICAgICAgICAgICAgdG9rZW4uZXhwaXJlc19pbiA9IHJlc3BvbnNlLmRhdGEuZXhwaXJlc19pbjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhY2hlVG9rZW4oYXV0aC5jbGllbnRfaWQsIGF1dGguZ3JhbnRfdHlwZSwgdG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY2FjaGVUb2tlbihjbGllbnRfaWQsIGdyYW50X3R5cGUsIHRva2VuKSB7XHJcbi8vICAgICBBVVRIX1RPS0VOU1t0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSldID0gdG9rZW47XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFRva2VuKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSkge1xyXG4vLyAgICAgcmV0dXJuIEFVVEhfVE9LRU5TW3Rva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlKV07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHRva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlKSB7XHJcbi8vICAgICByZXR1cm4gY2xpZW50X2lkICsgJy0nICsgZ3JhbnRfdHlwZTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gbmV3QXV0aENvbmZpZyhncmFudF90eXBlLCBjb25maWcgPSB7fSkge1xyXG4gICAgc3dpdGNoIChncmFudF90eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY2xpZW50X2NyZWRlbnRpYWxzJzogcmV0dXJuIG5ldyBDbGllbnRDcmVkZW50aWFscyhjb25maWcuY2xpZW50X2lkLCBjb25maWcuY2xpZW50X3NlY3JldCwgY29uZmlnLnNjb3BlKTtcclxuICAgICAgICBjYXNlICdhdXRob3JpemF0aW9uX2NvZGUnOiByZXR1cm4gbmV3IEF1dGhvcml6YXRpb25Db2RlKGNvbmZpZyk7XHJcbiAgICAgICAgY2FzZSAncGFzc3dvcmQnOiByZXR1cm4gbmV3IFBhc3N3b3JkKGNvbmZpZyk7XHJcbiAgICAgICAgY2FzZSAncmVmcmVzaF90b2tlbic6IHJldHVybiBuZXcgUmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufSIsImNvbnN0IGFwaSA9IHJlcXVpcmUoJy4vYXBpJylcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbi8vIEV4cG9zZSBhbGwgYXBpIGZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaS5jbGFwaTtcclxuXHJcbi8vIEV4cG9zZSBTREsgY29uZmlndXJhdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5zZXR0aW5ncyA9IGNvbmZpZy5zZGs7XHJcblxyXG4vLyBFeHBvc2UgU0RLIGNvbnN0YW50c1xyXG4vLyBtb2R1bGUuZXhwb3J0cy5jb25zdCA9IHJlcXVpcmUoJy4vY29uc3QnKVxyXG5cclxuXHJcbi8vIFNESyBpbml0aWFsaXphdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgaWYgKGNmZyAhPSB1bmRlZmluZWQpIGNmZy5kZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBhcGkuaW5pdGlhbGl6ZSh1dGlscy5tZXJnZU1hcHMoY29uZmlnLmNsYXllciwgY2ZnKSlcclxufVxyXG5cclxuXHJcbi8vIEF1dGhlbnRpY2F0aW9uIHR5cGVzXHJcbm1vZHVsZS5leHBvcnRzLmF1dGggPSB7XHJcbiAgICBDbGllbnRDcmVkZW50aWFscyA6IChjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpID0+IHsgcmV0dXJuIG5ldyBhdXRoLkNsaWVudENyZWRlbnRpYWxzKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkgfSxcclxuICAgIFBhc3N3b3JkIDogKGNmZykgPT4geyByZXR1cm4gbmV3IGF1dGguUGFzc3dvcmQoY2ZnKSB9LFxyXG4gICAgQXV0aG9yaXphdGlvbkNvZGUgOiAoY2ZnKSA9PiB7IHJldHVybiBuZXcgYXV0aC5BdXRob3JpemF0aW9uQ29kZShjZmcpIH0sXHJcbiAgICBSZWZyZXNoVG9rZW4gOiAoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCByZWZyZXNoX3Rva2VuKSA9PiB7IHJldHVybiBuZXcgYXV0aC5SZWZyZXNoVG9rZW4oY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCByZWZyZXNoX3Rva2VuKSB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmF1dGgubGFzdEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5jbGFwaS5jbGllbnQuY29uZmlnLmFjY2Vzc190b2tlbjtcclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcbmNvbnN0IGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0FwaUNvbmZpZyhjb25maWcpIHtcclxuXHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyB2ZXJpZmljYXRpb24uLi4nKVxyXG5cclxuICAgIGlmIChjb25maWcgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjb25maWcnO1xyXG4gICAgaWYgKGNvbmZpZy5iYXNlX3VybCA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGJhc2VfdXJsJztcclxuICAgIGlmIChjb25maWcuY2xpZW50X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgY2xpZW50X2lkJztcclxuXHJcbiAgICAvLyBUT0RPOiB2ZXJpZmljYXJlIGNvbmZpZ3VyYXppb25lIGluIGJhc2UgYWwgdGlwbyBkaSBhdXRlbnRpY2F6aW9uZVxyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIG9rLicpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3R5cGUgPSBzZGsucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcl90eXBlID0gc2RrLmVycm9yX3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYXRoKHBhdGgpIHsgdGhpcy5wYXRoID0gcGF0aDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRQYXJhbXMocGFyYW1zKSB7IHRoaXMucGFyYW1zID0gKHBhcmFtcyAmJiBwYXJhbXMuaXNRdWVyeUZpbHRlciAmJiAocGFyYW1zLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpPyBwYXJhbXMuYnVpbGQoKSA6IHBhcmFtczsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRNZXRob2QobWV0aG9kKSB7IHRoaXMubWV0aG9kID0gbWV0aG9kOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEJvZHkoYm9keSkgeyB0aGlzLmJvZHkgPSBib2R5OyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEhlYWRlcnMoaGVhZGVycykgeyB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICBuZXdBdHRlbXB0KCkgeyB0aGlzLmF0dGVtcHQrKzsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBPcHRpb25zXHJcbiAgICAgICAgZ2V0IHJhd19yZXNwb25zZSgpIHsgcmV0dXJuICh0aGlzLnJlc3BvbnNlVHlwZSA9PSAncmF3Jyk7IH1cclxuICAgICAgICBzZXQgcmF3X3Jlc3BvbnNlKHJhdykgeyB0aGlzLnJlc3BvbnNlX3R5cGUgPSAocmF3ICYmIChyYXcgPT09IHRydWUpKT8gJ3JhdycgOiAnbm9ybWFsaXplZCc7IH1cclxuICAgICAgICByZXNwb25zZVR5cGUodHlwZSkgeyB0aGlzLnJlc3BvbnNlX3R5cGUgPSB0eXBlPyB0eXBlIDogc2RrLnJlc3BvbnNlX3R5cGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgZXJyb3JUeXBlKHR5cGUpIHsgdGhpcy5lcnJvcl90eXBlID0gdHlwZT8gdHlwZSA6IHNkay5lcnJvcl90eXBlOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IHJlYWxseSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgYmVpbmcgc2V0dGVkXHJcbiAgICAgICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VUeXBlKG9wdGlvbnMucmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JUeXBlKG9wdGlvbnMuZXJyb3JfdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBBcGlDbGllbnQgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgICAgICBjaGVja0FwaUNvbmZpZyhjb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgc2V0QXhpb3NDb25maWcoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF1dGhlbnRpY2F0ZSgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGF1dGhDb25maWcgPSB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWF1dGhDb25maWcgfHwgIWF1dGhDb25maWcuaXNBdXRoQ29uZmlnIHx8IChhdXRoQ29uZmlnLmlzQXV0aENvbmZpZygpICE9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgYXV0aENvbmZpZyA9IG5ldyBhdXRoLkNsaWVudENyZWRlbnRpYWxzKClcclxuICAgICAgICAgICAgICAgICAgICAuY2xpZW50SWQodGhpcy5jb25maWcuY2xpZW50X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWVudFNlY3JldCh0aGlzLmNvbmZpZy5jbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZygndXNpbmcgY3VzdG9tIGF1dGhlbnRpY2F0aW9uIGNvbmZpZzogJyArIGF1dGhDb25maWcuZ3JhbnRfdHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhDb25maWcuY2xpZW50X2lkICYmIHRoaXMuY29uZmlnLmNsaWVudF9pZCkgYXV0aENvbmZpZy5jbGllbnRJZCh0aGlzLmNvbmZpZy5jbGllbnRfaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXV0aC5hdXRoZW50aWNhdGUoYXV0aENvbmZpZykudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbi5hY2Nlc3NfdG9rZW47IH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNhbGwoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVzc2FnZShtc2cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZD8gYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gYCA6ICcnKS5jb25jYXQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3QubmV3QXR0ZW1wdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZV9wYXRoID0gKCh0aGlzLmNvbmZpZy5iYXNlX3BhdGggIT0gdW5kZWZpbmVkKT8gdGhpcy5jb25maWcuYmFzZV9wYXRoIDogJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSAodG8gYmUgcmVtb3ZlZClcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VfcGF0aCArIGFwaVJlcXVlc3QucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gYXBpUmVxdWVzdC5wYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGFwaVJlcXVlc3QubWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcXVlcnlTdHJpbmdcclxuICAgICAgICAgICAgbGV0IGNhbGxVcmwgPSBwYXRoO1xyXG4gICAgICAgICAgICBpZiAoKHBhcmFtcyAhPSB1bmRlZmluZWQpICYmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbXNba2V5XVxyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbFVybCA9IGNhbGxVcmwuY29uY2F0KCc/JykuY29uY2F0KHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ3BhdGg6ICcgKyBjYWxsVXJsKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXhpb3NDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGNhbGxVcmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCB8fCAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHNkay50aW1lb3V0LnJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnZSBjdXN0b20gYW5kIGRlZmF1bHQgaGVhZGVyc1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmRNYXAoYXhpb3NDb25maWcuaGVhZGVycywgYXBpUmVxdWVzdC5oZWFkZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvZHlcclxuICAgICAgICAgICAgaWYgKGFwaVJlcXVlc3QuYm9keSAhPSB1bmRlZmluZWQpIGF4aW9zQ29uZmlnLmRhdGEgPSBhcGlSZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXhfYXR0ZW1wdHMgPSBzZGsuYXV0aF9hdHRlbXB0cz8gc2RrLmF1dGhfYXR0ZW1wdHMgOiAxO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkIGV4ZWN1dGUgYXV0aGVudGljYXRpb24gdGhlbiByZS1leGVjdXRlIGNhbGxcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhY2Nlc3NfdG9rZW4gbnVsbCwgYXV0aGVudGljYXRpb24gcmVxdWlyZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKyt0aGlzLmF1dGhfYXR0ZW1wdHMgPiBtYXhfYXR0ZW1wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNkay50aW1lb3V0LnJldHJ5KSB0aHJvdyBgUmVhY2hlZCBtYXhpbXVtIG51bWJlciBvZiBhdXRoZW50aWNhdGlvbiBhdHRlbXB0cyAoJHttYXhfYXR0ZW1wdHN9KSBhbmQgbm8gcmV0cnkgdGltZW91dCBjb25maWd1cmVkYDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNsZWVwKHNkay50aW1lb3V0LnJldHJ5LCBtZXNzYWdlKCdhbm90aGVyIGF1dGggcmVxdWVzdCBpcyBpbiBwcm9ncmVzcycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7IHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCkgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZSgpLnRoZW4oYWNjZXNzX3Rva2VuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdleGVjdXRpbmcgYXBpIGNhbGwgLi4uJykpO1xyXG4gICAgICAgICAgICAgICAgYXhpb3NDb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXBpIGNhbGwgc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoZXJyb3I/IGVycm9yIDogJ2Vycm9yIGRldGVjdGVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCd0aW1lb3V0IGV4Y2VwdGlvbjonICsgZXJyb3IuY29uZmlnLnRpbWVvdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcGkgZXJyb25lb3VzbHkgcmV0dXJuIGNvZGUgNDAxIGluc3RlYWQgb2YgY29kZSA0MDMgZm9yIFVOQVVUSE9SSVpFRCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgJiYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLmNvZGUgPT0gJ0lOVkFMSURfVE9LRU4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2ludmFsaWQgdG9rZW4sIGFjY2VzcyBkZW5pZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJjb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGNsYXllcjoge1xyXG5cclxuICAgICAgICBkZWZhdWx0IDogdHJ1ZSxcclxuXHJcbiAgICAgICAgYXV0aGVudGljYXRpb24gIDogbnVsbCxcclxuICBcclxuICAgICAgICBjbGllbnRfaWQgICAgICAgOiBudWxsLFxyXG4gICAgICAgIG1hcmtldF9pZCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgY2xpZW50X3NlY3JldCAgIDogbnVsbCxcclxuICAgICAgICBiYXNlX3VybCAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfcGF0aCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgY291bnRyeV9jb2RlICAgIDogJ1VTJyxcclxuICAgICAgICBsYW5ndWFnZV9jb2RlICAgOiAnZW4nLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2RrOiB7XHJcbiAgICAgICAgZGVidWcgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBkZWJ1ZyBtb2RlIGFjdGl2YXRlZFxyXG4gICAgICAgIGNvbnNvbGUgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gbG9nIHRvIGNvbnNvbGUgZW5hYmxlZFxyXG4gICAgICAgIHRyYWNlICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gdHJhY2UgY2xpZW50IHJlcXVlc3QvcmVzcG9uc2UgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNwb25zZSBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICBlcnJvcl90eXBlICAgICAgOiAnbW9kZWwnLCAgICAgIC8vIEVycm9yIGZvcm1ldCwgcG9zc2libGUgdmFsdWVzIGFyZToganNvbmFwaSB8IG1vZGVsIHwgcmF3XHJcbiAgICAgICAgdGltZW91dCA6IHsgLy8gaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgICAgIHJldHJ5IDogMjUwLCAgICAvLyByZXRyeSBhZnRlciBhdXRoZW50aWNhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzIGRldGVjdGVkXHJcbiAgICAgICAgICAgIHJlcXVlc3QgOiAyMDAwICAvLyBjbGllbnQgcmVxdWVzdCB0aW1lb3V0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuY2xhc3MgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoYXBpRXJyb3IgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGFwaUVycm9yLmNvZGU7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGFwaUVycm9yLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsID0gYXBpRXJyb3IuZGV0YWlsO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gYXBpRXJyb3Iuc291cmNlIHx8IHt9O1xyXG4gICAgICAgIHRoaXMubWV0YSA9IGFwaUVycm9yLm1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgaXNBcGlFcnJvcigpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIGdldFNvdXJjZVBvaW50ZXIoKSB7IHJldHVybiB0aGlzLnNvdXJjZS5wb2ludGVyOyB9XHJcbiAgICBnZXRTb3VyY2VJdGVtKGtleSkgeyByZXR1cm4gdGhpcy5zb3VyY2Vba2V5XTsgfVxyXG4gICAgZ2V0TWV0YUl0ZW0oa2V5KSB7IHJldHVybiB0aGlzLm1ldGFba2V5XTsgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gYFske3RoaXMuY29kZX0sICR7dGhpcy50aXRsZX0sICR7dGhpcy5kZXRhaWx9XWA7IH1cclxuXHJcbn1cclxuXHJcblxyXG5jbGFzcyBFcnJvclJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXR1cywgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXNFcnJvclJlc3BvbnNlKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgYWRkRXJyb3IoZXJyb3IpIHsgaWYgKGVycm9yICYmIGVycm9yLmlzQXBpRXJyb3IgJiYgKGVycm9yLmlzQXBpRXJyb3IoKSA9PT0gdHJ1ZSkpIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYWRkQXBpRXJyb3IoYXBpRXJyb3IpIHsgdGhpcy5hZGRFcnJvcihuZXcgRXJyb3IoYXBpRXJyb3IpKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFkZEVycm9ycyhlcnJvcnMgPSBbXSkgeyBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB0aGlzLmFkZEVycm9yKGVycm9yKSk7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhZGRBcGlFcnJvcnMoYXBpRXJyb3JzID0gW10pIHsgYXBpRXJyb3JzLmZvckVhY2goYXBpRXJyb3IgPT4gdGhpcy5hZGRBcGlFcnJvcihhcGlFcnJvcikpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYXBpRXJyb3JzQ291bnQoKSB7IHJldHVybiAodGhpcy5lcnJvcnMgPT0gdW5kZWZpbmVkKT8gMCA6IHRoaXMuZXJyb3JzLmxlbmd0aDsgfVxyXG4gICAgaGFzQXBpRXJyb3JzKCkgeyByZXR1cm4gKHRoaXMuYXBpRXJyb3JzQ291bnQoKSA+IDApOyB9XHJcbiAgICBnZXRBcGlFcnJvcihpbmRleCkgeyByZXR1cm4gKChpbmRleCA+PSAwKSAmJiAoaW5kZXggPCB0aGlzLmFwaUVycm9yc0NvdW50KCkpPyB0aGlzLmVycm9yc1tpbmRleF0gOiBudWxsKTsgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBlcnIgPSAnWycgKyB0aGlzLnN0YXR1cyArICh0aGlzLmRlc2NyaXB0aW9uPyAnLCAnICsgdGhpcy5kZXNjcmlwdGlvbiA6ICcnKSArICddJztcclxuICAgICAgICBpZiAodGhpcy5lcnJvcnMgJiYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgIGVyciArPSAnIC0tPiB7JztcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMuZm9yRWFjaCh4ID0+IGVyciArPSB4KTtcclxuICAgICAgICAgICAgZXJyICs9ICd9JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICBlcnI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBlcnJvclJlc3BvbnNlIDogKHN0YXR1cywgZGVzY3JpcHRpb24pID0+IHsgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cywgZGVzY3JpcHRpb24pOyB9XHJcbn0iLCJjb25zdCBub3JtYWxpemUgPSByZXF1aXJlKCdqc29uLWFwaS1ub3JtYWxpemUnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBtb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwnKVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zZXJpYWxpemUgPSAoYm9keSkgPT4ge1xyXG4gICAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSByZXR1cm4gYm9keTtcclxuICAgIC8vIE5vIGRhdGEgPSBQbGFpbiBPYmplY3Qgb3IgQXBpIFJlc291cmNlXHJcbiAgICBlbHNlIHJldHVybiAoYm9keS5kYXRhID09IHVuZGVmaW5lZCk/IG5ldyBKc29uQXBpUmVzb3VyY2UoYm9keSkuc2VyaWFsaXplKCkgOiBib2R5O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZGVzZXJpYWxpemUgPSAoamFwaSkgPT4ge1xyXG4gICAgaWYgKGphcGkgPT0gdW5kZWZpbmVkKSByZXR1cm4gamFwaTtcclxuICAgIGVsc2VcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGphcGkuZGF0YSkpIHtcclxuICAgICAgICBsZXQgcmVzQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBqYXBpLmRhdGEuZm9yRWFjaChyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNBcnJheS5wdXNoKG1vZHVsZS5leHBvcnRzLmRlc2VyaWFsaXplKHsgZGF0YSA6IHJlcyB9KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNBcnJheSlcclxuICAgICAgICByZXR1cm4gcmVzQXJyYXk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiAoamFwaS5kYXRhID09IHVuZGVmaW5lZCk/IGphcGkgOiBuZXcgSnNvbkFwaVJlc291cmNlKGphcGkpLmRlc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5ub3JtYWxpemUgPSAoamFwaSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShqYXBpKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEpzb25BcGlSZXNvdXJjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2UgPSB7fSkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlLmRhdGEgIT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5kYXRhLmF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogcG9ydGFyZSBpZCBlIHR5cGUgaW4gdGVzdGEgYWQgb2duaSBvYmplY3QgW0JURl1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gdGhpcy5yZXNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoWydpZCcsICd0eXBlJ10uaW5jbHVkZXMoa2V5KSkgdGhpcy5kYXRhW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5oZWxwZXIuaXNBcGlSZXNvdXJjZShmaWVsZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSB0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzW2tleS5zdGFydHNXaXRoKCdfXycpPyBrZXkuc3Vic3RyKCdfXycubGVuZ3RoKSA6IGtleV0gPSB7IGRhdGE6IHsgdHlwZTogZmllbGQudHlwZSwgaWQ6IGZpZWxkLmlkIH0gfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSAmJiBrZXkuc3RhcnRzV2l0aCgnX18nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZygnQXJyYXkgUmVzb3VyY2UgcmVsYXRpb25zaGlwcyBub3Qgc3VwcG9ydGVkOiAnICsgcmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5kYXRhLmF0dHJpYnV0ZXNba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGRhdGE6IHRoaXMuZGF0YSB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZXNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLnJlc291cmNlLmRhdGEgPT0gdW5kZWZpbmVkKSAmJiBtb2RlbC5oZWxwZXIuaXNBcGlSZXNvdXJjZSh0aGlzLnJlc291cmNlKSkgcmV0dXJuIHRoaXMucmVzb3VyY2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc291cmNlLmRhdGE/IHRoaXMucmVzb3VyY2UuZGF0YSA6IHRoaXMucmVzb3VyY2U7XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBtb2RlbC5oZWxwZXIubmV3UmVzb3VyY2UoZGF0YS50eXBlLCBkYXRhLmlkLCBkYXRhLmF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgcmV0dXJuIHJlcztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5yZWxhdGlvbnNoaXBzKS5mb3JFYWNoKChyZWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbF9kYXRhID0gZGF0YS5yZWxhdGlvbnNoaXBzW3JlbF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKHJlbF9kYXRhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVsX2RhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc0FycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsX2RhdGEuZm9yRWFjaChyZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWxSZXMgPSByZWxhdGVkUmVzb3VyY2UodGhpcy5yZXNvdXJjZSwgcmQudHlwZSwgcmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNBcnJheS5wdXNoKHJlbFJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldFJlc291cmNlKHJlbCwgcmVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbFJlcyA9IHJlbGF0ZWRSZXNvdXJjZSh0aGlzLnJlc291cmNlLCByZWxfZGF0YS50eXBlLCByZWxfZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldFJlc291cmNlKHJlbCwgcmVsUmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IGphcGkgIEpTT05BcGkgZGF0YVxyXG4gKiBAcGFyYW0geyp9IHR5cGUgIHJlc291cmNlIHR5cGVcclxuICogQHBhcmFtIHsqfSBpZCAgICByZXNvdXJjZSBpZFxyXG4gKiBcclxuICogQ3JlYXRlIHJlbGF0aW9uc2hpcCBpbiByZXNvdXJjZSBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIHJlbGF0ZWRSZXNvdXJjZShqYXBpLCB0eXBlLCBpZCkge1xyXG4gICAgbGV0IHJlbFJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZSh0eXBlLCBpZCk7XHJcbiAgICBsZXQgaW5jID0ganNvbmFwaUluY2x1ZGVkKGphcGksIHR5cGUsIGlkKTtcclxuICAgIHJlbFJlcy5zZXRGaWVsZHMoaW5jLmF0dHJpYnV0ZXMpO1xyXG4gICAgcmV0dXJuIHJlbFJlcztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHsqfSBqYXBpICBKU09OQXBpIGRhdGEgXHJcbiAqIEBwYXJhbSB7Kn0gdHlwZSAgcmVzb3VyY2UgdHlwZVxyXG4gKiBAcGFyYW0geyp9IGlkICAgIHJlc291cmNlIGlkXHJcbiAqXHJcbiAqIFNlYXJjaCBmb3IgaW5jbHVkZWQgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIGpzb25hcGlJbmNsdWRlZChqYXBpLCB0eXBlLCBpZCkge1xyXG4gICAgaWYgKChqYXBpID09IHVuZGVmaW5lZCkgfHwgKGphcGkuaW5jbHVkZWQgPT0gdW5kZWZpbmVkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGxldCBpbmNSZXMgPSB1bmRlZmluZWQ7XHJcbiAgICBqYXBpLmluY2x1ZGVkLnNvbWUoaW5jID0+IHtcclxuICAgICAgICBpZiAoKGluYy50eXBlID09IHR5cGUpICYmIChpbmMuaWQgPT0gaWQpKSBpbmNSZXMgPSBpbmM7XHJcbiAgICAgICAgcmV0dXJuIChpbmNSZXMgIT0gdW5kZWZpbmVkKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaW5jUmVzO1xyXG59XHJcbiIsImNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBtc2cgOiAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLmNvbnNvbGUpIGNvbnNvbGUubG9nKChtZXNzYWdlID09IHVuZGVmaW5lZCk/ICcnIDogbWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGVuYWJsZSA6ICgpID0+IHtcclxuICAgICAgICBzZGsuY29uc29sZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc2FibGUgOiAoKSA9PiB7XHJcbiAgICAgICAgc2RrLmNvbnNvbGUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJvYmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZyBlbmFibGVkOiAnICsgc2RrLmNvbnNvbGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZiBsb2cgaXMgZW5hYmxlZCBidXQgaXMgbm90IHZpc2libGUgbWF5YmUgeW91IGFyZSBub3QgaW4gZGVidWcgbW9kZScpXHJcbiAgICB9LFxyXG5cclxuICAgIGdldCBlbmFibGVkKCkgeyByZXR1cm4gc2RrLmNvbnNvbGUgPT09IHRydWU7IH1cclxuXHJcbn0iLCIvLyBGaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGF0IDAyLzAzLzIwMTkgMTk6Mjc6NTkgYnkgY29tbWVyY2VsYXllci1qcy1zZGstY29kZWdlblxyXG5cclxuXHJcbi8vIEJhc2ljIEFic3RyYWN0IFJlc291cmNlXHJcbmNsYXNzIFJlc291cmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0eXBlLCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlzQXBpUmVzb3VyY2UoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBzZXRSZXNvdXJjZShmaWVsZCwgcmVzKSB7IGlmICgocmVzICE9IHVuZGVmaW5lZCkgJiYgKGhlbHBlci5pc0FwaVJlc291cmNlKHJlcykgfHwgaGVscGVyLmlzQXBpUmVzb3VyY2VBcnJheShyZXMpKSkgdGhpc1snX18nLmNvbmNhdChmaWVsZCldID0gcmVzOyB9XHJcblx0Z2V0UmVzb3VyY2UoZmllbGQpIHsgcmV0dXJuIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXTsgfVxyXG5cdHNldEZpZWxkcyhmaWVsZHMgPSB7fSkgeyBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGQgPT4geyB0aGlzW2ZpZWxkXSA9IGZpZWxkc1tmaWVsZF0gfSk7IHJldHVybiB0aGlzOyB9XHJcblx0c2V0RmllbGQobmFtZSwgdmFsdWUpIHsgaWYgKG5hbWUpIHRoaXNbbmFtZV0gPSB2YWx1ZTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBZGRyZXNzIHJlc291cmNlXHJcbmNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQWRkcmVzcy5UWVBFKTtcclxuXHRcdHRoaXMuYnVzaW5lc3MgPSBmaWVsZHMuYnVzaW5lc3M7XHJcblx0XHR0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuXHRcdHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuXHRcdHRoaXMuY29tcGFueSA9IGZpZWxkcy5jb21wYW55O1xyXG5cdFx0dGhpcy5saW5lXzEgPSBmaWVsZHMubGluZV8xO1xyXG5cdFx0dGhpcy5saW5lXzIgPSBmaWVsZHMubGluZV8yO1xyXG5cdFx0dGhpcy5jaXR5ID0gZmllbGRzLmNpdHk7XHJcblx0XHR0aGlzLnppcF9jb2RlID0gZmllbGRzLnppcF9jb2RlO1xyXG5cdFx0dGhpcy5zdGF0ZV9jb2RlID0gZmllbGRzLnN0YXRlX2NvZGU7XHJcblx0XHR0aGlzLmNvdW50cnlfY29kZSA9IGZpZWxkcy5jb3VudHJ5X2NvZGU7XHJcblx0XHR0aGlzLnBob25lID0gZmllbGRzLnBob25lO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuXHRcdHRoaXMubm90ZXMgPSBmaWVsZHMubm90ZXM7XHJcblx0XHR0aGlzLmxhdCA9IGZpZWxkcy5sYXQ7XHJcblx0XHR0aGlzLmxuZyA9IGZpZWxkcy5sbmc7XHJcblx0XHR0aGlzLmJpbGxpbmdfaW5mbyA9IGZpZWxkcy5iaWxsaW5nX2luZm87XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBnZW9jb2Rlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnZ2VvY29kZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBnZW9jb2RlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdnZW9jb2RlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDcmVkaXQgQ2FyZCByZXNvdXJjZVxyXG5jbGFzcyBDcmVkaXRDYXJkIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2NyZWRpdF9jYXJkcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIENyZWRpdENhcmQuVFlQRSk7XHJcblx0XHR0aGlzLmZpcnN0X25hbWUgPSBmaWVsZHMuZmlyc3RfbmFtZTtcclxuXHRcdHRoaXMubGFzdF9uYW1lID0gZmllbGRzLmxhc3RfbmFtZTtcclxuXHRcdHRoaXMubnVtYmVyID0gZmllbGRzLm51bWJlcjtcclxuXHRcdHRoaXMubW9udGggPSBmaWVsZHMubW9udGg7XHJcblx0XHR0aGlzLnllYXIgPSBmaWVsZHMueWVhcjtcclxuXHRcdHRoaXMudmVyaWZpY2F0aW9uX3ZhbHVlID0gZmllbGRzLnZlcmlmaWNhdGlvbl92YWx1ZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJBZGRyZXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX2FkZHJlc3NlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyQWRkcmVzcy5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIEdyb3VwIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyR3JvdXAgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfZ3JvdXBzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJHcm91cC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBQYXNzd29yZCBSZXNldCByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBhc3N3b3JkUmVzZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXNzd29yZFJlc2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcblx0XHR0aGlzLl9yZXNldF9wYXNzd29yZF90b2tlbiA9IGZpZWxkcy5fcmVzZXRfcGFzc3dvcmRfdG9rZW47XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFBheW1lbnQgU291cmNlIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGF5bWVudFNvdXJjZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXltZW50X3NvdXJjZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBheW1lbnRTb3VyY2UuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgU3Vic2NyaXB0aW9uIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyU3Vic2NyaXB0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclN1YnNjcmlwdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyLlRZUEUpO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGZpZWxkcy5lbWFpbDtcclxuXHRcdHRoaXMucGFzc3dvcmQgPSBmaWVsZHMucGFzc3dvcmQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcl9ncm91cCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXJfZ3JvdXAnLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcl9ncm91cCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcl9ncm91cCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZWxpdmVyeSBMZWFkIFRpbWUgcmVzb3VyY2VcclxuY2xhc3MgRGVsaXZlcnlMZWFkVGltZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdkZWxpdmVyeV9sZWFkX3RpbWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgRGVsaXZlcnlMZWFkVGltZS5UWVBFKTtcclxuXHRcdHRoaXMubWluX2hvdXJzID0gZmllbGRzLm1pbl9ob3VycztcclxuXHRcdHRoaXMubWF4X2hvdXJzID0gZmllbGRzLm1heF9ob3VycztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW1wb3J0IHJlc291cmNlXHJcbmNsYXNzIEltcG9ydCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdpbXBvcnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgSW1wb3J0LlRZUEUpO1xyXG5cdFx0dGhpcy5yZXNvdXJjZV90eXBlID0gZmllbGRzLnJlc291cmNlX3R5cGU7XHJcblx0XHR0aGlzLnBhcmVudF9yZXNvdXJjZV9pZCA9IGZpZWxkcy5wYXJlbnRfcmVzb3VyY2VfaWQ7XHJcblx0XHR0aGlzLmlucHV0cyA9IGZpZWxkcy5pbnB1dHM7XHJcblx0XHR0aGlzLmNsZWFudXBfcmVjb3JkcyA9IGZpZWxkcy5jbGVhbnVwX3JlY29yZHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEludmVudG9yeSBNb2RlbCByZXNvdXJjZVxyXG5jbGFzcyBJbnZlbnRvcnlNb2RlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdpbnZlbnRvcnlfbW9kZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgSW52ZW50b3J5TW9kZWwuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gTGluZSBJdGVtIE9wdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBMaW5lSXRlbU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdsaW5lX2l0ZW1fb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtT3B0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG5cdFx0dGhpcy5vcHRpb25zID0gZmllbGRzLm9wdGlvbnM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBsaW5lX2l0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScsIHZhbHVlKSB9XHJcblx0Z2V0IGxpbmVfaXRlbSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdsaW5lX2l0ZW0nKSB9XHJcblx0c2V0IHNrdV9vcHRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBza3Vfb3B0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdV9vcHRpb24nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTGluZSBJdGVtIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG5cdFx0dGhpcy5fdXBkYXRlX3F1YW50aXR5ID0gZmllbGRzLl91cGRhdGVfcXVhbnRpdHk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG5cdHNldCBpdGVtKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgaXRlbSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpdGVtJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1hcmtldCByZXNvdXJjZVxyXG5jbGFzcyBNYXJrZXQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWFya2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1hcmtldC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5mYWNlYm9va19waXhlbF9pZCA9IGZpZWxkcy5mYWNlYm9va19waXhlbF9pZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1lcmNoYW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtZXJjaGFudCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1lcmNoYW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21lcmNoYW50JykgfVxyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG5cdHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcblx0Z2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWVyY2hhbnQgcmVzb3VyY2VcclxuY2xhc3MgTWVyY2hhbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbWVyY2hhbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWVyY2hhbnQuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gT3JkZXIgcmVzb3VyY2VcclxuY2xhc3MgT3JkZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnb3JkZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgT3JkZXIuVFlQRSk7XHJcblx0XHR0aGlzLmd1ZXN0ID0gZmllbGRzLmd1ZXN0O1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfcGFzc3dvcmQgPSBmaWVsZHMuY3VzdG9tZXJfcGFzc3dvcmQ7XHJcblx0XHR0aGlzLmxhbmd1YWdlX2NvZGUgPSBmaWVsZHMubGFuZ3VhZ2VfY29kZTtcclxuXHRcdHRoaXMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2sgPSBmaWVsZHMuc2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2s7XHJcblx0XHR0aGlzLmNvdXBvbl9jb2RlID0gZmllbGRzLmNvdXBvbl9jb2RlO1xyXG5cdFx0dGhpcy5jYXJ0X3VybCA9IGZpZWxkcy5jYXJ0X3VybDtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy50ZXJtc191cmwgPSBmaWVsZHMudGVybXNfdXJsO1xyXG5cdFx0dGhpcy5wcml2YWN5X3VybCA9IGZpZWxkcy5wcml2YWN5X3VybDtcclxuXHRcdHRoaXMuX3BsYWNlID0gZmllbGRzLl9wbGFjZTtcclxuXHRcdHRoaXMuX2NhbmNlbCA9IGZpZWxkcy5fY2FuY2VsO1xyXG5cdFx0dGhpcy5fYXBwcm92ZSA9IGZpZWxkcy5fYXBwcm92ZTtcclxuXHRcdHRoaXMuX2NhcHR1cmUgPSBmaWVsZHMuX2NhcHR1cmU7XHJcblx0XHR0aGlzLl91cGRhdGVfdGF4ZXMgPSBmaWVsZHMuX3VwZGF0ZV90YXhlcztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZCA9IGZpZWxkcy5fc2hpcHBpbmdfYWRkcmVzc19jbG9uZV9pZDtcclxuXHRcdHRoaXMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkID0gZmllbGRzLl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZDtcclxuXHRcdHRoaXMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZztcclxuXHRcdHRoaXMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZztcclxuXHRcdHRoaXMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0ID0gZmllbGRzLl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldDtcclxuXHRcdHRoaXMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2s7XHJcblx0XHR0aGlzLl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2sgPSBmaWVsZHMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3JlZnJlc2ggPSBmaWVsZHMuX3JlZnJlc2g7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBzaGlwcGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19hZGRyZXNzJykgfVxyXG5cdHNldCBiaWxsaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGJpbGxpbmdfYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IHBheW1lbnRfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJjZWwgcmVzb3VyY2VcclxuY2xhc3MgUGFyY2VsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BhcmNlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXJjZWwuVFlQRSk7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG5cdFx0dGhpcy5lZWxfcGZjID0gZmllbGRzLmVlbF9wZmM7XHJcblx0XHR0aGlzLmNvbnRlbnRzX3R5cGUgPSBmaWVsZHMuY29udGVudHNfdHlwZTtcclxuXHRcdHRoaXMuY29udGVudHNfZXhwbGFuYXRpb24gPSBmaWVsZHMuY29udGVudHNfZXhwbGFuYXRpb247XHJcblx0XHR0aGlzLmN1c3RvbXNfY2VydGlmeSA9IGZpZWxkcy5jdXN0b21zX2NlcnRpZnk7XHJcblx0XHR0aGlzLmN1c3RvbXNfc2lnbmVyID0gZmllbGRzLmN1c3RvbXNfc2lnbmVyO1xyXG5cdFx0dGhpcy5ub25fZGVsaXZlcnlfb3B0aW9uID0gZmllbGRzLm5vbl9kZWxpdmVyeV9vcHRpb247XHJcblx0XHR0aGlzLnJlc3RyaWN0aW9uX3R5cGUgPSBmaWVsZHMucmVzdHJpY3Rpb25fdHlwZTtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fY29tbWVudHMgPSBmaWVsZHMucmVzdHJpY3Rpb25fY29tbWVudHM7XHJcblx0XHR0aGlzLmN1c3RvbXNfaW5mb19yZXF1aXJlZCA9IGZpZWxkcy5jdXN0b21zX2luZm9fcmVxdWlyZWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwbWVudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcG1lbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwbWVudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwbWVudCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXltZW50IE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBQYXltZW50TWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BheW1lbnRfbWV0aG9kcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBheW1lbnRNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLnBheW1lbnRfc291cmNlX3R5cGUgPSBmaWVsZHMucGF5bWVudF9zb3VyY2VfdHlwZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgcGF5bWVudF9nYXRld2F5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X2dhdGV3YXkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheXBhbCBQYXltZW50IHJlc291cmNlXHJcbmNsYXNzIFBheXBhbFBheW1lbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5cGFsX3BheW1lbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5cGFsUGF5bWVudC5UWVBFKTtcclxuXHRcdHRoaXMucmV0dXJuX3VybCA9IGZpZWxkcy5yZXR1cm5fdXJsO1xyXG5cdFx0dGhpcy5jYW5jZWxfdXJsID0gZmllbGRzLmNhbmNlbF91cmw7XHJcblx0XHR0aGlzLm5vdGVfdG9fcGF5ZXIgPSBmaWVsZHMubm90ZV90b19wYXllcjtcclxuXHRcdHRoaXMucGF5cGFsX3BheWVyX2lkID0gZmllbGRzLnBheXBhbF9wYXllcl9pZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFByaWNlIExpc3QgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2VMaXN0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3ByaWNlX2xpc3RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2VMaXN0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmN1cnJlbmN5X2NvZGUgPSBmaWVsZHMuY3VycmVuY3lfY29kZTtcclxuXHRcdHRoaXMudGF4X2luY2x1ZGVkID0gZmllbGRzLnRheF9pbmNsdWRlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgcmVzb3VyY2VcclxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUHJpY2UuVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5hbW91bnRfY2VudHMgPSBmaWVsZHMuYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cyA9IGZpZWxkcy5jb21wYXJlX2F0X2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwbWVudCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwbWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwbWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwbWVudC5UWVBFKTtcclxuXHRcdHRoaXMuX29uX2hvbGQgPSBmaWVsZHMuX29uX2hvbGQ7XHJcblx0XHR0aGlzLl9waWNraW5nID0gZmllbGRzLl9waWNraW5nO1xyXG5cdFx0dGhpcy5fcGFja2luZyA9IGZpZWxkcy5fcGFja2luZztcclxuXHRcdHRoaXMuX3JlYWR5X3RvX3NoaXAgPSBmaWVsZHMuX3JlYWR5X3RvX3NoaXA7XHJcblx0XHR0aGlzLl9zaGlwID0gZmllbGRzLl9zaGlwO1xyXG5cdFx0dGhpcy5fZ2V0X3JhdGVzID0gZmllbGRzLl9nZXRfcmF0ZXM7XHJcblx0XHR0aGlzLnNlbGVjdGVkX3JhdGVfaWQgPSBmaWVsZHMuc2VsZWN0ZWRfcmF0ZV9pZDtcclxuXHRcdHRoaXMuX3B1cmNoYXNlID0gZmllbGRzLl9wdXJjaGFzZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBDYXRlZ29yeSByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ0NhdGVnb3J5IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX2NhdGVnb3JpZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ0NhdGVnb3J5LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIE1ldGhvZCByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ01ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdNZXRob2QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuXHRcdHRoaXMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBzaGlwcGluZ196b25lKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ196b25lJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfem9uZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ196b25lJykgfVxyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBab25lIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nWm9uZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ196b25lcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nWm9uZS5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMuY291bnRyeV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMuc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X3N0YXRlX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3N0YXRlX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLnppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLnppcF9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3RfemlwX2NvZGVfcmVnZXggPSBmaWVsZHMubm90X3ppcF9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIFNrdU9wdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3Vfb3B0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNrdU9wdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5kZWxheV9ob3VycyA9IGZpZWxkcy5kZWxheV9ob3VycztcclxuXHRcdHRoaXMuc2t1X2NvZGVfcmVnZXggPSBmaWVsZHMuc2t1X2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2t1IHJlc291cmNlXHJcbmNsYXNzIFNrdSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdza3VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1LlRZUEUpO1xyXG5cdFx0dGhpcy5jb2RlID0gZmllbGRzLmNvZGU7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBmaWVsZHMuZGVzY3JpcHRpb247XHJcblx0XHR0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcblx0XHR0aGlzLnRhZ19uYW1lcyA9IGZpZWxkcy50YWdfbmFtZXM7XHJcblx0XHR0aGlzLnBpZWNlc19wZXJfcGFjayA9IGZpZWxkcy5waWVjZXNfcGVyX3BhY2s7XHJcblx0XHR0aGlzLndlaWdodCA9IGZpZWxkcy53ZWlnaHQ7XHJcblx0XHR0aGlzLnVuaXRfb2Zfd2VpZ2h0ID0gZmllbGRzLnVuaXRfb2Zfd2VpZ2h0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0l0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfaXRlbXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0l0ZW0uVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgTGV2ZWwgcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tMZXZlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19sZXZlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0xldmVsLlRZUEUpO1xyXG5cdFx0dGhpcy5wcmlvcml0eSA9IGZpZWxkcy5wcmlvcml0eTtcclxuXHRcdHRoaXMub25faG9sZCA9IGZpZWxkcy5vbl9ob2xkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMb2NhdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xvY2F0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xvY2F0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTG9jYXRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMubGFiZWxfZm9ybWF0ID0gZmllbGRzLmxhYmVsX2Zvcm1hdDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gV2ViaG9vayByZXNvdXJjZVxyXG5jbGFzcyBXZWJob29rIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dlYmhvb2tzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2ViaG9vay5UWVBFKTtcclxuXHRcdHRoaXMudG9waWMgPSBmaWVsZHMudG9waWM7XHJcblx0XHR0aGlzLmNhbGxiYWNrX3VybCA9IGZpZWxkcy5jYWxsYmFja191cmw7XHJcblx0XHR0aGlzLmluY2x1ZGVfcmVzb3VyY2VzID0gZmllbGRzLmluY2x1ZGVfcmVzb3VyY2VzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBXaXJlIFRyYW5zZmVyIHJlc291cmNlXHJcbmNsYXNzIFdpcmVUcmFuc2ZlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3aXJlX3RyYW5zZmVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdpcmVUcmFuc2Zlci5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG9yZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdvcmRlcicsIHZhbHVlKSB9XHJcblx0Z2V0IG9yZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ29yZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEFkZHJlc3MsXHJcblx0Q3JlZGl0Q2FyZCxcclxuXHRDdXN0b21lckFkZHJlc3MsXHJcblx0Q3VzdG9tZXJHcm91cCxcclxuXHRDdXN0b21lclBhc3N3b3JkUmVzZXQsXHJcblx0Q3VzdG9tZXJQYXltZW50U291cmNlLFxyXG5cdEN1c3RvbWVyU3Vic2NyaXB0aW9uLFxyXG5cdEN1c3RvbWVyLFxyXG5cdERlbGl2ZXJ5TGVhZFRpbWUsXHJcblx0SW1wb3J0LFxyXG5cdEludmVudG9yeU1vZGVsLFxyXG5cdExpbmVJdGVtT3B0aW9uLFxyXG5cdExpbmVJdGVtLFxyXG5cdE1hcmtldCxcclxuXHRNZXJjaGFudCxcclxuXHRPcmRlcixcclxuXHRQYXJjZWwsXHJcblx0UGF5bWVudE1ldGhvZCxcclxuXHRQYXlwYWxQYXltZW50LFxyXG5cdFByaWNlTGlzdCxcclxuXHRQcmljZSxcclxuXHRTaGlwbWVudCxcclxuXHRTaGlwcGluZ0NhdGVnb3J5LFxyXG5cdFNoaXBwaW5nTWV0aG9kLFxyXG5cdFNoaXBwaW5nWm9uZSxcclxuXHRTa3VPcHRpb24sXHJcblx0U2t1LFxyXG5cdFN0b2NrSXRlbSxcclxuXHRTdG9ja0xldmVsLFxyXG5cdFN0b2NrTG9jYXRpb24sXHJcblx0V2ViaG9vayxcclxuXHRXaXJlVHJhbnNmZXIsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gKioqKioqKioqKiBIZWxwZXIgKioqKioqKioqKiAvL1xyXG5cclxubGV0IGhlbHBlciA9IHt9XHJcbm1vZHVsZS5leHBvcnRzLmhlbHBlciA9IGhlbHBlcjtcclxuXHJcbmhlbHBlci5hbGxFbGVtZW50cyA9ICgpID0+IHtcclxuXHRsZXQgZWxlbWVudHMgPSBbXTtcclxuXHRjb25zdCBtb2RlbCA9IG1vZHVsZS5leHBvcnRzO1xyXG5cdE9iamVjdC5rZXlzKG1vZGVsKS5zb21lKChjbCkgPT4ge1xyXG5cdFx0aWYgKCFjbC5zdGFydHNXaXRoKCdoZWxwZXInKSkgZWxlbWVudHMucHVzaChjbClcclxuXHR9KTtcclxuXHRyZXR1cm4gZWxlbWVudHM7XHJcbn1cclxuXHJcbmhlbHBlci5uZXdSZXNvdXJjZSA9ICh0eXBlLCBpZCwgZmllbGRzKSA9PiB7XHJcblx0bGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG5cdGNvbnN0IG1vZGVsID0gbW9kdWxlLmV4cG9ydHM7XHJcblx0Ly8gT2JqZWN0LmtleXMobW9kZWwpLnNvbWUoKGNsKSA9PiB7XHJcblx0Ly8gXHRpZiAoIWNsLnN0YXJ0c1dpdGgoJ2hlbHBlcicpKSB7XHJcblx0Ly8gXHRcdGxldCBjbF90eXBlID0gbW9kZWxbY2xdLlRZUEU7XHJcblx0Ly8gXHRcdGlmIChjbF90eXBlICYmIChjbF90eXBlID09IHR5cGUpKSB7XHJcblx0Ly8gXHRcdFx0aW5zdGFuY2UgPSBuZXcgbW9kZWxbY2xdKGlkIHx8IGZpZWxkcy5pZCwgZmllbGRzKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fVxyXG5cdC8vIFx0cmV0dXJuIChpbnN0YW5jZSAhPSB1bmRlZmluZWQpO1xyXG5cdC8vIH0pO1xyXG5cdGhlbHBlci5hbGxFbGVtZW50cygpLnNvbWUoY2wgPT4ge1xyXG5cdFx0bGV0IGNsX3R5cGUgPSBtb2RlbFtjbF0uVFlQRTtcclxuXHRcdGlmIChjbF90eXBlICYmIChjbF90eXBlID09IHR5cGUpKSB7XHJcblx0XHRcdGluc3RhbmNlID0gbmV3IG1vZGVsW2NsXShpZCB8fCBmaWVsZHMuaWQsIGZpZWxkcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKGluc3RhbmNlICE9IHVuZGVmaW5lZCk7XHJcblx0fSlcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmhlbHBlci5pc0FwaVJlc291cmNlID0gKHJlcykgPT4ge1xyXG5cdHJldHVybiAocmVzICYmIHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSk7XHJcbn1cclxuXHJcbmhlbHBlci5pc0FwaVJlc291cmNlQXJyYXkgPSAocmVzQXJyYXkpID0+IHtcclxuXHRyZXR1cm4gKHJlc0FycmF5ICYmIEFycmF5LmlzQXJyYXkocmVzQXJyYXkpICYmICgocmVzQXJyYXkubGVuZ3RoID09IDApIHx8IChoZWxwZXIuaXNBcGlSZXNvdXJjZShyZXNBcnJheVswXSkpKSk7XHJcbn1cclxuIiwiXHJcbmNsYXNzIFF1ZXJ5RmlsdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3BhcnNlX2ZpZWxkc2V0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmllbGRzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXN0b21fcGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1F1ZXJ5RmlsdGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHNvcnQoZmllbGQsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzLnB1c2goKGRlc2NlbmRpbmc/ICctJyA6ICcnKS5jb25jYXQoZmllbGQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHMocmVzb3VyY2UsIC4uLmZpZWxkcykge1xyXG4gICAgICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkKSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzb3VyY2VdID0gZmllbGRzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluY2x1ZGUoLi4ucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHJlc291cmNlcy5mb3JFYWNoKHJlcyA9PiB7IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzKSB9KVxyXG4gICAgICAgIC8vIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlc291cmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGZpbHRlciAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcnMoZmlsdGVycykge1xyXG4gICAgICAgIGlmIChmaWx0ZXJzICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaChmaWx0ZXIgPT4geyB0aGlzLmZpbHRlcihmaWx0ZXIsIGZpbHRlcnNbZmlsdGVyXSkgfSlcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKChrZXkgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkgdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4geyB0aGlzLnBhcmFtKGtleSwgcGFyYW1zW2tleV0pIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSAodGhpcy5wYWdlX251bWJlciAmJiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMucGFnZU51bWJlcikpPyBwYWdlX251bWJlcisrIDogMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZChqb2luKSB7XHJcblxyXG4gICAgICAgIGxldCBxc01hcCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5mb3JFYWNoKGZpbHRlciA9PiB7IHFzTWFwW2BmaWx0ZXJbJHtmaWx0ZXJ9XWBdID0gdGhpcy5maWx0ZXJfZmllbGRzW2ZpbHRlcl0gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5jbHVkZWQgUmVzb3VyY2VzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5pbmNsdWRlID0gdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBTcGFyc2UgRmllbGRzZXRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5mb3JFYWNoKHJlcyA9PiB7IHFzTWFwW2BmaWVsZHNbJHtyZXN9XWBdID0gdGhpcy5zcGFyc2VfZmllbGRzZXRzW3Jlc10uam9pbignLCcpIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNvcnRfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5zb3J0ID0gdGhpcy5zb3J0X2ZpZWxkcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBQYXJhbXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmZvckVhY2goa2V5ID0+IHsgcXNNYXBba2V5XSA9IHRoaXMuY3VzdG9tX3BhcmFtc1trZXldIH0pXHJcblxyXG4gICAgICAgIC8vIFBhZ2luYXRpb25cclxuICAgICAgICBpZiAodGhpcy5wYWdlX251bWJlciAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW251bWJlcl0nXSA9IHRoaXMucGFnZV9udW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9zaXplICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2Vbc2l6ZV0nXSA9IHRoaXMucGFnZV9zaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gIWpvaW4/IHFzTWFwIDogT2JqZWN0LmtleXMocXNNYXApLm1hcChrZXkgPT4geyByZXR1cm4ga2V5ICsgJz0nICsgcXNNYXBba2V5XSB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IHF1ZXJ5ID0gcmVxdWlyZSgnLi9xdWVyeScpXHJcblxyXG5cclxuY2xhc3MgUXVlcnlFeHByZXNzaW9uIGV4dGVuZHMgcXVlcnkuUXVlcnlGaWx0ZXIge1xyXG5cclxuICAgIHN0YXRpYyBleHBsYWluKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBwID0gUXVlcnlFeHByZXNzaW9uLlBSRURJQ0FURVNbdHlwZV07XHJcbiAgICAgICAgcmV0dXJuIChwICE9IHVuZGVmaW5lZCk/IHAgOiAoJ1Vua25vd24gcHJlZGljYXRlICcgKyB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFBSRURJQ0FURVMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2VxJzogXCJlcXVhbHNcIixcclxuICAgICAgICAgICAgJ2VxX2FueSc6IFwiZXF1YWxzIGFueVwiLFxyXG4gICAgICAgICAgICAnZXFfYWxsJzogXCJlcXVhbHMgYWxsXCIsXHJcbiAgICAgICAgICAgICdub3RfZXEnOiBcIm5vdCBlcXVhbCB0b1wiLFxyXG4gICAgICAgICAgICAnbm90X2VxX2FueSc6IFwibm90IGVxdWFsIHRvIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X2VxX2FsbCc6IFwibm90IGVxdWFsIHRvIGFsbFwiLFxyXG4gICAgICAgICAgICAnbWF0Y2hlcyc6IFwibWF0Y2hlc1wiLFxyXG4gICAgICAgICAgICAnbWF0Y2hlc19hbnknOiBcIm1hdGNoZXMgYW55XCIsXHJcbiAgICAgICAgICAgICdtYXRjaGVzX2FsbCc6IFwibWF0Y2hlcyBhbGxcIixcclxuICAgICAgICAgICAgJ2RvZXNfbm90X21hdGNoJzogXCJkb2Vzbid0IG1hdGNoXCIsXHJcbiAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaF9hbnknOiBcImRvZXNuJ3QgbWF0Y2ggYW55XCIsXHJcbiAgICAgICAgICAgICdkb2VzX25vdF9tYXRjaF9hbGwnOiBcImRvZXNuJ3QgbWF0Y2ggYWxsXCIsXHJcbiAgICAgICAgICAgICdsdCc6IFwibGVzcyB0aGFuXCIsXHJcbiAgICAgICAgICAgICdsdF9hbnknOiBcImxlc3MgdGhhbiBhbnlcIixcclxuICAgICAgICAgICAgJ2x0X2FsbCc6IFwibGVzcyB0aGFuIGFsbFwiLFxyXG4gICAgICAgICAgICAnbHRlcSc6IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIsXHJcbiAgICAgICAgICAgICdsdGVxX2FueSc6IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvIGFueVwiLFxyXG4gICAgICAgICAgICAnbHRlcV9hbGwnOiBcImxlc3MgdGhhbiBvciBlcXVhbCB0byBhbGxcIixcclxuICAgICAgICAgICAgJ2d0JzogXCJncmVhdGVyIHRoYW5cIixcclxuICAgICAgICAgICAgJ2d0X2FueSc6IFwiZ3JlYXRlciB0aGFuIGFueVwiLFxyXG4gICAgICAgICAgICAnZ3RfYWxsJzogXCJncmVhdGVyIHRoYW4gYWxsXCIsXHJcbiAgICAgICAgICAgICdndGVxJzogXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIixcclxuICAgICAgICAgICAgJ2d0ZXFfYW55JzogXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYW55XCIsXHJcbiAgICAgICAgICAgICdndGVxX2FsbCc6IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGFsbFwiLFxyXG4gICAgICAgICAgICAnaW4nOiBcImluXCIsXHJcbiAgICAgICAgICAgICdpbl9hbnknOiBcImluIGFueVwiLFxyXG4gICAgICAgICAgICAnaW5fYWxsJzogXCJpbiBhbGxcIixcclxuICAgICAgICAgICAgJ25vdF9pbic6IFwibm90IGluXCIsXHJcbiAgICAgICAgICAgICdub3RfaW5fYW55JzogXCJub3QgaW4gYW55XCIsXHJcbiAgICAgICAgICAgICdub3RfaW5fYWxsJzogXCJub3QgaW4gYWxsXCIsXHJcbiAgICAgICAgICAgICdjb250JzogXCJjb250YWluc1wiLFxyXG4gICAgICAgICAgICAnY29udF9hbnknOiBcImNvbnRhaW5zIGFueVwiLFxyXG4gICAgICAgICAgICAnY29udF9hbGwnOiBcImNvbnRhaW5zIGFsbFwiLFxyXG4gICAgICAgICAgICAnbm90X2NvbnQnOiBcImRvZXNuJ3QgY29udGFpblwiLFxyXG4gICAgICAgICAgICAnbm90X2NvbnRfYW55JzogXCJkb2Vzbid0IGNvbnRhaW4gYW55XCIsXHJcbiAgICAgICAgICAgICdub3RfY29udF9hbGwnOiBcImRvZXNuJ3QgY29udGFpbiBhbGxcIixcclxuICAgICAgICAgICAgJ3N0YXJ0JzogXCJzdGFydHMgd2l0aFwiLFxyXG4gICAgICAgICAgICAnc3RhcnRfYW55JzogXCJzdGFydHMgd2l0aCBhbnlcIixcclxuICAgICAgICAgICAgJ3N0YXJ0X2FsbCc6IFwic3RhcnRzIHdpdGggYWxsXCIsXHJcbiAgICAgICAgICAgICdub3Rfc3RhcnQnOiBcImRvZXNuJ3Qgc3RhcnQgd2l0aFwiLFxyXG4gICAgICAgICAgICAnbm90X3N0YXJ0X2FueSc6IFwiZG9lc24ndCBzdGFydCB3aXRoIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X3N0YXJ0X2FsbCc6IFwiZG9lc24ndCBzdGFydCB3aXRoIGFsbFwiLFxyXG4gICAgICAgICAgICAnZW5kJzogXCJlbmRzIHdpdGhcIixcclxuICAgICAgICAgICAgJ2VuZF9hbnknOiBcImVuZHMgd2l0aCBhbnlcIixcclxuICAgICAgICAgICAgJ2VuZF9hbGwnOiBcImVuZHMgd2l0aCBhbGxcIixcclxuICAgICAgICAgICAgJ25vdF9lbmQnOiBcImRvZXNuJ3QgZW5kIHdpdGhcIixcclxuICAgICAgICAgICAgJ25vdF9lbmRfYW55JzogXCJkb2Vzbid0IGVuZCB3aXRoIGFueVwiLFxyXG4gICAgICAgICAgICAnbm90X2VuZF9hbGwnOiBcImRvZXNuJ3QgZW5kIHdpdGggYWxsXCIsXHJcbiAgICAgICAgICAgICd0cnVlJzogXCJpcyB0cnVlXCIsXHJcbiAgICAgICAgICAgICdmYWxzZSc6IFwiaXMgZmFsc2VcIixcclxuICAgICAgICAgICAgJ3ByZXNlbnQnOiBcImlzIHByZXNlbnRcIixcclxuICAgICAgICAgICAgJ2JsYW5rJzogXCJpcyBibGFua1wiLFxyXG4gICAgICAgICAgICAnbnVsbCc6IFwiaXMgbnVsbFwiLFxyXG4gICAgICAgICAgICAnbm90X251bGwnOiBcImlzIG5vdCBudWxsXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHN1cGVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5wcmVkaWNhdGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaXNRdWVyeUV4cHJlc3Npb24oKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgcHJlZGljYXRlKHR5cGUsIHZhbHVlLCAuLi5maWVsZHMpIHtcclxuICAgICAgICBpZiAoKGZpZWxkcyAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fX2Rpc2FibGVfcHJlZGljYXRlX2NoZWNrID09IHVuZGVmaW5lZCkgfHwgKHRoaXMuX19kaXNhYmxlX3ByZWRpY2F0ZV9jaGVjayAhPT0gdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKFF1ZXJ5RXhwcmVzc2lvbi5QUkVESUNBVEVTKS5pbmNsdWRlcyh0eXBlKSkgdGhyb3cgJ1VuZGVmaW5lZCBwcmVkaWNhdGUgJyArIHR5cGVcclxuICAgICAgICAgICAgbGV0IGZpZWxkc18gPSBBcnJheS5pc0FycmF5KGZpZWxkc1swXSk/IGZpZWxkc1swXSA6IGZpZWxkcztcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gJ2ZpbHRlcltxXVsnICsgZmllbGRzXy5qb2luKCdfb3JfJykgKyAnXycgKyB0eXBlICsgJ10nO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBBcnJheS5pc0FycmF5KHZhbHVlKT8gdmFsdWUuam9pbignLCcpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJlZGljYXRlc1trZXldID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBleHBsYWluKHR5cGUpIHsgcmV0dXJuIFF1ZXJ5RXhwcmVzc2lvbi5leHBsYWluKHR5cGUpIH1cclxuXHJcbiAgICBidWlsZChqb2luKSB7XHJcbiAgICAgICAgbGV0IHFzTWFwID0gc3VwZXIuYnVpbGQoam9pbik7XHJcbiAgICAgICAgaWYgKCFqb2luKSBPYmplY3Qua2V5cyh0aGlzLnByZWRpY2F0ZXMpLmZvckVhY2gocCA9PiB7IHFzTWFwW3BdID0gdGhpcy5wcmVkaWNhdGVzW3BdOyB9KVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocXNNYXAubGVuZ3RoID4gMCkgcXNNYXAgKz0gJyYnO1xyXG4gICAgICAgICAgICBxc01hcCArPSBPYmplY3Qua2V5cyh0aGlzLnByZWRpY2F0ZXMpLm1hcChrZXkgPT4geyByZXR1cm4ga2V5ICsgJz0nICsgdGhpcy5wcmVkaWNhdGVzW2tleV0gfSkuam9pbignJicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXNNYXA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFByZWRpY2F0ZSBzaG9ydGN1dHNcclxuICAgIF9lcSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZXEnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZXFfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdlcV9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZXFfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdlcV9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2VxKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfZXEnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2VxX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2VxX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfZXFfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfZXFfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX21hdGNoZXModmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ21hdGNoZXMnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbWF0Y2hlc19hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ21hdGNoZXNfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX21hdGNoZXNfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdtYXRjaGVzX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9kb2VzX25vdF9tYXRjaCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZG9lc19ub3RfbWF0Y2gnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZG9lc19ub3RfbWF0Y2hfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdkb2VzX25vdF9tYXRjaF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZG9lc19ub3RfbWF0Y2hfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdkb2VzX25vdF9tYXRjaF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbHQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2x0JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2x0X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbHRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2x0X2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbHRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2x0ZXEodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2x0ZXEnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbHRlcV9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2x0ZXFfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2x0ZXFfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdsdGVxX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ndCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZ3QnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZ3RfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdndF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZ3RfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdndF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZ3RlcSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZ3RlcScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ndGVxX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnZ3RlcV9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZ3RlcV9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2d0ZXFfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2luKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdpbicsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9pbl9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2luX2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9pbl9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2luX2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfaW4odmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9pbicsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfaW5fYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfaW5fYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9pbl9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9pbl9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfY29udCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnY29udCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9jb250X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnY29udF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfY29udF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2NvbnRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9jb250KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfY29udCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfY29udF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9jb250X2FueScsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfY29udCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2NvbnQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2NvbnRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfY29udF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2NvbnRfYWxsKHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdub3RfY29udF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfc3RhcnQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ3N0YXJ0JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX3N0YXJ0X2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnc3RhcnRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX3N0YXJ0X2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnc3RhcnRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9zdGFydCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X3N0YXJ0JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX25vdF9zdGFydF9hbnkodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9zdGFydF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X3N0YXJ0X2FsbCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X3N0YXJ0X2FsbCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9lbmQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2VuZCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9lbmRfYW55KHZhbHVlLCAuLi5maWVsZHMpIHsgcmV0dXJuIHRoaXMucHJlZGljYXRlKCdlbmRfYW55JywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX2VuZF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2VuZF9hbGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2VuZCh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2VuZCcsIHZhbHVlLCBmaWVsZHMpIH1cclxuICAgIF9ub3RfZW5kX2FueSh2YWx1ZSwgLi4uZmllbGRzKSB7IHJldHVybiB0aGlzLnByZWRpY2F0ZSgnbm90X2VuZF9hbnknLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X2VuZF9hbGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9lbmRfYWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX3RydWUodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ3RydWUnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfZmFsc2UodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2ZhbHNlJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX3ByZXNlbnQodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ3ByZXNlbnQnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfYmxhbmsodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ2JsYW5rJywgdmFsdWUsIGZpZWxkcykgfVxyXG4gICAgX251bGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ251bGwnLCB2YWx1ZSwgZmllbGRzKSB9XHJcbiAgICBfbm90X251bGwodmFsdWUsIC4uLmZpZWxkcykgeyByZXR1cm4gdGhpcy5wcmVkaWNhdGUoJ25vdF9udWxsJywgdmFsdWUsIGZpZWxkcykgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlFeHByZXNzaW9uXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5ld0luc3RhbmNlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBRdWVyeUV4cHJlc3Npb24oKTtcclxufVxyXG4iLCJcclxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi9sb2cnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbG9nIDogKG1lc3NhZ2UpID0+IHsgICAgLy8gQldDXHJcbiAgICAgICAgbG9nLm1zZyhtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZW5kTWFwIDogKG1hcCwgZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKG1hcCA9PSB1bmRlZmluZWQpIG1hcCA9IHt9O1xyXG4gICAgICAgIGlmIChleHQgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhleHQpLmZvckVhY2goa2V5ID0+IHsgbWFwW2tleV0gPSBleHRba2V5XTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2VNYXBzIDogKG1hcDEsIG1hcDIpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5tYXAxLCAuLi5tYXAyIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xvbmVNYXAgOiAobWFwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChtYXAgPT0gdW5kZWZpbmVkKT8gbWFwIDogeyAuLi5tYXAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgc2xlZXAgOiAobXMsIG1zZykgPT4ge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzLmxvZygobXNnPyBgJHttc2d9IC0gYCA6ICcnKS5jb25jYXQoYHdhaXRpbmcgJHttc30gbXNlY3MgLi4uYCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ3VpZCA6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgJy4nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikuc3Vic3RyKDAsIDYpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYXBpdGFsaXplIDogKHN0cikgPT4ge1xyXG4gICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyk/ICcnIDogIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290Lmpzb25BcGlOb3JtYWxpemUgPSBmYWN0b3J5KCk7XG4gICAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gTm9ybWFsaXplcihkYXRhc2V0LCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb3JtYWxpemVyKSkge1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZXJJbnN0YW5jZSA9IG5ldyBOb3JtYWxpemVyKGRhdGFzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5ID8gbm9ybWFsaXplckluc3RhbmNlLmdldChwcm9wZXJ0eSkgOiBub3JtYWxpemVySW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhc2V0ID0gSlNPTi5wYXJzZShkYXRhc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YXNldCB8fCAhZGF0YXNldC5kYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQganNvbiBhcGkgbm9ybWFsaXplciBpbnB1dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gZGF0YXNldDtcbiAgICAgICAgdGhpcy5pc0NvbGxlY3Rpb24gPSBpc0FycmF5KGRhdGFzZXQuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5oYXlzdGFjayA9IGJ1aWxkSGF5c3RhY2soZGF0YXNldC5pbmNsdWRlZCwgdGhpcy5pc0NvbGxlY3Rpb24gPyBkYXRhc2V0LmRhdGEgOiBbZGF0YXNldC5kYXRhXSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEhheXN0YWNrKGluY2x1ZGVkLCBhZGRpdGlvbmFsSXRlbXMpIHtcblxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IFtdO1xuICAgICAgICB2YXIgaGF5c3RhY2sgPSBpbmNsdWRlZCB8fCBbXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZXMucHVzaChlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVhY2goYWRkaXRpb25hbEl0ZW1zLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVzLmluZGV4T2YoZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpIDwgMCkge1xuICAgICAgICAgICAgICAgIGhheXN0YWNrLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICBpZiAoaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNhbGxiYWNrLmNhbGwoY29udGV4dCwga2V5LCBjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIGVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0LCBpdGVtLCBrZXkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWVwRXh0ZW5kKG91dCwgb2JqKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb3V0W2tleV0gPT09ICd1bmRlZmluZWQnICYmIChvdXRba2V5XSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVlcEV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlUcmVlLCBmdW5jdGlvbihwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0uZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbkRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSByZWxhdGVkRW50aXR5ID8gbmV3IE5vcm1hbGl6ZXIoe2RhdGE6IHJlbGF0ZWRFbnRpdHksIGluY2x1ZGVkOiBoYXlzdGFja30pIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0UmVsYXRpb25EYXRhKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSkge1xuXG4gICAgICAgIHJldHVybiBbJ2lkJywgJ3R5cGUnXS5pbmRleE9mKHByb3BlcnR5KSA+PSAwID8gZW50aXR5W3Byb3BlcnR5XSA6IGVudGl0eS5hdHRyaWJ1dGVzW3Byb3BlcnR5XTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0aW9uRGF0YShyZWxhdGlvbk5hbWUsIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXS5kYXRhO1xuICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IHJlbGF0aW9uRGF0YSAmJiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgIGlmIChpc0FycmF5KHJlbGF0ZWRFbnRpdHkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAocmVsYXRlZEVudGl0eSwgZnVuY3Rpb24oc2luZ2xlUmVsYXRlZEVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgc2luZ2xlUmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghcmVsYXRlZEVudGl0eSkge1xuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVJlbGF0aW9uKHByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICByZXR1cm4gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwobmV3IE5vcm1hbGl6ZXIoe1xuICAgICAgICAgICAgZGF0YTogcmVsYXRlZEVudGl0eSxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBoYXlzdGFja1xuICAgICAgICB9KSwgcHJvcGVydHlUcmVlKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgdmFyIHNlYXJjaCA9IGlzQXJyYXkocmVsYXRpb25EYXRhKSA/IG1hcChyZWxhdGlvbkRhdGEsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkO1xuICAgICAgICB9KSA6IFtyZWxhdGlvbkRhdGEudHlwZSArICdAJyArIHJlbGF0aW9uRGF0YS5pZF07XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgc2VhcmNoLmluZGV4T2YoaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZCkgPj0gMCAmJiB0ZW1wLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wLmxlbmd0aCA9PT0gMSAmJiAhaXNBcnJheShyZWxhdGlvbkRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvTmVzdGVkT2JqZWN0KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHZhciB0ZW1wID0gb2JqO1xuICAgICAgICB2YXIgY29sbGVjdGlvbkxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtjb2xsZWN0aW9uW2ldXSA9IHRlbXBbY29sbGVjdGlvbltpXV0gfHwgKGkrMSA9PT0gY29sbGVjdGlvbkxlbmd0aCA/IHVuZGVmaW5lZCA6IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFByb3BlcnR5VHJlZShwcm9wZXJ0eUxpc3QpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlMaXN0LCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlQYXJ0cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKHRlbXAsIGFycmF5VG9OZXN0ZWRPYmplY3QocHJvcGVydHlQYXJ0cykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpYVByb3BlcnR5VHJlZShwcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcCh0aGlzLmRhdGFzZXQuZGF0YSwgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIHRoaXMuaGF5c3RhY2spO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCB0aGlzLmRhdGFzZXQuZGF0YSwgdGhpcy5oYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgTm9ybWFsaXplci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwodGhpcywgYnVpbGRQcm9wZXJ0eVRyZWUoaXNBcnJheShwcm9wZXJ0eSkgPyBwcm9wZXJ0eSA6IFtwcm9wZXJ0eV0pKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IG1hcChyZXN1bHQsIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bcHJvcGVydHldOyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IHJlc3VsdFtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gTm9ybWFsaXplcjtcblxufSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=