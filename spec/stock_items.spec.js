// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "StockItems";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// StockItems.create
	if (permissions.StockItems && permissions.StockItems.includes('create'))
	if (data.StockItems && data.StockItems.create)
	    it("create", function() {
	        return commercelayer.createStockItem(new commercelayer.model.StockItem().setFields(data.StockItems.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created StockItem with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// StockItems.retrieve
	if (permissions.StockItems && permissions.StockItems.includes('retrieve'))
	if (data.StockItems && data.StockItems.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveStockItem(data.StockItems.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.StockItems.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// StockItems.update
	if (permissions.StockItems && permissions.StockItems.includes('update'))
	if (data.StockItems && data.StockItems.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.StockItems.update);
			let stock_item = new commercelayer.model.StockItem().setFields(data.StockItems.update);
	        return commercelayer.updateStockItem(data.StockItems.update.id, stock_item, qf)
	            .then(response => {
	                Object.keys(data.StockItems.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.StockItems.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.StockItems.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.StockItems.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// StockItems.list
	if (permissions.StockItems && permissions.StockItems.includes('list'))
	    it("list", function() {
	        return commercelayer.listStockItems()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
