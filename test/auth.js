const commercelayer = require('../index')
const test = require('./test')

test.config.authentication = commercelayer.auth.Password({
    client_id: 'cid',
    client_secret: 'csec',
    username: 'pippo',
    password: 'pluto'
})

commercelayer.initialize(test.config);

let qf = new commercelayer.query.QueryFilter();
qf.include('market', 'customer', 'line_items');


test.separator('retrieveOrder()');
test.execute(commercelayer.retrieveOrder(9839, qf));