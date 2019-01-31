const commercelayer = require('../index')
const test = require('./test')

commercelayer.initialize(test.config);

// test.separator('listPrices()');
// test.execute(commercelayer.listPrices());


test.separator('retrievePrice()');
test.execute(commercelayer.retrievePrice(44596));
