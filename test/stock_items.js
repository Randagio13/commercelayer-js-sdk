const commercelayer = require('../index')
const test = require('./test')

commercelayer.initialize(test.config);

// test.separator('listStockItems()');
// test.execute(commercelayer.listStockItems());


test.separator('retrieveStockItem()');
test.execute(commercelayer.retrieveStockItem(49964)).then(out => {
    console.log('sku_code: ' + out.get('sku_code'));
});
