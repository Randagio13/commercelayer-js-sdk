// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("SkuOptions", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// SkuOptions.create
	if (permissions.SkuOptions && permissions.SkuOptions.includes('create'))
	if (data.SkuOptions && data.SkuOptions.create)
	    it("create", function() {
	        return commercelayer.createSkuOption(new commercelayer.model.SkuOption().setFields(data.SkuOptions.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test SkuOptions.create skipped: missing required test data')
	else console.log('Test SkuOptions.create skipped: missing required resource permission')


	// SkuOptions.retrieve
	if (permissions.SkuOptions && permissions.SkuOptions.includes('retrieve'))
	if (data.SkuOptions && data.SkuOptions.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveSkuOption(data.SkuOptions.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.SkuOptions.retrieve.id)
	            })
	    });
	else console.log('Test SkuOptions.retrieve skipped: missing required test data')
	else console.log('Test SkuOptions.retrieve skipped: missing required resource permission')


	// SkuOptions.update
	if (permissions.SkuOptions && permissions.SkuOptions.includes('update'))
	if (data.SkuOptions && data.SkuOptions.update)
	    it("update", function() {
	        return commercelayer.updateSkuOption(data.SkuOptions.update.id, new commercelayer.model.SkuOption().setFields(data.SkuOptions.update))
	            .then(response => {
	                Object.keys(data.SkuOptions.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.SkuOptions.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.SkuOptions.update[field])
	                })
	            })
	    });
	else console.log('Test SkuOptions.update skipped: missing required test data')
	else console.log('Test SkuOptions.update skipped: missing required resource permission')


	// SkuOptions.list
	if (permissions.SkuOptions && permissions.SkuOptions.includes('list'))
	    it("list", function() {
	        return commercelayer.listSkuOptions()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test SkuOptions.list skipped: missing required resource permission')

  });
  
