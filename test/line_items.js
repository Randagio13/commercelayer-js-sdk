const commercelayer = require('../index')
const test = require('./test')

commercelayer.initialize(test.config);

// test.separator('listLineItems()');
// test.execute(commercelayer.listLineItems());


// test.separator('retrieveLineItem()');
// test.execute(commercelayer.retrieveLineItem(35169));


// test.separator('createLineItem()');
// let line_item = new commercelayer.model.LineItem();

// line_item.name = 'Prodotto';
// line_item.order = new commercelayer.model.Order(9839);

// line_item.item = new commercelayer.model.Sku(31472);
// line_item.quantity=1;

// test.execute(commercelayer.createLineItem(line_item));


test.separator('deleteLineItem()');
test.execute(commercelayer.deleteLineItem(44148))


