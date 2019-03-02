// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "InventoryModels";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// InventoryModels.create
	if (permissions.InventoryModels && permissions.InventoryModels.includes('create'))
	if (data.InventoryModels && data.InventoryModels.create)
	    it("create", function() {
	        return commercelayer.createInventoryModel(new commercelayer.model.InventoryModel().setFields(data.InventoryModels.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created InventoryModel with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// InventoryModels.retrieve
	if (permissions.InventoryModels && permissions.InventoryModels.includes('retrieve'))
	if (data.InventoryModels && data.InventoryModels.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveInventoryModel(data.InventoryModels.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.InventoryModels.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// InventoryModels.update
	if (permissions.InventoryModels && permissions.InventoryModels.includes('update'))
	if (data.InventoryModels && data.InventoryModels.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.InventoryModels.update);
			let inventory_model = new commercelayer.model.InventoryModel().setFields(data.InventoryModels.update);
	        return commercelayer.updateInventoryModel(data.InventoryModels.update.id, inventory_model, qf)
	            .then(response => {
	                Object.keys(data.InventoryModels.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.InventoryModels.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.InventoryModels.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.InventoryModels.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// InventoryModels.list
	if (permissions.InventoryModels && permissions.InventoryModels.includes('list'))
	    it("list", function() {
	        return commercelayer.listInventoryModels()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
