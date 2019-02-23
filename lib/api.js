// File automatically generated at 22/02/2019 13:57:47 by commercelayer-js-sdk-codegen


const client = require('./client')
const log = require('./log')
const jsonapi = require('./jsonapi')
const errorResponse = require('./error').errorResponse


class CLApi {

	// Address
	listAddresses(filter, options) {
		return request(client.newRequest('/api/addresses').setParams(filter).setOptions(options));
	}

	allAddresses(filter, options) {
		return all(this.listAddresses, filter, options);
	}

	retrieveAddress(id, filter, options) {
		return request(client.newRequest(`/api/addresses/${id}`).setParams(filter).setOptions(options));
	}

	createAddress(address, filter) {
	    return request(client.newRequest('/api/addresses', 'post').setBody(address).setParams(filter));
	}

	updateAddress(id, address, filter) {
		return request(client.newRequest(`/api/addresses/${id}`, 'patch').setBody(address).setParams(filter));
	}

	deleteAddress(id) {
		return request(client.newRequest(`/api/addresses/${id}`, 'delete'));
	}



	// Credit Card
	listCreditCards(filter, options) {
		return request(client.newRequest('/api/credit_cards').setParams(filter).setOptions(options));
	}

	allCreditCards(filter, options) {
		return all(this.listCreditCards, filter, options);
	}

	retrieveCreditCard(id, filter, options) {
		return request(client.newRequest(`/api/credit_cards/${id}`).setParams(filter).setOptions(options));
	}

	createCreditCard(credit_card, filter) {
	    return request(client.newRequest('/api/credit_cards', 'post').setBody(credit_card).setParams(filter));
	}

	updateCreditCard(id, credit_card, filter) {
		return request(client.newRequest(`/api/credit_cards/${id}`, 'patch').setBody(credit_card).setParams(filter));
	}

	deleteCreditCard(id) {
		return request(client.newRequest(`/api/credit_cards/${id}`, 'delete'));
	}



	// Customer Address
	listCustomerAddresses(filter, options) {
		return request(client.newRequest('/api/customer_addresses').setParams(filter).setOptions(options));
	}

	allCustomerAddresses(filter, options) {
		return all(this.listCustomerAddresses, filter, options);
	}

	retrieveCustomerAddress(id, filter, options) {
		return request(client.newRequest(`/api/customer_addresses/${id}`).setParams(filter).setOptions(options));
	}

	createCustomerAddress(customer_address, filter) {
	    return request(client.newRequest('/api/customer_addresses', 'post').setBody(customer_address).setParams(filter));
	}

	updateCustomerAddress(id, customer_address, filter) {
		return request(client.newRequest(`/api/customer_addresses/${id}`, 'patch').setBody(customer_address).setParams(filter));
	}

	deleteCustomerAddress(id) {
		return request(client.newRequest(`/api/customer_addresses/${id}`, 'delete'));
	}



	// Customer Password Reset
	listCustomerPasswordResets(filter, options) {
		return request(client.newRequest('/api/customer_password_resets').setParams(filter).setOptions(options));
	}

	allCustomerPasswordResets(filter, options) {
		return all(this.listCustomerPasswordResets, filter, options);
	}

	retrieveCustomerPasswordReset(id, filter, options) {
		return request(client.newRequest(`/api/customer_password_resets/${id}`).setParams(filter).setOptions(options));
	}

	createCustomerPasswordReset(customer_password_reset, filter) {
	    return request(client.newRequest('/api/customer_password_resets', 'post').setBody(customer_password_reset).setParams(filter));
	}

	updateCustomerPasswordReset(id, customer_password_reset, filter) {
		return request(client.newRequest(`/api/customer_password_resets/${id}`, 'patch').setBody(customer_password_reset).setParams(filter));
	}

	deleteCustomerPasswordReset(id) {
		return request(client.newRequest(`/api/customer_password_resets/${id}`, 'delete'));
	}



	// Customer Payment Source
	listCustomerPaymentSources(filter, options) {
		return request(client.newRequest('/api/customer_payment_sources').setParams(filter).setOptions(options));
	}

	allCustomerPaymentSources(filter, options) {
		return all(this.listCustomerPaymentSources, filter, options);
	}

