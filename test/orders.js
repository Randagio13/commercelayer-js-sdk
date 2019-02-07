const commercelayer = require('../index')
const test = require('./test')

// test.config.access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjEzNn0sImFwcGxpY2F0aW9uIjp7ImlkIjoxOTYsImtpbmQiOiJjaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNTQ4NTgzMTE2LCJtYXJrZXQiOnsiaWQiOjE4NSwicHJpY2VfbGlzdF9pZCI6MTgxLCJzdG9ja19sb2NhdGlvbl9pZHMiOlsyOTEsMjg5XSwiZ2VvY29kZXJfaWQiOm51bGx9LCJyYW5kIjowLjk2NjQ1Mjg4NzkzNzUxMjV9.OGn8xGe9AKp26yZFrBvh9s12vnOfxnX206MOMI7gLZ0pacxCaut7yn_wA-mxANQtHVQC-5T7ZREeWwqnSftP';

commercelayer.initialize(test.config);

// test.separator('listOrders()');
// test.execute(commercelayer.listOrders());


// test.separator('retrieveOrder()');
// test.execute(commercelayer.retrieveOrder(9839));


// test.separator('crerateOrder()');
// let order = new commercelayer.model.Order();
// order.cart_url = 'https://commercelayer.io';
// order.return_url = 'https://commercelayer.io';
// order.privacy_url = 'https://commercelayer.io';
// order.terms_url = 'https://commercelayer.io';

// let address = new commercelayer.model.Address(100);
// order.shipping_address = address;

// let market = new commercelayer.model.Market(200);
// order.market = market;

// order = {
//     data: {
//       type: 'orders',
//       attributes: {
//         shipping_country_code_lock: 'US',
//         language_code: 'en',
//         cart_url: 'https://commercelayer.io',
//         return_url: 'https://commercelayer.io',
//         privacy_url: 'https://commercelayer.io',
//         terms_url: 'https://commercelayer.io'
//       }
//     }
//   };

// test.execute(commercelayer.createOrder(order));


test.separator('allOrders()');
test.execute(commercelayer.allOrders());