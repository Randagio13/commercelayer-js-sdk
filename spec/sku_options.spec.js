// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createSkuOption(new commercelayer.model.SkuOption())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test SkuOptions.create skipped: missing required resource permission')


	// SkuOptions.retrieve
	if (permissions.SkuOptions && permissions.SkuOptions.includes('retrieve'))
	if (data.SkuOptions && data.SkuOptions.update)
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
	        return commercelayer.updateSkuOption(data.SkuOptions.update.id, new commercelayer.model.SkuOption().setFields(data.SkuOptions.update.fields))
	            .then(response => {
	                Object.keys(data.SkuOptions.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.SkuOptions.update.fields[field])
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
  
