// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("CustomerPaymentSources", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerPaymentSources.create
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('create'))
	    it("create", function() {
	        return commercelayer.createCustomerPaymentSource(new commercelayer.model.CustomerPaymentSource())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerPaymentSources.create skipped: missing required resource permission')


	// CustomerPaymentSources.retrieve
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('retrieve'))
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerPaymentSource(data.CustomerPaymentSources.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerPaymentSources.retrieve.id)
	            })
	    });
	else console.log('Test CustomerPaymentSources.retrieve skipped: missing required test data')
	else console.log('Test CustomerPaymentSources.retrieve skipped: missing required resource permission')


	// CustomerPaymentSources.update
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('update'))
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.update)
	    it("update", function() {
	        return commercelayer.updateCustomerPaymentSource(data.CustomerPaymentSources.update.id, new commercelayer.model.CustomerPaymentSource().setFields(data.CustomerPaymentSources.update.fields))
	            .then(response => {
	                Object.keys(data.CustomerPaymentSources.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.CustomerPaymentSources.update.fields[field])
	                })
	            })
	    });
	else console.log('Test CustomerPaymentSources.update skipped: missing required test data')
	else console.log('Test CustomerPaymentSources.update skipped: missing required resource permission')


	// CustomerPaymentSources.list
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerPaymentSources()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test CustomerPaymentSources.list skipped: missing required resource permission')

  });
  
