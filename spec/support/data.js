const model = require('../../lib/model')

const Orders = {
    retrieve : {
        id : '9839'
    },
    update : {
        id : '9839',
        fields : {
            id : '9839',
            guest : false,
            customer_email : 'pippo@server.com',
            market : new model.Market(185)
        }
    }
}

module.exports = {
    Orders
}