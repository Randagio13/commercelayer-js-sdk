// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("StockLevels", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// StockLevels.create
	if (permissions.StockLevels && permissions.StockLevels.includes('create'))
	    it("create", function() {
	        return commercelayer.createStockLevel(new commercelayer.model.StockLevel())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test StockLevels.create skipped: missing required resource permission')


	// StockLevels.retrieve
	if (permissions.StockLevels && permissions.StockLevels.includes('retrieve'))
	if (data.StockLevels && data.StockLevels.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveStockLevel(data.StockLevels.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.StockLevels.retrieve.id)
	            })
	    });
	else console.log('Test StockLevels.retrieve skipped: missing required test data')
	else console.log('Test StockLevels.retrieve skipped: missing required resource permission')


	// StockLevels.update
	if (permissions.StockLevels && permissions.StockLevels.includes('update'))
	if (data.StockLevels && data.StockLevels.update)
	    it("update", function() {
	        return commercelayer.updateStockLevel(data.StockLevels.update.id, new commercelayer.model.StockLevel().setFields(data.StockLevels.update.fields))
	            .then(response => {
	                Object.keys(data.StockLevels.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.StockLevels.update.fields[field]))
	                })
	            })
	    });
	else console.log('Test StockLevels.update skipped: missing required test data')
	else console.log('Test StockLevels.update skipped: missing required resource permission')


	// StockLevels.list
	if (permissions.StockLevels && permissions.StockLevels.includes('list'))
	    it("list", function() {
	        return commercelayer.listStockLevels()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test StockLevels.list skipped: missing required resource permission')

  });
  
