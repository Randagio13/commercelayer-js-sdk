// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("InventoryModels", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// InventoryModels.create
	if (permissions.InventoryModels && permissions.InventoryModels.includes('create'))
	    it("create", function() {
	        return commercelayer.createInventoryModel(new commercelayer.model.InventoryModel())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test InventoryModels.create skipped: missing required resource permission')


	// InventoryModels.retrieve
	if (permissions.InventoryModels && permissions.InventoryModels.includes('retrieve'))
	if (data.InventoryModels && data.InventoryModels.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveInventoryModel(data.InventoryModels.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.InventoryModels.retrieve.id)
	            })
	    });
	else console.log('Test InventoryModels.retrieve skipped: missing required test data')
	else console.log('Test InventoryModels.retrieve skipped: missing required resource permission')


	// InventoryModels.update
	if (permissions.InventoryModels && permissions.InventoryModels.includes('update'))
	if (data.InventoryModels && data.InventoryModels.update)
	    it("update", function() {
	        return commercelayer.updateInventoryModel(data.InventoryModels.update.id, new commercelayer.model.InventoryModel().setFields(data.InventoryModels.update.fields))
	            .then(response => {
	                Object.keys(data.InventoryModels.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.InventoryModels.update.fields[field])
	                })
	            })
	    });
	else console.log('Test InventoryModels.update skipped: missing required test data')
	else console.log('Test InventoryModels.update skipped: missing required resource permission')


	// InventoryModels.list
	if (permissions.InventoryModels && permissions.InventoryModels.includes('list'))
	    it("list", function() {
	        return commercelayer.listInventoryModels()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test InventoryModels.list skipped: missing required resource permission')

  });
  