// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createCustomerSubscription(new commercelayer.model.CustomerSubscription())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerSubscriptions.create skipped: missing required resource permission')


	// CustomerSubscriptions.retrieve
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('retrieve'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.update)
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
	        return commercelayer.updateCustomerSubscription(data.CustomerSubscriptions.update.id, new commercelayer.model.CustomerSubscription().setFields(data.CustomerSubscriptions.update.fields))
	            .then(response => {
	                Object.keys(data.CustomerSubscriptions.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.CustomerSubscriptions.update.fields[field])
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
  
