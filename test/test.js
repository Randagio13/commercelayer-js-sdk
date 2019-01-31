
const util = require('util')

const log_enabled = true;
const inspect_enabled = false;

const cfg = {
    client_id: '351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534',
    market_id: '185'
}

module.exports.config = cfg;

module.exports.separator = (text) => {
    let line = '********************';
    if (text != undefined) line = line.concat(' ' + text + ' ');
    line = line.concat('********************');
    console.log(line);
}

module.exports.execute = (promise, log = log_enabled, inspect = inspect_enabled) => {
    if (!log) console.log('[test output log suppressed]');
    return promise
        .then((response) => { if (log) console.log('RESPONSE: '); return response; })
        .catch((error) => { if (log) console.log('ERROR: '); return error; })
        .then((output) => { if (log) console.log(inspect? util.inspect(output, false, null, true /* enable colors */) : output); return output; })
        .finally(() => { console.log('end of api test call.'); console.log(); });
}
