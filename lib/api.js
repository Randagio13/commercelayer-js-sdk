const client = require('./client')
const utils = require('./utils')
const jsonapi = require('./jsonapi')


 class CLApi {

    // Skus
    /**
     * 
     * @param {*} filter 
     */
    listSkus(filter, options) {
        return request(client.newRequest('/api/skus').setParams(filter).setOptions(options));
    }

    /**
     * 
     * @param {s} id 
     * @param {*} filter 
     */
    retrieveSku(id, filter, options) {
        return request(client.newRequest(`/api/skus/${id}`).setParams(filter).setOptions(options));
    }

    // Prices
    listPrices(filter, options) {
        return request(client.newRequest('/api/prices').setParams(filter).setOptions(options));
    }

    retrievePrice(id, filter, options) {
        return request(client.newRequest(`/api/prices/${id}`).setParams(filter).setOptions(options));
    }

    // Stock Items
    listStockItems(filter, options) {
        return request(client.newRequest('/api/stock_items').setParams(filter).setOptions(options));
    }

    retrieveStockItem(id, filter, options) {
        return request(client.newRequest(`/api/stock_items/${id}`).setParams(filter).setOptions(options));
    }

    // Delivery Lead Times
    listDeliveryLeadTimes(filter, options) {
        return request(client.newRequest('/api/delivery_lead_times').setParams(filter).setOptions(options));
    }

    retrieveDeliveryLeadTime(id, filter, options) {
        return request(client.newRequest(`/api/delivery_lead_times/${id}`).setParams(filter).setOptions(options));
    }

    // Shipping Methods
    listShippingMethods(filter) {
        return request(client.newRequest('/api/shipping_methods').setParams(filter));
    }

    retrieveShippingMethod(id, filter, options) {
        return request(client.newRequest(`/api/shipping_methods/${id}`).setParams(filter).setOptions(options));
    }

    // Payment Methods
    listPaymentMethods(filter, options) {
        return request(client.newRequest('/api/payment_methods').setParams(filter).setOptions(options));
    }

    retrievePaymentMethod(id, filter, options) {
        return request(client.newRequest(`/api/payment_methods/${id}`).setParams(filter).setOptions(options));
    }

    // Orders
    listOrders(filter, options) {
        return request(client.newRequest('/api/orders').setParams(filter).setOptions(options));
    }

    retrieveOrder(id, filter, options) {
        return request(client.newRequest(`/api/orders/${id}`).setParams(filter).setOptions(options));
    }

    createOrder(order) {
        return request(client.newRequest('/api/orders', 'post').setBody(order));
    }

    // Line Items
    listLineItems(filter, options) {
        return request(client.newRequest('/api/line_items').setParams(filter).setOptions(options));
    }

    retrieveLineItem(id, filter) {
        return request(client.newRequest(`/api/line_items/${id}`).setParams(filter).setOptions(options));
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
            .then(response => { return apiRequest.raw_response? response.data : jsonapi.deserialize(response.data); })
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
