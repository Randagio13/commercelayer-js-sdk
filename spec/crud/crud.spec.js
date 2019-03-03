// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen

const commercelayer = require('../../index')
const config = require('../support/config')
const crud = require('./crud.core')
const suites = require('./crud.suite');


commercelayer.initialize(config);
commercelayer.settings.response_type = 'normalized'


Object.keys(suites).forEach(suite => {
    if (suites[suite].enabled) {
        describe(suite, function() {
            suites[suite].tests.forEach(test => crud.test(suite, test, suites[suite].model));
        });
    }
})  
