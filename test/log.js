const test = require('./test')
const log = require('../lib/log')
const sdk = require('../lib/config').sdk

log.probe();
console.log('printing message 1 ...');
log.msg('message 1');
sdk.debug = false;
console.log('printing message 2 ...');
log.msg('message 2');
log.probe();