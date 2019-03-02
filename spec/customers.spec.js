// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Customers", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Customers.create
	if (permissions.Customers && permissions.Customers.includes('create'))
	if (data.Customers && data.Customers.create)
	    it("create", function() {
	        return commercelayer.createCustomer(new commercelayer.model.Customer().setFields(data.Customers.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Customers.create skipped: missing required test data')
	else console.log('Test Customers.create skipped: missing required resource permission')


	// Customers.retrieve
	if (permissions.Customers && permissions.Customers.includes('retrieve'))
	if (data.Customers && data.Customers.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomer(data.Customers.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Customers.retrieve.id)
	            })
	    });
	else console.log('Test Customers.retrieve skipped: missing required test data')
	else console.log('Test Customers.retrieve skipped: missing required resource permission')


	// Customers.update
	if (permissions.Customers && permissions.Customers.includes('update'))
	if (data.Customers && data.Customers.update)
	    it("update", function() {
	        return commercelayer.updateCustomer(data.Customers.update.id, new commercelayer.model.Customer().setFields(data.Customers.update))
	            .then(response => {
	                Object.keys(data.Customers.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Customers.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.Customers.update[field])
	                })
	            })
	    });
	else console.log('Test Customers.update skipped: missing required test data')
	else console.log('Test Customers.update skipped: missing required resource permission')


	// Customers.list
	if (permissions.Customers && permissions.Customers.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomers()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Customers.list skipped: missing required resource permission')

  });
  