	retrieveCustomerPaymentSource(id, filter, options) {
		return request(client.newRequest(`/api/customer_payment_sources/${id}`).setParams(filter).setOptions(options));
	}

	createCustomerPaymentSource(customer_payment_source, filter) {
	    return request(client.newRequest('/api/customer_payment_sources', 'post').setBody(customer_payment_source).setParams(filter));
	}

	updateCustomerPaymentSource(id, customer_payment_source, filter) {
		return request(client.newRequest(`/api/customer_payment_sources/${id}`, 'patch').setBody(customer_payment_source).setParams(filter));
	}

	deleteCustomerPaymentSource(id) {
		return request(client.newRequest(`/api/customer_payment_sources/${id}`, 'delete'));
	}



	// Customer Subscription
	listCustomerSubscriptions(filter, options) {
		return request(client.newRequest('/api/customer_subscriptions').setParams(filter).setOptions(options));
	}

	allCustomerSubscriptions(filter, options) {
		return all(this.listCustomerSubscriptions, filter, options);
	}

	retrieveCustomerSubscription(id, filter, options) {
		return request(client.newRequest(`/api/customer_subscriptions/${id}`).setParams(filter).setOptions(options));
	}

	createCustomerSubscription(customer_subscription, filter) {
	    return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription).setParams(filter));
	}

	updateCustomerSubscription(id, customer_subscription, filter) {
		return request(client.newRequest(`/api/customer_subscriptions/${id}`, 'patch').setBody(customer_subscription).setParams(filter));
	}

	deleteCustomerSubscription(id) {
		return request(client.newRequest(`/api/customer_subscriptions/${id}`, 'delete'));
	}



	// Customer
	listCustomers(filter, options) {
		return request(client.newRequest('/api/customers').setParams(filter).setOptions(options));
	}

	allCustomers(filter, options) {
		return all(this.listCustomers, filter, options);
	}

	retrieveCustomer(id, filter, options) {
		return request(client.newRequest(`/api/customers/${id}`).setParams(filter).setOptions(options));
	}

	createCustomer(customer, filter) {
	    return request(client.newRequest('/api/customers', 'post').setBody(customer).setParams(filter));
	}

	updateCustomer(id, customer, filter) {
		return request(client.newRequest(`/api/customers/${id}`, 'patch').setBody(customer).setParams(filter));
	}

	deleteCustomer(id) {
		return request(client.newRequest(`/api/customers/${id}`, 'delete'));
	}



	// Delivery Lead Time
	listDeliveryLeadTimes(filter, options) {
		return request(client.newRequest('/api/delivery_lead_times').setParams(filter).setOptions(options));
	}

	allDeliveryLeadTimes(filter, options) {
		return all(this.listDeliveryLeadTimes, filter, options);
	}

	retrieveDeliveryLeadTime(id, filter, options) {
		return request(client.newRequest(`/api/delivery_lead_times/${id}`).setParams(filter).setOptions(options));
	}

	createDeliveryLeadTime(delivery_lead_time, filter) {
	    return request(client.newRequest('/api/delivery_lead_times', 'post').setBody(delivery_lead_time).setParams(filter));
	}

	updateDeliveryLeadTime(id, delivery_lead_time, filter) {
		return request(client.newRequest(`/api/delivery_lead_times/${id}`, 'patch').setBody(delivery_lead_time).setParams(filter));
	}

	deleteDeliveryLeadTime(id) {
		return request(client.newRequest(`/api/delivery_lead_times/${id}`, 'delete'));
	}



	// Inventory Model
	listInventoryModels(filter, options) {
		return request(client.newRequest('/api/inventory_models').setParams(filter).setOptions(options));
	}

	allInventoryModels(filter, options) {
		return all(this.listInventoryModels, filter, options);
	}

	retrieveInventoryModel(id, filter, options) {
		return request(client.newRequest(`/api/inventory_models/${id}`).setParams(filter).setOptions(options));
	}

	createInventoryModel(inventory_model, filter) {
	    return request(client.newRequest('/api/inventory_models', 'post').setBody(inventory_model).setParams(filter));
	}

	updateInventoryModel(id, inventory_model, filter) {
		return request(client.newRequest(`/api/inventory_models/${id}`, 'patch').setBody(inventory_model).setParams(filter));
	}

	deleteInventoryModel(id) {
		return request(client.newRequest(`/api/inventory_models/${id}`, 'delete'));
	}



	// Line Item Option
	listLineItemOptions(filter, options) {
		return request(client.newRequest('/api/line_item_options').setParams(filter).setOptions(options));
	}

	allLineItemOptions(filter, options) {
		return all(this.listLineItemOptions, filter, options);
	}

	retrieveLineItemOption(id, filter, options) {
		return request(client.newRequest(`/api/line_item_options/${id}`).setParams(filter).setOptions(options));
	}

	createLineItemOption(line_item_option, filter) {
	    return request(client.newRequest('/api/line_item_options', 'post').setBody(line_item_option).setParams(filter));
	}

	updateLineItemOption(id, line_item_option, filter) {
		return request(client.newRequest(`/api/line_item_options/${id}`, 'patch').setBody(line_item_option).setParams(filter));
	}

	deleteLineItemOption(id) {
		return request(client.newRequest(`/api/line_item_options/${id}`, 'delete'));
	}



	// Line Item
	listLineItems(filter, options) {
		return request(client.newRequest('/api/line_items').setParams(filter).setOptions(options));
	}

	allLineItems(filter, options) {
		return all(this.listLineItems, filter, options);
	}

	retrieveLineItem(id, filter, options) {
		return request(client.newRequest(`/api/line_items/${id}`).setParams(filter).setOptions(options));
	}

	createLineItem(line_item, filter) {
	    return request(client.newRequest('/api/line_items', 'post').setBody(line_item).setParams(filter));
	}

	updateLineItem(id, line_item, filter) {
		return request(client.newRequest(`/api/line_items/${id}`, 'patch').setBody(line_item).setParams(filter));
	}

	deleteLineItem(id) {
		return request(client.newRequest(`/api/line_items/${id}`, 'delete'));
	}



	// Market
	listMarkets(filter, options) {
		return request(client.newRequest('/api/markets').setParams(filter).setOptions(options));
	}

	allMarkets(filter, options) {
		return all(this.listMarkets, filter, options);
	}

	retrieveMarket(id, filter, options) {
		return request(client.newRequest(`/api/markets/${id}`).setParams(filter).setOptions(options));
	}

	createMarket(market, filter) {
	    return request(client.newRequest('/api/markets', 'post').setBody(market).setParams(filter));
	}

	updateMarket(id, market, filter) {
		return request(client.newRequest(`/api/markets/${id}`, 'patch').setBody(market).setParams(filter));
	}

	deleteMarket(id) {
		return request(client.newRequest(`/api/markets/${id}`, 'delete'));
	}



	// Merchant
	listMerchants(filter, options) {
		return request(client.newRequest('/api/merchants').setParams(filter).setOptions(options));
	}

	allMerchants(filter, options) {
		return all(this.listMerchants, filter, options);
	}

	retrieveMerchant(id, filter, options) {
		return request(client.newRequest(`/api/merchants/${id}`).setParams(filter).setOptions(options));
	}

	createMerchant(merchant, filter) {
	    return request(client.newRequest('/api/merchants', 'post').setBody(merchant).setParams(filter));
	}

	updateMerchant(id, merchant, filter) {
		return request(client.newRequest(`/api/merchants/${id}`, 'patch').setBody(merchant).setParams(filter));
	}

	deleteMerchant(id) {
		return request(client.newRequest(`/api/merchants/${id}`, 'delete'));
	}



	// Order
	listOrders(filter, options) {
		return request(client.newRequest('/api/orders').setParams(filter).setOptions(options));
	}

	allOrders(filter, options) {
		return all(this.listOrders, filter, options);
	}

	retrieveOrder(id, filter, options) {
		return request(client.newRequest(`/api/orders/${id}`).setParams(filter).setOptions(options));
	}

	createOrder(order, filter) {
	    return request(client.newRequest('/api/orders', 'post').setBody(order).setParams(filter));
	}

	updateOrder(id, order, filter) {
		return request(client.newRequest(`/api/orders/${id}`, 'patch').setBody(order).setParams(filter));
	}

	deleteOrder(id) {
		return request(client.newRequest(`/api/orders/${id}`, 'delete'));
	}



	// Parcel
	listParcels(filter, options) {
		return request(client.newRequest('/api/parcels').setParams(filter).setOptions(options));
	}

	allParcels(filter, options) {
		return all(this.listParcels, filter, options);
	}

	retrieveParcel(id, filter, options) {
		return request(client.newRequest(`/api/parcels/${id}`).setParams(filter).setOptions(options));
	}

	createParcel(parcel, filter) {
	    return request(client.newRequest('/api/parcels', 'post').setBody(parcel).setParams(filter));
	}

	updateParcel(id, parcel, filter) {
		return request(client.newRequest(`/api/parcels/${id}`, 'patch').setBody(parcel).setParams(filter));
	}

	deleteParcel(id) {
		return request(client.newRequest(`/api/parcels/${id}`, 'delete'));
	}



	// Payment Method
	listPaymentMethods(filter, options) {
		return request(client.newRequest('/api/payment_methods').setParams(filter).setOptions(options));
	}

	allPaymentMethods(filter, options) {
		return all(this.listPaymentMethods, filter, options);
	}

	retrievePaymentMethod(id, filter, options) {
		return request(client.newRequest(`/api/payment_methods/${id}`).setParams(filter).setOptions(options));
	}

	createPaymentMethod(payment_method, filter) {
	    return request(client.newRequest('/api/payment_methods', 'post').setBody(payment_method).setParams(filter));
	}

	updatePaymentMethod(id, payment_method, filter) {
		return request(client.newRequest(`/api/payment_methods/${id}`, 'patch').setBody(payment_method).setParams(filter));
	}

	deletePaymentMethod(id) {
		return request(client.newRequest(`/api/payment_methods/${id}`, 'delete'));
	}



	// Paypal Payment
	listPaypalPayments(filter, options) {
		return request(client.newRequest('/api/paypal_payments').setParams(filter).setOptions(options));
	}

	allPaypalPayments(filter, options) {
		return all(this.listPaypalPayments, filter, options);
	}

	retrievePaypalPayment(id, filter, options) {
		return request(client.newRequest(`/api/paypal_payments/${id}`).setParams(filter).setOptions(options));
	}

	createPaypalPayment(paypal_payment, filter) {
	    return request(client.newRequest('/api/paypal_payments', 'post').setBody(paypal_payment).setParams(filter));
	}

	updatePaypalPayment(id, paypal_payment, filter) {
		return request(client.newRequest(`/api/paypal_payments/${id}`, 'patch').setBody(paypal_payment).setParams(filter));
	}

	deletePaypalPayment(id) {
		return request(client.newRequest(`/api/paypal_payments/${id}`, 'delete'));
	}



	// Price List
	listPriceLists(filter, options) {
		return request(client.newRequest('/api/price_lists').setParams(filter).setOptions(options));
	}

	allPriceLists(filter, options) {
		return all(this.listPriceLists, filter, options);
	}

	retrievePriceList(id, filter, options) {
		return request(client.newRequest(`/api/price_lists/${id}`).setParams(filter).setOptions(options));
	}

	createPriceList(price_list, filter) {
	    return request(client.newRequest('/api/price_lists', 'post').setBody(price_list).setParams(filter));
	}

	updatePriceList(id, price_list, filter) {
		return request(client.newRequest(`/api/price_lists/${id}`, 'patch').setBody(price_list).setParams(filter));
	}

	deletePriceList(id) {
		return request(client.newRequest(`/api/price_lists/${id}`, 'delete'));
	}



	// Price
	listPrices(filter, options) {
		return request(client.newRequest('/api/prices').setParams(filter).setOptions(options));
	}

	allPrices(filter, options) {
		return all(this.listPrices, filter, options);
	}

	retrievePrice(id, filter, options) {
		return request(client.newRequest(`/api/prices/${id}`).setParams(filter).setOptions(options));
	}

	createPrice(price, filter) {
	    return request(client.newRequest('/api/prices', 'post').setBody(price).setParams(filter));
	}

	updatePrice(id, price, filter) {
		return request(client.newRequest(`/api/prices/${id}`, 'patch').setBody(price).setParams(filter));
	}

	deletePrice(id) {
		return request(client.newRequest(`/api/prices/${id}`, 'delete'));
	}



	// Shipment
	listShipments(filter, options) {
		return request(client.newRequest('/api/shipments').setParams(filter).setOptions(options));
	}

	allShipments(filter, options) {
		return all(this.listShipments, filter, options);
	}

	retrieveShipment(id, filter, options) {
		return request(client.newRequest(`/api/shipments/${id}`).setParams(filter).setOptions(options));
	}

	createShipment(shipment, filter) {
	    return request(client.newRequest('/api/shipments', 'post').setBody(shipment).setParams(filter));
	}

	updateShipment(id, shipment, filter) {
		return request(client.newRequest(`/api/shipments/${id}`, 'patch').setBody(shipment).setParams(filter));
	}

	deleteShipment(id) {
		return request(client.newRequest(`/api/shipments/${id}`, 'delete'));
	}



	// Shipping Category
	listShippingCategories(filter, options) {
		return request(client.newRequest('/api/shipping_categories').setParams(filter).setOptions(options));
	}

	allShippingCategories(filter, options) {
		return all(this.listShippingCategories, filter, options);
	}

	retrieveShippingCategory(id, filter, options) {
		return request(client.newRequest(`/api/shipping_categories/${id}`).setParams(filter).setOptions(options));
	}

	createShippingCategory(shipping_category, filter) {
	    return request(client.newRequest('/api/shipping_categories', 'post').setBody(shipping_category).setParams(filter));
	}

	updateShippingCategory(id, shipping_category, filter) {
		return request(client.newRequest(`/api/shipping_categories/${id}`, 'patch').setBody(shipping_category).setParams(filter));
	}

	deleteShippingCategory(id) {
		return request(client.newRequest(`/api/shipping_categories/${id}`, 'delete'));
	}



	// Shipping Method
	listShippingMethods(filter, options) {
		return request(client.newRequest('/api/shipping_methods').setParams(filter).setOptions(options));
	}

	allShippingMethods(filter, options) {
		return all(this.listShippingMethods, filter, options);
	}

	retrieveShippingMethod(id, filter, options) {
		return request(client.newRequest(`/api/shipping_methods/${id}`).setParams(filter).setOptions(options));
	}

	createShippingMethod(shipping_method, filter) {
	    return request(client.newRequest('/api/shipping_methods', 'post').setBody(shipping_method).setParams(filter));
	}

	updateShippingMethod(id, shipping_method, filter) {
		return request(client.newRequest(`/api/shipping_methods/${id}`, 'patch').setBody(shipping_method).setParams(filter));
	}

	deleteShippingMethod(id) {
		return request(client.newRequest(`/api/shipping_methods/${id}`, 'delete'));
	}



	// Shipping Zone
	listShippingZones(filter, options) {
		return request(client.newRequest('/api/shipping_zones').setParams(filter).setOptions(options));
	}

	allShippingZones(filter, options) {
		return all(this.listShippingZones, filter, options);
	}

	retrieveShippingZone(id, filter, options) {
		return request(client.newRequest(`/api/shipping_zones/${id}`).setParams(filter).setOptions(options));
	}

	createShippingZone(shipping_zone, filter) {
	    return request(client.newRequest('/api/shipping_zones', 'post').setBody(shipping_zone).setParams(filter));
	}

	updateShippingZone(id, shipping_zone, filter) {
		return request(client.newRequest(`/api/shipping_zones/${id}`, 'patch').setBody(shipping_zone).setParams(filter));
	}

	deleteShippingZone(id) {
		return request(client.newRequest(`/api/shipping_zones/${id}`, 'delete'));
	}



	// Sku Option
	listSkuOptions(filter, options) {
		return request(client.newRequest('/api/sku_options').setParams(filter).setOptions(options));
	}

	allSkuOptions(filter, options) {
		return all(this.listSkuOptions, filter, options);
	}

	retrieveSkuOption(id, filter, options) {
		return request(client.newRequest(`/api/sku_options/${id}`).setParams(filter).setOptions(options));
	}

	createSkuOption(sku_option, filter) {
	    return request(client.newRequest('/api/sku_options', 'post').setBody(sku_option).setParams(filter));
	}

	updateSkuOption(id, sku_option, filter) {
		return request(client.newRequest(`/api/sku_options/${id}`, 'patch').setBody(sku_option).setParams(filter));
	}

	deleteSkuOption(id) {
		return request(client.newRequest(`/api/sku_options/${id}`, 'delete'));
	}



	// Sku
	listSkus(filter, options) {
		return request(client.newRequest('/api/skus').setParams(filter).setOptions(options));
	}

	allSkus(filter, options) {
		return all(this.listSkus, filter, options);
	}

	retrieveSku(id, filter, options) {
		return request(client.newRequest(`/api/skus/${id}`).setParams(filter).setOptions(options));
	}

	createSku(sku, filter) {
	    return request(client.newRequest('/api/skus', 'post').setBody(sku).setParams(filter));
	}

	updateSku(id, sku, filter) {
		return request(client.newRequest(`/api/skus/${id}`, 'patch').setBody(sku).setParams(filter));
	}

	deleteSku(id) {
		return request(client.newRequest(`/api/skus/${id}`, 'delete'));
	}



	// Stock Item
	listStockItems(filter, options) {
		return request(client.newRequest('/api/stock_items').setParams(filter).setOptions(options));
	}

	allStockItems(filter, options) {
		return all(this.listStockItems, filter, options);
	}

	retrieveStockItem(id, filter, options) {
		return request(client.newRequest(`/api/stock_items/${id}`).setParams(filter).setOptions(options));
	}

	createStockItem(stock_item, filter) {
	    return request(client.newRequest('/api/stock_items', 'post').setBody(stock_item).setParams(filter));
	}

	updateStockItem(id, stock_item, filter) {
		return request(client.newRequest(`/api/stock_items/${id}`, 'patch').setBody(stock_item).setParams(filter));
	}

	deleteStockItem(id) {
		return request(client.newRequest(`/api/stock_items/${id}`, 'delete'));
	}



	// Stock Level
	listStockLevels(filter, options) {
		return request(client.newRequest('/api/stock_levels').setParams(filter).setOptions(options));
	}

	allStockLevels(filter, options) {
		return all(this.listStockLevels, filter, options);
	}

	retrieveStockLevel(id, filter, options) {
		return request(client.newRequest(`/api/stock_levels/${id}`).setParams(filter).setOptions(options));
	}

	createStockLevel(stock_level, filter) {
	    return request(client.newRequest('/api/stock_levels', 'post').setBody(stock_level).setParams(filter));
	}

	updateStockLevel(id, stock_level, filter) {
		return request(client.newRequest(`/api/stock_levels/${id}`, 'patch').setBody(stock_level).setParams(filter));
	}

	deleteStockLevel(id) {
		return request(client.newRequest(`/api/stock_levels/${id}`, 'delete'));
	}



	// Stock Location
	listStockLocations(filter, options) {
		return request(client.newRequest('/api/stock_locations').setParams(filter).setOptions(options));
	}

	allStockLocations(filter, options) {
		return all(this.listStockLocations, filter, options);
	}

	retrieveStockLocation(id, filter, options) {
		return request(client.newRequest(`/api/stock_locations/${id}`).setParams(filter).setOptions(options));
	}

	createStockLocation(stock_location, filter) {
	    return request(client.newRequest('/api/stock_locations', 'post').setBody(stock_location).setParams(filter));
	}

	updateStockLocation(id, stock_location, filter) {
		return request(client.newRequest(`/api/stock_locations/${id}`, 'patch').setBody(stock_location).setParams(filter));
	}

	deleteStockLocation(id) {
		return request(client.newRequest(`/api/stock_locations/${id}`, 'delete'));
	}



	// Webhook
	listWebhooks(filter, options) {
		return request(client.newRequest('/api/webhooks').setParams(filter).setOptions(options));
	}

	allWebhooks(filter, options) {
		return all(this.listWebhooks, filter, options);
	}

	retrieveWebhook(id, filter, options) {
		return request(client.newRequest(`/api/webhooks/${id}`).setParams(filter).setOptions(options));
	}

	createWebhook(webhook, filter) {
	    return request(client.newRequest('/api/webhooks', 'post').setBody(webhook).setParams(filter));
	}

	updateWebhook(id, webhook, filter) {
		return request(client.newRequest(`/api/webhooks/${id}`, 'patch').setBody(webhook).setParams(filter));
	}

	deleteWebhook(id) {
		return request(client.newRequest(`/api/webhooks/${id}`, 'delete'));
	}



	// Wire Transfer
	listWireTransfers(filter, options) {
		return request(client.newRequest('/api/wire_transfers').setParams(filter).setOptions(options));
	}

	allWireTransfers(filter, options) {
		return all(this.listWireTransfers, filter, options);
	}

	retrieveWireTransfer(id, filter, options) {
		return request(client.newRequest(`/api/wire_transfers/${id}`).setParams(filter).setOptions(options));
	}

	createWireTransfer(wire_transfer, filter) {
	    return request(client.newRequest('/api/wire_transfers', 'post').setBody(wire_transfer).setParams(filter));
	}

	updateWireTransfer(id, wire_transfer, filter) {
		return request(client.newRequest(`/api/wire_transfers/${id}`, 'patch').setBody(wire_transfer).setParams(filter));
	}

	deleteWireTransfer(id) {
		return request(client.newRequest(`/api/wire_transfers/${id}`, 'delete'));
	}


}


