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

// File automatically generated at 24/02/2019 11:10:49 by commercelayer-js-sdk-codegen
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
    } // Customer Group

  }, {
    key: "listCustomerGroups",
    value: function listCustomerGroups(filter, options) {
      return request(client.newRequest('/api/customer_groups').setParams(filter).setOptions(options));
    }
  }, {
    key: "allCustomerGroups",
    value: function allCustomerGroups(filter, options) {
      return all(this.listCustomerGroups, filter, options);
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
    } // Import

  }, {
    key: "listImports",
    value: function listImports(filter, options) {
      return request(client.newRequest('/api/imports').setParams(filter).setOptions(options));
    }
  }, {
    key: "allImports",
    value: function allImports(filter, options) {
      return all(this.listImports, filter, options);
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

// File automatically generated at 24/02/2019 11:10:49 by commercelayer-js-sdk-codegen
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

helper.newResource = function (type, id, fields) {
  var instance = undefined;
  var model = module.exports;
  Object.keys(model).some(function (cl) {
    if (!cl.startsWith('helper')) {
      var cl_type = model[cl].TYPE;

      if (cl_type && cl_type == type) {
        instance = new model[cl](id, fields);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9lcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2pzb25hcGkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9sb2cuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9tb2RlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3F1ZXJ5LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9qc29uLWFwaS1ub3JtYWxpemUvc3JjL2pzb25BcGlOb3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJtb2RlbCIsInF1ZXJ5IiwiY2xpZW50IiwibG9nIiwianNvbmFwaSIsImVycm9yUmVzcG9uc2UiLCJDTEFwaSIsImZpbHRlciIsIm9wdGlvbnMiLCJyZXF1ZXN0IiwibmV3UmVxdWVzdCIsInNldFBhcmFtcyIsInNldE9wdGlvbnMiLCJhbGwiLCJsaXN0QWRkcmVzc2VzIiwiaWQiLCJhZGRyZXNzIiwic2V0Qm9keSIsImxpc3RDcmVkaXRDYXJkcyIsImNyZWRpdF9jYXJkIiwibGlzdEN1c3RvbWVyQWRkcmVzc2VzIiwiY3VzdG9tZXJfYWRkcmVzcyIsImxpc3RDdXN0b21lckdyb3VwcyIsImN1c3RvbWVyX2dyb3VwIiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXNzd29yZF9yZXNldCIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UiLCJsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVycyIsImN1c3RvbWVyIiwibGlzdERlbGl2ZXJ5TGVhZFRpbWVzIiwiZGVsaXZlcnlfbGVhZF90aW1lIiwibGlzdEltcG9ydHMiLCJpbXBvcnRfIiwibGlzdEludmVudG9yeU1vZGVscyIsImludmVudG9yeV9tb2RlbCIsImxpc3RMaW5lSXRlbU9wdGlvbnMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtcyIsImxpbmVfaXRlbSIsImxpc3RNYXJrZXRzIiwibWFya2V0IiwibGlzdE1lcmNoYW50cyIsIm1lcmNoYW50IiwibGlzdE9yZGVycyIsIm9yZGVyIiwibGlzdFBhcmNlbHMiLCJwYXJjZWwiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXltZW50X21ldGhvZCIsImxpc3RQYXlwYWxQYXltZW50cyIsInBheXBhbF9wYXltZW50IiwibGlzdFByaWNlTGlzdHMiLCJwcmljZV9saXN0IiwibGlzdFByaWNlcyIsInByaWNlIiwibGlzdFNoaXBtZW50cyIsInNoaXBtZW50IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nTWV0aG9kcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ1pvbmVzIiwic2hpcHBpbmdfem9uZSIsImxpc3RTa3VPcHRpb25zIiwic2t1X29wdGlvbiIsImxpc3RTa3VzIiwic2t1IiwibGlzdFN0b2NrSXRlbXMiLCJzdG9ja19pdGVtIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbGV2ZWwiLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJzdG9ja19sb2NhdGlvbiIsImxpc3RXZWJob29rcyIsIndlYmhvb2siLCJsaXN0V2lyZVRyYW5zZmVycyIsIndpcmVfdHJhbnNmZXIiLCJhcGkiLCJjbGFwaSIsImluaXRpYWxpemUiLCJjZmciLCJtc2ciLCJuZXdJbnN0YW5jZSIsImFwaVJlcXVlc3QiLCJjb3JyZWxhdGlvbl9pZCIsImF0dGVtcHQiLCJwYXRoIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlamVjdCIsIm5ld0Vycm9yIiwiYm9keSIsInNlcmlhbGl6ZSIsImNhbGwiLCJ0aGVuIiwiYXBpUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlX3R5cGUiLCJjYXRjaCIsImFwaUVycm9yIiwiZXJyb3IiLCJlcnJvcl90eXBlIiwiZGVzZXJpYWxpemUiLCJkYXRhIiwibm9ybWFsaXplIiwiZXJyb3JzIiwic3RhdHVzIiwiYWRkQXBpRXJyb3JzIiwic3RhdHVzVGV4dCIsInJlcyIsImlzQXBpUmVzb3VyY2UiLCJkYXRhc2V0IiwibGlzdEZ1bmN0aW9uIiwic2V0UGFnZSIsInNpemUiLCJwYWdlX3NpemUiLCJudW1iZXIiLCJpc1F1ZXJ5RmlsdGVyIiwicGFnZSIsIm5hbWUiLCJzdGFydHNXaXRoIiwiZmlyc3RQYWdlIiwibWF4X3BhZ2UiLCJtZXRhIiwicGFnZV9jb3VudCIsImxlbmd0aCIsInBhZ2VzIiwiQXJyYXkiLCJwbiIsIm91dCIsInAiLCJjb25jYXQiLCJmb3JFYWNoIiwiYXhpb3MiLCJBdXRoIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJjaWQiLCJjc2VjIiwiQ2xpZW50Q3JlZGVudGlhbHMiLCJzY29wZSIsIkF1dGhvcml6YXRpb25Db2RlIiwiY29kZSIsInJlZGlyZWN0X3VyaSIsInVyaSIsIlBhc3N3b3JkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJ0b2tlbiIsIkFwaVRva2VuIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIm93bmVyX3R5cGUiLCJvd25lcl9pZCIsImNyZWF0ZWRfYXQiLCJleHBpcmVzX2luIiwiYXV0aGVudGljYXRlIiwiYXV0aCIsInBvc3QiLCJuZXdBdXRoQ29uZmlnIiwiY29uZmlnIiwidXRpbHMiLCJzZXR0aW5ncyIsInNkayIsImRlZmF1bHQiLCJtZXJnZU1hcHMiLCJjbGF5ZXIiLCJsYXN0QWNjZXNzVG9rZW4iLCJjaGVja0FwaUNvbmZpZyIsImJhc2VfdXJsIiwic2V0QXhpb3NDb25maWciLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGVidWciLCJ0cmFjZSIsImludGVyY2VwdG9ycyIsInVzZSIsIkFwaUNsaWVudCIsIm1ldGhvZCIsIkFwaVJlcXVlc3QiLCJwYXJhbXMiLCJndWlkIiwiYnVpbGQiLCJ0eXBlIiwicmVzcG9uc2VUeXBlIiwiZXJyb3JUeXBlIiwicmF3IiwiYXV0aF9hdHRlbXB0cyIsImF1dGhDb25maWciLCJhdXRoZW50aWNhdGlvbiIsImlzQXV0aENvbmZpZyIsImNsaWVudElkIiwibWFya2V0U2NvcGUiLCJtYXJrZXRfaWQiLCJjbGllbnRTZWNyZXQiLCJtZXNzYWdlIiwibmV3QXR0ZW1wdCIsImJhc2VfcGF0aCIsImNhbGxVcmwiLCJPYmplY3QiLCJrZXlzIiwicXVlcnlTdHJpbmciLCJtYXAiLCJrZXkiLCJqb2luIiwiYXhpb3NDb25maWciLCJ1cmwiLCJ0aW1lb3V0IiwiZXh0ZW5kTWFwIiwibWF4X2F0dGVtcHRzIiwicmV0cnkiLCJzbGVlcCIsIkF1dGhvcml6YXRpb24iLCJjb3VudHJ5X2NvZGUiLCJsYW5ndWFnZV9jb2RlIiwiY29uc29sZSIsIkVycm9yIiwidGl0bGUiLCJkZXRhaWwiLCJzb3VyY2UiLCJwb2ludGVyIiwiRXJyb3JSZXNwb25zZSIsImRlc2NyaXB0aW9uIiwiaXNBcGlFcnJvciIsInB1c2giLCJhZGRFcnJvciIsImFwaUVycm9ycyIsImFkZEFwaUVycm9yIiwiYXBpRXJyb3JzQ291bnQiLCJpbmRleCIsImVyciIsIngiLCJKc29uQXBpUmVzb3VyY2UiLCJqYXBpIiwiaXNBcnJheSIsInJlc0FycmF5IiwicmVzb3VyY2UiLCJhdHRyaWJ1dGVzIiwiZmllbGQiLCJpbmNsdWRlcyIsImhlbHBlciIsInJlbGF0aW9uc2hpcHMiLCJzdWJzdHIiLCJyZWwiLCJuZXdSZXNvdXJjZSIsInJlbF9kYXRhIiwicmQiLCJyZWxSZXMiLCJyZWxhdGVkUmVzb3VyY2UiLCJzZXRSZXNvdXJjZSIsImluYyIsImpzb25hcGlJbmNsdWRlZCIsInNldEZpZWxkcyIsImluY2x1ZGVkIiwiaW5jUmVzIiwic29tZSIsImVuYWJsZSIsImRpc2FibGUiLCJwcm9iZSIsImVuYWJsZWQiLCJSZXNvdXJjZSIsInJlZmVyZW5jZSIsIm1ldGFkYXRhIiwidXBkYXRlZF9hdCIsImlzQXBpUmVzb3VyY2VBcnJheSIsImZpZWxkcyIsInZhbHVlIiwiQWRkcmVzcyIsIlRZUEUiLCJidXNpbmVzcyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb21wYW55IiwibGluZV8xIiwibGluZV8yIiwiY2l0eSIsInppcF9jb2RlIiwic3RhdGVfY29kZSIsInBob25lIiwiZW1haWwiLCJub3RlcyIsImxhdCIsImxuZyIsImJpbGxpbmdfaW5mbyIsIkNyZWRpdENhcmQiLCJtb250aCIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJDdXN0b21lckFkZHJlc3MiLCJDdXN0b21lckdyb3VwIiwiQ3VzdG9tZXJQYXNzd29yZFJlc2V0IiwiY3VzdG9tZXJfZW1haWwiLCJjdXN0b21lcl9wYXNzd29yZCIsIl9yZXNldF9wYXNzd29yZF90b2tlbiIsIkN1c3RvbWVyUGF5bWVudFNvdXJjZSIsIkN1c3RvbWVyU3Vic2NyaXB0aW9uIiwiQ3VzdG9tZXIiLCJEZWxpdmVyeUxlYWRUaW1lIiwibWluX2hvdXJzIiwibWF4X2hvdXJzIiwiSW1wb3J0IiwicmVzb3VyY2VfdHlwZSIsInBhcmVudF9yZXNvdXJjZV9pZCIsImlucHV0cyIsImNsZWFudXBfcmVjb3JkcyIsIkludmVudG9yeU1vZGVsIiwiTGluZUl0ZW1PcHRpb24iLCJxdWFudGl0eSIsIkxpbmVJdGVtIiwic2t1X2NvZGUiLCJfdXBkYXRlX3F1YW50aXR5IiwiaW1hZ2VfdXJsIiwiTWFya2V0IiwiZmFjZWJvb2tfcGl4ZWxfaWQiLCJNZXJjaGFudCIsIk9yZGVyIiwiZ3Vlc3QiLCJzaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayIsImNvdXBvbl9jb2RlIiwiY2FydF91cmwiLCJyZXR1cm5fdXJsIiwidGVybXNfdXJsIiwicHJpdmFjeV91cmwiLCJfcGxhY2UiLCJfY2FuY2VsIiwiX2FwcHJvdmUiLCJfY2FwdHVyZSIsIl91cGRhdGVfdGF4ZXMiLCJfYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQiLCJfY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQiLCJfc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmciLCJfYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmciLCJfc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQiLCJfc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayIsIl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfcmVmcmVzaCIsIlBhcmNlbCIsIndlaWdodCIsInVuaXRfb2Zfd2VpZ2h0IiwiZWVsX3BmYyIsImNvbnRlbnRzX3R5cGUiLCJjb250ZW50c19leHBsYW5hdGlvbiIsImN1c3RvbXNfY2VydGlmeSIsImN1c3RvbXNfc2lnbmVyIiwibm9uX2RlbGl2ZXJ5X29wdGlvbiIsInJlc3RyaWN0aW9uX3R5cGUiLCJyZXN0cmljdGlvbl9jb21tZW50cyIsImN1c3RvbXNfaW5mb19yZXF1aXJlZCIsIlBheW1lbnRNZXRob2QiLCJwYXltZW50X3NvdXJjZV90eXBlIiwicHJpY2VfYW1vdW50X2NlbnRzIiwiUGF5cGFsUGF5bWVudCIsImNhbmNlbF91cmwiLCJub3RlX3RvX3BheWVyIiwicGF5cGFsX3BheWVyX2lkIiwiUHJpY2VMaXN0IiwiY3VycmVuY3lfY29kZSIsInRheF9pbmNsdWRlZCIsIlByaWNlIiwiYW1vdW50X2NlbnRzIiwiY29tcGFyZV9hdF9hbW91bnRfY2VudHMiLCJTaGlwbWVudCIsIl9vbl9ob2xkIiwiX3BpY2tpbmciLCJfcGFja2luZyIsIl9yZWFkeV90b19zaGlwIiwiX3NoaXAiLCJfZ2V0X3JhdGVzIiwic2VsZWN0ZWRfcmF0ZV9pZCIsIl9wdXJjaGFzZSIsIlNoaXBwaW5nQ2F0ZWdvcnkiLCJTaGlwcGluZ01ldGhvZCIsImZyZWVfb3Zlcl9hbW91bnRfY2VudHMiLCJTaGlwcGluZ1pvbmUiLCJjb3VudHJ5X2NvZGVfcmVnZXgiLCJub3RfY291bnRyeV9jb2RlX3JlZ2V4Iiwic3RhdGVfY29kZV9yZWdleCIsIm5vdF9zdGF0ZV9jb2RlX3JlZ2V4IiwiemlwX2NvZGVfcmVnZXgiLCJub3RfemlwX2NvZGVfcmVnZXgiLCJTa3VPcHRpb24iLCJkZWxheV9ob3VycyIsInNrdV9jb2RlX3JlZ2V4IiwiU2t1IiwidGFnX25hbWVzIiwicGllY2VzX3Blcl9wYWNrIiwiU3RvY2tJdGVtIiwiU3RvY2tMZXZlbCIsInByaW9yaXR5Iiwib25faG9sZCIsIlN0b2NrTG9jYXRpb24iLCJsYWJlbF9mb3JtYXQiLCJXZWJob29rIiwidG9waWMiLCJjYWxsYmFja191cmwiLCJpbmNsdWRlX3Jlc291cmNlcyIsIldpcmVUcmFuc2ZlciIsImluc3RhbmNlIiwiY2wiLCJjbF90eXBlIiwiUXVlcnlGaWx0ZXIiLCJjbGVhciIsInNvcnRfZmllbGRzIiwic3BhcnNlX2ZpZWxkc2V0cyIsImluY2x1ZGVkX3Jlc291cmNlcyIsImZpbHRlcl9maWVsZHMiLCJjdXN0b21fcGFyYW1zIiwicGFnZV9udW1iZXIiLCJkZXNjZW5kaW5nIiwicmVzb3VyY2VzIiwiZmlsdGVycyIsInBhcmFtIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwicXNNYXAiLCJpbmNsdWRlIiwic29ydCIsImV4dCIsIm1hcDEiLCJtYXAyIiwiY2xvbmVNYXAiLCJtcyIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqRkFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsbUJBQU8sQ0FBQyxxQ0FBRCxDQUF4QixDLENBRUE7O0FBQ0FGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRSxLQUFmLEdBQXVCRCxtQkFBTyxDQUFDLG1DQUFELENBQTlCLEMsQ0FFQTs7QUFDQUYsTUFBTSxDQUFD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RUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsR0FBRyxTQUFTO0FBQzVDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRCxRQUFRLGlDQUFPLEVBQUUsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUMzQixLQUFLLE1BQU0sRUFJTjs7QUFFTCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckU7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFFQUFxRSx3Q0FBd0M7O0FBRTdHLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsc0JBQXNCO0FBQzdDLDBHQUEwRztBQUMxRzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNEVBQTRFLHVCQUF1QixFQUFFO0FBQ3JHLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3JRRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVIiwiZmlsZSI6ImNvbW1lcmNlbGF5ZXItc2RrLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGF5ZXInKVxyXG5cclxuLy8gTW9kZWwgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLm1vZGVsID0gcmVxdWlyZSgnLi9saWIvbW9kZWwnKVxyXG5cclxuLy8gUXVlcnlGaWx0ZXIgRXh0ZW5zaW9uXHJcbm1vZHVsZS5leHBvcnRzLnF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKVxyXG4iLCIvLyBGaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGF0IDI0LzAyLzIwMTkgMTE6MTA6NDkgYnkgY29tbWVyY2VsYXllci1qcy1zZGstY29kZWdlblxyXG5cclxuXHJcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50JylcclxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi9sb2cnKVxyXG5jb25zdCBqc29uYXBpID0gcmVxdWlyZSgnLi9qc29uYXBpJylcclxuY29uc3QgZXJyb3JSZXNwb25zZSA9IHJlcXVpcmUoJy4vZXJyb3InKS5lcnJvclJlc3BvbnNlXHJcblxyXG5cclxuY2xhc3MgQ0xBcGkge1xyXG5cclxuXHQvLyBBZGRyZXNzXHJcblx0bGlzdEFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2FkZHJlc3NlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RBZGRyZXNzZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUFkZHJlc3MoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVBZGRyZXNzKGFkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVBZGRyZXNzKGlkLCBhZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVBZGRyZXNzKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVkaXQgQ2FyZFxyXG5cdGxpc3RDcmVkaXRDYXJkcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2NyZWRpdF9jYXJkcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdENyZWRpdENhcmRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDcmVkaXRDYXJkKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3JlZGl0Q2FyZChjcmVkaXRfY2FyZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2NyZWRpdF9jYXJkcycsICdwb3N0Jykuc2V0Qm9keShjcmVkaXRfY2FyZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDcmVkaXRDYXJkKGlkLCBjcmVkaXRfY2FyZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGNyZWRpdF9jYXJkKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUNyZWRpdENhcmQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2NyZWRpdF9jYXJkcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIEFkZHJlc3NcclxuXHRsaXN0Q3VzdG9tZXJBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lckFkZHJlc3NlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJBZGRyZXNzKGN1c3RvbWVyX2FkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lckFkZHJlc3MoaWQsIGN1c3RvbWVyX2FkZHJlc3MsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9hZGRyZXNzKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgR3JvdXBcclxuXHRsaXN0Q3VzdG9tZXJHcm91cHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9ncm91cHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyR3JvdXBzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lckdyb3VwcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJHcm91cChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9ncm91cHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyR3JvdXAoY3VzdG9tZXJfZ3JvdXAsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9ncm91cHMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfZ3JvdXApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJHcm91cChpZCwgY3VzdG9tZXJfZ3JvdXAsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfZ3JvdXBzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9ncm91cCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lckdyb3VwKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9ncm91cHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBQYXNzd29yZCBSZXNldFxyXG5cdGxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclBhc3N3b3JkUmVzZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclBhc3N3b3JkUmVzZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lclBhc3N3b3JkUmVzZXQoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkLCBjdXN0b21lcl9wYXNzd29yZF9yZXNldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXNzd29yZF9yZXNldHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgUGF5bWVudCBTb3VyY2VcclxuXHRsaXN0Q3VzdG9tZXJQYXltZW50U291cmNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJQYXltZW50U291cmNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJQYXltZW50U291cmNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGN1c3RvbWVyX3BheW1lbnRfc291cmNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3BheW1lbnRfc291cmNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvblxyXG5cdGxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lclN1YnNjcmlwdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyU3Vic2NyaXB0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oY3VzdG9tZXJfc3Vic2NyaXB0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQsIGN1c3RvbWVyX3N1YnNjcmlwdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9zdWJzY3JpcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJTdWJzY3JpcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lclxyXG5cdGxpc3RDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVDdXN0b21lcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyKGN1c3RvbWVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyKGlkLCBjdXN0b21lciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGN1c3RvbWVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZWxpdmVyeSBMZWFkIFRpbWVcclxuXHRsaXN0RGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxEZWxpdmVyeUxlYWRUaW1lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0RGVsaXZlcnlMZWFkVGltZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZURlbGl2ZXJ5TGVhZFRpbWUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGVsaXZlcnlMZWFkVGltZShkZWxpdmVyeV9sZWFkX3RpbWUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzJywgJ3Bvc3QnKS5zZXRCb2R5KGRlbGl2ZXJ5X2xlYWRfdGltZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVEZWxpdmVyeUxlYWRUaW1lKGlkLCBkZWxpdmVyeV9sZWFkX3RpbWUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoZGVsaXZlcnlfbGVhZF90aW1lKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZURlbGl2ZXJ5TGVhZFRpbWUoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbXBvcnRcclxuXHRsaXN0SW1wb3J0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ltcG9ydHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEltcG9ydHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEltcG9ydHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUltcG9ydChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbXBvcnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJbXBvcnQoaW1wb3J0XywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ltcG9ydHMnLCAncG9zdCcpLnNldEJvZHkoaW1wb3J0Xykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbXBvcnQoaWQsIGltcG9ydF8sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW1wb3J0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoaW1wb3J0Xykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVJbXBvcnQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ltcG9ydHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnZlbnRvcnkgTW9kZWxcclxuXHRsaXN0SW52ZW50b3J5TW9kZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvaW52ZW50b3J5X21vZGVscycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsSW52ZW50b3J5TW9kZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RJbnZlbnRvcnlNb2RlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUludmVudG9yeU1vZGVsKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUludmVudG9yeU1vZGVsKGludmVudG9yeV9tb2RlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnLCAncG9zdCcpLnNldEJvZHkoaW52ZW50b3J5X21vZGVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUludmVudG9yeU1vZGVsKGlkLCBpbnZlbnRvcnlfbW9kZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoaW52ZW50b3J5X21vZGVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUludmVudG9yeU1vZGVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtIE9wdGlvblxyXG5cdGxpc3RMaW5lSXRlbU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1fb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbU9wdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtT3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbU9wdGlvbihsaW5lX2l0ZW1fb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaW5lSXRlbU9wdGlvbihpZCwgbGluZV9pdGVtX29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtX29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbU9wdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBMaW5lIEl0ZW1cclxuXHRsaXN0TGluZUl0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTGluZUl0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RMaW5lSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUxpbmVJdGVtKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxpbmVJdGVtKGxpbmVfaXRlbSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkobGluZV9pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUxpbmVJdGVtKGlkLCBsaW5lX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkobGluZV9pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUxpbmVJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFya2V0XHJcblx0bGlzdE1hcmtldHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RNYXJrZXRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNYXJrZXQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWFya2V0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTWFya2V0KG1hcmtldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21hcmtldHMnLCAncG9zdCcpLnNldEJvZHkobWFya2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1hcmtldChpZCwgbWFya2V0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG1hcmtldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNYXJrZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBNZXJjaGFudFxyXG5cdGxpc3RNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tZXJjaGFudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbE1lcmNoYW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWVyY2hhbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVNZXJjaGFudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1lcmNoYW50KG1lcmNoYW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1lcmNoYW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU1lcmNoYW50KGlkLCBtZXJjaGFudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG1lcmNoYW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU1lcmNoYW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tZXJjaGFudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPcmRlclxyXG5cdGxpc3RPcmRlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9vcmRlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbE9yZGVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0T3JkZXJzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVPcmRlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU9yZGVyKG9yZGVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KG9yZGVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZU9yZGVyKGlkLCBvcmRlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KG9yZGVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZU9yZGVyKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9vcmRlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJjZWxcclxuXHRsaXN0UGFyY2VscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBhcmNlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBhcmNlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXJjZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXJjZWwocGFyY2VsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGFyY2VscycsICdwb3N0Jykuc2V0Qm9keShwYXJjZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGFyY2VsKGlkLCBwYXJjZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGFyY2VsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBhcmNlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheW1lbnQgTWV0aG9kXHJcblx0bGlzdFBheW1lbnRNZXRob2RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5bWVudE1ldGhvZHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheW1lbnRNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXltZW50TWV0aG9kKHBheW1lbnRfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5bWVudF9tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBheW1lbnRNZXRob2QoaWQsIHBheW1lbnRfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGF5bWVudF9tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5bWVudE1ldGhvZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5bWVudF9tZXRob2RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGF5cGFsIFBheW1lbnRcclxuXHRsaXN0UGF5cGFsUGF5bWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXlwYWxfcGF5bWVudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFBheXBhbFBheW1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXlwYWxQYXltZW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUGF5cGFsUGF5bWVudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBheXBhbFBheW1lbnQocGF5cGFsX3BheW1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXlwYWxfcGF5bWVudHMnLCAncG9zdCcpLnNldEJvZHkocGF5cGFsX3BheW1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUGF5cGFsUGF5bWVudChpZCwgcGF5cGFsX3BheW1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwYXlwYWxfcGF5bWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXlwYWxQYXltZW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXlwYWxfcGF5bWVudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZSBMaXN0XHJcblx0bGlzdFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUHJpY2VMaXN0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VMaXN0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUHJpY2VMaXN0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmljZUxpc3QocHJpY2VfbGlzdCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlX2xpc3RzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlX2xpc3QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUHJpY2VMaXN0KGlkLCBwcmljZV9saXN0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZV9saXN0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlTGlzdChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VfbGlzdHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmljZVxyXG5cdGxpc3RQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UHJpY2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQcmljZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVByaWNlKHByaWNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJywgJ3Bvc3QnKS5zZXRCb2R5KHByaWNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByaWNlKGlkLCBwcmljZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHByaWNlKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVByaWNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwbWVudFxyXG5cdGxpc3RTaGlwbWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwbWVudHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBtZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcG1lbnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwbWVudChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBtZW50KHNoaXBtZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcG1lbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBtZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNoaXBtZW50KGlkLCBzaGlwbWVudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBtZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBtZW50KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwbWVudHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBDYXRlZ29yeVxyXG5cdGxpc3RTaGlwcGluZ0NhdGVnb3JpZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ0NhdGVnb3JpZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nQ2F0ZWdvcmllcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdDYXRlZ29yeShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ0NhdGVnb3J5KHNoaXBwaW5nX2NhdGVnb3J5LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ19jYXRlZ29yeSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ0NhdGVnb3J5KGlkLCBzaGlwcGluZ19jYXRlZ29yeSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19jYXRlZ29yeSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ0NhdGVnb3J5KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19jYXRlZ29yaWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgTWV0aG9kXHJcblx0bGlzdFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX21ldGhvZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNoaXBwaW5nTWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ01ldGhvZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ01ldGhvZChzaGlwcGluZ19tZXRob2QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ01ldGhvZChpZCwgc2hpcHBpbmdfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwcGluZ01ldGhvZChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIFpvbmVcclxuXHRsaXN0U2hpcHBpbmdab25lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX3pvbmVzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ1pvbmVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ1pvbmVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTaGlwcGluZ1pvbmUoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoaXBwaW5nWm9uZShzaGlwcGluZ196b25lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfem9uZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfem9uZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwcGluZ1pvbmUoaWQsIHNoaXBwaW5nX3pvbmUsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdab25lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ196b25lcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdSBPcHRpb25cclxuXHRsaXN0U2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTa3VPcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTa3VPcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTa3VPcHRpb24oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdU9wdGlvbihza3Vfb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1X29wdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoc2t1X29wdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTa3VPcHRpb24oaWQsIHNrdV9vcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHNrdV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1T3B0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3Vfb3B0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNrdVxyXG5cdGxpc3RTa3VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNrdShza3UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3VzJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTa3UoaWQsIHNrdSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShza3UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2t1KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgSXRlbVxyXG5cdGxpc3RTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfaXRlbXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrSXRlbXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrSXRlbXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrSXRlbShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tJdGVtKHN0b2NrX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19pdGVtcycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19pdGVtKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrSXRlbShpZCwgc3RvY2tfaXRlbSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0l0ZW0oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2l0ZW1zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgTGV2ZWxcclxuXHRsaXN0U3RvY2tMZXZlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sZXZlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0xldmVscywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tMZXZlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrTGV2ZWwoc3RvY2tfbGV2ZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sZXZlbHMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfbGV2ZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMZXZlbChpZCwgc3RvY2tfbGV2ZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sZXZlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xldmVsKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sZXZlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdG9jayBMb2NhdGlvblxyXG5cdGxpc3RTdG9ja0xvY2F0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFN0b2NrTG9jYXRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0xvY2F0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU3RvY2tMb2NhdGlvbihzdG9ja19sb2NhdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2xvY2F0aW9ucycsICdwb3N0Jykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0xvY2F0aW9uKGlkLCBzdG9ja19sb2NhdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2xvY2F0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVN0b2NrTG9jYXRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xvY2F0aW9ucy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFdlYmhvb2tcclxuXHRsaXN0V2ViaG9va3MoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93ZWJob29rcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsV2ViaG9va3MoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdlYmhvb2tzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVXZWJob29rKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXZWJob29rKHdlYmhvb2ssIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93ZWJob29rcycsICdwb3N0Jykuc2V0Qm9keSh3ZWJob29rKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdlYmhvb2soaWQsIHdlYmhvb2ssIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHdlYmhvb2spLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlV2ViaG9vayhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2ViaG9va3MvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBXaXJlIFRyYW5zZmVyXHJcblx0bGlzdFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsV2lyZVRyYW5zZmVycyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0V2lyZVRyYW5zZmVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlV2lyZVRyYW5zZmVyKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXaXJlVHJhbnNmZXIod2lyZV90cmFuc2ZlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3dpcmVfdHJhbnNmZXJzJywgJ3Bvc3QnKS5zZXRCb2R5KHdpcmVfdHJhbnNmZXIpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlV2lyZVRyYW5zZmVyKGlkLCB3aXJlX3RyYW5zZmVyLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdpcmVUcmFuc2ZlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvd2lyZV90cmFuc2ZlcnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxudmFyIGFwaSA9IG5ldyBDTEFwaSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuY2xhcGkgPSBhcGk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgbG9nLm1zZygnYXBpIGNsaWVudCBpbml0aWFsaXplZCB3aXRoIGNvbmZpZzonKTtcclxuICAgIGxvZy5tc2coY2ZnKTtcclxuICAgIGFwaS5jbGllbnQgPSAgY2xpZW50Lm5ld0luc3RhbmNlKGNmZyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KGFwaVJlcXVlc3QpIHtcclxuXHJcbiAgICBsb2cubXNnKGBbJHthcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkfS4ke2FwaVJlcXVlc3QuYXR0ZW1wdH1dIGNhbGxpbmcgJHthcGlSZXF1ZXN0LnBhdGh9IC4uLmApO1xyXG5cclxuICAgIGlmIChhcGkuY2xpZW50ID09IHVuZGVmaW5lZCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ld0Vycm9yKHVuZGVmaW5lZCwgJ2FwaSBub3QgaW5pdGlhbGl6ZWQnKSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgYm9keSA9IGpzb25hcGkuc2VyaWFsaXplKGFwaVJlcXVlc3QuYm9keSk7XHJcbiAgICAgICAgYXBpUmVxdWVzdC5zZXRCb2R5KGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBhcGkuY2xpZW50LmNhbGwoYXBpUmVxdWVzdClcclxuICAgICAgICAgICAgLnRoZW4oYXBpUmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UoYXBpUmVzcG9uc2UsIGFwaVJlcXVlc3QucmVzcG9uc2VfdHlwZSk7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChhcGlFcnJvciA9PiB7IHJldHVybiBlcnJvcihhcGlFcnJvciwgYXBpUmVxdWVzdC5lcnJvcl90eXBlKTsgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCByZXNwb25zZV90eXBlKSB7XHJcblx0aWYgKHJlc3BvbnNlX3R5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChyZXNwb25zZV90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHRyZXR1cm4ganNvbmFwaS5kZXNlcmlhbGl6ZShhcGlSZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0Y2FzZSAnbm9ybWFsaXplZCc6XHJcblx0XHRcdFx0cmV0dXJuIGpzb25hcGkubm9ybWFsaXplKGFwaVJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdqc29uYXBpJzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0Y2FzZSAncmF3JzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgXCJVbnN1cHBvcnRlZCByZXNwb25zZV90eXBlOiAnXCIgKyByZXNwb25zZV90eXBlICsgXCInXCI7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBlcnJvcihhcGlFcnJvciwgZXJyb3JfdHlwZSkge1xyXG5cdGlmIChlcnJvcl90eXBlID09IHVuZGVmaW5lZCkgcmV0dXJuIGFwaUVycm9yO1xyXG5cdGVsc2VcclxuXHRcdHN3aXRjaCAoZXJyb3JfdHlwZSkge1xyXG5cdFx0XHRjYXNlICdtb2RlbCc6XHJcblx0XHRcdFx0aWYgKCFhcGlFcnJvci5yZXNwb25zZSkgcmV0dXJuIGFwaUVycm9yO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRpZiAoYXBpRXJyb3IucmVzcG9uc2UuZGF0YSAmJiBhcGlFcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yUmVzcG9uc2UoYXBpRXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5hZGRBcGlFcnJvcnMoYXBpRXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JSZXNwb25zZShhcGlFcnJvci5yZXNwb25zZS5zdGF0dXMsIGFwaUVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQpKTtcclxuXHRcdFx0Y2FzZSAnanNvbmFwaSc6XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFwaUVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdyYXcnOlxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhcGlFcnJvci5yZXNwb25zZSk7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgXCJVbnN1cHBvcnRlZCBlcnJvcl90eXBlOiAnXCIgKyBlcnJvcl90eXBlICsgXCInXCI7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkYXRhKHJlcykge1xyXG5cdGlmIChyZXMuaXNBcGlSZXNvdXJjZSAmJiAocmVzLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpIHJldHVybiByZXM7XHJcblx0ZWxzZVxyXG5cdGlmIChyZXMuZGF0YXNldCkgcmV0dXJuIHJlcy5kYXRhc2V0LmRhdGE7XHJcblx0ZWxzZVxyXG5cdGlmIChyZXMuZGF0YSkgcmV0dXJuIChyZXMuZGF0YS5kYXRhKT8gcmVzLmRhdGEuZGF0YSA6IHJlcy5kYXRhO1xyXG5cdGVsc2UgcmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFsbChsaXN0RnVuY3Rpb24sIGZpbHRlciA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcbiAgICBpZiAoKGxpc3RGdW5jdGlvbiA9PSB1bmRlZmluZWQpIHx8ICFsaXN0RnVuY3Rpb24ubmFtZS5zdGFydHNXaXRoKCdsaXN0JykpIHJldHVybiBQcm9taXNlLnJlamVjdChcIlVuZGVmaW5lZCAnbGlzdCcgQVBJIGZ1bmN0aW9uXCIpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRQYWdlKGZpbHRlciwgc2l6ZSA9IGZpbHRlci5wYWdlX3NpemUgfHwgMTAsIG51bWJlciA9IDEpIHtcclxuXHRcdFxyXG4gICAgICAgIGlmIChmaWx0ZXIuaXNRdWVyeUZpbHRlciAmJiAoZmlsdGVyLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpIGZpbHRlci5wYWdlKG51bWJlciwgc2l6ZSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlclsncGFnZVtzaXplXSddID0gc2l6ZTtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW251bWJlcl0nXSA9IG51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShmaWx0ZXIpO1xyXG5cdFxyXG5cdC8vIFNhdmUgb3JpZ2luYWwgb3B0aW9uIGFuZCBmb3J4ZSByZXNwb25zZV90eXBlIHRvICdyYXcnXHJcblx0bGV0IHJlc3BvbnNlX3R5cGUgPSBvcHRpb25zLnJlc3BvbnNlX3R5cGU7XHJcblx0b3B0aW9ucy5yZXNwb25zZV90eXBlID0gJ3Jhdyc7XHJcblxyXG5cdC8vIGxvZy5tc2coYGFsbCgpLS0+JHtsaXN0RnVuY3Rpb24ubmFtZX0gcGFnZSAxYCk7XHJcblxyXG4gICAgbGV0IGZpcnN0UGFnZSA9IGF3YWl0IGxpc3RGdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IG1heF9wYWdlID0gZmlyc3RQYWdlLmRhdGEubWV0YS5wYWdlX2NvdW50O1xyXG5cdGNvbnN0IHBhZ2Vfc2l6ZSA9IGZpcnN0UGFnZS5kYXRhLmRhdGEubGVuZ3RoO1xyXG5cdFxyXG5cdGxldCBwYWdlcyA9IG5ldyBBcnJheShtYXhfcGFnZSk7XHJcbiAgICBwYWdlc1swXSA9IHJlc3BvbnNlKGZpcnN0UGFnZSwgcmVzcG9uc2VfdHlwZSk7XHJcblxyXG5cdC8vIFN0YW5kYXJkIGxpc3RGdW5jdGlvbiByZXNwb25zZVxyXG5cdGlmIChtYXhfcGFnZSA9PSAxKSByZXR1cm4gcGFnZXNbMF07ICAgIFxyXG4gICAgXHJcbiAgIFxyXG4gICAgZm9yIChwbiA9IDE7IHBuIDwgbWF4X3BhZ2U7IHBuKyspIHtcclxuXHRcdC8vIGxvZy5tc2coYGFsbCgpLS0+JHtsaXN0RnVuY3Rpb24ubmFtZX0gcGFnZSAke3BuKzF9YCk7XHJcbiAgICAgICAgc2V0UGFnZShmaWx0ZXIsIHBhZ2Vfc2l6ZSwgcG4rMSk7XHJcbiAgICAgICAgcGFnZXNbcG5dID0gbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHQvLyBTZXQgb3JpZ2luYWwgb3B0aW9uXHJcblx0b3B0aW9ucy5yZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZTtcclxuXHJcblx0bGV0IG91dCA9IFtdO1xyXG5cclxuICAgIChhd2FpdCBQcm9taXNlLmFsbChwYWdlcykpLmZvckVhY2gocCA9PiB7IG91dCA9IG91dC5jb25jYXQoZGF0YShyZXNwb25zZShwLCByZXNwb25zZV90eXBlKSkpIH0pO1xyXG5cclxuICAgIHJldHVybiBvdXQ7XHJcblxyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5cclxuXHJcbi8vIGNvbnN0IEFVVEhfVE9LRU5TID0ge307XHJcblxyXG5cclxuY2xhc3MgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcclxuICAgIH1cclxuICAgIGNsaWVudElkKGNpZCkgeyB0aGlzLmNsaWVudF9pZCA9IGNpZDsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGNsaWVudFNlY3JldChjc2VjKSB7IHRoaXMuY2xpZW50X3NlY3JldCA9IGNzZWM7IHJldHVybiB0aGlzOyB9XHJcbiAgICBpc0F1dGhDb25maWcoKSB7IHJldHVybiB0cnVlOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBDbGllbnRDcmVkZW50aWFscyBleHRlbmRzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3IoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCBzY29wZSkge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ2NsaWVudF9jcmVkZW50aWFscyc7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgfVxyXG4gICAgc2V0U2NvcGUoc2NvcGUpIHsgdGhpcy5zY29wZSA9IHNjb3BlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgbWFya2V0U2NvcGUobWFya2V0KSB7IHRoaXMuc2NvcGUgPSAobWFya2V0ICE9IHVuZGVmaW5lZCk/ICdtYXJrZXQ6JyttYXJrZXQgOiBtYXJrZXQ7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBdXRob3JpemF0aW9uQ29kZSBleHRlbmRzIENsaWVudENyZWRlbnRpYWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNmZyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoY2ZnLmNsaWVudF9pZCwgY2ZnLmNsaWVudF9zZWNyZXQsIGNmZy5zY29wZSlcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcclxuICAgICAgICB0aGlzLmNvZGUgPSBjZmcuY29kZTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IGNmZy5yZWRpcmVjdF91cmk7XHJcbiAgICB9XHJcbiAgICBzZXRDb2RlKGNvZGUpIHsgdGhpcy5jb2RlID0gY29kZTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIHJlZGlyZWN0VXJpKHVyaSkgeyB0aGlzLnJlZGlyZWN0X3VyaSA9IHVyaTsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBhc3N3b3JkIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuY2xpZW50X3NlY3JldCwgY2ZnLnNjb3BlKVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGNmZy51c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gY2ZnLnBhc3N3b3JkO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpIHsgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lOyByZXR1cm4gdGhpczsgfVxyXG4gICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpIHsgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUmVmcmVzaFRva2VuIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICBzdXBlcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdyZWZyZXNoX3Rva2VuJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSByZWZyZXNoX3Rva2VuO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaFRva2VuKHRva2VuKSB7IHRoaXMucmVmcmVzaF90b2tlbiA9IHRva2VuOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQXBpVG9rZW4ge1xyXG4gICAgY29uc3RydWN0b3IoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy50b2tlbl90eXBlID0gJ2JlYXJlcic7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl90eXBlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3duZXJfaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIENsaWVudENyZWRlbnRpYWxzLFxyXG4gICAgQXV0aG9yaXphdGlvbkNvZGUsXHJcbiAgICBQYXNzd29yZCxcclxuICAgIFJlZnJlc2hUb2tlblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aGVudGljYXRlID0gKGF1dGgpID0+IHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAgIC5wb3N0KCcvb2F1dGgvdG9rZW4nLCB7XHJcbiAgICAgICAgICAgIGdyYW50X3R5cGU6IGF1dGguZ3JhbnRfdHlwZSxcclxuICAgICAgICAgICAgY2xpZW50X2lkOiBhdXRoLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgc2NvcGU6IGF1dGguc2NvcGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IGF1dGguY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZTogYXV0aC5jb2RlLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IGF1dGgucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogYXV0aC51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IGF1dGgucmVmcmVzaF90b2tlblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IEFwaVRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICB0b2tlbi5hY2Nlc3NfdG9rZW4gPSByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4ucmVmcmVzaF90b2tlbiA9IHJlc3BvbnNlLmRhdGEucmVmcmVzaF90b2tlbjtcclxuICAgICAgICAgICAgdG9rZW4uc2NvcGUgPSByZXNwb25zZS5kYXRhLnNjb3BlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl90eXBlID0gcmVzcG9uc2UuZGF0YS5vd25lcl90eXBlO1xyXG4gICAgICAgICAgICB0b2tlbi5vd25lcl9pZCA9IHJlc3BvbnNlLmRhdGEub3duZXJfaWQ7XHJcbiAgICAgICAgICAgIHRva2VuLmNyZWF0ZWRfYXQgPSByZXNwb25zZS5kYXRhLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgIHRva2VuLmV4cGlyZXNfaW4gPSByZXNwb25zZS5kYXRhLmV4cGlyZXNfaW47XHJcblxyXG4gICAgICAgICAgICAvLyBjYWNoZVRva2VuKGF1dGguY2xpZW50X2lkLCBhdXRoLmdyYW50X3R5cGUsIHRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNhY2hlVG9rZW4oY2xpZW50X2lkLCBncmFudF90eXBlLCB0b2tlbikge1xyXG4vLyAgICAgQVVUSF9UT0tFTlNbdG9rZW5JZChjbGllbnRfaWQsIGdyYW50X3R5cGUpXSA9IHRva2VuO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRUb2tlbihjbGllbnRfaWQsIGdyYW50X3R5cGUpIHtcclxuLy8gICAgIHJldHVybiBBVVRIX1RPS0VOU1t0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSldO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiB0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSkge1xyXG4vLyAgICAgcmV0dXJuIGNsaWVudF9pZCArICctJyArIGdyYW50X3R5cGU7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIG5ld0F1dGhDb25maWcoZ3JhbnRfdHlwZSwgY29uZmlnID0ge30pIHtcclxuICAgIHN3aXRjaCAoZ3JhbnRfdHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2NsaWVudF9jcmVkZW50aWFscyc6IHJldHVybiBuZXcgQ2xpZW50Q3JlZGVudGlhbHMoY29uZmlnLmNsaWVudF9pZCwgY29uZmlnLmNsaWVudF9zZWNyZXQsIGNvbmZpZy5zY29wZSk7XHJcbiAgICAgICAgY2FzZSAnYXV0aG9yaXphdGlvbl9jb2RlJzogcmV0dXJuIG5ldyBBdXRob3JpemF0aW9uQ29kZShjb25maWcpO1xyXG4gICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzogcmV0dXJuIG5ldyBQYXNzd29yZChjb25maWcpO1xyXG4gICAgICAgIGNhc2UgJ3JlZnJlc2hfdG9rZW4nOiByZXR1cm4gbmV3IFJlZnJlc2hUb2tlbigpO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBhcGkgPSByZXF1aXJlKCcuL2FwaScpXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpXHJcblxyXG4vLyBFeHBvc2UgYWxsIGFwaSBmdW5jdGlvbnNcclxubW9kdWxlLmV4cG9ydHMgPSBhcGkuY2xhcGk7XHJcblxyXG4vLyBFeHBvc2UgU0RLIGNvbmZpZ3VyYXRpb25cclxubW9kdWxlLmV4cG9ydHMuc2V0dGluZ3MgPSBjb25maWcuc2RrO1xyXG5cclxuXHJcbi8vIFNESyBpbml0aWFsaXphdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5pbml0aWFsaXplID0gKGNmZykgPT4ge1xyXG4gICAgaWYgKGNmZyAhPSB1bmRlZmluZWQpIGNmZy5kZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBhcGkuaW5pdGlhbGl6ZSh1dGlscy5tZXJnZU1hcHMoY29uZmlnLmNsYXllciwgY2ZnKSlcclxufVxyXG5cclxuXHJcbi8vIEF1dGhlbnRpY2F0aW9uIHR5cGVzXHJcbm1vZHVsZS5leHBvcnRzLmF1dGggPSB7XHJcbiAgICBDbGllbnRDcmVkZW50aWFscyA6IChjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQpID0+IHsgcmV0dXJuIG5ldyBhdXRoLkNsaWVudENyZWRlbnRpYWxzKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkgfSxcclxuICAgIFBhc3N3b3JkIDogKGNmZykgPT4geyByZXR1cm4gbmV3IGF1dGguUGFzc3dvcmQoY2ZnKSB9LFxyXG4gICAgQXV0aG9yaXphdGlvbkNvZGUgOiAoY2ZnKSA9PiB7IHJldHVybiBuZXcgYXV0aC5BdXRob3JpemF0aW9uQ29kZShjZmcpIH0sXHJcbiAgICBSZWZyZXNoVG9rZW4gOiAoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCByZWZyZXNoX3Rva2VuKSA9PiB7IHJldHVybiBuZXcgYXV0aC5SZWZyZXNoVG9rZW4oY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCByZWZyZXNoX3Rva2VuKSB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLmF1dGgubGFzdEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5jbGFwaS5jbGllbnQuY29uZmlnLmFjY2Vzc190b2tlbjtcclxufVxyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbmNvbnN0IHNkayA9IHJlcXVpcmUoJy4vY29uZmlnJykuc2RrXHJcbmNvbnN0IGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0FwaUNvbmZpZyhjb25maWcpIHtcclxuXHJcbiAgICB1dGlscy5sb2coJ2NvbmZpZyB2ZXJpZmljYXRpb24uLi4nKVxyXG5cclxuICAgIGlmIChjb25maWcgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjb25maWcnO1xyXG4gICAgaWYgKGNvbmZpZy5iYXNlX3VybCA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGJhc2VfdXJsJztcclxuICAgIGlmIChjb25maWcuY2xpZW50X2lkID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgY2xpZW50X2lkJztcclxuXHJcbiAgICAvLyBUT0RPOiB2ZXJpZmljYXJlIGNvbmZpZ3VyYXppb25lIGluIGJhc2UgYWwgdGlwbyBkaSBhdXRlbnRpY2F6aW9uZSAoZGEgcmVuZGVyZSBjb25maWd1cmFiaWxlKVxyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIG9rLicpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXhpb3NDb25maWcoY29uZmlnKSB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlX3VybDtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nO1xyXG5cclxuICAgIGlmIChzZGsuZGVidWcgJiYgc2RrLnRyYWNlKSB7XHJcblxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShyZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygnUkVRVUVTVCAtLT4nKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCc8LS0gUkVTUE9OU0UnKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbmV3SW5zdGFuY2UgOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpQ2xpZW50KGNvbmZpZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5ld1JlcXVlc3QgOiBmdW5jdGlvbihwYXRoLCBtZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQXBpUmVxdWVzdChwYXRoLCBtZXRob2QpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgQXBpUmVxdWVzdCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocGF0aCA9ICcvJywgbWV0aG9kID0gJ2dldCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aCB8fCAnLyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kIHx8ICdnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLVxyXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvcnJlbGF0aW9uX2lkID0gdXRpbHMuZ3VpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3R5cGUgPSBzZGsucmVzcG9uc2VfdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcl90eXBlID0gc2RrLmVycm9yX3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYXRoKHBhdGgpIHsgdGhpcy5wYXRoID0gcGF0aDsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRQYXJhbXMocGFyYW1zKSB7IHRoaXMucGFyYW1zID0gKHBhcmFtcyAmJiBwYXJhbXMuaXNRdWVyeUZpbHRlciAmJiAocGFyYW1zLmlzUXVlcnlGaWx0ZXIoKSA9PT0gdHJ1ZSkpPyBwYXJhbXMuYnVpbGQoKSA6IHBhcmFtczsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBzZXRNZXRob2QobWV0aG9kKSB7IHRoaXMubWV0aG9kID0gbWV0aG9kOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEJvZHkoYm9keSkgeyB0aGlzLmJvZHkgPSBib2R5OyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldEhlYWRlcnMoaGVhZGVycykgeyB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICBuZXdBdHRlbXB0KCkgeyB0aGlzLmF0dGVtcHQrKzsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBPcHRpb25zXHJcbiAgICAgICAgZ2V0IHJhd19yZXNwb25zZSgpIHsgcmV0dXJuICh0aGlzLnJlc3BvbnNlVHlwZSA9PSAncmF3Jyk7IH1cclxuICAgICAgICBzZXQgcmF3X3Jlc3BvbnNlKHJhdykgeyB0aGlzLnJlc3BvbnNlX3R5cGUgPSAocmF3ICYmIChyYXcgPT09IHRydWUpKT8gJ3JhdycgOiAnbm9ybWFsaXplZCc7IH1cclxuICAgICAgICByZXNwb25zZVR5cGUodHlwZSkgeyB0aGlzLnJlc3BvbnNlX3R5cGUgPSB0eXBlPyB0eXBlIDogc2RrLnJlc3BvbnNlX3R5cGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgZXJyb3JUeXBlKHR5cGUpIHsgdGhpcy5lcnJvcl90eXBlID0gdHlwZT8gdHlwZSA6IHNkay5lcnJvcl90eXBlOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IHJlYWxseSBhdmFpbGFibGUgb3B0aW9ucyBhcmUgYmVpbmcgc2V0dGVkXHJcbiAgICAgICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VUeXBlKG9wdGlvbnMucmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JUeXBlKG9wdGlvbnMuZXJyb3JfdHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBBcGlDbGllbnQgOiBjbGFzcyB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgICAgICBjaGVja0FwaUNvbmZpZyhjb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgc2V0QXhpb3NDb25maWcoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF1dGhlbnRpY2F0ZSgpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGF1dGhDb25maWcgPSB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWF1dGhDb25maWcgfHwgIWF1dGhDb25maWcuaXNBdXRoQ29uZmlnIHx8IChhdXRoQ29uZmlnLmlzQXV0aENvbmZpZygpICE9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgYXV0aENvbmZpZyA9IG5ldyBhdXRoLkNsaWVudENyZWRlbnRpYWxzKClcclxuICAgICAgICAgICAgICAgICAgICAuY2xpZW50SWQodGhpcy5jb25maWcuY2xpZW50X2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXJrZXRTY29wZSh0aGlzLmNvbmZpZy5tYXJrZXRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWVudFNlY3JldCh0aGlzLmNvbmZpZy5jbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZygndXNpbmcgY3VzdG9tIGF1dGhlbnRpY2F0aW9uIGNvbmZpZzogJyArIGF1dGhDb25maWcuZ3JhbnRfdHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhDb25maWcuY2xpZW50X2lkICYmIHRoaXMuY29uZmlnLmNsaWVudF9pZCkgYXV0aENvbmZpZy5jbGllbnRJZCh0aGlzLmNvbmZpZy5jbGllbnRfaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXV0aC5hdXRoZW50aWNhdGUoYXV0aENvbmZpZykudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbi5hY2Nlc3NfdG9rZW47IH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNhbGwoYXBpUmVxdWVzdCkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVzc2FnZShtc2cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZD8gYFske2FwaVJlcXVlc3QuY29ycmVsYXRpb25faWR9LiR7YXBpUmVxdWVzdC5hdHRlbXB0fV0gYCA6ICcnKS5jb25jYXQobXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwaVJlcXVlc3QubmV3QXR0ZW1wdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZV9wYXRoID0gKCh0aGlzLmNvbmZpZy5iYXNlX3BhdGggIT0gdW5kZWZpbmVkKT8gdGhpcy5jb25maWcuYmFzZV9wYXRoIDogJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSAodG8gYmUgcmVtb3ZlZClcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGJhc2VfcGF0aCArIGFwaVJlcXVlc3QucGF0aDtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gYXBpUmVxdWVzdC5wYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGFwaVJlcXVlc3QubWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgcXVlcnlTdHJpbmdcclxuICAgICAgICAgICAgbGV0IGNhbGxVcmwgPSBwYXRoO1xyXG4gICAgICAgICAgICBpZiAoKHBhcmFtcyAhPSB1bmRlZmluZWQpICYmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbXNba2V5XVxyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbFVybCA9IGNhbGxVcmwuY29uY2F0KCc/JykuY29uY2F0KHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ3BhdGg6ICcgKyBjYWxsVXJsKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXhpb3NDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGNhbGxVcmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCB8fCAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHNkay50aW1lb3V0LnJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNZXJnZSBjdXN0b20gYW5kIGRlZmF1bHQgaGVhZGVyc1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmRNYXAoYXhpb3NDb25maWcuaGVhZGVycywgYXBpUmVxdWVzdC5oZWFkZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvZHlcclxuICAgICAgICAgICAgaWYgKGFwaVJlcXVlc3QuYm9keSAhPSB1bmRlZmluZWQpIGF4aW9zQ29uZmlnLmRhdGEgPSBhcGlSZXF1ZXN0LmJvZHk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXhfYXR0ZW1wdHMgPSBzZGsuYXV0aF9hdHRlbXB0cz8gc2RrLmF1dGhfYXR0ZW1wdHMgOiAxO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkIGV4ZWN1dGUgYXV0aGVudGljYXRpb24gdGhlbiByZS1leGVjdXRlIGNhbGxcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhY2Nlc3NfdG9rZW4gbnVsbCwgYXV0aGVudGljYXRpb24gcmVxdWlyZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKyt0aGlzLmF1dGhfYXR0ZW1wdHMgPiBtYXhfYXR0ZW1wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNkay50aW1lb3V0LnJldHJ5KSB0aHJvdyBgUmVhY2hlZCBtYXhpbXVtIG51bWJlciBvZiBhdXRoZW50aWNhdGlvbiBhdHRlbXB0cyAoJHttYXhfYXR0ZW1wdHN9KSBhbmQgbm8gcmV0cnkgdGltZW91dCBjb25maWd1cmVkYDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLnNsZWVwKHNkay50aW1lb3V0LnJldHJ5LCBtZXNzYWdlKCdhbm90aGVyIGF1dGggcmVxdWVzdCBpcyBpbiBwcm9ncmVzcycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7IHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCkgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZSgpLnRoZW4oYWNjZXNzX3Rva2VuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoX2F0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsKGFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdleGVjdXRpbmcgYXBpIGNhbGwgLi4uJykpO1xyXG4gICAgICAgICAgICAgICAgYXhpb3NDb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NDb25maWcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnYXBpIGNhbGwgc3VjY2Vzc2Z1bCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoZXJyb3I/IGVycm9yIDogJ2Vycm9yIGRldGVjdGVkJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCd0aW1lb3V0IGV4Y2VwdGlvbjonICsgZXJyb3IuY29uZmlnLnRpbWVvdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcGkgZXJyb25lb3VzbHkgcmV0dXJuIGNvZGUgNDAxIGluc3RlYWQgb2YgY29kZSA0MDMgZm9yIFVOQVVUSE9SSVpFRCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgJiYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzWzBdLmNvZGUgPT0gJ0lOVkFMSURfVE9LRU4nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2ludmFsaWQgdG9rZW4sIGFjY2VzcyBkZW5pZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCJjb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGNsYXllcjoge1xyXG5cclxuICAgICAgICBkZWZhdWx0IDogdHJ1ZSxcclxuXHJcbiAgICAgICAgYXV0aGVudGljYXRpb24gIDogbnVsbCxcclxuICBcclxuICAgICAgICBjbGllbnRfaWQgICAgICAgOiBudWxsLFxyXG4gICAgICAgIG1hcmtldF9pZCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgY2xpZW50X3NlY3JldCAgIDogbnVsbCxcclxuICAgICAgICBiYXNlX3VybCAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfcGF0aCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgY291bnRyeV9jb2RlICAgIDogJ1VTJyxcclxuICAgICAgICBsYW5ndWFnZV9jb2RlICAgOiAnZW4nLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2RrOiB7XHJcbiAgICAgICAgZGVidWcgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBkZWJ1ZyBtb2RlIGFjdGl2YXRlZFxyXG4gICAgICAgIGNvbnNvbGUgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gbG9nIHRvIGNvbnNvbGUgZW5hYmxlZFxyXG4gICAgICAgIHRyYWNlICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgLy8gdHJhY2UgY2xpZW50IHJlcXVlc3QvcmVzcG9uc2UgdG8gY29uc29sZVxyXG4gICAgICAgIGF1dGhfYXR0ZW1wdHMgICA6IDEsICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGF0dGVtcHRzIG9mIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSAgIDogJ25vcm1hbGl6ZWQnLCAvLyBSZXNwb25zZSBmb3JtYXQsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IG5vcm1hbGl6ZWQgfCBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICBlcnJvcl90eXBlICAgICAgOiAnbW9kZWwnLCAgICAgIC8vIEVycm9yIGZvcm1ldCwgcG9zc2libGUgdmFsdWVzIGFyZToganNvbmFwaSB8IG1vZGVsIHwgcmF3XHJcbiAgICAgICAgdGltZW91dCA6IHsgLy8gaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgICAgIHJldHJ5IDogMjUwLCAgICAvLyByZXRyeSBhZnRlciBhdXRoZW50aWNhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzIGRldGVjdGVkXHJcbiAgICAgICAgICAgIHJlcXVlc3QgOiAyMDAwICAvLyBjbGllbnQgcmVxdWVzdCB0aW1lb3V0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuY2xhc3MgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoYXBpRXJyb3IgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGFwaUVycm9yLmNvZGU7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGFwaUVycm9yLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsID0gYXBpRXJyb3IuZGV0YWlsO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gYXBpRXJyb3Iuc291cmNlIHx8IHt9O1xyXG4gICAgICAgIHRoaXMubWV0YSA9IGFwaUVycm9yLm1ldGEgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgaXNBcGlFcnJvcigpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIGdldFNvdXJjZVBvaW50ZXIoKSB7IHJldHVybiB0aGlzLnNvdXJjZS5wb2ludGVyOyB9XHJcbiAgICBnZXRTb3VyY2VJdGVtKGtleSkgeyByZXR1cm4gdGhpcy5zb3VyY2Vba2V5XTsgfVxyXG4gICAgZ2V0TWV0YUl0ZW0oa2V5KSB7IHJldHVybiB0aGlzLm1ldGFba2V5XTsgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gYFske3RoaXMuY29kZX0sICR7dGhpcy50aXRsZX0sICR7dGhpcy5kZXRhaWx9XWA7IH1cclxuXHJcbn1cclxuXHJcblxyXG5jbGFzcyBFcnJvclJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXR1cywgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXNFcnJvclJlc3BvbnNlKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgYWRkRXJyb3IoZXJyb3IpIHsgaWYgKGVycm9yICYmIGVycm9yLmlzQXBpRXJyb3IgJiYgKGVycm9yLmlzQXBpRXJyb3IoKSA9PT0gdHJ1ZSkpIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYWRkQXBpRXJyb3IoYXBpRXJyb3IpIHsgdGhpcy5hZGRFcnJvcihuZXcgRXJyb3IoYXBpRXJyb3IpKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFkZEVycm9ycyhlcnJvcnMgPSBbXSkgeyBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB0aGlzLmFkZEVycm9yKGVycm9yKSk7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhZGRBcGlFcnJvcnMoYXBpRXJyb3JzID0gW10pIHsgYXBpRXJyb3JzLmZvckVhY2goYXBpRXJyb3IgPT4gdGhpcy5hZGRBcGlFcnJvcihhcGlFcnJvcikpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYXBpRXJyb3JzQ291bnQoKSB7IHJldHVybiAodGhpcy5lcnJvcnMgPT0gdW5kZWZpbmVkKT8gMCA6IHRoaXMuZXJyb3JzLmxlbmd0aDsgfVxyXG4gICAgaGFzQXBpRXJyb3JzKCkgeyByZXR1cm4gKHRoaXMuYXBpRXJyb3JzQ291bnQoKSA+IDApOyB9XHJcbiAgICBnZXRBcGlFcnJvcihpbmRleCkgeyByZXR1cm4gKChpbmRleCA+PSAwKSAmJiAoaW5kZXggPCB0aGlzLmFwaUVycm9yc0NvdW50KCkpPyB0aGlzLmVycm9yc1tpbmRleF0gOiBudWxsKTsgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBlcnIgPSAnWycgKyB0aGlzLnN0YXR1cyArICh0aGlzLmRlc2NyaXB0aW9uPyAnLCAnICsgdGhpcy5kZXNjcmlwdGlvbiA6ICcnKSArICddJztcclxuICAgICAgICBpZiAodGhpcy5lcnJvcnMgJiYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgIGVyciArPSAnIC0tPiB7JztcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMuZm9yRWFjaCh4ID0+IGVyciArPSB4KTtcclxuICAgICAgICAgICAgZXJyICs9ICd9JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICBlcnI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBlcnJvclJlc3BvbnNlIDogKHN0YXR1cywgZGVzY3JpcHRpb24pID0+IHsgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cywgZGVzY3JpcHRpb24pOyB9XHJcbn0iLCJjb25zdCBub3JtYWxpemUgPSByZXF1aXJlKCdqc29uLWFwaS1ub3JtYWxpemUnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBtb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwnKVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLnNlcmlhbGl6ZSA9IChib2R5KSA9PiB7XHJcbiAgICBpZiAoYm9keSA9PSB1bmRlZmluZWQpIHJldHVybiBib2R5O1xyXG4gICAgLy8gTm8gZGF0YSA9IFBsYWluIE9iamVjdCBvciBBcGkgUmVzb3VyY2VcclxuICAgIGVsc2UgcmV0dXJuIChib2R5LmRhdGEgPT0gdW5kZWZpbmVkKT8gbmV3IEpzb25BcGlSZXNvdXJjZShib2R5KS5zZXJpYWxpemUoKSA6IGJvZHk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5kZXNlcmlhbGl6ZSA9IChqYXBpKSA9PiB7XHJcbiAgICBpZiAoamFwaSA9PSB1bmRlZmluZWQpIHJldHVybiBqYXBpO1xyXG4gICAgZWxzZVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoamFwaS5kYXRhKSkge1xyXG4gICAgICAgIGxldCByZXNBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGphcGkuZGF0YS5mb3JFYWNoKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc0FycmF5LnB1c2gobW9kdWxlLmV4cG9ydHMuZGVzZXJpYWxpemUoeyBkYXRhIDogcmVzIH0pKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc0FycmF5KVxyXG4gICAgICAgIHJldHVybiByZXNBcnJheTtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIChqYXBpLmRhdGEgPT0gdW5kZWZpbmVkKT8gamFwaSA6IG5ldyBKc29uQXBpUmVzb3VyY2UoamFwaSkuZGVzZXJpYWxpemUoKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5vcm1hbGl6ZSA9IChqYXBpKSA9PiB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplKGphcGkpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgSnNvbkFwaVJlc291cmNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXNvdXJjZSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2UuZGF0YSAhPSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGEuYXR0cmlidXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBwb3J0YXJlIGlkIGUgdHlwZSBpbiB0ZXN0YSBhZCBvZ25pIG9iamVjdCBbQlRGXVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmllbGQgPSB0aGlzLnJlc291cmNlW2tleV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChbJ2lkJywgJ3R5cGUnXS5pbmNsdWRlcyhrZXkpKSB0aGlzLmRhdGFba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsLmhlbHBlci5pc0FwaVJlc291cmNlKGZpZWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVsYXRpb25zaGlwcyA9PSB1bmRlZmluZWQpIHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHNba2V5LnN0YXJ0c1dpdGgoJ19fJyk/IGtleS5zdWJzdHIoJ19fJy5sZW5ndGgpIDoga2V5XSA9IHsgZGF0YTogeyB0eXBlOiBmaWVsZC50eXBlLCBpZDogZmllbGQuaWQgfSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpICYmIGtleS5zdGFydHNXaXRoKCdfXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKCdBcnJheSBSZXNvdXJjZSByZWxhdGlvbnNoaXBzIG5vdCBzdXBwb3J0ZWQ6ICcgKyByZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRhdGEuYXR0cmlidXRlc1trZXldID0gZmllbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2VyaWFsaXplKCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMucmVzb3VyY2UuZGF0YSA9PSB1bmRlZmluZWQpICYmIG1vZGVsLmhlbHBlci5pc0FwaVJlc291cmNlKHRoaXMucmVzb3VyY2UpKSByZXR1cm4gdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzb3VyY2UuZGF0YT8gdGhpcy5yZXNvdXJjZS5kYXRhIDogdGhpcy5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZShkYXRhLnR5cGUsIGRhdGEuaWQsIGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnJlbGF0aW9uc2hpcHMpLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVsX2RhdGEgPSBkYXRhLnJlbGF0aW9uc2hpcHNbcmVsXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAocmVsX2RhdGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWxfZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxfZGF0YS5mb3JFYWNoKHJkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbFJlcyA9IHJlbGF0ZWRSZXNvdXJjZSh0aGlzLnJlc291cmNlLCByZC50eXBlLCByZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0FycmF5LnB1c2gocmVsUmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0UmVzb3VyY2UocmVsLCByZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVsUmVzID0gcmVsYXRlZFJlc291cmNlKHRoaXMucmVzb3VyY2UsIHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0UmVzb3VyY2UocmVsLCByZWxSZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gamFwaSAgSlNPTkFwaSBkYXRhXHJcbiAqIEBwYXJhbSB7Kn0gdHlwZSAgcmVzb3VyY2UgdHlwZVxyXG4gKiBAcGFyYW0geyp9IGlkICAgIHJlc291cmNlIGlkXHJcbiAqIFxyXG4gKiBDcmVhdGUgcmVsYXRpb25zaGlwIGluIHJlc291cmNlIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gcmVsYXRlZFJlc291cmNlKGphcGksIHR5cGUsIGlkKSB7XHJcbiAgICBsZXQgcmVsUmVzID0gbW9kZWwuaGVscGVyLm5ld1Jlc291cmNlKHR5cGUsIGlkKTtcclxuICAgIGxldCBpbmMgPSBqc29uYXBpSW5jbHVkZWQoamFwaSwgdHlwZSwgaWQpO1xyXG4gICAgcmVsUmVzLnNldEZpZWxkcyhpbmMuYXR0cmlidXRlcyk7XHJcbiAgICByZXR1cm4gcmVsUmVzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IGphcGkgIEpTT05BcGkgZGF0YSBcclxuICogQHBhcmFtIHsqfSB0eXBlICByZXNvdXJjZSB0eXBlXHJcbiAqIEBwYXJhbSB7Kn0gaWQgICAgcmVzb3VyY2UgaWRcclxuICpcclxuICogU2VhcmNoIGZvciBpbmNsdWRlZCByZXNvdXJjZVxyXG4gKi9cclxuZnVuY3Rpb24ganNvbmFwaUluY2x1ZGVkKGphcGksIHR5cGUsIGlkKSB7XHJcbiAgICBpZiAoKGphcGkgPT0gdW5kZWZpbmVkKSB8fCAoamFwaS5pbmNsdWRlZCA9PSB1bmRlZmluZWQpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgbGV0IGluY1JlcyA9IHVuZGVmaW5lZDtcclxuICAgIGphcGkuaW5jbHVkZWQuc29tZShpbmMgPT4ge1xyXG4gICAgICAgIGlmICgoaW5jLnR5cGUgPT0gdHlwZSkgJiYgKGluYy5pZCA9PSBpZCkpIGluY1JlcyA9IGluYztcclxuICAgICAgICByZXR1cm4gKGluY1JlcyAhPSB1bmRlZmluZWQpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBpbmNSZXM7XHJcbn1cclxuIiwiY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIG1zZyA6IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsuY29uc29sZSkgY29uc29sZS5sb2coKG1lc3NhZ2UgPT0gdW5kZWZpbmVkKT8gJycgOiBtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlIDogKCkgPT4ge1xyXG4gICAgICAgIHNkay5jb25zb2xlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZSA6ICgpID0+IHtcclxuICAgICAgICBzZGsuY29uc29sZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9iZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nIGVuYWJsZWQ6ICcgKyBzZGsuY29uc29sZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lmIGxvZyBpcyBlbmFibGVkIGJ1dCBpcyBub3QgdmlzaWJsZSBtYXliZSB5b3UgYXJlIG5vdCBpbiBkZWJ1ZyBtb2RlJylcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0IGVuYWJsZWQoKSB7IHJldHVybiBzZGsuY29uc29sZSA9PT0gdHJ1ZTsgfVxyXG5cclxufSIsIi8vIEZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXQgMjQvMDIvMjAxOSAxMToxMDo0OSBieSBjb21tZXJjZWxheWVyLWpzLXNkay1jb2RlZ2VuXHJcblxyXG5cclxuLy8gQmFzaWMgQWJzdHJhY3QgUmVzb3VyY2VcclxuY2xhc3MgUmVzb3VyY2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHR5cGUsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkX2F0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaXNBcGlSZXNvdXJjZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHNldFJlc291cmNlKGZpZWxkLCByZXMpIHsgaWYgKChyZXMgIT0gdW5kZWZpbmVkKSAmJiAoaGVscGVyLmlzQXBpUmVzb3VyY2UocmVzKSB8fCBoZWxwZXIuaXNBcGlSZXNvdXJjZUFycmF5KHJlcykpKSB0aGlzWydfXycuY29uY2F0KGZpZWxkKV0gPSByZXM7IH1cclxuXHRnZXRSZXNvdXJjZShmaWVsZCkgeyByZXR1cm4gdGhpc1snX18nLmNvbmNhdChmaWVsZCldOyB9XHJcblx0c2V0RmllbGRzKGZpZWxkcyA9IHt9KSB7IE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmaWVsZCA9PiB7IHRoaXNbZmllbGRdID0gZmllbGRzW2ZpZWxkXSB9KTsgcmV0dXJuIHRoaXM7IH1cclxuXHRzZXRGaWVsZChuYW1lLCB2YWx1ZSkgeyBpZiAobmFtZSkgdGhpc1tuYW1lXSA9IHZhbHVlOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEFkZHJlc3MgcmVzb3VyY2VcclxuY2xhc3MgQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdhZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBBZGRyZXNzLlRZUEUpO1xyXG5cdFx0dGhpcy5idXNpbmVzcyA9IGZpZWxkcy5idXNpbmVzcztcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5jb21wYW55ID0gZmllbGRzLmNvbXBhbnk7XHJcblx0XHR0aGlzLmxpbmVfMSA9IGZpZWxkcy5saW5lXzE7XHJcblx0XHR0aGlzLmxpbmVfMiA9IGZpZWxkcy5saW5lXzI7XHJcblx0XHR0aGlzLmNpdHkgPSBmaWVsZHMuY2l0eTtcclxuXHRcdHRoaXMuemlwX2NvZGUgPSBmaWVsZHMuemlwX2NvZGU7XHJcblx0XHR0aGlzLnN0YXRlX2NvZGUgPSBmaWVsZHMuc3RhdGVfY29kZTtcclxuXHRcdHRoaXMuY291bnRyeV9jb2RlID0gZmllbGRzLmNvdW50cnlfY29kZTtcclxuXHRcdHRoaXMucGhvbmUgPSBmaWVsZHMucGhvbmU7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5ub3RlcyA9IGZpZWxkcy5ub3RlcztcclxuXHRcdHRoaXMubGF0ID0gZmllbGRzLmxhdDtcclxuXHRcdHRoaXMubG5nID0gZmllbGRzLmxuZztcclxuXHRcdHRoaXMuYmlsbGluZ19pbmZvID0gZmllbGRzLmJpbGxpbmdfaW5mbztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGdlb2NvZGVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdnZW9jb2RlcicsIHZhbHVlKSB9XHJcblx0Z2V0IGdlb2NvZGVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2dlb2NvZGVyJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWRpdCBDYXJkIHJlc291cmNlXHJcbmNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3JlZGl0X2NhcmRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3JlZGl0Q2FyZC5UWVBFKTtcclxuXHRcdHRoaXMuZmlyc3RfbmFtZSA9IGZpZWxkcy5maXJzdF9uYW1lO1xyXG5cdFx0dGhpcy5sYXN0X25hbWUgPSBmaWVsZHMubGFzdF9uYW1lO1xyXG5cdFx0dGhpcy5udW1iZXIgPSBmaWVsZHMubnVtYmVyO1xyXG5cdFx0dGhpcy5tb250aCA9IGZpZWxkcy5tb250aDtcclxuXHRcdHRoaXMueWVhciA9IGZpZWxkcy55ZWFyO1xyXG5cdFx0dGhpcy52ZXJpZmljYXRpb25fdmFsdWUgPSBmaWVsZHMudmVyaWZpY2F0aW9uX3ZhbHVlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lckFkZHJlc3MgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfYWRkcmVzc2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJBZGRyZXNzLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IGFkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBhZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2FkZHJlc3MnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgR3JvdXAgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJHcm91cCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9ncm91cHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lckdyb3VwLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFBhc3N3b3JkIFJlc2V0IHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyUGFzc3dvcmRSZXNldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9wYXNzd29yZF9yZXNldHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lclBhc3N3b3JkUmVzZXQuVFlQRSk7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuXHRcdHRoaXMuX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuID0gZmllbGRzLl9yZXNldF9wYXNzd29yZF90b2tlbjtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUGF5bWVudCBTb3VyY2UgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJQYXltZW50U291cmNlIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyUGF5bWVudFNvdXJjZS5UWVBFKTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcicsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyJykgfVxyXG5cdHNldCBwYXltZW50X3NvdXJjZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X3NvdXJjZSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBTdWJzY3JpcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJTdWJzY3JpcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyU3Vic2NyaXB0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9lbWFpbCA9IGZpZWxkcy5jdXN0b21lcl9lbWFpbDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXIuVFlQRSk7XHJcblx0XHR0aGlzLmVtYWlsID0gZmllbGRzLmVtYWlsO1xyXG5cdFx0dGhpcy5wYXNzd29yZCA9IGZpZWxkcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGN1c3RvbWVyX2dyb3VwKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdjdXN0b21lcl9ncm91cCcsIHZhbHVlKSB9XHJcblx0Z2V0IGN1c3RvbWVyX2dyb3VwKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2N1c3RvbWVyX2dyb3VwJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIERlbGl2ZXJ5IExlYWQgVGltZSByZXNvdXJjZVxyXG5jbGFzcyBEZWxpdmVyeUxlYWRUaW1lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2RlbGl2ZXJ5X2xlYWRfdGltZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBEZWxpdmVyeUxlYWRUaW1lLlRZUEUpO1xyXG5cdFx0dGhpcy5taW5faG91cnMgPSBmaWVsZHMubWluX2hvdXJzO1xyXG5cdFx0dGhpcy5tYXhfaG91cnMgPSBmaWVsZHMubWF4X2hvdXJzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IHNoaXBwaW5nX21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfbWV0aG9kKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbXBvcnQgcmVzb3VyY2VcclxuY2xhc3MgSW1wb3J0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ltcG9ydHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbXBvcnQuVFlQRSk7XHJcblx0XHR0aGlzLnJlc291cmNlX3R5cGUgPSBmaWVsZHMucmVzb3VyY2VfdHlwZTtcclxuXHRcdHRoaXMucGFyZW50X3Jlc291cmNlX2lkID0gZmllbGRzLnBhcmVudF9yZXNvdXJjZV9pZDtcclxuXHRcdHRoaXMuaW5wdXRzID0gZmllbGRzLmlucHV0cztcclxuXHRcdHRoaXMuY2xlYW51cF9yZWNvcmRzID0gZmllbGRzLmNsZWFudXBfcmVjb3JkcztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW52ZW50b3J5IE1vZGVsIHJlc291cmNlXHJcbmNsYXNzIEludmVudG9yeU1vZGVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2ludmVudG9yeV9tb2RlbHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBJbnZlbnRvcnlNb2RlbC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gT3B0aW9uIHJlc291cmNlXHJcbmNsYXNzIExpbmVJdGVtT3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2xpbmVfaXRlbV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTGluZUl0ZW1PcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBmaWVsZHMub3B0aW9ucztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IGxpbmVfaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbGluZV9pdGVtJywgdmFsdWUpIH1cclxuXHRnZXQgbGluZV9pdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2xpbmVfaXRlbScpIH1cclxuXHRzZXQgc2t1X29wdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1X29wdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdV9vcHRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1X29wdGlvbicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBMaW5lIEl0ZW0gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW0gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIExpbmVJdGVtLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcblx0XHR0aGlzLl91cGRhdGVfcXVhbnRpdHkgPSBmaWVsZHMuX3VwZGF0ZV9xdWFudGl0eTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcblx0c2V0IGl0ZW0odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2l0ZW0nLCB2YWx1ZSkgfVxyXG5cdGdldCBpdGVtKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2l0ZW0nKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTWFya2V0IHJlc291cmNlXHJcbmNsYXNzIE1hcmtldCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtYXJrZXRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTWFya2V0LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmZhY2Vib29rX3BpeGVsX2lkID0gZmllbGRzLmZhY2Vib29rX3BpeGVsX2lkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWVyY2hhbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21lcmNoYW50JywgdmFsdWUpIH1cclxuXHRnZXQgbWVyY2hhbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWVyY2hhbnQnKSB9XHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcblx0c2V0IGludmVudG9yeV9tb2RlbCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJywgdmFsdWUpIH1cclxuXHRnZXQgaW52ZW50b3J5X21vZGVsKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNZXJjaGFudCByZXNvdXJjZVxyXG5jbGFzcyBNZXJjaGFudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdtZXJjaGFudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBNZXJjaGFudC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBPcmRlciByZXNvdXJjZVxyXG5jbGFzcyBPcmRlciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdvcmRlcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBPcmRlci5UWVBFKTtcclxuXHRcdHRoaXMuZ3Vlc3QgPSBmaWVsZHMuZ3Vlc3Q7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG5cdFx0dGhpcy5jdXN0b21lcl9wYXNzd29yZCA9IGZpZWxkcy5jdXN0b21lcl9wYXNzd29yZDtcclxuXHRcdHRoaXMubGFuZ3VhZ2VfY29kZSA9IGZpZWxkcy5sYW5ndWFnZV9jb2RlO1xyXG5cdFx0dGhpcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jayA9IGZpZWxkcy5zaGlwcGluZ19jb3VudHJ5X2NvZGVfbG9jaztcclxuXHRcdHRoaXMuY291cG9uX2NvZGUgPSBmaWVsZHMuY291cG9uX2NvZGU7XHJcblx0XHR0aGlzLmNhcnRfdXJsID0gZmllbGRzLmNhcnRfdXJsO1xyXG5cdFx0dGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcblx0XHR0aGlzLnRlcm1zX3VybCA9IGZpZWxkcy50ZXJtc191cmw7XHJcblx0XHR0aGlzLnByaXZhY3lfdXJsID0gZmllbGRzLnByaXZhY3lfdXJsO1xyXG5cdFx0dGhpcy5fcGxhY2UgPSBmaWVsZHMuX3BsYWNlO1xyXG5cdFx0dGhpcy5fY2FuY2VsID0gZmllbGRzLl9jYW5jZWw7XHJcblx0XHR0aGlzLl9hcHByb3ZlID0gZmllbGRzLl9hcHByb3ZlO1xyXG5cdFx0dGhpcy5fY2FwdHVyZSA9IGZpZWxkcy5fY2FwdHVyZTtcclxuXHRcdHRoaXMuX3VwZGF0ZV90YXhlcyA9IGZpZWxkcy5fdXBkYXRlX3RheGVzO1xyXG5cdFx0dGhpcy5fYmlsbGluZ19hZGRyZXNzX2Nsb25lX2lkID0gZmllbGRzLl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQ7XHJcblx0XHR0aGlzLl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkID0gZmllbGRzLl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkO1xyXG5cdFx0dGhpcy5fY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQgPSBmaWVsZHMuX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkO1xyXG5cdFx0dGhpcy5fc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmcgPSBmaWVsZHMuX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nO1xyXG5cdFx0dGhpcy5fYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmcgPSBmaWVsZHMuX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nO1xyXG5cdFx0dGhpcy5fc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQgPSBmaWVsZHMuX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0O1xyXG5cdFx0dGhpcy5fc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayA9IGZpZWxkcy5fc2F2ZV9zaGlwcGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vaztcclxuXHRcdHRoaXMuX3NhdmVfYmlsbGluZ19hZGRyZXNzX3RvX2N1c3RvbWVyX2FkZHJlc3NfYm9vayA9IGZpZWxkcy5fc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rO1xyXG5cdFx0dGhpcy5fcmVmcmVzaCA9IGZpZWxkcy5fcmVmcmVzaDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IHNoaXBwaW5nX2FkZHJlc3ModmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2FkZHJlc3MnKSB9XHJcblx0c2V0IGJpbGxpbmdfYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYmlsbGluZ19hZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYmlsbGluZ19hZGRyZXNzKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ2JpbGxpbmdfYWRkcmVzcycpIH1cclxuXHRzZXQgcGF5bWVudF9tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfbWV0aG9kJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9tZXRob2QnKSB9XHJcblx0c2V0IHBheW1lbnRfc291cmNlKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBhcmNlbCByZXNvdXJjZVxyXG5jbGFzcyBQYXJjZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGFyY2VscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBhcmNlbC5UWVBFKTtcclxuXHRcdHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuXHRcdHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcblx0XHR0aGlzLmVlbF9wZmMgPSBmaWVsZHMuZWVsX3BmYztcclxuXHRcdHRoaXMuY29udGVudHNfdHlwZSA9IGZpZWxkcy5jb250ZW50c190eXBlO1xyXG5cdFx0dGhpcy5jb250ZW50c19leHBsYW5hdGlvbiA9IGZpZWxkcy5jb250ZW50c19leHBsYW5hdGlvbjtcclxuXHRcdHRoaXMuY3VzdG9tc19jZXJ0aWZ5ID0gZmllbGRzLmN1c3RvbXNfY2VydGlmeTtcclxuXHRcdHRoaXMuY3VzdG9tc19zaWduZXIgPSBmaWVsZHMuY3VzdG9tc19zaWduZXI7XHJcblx0XHR0aGlzLm5vbl9kZWxpdmVyeV9vcHRpb24gPSBmaWVsZHMubm9uX2RlbGl2ZXJ5X29wdGlvbjtcclxuXHRcdHRoaXMucmVzdHJpY3Rpb25fdHlwZSA9IGZpZWxkcy5yZXN0cmljdGlvbl90eXBlO1xyXG5cdFx0dGhpcy5yZXN0cmljdGlvbl9jb21tZW50cyA9IGZpZWxkcy5yZXN0cmljdGlvbl9jb21tZW50cztcclxuXHRcdHRoaXMuY3VzdG9tc19pbmZvX3JlcXVpcmVkID0gZmllbGRzLmN1c3RvbXNfaW5mb19yZXF1aXJlZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBtZW50KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwbWVudCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBtZW50KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBtZW50JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFBheW1lbnQgTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFBheW1lbnRNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncGF5bWVudF9tZXRob2RzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGF5bWVudE1ldGhvZC5UWVBFKTtcclxuXHRcdHRoaXMucGF5bWVudF9zb3VyY2VfdHlwZSA9IGZpZWxkcy5wYXltZW50X3NvdXJjZV90eXBlO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBwYXltZW50X2dhdGV3YXkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfZ2F0ZXdheSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X2dhdGV3YXknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGF5cGFsIFBheW1lbnQgcmVzb3VyY2VcclxuY2xhc3MgUGF5cGFsUGF5bWVudCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXlwYWxfcGF5bWVudHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXlwYWxQYXltZW50LlRZUEUpO1xyXG5cdFx0dGhpcy5yZXR1cm5fdXJsID0gZmllbGRzLnJldHVybl91cmw7XHJcblx0XHR0aGlzLmNhbmNlbF91cmwgPSBmaWVsZHMuY2FuY2VsX3VybDtcclxuXHRcdHRoaXMubm90ZV90b19wYXllciA9IGZpZWxkcy5ub3RlX3RvX3BheWVyO1xyXG5cdFx0dGhpcy5wYXlwYWxfcGF5ZXJfaWQgPSBmaWVsZHMucGF5cGFsX3BheWVyX2lkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUHJpY2UgTGlzdCByZXNvdXJjZVxyXG5jbGFzcyBQcmljZUxpc3QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAncHJpY2VfbGlzdHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZUxpc3QuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuY3VycmVuY3lfY29kZSA9IGZpZWxkcy5jdXJyZW5jeV9jb2RlO1xyXG5cdFx0dGhpcy50YXhfaW5jbHVkZWQgPSBmaWVsZHMudGF4X2luY2x1ZGVkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBQcmljZSByZXNvdXJjZVxyXG5jbGFzcyBQcmljZSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwcmljZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQcmljZS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLmFtb3VudF9jZW50cyA9IGZpZWxkcy5hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzID0gZmllbGRzLmNvbXBhcmVfYXRfYW1vdW50X2NlbnRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuXHRzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG5cdGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBtZW50IHJlc291cmNlXHJcbmNsYXNzIFNoaXBtZW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBtZW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBtZW50LlRZUEUpO1xyXG5cdFx0dGhpcy5fb25faG9sZCA9IGZpZWxkcy5fb25faG9sZDtcclxuXHRcdHRoaXMuX3BpY2tpbmcgPSBmaWVsZHMuX3BpY2tpbmc7XHJcblx0XHR0aGlzLl9wYWNraW5nID0gZmllbGRzLl9wYWNraW5nO1xyXG5cdFx0dGhpcy5fcmVhZHlfdG9fc2hpcCA9IGZpZWxkcy5fcmVhZHlfdG9fc2hpcDtcclxuXHRcdHRoaXMuX3NoaXAgPSBmaWVsZHMuX3NoaXA7XHJcblx0XHR0aGlzLl9nZXRfcmF0ZXMgPSBmaWVsZHMuX2dldF9yYXRlcztcclxuXHRcdHRoaXMuc2VsZWN0ZWRfcmF0ZV9pZCA9IGZpZWxkcy5zZWxlY3RlZF9yYXRlX2lkO1xyXG5cdFx0dGhpcy5fcHVyY2hhc2UgPSBmaWVsZHMuX3B1cmNoYXNlO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIENhdGVnb3J5IHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nQ2F0ZWdvcnkgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfY2F0ZWdvcmllcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nQ2F0ZWdvcnkuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgTWV0aG9kIHJlc291cmNlXHJcbmNsYXNzIFNoaXBwaW5nTWV0aG9kIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ01ldGhvZC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5wcmljZV9hbW91bnRfY2VudHMgPSBmaWVsZHMucHJpY2VfYW1vdW50X2NlbnRzO1xyXG5cdFx0dGhpcy5mcmVlX292ZXJfYW1vdW50X2NlbnRzID0gZmllbGRzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IHNoaXBwaW5nX3pvbmUodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ196b25lKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX3pvbmUnKSB9XHJcblx0c2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNoaXBwaW5nIFpvbmUgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdab25lIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NoaXBwaW5nX3pvbmVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdab25lLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmNvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5jb3VudHJ5X2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF9jb3VudHJ5X2NvZGVfcmVnZXggPSBmaWVsZHMubm90X2NvdW50cnlfY29kZV9yZWdleDtcclxuXHRcdHRoaXMuc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5zdGF0ZV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5ub3Rfc3RhdGVfY29kZV9yZWdleCA9IGZpZWxkcy5ub3Rfc3RhdGVfY29kZV9yZWdleDtcclxuXHRcdHRoaXMuemlwX2NvZGVfcmVnZXggPSBmaWVsZHMuemlwX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF96aXBfY29kZV9yZWdleCA9IGZpZWxkcy5ub3RfemlwX2NvZGVfcmVnZXg7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNrdSBPcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgU2t1T3B0aW9uIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdV9vcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2t1T3B0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmRlbGF5X2hvdXJzID0gZmllbGRzLmRlbGF5X2hvdXJzO1xyXG5cdFx0dGhpcy5za3VfY29kZV9yZWdleCA9IGZpZWxkcy5za3VfY29kZV9yZWdleDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTa3UgcmVzb3VyY2VcclxuY2xhc3MgU2t1IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3NrdXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3UuVFlQRSk7XHJcblx0XHR0aGlzLmNvZGUgPSBmaWVsZHMuY29kZTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGZpZWxkcy5kZXNjcmlwdGlvbjtcclxuXHRcdHRoaXMuaW1hZ2VfdXJsID0gZmllbGRzLmltYWdlX3VybDtcclxuXHRcdHRoaXMudGFnX25hbWVzID0gZmllbGRzLnRhZ19uYW1lcztcclxuXHRcdHRoaXMucGllY2VzX3Blcl9wYWNrID0gZmllbGRzLnBpZWNlc19wZXJfcGFjaztcclxuXHRcdHRoaXMud2VpZ2h0ID0gZmllbGRzLndlaWdodDtcclxuXHRcdHRoaXMudW5pdF9vZl93ZWlnaHQgPSBmaWVsZHMudW5pdF9vZl93ZWlnaHQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwcGluZ19jYXRlZ29yeSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19jYXRlZ29yeSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBJdGVtIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrSXRlbSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19pdGVtcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrSXRlbS5UWVBFKTtcclxuXHRcdHRoaXMuc2t1X2NvZGUgPSBmaWVsZHMuc2t1X2NvZGU7XHJcblx0XHR0aGlzLnF1YW50aXR5ID0gZmllbGRzLnF1YW50aXR5O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc3RvY2tfbG9jYXRpb24odmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc3RvY2tfbG9jYXRpb24oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nKSB9XHJcblx0c2V0IHNrdSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2t1JywgdmFsdWUpIH1cclxuXHRnZXQgc2t1KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NrdScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdG9jayBMZXZlbCByZXNvdXJjZVxyXG5jbGFzcyBTdG9ja0xldmVsIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2xldmVscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0b2NrTGV2ZWwuVFlQRSk7XHJcblx0XHR0aGlzLnByaW9yaXR5ID0gZmllbGRzLnByaW9yaXR5O1xyXG5cdFx0dGhpcy5vbl9ob2xkID0gZmllbGRzLm9uX2hvbGQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG5cdGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIExvY2F0aW9uIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTG9jYXRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbG9jYXRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMb2NhdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5sYWJlbF9mb3JtYXQgPSBmaWVsZHMubGFiZWxfZm9ybWF0O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBXZWJob29rIHJlc291cmNlXHJcbmNsYXNzIFdlYmhvb2sgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnd2ViaG9va3MnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBXZWJob29rLlRZUEUpO1xyXG5cdFx0dGhpcy50b3BpYyA9IGZpZWxkcy50b3BpYztcclxuXHRcdHRoaXMuY2FsbGJhY2tfdXJsID0gZmllbGRzLmNhbGxiYWNrX3VybDtcclxuXHRcdHRoaXMuaW5jbHVkZV9yZXNvdXJjZXMgPSBmaWVsZHMuaW5jbHVkZV9yZXNvdXJjZXM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFdpcmUgVHJhbnNmZXIgcmVzb3VyY2VcclxuY2xhc3MgV2lyZVRyYW5zZmVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3dpcmVfdHJhbnNmZXJzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgV2lyZVRyYW5zZmVyLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgb3JkZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ29yZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgb3JkZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnb3JkZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0QWRkcmVzcyxcclxuXHRDcmVkaXRDYXJkLFxyXG5cdEN1c3RvbWVyQWRkcmVzcyxcclxuXHRDdXN0b21lckdyb3VwLFxyXG5cdEN1c3RvbWVyUGFzc3dvcmRSZXNldCxcclxuXHRDdXN0b21lclBheW1lbnRTb3VyY2UsXHJcblx0Q3VzdG9tZXJTdWJzY3JpcHRpb24sXHJcblx0Q3VzdG9tZXIsXHJcblx0RGVsaXZlcnlMZWFkVGltZSxcclxuXHRJbXBvcnQsXHJcblx0SW52ZW50b3J5TW9kZWwsXHJcblx0TGluZUl0ZW1PcHRpb24sXHJcblx0TGluZUl0ZW0sXHJcblx0TWFya2V0LFxyXG5cdE1lcmNoYW50LFxyXG5cdE9yZGVyLFxyXG5cdFBhcmNlbCxcclxuXHRQYXltZW50TWV0aG9kLFxyXG5cdFBheXBhbFBheW1lbnQsXHJcblx0UHJpY2VMaXN0LFxyXG5cdFByaWNlLFxyXG5cdFNoaXBtZW50LFxyXG5cdFNoaXBwaW5nQ2F0ZWdvcnksXHJcblx0U2hpcHBpbmdNZXRob2QsXHJcblx0U2hpcHBpbmdab25lLFxyXG5cdFNrdU9wdGlvbixcclxuXHRTa3UsXHJcblx0U3RvY2tJdGVtLFxyXG5cdFN0b2NrTGV2ZWwsXHJcblx0U3RvY2tMb2NhdGlvbixcclxuXHRXZWJob29rLFxyXG5cdFdpcmVUcmFuc2ZlcixcclxufVxyXG5cclxuXHJcblxyXG4vLyAqKioqKioqKioqIEhlbHBlciAqKioqKioqKioqIC8vXHJcblxyXG5sZXQgaGVscGVyID0ge31cclxubW9kdWxlLmV4cG9ydHMuaGVscGVyID0gaGVscGVyO1xyXG5cclxuaGVscGVyLm5ld1Jlc291cmNlID0gKHR5cGUsIGlkLCBmaWVsZHMpID0+IHtcclxuXHRsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblx0Y29uc3QgbW9kZWwgPSBtb2R1bGUuZXhwb3J0cztcclxuXHRPYmplY3Qua2V5cyhtb2RlbCkuc29tZSgoY2wpID0+IHtcclxuXHRcdGlmICghY2wuc3RhcnRzV2l0aCgnaGVscGVyJykpIHtcclxuXHRcdFx0bGV0IGNsX3R5cGUgPSBtb2RlbFtjbF0uVFlQRTtcclxuXHRcdFx0aWYgKGNsX3R5cGUgJiYgKGNsX3R5cGUgPT0gdHlwZSkpIHtcclxuXHRcdFx0XHRpbnN0YW5jZSA9IG5ldyBtb2RlbFtjbF0oaWQsIGZpZWxkcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAoaW5zdGFuY2UgIT0gdW5kZWZpbmVkKTtcclxuXHR9KTtcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbmhlbHBlci5pc0FwaVJlc291cmNlID0gKHJlcykgPT4ge1xyXG5cdHJldHVybiAocmVzICYmIHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSk7XHJcbn1cclxuXHJcbmhlbHBlci5pc0FwaVJlc291cmNlQXJyYXkgPSAocmVzQXJyYXkpID0+IHtcclxuXHRyZXR1cm4gKHJlc0FycmF5ICYmIEFycmF5LmlzQXJyYXkocmVzQXJyYXkpICYmICgocmVzQXJyYXkubGVuZ3RoID09IDApIHx8IChoZWxwZXIuaXNBcGlSZXNvdXJjZShyZXNBcnJheVswXSkpKSk7XHJcbn1cclxuIiwiXHJcbmNsYXNzIFF1ZXJ5RmlsdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3BhcnNlX2ZpZWxkc2V0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmllbGRzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXN0b21fcGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1F1ZXJ5RmlsdGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIHNvcnQoZmllbGQsIGRlc2NlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnNvcnRfZmllbGRzLnB1c2goKGRlc2NlbmRpbmc/ICctJyA6ICcnKS5jb25jYXQoZmllbGQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHMocmVzb3VyY2UsIC4uLmZpZWxkcykge1xyXG4gICAgICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkKSB0aGlzLnNwYXJzZV9maWVsZHNldHNbcmVzb3VyY2VdID0gZmllbGRzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluY2x1ZGUoLi4ucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgLy8gaWYgKHJlc291cmNlcyAhPSB1bmRlZmluZWQpIHJlc291cmNlcy5mb3JFYWNoKHJlcyA9PiB7IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLnB1c2gocmVzKSB9KVxyXG4gICAgICAgIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlc291cmNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoKGZpbHRlciAhPSB1bmRlZmluZWQpICYmICh2YWx1ZSAhPSB1bmRlZmluZWQpKSB0aGlzLmZpbHRlcl9maWVsZHNbZmlsdGVyXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcnMoZmlsdGVycykge1xyXG4gICAgICAgIGlmIChmaWx0ZXJzICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaChmaWx0ZXIgPT4geyB0aGlzLmZpbHRlcihmaWx0ZXIsIGZpbHRlcnNbZmlsdGVyXSkgfSlcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKChrZXkgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkgdGhpcy5jdXN0b21fcGFyYW1zW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4geyB0aGlzLnBhcmFtKGtleSwgcGFyYW1zW2tleV0pIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZShudW1iZXIsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIobnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplKHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTaXplKHNpemUpIHtcclxuICAgICAgICB0aGlzLnBhZ2Vfc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZU51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSAodGhpcy5wYWdlX251bWJlciAmJiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMucGFnZU51bWJlcikpPyBwYWdlX251bWJlcisrIDogMTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZChqb2luKSB7XHJcblxyXG4gICAgICAgIGxldCBxc01hcCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgRmllbGRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJfZmllbGRzKS5mb3JFYWNoKGZpbHRlciA9PiB7IHFzTWFwW2BmaWx0ZXJbJHtmaWx0ZXJ9XWBdID0gdGhpcy5maWx0ZXJfZmllbGRzW2ZpbHRlcl0gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5jbHVkZWQgUmVzb3VyY2VzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5pbmNsdWRlID0gdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBTcGFyc2UgRmllbGRzZXRzXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zcGFyc2VfZmllbGRzZXRzKS5mb3JFYWNoKHJlcyA9PiB7IHFzTWFwW2BmaWVsZHNbJHtyZXN9XWBdID0gdGhpcy5zcGFyc2VfZmllbGRzZXRzW3Jlc10uam9pbignLCcpIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNvcnRfZmllbGRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBxc01hcC5zb3J0ID0gdGhpcy5zb3J0X2ZpZWxkcy5qb2luKCcsJyk7XHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBQYXJhbXNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1c3RvbV9wYXJhbXMpLmZvckVhY2goa2V5ID0+IHsgcXNNYXBba2V5XSA9IHRoaXMuY3VzdG9tX3BhcmFtc1trZXldIH0pXHJcblxyXG4gICAgICAgIC8vIFBhZ2luYXRpb25cclxuICAgICAgICBpZiAodGhpcy5wYWdlX251bWJlciAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW251bWJlcl0nXSA9IHRoaXMucGFnZV9udW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9zaXplICE9IHVuZGVmaW5lZCkgcXNNYXBbJ3BhZ2Vbc2l6ZV0nXSA9IHRoaXMucGFnZV9zaXplO1xyXG5cclxuICAgICAgICByZXR1cm4gIWpvaW4/IHFzTWFwIDogT2JqZWN0LmtleXMocXNNYXApLm1hcChrZXkgPT4geyByZXR1cm4ga2V5Kyc9Jytxc01hcFtrZXldIH0pLmpvaW4oJyYnKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBRdWVyeUZpbHRlclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5uZXdJbnN0YW5jZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUXVlcnlGaWx0ZXIoKTtcclxufVxyXG4iLCJcclxuY29uc3QgbG9nID0gcmVxdWlyZSgnLi9sb2cnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbG9nIDogKG1lc3NhZ2UpID0+IHsgICAgLy8gQldDXHJcbiAgICAgICAgbG9nLm1zZyhtZXNzYWdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZW5kTWFwIDogKG1hcCwgZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKG1hcCA9PSB1bmRlZmluZWQpIG1hcCA9IHt9O1xyXG4gICAgICAgIGlmIChleHQgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhleHQpLmZvckVhY2goa2V5ID0+IHsgbWFwW2tleV0gPSBleHRba2V5XTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2VNYXBzIDogKG1hcDEsIG1hcDIpID0+IHtcclxuICAgICAgICByZXR1cm4geyAuLi5tYXAxLCAuLi5tYXAyIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xvbmVNYXAgOiAobWFwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChtYXAgPT0gdW5kZWZpbmVkKT8gbWFwIDogeyAuLi5tYXAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgc2xlZXAgOiAobXMsIG1zZykgPT4ge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzLmxvZygobXNnPyBgJHttc2d9IC0gYCA6ICcnKS5jb25jYXQoYHdhaXRpbmcgJHttc30gbXNlY3MgLi4uYCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ3VpZCA6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgJy4nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikuc3Vic3RyKDAsIDYpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuanNvbkFwaU5vcm1hbGl6ZSA9IGZhY3RvcnkoKTtcbiAgICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBOb3JtYWxpemVyKGRhdGFzZXQsIHByb3BlcnR5KSB7XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vcm1hbGl6ZXIpKSB7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplckluc3RhbmNlID0gbmV3IE5vcm1hbGl6ZXIoZGF0YXNldCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHkgPyBub3JtYWxpemVySW5zdGFuY2UuZ2V0KHByb3BlcnR5KSA6IG5vcm1hbGl6ZXJJbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YXNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGFzZXQgPSBKU09OLnBhcnNlKGRhdGFzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhc2V0IHx8ICFkYXRhc2V0LmRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBqc29uIGFwaSBub3JtYWxpemVyIGlucHV0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuICAgICAgICB0aGlzLmlzQ29sbGVjdGlvbiA9IGlzQXJyYXkoZGF0YXNldC5kYXRhKTtcblxuICAgICAgICB0aGlzLmhheXN0YWNrID0gYnVpbGRIYXlzdGFjayhkYXRhc2V0LmluY2x1ZGVkLCB0aGlzLmlzQ29sbGVjdGlvbiA/IGRhdGFzZXQuZGF0YSA6IFtkYXRhc2V0LmRhdGFdKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkSGF5c3RhY2soaW5jbHVkZWQsIGFkZGl0aW9uYWxJdGVtcykge1xuXG4gICAgICAgIHZhciBzaWduYXR1cmVzID0gW107XG4gICAgICAgIHZhciBoYXlzdGFjayA9IGluY2x1ZGVkIHx8IFtdO1xuXG4gICAgICAgIGVhY2goaGF5c3RhY2ssIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgc2lnbmF0dXJlcy5wdXNoKGVudGl0eS50eXBlICsgJ0AnICsgZW50aXR5LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWFjaChhZGRpdGlvbmFsSXRlbXMsIGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZXMuaW5kZXhPZihlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaGF5c3RhY2sucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNvbnRleHQsIGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGtleSkgJiYgY2FsbGJhY2suY2FsbChjb250ZXh0LCBrZXksIGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHRlbXAucHVzaChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGl0ZW0sIGtleSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0LCBvYmopIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvdXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcgJiYgKG91dFtrZXldID0ge30pO1xuICAgICAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlQcm9wZXJ0aWVzKHByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciBkYXRhID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eVRyZWUsIGZ1bmN0aW9uKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICBpZiAoIXJlbGF0aW9uUHJvcGVydHlUcmVlKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcHJvcGVydHldICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHJlbGF0ZWRFbnRpdHkgPyBuZXcgTm9ybWFsaXplcih7ZGF0YTogcmVsYXRlZEVudGl0eSwgaW5jbHVkZWQ6IGhheXN0YWNrfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSBnZXRSZWxhdGlvbkRhdGEocHJvcGVydHksIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbnRpdHlWYWx1ZShwcm9wZXJ0eSwgZW50aXR5KSB7XG5cbiAgICAgICAgcmV0dXJuIFsnaWQnLCAndHlwZSddLmluZGV4T2YocHJvcGVydHkpID49IDAgPyBlbnRpdHlbcHJvcGVydHldIDogZW50aXR5LmF0dHJpYnV0ZXNbcHJvcGVydHldO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRpb25EYXRhKHJlbGF0aW9uTmFtZSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgcmVsYXRpb25EYXRhID0gZW50aXR5LnJlbGF0aW9uc2hpcHMgJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1tyZWxhdGlvbk5hbWVdLmRhdGE7XG4gICAgICAgIHZhciByZWxhdGVkRW50aXR5ID0gcmVsYXRpb25EYXRhICYmIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgaWYgKGlzQXJyYXkocmVsYXRlZEVudGl0eSkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcChyZWxhdGVkRW50aXR5LCBmdW5jdGlvbihzaW5nbGVSZWxhdGVkRW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCBzaW5nbGVSZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFyZWxhdGVkRW50aXR5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVJlbGF0aW9uKHJlbGF0aW9uUHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUmVsYXRpb24ocHJvcGVydHlUcmVlLCByZWxhdGVkRW50aXR5LCBoYXlzdGFjaykge1xuXG4gICAgICAgIHJldHVybiBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbChuZXcgTm9ybWFsaXplcih7XG4gICAgICAgICAgICBkYXRhOiByZWxhdGVkRW50aXR5LFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGhheXN0YWNrXG4gICAgICAgIH0pLCBwcm9wZXJ0eVRyZWUpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVsYXRlZEVudGl0eShyZWxhdGlvbkRhdGEsIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICB2YXIgc2VhcmNoID0gaXNBcnJheShyZWxhdGlvbkRhdGEpID8gbWFwKHJlbGF0aW9uRGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSArICdAJyArIGl0ZW0uaWQ7XG4gICAgICAgIH0pIDogW3JlbGF0aW9uRGF0YS50eXBlICsgJ0AnICsgcmVsYXRpb25EYXRhLmlkXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBzZWFyY2guaW5kZXhPZihpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkKSA+PSAwICYmIHRlbXAucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlbXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXAubGVuZ3RoID09PSAxICYmICFpc0FycmF5KHJlbGF0aW9uRGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5VG9OZXN0ZWRPYmplY3QoY29sbGVjdGlvbikge1xuXG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIHRlbXAgPSBvYmo7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSB0ZW1wW2NvbGxlY3Rpb25baV1dID0gdGVtcFtjb2xsZWN0aW9uW2ldXSB8fCAoaSsxID09PSBjb2xsZWN0aW9uTGVuZ3RoID8gdW5kZWZpbmVkIDoge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUHJvcGVydHlUcmVlKHByb3BlcnR5TGlzdCkge1xuXG4gICAgICAgIHZhciB0ZW1wID0ge307XG5cbiAgICAgICAgZWFjaChwcm9wZXJ0eUxpc3QsIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVBhcnRzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGRlZXBFeHRlbmQodGVtcCwgYXJyYXlUb05lc3RlZE9iamVjdChwcm9wZXJ0eVBhcnRzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBbcHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZW1wO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlhUHJvcGVydHlUcmVlKHByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuXG4gICAgICAgICAgICByZXR1cm4gbWFwKHRoaXMuZGF0YXNldC5kYXRhLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgdGhpcy5oYXlzdGFjayk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIHRoaXMuZGF0YXNldC5kYXRhLCB0aGlzLmhheXN0YWNrKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBOb3JtYWxpemVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRWaWFQcm9wZXJ0eVRyZWUuY2FsbCh0aGlzLCBidWlsZFByb3BlcnR5VHJlZShpc0FycmF5KHByb3BlcnR5KSA/IHByb3BlcnR5IDogW3Byb3BlcnR5XSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogbWFwKHJlc3VsdCwgZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbVtwcm9wZXJ0eV07IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcGVydHkpID8gcmVzdWx0IDogcmVzdWx0W3Byb3BlcnR5XTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHJldHVybiBOb3JtYWxpemVyO1xuXG59KSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==