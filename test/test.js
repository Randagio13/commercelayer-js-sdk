
const util = require('util')
const commercelayer = require('../index')


commercelayer.settings.debug = true;
commercelayer.settings.console = true;
commercelayer.settings.trace = false;

const log_enabled = true;
const inspect_enabled = false;

const testAuth = require('./test.auth')

const cfg = {
<<<<<<< HEAD
    authentication : commercelayer.auth.ClientCredentials(
        '82acede30b1083bd9c83ed8d15b81efe94afbcbaf75a4979eb0968c55a8bd1ad',
        'd020c7b44f994b54412e43dd792519770dbc5b84eb4b37a3569ee0cd49b6be16'
    ),
=======
    authentication : testAuth,
    client_id: null,
	client_secret: null,
>>>>>>> b5eaf640048277682ea03f3c97dec4b3e72daeb6
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
