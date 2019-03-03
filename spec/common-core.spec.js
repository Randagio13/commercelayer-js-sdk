const commercelayer = require('../index')
const permissions = require('./support/permissions')
const data = require('./support/data')
const utils = require('./support/utils')


module.exports = {

    create : (SPEC, TEST, RES) => {
  
        if (permissions[SPEC] && permissions[SPEC].includes(TEST))
        if (data[SPEC] && data[SPEC][TEST])
            it(TEST, function() {
                return commercelayer[TEST+RES](new commercelayer.model[RES]().setFields(data[SPEC][TEST]))
                    .then(response => {
                        const id = response.get('id');
                        expect(id).not.toBeNull();
                    })
            });
        else utils.missingRequiredData(SPEC, TEST)
        else utils.missingRequiredPermission(SPEC, TEST)
	
    },

    retrieve : (SPEC, TEST, RES) => {
	
        if (permissions[SPEC] && permissions[SPEC].includes(TEST))
        if (data[SPEC] && data[SPEC][TEST])
            it(TEST, function() {
                return commercelayer[TEST+RES](data[SPEC][TEST].id)
                    .then(response => {
                        expect(response.get('id')).toBe(data[SPEC][TEST].id.toString())
                    })
            });
        else utils.missingRequiredData(SPEC, TEST)
        else utils.missingRequiredPermission(SPEC, TEST)
    
    },
    
    update : (SPEC, TEST, RES) => {

        if (permissions[SPEC] && permissions[SPEC].includes(TEST))
        if (data[SPEC] && data[SPEC][TEST])
            it(TEST, function() {
                let qf = utils.buildQueryFilter(data[SPEC][TEST]);
                let res = new commercelayer.model[RES]().setFields(data[SPEC][TEST]);
                return commercelayer[TEST+RES](data[SPEC][TEST].id, res, qf)
                    .then(response => {
                        Object.keys(data[SPEC][TEST]).forEach(field => {
                            if (commercelayer.model.helper.isApiResource(data[SPEC][TEST][field]))
                                expect(response.get([field+'.id'])[field].id).toBe(data[SPEC][TEST][field].id.toString())
                            else
                                expect(utils.toString(response.get(field))).toBe(data[SPEC][TEST][field].toString())
                        })
                    })
            });
        else utils.missingRequiredData(SPEC, TEST)
        else utils.missingRequiredPermission(SPEC, TEST)

	},

    list : (SPEC, TEST, RES) => {
        if (permissions[SPEC] && permissions[SPEC].includes(TEST))
            it(TEST, function() {
                return commercelayer[TEST+SPEC]()
                    .then(response => {
                        expect(response.get(['id']).length).toBeGreaterThan(0)
                    })
            });
        else utils.missingRequiredPermission(SPEC, TEST)
    }

}