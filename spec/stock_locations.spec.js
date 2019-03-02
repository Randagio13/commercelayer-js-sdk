// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("StockLocations", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// StockLocations.create
	if (permissions.StockLocations && permissions.StockLocations.includes('create'))
	if (data.StockLocations && data.StockLocations.create)
	    it("create", function() {
	        return commercelayer.createStockLocation(new commercelayer.model.StockLocation().setFields(data.StockLocations.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test StockLocations.create skipped: missing required test data')
	else console.log('Test StockLocations.create skipped: missing required resource permission')


	// StockLocations.retrieve
	if (permissions.StockLocations && permissions.StockLocations.includes('retrieve'))
	if (data.StockLocations && data.StockLocations.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveStockLocation(data.StockLocations.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.StockLocations.retrieve.id)
	            })
	    });
	else console.log('Test StockLocations.retrieve skipped: missing required test data')
	else console.log('Test StockLocations.retrieve skipped: missing required resource permission')


	// StockLocations.update
	if (permissions.StockLocations && permissions.StockLocations.includes('update'))
	if (data.StockLocations && data.StockLocations.update)
	    it("update", function() {
	        return commercelayer.updateStockLocation(data.StockLocations.update.id, new commercelayer.model.StockLocation().setFields(data.StockLocations.update))
	            .then(response => {
	                Object.keys(data.StockLocations.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.StockLocations.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.StockLocations.update[field])
	                })
	            })
	    });
	else console.log('Test StockLocations.update skipped: missing required test data')
	else console.log('Test StockLocations.update skipped: missing required resource permission')


	// StockLocations.list
	if (permissions.StockLocations && permissions.StockLocations.includes('list'))
	    it("list", function() {
	        return commercelayer.listStockLocations()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test StockLocations.list skipped: missing required resource permission')

  });
  
