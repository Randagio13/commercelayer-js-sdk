
const commercelayer = require('../index')
const utils = require('../lib/utils')

let map1 = {
    key1 : "val1",
    key2 : "val2"
}

let map2 = undefined;

console.log(utils.extendMap(map2, map1))

