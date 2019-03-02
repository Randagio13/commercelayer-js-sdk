// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "StockLocations";


describe(SPEC_NAME, function() {

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
	                const id = response.get('id');
					console.log('Created StockLocation with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// StockLocations.retrieve
	if (permissions.StockLocations && permissions.StockLocations.includes('retrieve'))
	if (data.StockLocations && data.StockLocations.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveStockLocation(data.StockLocations.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.StockLocations.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// StockLocations.update
	if (permissions.StockLocations && permissions.StockLocations.includes('update'))
	if (data.StockLocations && data.StockLocations.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.StockLocations.update);
			let stock_location = new commercelayer.model.StockLocation().setFields(data.StockLocations.update);
	        return commercelayer.updateStockLocation(data.StockLocations.update.id, stock_location, qf)
	            .then(response => {
	                Object.keys(data.StockLocations.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.StockLocations.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.StockLocations.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.StockLocations.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// StockLocations.list
	if (permissions.StockLocations && permissions.StockLocations.includes('list'))
	    it("list", function() {
	        return commercelayer.listStockLocations()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
