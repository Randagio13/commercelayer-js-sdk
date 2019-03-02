
const query = require('../../index').query
const model = require('../../index').model

const randomWords = require('random-words')


module.exports = {

    buildQF : (data) => {
        let qf = query.newInstance();
        Object.keys(data).forEach(field => {
            if (model.helper.isApiResource(field)) qf.include(field);
        })
        return qf;
    },

    missingRequiredData : (test) => { console.log('Test ' + test + ' skipped: missing required test data') },

    missingRequiredPermission : (test) => { console.log('Test ' + test + ' skipped: missing required resource permission') },

    randomString : () => { return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) },

    randomWords : (options) => { return randomWords(options) },

    randomText : (options) => { return randomWords({ min: options.min || 3, max: options.max || 10, join: ' ' }) }

}