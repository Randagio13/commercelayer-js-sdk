const commercelayer = require('../index')
const test = require('./test')

test.config.access_token = 'pippo';

commercelayer.initialize(test.config);

let qf = new commercelayer.query.QueryFilter()
    .filter('codes', ['TSHIRTMM000000E63E74MXXX',
    'TSHIRTMM000000E63E74LXXX',
    'TSHIRTMM000000E63E74XLXX',
    'TSHIRTMM000000FFFFFFMXXX'])
    .include('prices')
    .page(null, 25);


commercelayer.listSkus(qf).then(response => { console.log('1111111111'+response.get('code')) }).catch(err => console.log(err));