
const query = require('../../index').query
const model = require('../../index').model

module.exports = {

    buildQF : (data) => {
        let qf = query.newInstance();
        Object.keys(data).forEach(field => {
            if (model.helper.isApiResource(field)) qf.include(field);
        })
        return qf;
    }

}