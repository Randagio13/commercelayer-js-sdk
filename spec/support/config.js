
const commercelayer = require('../../index')


const specAuth = require('./config.auth')

const config = {
    authentication: specAuth,
    client_id: null,
	client_secret: null,
    market_id: null,
    base_url: "https://static-commerce.commercelayer.io",
}


commercelayer.initialize(config);
commercelayer.settings.response_type = 'normalized'


function checkSuites(suites = {}) {
    commercelayer.model.helper.allElements().forEach(el => {
        let found = false;
        Object.keys(suites).forEach(suite => {
            if (suites[suite].model == el) found = true;
            return found;
        })
        if (!found) console.log('Warning: ' + el + ' not found in test suites');
    })
}


module.exports = {
    init : (suites) => { checkSuites(suites); }
}