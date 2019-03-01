// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("ShippingCategories", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// ShippingCategories.create
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('create'))
	if (data.ShippingCategories && data.ShippingCategories.create)
	    it("create", function() {
	        return commercelayer.createShippingCategory(new commercelayer.model.ShippingCategory().setFields(data.ShippingCategories.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test ShippingCategories.create skipped: missing required test data')
	else console.log('Test ShippingCategories.create skipped: missing required resource permission')


	// ShippingCategories.retrieve
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('retrieve'))
	if (data.ShippingCategories && data.ShippingCategories.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveShippingCategory(data.ShippingCategories.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.ShippingCategories.retrieve.id)
	            })
	    });
	else console.log('Test ShippingCategories.retrieve skipped: missing required test data')
	else console.log('Test ShippingCategories.retrieve skipped: missing required resource permission')


	// ShippingCategories.update
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('update'))
	if (data.ShippingCategories && data.ShippingCategories.update)
	    it("update", function() {
	        return commercelayer.updateShippingCategory(data.ShippingCategories.update.id, new commercelayer.model.ShippingCategory().setFields(data.ShippingCategories.update))
	            .then(response => {
	                Object.keys(data.ShippingCategories.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.ShippingCategories.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.ShippingCategories.update[field])
	                })
	            })
	    });
	else console.log('Test ShippingCategories.update skipped: missing required test data')
	else console.log('Test ShippingCategories.update skipped: missing required resource permission')


	// ShippingCategories.list
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('list'))
	    it("list", function() {
	        return commercelayer.listShippingCategories()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test ShippingCategories.list skipped: missing required resource permission')

  });
  
