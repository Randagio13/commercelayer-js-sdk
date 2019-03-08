
const log = require('../lib/log')


const a = undefined;
const b = null;
let c;

log.msg(a === undefined);
log.msg(b === undefined);
log.msg(c ===  undefined);