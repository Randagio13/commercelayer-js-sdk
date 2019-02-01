
const commercelayer = require('../index')
const utils = require('../lib/utils')
var max = 0;
var min = 1000;
for (i=0;i<1000000;i++) {
    let x = Math.random().toString(36).slice(2);
if (x.length > max) max = x.length;
if (x.length < min) min = x.length;
    let id = (Date.now().toString(36) +'-'+ Math.random().toString(36).slice(2).substr(0, 6)).toUpperCase()
    // let id = Math.random().toString(36).slice(2);
    console.log(id);
}

console.log(min+'-'+max)