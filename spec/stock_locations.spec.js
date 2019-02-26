// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createStockLocation(new commercelayer.model.StockLocation())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test StockLocations.create skipped: missing required resource permission')


	// StockLocations.retrieve
	if (permissions.StockLocations && permissions.StockLocations.includes('retrieve'))
	if (data.StockLocations && data.StockLocations.update)
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
	        return commercelayer.updateStockLocation(data.StockLocations.update.id, new commercelayer.model.StockLocation().setFields(data.StockLocations.update.fields))
	            .then(response => {
	                Object.keys(data.StockLocations.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.StockLocations.update.fields[field])
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
  
