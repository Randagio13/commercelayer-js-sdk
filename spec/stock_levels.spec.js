// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


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
	if (data.StockLevels && data.StockLevels.create)
	    it("create", function() {
	        return commercelayer.createStockLevel(new commercelayer.model.StockLevel().setFields(data.StockLevels.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test StockLevels.create skipped: missing required test data')
	else console.log('Test StockLevels.create skipped: missing required resource permission')


	// StockLevels.retrieve
	if (permissions.StockLevels && permissions.StockLevels.includes('retrieve'))
	if (data.StockLevels && data.StockLevels.retrieve)
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
	        return commercelayer.updateStockLevel(data.StockLevels.update.id, new commercelayer.model.StockLevel().setFields(data.StockLevels.update))
	            .then(response => {
	                Object.keys(data.StockLevels.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.StockLevels.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.StockLevels.update[field])
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
  
