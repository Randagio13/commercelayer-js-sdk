// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "StockLevels";


describe(SPEC_NAME, function() {

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
	                const id = response.get('id');
					console.log('Created StockLevel with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// StockLevels.retrieve
	if (permissions.StockLevels && permissions.StockLevels.includes('retrieve'))
	if (data.StockLevels && data.StockLevels.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveStockLevel(data.StockLevels.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.StockLevels.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// StockLevels.update
	if (permissions.StockLevels && permissions.StockLevels.includes('update'))
	if (data.StockLevels && data.StockLevels.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.StockLevels.update);
			let stock_level = new commercelayer.model.StockLevel().setFields(data.StockLevels.update);
	        return commercelayer.updateStockLevel(data.StockLevels.update.id, stock_level, qf)
	            .then(response => {
	                Object.keys(data.StockLevels.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.StockLevels.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.StockLevels.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.StockLevels.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// StockLevels.list
	if (permissions.StockLevels && permissions.StockLevels.includes('list'))
	    it("list", function() {
	        return commercelayer.listStockLevels()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
