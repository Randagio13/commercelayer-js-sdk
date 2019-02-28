
const util = require('util')
const commercelayer = require('../index')

commercelayer.settings.debug = true;
commercelayer.settings.console = true;
commercelayer.settings.trace = true;

const log_enabled = commercelayer.settings.debug && commercelayer.settings.console;
const inspect_enabled = true;

const cfg = {
    // client_id: '351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534',
    // market_id: '185',
    client_id: '82acede30b1083bd9c83ed8d15b81efe94afbcbaf75a4979eb0968c55a8bd1ad',
	client_secret: 'd020c7b44f994b54412e43dd792519770dbc5b84eb4b37a3569ee0cd49b6be16',
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
