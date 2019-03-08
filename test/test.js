
const util = require('util')
const commercelayer = require('../index')

commercelayer.settings.debug = true;
commercelayer.settings.console = true;
commercelayer.settings.trace = true;

const log_enabled = commercelayer.settings.debug && commercelayer.settings.console;
const inspect_enabled = true;

const cfg = {
    // client_id: '',
    // market_id: '',
    client_id: '',
	client_secret: '',
    market_id: null,
    base_url : "https://static-commerce.commercelayer.io",
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

module.exports.inspect = (obj) => {
    console.log(util.inspect(obj, false, null, true));
}
