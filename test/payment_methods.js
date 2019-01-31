const commercelayer = require('../index')
const test = require('./test')

commercelayer.initialize(test.config);

test.separator('listPaymentMethods()');
test.execute(commercelayer.listPaymentMethods());


test.separator('retrievePaymentMethod()');
test.execute(commercelayer.retrievePaymentMethod(194));
