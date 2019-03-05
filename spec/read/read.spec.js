// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen

const commercelayer = require('../../index')
const suites = require('./read.suite');
const permissions = require('../support/permissions')
const utils = require('../support/utils')
const config = require('../support/config')


config.init(suites);


Object.keys(suites).forEach(suite => {
    if (suites[suite].enabled) {

        describe(suite, function() {

            let test = 'list';
            if (permissions[suite] && permissions[suite].includes(test))
                it('read 1st ' + suites[suite].model, async function() {

                    const qf = new commercelayer.query.QueryFilter().pageSize(1);

                    let list = await commercelayer[test+suite](qf)
                        .catch(error => { console.log(error) })

                    const len = (list && list.get)? list.get(['id']).length : -1;


                    if (len > 0) {

                        const id = list.get(['id'])[0].id;
                        console.log(`retrieving id ${id} ...`);

                        test = 'retrieve';
                        if (permissions[suite] && permissions[suite].includes(test))
                            return commercelayer[test+suites[suite].model](id)
                                .then(response => { expect(response.get('id')).toBe(id.toString()) })
                                .catch(error => { if (error) expect(error.status).toBe(401) /*console.log(error)*/ })
                        else utils.missingRequiredPermission(suite, test)

                    }

                });
            else utils.missingRequiredPermission(suite, test)

        });
    }
    else console.log('Test of suite ' + suite + ' disabled.')

})  
