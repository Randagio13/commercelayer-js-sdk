// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createCustomerPasswordReset(new commercelayer.model.CustomerPasswordReset())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerPasswordResets.create skipped: missing required resource permission')


	// CustomerPasswordResets.retrieve
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('retrieve'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.update)
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
	        return commercelayer.updateCustomerPasswordReset(data.CustomerPasswordResets.update.id, new commercelayer.model.CustomerPasswordReset().setFields(data.CustomerPasswordResets.update.fields))
	            .then(response => {
	                Object.keys(data.CustomerPasswordResets.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.CustomerPasswordResets.update.fields[field]))
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
  
