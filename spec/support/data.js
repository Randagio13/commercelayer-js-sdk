const model = require('../../lib/model');
const utils = require('./utils')


const Addresses = {
    retrieve: {
        id: ""
    },
    update: {
        id: "",
        notes: utils.randomText()
    },
    create: {
        line_1: "2883 Geraldine Lane",
        city: "New York",
        zip_code: "10013",
        state_code: "NY",
        country_code: "US",
        phone: "(212) 646-338-1228"
    }
}


const CreditCards = {
    retrieve: {
        id: ""
    },
    update: {
        id: ""
    },
    create: {
        
    }
}


const Orders = {
    retrieve: {
        id: "9839"
    },
    update: {
        id: "9839",
        guest: false,
        customer_email: "pippo@server.com",
        market: new model.Market(185)
    },
    create: {
        market: new model.Market(185)
    }
};

module.exports = {
  Orders
};
