const commercelayer = require('../index')
const test = require('./test')


commercelayer.initialize(test.config);

// test.separator('listDeliveryLeadTimes()');
// test.execute(commercelayer.listDeliveryLeadTimes());


test.separator('retrieveDeliveryLeadTime()');
test.execute(commercelayer.retrieveDeliveryLeadTime(560));
