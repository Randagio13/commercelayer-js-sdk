// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createCustomer(new commercelayer.model.Customer())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Customers.create skipped: missing required resource permission')


	// Customers.retrieve
	if (permissions.Customers && permissions.Customers.includes('retrieve'))
	if (data.Customers && data.Customers.update)
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
	        return commercelayer.updateCustomer(data.Customers.update.id, new commercelayer.model.Customer().setFields(data.Customers.update.fields))
	            .then(response => {
	                Object.keys(data.Customers.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.Customers.update.fields[field]))
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
  
