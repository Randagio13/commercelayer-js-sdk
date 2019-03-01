// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


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
	if (data.ShippingMethods && data.ShippingMethods.create)
	    it("create", function() {
	        return commercelayer.createShippingMethod(new commercelayer.model.ShippingMethod().setFields(data.ShippingMethods.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test ShippingMethods.create skipped: missing required test data')
	else console.log('Test ShippingMethods.create skipped: missing required resource permission')


	// ShippingMethods.retrieve
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('retrieve'))
	if (data.ShippingMethods && data.ShippingMethods.retrieve)
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
	        return commercelayer.updateShippingMethod(data.ShippingMethods.update.id, new commercelayer.model.ShippingMethod().setFields(data.ShippingMethods.update))
	            .then(response => {
	                Object.keys(data.ShippingMethods.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.ShippingMethods.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.ShippingMethods.update[field])
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
  
