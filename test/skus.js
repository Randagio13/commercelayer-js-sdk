const commercelayer = require('../index')
const test = require('./test')

//  test.config.access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjEzNn0sImFwcGxpY2F0aW9uIjp7ImlkIjoxOTYsImtpbmQiOiJjaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNTQ4NTIxOTYzLCJtYXJrZXQiOnsiaWQiOjE4NSwicHJpY2VfbGlzdF9pZCI6MTgxLCJzdG9ja19sb2NhdGlvbl9pZHMiOlsyOTEsMjg5XSwiZ2VvY29kZXJfaWQiOm51bGx9LCJyYW5kIjowLjM2NTcxODU2MjY1MzE1ODgzfQ.6pSiUfsP9UNApTF-VqIJRAH_lxifYL9Ikg9p-6C66h3yRFrqaR9fhpVekCrzXk8cAdLHTqekY5ZYEFNJwekfnQ';

commercelayer.initialize(test.config);

// test.separator('listSkus()');

// api/skus?filter[codes]=' + skuCodes.join(',') +'&include=prices&page[size]=25

// let qf = new commercelayer.query.QueryFilter()
//     .filter('codes', ['TSHIRTMM000000E63E74MXXX',
//     'TSHIRTMM000000E63E74LXXX',
//     'TSHIRTMM000000E63E74XLXX',
//     'TSHIRTMM000000FFFFFFMXXX'])
//     .include('prices')
//     .page(null, 25);

// test.execute(commercelayer.listSkus())
// .then(response => {
//     if (!commercelayer.settings.raw_response) console.log(response.get('code'))
// });


// test.separator('retrieveSku()');
// test.execute(commercelayer.retrieveSku(31472), false);



// commercelayer.listSkus(qf).then(response => { console.log('1111111111'+response.get('code')) }).catch(err => console.log(err));
// commercelayer.listSkus(qf).then(response => { console.log('2222222222'+response.get('code')) }).catch(err => console.log(err));
// commercelayer.listSkus(qf).then(response => { console.log('3333333333'+response.get('code')) }).catch(err => console.log(err));
// commercelayer.listSkus(qf).then(response => { console.log('4444444444'+response.get('code')) }).catch(err => console.log(err));


test.separator('allSkus()');
test.execute(commercelayer.allSkus(undefined, { response_type : 'normalized' }));