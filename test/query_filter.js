
const query = require('../index').query
const queryx = require('../lib/queryx')


// let qf = new query.QueryFilter()
let qf = new queryx.QueryExpression()
    .filter('filtro1', 'val1')
    .filter('filtro2', 'val2')
    .filters({'filtro3':'val3', 'filtro4':'val4', 'filtro5':'val5'})
    .include('res1', 'res2')
    .include(['res3', 'res4'])
    .fields('res1', 'field1.1', 'field1.2')
    .fields('res2', ['field2.1', 'field2.2'])
    .sort('sort1')
    .sort('sort2', true)
    .sort('sort3', false)
    .param('key1', 'val1')
    .param('key2', 'val2')
    .params({'key3':'val3', 'key4':'val4', 'key5':'val5'})
    .page(2, 10)
    .predicate('eq', 'PIPPO', 'first_name', 'last_name')
    ._gt(50, 'age')


console.log('build()')
console.log(qf.build())
console.log()
console.log('build(join)')
console.log(qf.build(true))