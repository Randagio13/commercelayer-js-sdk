
const query = require('../lib/query')


let qf = new query.QueryFilter()
    .filter('filtro1', 'val1')
    .filter('filtro2', 'val2')
    .include('res1', 'res2')
    .include(['res3', 'res4'])
    .fields('res1', 'field1.1', 'field1.2')
    .fields('res2', ['field2.1', 'field2.2'])
    .sort('sort1')
    .sort('sort2', true)
    .sort('sort3', false)
    .param('key1', 'val1')
    .param('key2', 'val2')
    .page(2, 10)


console.log('build()')
console.log(qf.build())
console.log()
console.log('build(join)')
console.log(qf.build(true))