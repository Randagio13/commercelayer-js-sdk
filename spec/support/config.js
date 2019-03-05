
const commercelayer = require('../../index')


const config = {
    client_id: '82acede30b1083bd9c83ed8d15b81efe94afbcbaf75a4979eb0968c55a8bd1ad',
	client_secret: 'd020c7b44f994b54412e43dd792519770dbc5b84eb4b37a3569ee0cd49b6be16',
    market_id: null,
    base_url : "https://static-commerce.commercelayer.io",
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