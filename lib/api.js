const client = require('./client')
const utils = require('./utils')
const jsonapi = require('./jsonapi')
const sdk = require('./config').sdk


 class CLApi {

    // Skus
    /**
     * 
     * @param {*} filter 
     */
    listSkus(filter) {
        return request(client.newRequest('/api/skus').setParams(filter));
    }

    /**
     * 
     * @param {s} id 
     * @param {*} filter 
     */
    retrieveSku(id, filter) {
        return request(client.newRequest(`/api/skus/${id}`).setParams(filter));
    }

    // Prices
    listPrices(filter) {
        return request(client.newRequest('/api/prices').setParams(filter));
    }

    retrievePrice(id) {
        return request(client.newRequest(`/api/prices/${id}`));
    }

    // Stock Items
    listStockItems(filter) {
        return request(client.newRequest('/api/stock_items').setParams(filter));
    }

    retrieveStockItem(id) {
        return request(client.newRequest(`/api/stock_items/${id}`));
    }

    // Delivery Lead Times
    listDeliveryLeadTimes(filter) {
        return request(client.newRequest('/api/delivery_lead_times').setParams(filter));
    }

    retrieveDeliveryLeadTime(id) {
        return request(client.newRequest(`/api/delivery_lead_times/${id}`));
    }

    // Shipping Methods
    listShippingMethods(filter) {
        return request(client.newRequest('/api/shipping_methods').setParams(filter));
    }

    retrieveShippingMethod(id) {
        return request(client.newRequest(`/api/shipping_methods/${id}`));
    }

    // Payment Methods
    listPaymentMethods(filter) {
        return request(client.newRequest('/api/payment_methods').setParams(filter));
    }

    retrievePaymentMethod(id) {
        return request(client.newRequest(`/api/payment_methods/${id}`));
    }

    // Orders
    listOrders(filter) {
        return request(client.newRequest('/api/orders').setParams(filter));
    }

    retrieveOrder(id, filter) {
        return request(client.newRequest(`/api/orders/${id}`).setParams(filter));
    }

    createOrder(order) {
        return request(client.newRequest('/api/orders', 'post').setBody(order));
    }

    // Line Items
    listLineItems(filter) {
        return request(client.newRequest('/api/line_items').setParams(filter));
    }

    retrieveLineItem(id, filter) {
        return request(client.newRequest(`/api/line_items/${id}`).setParams(filter));
    }

    createLineItem(line_item) {
        return request(client.newRequest('/api/line_items', 'post').setBody(line_item));
    }

    updateLineItem(id, line_item) {
        return request(client.newRequest(`/api/line_items/${id}`, 'patch').setBody(line_item));
    }

    deleteLineItem(id) {
        return request(client.newRequest(`/api/line_items/${id}`, 'delete'));
    }

    // Customers
    createCustomer(customer) {
        return request(client.newRequest('/api/customers', 'post').setBody(customer));
    }

    // Customer Subscriptions
    createCustomerSubscription(customer_subscription) {
        return request(client.newRequest('/api/customer_subscriptions', 'post').setBody(customer_subscription));
    }

}

var api = new CLApi();

module.exports.clapi = api;

module.exports.initialize = (cfg) => {
    utils.log('api client initialized with config:');
    utils.log(cfg);
    api.client =  client.newInstance(cfg);
}


function request(apiRequest) {

    utils.log(`[${apiRequest.correlation_id}.${apiRequest.attempt}] calling ${apiRequest.path} ...`);

    if (api.client == undefined) return Promise.reject(newError(undefined, 'api not initialized'));
    else {
        let body = jsonapi.serialize(apiRequest.body);
        apiRequest.setBody(body);
        return api.client.call(apiRequest)
            .then(response => { return sdk.raw_response? response.data : jsonapi.deserialize(response.data); })
            .catch(error => {
                if (!error.response) return error;
                else
                if (error.response.data && error.response.data.errors) {
                    const api_error = error.response.data.errors[0];
                    return Promise.reject(newError(api_error.status, api_error.title, api_error.detail, api_error.code))
                }
                else return Promise.reject(newError(error.response.status, error.response.statusText))
        })
    }
}


function newError(status, description, message, code) {
    return {
        error : true,
        status : status,
        description : description,
        message : message,
        code : code
    }
}
