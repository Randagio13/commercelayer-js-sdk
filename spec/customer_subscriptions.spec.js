// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("CustomerSubscriptions", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerSubscriptions.create
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('create'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.create)
	    it("create", function() {
	        return commercelayer.createCustomerSubscription(new commercelayer.model.CustomerSubscription().setFields(data.CustomerSubscriptions.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerSubscriptions.create skipped: missing required test data')
	else console.log('Test CustomerSubscriptions.create skipped: missing required resource permission')


	// CustomerSubscriptions.retrieve
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('retrieve'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerSubscription(data.CustomerSubscriptions.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerSubscriptions.retrieve.id)
	            })
	    });
	else console.log('Test CustomerSubscriptions.retrieve skipped: missing required test data')
	else console.log('Test CustomerSubscriptions.retrieve skipped: missing required resource permission')


	// CustomerSubscriptions.update
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('update'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.update)
	    it("update", function() {
	        return commercelayer.updateCustomerSubscription(data.CustomerSubscriptions.update.id, new commercelayer.model.CustomerSubscription().setFields(data.CustomerSubscriptions.update))
	            .then(response => {
	                Object.keys(data.CustomerSubscriptions.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerSubscriptions.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.CustomerSubscriptions.update[field])
	                })
	            })
	    });
	else console.log('Test CustomerSubscriptions.update skipped: missing required test data')
	else console.log('Test CustomerSubscriptions.update skipped: missing required resource permission')


	// CustomerSubscriptions.list
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerSubscriptions()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test CustomerSubscriptions.list skipped: missing required resource permission')

  });
  
