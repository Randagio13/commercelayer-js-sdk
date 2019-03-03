const commercelayer = require('../../index')
const permissions = require('../support/permissions')
const data = require('./crud.data')
const utils = require('../support/utils')


let tests = {

    create : (spec, model) => {

        const test = 'create';
  
        if (permissions[spec] && permissions[spec].includes(test))
        if (data[spec] && data[spec][test])
            it(test, function() {
                return commercelayer[test+model](new commercelayer.model[model]().setFields(data[spec][test]))
                    .then(response => {
                        const id = response.get('id');
                        expect(id).not.toBeNull();
                    })
            });
        else utils.missingRequiredData(spec, test)
        else utils.missingRequiredPermission(spec, test)
	
    },

    retrieve : (spec, model) => {
    
        const test = 'retrieve';
        
        if (permissions[spec] && permissions[spec].includes(test))
        if (data[spec] && data[spec][test])
            it(test, function() {
                return commercelayer[test+model](data[spec][test].id)
                    .then(response => {
                        expect(response.get('id')).toBe(data[spec][test].id.toString())
                    })
            });
        else utils.missingRequiredData(spec, test)
        else utils.missingRequiredPermission(spec, test)
    
    },
    
    update : (spec, model) => {

        const test = 'update';

        if (permissions[spec] && permissions[spec].includes(test))
        if (data[spec] && data[spec][test])
            it(test, function() {
                let qf = utils.buildQueryFilter(data[spec][test]);
                let res = new commercelayer.model[model]().setFields(data[spec][test]);
                return commercelayer[test+model](data[spec][test].id, res, qf)
                    .then(response => {
                        Object.keys(data[spec][test]).forEach(field => {
                            if (commercelayer.model.helper.isApiResource(data[spec][test][field]))
                                expect(response.get([field+'.id'])[field].id).toBe(data[spec][test][field].id.toString())
                            else
                                expect(utils.toString(response.get(field))).toBe(data[spec][test][field].toString())
                        })
                    })
            });
        else utils.missingRequiredData(spec, test)
        else utils.missingRequiredPermission(spec, test)

	},

    list : (spec, model) => {

        const test = 'list';

        if (permissions[spec] && permissions[spec].includes(test))
            it(test, function() {
                return commercelayer[test+spec]()
                    .then(response => {
                        expect(response.get(['id']).length).toBeGreaterThan(0)
                    })
            });
        else utils.missingRequiredPermission(spec, test)
    }

}


module.exports = tests;

module.exports.test = (spec, test, model) => {
    switch (test) {
        case 'create': return tests.create(spec, model);
        case 'retrieve': return tests.retrieve(spec, model);
        case 'update': return tests.update(spec, model);
        case 'delete': return;
    }
}
