// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("StockItems", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// StockItems.create
	if (permissions.StockItems && permissions.StockItems.includes('create'))
	    it("create", function() {
	        return commercelayer.createStockItem(new commercelayer.model.StockItem())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test StockItems.create skipped: missing required resource permission')


	// StockItems.retrieve
	if (permissions.StockItems && permissions.StockItems.includes('retrieve'))
	if (data.StockItems && data.StockItems.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveStockItem(data.StockItems.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.StockItems.retrieve.id)
	            })
	    });
	else console.log('Test StockItems.retrieve skipped: missing required test data')
	else console.log('Test StockItems.retrieve skipped: missing required resource permission')


	// StockItems.update
	if (permissions.StockItems && permissions.StockItems.includes('update'))
	if (data.StockItems && data.StockItems.update)
	    it("update", function() {
	        return commercelayer.updateStockItem(data.StockItems.update.id, new commercelayer.model.StockItem().setFields(data.StockItems.update.fields))
	            .then(response => {
	                Object.keys(data.StockItems.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.StockItems.update.fields[field])
	                })
	            })
	    });
	else console.log('Test StockItems.update skipped: missing required test data')
	else console.log('Test StockItems.update skipped: missing required resource permission')


	// StockItems.list
	if (permissions.StockItems && permissions.StockItems.includes('list'))
	    it("list", function() {
	        return commercelayer.listStockItems()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test StockItems.list skipped: missing required resource permission')

  });
  
