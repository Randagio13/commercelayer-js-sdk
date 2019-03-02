
const query = require('../../index').query
const model = require('../../index').model

const randomWords = require('random-words')


const func = {

    buildQueryFilter : (data) => {
        let qf = undefined;
        Object.keys(data).forEach(field => {
            if (model.helper.isApiResource(data[field])) {
                if (qf == undefined) qf = query.newInstance();
                qf.include(field);
            }
        })
        return qf;
    },

    capitalize : (str) => { return (typeof str !== 'string')? '' :  str.charAt(0).toUpperCase() + str.slice(1); },

    missingRequiredData : (spec, test) => { console.log(`Test ${spec}.${test} skipped: missing required test data`) },

    missingRequiredPermission : (spec, test) => { console.log(`Test ${spec}.${test} skipped: missing required resource permission`) },

    randomString : () => { return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) },

    randomWords : (options) => { return randomWords(options) },

    randomText : (options = {min: 3, max: 10}) => { options.join = ' '; return randomWords(options) },

    randomNumber : (max) => { return Math.floor(Math.random() * (max && (max > 0))? max : 1) },

    toString : (val) => { return (val == undefined)? val : val.toString() }

}


module.exports = func;