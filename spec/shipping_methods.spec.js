// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("ShippingMethods", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// ShippingMethods.create
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('create'))
	    it("create", function() {
	        return commercelayer.createShippingMethod(new commercelayer.model.ShippingMethod())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test ShippingMethods.create skipped: missing required resource permission')


	// ShippingMethods.retrieve
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('retrieve'))
	if (data.ShippingMethods && data.ShippingMethods.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveShippingMethod(data.ShippingMethods.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.ShippingMethods.retrieve.id)
	            })
	    });
	else console.log('Test ShippingMethods.retrieve skipped: missing required test data')
	else console.log('Test ShippingMethods.retrieve skipped: missing required resource permission')


	// ShippingMethods.update
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('update'))
	if (data.ShippingMethods && data.ShippingMethods.update)
	    it("update", function() {
	        return commercelayer.updateShippingMethod(data.ShippingMethods.update.id, new commercelayer.model.ShippingMethod().setFields(data.ShippingMethods.update.fields))
	            .then(response => {
	                Object.keys(data.ShippingMethods.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.ShippingMethods.update.fields[field]))
	                })
	            })
	    });
	else console.log('Test ShippingMethods.update skipped: missing required test data')
	else console.log('Test ShippingMethods.update skipped: missing required resource permission')


	// ShippingMethods.list
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('list'))
	    it("list", function() {
	        return commercelayer.listShippingMethods()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test ShippingMethods.list skipped: missing required resource permission')

  });
  
