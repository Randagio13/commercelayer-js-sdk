// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("CustomerPasswordResets", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerPasswordResets.create
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('create'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.create)
	    it("create", function() {
	        return commercelayer.createCustomerPasswordReset(new commercelayer.model.CustomerPasswordReset().setFields(data.CustomerPasswordResets.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerPasswordResets.create skipped: missing required test data')
	else console.log('Test CustomerPasswordResets.create skipped: missing required resource permission')


	// CustomerPasswordResets.retrieve
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('retrieve'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerPasswordReset(data.CustomerPasswordResets.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerPasswordResets.retrieve.id)
	            })
	    });
	else console.log('Test CustomerPasswordResets.retrieve skipped: missing required test data')
	else console.log('Test CustomerPasswordResets.retrieve skipped: missing required resource permission')


	// CustomerPasswordResets.update
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('update'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.update)
	    it("update", function() {
	        return commercelayer.updateCustomerPasswordReset(data.CustomerPasswordResets.update.id, new commercelayer.model.CustomerPasswordReset().setFields(data.CustomerPasswordResets.update))
	            .then(response => {
	                Object.keys(data.CustomerPasswordResets.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerPasswordResets.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.CustomerPasswordResets.update[field])
	                })
	            })
	    });
	else console.log('Test CustomerPasswordResets.update skipped: missing required test data')
	else console.log('Test CustomerPasswordResets.update skipped: missing required resource permission')


	// CustomerPasswordResets.list
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerPasswordResets()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test CustomerPasswordResets.list skipped: missing required resource permission')

  });
  
