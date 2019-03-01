// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


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
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.create)
	    it("create", function() {
	        return commercelayer.createCustomerPaymentSource(new commercelayer.model.CustomerPaymentSource().setFields(data.CustomerPaymentSources.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerPaymentSources.create skipped: missing required test data')
	else console.log('Test CustomerPaymentSources.create skipped: missing required resource permission')


	// CustomerPaymentSources.retrieve
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('retrieve'))
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.retrieve)
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
	        return commercelayer.updateCustomerPaymentSource(data.CustomerPaymentSources.update.id, new commercelayer.model.CustomerPaymentSource().setFields(data.CustomerPaymentSources.update))
	            .then(response => {
	                Object.keys(data.CustomerPaymentSources.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerPaymentSources.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.CustomerPaymentSources.update[field])
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
  
