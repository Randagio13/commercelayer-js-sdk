// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Skus", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Skus.create
	if (permissions.Skus && permissions.Skus.includes('create'))
	if (data.Skus && data.Skus.create)
	    it("create", function() {
	        return commercelayer.createSku(new commercelayer.model.Sku().setFields(data.Skus.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Skus.create skipped: missing required test data')
	else console.log('Test Skus.create skipped: missing required resource permission')


	// Skus.retrieve
	if (permissions.Skus && permissions.Skus.includes('retrieve'))
	if (data.Skus && data.Skus.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveSku(data.Skus.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Skus.retrieve.id)
	            })
	    });
	else console.log('Test Skus.retrieve skipped: missing required test data')
	else console.log('Test Skus.retrieve skipped: missing required resource permission')


	// Skus.update
	if (permissions.Skus && permissions.Skus.includes('update'))
	if (data.Skus && data.Skus.update)
	    it("update", function() {
	        return commercelayer.updateSku(data.Skus.update.id, new commercelayer.model.Sku().setFields(data.Skus.update))
	            .then(response => {
	                Object.keys(data.Skus.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Skus.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.Skus.update[field])
	                })
	            })
	    });
	else console.log('Test Skus.update skipped: missing required test data')
	else console.log('Test Skus.update skipped: missing required resource permission')


	// Skus.list
	if (permissions.Skus && permissions.Skus.includes('list'))
	    it("list", function() {
	        return commercelayer.listSkus()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Skus.list skipped: missing required resource permission')

  });
  
