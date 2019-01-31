const commercelayer = require('../index')
const test = require('./test')

commercelayer.initialize(test.config);

// test.separator('listShippingMethods()');
// test.execute(commercelayer.listShippingMethods());


test.separator('retrieveShippingMethod()');
test.execute(commercelayer.retrieveShippingMethod(336));