var api = new CLApi();

module.exports.clapi = api;

module.exports.initialize = (cfg) => {
    log.msg('api client initialized with config:');
    log.msg(cfg);
    api.client =  client.newInstance(cfg);
}


function request(apiRequest) {

    log.msg(`[${apiRequest.correlation_id}.${apiRequest.attempt}] calling ${apiRequest.path} ...`);

    if (api.client == undefined) return Promise.reject(newError(undefined, 'api not initialized'));
    else {
        let body = jsonapi.serialize(apiRequest.body);
        apiRequest.setBody(body);
        return api.client.call(apiRequest)
            .then(apiResponse => { return response(apiResponse, apiRequest.response_type); })
            .catch(apiError => { return error(apiError); })
    }
}


function response(apiResponse, response_type) {
	if (response_type == undefined) return apiResponse;
	else
		switch (response_type) {
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


function error(apiError) {
	if (!apiError.response) return apiError;
	else
	if (apiError.response.data && apiError.response.data.errors) {
		return Promise.reject(errorResponse(apiError.response.status).addApiErrors(apiError.response.data.errors));
	}
	else return Promise.reject(errorResponse(apiError.response.status, apiError.response.statusText));
}


function data(res) {
	if (res.isApiResource && (res.isApiResource() === true)) return res;
	else
	if (res.dataset) return res.dataset.data;
	else
	if (res.data) return (res.data.data)? res.data.data : res.data;
	else return res;
}


async function all(listFunction, filter = {}, options = {}) {

    if ((listFunction == undefined) || !listFunction.name.startsWith('list')) return Promise.reject("Undefined 'list' API function");
    
    function setPage(filter, size = filter.page_size || 10, number = 1) {
		
        if (filter.isQueryFilter && (filter.isQueryFilter() === true)) filter.page(number, size);
        else {
            filter['page[size]'] = size;
            filter['page[number]'] = number;
        }
    }

    setPage(filter);
	
	// Save original option and forxe response_type to 'raw'
	let response_type = options.response_type;
	options.response_type = 'raw';

	// log.msg(`all()-->${listFunction.name} page 1`);

    let firstPage = await listFunction(filter, options);

    const max_page = firstPage.data.meta.page_count;
	const page_size = firstPage.data.data.length;
	
	let pages = new Array(max_page);
    pages[0] = response(firstPage, response_type);

	// Standard listFunction response
	if (max_page == 1) return pages[0];    
    
   
    for (pn = 1; pn < max_page; pn++) {
		// log.msg(`all()-->${listFunction.name} page ${pn+1}`);
        setPage(filter, page_size, pn+1);
        pages[pn] = listFunction(filter, options);
    }
    
	// Set original option
	options.response_type = response_type;

	let out = [];

    (await Promise.all(pages)).forEach(p => { out = out.concat(data(response(p, response_type))) });

    return out;

}
