const commercelayer = require('../../index')
const permissions = require('../support/permissions')
const data = require('./crud.data')
const utils = require('../support/utils')


let tests = {

    create : (suite, model) => {

        const test = 'create';
  
        if (permissions[suite] && permissions[suite].includes(test))
        if (data[suite] && data[suite][test])
            it(test, function() {
                return commercelayer[test+model](new commercelayer.model[model]().setFields(data[suite][test]))
                    .then(response => {
                        const id = response.get('id');
                        expect(id).not.toBeNull();
                    })
            });
        else utils.missingRequiredData(suite, test)
        else utils.missingRequiredPermission(suite, test)
	
    },

    retrieve : (suite, model) => {
    
        const test = 'retrieve';
        
        if (permissions[suite] && permissions[suite].includes(test))
        if (data[suite] && data[suite][test])
            it(test, function() {
                return commercelayer[test+model](data[suite][test].id)
                    .then(response => {
                        expect(response.get('id')).toBe(data[suite][test].id.toString())
                    })
            });
        else utils.missingRequiredData(suite, test)
        else utils.missingRequiredPermission(suite, test)
    
    },
    
    update : (suite, model) => {

        const test = 'update';

        if (permissions[suite] && permissions[suite].includes(test))
        if (data[suite] && data[suite][test])
            it(test, function() {
                let qf = utils.buildQueryFilter(data[suite][test]);
                let res = new commercelayer.model[model]().setFields(data[suite][test]);
                return commercelayer[test+model](data[suite][test].id, res, qf)
                    .then(response => {
                        Object.keys(data[suite][test]).forEach(field => {
                            if (commercelayer.model.helper.isApiResource(data[suite][test][field]))
                                expect(response.get([field+'.id'])[field].id).toBe(data[suite][test][field].id.toString())
                            else
                                expect(utils.toString(response.get(field))).toBe(data[suite][test][field].toString())
                        })
                    })
            });
        else utils.missingRequiredData(suite, test)
        else utils.missingRequiredPermission(suite, test)

	},

    list : (suite, model) => {

        const test = 'list';

        if (permissions[suite] && permissions[suite].includes(test))
            it(test, function() {
                return commercelayer[test+suite]()
                    .then(response => {
                        expect(response.get(['id']).length).toBeGreaterThan(0)
                    })
            });
        else utils.missingRequiredPermission(suite, test)
    }

}


module.exports = tests;

module.exports.test = (suite, test, model) => {
    switch (test) {
        case 'create': return tests.create(suite, model);
        case 'retrieve': return tests.retrieve(suite, model);
        case 'update': return tests.update(suite, model);
        case 'delete': return;
    }
}
