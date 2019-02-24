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
      throw "Unsupported error_type: '" + apiError.error_type + "'";
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
      return "(".concat(this.code, ", ").concat(this.title, ")");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9lcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL2pzb25hcGkuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9sb2cuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL2xpYi9tb2RlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbGliL3F1ZXJ5LmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2NvbW1lcmNlbGF5ZXIvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9jb21tZXJjZWxheWVyLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9qc29uLWFwaS1ub3JtYWxpemUvc3JjL2pzb25BcGlOb3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vY29tbWVyY2VsYXllci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJtb2RlbCIsInF1ZXJ5IiwiY2xpZW50IiwibG9nIiwianNvbmFwaSIsImVycm9yUmVzcG9uc2UiLCJDTEFwaSIsImZpbHRlciIsIm9wdGlvbnMiLCJyZXF1ZXN0IiwibmV3UmVxdWVzdCIsInNldFBhcmFtcyIsInNldE9wdGlvbnMiLCJhbGwiLCJsaXN0QWRkcmVzc2VzIiwiaWQiLCJhZGRyZXNzIiwic2V0Qm9keSIsImxpc3RDcmVkaXRDYXJkcyIsImNyZWRpdF9jYXJkIiwibGlzdEN1c3RvbWVyQWRkcmVzc2VzIiwiY3VzdG9tZXJfYWRkcmVzcyIsImxpc3RDdXN0b21lckdyb3VwcyIsImN1c3RvbWVyX2dyb3VwIiwibGlzdEN1c3RvbWVyUGFzc3dvcmRSZXNldHMiLCJjdXN0b21lcl9wYXNzd29yZF9yZXNldCIsImxpc3RDdXN0b21lclBheW1lbnRTb3VyY2VzIiwiY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UiLCJsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zIiwiY3VzdG9tZXJfc3Vic2NyaXB0aW9uIiwibGlzdEN1c3RvbWVycyIsImN1c3RvbWVyIiwibGlzdERlbGl2ZXJ5TGVhZFRpbWVzIiwiZGVsaXZlcnlfbGVhZF90aW1lIiwibGlzdEltcG9ydHMiLCJpbXBvcnRfIiwibGlzdEludmVudG9yeU1vZGVscyIsImludmVudG9yeV9tb2RlbCIsImxpc3RMaW5lSXRlbU9wdGlvbnMiLCJsaW5lX2l0ZW1fb3B0aW9uIiwibGlzdExpbmVJdGVtcyIsImxpbmVfaXRlbSIsImxpc3RNYXJrZXRzIiwibWFya2V0IiwibGlzdE1lcmNoYW50cyIsIm1lcmNoYW50IiwibGlzdE9yZGVycyIsIm9yZGVyIiwibGlzdFBhcmNlbHMiLCJwYXJjZWwiLCJsaXN0UGF5bWVudE1ldGhvZHMiLCJwYXltZW50X21ldGhvZCIsImxpc3RQYXlwYWxQYXltZW50cyIsInBheXBhbF9wYXltZW50IiwibGlzdFByaWNlTGlzdHMiLCJwcmljZV9saXN0IiwibGlzdFByaWNlcyIsInByaWNlIiwibGlzdFNoaXBtZW50cyIsInNoaXBtZW50IiwibGlzdFNoaXBwaW5nQ2F0ZWdvcmllcyIsInNoaXBwaW5nX2NhdGVnb3J5IiwibGlzdFNoaXBwaW5nTWV0aG9kcyIsInNoaXBwaW5nX21ldGhvZCIsImxpc3RTaGlwcGluZ1pvbmVzIiwic2hpcHBpbmdfem9uZSIsImxpc3RTa3VPcHRpb25zIiwic2t1X29wdGlvbiIsImxpc3RTa3VzIiwic2t1IiwibGlzdFN0b2NrSXRlbXMiLCJzdG9ja19pdGVtIiwibGlzdFN0b2NrTGV2ZWxzIiwic3RvY2tfbGV2ZWwiLCJsaXN0U3RvY2tMb2NhdGlvbnMiLCJzdG9ja19sb2NhdGlvbiIsImxpc3RXZWJob29rcyIsIndlYmhvb2siLCJsaXN0V2lyZVRyYW5zZmVycyIsIndpcmVfdHJhbnNmZXIiLCJhcGkiLCJjbGFwaSIsImluaXRpYWxpemUiLCJjZmciLCJtc2ciLCJuZXdJbnN0YW5jZSIsImFwaVJlcXVlc3QiLCJjb3JyZWxhdGlvbl9pZCIsImF0dGVtcHQiLCJwYXRoIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlamVjdCIsIm5ld0Vycm9yIiwiYm9keSIsInNlcmlhbGl6ZSIsImNhbGwiLCJ0aGVuIiwiYXBpUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlX3R5cGUiLCJjYXRjaCIsImFwaUVycm9yIiwiZXJyb3IiLCJlcnJvcl90eXBlIiwibm9ybWFsaXplIiwiZGF0YSIsImVycm9ycyIsInN0YXR1cyIsImFkZEFwaUVycm9ycyIsInN0YXR1c1RleHQiLCJyZXMiLCJpc0FwaVJlc291cmNlIiwiZGF0YXNldCIsImxpc3RGdW5jdGlvbiIsInNldFBhZ2UiLCJzaXplIiwicGFnZV9zaXplIiwibnVtYmVyIiwiaXNRdWVyeUZpbHRlciIsInBhZ2UiLCJuYW1lIiwic3RhcnRzV2l0aCIsImZpcnN0UGFnZSIsIm1heF9wYWdlIiwibWV0YSIsInBhZ2VfY291bnQiLCJsZW5ndGgiLCJwYWdlcyIsIkFycmF5IiwicG4iLCJvdXQiLCJwIiwiY29uY2F0IiwiZm9yRWFjaCIsImF4aW9zIiwiQXV0aCIsImNsaWVudF9pZCIsImNsaWVudF9zZWNyZXQiLCJncmFudF90eXBlIiwiY2lkIiwiY3NlYyIsIkNsaWVudENyZWRlbnRpYWxzIiwic2NvcGUiLCJBdXRob3JpemF0aW9uQ29kZSIsImNvZGUiLCJyZWRpcmVjdF91cmkiLCJ1cmkiLCJQYXNzd29yZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJSZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwidG9rZW4iLCJBcGlUb2tlbiIsImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiLCJvd25lcl90eXBlIiwib3duZXJfaWQiLCJjcmVhdGVkX2F0IiwiZXhwaXJlc19pbiIsImF1dGhlbnRpY2F0ZSIsImF1dGgiLCJwb3N0IiwibmV3QXV0aENvbmZpZyIsImNvbmZpZyIsInV0aWxzIiwic2V0dGluZ3MiLCJzZGsiLCJkZWZhdWx0IiwibWVyZ2VNYXBzIiwiY2xheWVyIiwibGFzdEFjY2Vzc1Rva2VuIiwiY2hlY2tBcGlDb25maWciLCJiYXNlX3VybCIsInNldEF4aW9zQ29uZmlnIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiaGVhZGVycyIsImNvbW1vbiIsImRlYnVnIiwidHJhY2UiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJBcGlDbGllbnQiLCJtZXRob2QiLCJBcGlSZXF1ZXN0IiwicGFyYW1zIiwiZ3VpZCIsImJ1aWxkIiwidHlwZSIsInJlc3BvbnNlVHlwZSIsImVycm9yVHlwZSIsInJhdyIsImF1dGhfYXR0ZW1wdHMiLCJhdXRoQ29uZmlnIiwiYXV0aGVudGljYXRpb24iLCJpc0F1dGhDb25maWciLCJjbGllbnRJZCIsIm1hcmtldFNjb3BlIiwibWFya2V0X2lkIiwiY2xpZW50U2VjcmV0IiwibWVzc2FnZSIsIm5ld0F0dGVtcHQiLCJiYXNlX3BhdGgiLCJjYWxsVXJsIiwiT2JqZWN0Iiwia2V5cyIsInF1ZXJ5U3RyaW5nIiwibWFwIiwia2V5Iiwiam9pbiIsImF4aW9zQ29uZmlnIiwidXJsIiwidGltZW91dCIsImV4dGVuZE1hcCIsIm1heF9hdHRlbXB0cyIsInJldHJ5Iiwic2xlZXAiLCJBdXRob3JpemF0aW9uIiwiY291bnRyeV9jb2RlIiwibGFuZ3VhZ2VfY29kZSIsImNvbnNvbGUiLCJFcnJvciIsInRpdGxlIiwiZGV0YWlsIiwic291cmNlIiwicG9pbnRlciIsIkVycm9yUmVzcG9uc2UiLCJkZXNjcmlwdGlvbiIsImlzQXBpRXJyb3IiLCJwdXNoIiwiYWRkRXJyb3IiLCJhcGlFcnJvcnMiLCJhZGRBcGlFcnJvciIsImFwaUVycm9yc0NvdW50IiwiaW5kZXgiLCJlcnIiLCJ4IiwiSnNvbkFwaVJlc291cmNlIiwiZGVzZXJpYWxpemUiLCJqYXBpIiwicmVzb3VyY2UiLCJhdHRyaWJ1dGVzIiwiZmllbGQiLCJpbmNsdWRlcyIsInJlbGF0aW9uc2hpcHMiLCJzdWJzdHIiLCJpc0FycmF5IiwicmVsIiwiaGVscGVyIiwibmV3UmVzb3VyY2UiLCJyZWxfZGF0YSIsInJlbFJlcyIsInNldFJlc291cmNlIiwiaW5jIiwianNvbmFwaUluY2x1ZGVkIiwic2V0RmllbGRzIiwiaW5jbHVkZWQiLCJpbmNSZXMiLCJlbmFibGUiLCJkaXNhYmxlIiwicHJvYmUiLCJlbmFibGVkIiwiUmVzb3VyY2UiLCJyZWZlcmVuY2UiLCJtZXRhZGF0YSIsInVwZGF0ZWRfYXQiLCJmaWVsZHMiLCJ2YWx1ZSIsIkFkZHJlc3MiLCJUWVBFIiwiYnVzaW5lc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiY29tcGFueSIsImxpbmVfMSIsImxpbmVfMiIsImNpdHkiLCJ6aXBfY29kZSIsInN0YXRlX2NvZGUiLCJwaG9uZSIsImVtYWlsIiwibm90ZXMiLCJsYXQiLCJsbmciLCJiaWxsaW5nX2luZm8iLCJDcmVkaXRDYXJkIiwibW9udGgiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiQ3VzdG9tZXJBZGRyZXNzIiwiQ3VzdG9tZXJHcm91cCIsIkN1c3RvbWVyUGFzc3dvcmRSZXNldCIsImN1c3RvbWVyX2VtYWlsIiwiY3VzdG9tZXJfcGFzc3dvcmQiLCJfcmVzZXRfcGFzc3dvcmRfdG9rZW4iLCJDdXN0b21lclBheW1lbnRTb3VyY2UiLCJDdXN0b21lclN1YnNjcmlwdGlvbiIsIkN1c3RvbWVyIiwiRGVsaXZlcnlMZWFkVGltZSIsIm1pbl9ob3VycyIsIm1heF9ob3VycyIsIkltcG9ydCIsInJlc291cmNlX3R5cGUiLCJwYXJlbnRfcmVzb3VyY2VfaWQiLCJpbnB1dHMiLCJjbGVhbnVwX3JlY29yZHMiLCJJbnZlbnRvcnlNb2RlbCIsIkxpbmVJdGVtT3B0aW9uIiwicXVhbnRpdHkiLCJMaW5lSXRlbSIsInNrdV9jb2RlIiwiX3VwZGF0ZV9xdWFudGl0eSIsImltYWdlX3VybCIsIk1hcmtldCIsImZhY2Vib29rX3BpeGVsX2lkIiwiTWVyY2hhbnQiLCJPcmRlciIsImd1ZXN0Iiwic2hpcHBpbmdfY291bnRyeV9jb2RlX2xvY2siLCJjb3Vwb25fY29kZSIsImNhcnRfdXJsIiwicmV0dXJuX3VybCIsInRlcm1zX3VybCIsInByaXZhY3lfdXJsIiwiX3BsYWNlIiwiX2NhbmNlbCIsIl9hcHByb3ZlIiwiX2NhcHR1cmUiLCJfdXBkYXRlX3RheGVzIiwiX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZCIsIl9zaGlwcGluZ19hZGRyZXNzX2Nsb25lX2lkIiwiX2N1c3RvbWVyX3BheW1lbnRfc291cmNlX2lkIiwiX3NoaXBwaW5nX2FkZHJlc3Nfc2FtZV9hc19iaWxsaW5nIiwiX2JpbGxpbmdfYWRkcmVzc19zYW1lX2FzX3NoaXBwaW5nIiwiX3NhdmVfcGF5bWVudF9zb3VyY2VfdG9fY3VzdG9tZXJfd2FsbGV0IiwiX3NhdmVfc2hpcHBpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2siLCJfc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rIiwiX3JlZnJlc2giLCJQYXJjZWwiLCJ3ZWlnaHQiLCJ1bml0X29mX3dlaWdodCIsImVlbF9wZmMiLCJjb250ZW50c190eXBlIiwiY29udGVudHNfZXhwbGFuYXRpb24iLCJjdXN0b21zX2NlcnRpZnkiLCJjdXN0b21zX3NpZ25lciIsIm5vbl9kZWxpdmVyeV9vcHRpb24iLCJyZXN0cmljdGlvbl90eXBlIiwicmVzdHJpY3Rpb25fY29tbWVudHMiLCJjdXN0b21zX2luZm9fcmVxdWlyZWQiLCJQYXltZW50TWV0aG9kIiwicGF5bWVudF9zb3VyY2VfdHlwZSIsInByaWNlX2Ftb3VudF9jZW50cyIsIlBheXBhbFBheW1lbnQiLCJjYW5jZWxfdXJsIiwibm90ZV90b19wYXllciIsInBheXBhbF9wYXllcl9pZCIsIlByaWNlTGlzdCIsImN1cnJlbmN5X2NvZGUiLCJ0YXhfaW5jbHVkZWQiLCJQcmljZSIsImFtb3VudF9jZW50cyIsImNvbXBhcmVfYXRfYW1vdW50X2NlbnRzIiwiU2hpcG1lbnQiLCJfb25faG9sZCIsIl9waWNraW5nIiwiX3BhY2tpbmciLCJfcmVhZHlfdG9fc2hpcCIsIl9zaGlwIiwiX2dldF9yYXRlcyIsInNlbGVjdGVkX3JhdGVfaWQiLCJfcHVyY2hhc2UiLCJTaGlwcGluZ0NhdGVnb3J5IiwiU2hpcHBpbmdNZXRob2QiLCJmcmVlX292ZXJfYW1vdW50X2NlbnRzIiwiU2hpcHBpbmdab25lIiwiY291bnRyeV9jb2RlX3JlZ2V4Iiwibm90X2NvdW50cnlfY29kZV9yZWdleCIsInN0YXRlX2NvZGVfcmVnZXgiLCJub3Rfc3RhdGVfY29kZV9yZWdleCIsInppcF9jb2RlX3JlZ2V4Iiwibm90X3ppcF9jb2RlX3JlZ2V4IiwiU2t1T3B0aW9uIiwiZGVsYXlfaG91cnMiLCJza3VfY29kZV9yZWdleCIsIlNrdSIsInRhZ19uYW1lcyIsInBpZWNlc19wZXJfcGFjayIsIlN0b2NrSXRlbSIsIlN0b2NrTGV2ZWwiLCJwcmlvcml0eSIsIm9uX2hvbGQiLCJTdG9ja0xvY2F0aW9uIiwibGFiZWxfZm9ybWF0IiwiV2ViaG9vayIsInRvcGljIiwiY2FsbGJhY2tfdXJsIiwiaW5jbHVkZV9yZXNvdXJjZXMiLCJXaXJlVHJhbnNmZXIiLCJpbnN0YW5jZSIsImNsIiwiY2xfdHlwZSIsIlF1ZXJ5RmlsdGVyIiwiY2xlYXIiLCJzb3J0X2ZpZWxkcyIsInNwYXJzZV9maWVsZHNldHMiLCJpbmNsdWRlZF9yZXNvdXJjZXMiLCJmaWx0ZXJfZmllbGRzIiwiY3VzdG9tX3BhcmFtcyIsInBhZ2VfbnVtYmVyIiwiZGVzY2VuZGluZyIsInJlc291cmNlcyIsImZpbHRlcnMiLCJwYXJhbSIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsIk51bWJlciIsImlzSW50ZWdlciIsInFzTWFwIiwiaW5jbHVkZSIsInNvcnQiLCJleHQiLCJtYXAxIiwibWFwMiIsImNsb25lTWFwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInRvVXBwZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakZBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLG1CQUFPLENBQUMscUNBQUQsQ0FBeEIsQyxDQUVBOztBQUNBRixNQUFNLENBQUNDLE9BQVAsQ0FBZUUsS0FBZixHQUF1QkQsbUJBQU8sQ0FBQyxtQ0FBRCxDQUE5QixDLENBRUE7O0FBQ0FGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRyxLQUFmLEdBQXVCRixtQkFBTyxDQUFDLG1DQUFELENBQTlCLEM7Ozs7Ozs7Ozs7Ozs7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O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDRFQUE0RSx1QkFBdUIsRUFBRTtBQUNyRyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNyUUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJjb21tZXJjZWxheWVyLXNkay5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvY2xheWVyJylcclxuXHJcbi8vIE1vZGVsIEV4dGVuc2lvblxyXG5tb2R1bGUuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vbGliL21vZGVsJylcclxuXHJcbi8vIFF1ZXJ5RmlsdGVyIEV4dGVuc2lvblxyXG5tb2R1bGUuZXhwb3J0cy5xdWVyeSA9IHJlcXVpcmUoJy4vbGliL3F1ZXJ5JylcclxuIiwiLy8gRmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhdCAyNC8wMi8yMDE5IDExOjEwOjQ5IGJ5IGNvbW1lcmNlbGF5ZXItanMtc2RrLWNvZGVnZW5cclxuXHJcblxyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpXHJcbmNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcclxuY29uc3QganNvbmFwaSA9IHJlcXVpcmUoJy4vanNvbmFwaScpXHJcbmNvbnN0IGVycm9yUmVzcG9uc2UgPSByZXF1aXJlKCcuL2Vycm9yJykuZXJyb3JSZXNwb25zZVxyXG5cclxuXHJcbmNsYXNzIENMQXBpIHtcclxuXHJcblx0Ly8gQWRkcmVzc1xyXG5cdGxpc3RBZGRyZXNzZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9hZGRyZXNzZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0QWRkcmVzc2VzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVBZGRyZXNzKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2FkZHJlc3Nlcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQWRkcmVzcyhhZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvYWRkcmVzc2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGFkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQWRkcmVzcyhpZCwgYWRkcmVzcywgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9hZGRyZXNzZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGFkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQWRkcmVzcyhpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvYWRkcmVzc2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlZGl0IENhcmRcclxuXHRsaXN0Q3JlZGl0Q2FyZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbENyZWRpdENhcmRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDcmVkaXRDYXJkcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3JlZGl0Q2FyZChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNyZWRpdENhcmQoY3JlZGl0X2NhcmQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jcmVkaXRfY2FyZHMnLCAncG9zdCcpLnNldEJvZHkoY3JlZGl0X2NhcmQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3JlZGl0Q2FyZChpZCwgY3JlZGl0X2NhcmQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3JlZGl0X2NhcmRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjcmVkaXRfY2FyZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDcmVkaXRDYXJkKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jcmVkaXRfY2FyZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBBZGRyZXNzXHJcblx0bGlzdEN1c3RvbWVyQWRkcmVzc2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lckFkZHJlc3NlcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJBZGRyZXNzZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyQWRkcmVzcyhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9hZGRyZXNzZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyQWRkcmVzcyhjdXN0b21lcl9hZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfYWRkcmVzc2VzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX2FkZHJlc3MpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQ3VzdG9tZXJBZGRyZXNzKGlkLCBjdXN0b21lcl9hZGRyZXNzLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfYWRkcmVzcykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lckFkZHJlc3MoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2FkZHJlc3Nlcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIEdyb3VwXHJcblx0bGlzdEN1c3RvbWVyR3JvdXBzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfZ3JvdXBzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lckdyb3VwcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJHcm91cHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyR3JvdXAoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfZ3JvdXBzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lckdyb3VwKGN1c3RvbWVyX2dyb3VwLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfZ3JvdXBzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX2dyb3VwKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyR3JvdXAoaWQsIGN1c3RvbWVyX2dyb3VwLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX2dyb3Vwcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfZ3JvdXApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJHcm91cChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfZ3JvdXBzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXIgUGFzc3dvcmQgUmVzZXRcclxuXHRsaXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJQYXNzd29yZFJlc2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0Q3VzdG9tZXJQYXNzd29yZFJlc2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ3VzdG9tZXJQYXNzd29yZFJlc2V0KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KGN1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyUGFzc3dvcmRSZXNldChpZCwgY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfcGFzc3dvcmRfcmVzZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcl9wYXNzd29yZF9yZXNldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lclBhc3N3b3JkUmVzZXQoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEN1c3RvbWVyIFBheW1lbnQgU291cmNlXHJcblx0bGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEN1c3RvbWVyUGF5bWVudFNvdXJjZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVyUGF5bWVudFNvdXJjZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyUGF5bWVudFNvdXJjZShjdXN0b21lcl9wYXltZW50X3NvdXJjZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcl9wYXltZW50X3NvdXJjZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lclBheW1lbnRTb3VyY2UoaWQsIGN1c3RvbWVyX3BheW1lbnRfc291cmNlLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3BheW1lbnRfc291cmNlcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfcGF5bWVudF9zb3VyY2UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlQ3VzdG9tZXJQYXltZW50U291cmNlKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9wYXltZW50X3NvdXJjZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDdXN0b21lciBTdWJzY3JpcHRpb25cclxuXHRsaXN0Q3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsQ3VzdG9tZXJTdWJzY3JpcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RDdXN0b21lclN1YnNjcmlwdGlvbnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGN1c3RvbWVyX3N1YnNjcmlwdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVyX3N1YnNjcmlwdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkLCBjdXN0b21lcl9zdWJzY3JpcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJfc3Vic2NyaXB0aW9ucy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoY3VzdG9tZXJfc3Vic2NyaXB0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUN1c3RvbWVyU3Vic2NyaXB0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9jdXN0b21lcl9zdWJzY3JpcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3VzdG9tZXJcclxuXHRsaXN0Q3VzdG9tZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvY3VzdG9tZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxDdXN0b21lcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdEN1c3RvbWVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlQ3VzdG9tZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDdXN0b21lcihjdXN0b21lciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2N1c3RvbWVycycsICdwb3N0Jykuc2V0Qm9keShjdXN0b21lcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDdXN0b21lcihpZCwgY3VzdG9tZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShjdXN0b21lcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDdXN0b21lcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvY3VzdG9tZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVsaXZlcnkgTGVhZCBUaW1lXHJcblx0bGlzdERlbGl2ZXJ5TGVhZFRpbWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsRGVsaXZlcnlMZWFkVGltZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdERlbGl2ZXJ5TGVhZFRpbWVzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVEZWxpdmVyeUxlYWRUaW1lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZURlbGl2ZXJ5TGVhZFRpbWUoZGVsaXZlcnlfbGVhZF90aW1lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvZGVsaXZlcnlfbGVhZF90aW1lcycsICdwb3N0Jykuc2V0Qm9keShkZWxpdmVyeV9sZWFkX3RpbWUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRGVsaXZlcnlMZWFkVGltZShpZCwgZGVsaXZlcnlfbGVhZF90aW1lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2RlbGl2ZXJ5X2xlYWRfdGltZXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGRlbGl2ZXJ5X2xlYWRfdGltZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVEZWxpdmVyeUxlYWRUaW1lKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9kZWxpdmVyeV9sZWFkX3RpbWVzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW1wb3J0XHJcblx0bGlzdEltcG9ydHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbXBvcnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxJbXBvcnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RJbXBvcnRzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVJbXBvcnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW1wb3J0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlSW1wb3J0KGltcG9ydF8sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbXBvcnRzJywgJ3Bvc3QnKS5zZXRCb2R5KGltcG9ydF8pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW1wb3J0KGlkLCBpbXBvcnRfLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ltcG9ydHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGltcG9ydF8pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlSW1wb3J0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbXBvcnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW52ZW50b3J5IE1vZGVsXHJcblx0bGlzdEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2ludmVudG9yeV9tb2RlbHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbEludmVudG9yeU1vZGVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0SW52ZW50b3J5TW9kZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVJbnZlbnRvcnlNb2RlbChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9pbnZlbnRvcnlfbW9kZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVJbnZlbnRvcnlNb2RlbChpbnZlbnRvcnlfbW9kZWwsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9pbnZlbnRvcnlfbW9kZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJbnZlbnRvcnlNb2RlbChpZCwgaW52ZW50b3J5X21vZGVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2ludmVudG9yeV9tb2RlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGludmVudG9yeV9tb2RlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVJbnZlbnRvcnlNb2RlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvaW52ZW50b3J5X21vZGVscy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIExpbmUgSXRlbSBPcHRpb25cclxuXHRsaXN0TGluZUl0ZW1PcHRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbGluZV9pdGVtX29wdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbExpbmVJdGVtT3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TGluZUl0ZW1PcHRpb25zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVMaW5lSXRlbU9wdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1fb3B0aW9ucy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlTGluZUl0ZW1PcHRpb24obGluZV9pdGVtX29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGluZUl0ZW1PcHRpb24oaWQsIGxpbmVfaXRlbV9vcHRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtX29wdGlvbnMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTGluZUl0ZW1PcHRpb24oaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbV9vcHRpb25zLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTGluZSBJdGVtXHJcblx0bGlzdExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL2xpbmVfaXRlbXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbExpbmVJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TGluZUl0ZW1zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVMaW5lSXRlbShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9saW5lX2l0ZW1zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMaW5lSXRlbShsaW5lX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9saW5lX2l0ZW1zJywgJ3Bvc3QnKS5zZXRCb2R5KGxpbmVfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMaW5lSXRlbShpZCwgbGluZV9pdGVtLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL2xpbmVfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KGxpbmVfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVMaW5lSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbGluZV9pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE1hcmtldFxyXG5cdGxpc3RNYXJrZXRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWFya2V0cycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsTWFya2V0cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0TWFya2V0cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWFya2V0KGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL21hcmtldHMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZU1hcmtldChtYXJrZXQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9tYXJrZXRzJywgJ3Bvc3QnKS5zZXRCb2R5KG1hcmtldCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNYXJrZXQoaWQsIG1hcmtldCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtYXJrZXQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlTWFya2V0KGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9tYXJrZXRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWVyY2hhbnRcclxuXHRsaXN0TWVyY2hhbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvbWVyY2hhbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxNZXJjaGFudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE1lcmNoYW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlTWVyY2hhbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVNZXJjaGFudChtZXJjaGFudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL21lcmNoYW50cycsICdwb3N0Jykuc2V0Qm9keShtZXJjaGFudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNZXJjaGFudChpZCwgbWVyY2hhbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShtZXJjaGFudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVNZXJjaGFudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvbWVyY2hhbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3JkZXJcclxuXHRsaXN0T3JkZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvb3JkZXJzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxPcmRlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdE9yZGVycywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlT3JkZXIoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVPcmRlcihvcmRlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL29yZGVycycsICdwb3N0Jykuc2V0Qm9keShvcmRlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVPcmRlcihpZCwgb3JkZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShvcmRlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVPcmRlcihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvb3JkZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFyY2VsXHJcblx0bGlzdFBhcmNlbHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wYXJjZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXJjZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RQYXJjZWxzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXJjZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGFyY2Vscy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFyY2VsKHBhcmNlbCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BhcmNlbHMnLCAncG9zdCcpLnNldEJvZHkocGFyY2VsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBhcmNlbChpZCwgcGFyY2VsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBhcmNlbCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQYXJjZWwoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BhcmNlbHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXltZW50IE1ldGhvZFxyXG5cdGxpc3RQYXltZW50TWV0aG9kcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsUGF5bWVudE1ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFBheW1lbnRNZXRob2RzLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVQYXltZW50TWV0aG9kKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGF5bWVudE1ldGhvZChwYXltZW50X21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3BheW1lbnRfbWV0aG9kcycsICdwb3N0Jykuc2V0Qm9keShwYXltZW50X21ldGhvZCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYXltZW50TWV0aG9kKGlkLCBwYXltZW50X21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wYXltZW50X21ldGhvZHMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHBheW1lbnRfbWV0aG9kKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVBheW1lbnRNZXRob2QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheW1lbnRfbWV0aG9kcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBheXBhbCBQYXltZW50XHJcblx0bGlzdFBheXBhbFBheW1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5cGFsX3BheW1lbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQYXlwYWxQYXltZW50cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0UGF5cGFsUGF5bWVudHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVBheXBhbFBheW1lbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYXlwYWxQYXltZW50KHBheXBhbF9wYXltZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcGF5cGFsX3BheW1lbnRzJywgJ3Bvc3QnKS5zZXRCb2R5KHBheXBhbF9wYXltZW50KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVBheXBhbFBheW1lbnQoaWQsIHBheXBhbF9wYXltZW50LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3BheXBhbF9wYXltZW50cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocGF5cGFsX3BheW1lbnQpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUGF5cGFsUGF5bWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcGF5cGFsX3BheW1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2UgTGlzdFxyXG5cdGxpc3RQcmljZUxpc3RzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VfbGlzdHMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFByaWNlTGlzdHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlTGlzdHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVByaWNlTGlzdChpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUHJpY2VMaXN0KHByaWNlX2xpc3QsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9wcmljZV9saXN0cycsICdwb3N0Jykuc2V0Qm9keShwcmljZV9saXN0KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByaWNlTGlzdChpZCwgcHJpY2VfbGlzdCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9wcmljZV9saXN0cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkocHJpY2VfbGlzdCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQcmljZUxpc3QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3ByaWNlX2xpc3RzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJpY2VcclxuXHRsaXN0UHJpY2VzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvcHJpY2VzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxQcmljZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFByaWNlcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlUHJpY2UoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmljZShwcmljZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3ByaWNlcycsICdwb3N0Jykuc2V0Qm9keShwcmljZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcmljZShpZCwgcHJpY2UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShwcmljZSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVQcmljZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvcHJpY2VzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcG1lbnRcclxuXHRsaXN0U2hpcG1lbnRzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcG1lbnRzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwbWVudHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBtZW50cywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcG1lbnQoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwbWVudChzaGlwbWVudCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBtZW50cycsICdwb3N0Jykuc2V0Qm9keShzaGlwbWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTaGlwbWVudChpZCwgc2hpcG1lbnQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwbWVudCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTaGlwbWVudChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcG1lbnRzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2hpcHBpbmcgQ2F0ZWdvcnlcclxuXHRsaXN0U2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdDYXRlZ29yaWVzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTaGlwcGluZ0NhdGVnb3JpZXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNoaXBwaW5nQ2F0ZWdvcnkoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdDYXRlZ29yeShzaGlwcGluZ19jYXRlZ29yeSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX2NhdGVnb3JpZXMnLCAncG9zdCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdDYXRlZ29yeShpZCwgc2hpcHBpbmdfY2F0ZWdvcnksIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2hpcHBpbmdfY2F0ZWdvcnkpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdDYXRlZ29yeShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfY2F0ZWdvcmllcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNoaXBwaW5nIE1ldGhvZFxyXG5cdGxpc3RTaGlwcGluZ01ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ19tZXRob2RzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTaGlwcGluZ01ldGhvZHMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNoaXBwaW5nTWV0aG9kcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdNZXRob2QoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfbWV0aG9kcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlU2hpcHBpbmdNZXRob2Qoc2hpcHBpbmdfbWV0aG9kLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2hpcHBpbmdfbWV0aG9kcycsICdwb3N0Jykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdNZXRob2QoaWQsIHNoaXBwaW5nX21ldGhvZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zaGlwcGluZ19tZXRob2RzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ19tZXRob2QpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hpcHBpbmdNZXRob2QoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX21ldGhvZHMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTaGlwcGluZyBab25lXHJcblx0bGlzdFNoaXBwaW5nWm9uZXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zaGlwcGluZ196b25lcycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2hpcHBpbmdab25lcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2hpcHBpbmdab25lcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2hpcHBpbmdab25lKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGlwcGluZ1pvbmUoc2hpcHBpbmdfem9uZSwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NoaXBwaW5nX3pvbmVzJywgJ3Bvc3QnKS5zZXRCb2R5KHNoaXBwaW5nX3pvbmUpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2hpcHBpbmdab25lKGlkLCBzaGlwcGluZ196b25lLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NoaXBwaW5nX3pvbmVzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzaGlwcGluZ196b25lKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNoaXBwaW5nWm9uZShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2hpcHBpbmdfem9uZXMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3UgT3B0aW9uXHJcblx0bGlzdFNrdU9wdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9za3Vfb3B0aW9ucycpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0YWxsU2t1T3B0aW9ucyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U2t1T3B0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU2t1T3B0aW9uKGlkLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3VPcHRpb24oc2t1X29wdGlvbiwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0ICAgIHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdV9vcHRpb25zJywgJ3Bvc3QnKS5zZXRCb2R5KHNrdV9vcHRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1T3B0aW9uKGlkLCBza3Vfb3B0aW9uLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3NrdV9vcHRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShza3Vfb3B0aW9uKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNrdU9wdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1X29wdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTa3VcclxuXHRsaXN0U2t1cyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3NrdXMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFNrdXMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFNrdXMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVNrdShpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9za3VzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTa3Uoc2t1LCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc2t1cycsICdwb3N0Jykuc2V0Qm9keShza3UpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2t1KGlkLCBza3UsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc2t1KS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVNrdShpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc2t1cy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIEl0ZW1cclxuXHRsaXN0U3RvY2tJdGVtcyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KCcvYXBpL3N0b2NrX2l0ZW1zJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0l0ZW1zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0l0ZW1zLCBmaWx0ZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmV0cmlldmVTdG9ja0l0ZW0oaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrSXRlbShzdG9ja19pdGVtLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfaXRlbXMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfaXRlbSkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTdG9ja0l0ZW0oaWQsIHN0b2NrX2l0ZW0sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfaXRlbXMvJHtpZH1gLCAncGF0Y2gnKS5zZXRCb2R5KHN0b2NrX2l0ZW0pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19pdGVtcy8ke2lkfWAsICdkZWxldGUnKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0b2NrIExldmVsXHJcblx0bGlzdFN0b2NrTGV2ZWxzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRhbGxTdG9ja0xldmVscyhmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBhbGwodGhpcy5saXN0U3RvY2tMZXZlbHMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVN0b2NrTGV2ZWwoaWQsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCkuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTdG9ja0xldmVsKHN0b2NrX2xldmVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvc3RvY2tfbGV2ZWxzJywgJ3Bvc3QnKS5zZXRCb2R5KHN0b2NrX2xldmVsKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b2NrTGV2ZWwoaWQsIHN0b2NrX2xldmVsLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3N0b2NrX2xldmVscy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkoc3RvY2tfbGV2ZWwpLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU3RvY2tMZXZlbChpZCkge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbGV2ZWxzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3RvY2sgTG9jYXRpb25cclxuXHRsaXN0U3RvY2tMb2NhdGlvbnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sb2NhdGlvbnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFN0b2NrTG9jYXRpb25zKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RTdG9ja0xvY2F0aW9ucywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlU3RvY2tMb2NhdGlvbihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVN0b2NrTG9jYXRpb24oc3RvY2tfbG9jYXRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS9zdG9ja19sb2NhdGlvbnMnLCAncG9zdCcpLnNldEJvZHkoc3RvY2tfbG9jYXRpb24pLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvY2tMb2NhdGlvbihpZCwgc3RvY2tfbG9jYXRpb24sIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoYC9hcGkvc3RvY2tfbG9jYXRpb25zLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keShzdG9ja19sb2NhdGlvbikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVTdG9ja0xvY2F0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS9zdG9ja19sb2NhdGlvbnMvJHtpZH1gLCAnZGVsZXRlJykpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBXZWJob29rXHJcblx0bGlzdFdlYmhvb2tzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2ViaG9va3MnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdlYmhvb2tzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIGFsbCh0aGlzLmxpc3RXZWJob29rcywgZmlsdGVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHJpZXZlV2ViaG9vayhpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93ZWJob29rcy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2ViaG9vayh3ZWJob29rLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHQgICAgcmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2ViaG9va3MnLCAncG9zdCcpLnNldEJvZHkod2ViaG9vaykuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVXZWJob29rKGlkLCB3ZWJob29rLCBmaWx0ZXIsIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ3BhdGNoJykuc2V0Qm9keSh3ZWJob29rKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVdlYmhvb2soaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dlYmhvb2tzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gV2lyZSBUcmFuc2ZlclxyXG5cdGxpc3RXaXJlVHJhbnNmZXJzKGZpbHRlciwgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3QoY2xpZW50Lm5ld1JlcXVlc3QoJy9hcGkvd2lyZV90cmFuc2ZlcnMnKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdGFsbFdpcmVUcmFuc2ZlcnMoZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gYWxsKHRoaXMubGlzdFdpcmVUcmFuc2ZlcnMsIGZpbHRlciwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRyZXRyaWV2ZVdpcmVUcmFuc2ZlcihpZCwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWApLnNldFBhcmFtcyhmaWx0ZXIpLnNldE9wdGlvbnMob3B0aW9ucykpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV2lyZVRyYW5zZmVyKHdpcmVfdHJhbnNmZXIsIGZpbHRlciwgb3B0aW9ucykge1xyXG5cdCAgICByZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdCgnL2FwaS93aXJlX3RyYW5zZmVycycsICdwb3N0Jykuc2V0Qm9keSh3aXJlX3RyYW5zZmVyKS5zZXRQYXJhbXMoZmlsdGVyKS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVdpcmVUcmFuc2ZlcihpZCwgd2lyZV90cmFuc2ZlciwgZmlsdGVyLCBvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVxdWVzdChjbGllbnQubmV3UmVxdWVzdChgL2FwaS93aXJlX3RyYW5zZmVycy8ke2lkfWAsICdwYXRjaCcpLnNldEJvZHkod2lyZV90cmFuc2Zlcikuc2V0UGFyYW1zKGZpbHRlcikuc2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVXaXJlVHJhbnNmZXIoaWQpIHtcclxuXHRcdHJldHVybiByZXF1ZXN0KGNsaWVudC5uZXdSZXF1ZXN0KGAvYXBpL3dpcmVfdHJhbnNmZXJzLyR7aWR9YCwgJ2RlbGV0ZScpKTtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbnZhciBhcGkgPSBuZXcgQ0xBcGkoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmNsYXBpID0gYXBpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaW5pdGlhbGl6ZSA9IChjZmcpID0+IHtcclxuICAgIGxvZy5tc2coJ2FwaSBjbGllbnQgaW5pdGlhbGl6ZWQgd2l0aCBjb25maWc6Jyk7XHJcbiAgICBsb2cubXNnKGNmZyk7XHJcbiAgICBhcGkuY2xpZW50ID0gIGNsaWVudC5uZXdJbnN0YW5jZShjZmcpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgbG9nLm1zZyhgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBjYWxsaW5nICR7YXBpUmVxdWVzdC5wYXRofSAuLi5gKTtcclxuXHJcbiAgICBpZiAoYXBpLmNsaWVudCA9PSB1bmRlZmluZWQpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXdFcnJvcih1bmRlZmluZWQsICdhcGkgbm90IGluaXRpYWxpemVkJykpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBqc29uYXBpLnNlcmlhbGl6ZShhcGlSZXF1ZXN0LmJvZHkpO1xyXG4gICAgICAgIGFwaVJlcXVlc3Quc2V0Qm9keShib2R5KTtcclxuICAgICAgICByZXR1cm4gYXBpLmNsaWVudC5jYWxsKGFwaVJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKGFwaVJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlKGFwaVJlc3BvbnNlLCBhcGlSZXF1ZXN0LnJlc3BvbnNlX3R5cGUpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goYXBpRXJyb3IgPT4geyByZXR1cm4gZXJyb3IoYXBpRXJyb3IsIGFwaVJlcXVlc3QuZXJyb3JfdHlwZSk7IH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXNwb25zZShhcGlSZXNwb25zZSwgcmVzcG9uc2VfdHlwZSkge1xyXG5cdGlmIChyZXNwb25zZV90eXBlID09IHVuZGVmaW5lZCkgcmV0dXJuIGFwaVJlc3BvbnNlO1xyXG5cdGVsc2VcclxuXHRcdHN3aXRjaCAocmVzcG9uc2VfdHlwZSkge1xyXG5cdFx0XHRjYXNlICdtb2RlbCc6XHJcblx0XHRcdFx0dGhyb3cgJ0Rlc2VyaWFsaXphdGlvbiB0byBtb2RlbCBub3Qgc3VwcG9ydGVkJztcclxuXHRcdFx0Y2FzZSAnbm9ybWFsaXplZCc6XHJcblx0XHRcdFx0cmV0dXJuIGpzb25hcGkubm9ybWFsaXplKGFwaVJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRjYXNlICdqc29uYXBpJzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0Y2FzZSAncmF3JzpcclxuXHRcdFx0XHRyZXR1cm4gYXBpUmVzcG9uc2U7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgXCJVbnN1cHBvcnRlZCByZXNwb25zZV90eXBlOiAnXCIgKyBhcGlSZXF1ZXN0LnJlc3BvbnNlX3R5cGUgKyBcIidcIjtcclxuXHRcdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycm9yKGFwaUVycm9yLCBlcnJvcl90eXBlKSB7XHJcblx0aWYgKGVycm9yX3R5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm4gYXBpRXJyb3I7XHJcblx0ZWxzZVxyXG5cdFx0c3dpdGNoIChlcnJvcl90eXBlKSB7XHJcblx0XHRcdGNhc2UgJ21vZGVsJzpcclxuXHRcdFx0XHRpZiAoIWFwaUVycm9yLnJlc3BvbnNlKSByZXR1cm4gYXBpRXJyb3I7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGlmIChhcGlFcnJvci5yZXNwb25zZS5kYXRhICYmIGFwaUVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JSZXNwb25zZShhcGlFcnJvci5yZXNwb25zZS5zdGF0dXMpLmFkZEFwaUVycm9ycyhhcGlFcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvclJlc3BvbnNlKGFwaUVycm9yLnJlc3BvbnNlLnN0YXR1cywgYXBpRXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xyXG5cdFx0XHRjYXNlICdqc29uYXBpJzpcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYXBpRXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdGNhc2UgJ3Jhdyc6XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFwaUVycm9yLnJlc3BvbnNlKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBcIlVuc3VwcG9ydGVkIGVycm9yX3R5cGU6ICdcIiArIGFwaUVycm9yLmVycm9yX3R5cGUgKyBcIidcIjtcclxuXHRcdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRhdGEocmVzKSB7XHJcblx0aWYgKHJlcy5pc0FwaVJlc291cmNlICYmIChyZXMuaXNBcGlSZXNvdXJjZSgpID09PSB0cnVlKSkgcmV0dXJuIHJlcztcclxuXHRlbHNlXHJcblx0aWYgKHJlcy5kYXRhc2V0KSByZXR1cm4gcmVzLmRhdGFzZXQuZGF0YTtcclxuXHRlbHNlXHJcblx0aWYgKHJlcy5kYXRhKSByZXR1cm4gKHJlcy5kYXRhLmRhdGEpPyByZXMuZGF0YS5kYXRhIDogcmVzLmRhdGE7XHJcblx0ZWxzZSByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWxsKGxpc3RGdW5jdGlvbiwgZmlsdGVyID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgIGlmICgobGlzdEZ1bmN0aW9uID09IHVuZGVmaW5lZCkgfHwgIWxpc3RGdW5jdGlvbi5uYW1lLnN0YXJ0c1dpdGgoJ2xpc3QnKSkgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiVW5kZWZpbmVkICdsaXN0JyBBUEkgZnVuY3Rpb25cIik7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFBhZ2UoZmlsdGVyLCBzaXplID0gZmlsdGVyLnBhZ2Vfc2l6ZSB8fCAxMCwgbnVtYmVyID0gMSkge1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKGZpbHRlci5pc1F1ZXJ5RmlsdGVyICYmIChmaWx0ZXIuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSkgZmlsdGVyLnBhZ2UobnVtYmVyLCBzaXplKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyWydwYWdlW3NpemVdJ10gPSBzaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXJbJ3BhZ2VbbnVtYmVyXSddID0gbnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKGZpbHRlcik7XHJcblx0XHJcblx0Ly8gU2F2ZSBvcmlnaW5hbCBvcHRpb24gYW5kIGZvcnhlIHJlc3BvbnNlX3R5cGUgdG8gJ3JhdydcclxuXHRsZXQgcmVzcG9uc2VfdHlwZSA9IG9wdGlvbnMucmVzcG9uc2VfdHlwZTtcclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSAncmF3JztcclxuXHJcblx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlIDFgKTtcclxuXHJcbiAgICBsZXQgZmlyc3RQYWdlID0gYXdhaXQgbGlzdEZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgbWF4X3BhZ2UgPSBmaXJzdFBhZ2UuZGF0YS5tZXRhLnBhZ2VfY291bnQ7XHJcblx0Y29uc3QgcGFnZV9zaXplID0gZmlyc3RQYWdlLmRhdGEuZGF0YS5sZW5ndGg7XHJcblx0XHJcblx0bGV0IHBhZ2VzID0gbmV3IEFycmF5KG1heF9wYWdlKTtcclxuICAgIHBhZ2VzWzBdID0gcmVzcG9uc2UoZmlyc3RQYWdlLCByZXNwb25zZV90eXBlKTtcclxuXHJcblx0Ly8gU3RhbmRhcmQgbGlzdEZ1bmN0aW9uIHJlc3BvbnNlXHJcblx0aWYgKG1heF9wYWdlID09IDEpIHJldHVybiBwYWdlc1swXTsgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICBmb3IgKHBuID0gMTsgcG4gPCBtYXhfcGFnZTsgcG4rKykge1xyXG5cdFx0Ly8gbG9nLm1zZyhgYWxsKCktLT4ke2xpc3RGdW5jdGlvbi5uYW1lfSBwYWdlICR7cG4rMX1gKTtcclxuICAgICAgICBzZXRQYWdlKGZpbHRlciwgcGFnZV9zaXplLCBwbisxKTtcclxuICAgICAgICBwYWdlc1twbl0gPSBsaXN0RnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG5cdC8vIFNldCBvcmlnaW5hbCBvcHRpb25cclxuXHRvcHRpb25zLnJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG5cclxuXHRsZXQgb3V0ID0gW107XHJcblxyXG4gICAgKGF3YWl0IFByb21pc2UuYWxsKHBhZ2VzKSkuZm9yRWFjaChwID0+IHsgb3V0ID0gb3V0LmNvbmNhdChkYXRhKHJlc3BvbnNlKHAsIHJlc3BvbnNlX3R5cGUpKSkgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxuXHJcbn1cclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXHJcblxyXG5cclxuLy8gY29uc3QgQVVUSF9UT0tFTlMgPSB7fTtcclxuXHJcblxyXG5jbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkge1xyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9pZCA9IGNsaWVudF9pZDtcclxuICAgICAgICB0aGlzLmNsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgY2xpZW50SWQoY2lkKSB7IHRoaXMuY2xpZW50X2lkID0gY2lkOyByZXR1cm4gdGhpczsgfVxyXG4gICAgY2xpZW50U2VjcmV0KGNzZWMpIHsgdGhpcy5jbGllbnRfc2VjcmV0ID0gY3NlYzsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGlzQXV0aENvbmZpZygpIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIENsaWVudENyZWRlbnRpYWxzIGV4dGVuZHMgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlKSB7XHJcbiAgICAgICAgc3VwZXIoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICB0aGlzLmdyYW50X3R5cGUgPSAnY2xpZW50X2NyZWRlbnRpYWxzJztcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBzZXRTY29wZShzY29wZSkgeyB0aGlzLnNjb3BlID0gc2NvcGU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBtYXJrZXRTY29wZShtYXJrZXQpIHsgdGhpcy5zY29wZSA9IChtYXJrZXQgIT0gdW5kZWZpbmVkKT8gJ21hcmtldDonK21hcmtldCA6IG1hcmtldDsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEF1dGhvcml6YXRpb25Db2RlIGV4dGVuZHMgQ2xpZW50Q3JlZGVudGlhbHMge1xyXG4gICAgY29uc3RydWN0b3IoY2ZnID0ge30pIHtcclxuICAgICAgICBzdXBlcihjZmcuY2xpZW50X2lkLCBjZmcuY2xpZW50X3NlY3JldCwgY2ZnLnNjb3BlKVxyXG4gICAgICAgIHRoaXMuZ3JhbnRfdHlwZSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNmZy5jb2RlO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RfdXJpID0gY2ZnLnJlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIHNldENvZGUoY29kZSkgeyB0aGlzLmNvZGUgPSBjb2RlOyByZXR1cm4gdGhpczsgfVxyXG4gICAgcmVkaXJlY3RVcmkodXJpKSB7IHRoaXMucmVkaXJlY3RfdXJpID0gdXJpOyByZXR1cm4gdGhpczsgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUGFzc3dvcmQgZXh0ZW5kcyBDbGllbnRDcmVkZW50aWFscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjZmcgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGNmZy5jbGllbnRfaWQsIGNmZy5jbGllbnRfc2VjcmV0LCBjZmcuc2NvcGUpXHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY2ZnLnVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjZmcucGFzc3dvcmQ7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSkgeyB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7IHJldHVybiB0aGlzOyB9XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCkgeyB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBSZWZyZXNoVG9rZW4gZXh0ZW5kcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVmcmVzaF90b2tlbikge1xyXG4gICAgICAgIHN1cGVyKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCk7XHJcbiAgICAgICAgdGhpcy5ncmFudF90eXBlID0gJ3JlZnJlc2hfdG9rZW4nO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XHJcbiAgICB9XHJcbiAgICByZWZyZXNoVG9rZW4odG9rZW4pIHsgdGhpcy5yZWZyZXNoX3Rva2VuID0gdG9rZW47IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBcGlUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSAnYmVhcmVyJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hfdG9rZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm93bmVyX3R5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5vd25lcl9pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5leHBpcmVzX2luID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQ2xpZW50Q3JlZGVudGlhbHMsXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSxcclxuICAgIFBhc3N3b3JkLFxyXG4gICAgUmVmcmVzaFRva2VuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5hdXRoZW50aWNhdGUgPSAoYXV0aCkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJy9vYXV0aC90b2tlbicsIHtcclxuICAgICAgICAgICAgZ3JhbnRfdHlwZTogYXV0aC5ncmFudF90eXBlLFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IGF1dGguY2xpZW50X2lkLFxyXG4gICAgICAgICAgICBzY29wZTogYXV0aC5zY29wZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogYXV0aC5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICBjb2RlOiBhdXRoLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogYXV0aC5yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogYXV0aC5wYXNzd29yZCxcclxuICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogYXV0aC5yZWZyZXNoX3Rva2VuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgQXBpVG9rZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHRva2VuLmFjY2Vzc190b2tlbiA9IHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICB0b2tlbi5yZWZyZXNoX3Rva2VuID0gcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuO1xyXG4gICAgICAgICAgICB0b2tlbi5zY29wZSA9IHJlc3BvbnNlLmRhdGEuc2NvcGU7XHJcbiAgICAgICAgICAgIHRva2VuLm93bmVyX3R5cGUgPSByZXNwb25zZS5kYXRhLm93bmVyX3R5cGU7XHJcbiAgICAgICAgICAgIHRva2VuLm93bmVyX2lkID0gcmVzcG9uc2UuZGF0YS5vd25lcl9pZDtcclxuICAgICAgICAgICAgdG9rZW4uY3JlYXRlZF9hdCA9IHJlc3BvbnNlLmRhdGEuY3JlYXRlZF9hdDtcclxuICAgICAgICAgICAgdG9rZW4uZXhwaXJlc19pbiA9IHJlc3BvbnNlLmRhdGEuZXhwaXJlc19pbjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhY2hlVG9rZW4oYXV0aC5jbGllbnRfaWQsIGF1dGguZ3JhbnRfdHlwZSwgdG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG5cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY2FjaGVUb2tlbihjbGllbnRfaWQsIGdyYW50X3R5cGUsIHRva2VuKSB7XHJcbi8vICAgICBBVVRIX1RPS0VOU1t0b2tlbklkKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSldID0gdG9rZW47XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFRva2VuKGNsaWVudF9pZCwgZ3JhbnRfdHlwZSkge1xyXG4vLyAgICAgcmV0dXJuIEFVVEhfVE9LRU5TW3Rva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlKV07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHRva2VuSWQoY2xpZW50X2lkLCBncmFudF90eXBlKSB7XHJcbi8vICAgICByZXR1cm4gY2xpZW50X2lkICsgJy0nICsgZ3JhbnRfdHlwZTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gbmV3QXV0aENvbmZpZyhncmFudF90eXBlLCBjb25maWcgPSB7fSkge1xyXG4gICAgc3dpdGNoIChncmFudF90eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY2xpZW50X2NyZWRlbnRpYWxzJzogcmV0dXJuIG5ldyBDbGllbnRDcmVkZW50aWFscyhjb25maWcuY2xpZW50X2lkLCBjb25maWcuY2xpZW50X3NlY3JldCwgY29uZmlnLnNjb3BlKTtcclxuICAgICAgICBjYXNlICdhdXRob3JpemF0aW9uX2NvZGUnOiByZXR1cm4gbmV3IEF1dGhvcml6YXRpb25Db2RlKGNvbmZpZyk7XHJcbiAgICAgICAgY2FzZSAncGFzc3dvcmQnOiByZXR1cm4gbmV3IFBhc3N3b3JkKGNvbmZpZyk7XHJcbiAgICAgICAgY2FzZSAncmVmcmVzaF90b2tlbic6IHJldHVybiBuZXcgUmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufSIsImNvbnN0IGFwaSA9IHJlcXVpcmUoJy4vYXBpJylcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxyXG5jb25zdCBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJylcclxuXHJcbi8vIEV4cG9zZSBhbGwgYXBpIGZ1bmN0aW9uc1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFwaS5jbGFwaTtcclxuXHJcbi8vIEV4cG9zZSBTREsgY29uZmlndXJhdGlvblxyXG5tb2R1bGUuZXhwb3J0cy5zZXR0aW5ncyA9IGNvbmZpZy5zZGs7XHJcblxyXG5cclxuLy8gU0RLIGluaXRpYWxpemF0aW9uXHJcbm1vZHVsZS5leHBvcnRzLmluaXRpYWxpemUgPSAoY2ZnKSA9PiB7XHJcbiAgICBpZiAoY2ZnICE9IHVuZGVmaW5lZCkgY2ZnLmRlZmF1bHQgPSBmYWxzZTtcclxuICAgIGFwaS5pbml0aWFsaXplKHV0aWxzLm1lcmdlTWFwcyhjb25maWcuY2xheWVyLCBjZmcpKVxyXG59XHJcblxyXG5cclxuLy8gQXV0aGVudGljYXRpb24gdHlwZXNcclxubW9kdWxlLmV4cG9ydHMuYXV0aCA9IHtcclxuICAgIENsaWVudENyZWRlbnRpYWxzIDogKGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCkgPT4geyByZXR1cm4gbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHMoY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0KSB9LFxyXG4gICAgUGFzc3dvcmQgOiAoY2ZnKSA9PiB7IHJldHVybiBuZXcgYXV0aC5QYXNzd29yZChjZmcpIH0sXHJcbiAgICBBdXRob3JpemF0aW9uQ29kZSA6IChjZmcpID0+IHsgcmV0dXJuIG5ldyBhdXRoLkF1dGhvcml6YXRpb25Db2RlKGNmZykgfSxcclxuICAgIFJlZnJlc2hUb2tlbiA6IChjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pID0+IHsgcmV0dXJuIG5ldyBhdXRoLlJlZnJlc2hUb2tlbihjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlZnJlc2hfdG9rZW4pIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuYXV0aC5sYXN0QWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLmNsYXBpLmNsaWVudC5jb25maWcuYWNjZXNzX3Rva2VuO1xyXG59XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuY29uc3Qgc2RrID0gcmVxdWlyZSgnLi9jb25maWcnKS5zZGtcclxuY29uc3QgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQXBpQ29uZmlnKGNvbmZpZykge1xyXG5cclxuICAgIHV0aWxzLmxvZygnY29uZmlnIHZlcmlmaWNhdGlvbi4uLicpXHJcblxyXG4gICAgaWYgKGNvbmZpZyA9PSB1bmRlZmluZWQpIHRocm93ICdtaXNzaW5nIGNvbmZpZyc7XHJcbiAgICBpZiAoY29uZmlnLmJhc2VfdXJsID09IHVuZGVmaW5lZCkgdGhyb3cgJ21pc3NpbmcgYmFzZV91cmwnO1xyXG4gICAgaWYgKGNvbmZpZy5jbGllbnRfaWQgPT0gdW5kZWZpbmVkKSB0aHJvdyAnbWlzc2luZyBjbGllbnRfaWQnO1xyXG5cclxuICAgIC8vIFRPRE86IHZlcmlmaWNhcmUgY29uZmlndXJhemlvbmUgaW4gYmFzZSBhbCB0aXBvIGRpIGF1dGVudGljYXppb25lIChkYSByZW5kZXJlIGNvbmZpZ3VyYWJpbGUpXHJcblxyXG4gICAgdXRpbHMubG9nKCdjb25maWcgb2suJylcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBeGlvc0NvbmZpZyhjb25maWcpIHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gY29uZmlnLmJhc2VfdXJsO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0FjY2VwdCddID0gJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbic7XHJcblxyXG4gICAgaWYgKHNkay5kZWJ1ZyAmJiBzZGsudHJhY2UpIHtcclxuXHJcbiAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5sb2coKTtcclxuICAgICAgICAgICAgdXRpbHMubG9nKCdSRVFVRVNUIC0tPicpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2cocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmxvZygpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2coJzwtLSBSRVNQT05TRScpO1xyXG4gICAgICAgICAgICB1dGlscy5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBuZXdJbnN0YW5jZSA6IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5BcGlDbGllbnQoY29uZmlnKTtcclxuICAgIH0sXHJcblxyXG4gICAgbmV3UmVxdWVzdCA6IGZ1bmN0aW9uKHBhdGgsIG1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5BcGlSZXF1ZXN0KHBhdGgsIG1ldGhvZCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBBcGlSZXF1ZXN0IDogY2xhc3Mge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwYXRoID0gJy8nLCBtZXRob2QgPSAnZ2V0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoIHx8ICcvJztcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2QgfHwgJ2dldCc7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycyA9IHt9O1xyXG4gICAgICAgICAgICAvLyAtLS0tIC0tLS0gLS0tLSAtLS0tXHJcbiAgICAgICAgICAgIHRoaXMuYXR0ZW1wdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29ycmVsYXRpb25faWQgPSB1dGlscy5ndWlkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdHlwZSA9IHNkay5yZXNwb25zZV90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yX3R5cGUgPSBzZGsuZXJyb3JfdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhdGgocGF0aCkgeyB0aGlzLnBhdGggPSBwYXRoOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldFBhcmFtcyhwYXJhbXMpIHsgdGhpcy5wYXJhbXMgPSAocGFyYW1zICYmIHBhcmFtcy5pc1F1ZXJ5RmlsdGVyICYmIChwYXJhbXMuaXNRdWVyeUZpbHRlcigpID09PSB0cnVlKSk/IHBhcmFtcy5idWlsZCgpIDogcGFyYW1zOyByZXR1cm4gdGhpczsgfVxyXG4gICAgICAgIHNldE1ldGhvZChtZXRob2QpIHsgdGhpcy5tZXRob2QgPSBtZXRob2Q7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0Qm9keShib2R5KSB7IHRoaXMuYm9keSA9IGJvZHk7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgc2V0SGVhZGVycyhoZWFkZXJzKSB7IHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIG5ld0F0dGVtcHQoKSB7IHRoaXMuYXR0ZW1wdCsrOyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgICAgICAvLyBSZXF1ZXN0IE9wdGlvbnNcclxuICAgICAgICBnZXQgcmF3X3Jlc3BvbnNlKCkgeyByZXR1cm4gKHRoaXMucmVzcG9uc2VUeXBlID09ICdyYXcnKTsgfVxyXG4gICAgICAgIHNldCByYXdfcmVzcG9uc2UocmF3KSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IChyYXcgJiYgKHJhdyA9PT0gdHJ1ZSkpPyAncmF3JyA6ICdub3JtYWxpemVkJzsgfVxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSh0eXBlKSB7IHRoaXMucmVzcG9uc2VfdHlwZSA9IHR5cGU/IHR5cGUgOiBzZGsucmVzcG9uc2VfdHlwZTsgcmV0dXJuIHRoaXM7IH1cclxuICAgICAgICBlcnJvclR5cGUodHlwZSkgeyB0aGlzLmVycm9yX3R5cGUgPSB0eXBlPyB0eXBlIDogc2RrLmVycm9yX3R5cGU7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgICAgIC8vIE9ubHkgcmVhbGx5IGF2YWlsYWJsZSBvcHRpb25zIGFyZSBiZWluZyBzZXR0ZWRcclxuICAgICAgICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5yZXNwb25zZVR5cGUob3B0aW9ucy5yZXNwb25zZV90eXBlKTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvclR5cGUob3B0aW9ucy5lcnJvcl90eXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIEFwaUNsaWVudCA6IGNsYXNzIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNoZWNrQXBpQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhfYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICBzZXRBeGlvc0NvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXV0aGVudGljYXRlKCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYXV0aENvbmZpZyA9IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghYXV0aENvbmZpZyB8fCAhYXV0aENvbmZpZy5pc0F1dGhDb25maWcgfHwgKGF1dGhDb25maWcuaXNBdXRoQ29uZmlnKCkgIT09IHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRoQ29uZmlnID0gbmV3IGF1dGguQ2xpZW50Q3JlZGVudGlhbHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGllbnRJZCh0aGlzLmNvbmZpZy5jbGllbnRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcmtldFNjb3BlKHRoaXMuY29uZmlnLm1hcmtldF9pZClcclxuICAgICAgICAgICAgICAgICAgICAuY2xpZW50U2VjcmV0KHRoaXMuY29uZmlnLmNsaWVudF9zZWNyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKCd1c2luZyBjdXN0b20gYXV0aGVudGljYXRpb24gY29uZmlnOiAnICsgYXV0aENvbmZpZy5ncmFudF90eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmICghYXV0aENvbmZpZy5jbGllbnRfaWQgJiYgdGhpcy5jb25maWcuY2xpZW50X2lkKSBhdXRoQ29uZmlnLmNsaWVudElkKHRoaXMuY29uZmlnLmNsaWVudF9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhdXRoLmF1dGhlbnRpY2F0ZShhdXRoQ29uZmlnKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuLmFjY2Vzc190b2tlbjsgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY2FsbChhcGlSZXF1ZXN0KSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtZXNzYWdlKG1zZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhcGlSZXF1ZXN0LmNvcnJlbGF0aW9uX2lkPyBgWyR7YXBpUmVxdWVzdC5jb3JyZWxhdGlvbl9pZH0uJHthcGlSZXF1ZXN0LmF0dGVtcHR9XSBgIDogJycpLmNvbmNhdChtc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBpUmVxdWVzdC5uZXdBdHRlbXB0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXNlX3BhdGggPSAoKHRoaXMuY29uZmlnLmJhc2VfcGF0aCAhPSB1bmRlZmluZWQpPyB0aGlzLmNvbmZpZy5iYXNlX3BhdGggOiAnJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5ICh0byBiZSByZW1vdmVkKVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gYmFzZV9wYXRoICsgYXBpUmVxdWVzdC5wYXRoO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhcGlSZXF1ZXN0LnBhcmFtcztcclxuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gYXBpUmVxdWVzdC5tZXRob2Q7XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBxdWVyeVN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgY2FsbFVybCA9IHBhdGg7XHJcbiAgICAgICAgICAgIGlmICgocGFyYW1zICE9IHVuZGVmaW5lZCkgJiYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtc1trZXldXHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsVXJsID0gY2FsbFVybC5jb25jYXQoJz8nKS5jb25jYXQocXVlcnlTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgncGF0aDogJyArIGNhbGxVcmwpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBheGlvc0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogY2FsbFVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogc2RrLnRpbWVvdXQucmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3ZuZC5hcGkranNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1lcmdlIGN1c3RvbSBhbmQgZGVmYXVsdCBoZWFkZXJzXHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZE1hcChheGlvc0NvbmZpZy5oZWFkZXJzLCBhcGlSZXF1ZXN0LmhlYWRlcnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQm9keVxyXG4gICAgICAgICAgICBpZiAoYXBpUmVxdWVzdC5ib2R5ICE9IHVuZGVmaW5lZCkgYXhpb3NDb25maWcuZGF0YSA9IGFwaVJlcXVlc3QuYm9keTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heF9hdHRlbXB0cyA9IHNkay5hdXRoX2F0dGVtcHRzPyBzZGsuYXV0aF9hdHRlbXB0cyA6IDE7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQgZXhlY3V0ZSBhdXRoZW50aWNhdGlvbiB0aGVuIHJlLWV4ZWN1dGUgY2FsbFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2FjY2Vzc190b2tlbiBudWxsLCBhdXRoZW50aWNhdGlvbiByZXF1aXJlZCcpKTtcclxuICAgICAgICAgICAgICAgIGlmICgrK3RoaXMuYXV0aF9hdHRlbXB0cyA+IG1heF9hdHRlbXB0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2RrLnRpbWVvdXQucmV0cnkpIHRocm93IGBSZWFjaGVkIG1heGltdW0gbnVtYmVyIG9mIGF1dGhlbnRpY2F0aW9uIGF0dGVtcHRzICgke21heF9hdHRlbXB0c30pIGFuZCBubyByZXRyeSB0aW1lb3V0IGNvbmZpZ3VyZWRgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuc2xlZXAoc2RrLnRpbWVvdXQucmV0cnksIG1lc3NhZ2UoJ2Fub3RoZXIgYXV0aCByZXF1ZXN0IGlzIGluIHByb2dyZXNzJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHsgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlKCkudGhlbihhY2Nlc3NfdG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmFjY2Vzc190b2tlbiA9IGFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhfYXR0ZW1wdHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoYXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ2V4ZWN1dGluZyBhcGkgY2FsbCAuLi4nKSk7XHJcbiAgICAgICAgICAgICAgICBheGlvc0NvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyB0aGlzLmNvbmZpZy5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc0NvbmZpZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvZyhtZXNzYWdlKCdhcGkgY2FsbCBzdWNjZXNzZnVsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZShlcnJvcj8gZXJyb3IgOiAnZXJyb3IgZGV0ZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnRUNPTk5BQk9SVEVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9nKG1lc3NhZ2UoJ3RpbWVvdXQgZXhjZXB0aW9uOicgKyBlcnJvci5jb25maWcudGltZW91dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwaSBlcnJvbmVvdXNseSByZXR1cm4gY29kZSA0MDEgaW5zdGVhZCBvZiBjb2RlIDQwMyBmb3IgVU5BVVRIT1JJWkVEIGNhbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyAmJiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbMF0uY29kZSA9PSAnSU5WQUxJRF9UT0tFTicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2cobWVzc2FnZSgnaW52YWxpZCB0b2tlbiwgYWNjZXNzIGRlbmllZCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuYWNjZXNzX3Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbChhcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsImNvbnN0IGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgY2xheWVyOiB7XHJcblxyXG4gICAgICAgIGRlZmF1bHQgOiB0cnVlLFxyXG5cclxuICAgICAgICBhdXRoZW50aWNhdGlvbiAgOiBudWxsLFxyXG4gIFxyXG4gICAgICAgIGNsaWVudF9pZCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgbWFya2V0X2lkICAgICAgIDogbnVsbCxcclxuICAgICAgICBjbGllbnRfc2VjcmV0ICAgOiBudWxsLFxyXG4gICAgICAgIGJhc2VfdXJsICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgYmFzZV9wYXRoICAgICAgIDogbnVsbCxcclxuICAgICAgICBjb3VudHJ5X2NvZGUgICAgOiAnVVMnLFxyXG4gICAgICAgIGxhbmd1YWdlX2NvZGUgICA6ICdlbicsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZGs6IHtcclxuICAgICAgICBkZWJ1ZyAgICAgICAgICAgOiBmYWxzZSwgICAgICAgIC8vIGRlYnVnIG1vZGUgYWN0aXZhdGVkXHJcbiAgICAgICAgY29uc29sZSAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyBsb2cgdG8gY29uc29sZSBlbmFibGVkXHJcbiAgICAgICAgdHJhY2UgICAgICAgICAgIDogZmFsc2UsICAgICAgICAvLyB0cmFjZSBjbGllbnQgcmVxdWVzdC9yZXNwb25zZSB0byBjb25zb2xlXHJcbiAgICAgICAgYXV0aF9hdHRlbXB0cyAgIDogMSwgICAgICAgICAgICAvLyBudW1iZXIgb2YgYXR0ZW1wdHMgb2YgYXV0aGVudGljYXRpb25cclxuICAgICAgICByZXNwb25zZV90eXBlICAgOiAnbm9ybWFsaXplZCcsIC8vIFJlc3BvbnNlIGZvcm1hdCwgcG9zc2libGUgdmFsdWVzIGFyZTogbm9ybWFsaXplZCB8IGpzb25hcGkgfCBtb2RlbCB8IHJhd1xyXG4gICAgICAgIGVycm9yX3R5cGUgICAgICA6ICdtb2RlbCcsICAgICAgLy8gRXJyb3IgZm9ybWV0LCBwb3NzaWJsZSB2YWx1ZXMgYXJlOiBqc29uYXBpIHwgbW9kZWwgfCByYXdcclxuICAgICAgICB0aW1lb3V0IDogeyAvLyBpbiBtaWxsaXNlY29uZHNcclxuICAgICAgICAgICAgcmV0cnkgOiAyNTAsICAgIC8vIHJldHJ5IGFmdGVyIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgcmVxdWVzdCA6IDIwMDAgIC8vIGNsaWVudCByZXF1ZXN0IHRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5jbGFzcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcGlFcnJvciA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gYXBpRXJyb3IuY29kZTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gYXBpRXJyb3IudGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBhcGlFcnJvci5kZXRhaWw7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBhcGlFcnJvci5zb3VyY2UgfHwge307XHJcbiAgICAgICAgdGhpcy5tZXRhID0gYXBpRXJyb3IubWV0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FwaUVycm9yKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgZ2V0U291cmNlUG9pbnRlcigpIHsgcmV0dXJuIHRoaXMuc291cmNlLnBvaW50ZXI7IH1cclxuICAgIGdldFNvdXJjZUl0ZW0oa2V5KSB7IHJldHVybiB0aGlzLnNvdXJjZVtrZXldOyB9XHJcbiAgICBnZXRNZXRhSXRlbShrZXkpIHsgcmV0dXJuIHRoaXMubWV0YVtrZXldOyB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiBgKCR7dGhpcy5jb2RlfSwgJHt0aGlzLnRpdGxlfSlgOyB9XHJcblxyXG59XHJcblxyXG5cclxuY2xhc3MgRXJyb3JSZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzRXJyb3JSZXNwb25zZSgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIGFkZEVycm9yKGVycm9yKSB7IGlmIChlcnJvciAmJiBlcnJvci5pc0FwaUVycm9yICYmIChlcnJvci5pc0FwaUVycm9yKCkgPT09IHRydWUpKSB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFkZEFwaUVycm9yKGFwaUVycm9yKSB7IHRoaXMuYWRkRXJyb3IobmV3IEVycm9yKGFwaUVycm9yKSk7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhZGRFcnJvcnMoZXJyb3JzID0gW10pIHsgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4gdGhpcy5hZGRFcnJvcihlcnJvcikpOyByZXR1cm4gdGhpczsgfVxyXG4gICAgYWRkQXBpRXJyb3JzKGFwaUVycm9ycyA9IFtdKSB7IGFwaUVycm9ycy5mb3JFYWNoKGFwaUVycm9yID0+IHRoaXMuYWRkQXBpRXJyb3IoYXBpRXJyb3IpKTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFwaUVycm9yc0NvdW50KCkgeyByZXR1cm4gKHRoaXMuZXJyb3JzID09IHVuZGVmaW5lZCk/IDAgOiB0aGlzLmVycm9ycy5sZW5ndGg7IH1cclxuICAgIGhhc0FwaUVycm9ycygpIHsgcmV0dXJuICh0aGlzLmFwaUVycm9yc0NvdW50KCkgPiAwKTsgfVxyXG4gICAgZ2V0QXBpRXJyb3IoaW5kZXgpIHsgcmV0dXJuICgoaW5kZXggPj0gMCkgJiYgKGluZGV4IDwgdGhpcy5hcGlFcnJvcnNDb3VudCgpKT8gdGhpcy5lcnJvcnNbaW5kZXhdIDogbnVsbCk7IH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgZXJyID0gJ1snICsgdGhpcy5zdGF0dXMgKyAodGhpcy5kZXNjcmlwdGlvbj8gJywgJyArIHRoaXMuZGVzY3JpcHRpb24gOiAnJykgKyAnXSc7XHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzICYmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICBlcnIgKz0gJyAtLT4geyc7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLmZvckVhY2goeCA9PiBlcnIgKz0geCk7XHJcbiAgICAgICAgICAgIGVyciArPSAnfSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAgZXJyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZXJyb3JSZXNwb25zZSA6IChzdGF0dXMsIGRlc2NyaXB0aW9uKSA9PiB7IHJldHVybiBuZXcgRXJyb3JSZXNwb25zZShzdGF0dXMsIGRlc2NyaXB0aW9uKTsgfVxyXG59IiwiY29uc3Qgbm9ybWFsaXplID0gcmVxdWlyZSgnanNvbi1hcGktbm9ybWFsaXplJylcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcclxuY29uc3QgbW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJylcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zZXJpYWxpemUgPSAoYm9keSkgPT4ge1xyXG4gICAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSByZXR1cm4gYm9keTtcclxuICAgIC8vIE5vIGRhdGEgPSBQbGFpbiBPYmplY3Qgb3IgQXBpIFJlc291cmNlXHJcbiAgICBlbHNlIHJldHVybiAoYm9keS5kYXRhID09IHVuZGVmaW5lZCk/IG5ldyBKc29uQXBpUmVzb3VyY2UoYm9keSkuc2VyaWFsaXplKCkgOiBib2R5O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZGVzZXJpYWxpemUgPSAoamFwaSkgPT4ge1xyXG4gICAgaWYgKGphcGkgPT0gdW5kZWZpbmVkKSByZXR1cm4gamFwaTtcclxuICAgIGVsc2UgcmV0dXJuIChqYXBpLmRhdGEgPT0gdW5kZWZpbmVkKT8gamFwaSA6IG5ldyBKc29uQXBpUmVzb3VyY2UoamFwaSkuZGVzZXJpYWxpemUoKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLm5vcm1hbGl6ZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplKGRhdGEpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgSnNvbkFwaVJlc291cmNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXNvdXJjZSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2UuZGF0YSAhPSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLmRhdGEuYXR0cmlidXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBwb3J0YXJlIGlkIGUgdHlwZSBpbiB0ZXN0YSBhZCBvZ25pIG9iamVjdFxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmllbGQgPSB0aGlzLnJlc291cmNlW2tleV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChbJ2lkJywgJ3R5cGUnXS5pbmNsdWRlcyhrZXkpKSB0aGlzLmRhdGFba2V5XSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmlzQXBpUmVzb3VyY2UgJiYgZmllbGQuaXNBcGlSZXNvdXJjZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5yZWxhdGlvbnNoaXBzID09IHVuZGVmaW5lZCkgdGhpcy5kYXRhLnJlbGF0aW9uc2hpcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEucmVsYXRpb25zaGlwc1trZXkuc3RhcnRzV2l0aCgnX18nKT8ga2V5LnN1YnN0cignX18nLmxlbmd0aCkgOiBrZXldID0geyBkYXRhOiB7IHR5cGU6IGZpZWxkLnR5cGUsIGlkOiBmaWVsZC5pZCB9IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkgJiYga2V5LnN0YXJ0c1dpdGgoJ19fJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ0FycmF5IFJlc291cmNlIHJlbGF0aW9uc2hpcHMgbm90IHN1cHBvcnRlZDogJyArIHJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGF0YS5hdHRyaWJ1dGVzW2tleV0gPSBmaWVsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLmRhdGEgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5yZXNvdXJjZS5kYXRhID09IHVuZGVmaW5lZCkgJiYgdGhpcy5yZXNvdXJjZS5pc0FwaVJlc291cmNlICYmICh0aGlzLnJlc291cmNlLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpIHJldHVybiB0aGlzLnJlc291cmNlO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucmVzb3VyY2UuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IG1vZGVsLmhlbHBlci5uZXdSZXNvdXJjZShkYXRhLnR5cGUsIGRhdGEuaWQsIGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlbGF0aW9uc2hpcHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnJlbGF0aW9uc2hpcHMpLmZvckVhY2goKHJlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVsX2RhdGEgPSBkYXRhLnJlbGF0aW9uc2hpcHNbcmVsXS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAocmVsX2RhdGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWxfZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2coJ0FycmF5IFJlc291cmNlIHJlbGF0aW9uc2hpcHMgbm90IHN1cHBvcnRlZDogJyArIHJlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVsUmVzID0gbW9kZWwuaGVscGVyLm5ld1Jlc291cmNlKHJlbF9kYXRhLnR5cGUsIHJlbF9kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0UmVzb3VyY2UocmVsLCByZWxSZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmMgPSBqc29uYXBpSW5jbHVkZWQodGhpcy5yZXNvdXJjZSwgcmVsX2RhdGEudHlwZSwgcmVsX2RhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbFJlcy5zZXRGaWVsZHMoaW5jLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGpzb25hcGlJbmNsdWRlZChkYXRhLCB0eXBlLCBpZCkge1xyXG4gICAgaWYgKChkYXRhID09IHVuZGVmaW5lZCkgfHwgKGRhdGEuaW5jbHVkZWQgPT0gdW5kZWZpbmVkKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGxldCBpbmNSZXMgPSB1bmRlZmluZWQ7XHJcbiAgICBkYXRhLmluY2x1ZGVkLmZvckVhY2goaW5jID0+IHtcclxuICAgICAgICBpZiAoKGluYy50eXBlID09IHR5cGUpICYmIChpbmMuaWQgPT0gaWQpKSBpbmNSZXMgPSBpbmM7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGluY1JlcztcclxufVxyXG4iLCJjb25zdCBzZGsgPSByZXF1aXJlKCcuL2NvbmZpZycpLnNka1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG4gICAgbXNnIDogKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc2RrLmRlYnVnICYmIHNkay5jb25zb2xlKSBjb25zb2xlLmxvZygobWVzc2FnZSA9PSB1bmRlZmluZWQpPyAnJyA6IG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmFibGUgOiAoKSA9PiB7XHJcbiAgICAgICAgc2RrLmNvbnNvbGUgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNhYmxlIDogKCkgPT4ge1xyXG4gICAgICAgIHNkay5jb25zb2xlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHByb2JlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2cgZW5hYmxlZDogJyArIHNkay5jb25zb2xlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWYgbG9nIGlzIGVuYWJsZWQgYnV0IGlzIG5vdCB2aXNpYmxlIG1heWJlIHlvdSBhcmUgbm90IGluIGRlYnVnIG1vZGUnKVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXQgZW5hYmxlZCgpIHsgcmV0dXJuIHNkay5jb25zb2xlID09PSB0cnVlOyB9XHJcblxyXG59IiwiLy8gRmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhdCAyNC8wMi8yMDE5IDExOjEwOjQ5IGJ5IGNvbW1lcmNlbGF5ZXItanMtc2RrLWNvZGVnZW5cclxuXHJcblxyXG4vLyBCYXNpYyBBYnN0cmFjdCBSZXNvdXJjZVxyXG5jbGFzcyBSZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdHlwZSwpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZF9hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRfYXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpc0FwaVJlc291cmNlKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgc2V0UmVzb3VyY2UoZmllbGQsIHJlcykgeyBpZiAoKHJlcyAhPSB1bmRlZmluZWQpICYmIHJlcy5pc0FwaVJlc291cmNlICYmIHJlcy5pc0FwaVJlc291cmNlKCkpIHRoaXNbJ19fJy5jb25jYXQoZmllbGQpXSA9IHJlczsgfVxyXG5cdGdldFJlc291cmNlKGZpZWxkKSB7IHJldHVybiB0aGlzWydfXycuY29uY2F0KGZpZWxkKV07IH1cclxuXHRzZXRGaWVsZHMoZmllbGRzID0ge30pIHsgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZpZWxkID0+IHsgdGhpc1tmaWVsZF0gPSBmaWVsZHNbZmllbGRdIH0pOyByZXR1cm4gdGhpczsgfVxyXG5cdHNldEZpZWxkKG5hbWUsIHZhbHVlKSB7IGlmIChuYW1lKSB0aGlzW25hbWVdID0gdmFsdWU7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQWRkcmVzcyByZXNvdXJjZVxyXG5jbGFzcyBBZGRyZXNzIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2FkZHJlc3NlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEFkZHJlc3MuVFlQRSk7XHJcblx0XHR0aGlzLmJ1c2luZXNzID0gZmllbGRzLmJ1c2luZXNzO1xyXG5cdFx0dGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcblx0XHR0aGlzLmxhc3RfbmFtZSA9IGZpZWxkcy5sYXN0X25hbWU7XHJcblx0XHR0aGlzLmNvbXBhbnkgPSBmaWVsZHMuY29tcGFueTtcclxuXHRcdHRoaXMubGluZV8xID0gZmllbGRzLmxpbmVfMTtcclxuXHRcdHRoaXMubGluZV8yID0gZmllbGRzLmxpbmVfMjtcclxuXHRcdHRoaXMuY2l0eSA9IGZpZWxkcy5jaXR5O1xyXG5cdFx0dGhpcy56aXBfY29kZSA9IGZpZWxkcy56aXBfY29kZTtcclxuXHRcdHRoaXMuc3RhdGVfY29kZSA9IGZpZWxkcy5zdGF0ZV9jb2RlO1xyXG5cdFx0dGhpcy5jb3VudHJ5X2NvZGUgPSBmaWVsZHMuY291bnRyeV9jb2RlO1xyXG5cdFx0dGhpcy5waG9uZSA9IGZpZWxkcy5waG9uZTtcclxuXHRcdHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcblx0XHR0aGlzLm5vdGVzID0gZmllbGRzLm5vdGVzO1xyXG5cdFx0dGhpcy5sYXQgPSBmaWVsZHMubGF0O1xyXG5cdFx0dGhpcy5sbmcgPSBmaWVsZHMubG5nO1xyXG5cdFx0dGhpcy5iaWxsaW5nX2luZm8gPSBmaWVsZHMuYmlsbGluZ19pbmZvO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgZ2VvY29kZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2dlb2NvZGVyJywgdmFsdWUpIH1cclxuXHRnZXQgZ2VvY29kZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnZ2VvY29kZXInKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlZGl0IENhcmQgcmVzb3VyY2VcclxuY2xhc3MgQ3JlZGl0Q2FyZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjcmVkaXRfY2FyZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDcmVkaXRDYXJkLlRZUEUpO1xyXG5cdFx0dGhpcy5maXJzdF9uYW1lID0gZmllbGRzLmZpcnN0X25hbWU7XHJcblx0XHR0aGlzLmxhc3RfbmFtZSA9IGZpZWxkcy5sYXN0X25hbWU7XHJcblx0XHR0aGlzLm51bWJlciA9IGZpZWxkcy5udW1iZXI7XHJcblx0XHR0aGlzLm1vbnRoID0gZmllbGRzLm1vbnRoO1xyXG5cdFx0dGhpcy55ZWFyID0gZmllbGRzLnllYXI7XHJcblx0XHR0aGlzLnZlcmlmaWNhdGlvbl92YWx1ZSA9IGZpZWxkcy52ZXJpZmljYXRpb25fdmFsdWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBBZGRyZXNzIHJlc291cmNlXHJcbmNsYXNzIEN1c3RvbWVyQWRkcmVzcyBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9hZGRyZXNzZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lckFkZHJlc3MuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IGFkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYWRkcmVzcycpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBHcm91cCByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lckdyb3VwIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX2dyb3VwcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyR3JvdXAuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHByaWNlX2xpc3QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwcmljZV9saXN0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3ByaWNlX2xpc3QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUGFzc3dvcmQgUmVzZXQgcmVzb3VyY2VcclxuY2xhc3MgQ3VzdG9tZXJQYXNzd29yZFJlc2V0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ2N1c3RvbWVyX3Bhc3N3b3JkX3Jlc2V0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEN1c3RvbWVyUGFzc3dvcmRSZXNldC5UWVBFKTtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcblx0XHR0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG5cdFx0dGhpcy5fcmVzZXRfcGFzc3dvcmRfdG9rZW4gPSBmaWVsZHMuX3Jlc2V0X3Bhc3N3b3JkX3Rva2VuO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBQYXltZW50IFNvdXJjZSByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclBheW1lbnRTb3VyY2UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJQYXltZW50U291cmNlLlRZUEUpO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXIodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXIoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXInKSB9XHJcblx0c2V0IHBheW1lbnRfc291cmNlKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwYXltZW50X3NvdXJjZScsIHZhbHVlKSB9XHJcblx0Z2V0IHBheW1lbnRfc291cmNlKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFN1YnNjcmlwdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lclN1YnNjcmlwdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcl9zdWJzY3JpcHRpb25zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgQ3VzdG9tZXJTdWJzY3JpcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLmN1c3RvbWVyX2VtYWlsID0gZmllbGRzLmN1c3RvbWVyX2VtYWlsO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciByZXNvdXJjZVxyXG5jbGFzcyBDdXN0b21lciBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdjdXN0b21lcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBDdXN0b21lci5UWVBFKTtcclxuXHRcdHRoaXMuZW1haWwgPSBmaWVsZHMuZW1haWw7XHJcblx0XHR0aGlzLnBhc3N3b3JkID0gZmllbGRzLnBhc3N3b3JkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgY3VzdG9tZXJfZ3JvdXAodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2N1c3RvbWVyX2dyb3VwJywgdmFsdWUpIH1cclxuXHRnZXQgY3VzdG9tZXJfZ3JvdXAoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnY3VzdG9tZXJfZ3JvdXAnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gRGVsaXZlcnkgTGVhZCBUaW1lIHJlc291cmNlXHJcbmNsYXNzIERlbGl2ZXJ5TGVhZFRpbWUgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnZGVsaXZlcnlfbGVhZF90aW1lcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIERlbGl2ZXJ5TGVhZFRpbWUuVFlQRSk7XHJcblx0XHR0aGlzLm1pbl9ob3VycyA9IGZpZWxkcy5taW5faG91cnM7XHJcblx0XHR0aGlzLm1heF9ob3VycyA9IGZpZWxkcy5tYXhfaG91cnM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgc2hpcHBpbmdfbWV0aG9kKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBzaGlwcGluZ19tZXRob2QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfbWV0aG9kJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEltcG9ydCByZXNvdXJjZVxyXG5jbGFzcyBJbXBvcnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnaW1wb3J0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEltcG9ydC5UWVBFKTtcclxuXHRcdHRoaXMucmVzb3VyY2VfdHlwZSA9IGZpZWxkcy5yZXNvdXJjZV90eXBlO1xyXG5cdFx0dGhpcy5wYXJlbnRfcmVzb3VyY2VfaWQgPSBmaWVsZHMucGFyZW50X3Jlc291cmNlX2lkO1xyXG5cdFx0dGhpcy5pbnB1dHMgPSBmaWVsZHMuaW5wdXRzO1xyXG5cdFx0dGhpcy5jbGVhbnVwX3JlY29yZHMgPSBmaWVsZHMuY2xlYW51cF9yZWNvcmRzO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBJbnZlbnRvcnkgTW9kZWwgcmVzb3VyY2VcclxuY2xhc3MgSW52ZW50b3J5TW9kZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnaW52ZW50b3J5X21vZGVscycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIEludmVudG9yeU1vZGVsLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIExpbmUgSXRlbSBPcHRpb24gcmVzb3VyY2VcclxuY2xhc3MgTGluZUl0ZW1PcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnbGluZV9pdGVtX29wdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBMaW5lSXRlbU9wdGlvbi5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IGZpZWxkcy5vcHRpb25zO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbGluZV9pdGVtKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdsaW5lX2l0ZW0nLCB2YWx1ZSkgfVxyXG5cdGdldCBsaW5lX2l0ZW0oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbGluZV9pdGVtJykgfVxyXG5cdHNldCBza3Vfb3B0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3Vfb3B0aW9uJywgdmFsdWUpIH1cclxuXHRnZXQgc2t1X29wdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3Vfb3B0aW9uJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIExpbmUgSXRlbSByZXNvdXJjZVxyXG5jbGFzcyBMaW5lSXRlbSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdsaW5lX2l0ZW1zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgTGluZUl0ZW0uVFlQRSk7XHJcblx0XHR0aGlzLnNrdV9jb2RlID0gZmllbGRzLnNrdV9jb2RlO1xyXG5cdFx0dGhpcy5xdWFudGl0eSA9IGZpZWxkcy5xdWFudGl0eTtcclxuXHRcdHRoaXMuX3VwZGF0ZV9xdWFudGl0eSA9IGZpZWxkcy5fdXBkYXRlX3F1YW50aXR5O1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmltYWdlX3VybCA9IGZpZWxkcy5pbWFnZV91cmw7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxuXHRzZXQgaXRlbSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnaXRlbScsIHZhbHVlKSB9XHJcblx0Z2V0IGl0ZW0oKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaXRlbScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBNYXJrZXQgcmVzb3VyY2VcclxuY2xhc3MgTWFya2V0IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ21hcmtldHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBNYXJrZXQuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuZmFjZWJvb2tfcGl4ZWxfaWQgPSBmaWVsZHMuZmFjZWJvb2tfcGl4ZWxfaWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtZXJjaGFudCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWVyY2hhbnQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtZXJjaGFudCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtZXJjaGFudCcpIH1cclxuXHRzZXQgcHJpY2VfbGlzdCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcsIHZhbHVlKSB9XHJcblx0Z2V0IHByaWNlX2xpc3QoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncHJpY2VfbGlzdCcpIH1cclxuXHRzZXQgaW52ZW50b3J5X21vZGVsKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnLCB2YWx1ZSkgfVxyXG5cdGdldCBpbnZlbnRvcnlfbW9kZWwoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnaW52ZW50b3J5X21vZGVsJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1lcmNoYW50IHJlc291cmNlXHJcbmNsYXNzIE1lcmNoYW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ21lcmNoYW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE1lcmNoYW50LlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE9yZGVyIHJlc291cmNlXHJcbmNsYXNzIE9yZGVyIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ29yZGVycycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIE9yZGVyLlRZUEUpO1xyXG5cdFx0dGhpcy5ndWVzdCA9IGZpZWxkcy5ndWVzdDtcclxuXHRcdHRoaXMuY3VzdG9tZXJfZW1haWwgPSBmaWVsZHMuY3VzdG9tZXJfZW1haWw7XHJcblx0XHR0aGlzLmN1c3RvbWVyX3Bhc3N3b3JkID0gZmllbGRzLmN1c3RvbWVyX3Bhc3N3b3JkO1xyXG5cdFx0dGhpcy5sYW5ndWFnZV9jb2RlID0gZmllbGRzLmxhbmd1YWdlX2NvZGU7XHJcblx0XHR0aGlzLnNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrID0gZmllbGRzLnNoaXBwaW5nX2NvdW50cnlfY29kZV9sb2NrO1xyXG5cdFx0dGhpcy5jb3Vwb25fY29kZSA9IGZpZWxkcy5jb3Vwb25fY29kZTtcclxuXHRcdHRoaXMuY2FydF91cmwgPSBmaWVsZHMuY2FydF91cmw7XHJcblx0XHR0aGlzLnJldHVybl91cmwgPSBmaWVsZHMucmV0dXJuX3VybDtcclxuXHRcdHRoaXMudGVybXNfdXJsID0gZmllbGRzLnRlcm1zX3VybDtcclxuXHRcdHRoaXMucHJpdmFjeV91cmwgPSBmaWVsZHMucHJpdmFjeV91cmw7XHJcblx0XHR0aGlzLl9wbGFjZSA9IGZpZWxkcy5fcGxhY2U7XHJcblx0XHR0aGlzLl9jYW5jZWwgPSBmaWVsZHMuX2NhbmNlbDtcclxuXHRcdHRoaXMuX2FwcHJvdmUgPSBmaWVsZHMuX2FwcHJvdmU7XHJcblx0XHR0aGlzLl9jYXB0dXJlID0gZmllbGRzLl9jYXB0dXJlO1xyXG5cdFx0dGhpcy5fdXBkYXRlX3RheGVzID0gZmllbGRzLl91cGRhdGVfdGF4ZXM7XHJcblx0XHR0aGlzLl9iaWxsaW5nX2FkZHJlc3NfY2xvbmVfaWQgPSBmaWVsZHMuX2JpbGxpbmdfYWRkcmVzc19jbG9uZV9pZDtcclxuXHRcdHRoaXMuX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQgPSBmaWVsZHMuX3NoaXBwaW5nX2FkZHJlc3NfY2xvbmVfaWQ7XHJcblx0XHR0aGlzLl9jdXN0b21lcl9wYXltZW50X3NvdXJjZV9pZCA9IGZpZWxkcy5fY3VzdG9tZXJfcGF5bWVudF9zb3VyY2VfaWQ7XHJcblx0XHR0aGlzLl9zaGlwcGluZ19hZGRyZXNzX3NhbWVfYXNfYmlsbGluZyA9IGZpZWxkcy5fc2hpcHBpbmdfYWRkcmVzc19zYW1lX2FzX2JpbGxpbmc7XHJcblx0XHR0aGlzLl9iaWxsaW5nX2FkZHJlc3Nfc2FtZV9hc19zaGlwcGluZyA9IGZpZWxkcy5fYmlsbGluZ19hZGRyZXNzX3NhbWVfYXNfc2hpcHBpbmc7XHJcblx0XHR0aGlzLl9zYXZlX3BheW1lbnRfc291cmNlX3RvX2N1c3RvbWVyX3dhbGxldCA9IGZpZWxkcy5fc2F2ZV9wYXltZW50X3NvdXJjZV90b19jdXN0b21lcl93YWxsZXQ7XHJcblx0XHR0aGlzLl9zYXZlX3NoaXBwaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rID0gZmllbGRzLl9zYXZlX3NoaXBwaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rO1xyXG5cdFx0dGhpcy5fc2F2ZV9iaWxsaW5nX2FkZHJlc3NfdG9fY3VzdG9tZXJfYWRkcmVzc19ib29rID0gZmllbGRzLl9zYXZlX2JpbGxpbmdfYWRkcmVzc190b19jdXN0b21lcl9hZGRyZXNzX2Jvb2s7XHJcblx0XHR0aGlzLl9yZWZyZXNoID0gZmllbGRzLl9yZWZyZXNoO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG5cdHNldCBjdXN0b21lcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnY3VzdG9tZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBjdXN0b21lcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdjdXN0b21lcicpIH1cclxuXHRzZXQgc2hpcHBpbmdfYWRkcmVzcyh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfYWRkcmVzcycsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2FkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfYWRkcmVzcycpIH1cclxuXHRzZXQgYmlsbGluZ19hZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdiaWxsaW5nX2FkZHJlc3MnLCB2YWx1ZSkgfVxyXG5cdGdldCBiaWxsaW5nX2FkZHJlc3MoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnYmlsbGluZ19hZGRyZXNzJykgfVxyXG5cdHNldCBwYXltZW50X21ldGhvZCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9tZXRob2QnLCB2YWx1ZSkgfVxyXG5cdGdldCBwYXltZW50X21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwYXltZW50X21ldGhvZCcpIH1cclxuXHRzZXQgcGF5bWVudF9zb3VyY2UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3BheW1lbnRfc291cmNlJywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9zb3VyY2UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgncGF5bWVudF9zb3VyY2UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGFyY2VsIHJlc291cmNlXHJcbmNsYXNzIFBhcmNlbCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXJjZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgUGFyY2VsLlRZUEUpO1xyXG5cdFx0dGhpcy53ZWlnaHQgPSBmaWVsZHMud2VpZ2h0O1xyXG5cdFx0dGhpcy51bml0X29mX3dlaWdodCA9IGZpZWxkcy51bml0X29mX3dlaWdodDtcclxuXHRcdHRoaXMuZWVsX3BmYyA9IGZpZWxkcy5lZWxfcGZjO1xyXG5cdFx0dGhpcy5jb250ZW50c190eXBlID0gZmllbGRzLmNvbnRlbnRzX3R5cGU7XHJcblx0XHR0aGlzLmNvbnRlbnRzX2V4cGxhbmF0aW9uID0gZmllbGRzLmNvbnRlbnRzX2V4cGxhbmF0aW9uO1xyXG5cdFx0dGhpcy5jdXN0b21zX2NlcnRpZnkgPSBmaWVsZHMuY3VzdG9tc19jZXJ0aWZ5O1xyXG5cdFx0dGhpcy5jdXN0b21zX3NpZ25lciA9IGZpZWxkcy5jdXN0b21zX3NpZ25lcjtcclxuXHRcdHRoaXMubm9uX2RlbGl2ZXJ5X29wdGlvbiA9IGZpZWxkcy5ub25fZGVsaXZlcnlfb3B0aW9uO1xyXG5cdFx0dGhpcy5yZXN0cmljdGlvbl90eXBlID0gZmllbGRzLnJlc3RyaWN0aW9uX3R5cGU7XHJcblx0XHR0aGlzLnJlc3RyaWN0aW9uX2NvbW1lbnRzID0gZmllbGRzLnJlc3RyaWN0aW9uX2NvbW1lbnRzO1xyXG5cdFx0dGhpcy5jdXN0b21zX2luZm9fcmVxdWlyZWQgPSBmaWVsZHMuY3VzdG9tc19pbmZvX3JlcXVpcmVkO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgc2hpcG1lbnQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBtZW50JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcG1lbnQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcG1lbnQnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGF5bWVudCBNZXRob2QgcmVzb3VyY2VcclxuY2xhc3MgUGF5bWVudE1ldGhvZCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwYXltZW50X21ldGhvZHMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBQYXltZW50TWV0aG9kLlRZUEUpO1xyXG5cdFx0dGhpcy5wYXltZW50X3NvdXJjZV90eXBlID0gZmllbGRzLnBheW1lbnRfc291cmNlX3R5cGU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBtYXJrZXQodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ21hcmtldCcsIHZhbHVlKSB9XHJcblx0Z2V0IG1hcmtldCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdtYXJrZXQnKSB9XHJcblx0c2V0IHBheW1lbnRfZ2F0ZXdheSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgncGF5bWVudF9nYXRld2F5JywgdmFsdWUpIH1cclxuXHRnZXQgcGF5bWVudF9nYXRld2F5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3BheW1lbnRfZ2F0ZXdheScpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXlwYWwgUGF5bWVudCByZXNvdXJjZVxyXG5jbGFzcyBQYXlwYWxQYXltZW50IGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3BheXBhbF9wYXltZW50cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFBheXBhbFBheW1lbnQuVFlQRSk7XHJcblx0XHR0aGlzLnJldHVybl91cmwgPSBmaWVsZHMucmV0dXJuX3VybDtcclxuXHRcdHRoaXMuY2FuY2VsX3VybCA9IGZpZWxkcy5jYW5jZWxfdXJsO1xyXG5cdFx0dGhpcy5ub3RlX3RvX3BheWVyID0gZmllbGRzLm5vdGVfdG9fcGF5ZXI7XHJcblx0XHR0aGlzLnBheXBhbF9wYXllcl9pZCA9IGZpZWxkcy5wYXlwYWxfcGF5ZXJfaWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQcmljZSBMaXN0IHJlc291cmNlXHJcbmNsYXNzIFByaWNlTGlzdCBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdwcmljZV9saXN0cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFByaWNlTGlzdC5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG5cdFx0dGhpcy5jdXJyZW5jeV9jb2RlID0gZmllbGRzLmN1cnJlbmN5X2NvZGU7XHJcblx0XHR0aGlzLnRheF9pbmNsdWRlZCA9IGZpZWxkcy50YXhfaW5jbHVkZWQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFByaWNlIHJlc291cmNlXHJcbmNsYXNzIFByaWNlIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3ByaWNlcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFByaWNlLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMuYW1vdW50X2NlbnRzID0gZmllbGRzLmFtb3VudF9jZW50cztcclxuXHRcdHRoaXMuY29tcGFyZV9hdF9hbW91bnRfY2VudHMgPSBmaWVsZHMuY29tcGFyZV9hdF9hbW91bnRfY2VudHM7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBwcmljZV9saXN0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdwcmljZV9saXN0JywgdmFsdWUpIH1cclxuXHRnZXQgcHJpY2VfbGlzdCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdwcmljZV9saXN0JykgfVxyXG5cdHNldCBza3UodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NrdScsIHZhbHVlKSB9XHJcblx0Z2V0IHNrdSgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdza3UnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcG1lbnQgcmVzb3VyY2VcclxuY2xhc3MgU2hpcG1lbnQgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcG1lbnRzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcG1lbnQuVFlQRSk7XHJcblx0XHR0aGlzLl9vbl9ob2xkID0gZmllbGRzLl9vbl9ob2xkO1xyXG5cdFx0dGhpcy5fcGlja2luZyA9IGZpZWxkcy5fcGlja2luZztcclxuXHRcdHRoaXMuX3BhY2tpbmcgPSBmaWVsZHMuX3BhY2tpbmc7XHJcblx0XHR0aGlzLl9yZWFkeV90b19zaGlwID0gZmllbGRzLl9yZWFkeV90b19zaGlwO1xyXG5cdFx0dGhpcy5fc2hpcCA9IGZpZWxkcy5fc2hpcDtcclxuXHRcdHRoaXMuX2dldF9yYXRlcyA9IGZpZWxkcy5fZ2V0X3JhdGVzO1xyXG5cdFx0dGhpcy5zZWxlY3RlZF9yYXRlX2lkID0gZmllbGRzLnNlbGVjdGVkX3JhdGVfaWQ7XHJcblx0XHR0aGlzLl9wdXJjaGFzZSA9IGZpZWxkcy5fcHVyY2hhc2U7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzaGlwcGluZ19tZXRob2QodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX21ldGhvZCcsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX21ldGhvZCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzaGlwcGluZ19tZXRob2QnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgQ2F0ZWdvcnkgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdDYXRlZ29yeSBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzaGlwcGluZ19jYXRlZ29yaWVzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU2hpcHBpbmdDYXRlZ29yeS5UWVBFKTtcclxuXHRcdHRoaXMubmFtZSA9IGZpZWxkcy5uYW1lO1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxufVxyXG5cclxuXHJcblxyXG4vLyBTaGlwcGluZyBNZXRob2QgcmVzb3VyY2VcclxuY2xhc3MgU2hpcHBpbmdNZXRob2QgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfbWV0aG9kcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNoaXBwaW5nTWV0aG9kLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLnByaWNlX2Ftb3VudF9jZW50cyA9IGZpZWxkcy5wcmljZV9hbW91bnRfY2VudHM7XHJcblx0XHR0aGlzLmZyZWVfb3Zlcl9hbW91bnRfY2VudHMgPSBmaWVsZHMuZnJlZV9vdmVyX2Ftb3VudF9jZW50cztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IG1hcmtldCh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnbWFya2V0JywgdmFsdWUpIH1cclxuXHRnZXQgbWFya2V0KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ21hcmtldCcpIH1cclxuXHRzZXQgc2hpcHBpbmdfem9uZSh2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX3pvbmUoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfem9uZScpIH1cclxuXHRzZXQgc2hpcHBpbmdfY2F0ZWdvcnkodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JywgdmFsdWUpIH1cclxuXHRnZXQgc2hpcHBpbmdfY2F0ZWdvcnkoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2hpcHBpbmdfY2F0ZWdvcnknKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2hpcHBpbmcgWm9uZSByZXNvdXJjZVxyXG5jbGFzcyBTaGlwcGluZ1pvbmUgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2hpcHBpbmdfem9uZXMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTaGlwcGluZ1pvbmUuVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMuY291bnRyeV9jb2RlX3JlZ2V4ID0gZmllbGRzLmNvdW50cnlfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X2NvdW50cnlfY29kZV9yZWdleCA9IGZpZWxkcy5ub3RfY291bnRyeV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy5zdGF0ZV9jb2RlX3JlZ2V4ID0gZmllbGRzLnN0YXRlX2NvZGVfcmVnZXg7XHJcblx0XHR0aGlzLm5vdF9zdGF0ZV9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF9zdGF0ZV9jb2RlX3JlZ2V4O1xyXG5cdFx0dGhpcy56aXBfY29kZV9yZWdleCA9IGZpZWxkcy56aXBfY29kZV9yZWdleDtcclxuXHRcdHRoaXMubm90X3ppcF9jb2RlX3JlZ2V4ID0gZmllbGRzLm5vdF96aXBfY29kZV9yZWdleDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2t1IE9wdGlvbiByZXNvdXJjZVxyXG5jbGFzcyBTa3VPcHRpb24gZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2t1X29wdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTa3VPcHRpb24uVFlQRSk7XHJcblx0XHR0aGlzLm5hbWUgPSBmaWVsZHMubmFtZTtcclxuXHRcdHRoaXMucHJpY2VfYW1vdW50X2NlbnRzID0gZmllbGRzLnByaWNlX2Ftb3VudF9jZW50cztcclxuXHRcdHRoaXMuZGVsYXlfaG91cnMgPSBmaWVsZHMuZGVsYXlfaG91cnM7XHJcblx0XHR0aGlzLnNrdV9jb2RlX3JlZ2V4ID0gZmllbGRzLnNrdV9jb2RlX3JlZ2V4O1xyXG4gICAgfVxyXG5cdC8vIFJlbGF0aW9uc2hpcHNcclxuXHRzZXQgbWFya2V0KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdtYXJrZXQnLCB2YWx1ZSkgfVxyXG5cdGdldCBtYXJrZXQoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnbWFya2V0JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFNrdSByZXNvdXJjZVxyXG5jbGFzcyBTa3UgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc2t1cycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFNrdS5UWVBFKTtcclxuXHRcdHRoaXMuY29kZSA9IGZpZWxkcy5jb2RlO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZmllbGRzLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGhpcy5pbWFnZV91cmwgPSBmaWVsZHMuaW1hZ2VfdXJsO1xyXG5cdFx0dGhpcy50YWdfbmFtZXMgPSBmaWVsZHMudGFnX25hbWVzO1xyXG5cdFx0dGhpcy5waWVjZXNfcGVyX3BhY2sgPSBmaWVsZHMucGllY2VzX3Blcl9wYWNrO1xyXG5cdFx0dGhpcy53ZWlnaHQgPSBmaWVsZHMud2VpZ2h0O1xyXG5cdFx0dGhpcy51bml0X29mX3dlaWdodCA9IGZpZWxkcy51bml0X29mX3dlaWdodDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHNoaXBwaW5nX2NhdGVnb3J5KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzaGlwcGluZ19jYXRlZ29yeScsIHZhbHVlKSB9XHJcblx0Z2V0IHNoaXBwaW5nX2NhdGVnb3J5KCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3NoaXBwaW5nX2NhdGVnb3J5JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIEl0ZW0gcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tJdGVtIGV4dGVuZHMgUmVzb3VyY2Uge1xyXG4gICAgc3RhdGljIGdldCBUWVBFKCkgeyByZXR1cm4gJ3N0b2NrX2l0ZW1zJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tJdGVtLlRZUEUpO1xyXG5cdFx0dGhpcy5za3VfY29kZSA9IGZpZWxkcy5za3VfY29kZTtcclxuXHRcdHRoaXMucXVhbnRpdHkgPSBmaWVsZHMucXVhbnRpdHk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBzdG9ja19sb2NhdGlvbih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnc3RvY2tfbG9jYXRpb24nLCB2YWx1ZSkgfVxyXG5cdGdldCBzdG9ja19sb2NhdGlvbigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicpIH1cclxuXHRzZXQgc2t1KHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdza3UnLCB2YWx1ZSkgfVxyXG5cdGdldCBza3UoKSB7IHJldHVybiBzdXBlci5nZXRSZXNvdXJjZSgnc2t1JykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0b2NrIExldmVsIHJlc291cmNlXHJcbmNsYXNzIFN0b2NrTGV2ZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnc3RvY2tfbGV2ZWxzJyB9XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZmllbGRzID0ge30pIHtcclxuICAgICAgICBzdXBlcihpZCwgU3RvY2tMZXZlbC5UWVBFKTtcclxuXHRcdHRoaXMucHJpb3JpdHkgPSBmaWVsZHMucHJpb3JpdHk7XHJcblx0XHR0aGlzLm9uX2hvbGQgPSBmaWVsZHMub25faG9sZDtcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcblx0c2V0IHN0b2NrX2xvY2F0aW9uKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdzdG9ja19sb2NhdGlvbicsIHZhbHVlKSB9XHJcblx0Z2V0IHN0b2NrX2xvY2F0aW9uKCkgeyByZXR1cm4gc3VwZXIuZ2V0UmVzb3VyY2UoJ3N0b2NrX2xvY2F0aW9uJykgfVxyXG5cdHNldCBpbnZlbnRvcnlfbW9kZWwodmFsdWUpIHsgc3VwZXIuc2V0UmVzb3VyY2UoJ2ludmVudG9yeV9tb2RlbCcsIHZhbHVlKSB9XHJcblx0Z2V0IGludmVudG9yeV9tb2RlbCgpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdpbnZlbnRvcnlfbW9kZWwnKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvY2sgTG9jYXRpb24gcmVzb3VyY2VcclxuY2xhc3MgU3RvY2tMb2NhdGlvbiBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICdzdG9ja19sb2NhdGlvbnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdG9ja0xvY2F0aW9uLlRZUEUpO1xyXG5cdFx0dGhpcy5uYW1lID0gZmllbGRzLm5hbWU7XHJcblx0XHR0aGlzLmxhYmVsX2Zvcm1hdCA9IGZpZWxkcy5sYWJlbF9mb3JtYXQ7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBhZGRyZXNzKHZhbHVlKSB7IHN1cGVyLnNldFJlc291cmNlKCdhZGRyZXNzJywgdmFsdWUpIH1cclxuXHRnZXQgYWRkcmVzcygpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdhZGRyZXNzJykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFdlYmhvb2sgcmVzb3VyY2VcclxuY2xhc3MgV2ViaG9vayBleHRlbmRzIFJlc291cmNlIHtcclxuICAgIHN0YXRpYyBnZXQgVFlQRSgpIHsgcmV0dXJuICd3ZWJob29rcycgfVxyXG4gICAgY29uc3RydWN0b3IoaWQsIGZpZWxkcyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFdlYmhvb2suVFlQRSk7XHJcblx0XHR0aGlzLnRvcGljID0gZmllbGRzLnRvcGljO1xyXG5cdFx0dGhpcy5jYWxsYmFja191cmwgPSBmaWVsZHMuY2FsbGJhY2tfdXJsO1xyXG5cdFx0dGhpcy5pbmNsdWRlX3Jlc291cmNlcyA9IGZpZWxkcy5pbmNsdWRlX3Jlc291cmNlcztcclxuICAgIH1cclxuXHQvLyBSZWxhdGlvbnNoaXBzXHJcbn1cclxuXHJcblxyXG5cclxuLy8gV2lyZSBUcmFuc2ZlciByZXNvdXJjZVxyXG5jbGFzcyBXaXJlVHJhbnNmZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XHJcbiAgICBzdGF0aWMgZ2V0IFRZUEUoKSB7IHJldHVybiAnd2lyZV90cmFuc2ZlcnMnIH1cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBmaWVsZHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBXaXJlVHJhbnNmZXIuVFlQRSk7XHJcbiAgICB9XHJcblx0Ly8gUmVsYXRpb25zaGlwc1xyXG5cdHNldCBvcmRlcih2YWx1ZSkgeyBzdXBlci5zZXRSZXNvdXJjZSgnb3JkZXInLCB2YWx1ZSkgfVxyXG5cdGdldCBvcmRlcigpIHsgcmV0dXJuIHN1cGVyLmdldFJlc291cmNlKCdvcmRlcicpIH1cclxufVxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRBZGRyZXNzLFxyXG5cdENyZWRpdENhcmQsXHJcblx0Q3VzdG9tZXJBZGRyZXNzLFxyXG5cdEN1c3RvbWVyR3JvdXAsXHJcblx0Q3VzdG9tZXJQYXNzd29yZFJlc2V0LFxyXG5cdEN1c3RvbWVyUGF5bWVudFNvdXJjZSxcclxuXHRDdXN0b21lclN1YnNjcmlwdGlvbixcclxuXHRDdXN0b21lcixcclxuXHREZWxpdmVyeUxlYWRUaW1lLFxyXG5cdEltcG9ydCxcclxuXHRJbnZlbnRvcnlNb2RlbCxcclxuXHRMaW5lSXRlbU9wdGlvbixcclxuXHRMaW5lSXRlbSxcclxuXHRNYXJrZXQsXHJcblx0TWVyY2hhbnQsXHJcblx0T3JkZXIsXHJcblx0UGFyY2VsLFxyXG5cdFBheW1lbnRNZXRob2QsXHJcblx0UGF5cGFsUGF5bWVudCxcclxuXHRQcmljZUxpc3QsXHJcblx0UHJpY2UsXHJcblx0U2hpcG1lbnQsXHJcblx0U2hpcHBpbmdDYXRlZ29yeSxcclxuXHRTaGlwcGluZ01ldGhvZCxcclxuXHRTaGlwcGluZ1pvbmUsXHJcblx0U2t1T3B0aW9uLFxyXG5cdFNrdSxcclxuXHRTdG9ja0l0ZW0sXHJcblx0U3RvY2tMZXZlbCxcclxuXHRTdG9ja0xvY2F0aW9uLFxyXG5cdFdlYmhvb2ssXHJcblx0V2lyZVRyYW5zZmVyLFxyXG59XHJcblxyXG5cclxuXHJcbi8vICoqKioqKioqKiogSGVscGVyICoqKioqKioqKiogLy9cclxuXHJcbm1vZHVsZS5leHBvcnRzLmhlbHBlciA9IHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaGVscGVyLm5ld1Jlc291cmNlID0gKHR5cGUsIGlkLCBmaWVsZHMpID0+IHtcclxuXHRsZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcblx0bGV0IG1vZGVsID0gbW9kdWxlLmV4cG9ydHM7XHJcblx0T2JqZWN0LmtleXMobW9kZWwpLmZvckVhY2goKGNsKSA9PiB7XHJcblx0XHRpZiAoIWNsLnN0YXJ0c1dpdGgoJ2hlbHBlcicpKSB7XHJcblx0XHRcdGxldCBjbF90eXBlID0gbW9kZWxbY2xdLlRZUEU7XHJcblx0XHRcdGlmIChjbF90eXBlICYmIChjbF90eXBlID09IHR5cGUpKSB7XHJcblx0XHRcdFx0aW5zdGFuY2UgPSBuZXcgbW9kZWxbY2xdKGlkLCBmaWVsZHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0cmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5oZWxwZXIuaXNBcGlSZXNvdXJjZSA9IChyZXMpID0+IHtcclxuXHRyZXR1cm4gKHJlcyAmJiByZXMuaXNBcGlSZXNvdXJjZSAmJiAocmVzLmlzQXBpUmVzb3VyY2UoKSA9PT0gdHJ1ZSkpO1xyXG59XHJcbiIsIlxyXG5jbGFzcyBRdWVyeUZpbHRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuc29ydF9maWVsZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNwYXJzZV9maWVsZHNldHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpZWxkcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tX3BhcmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNRdWVyeUZpbHRlcigpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICBzb3J0KGZpZWxkLCBkZXNjZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0X2ZpZWxkcy5wdXNoKChkZXNjZW5kaW5nPyAnLScgOiAnJykuY29uY2F0KGZpZWxkKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGRzKHJlc291cmNlLCAuLi5maWVsZHMpIHtcclxuICAgICAgICBpZiAoZmllbGRzICE9IHVuZGVmaW5lZCkgdGhpcy5zcGFyc2VfZmllbGRzZXRzW3Jlc291cmNlXSA9IGZpZWxkcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbmNsdWRlKC4uLnJlc291cmNlcykge1xyXG4gICAgICAgIC8vIGlmIChyZXNvdXJjZXMgIT0gdW5kZWZpbmVkKSByZXNvdXJjZXMuZm9yRWFjaChyZXMgPT4geyB0aGlzLmluY2x1ZGVkX3Jlc291cmNlcy5wdXNoKHJlcykgfSlcclxuICAgICAgICBpZiAocmVzb3VyY2VzICE9IHVuZGVmaW5lZCkgdGhpcy5pbmNsdWRlZF9yZXNvdXJjZXMucHVzaChyZXNvdXJjZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihmaWx0ZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKChmaWx0ZXIgIT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgIT0gdW5kZWZpbmVkKSkgdGhpcy5maWx0ZXJfZmllbGRzW2ZpbHRlcl0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJzKGZpbHRlcnMpIHtcclxuICAgICAgICBpZiAoZmlsdGVycyAhPSB1bmRlZmluZWQpIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goZmlsdGVyID0+IHsgdGhpcy5maWx0ZXIoZmlsdGVyLCBmaWx0ZXJzW2ZpbHRlcl0pIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW0oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICgoa2V5ICE9IHVuZGVmaW5lZCkgJiYgKHZhbHVlICE9IHVuZGVmaW5lZCkpIHRoaXMuY3VzdG9tX3BhcmFtc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgIT0gdW5kZWZpbmVkKSBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHsgdGhpcy5wYXJhbShrZXksIHBhcmFtc1trZXldKSB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2UobnVtYmVyLCBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyKG51bWJlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZShzaXplKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdlU2l6ZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX3NpemUgPSBzaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlX251bWJlciA9IG51bWJlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VfbnVtYmVyID0gKHRoaXMucGFnZV9udW1iZXIgJiYgTnVtYmVyLmlzSW50ZWdlcih0aGlzLnBhZ2VOdW1iZXIpKT8gcGFnZV9udW1iZXIrKyA6IDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoam9pbikge1xyXG5cclxuICAgICAgICBsZXQgcXNNYXAgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEZpZWxkc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbHRlcl9maWVsZHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyX2ZpZWxkcykuZm9yRWFjaChmaWx0ZXIgPT4geyBxc01hcFtgZmlsdGVyWyR7ZmlsdGVyfV1gXSA9IHRoaXMuZmlsdGVyX2ZpZWxkc1tmaWx0ZXJdIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluY2x1ZGVkIFJlc291cmNlc1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmluY2x1ZGVkX3Jlc291cmNlcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuaW5jbHVkZSA9IHRoaXMuaW5jbHVkZWRfcmVzb3VyY2VzLmpvaW4oJywnKTtcclxuXHJcbiAgICAgICAgLy8gU3BhcnNlIEZpZWxkc2V0c1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNwYXJzZV9maWVsZHNldHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3BhcnNlX2ZpZWxkc2V0cykuZm9yRWFjaChyZXMgPT4geyBxc01hcFtgZmllbGRzWyR7cmVzfV1gXSA9IHRoaXMuc3BhcnNlX2ZpZWxkc2V0c1tyZXNdLmpvaW4oJywnKSB9KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBGaWVsZHNcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zb3J0X2ZpZWxkcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcXNNYXAuc29ydCA9IHRoaXMuc29ydF9maWVsZHMuam9pbignLCcpO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gUGFyYW1zXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tX3BhcmFtcykubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXN0b21fcGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7IHFzTWFwW2tleV0gPSB0aGlzLmN1c3RvbV9wYXJhbXNba2V5XSB9KVxyXG5cclxuICAgICAgICAvLyBQYWdpbmF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFnZV9udW1iZXIgIT0gdW5kZWZpbmVkKSBxc01hcFsncGFnZVtudW1iZXJdJ10gPSB0aGlzLnBhZ2VfbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2Vfc2l6ZSAhPSB1bmRlZmluZWQpIHFzTWFwWydwYWdlW3NpemVdJ10gPSB0aGlzLnBhZ2Vfc2l6ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICFqb2luPyBxc01hcCA6IE9iamVjdC5rZXlzKHFzTWFwKS5tYXAoa2V5ID0+IHsgcmV0dXJuIGtleSsnPScrcXNNYXBba2V5XSB9KS5qb2luKCcmJyk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUXVlcnlGaWx0ZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMubmV3SW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5RmlsdGVyKCk7XHJcbn1cclxuIiwiXHJcbmNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGxvZyA6IChtZXNzYWdlKSA9PiB7ICAgIC8vIEJXQ1xyXG4gICAgICAgIGxvZy5tc2cobWVzc2FnZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZE1hcCA6IChtYXAsIGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChtYXAgPT0gdW5kZWZpbmVkKSBtYXAgPSB7fTtcclxuICAgICAgICBpZiAoZXh0ICE9IHVuZGVmaW5lZCkgT2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGtleSA9PiB7IG1hcFtrZXldID0gZXh0W2tleV07IH0pO1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlTWFwcyA6IChtYXAxLCBtYXAyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubWFwMSwgLi4ubWFwMiB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb25lTWFwIDogKG1hcCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAobWFwID09IHVuZGVmaW5lZCk/IG1hcCA6IHsgLi4ubWFwIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHNsZWVwIDogKG1zLCBtc2cpID0+IHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cy5sb2coKG1zZz8gYCR7bXNnfSAtIGAgOiAnJykuY29uY2F0KGB3YWl0aW5nICR7bXN9IG1zZWNzIC4uLmApKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGd1aWQgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArICcuJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLnN1YnN0cigwLCA2KSkudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHttZXRob2Q6ICdnZXQnfSwgdGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290Lmpzb25BcGlOb3JtYWxpemUgPSBmYWN0b3J5KCk7XG4gICAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gTm9ybWFsaXplcihkYXRhc2V0LCBwcm9wZXJ0eSkge1xuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb3JtYWxpemVyKSkge1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZXJJbnN0YW5jZSA9IG5ldyBOb3JtYWxpemVyKGRhdGFzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5ID8gbm9ybWFsaXplckluc3RhbmNlLmdldChwcm9wZXJ0eSkgOiBub3JtYWxpemVySW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRhdGFzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhc2V0ID0gSlNPTi5wYXJzZShkYXRhc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YXNldCB8fCAhZGF0YXNldC5kYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQganNvbiBhcGkgbm9ybWFsaXplciBpbnB1dCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gZGF0YXNldDtcbiAgICAgICAgdGhpcy5pc0NvbGxlY3Rpb24gPSBpc0FycmF5KGRhdGFzZXQuZGF0YSk7XG5cbiAgICAgICAgdGhpcy5oYXlzdGFjayA9IGJ1aWxkSGF5c3RhY2soZGF0YXNldC5pbmNsdWRlZCwgdGhpcy5pc0NvbGxlY3Rpb24gPyBkYXRhc2V0LmRhdGEgOiBbZGF0YXNldC5kYXRhXSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZEhheXN0YWNrKGluY2x1ZGVkLCBhZGRpdGlvbmFsSXRlbXMpIHtcblxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IFtdO1xuICAgICAgICB2YXIgaGF5c3RhY2sgPSBpbmNsdWRlZCB8fCBbXTtcblxuICAgICAgICBlYWNoKGhheXN0YWNrLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIHNpZ25hdHVyZXMucHVzaChlbnRpdHkudHlwZSArICdAJyArIGVudGl0eS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVhY2goYWRkaXRpb25hbEl0ZW1zLCBmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVzLmluZGV4T2YoZW50aXR5LnR5cGUgKyAnQCcgKyBlbnRpdHkuaWQpIDwgMCkge1xuICAgICAgICAgICAgICAgIGhheXN0YWNrLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShjb2xsZWN0aW9uKSB7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICBpZiAoaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGNhbGxiYWNrLmNhbGwoY29udGV4dCwga2V5LCBjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IFtdO1xuXG4gICAgICAgIGVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0LCBpdGVtLCBrZXkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWVwRXh0ZW5kKG91dCwgb2JqKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb3V0W2tleV0gPT09ICd1bmRlZmluZWQnICYmIChvdXRba2V5XSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGVlcEV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5UHJvcGVydGllcyhwcm9wZXJ0eVRyZWUsIGVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlUcmVlLCBmdW5jdGlvbihwcm9wZXJ0eSwgcmVsYXRpb25Qcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvblByb3BlcnR5VHJlZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3Byb3BlcnR5XSAmJiBlbnRpdHkucmVsYXRpb25zaGlwc1twcm9wZXJ0eV0uZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbkRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSByZWxhdGVkRW50aXR5ID8gbmV3IE5vcm1hbGl6ZXIoe2RhdGE6IHJlbGF0ZWRFbnRpdHksIGluY2x1ZGVkOiBoYXlzdGFja30pIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IGdldEVudGl0eVZhbHVlKHByb3BlcnR5LCBlbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gZ2V0UmVsYXRpb25EYXRhKHByb3BlcnR5LCByZWxhdGlvblByb3BlcnR5VHJlZSwgZW50aXR5LCBoYXlzdGFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW50aXR5VmFsdWUocHJvcGVydHksIGVudGl0eSkge1xuXG4gICAgICAgIHJldHVybiBbJ2lkJywgJ3R5cGUnXS5pbmRleE9mKHByb3BlcnR5KSA+PSAwID8gZW50aXR5W3Byb3BlcnR5XSA6IGVudGl0eS5hdHRyaWJ1dGVzW3Byb3BlcnR5XTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0aW9uRGF0YShyZWxhdGlvbk5hbWUsIHJlbGF0aW9uUHJvcGVydHlUcmVlLCBlbnRpdHksIGhheXN0YWNrKSB7XG5cbiAgICAgICAgdmFyIHJlbGF0aW9uRGF0YSA9IGVudGl0eS5yZWxhdGlvbnNoaXBzICYmIGVudGl0eS5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uTmFtZV0gJiYgZW50aXR5LnJlbGF0aW9uc2hpcHNbcmVsYXRpb25OYW1lXS5kYXRhO1xuICAgICAgICB2YXIgcmVsYXRlZEVudGl0eSA9IHJlbGF0aW9uRGF0YSAmJiBnZXRSZWxhdGVkRW50aXR5KHJlbGF0aW9uRGF0YSwgaGF5c3RhY2spO1xuXG4gICAgICAgIGlmIChpc0FycmF5KHJlbGF0ZWRFbnRpdHkpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtYXAocmVsYXRlZEVudGl0eSwgZnVuY3Rpb24oc2luZ2xlUmVsYXRlZEVudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgc2luZ2xlUmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghcmVsYXRlZEVudGl0eSkge1xuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVSZWxhdGlvbihyZWxhdGlvblByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVJlbGF0aW9uKHByb3BlcnR5VHJlZSwgcmVsYXRlZEVudGl0eSwgaGF5c3RhY2spIHtcblxuICAgICAgICByZXR1cm4gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwobmV3IE5vcm1hbGl6ZXIoe1xuICAgICAgICAgICAgZGF0YTogcmVsYXRlZEVudGl0eSxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBoYXlzdGFja1xuICAgICAgICB9KSwgcHJvcGVydHlUcmVlKTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlbGF0ZWRFbnRpdHkocmVsYXRpb25EYXRhLCBoYXlzdGFjaykge1xuXG4gICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgdmFyIHNlYXJjaCA9IGlzQXJyYXkocmVsYXRpb25EYXRhKSA/IG1hcChyZWxhdGlvbkRhdGEsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgKyAnQCcgKyBpdGVtLmlkO1xuICAgICAgICB9KSA6IFtyZWxhdGlvbkRhdGEudHlwZSArICdAJyArIHJlbGF0aW9uRGF0YS5pZF07XG5cbiAgICAgICAgZWFjaChoYXlzdGFjaywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgc2VhcmNoLmluZGV4T2YoaXRlbS50eXBlICsgJ0AnICsgaXRlbS5pZCkgPj0gMCAmJiB0ZW1wLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wLmxlbmd0aCA9PT0gMSAmJiAhaXNBcnJheShyZWxhdGlvbkRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvTmVzdGVkT2JqZWN0KGNvbGxlY3Rpb24pIHtcblxuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHZhciB0ZW1wID0gb2JqO1xuICAgICAgICB2YXIgY29sbGVjdGlvbkxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wID0gdGVtcFtjb2xsZWN0aW9uW2ldXSA9IHRlbXBbY29sbGVjdGlvbltpXV0gfHwgKGkrMSA9PT0gY29sbGVjdGlvbkxlbmd0aCA/IHVuZGVmaW5lZCA6IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFByb3BlcnR5VHJlZShwcm9wZXJ0eUxpc3QpIHtcblxuICAgICAgICB2YXIgdGVtcCA9IHt9O1xuXG4gICAgICAgIGVhY2gocHJvcGVydHlMaXN0LCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJvcGVydHlQYXJ0cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKHRlbXAsIGFycmF5VG9OZXN0ZWRPYmplY3QocHJvcGVydHlQYXJ0cykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW3Byb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVtcDtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpYVByb3BlcnR5VHJlZShwcm9wZXJ0eVRyZWUpIHtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1hcCh0aGlzLmRhdGFzZXQuZGF0YSwgZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCBlbnRpdHksIHRoaXMuaGF5c3RhY2spO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIGdldEVudGl0eVByb3BlcnRpZXMocHJvcGVydHlUcmVlLCB0aGlzLmRhdGFzZXQuZGF0YSwgdGhpcy5oYXlzdGFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgTm9ybWFsaXplci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0VmlhUHJvcGVydHlUcmVlLmNhbGwodGhpcywgYnVpbGRQcm9wZXJ0eVRyZWUoaXNBcnJheShwcm9wZXJ0eSkgPyBwcm9wZXJ0eSA6IFtwcm9wZXJ0eV0pKTtcblxuICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IG1hcChyZXN1bHQsIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bcHJvcGVydHldOyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHByb3BlcnR5KSA/IHJlc3VsdCA6IHJlc3VsdFtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gTm9ybWFsaXplcjtcblxufSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=