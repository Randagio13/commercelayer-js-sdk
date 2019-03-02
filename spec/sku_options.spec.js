// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "SkuOptions";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// SkuOptions.create
	if (permissions.SkuOptions && permissions.SkuOptions.includes('create'))
	if (data.SkuOptions && data.SkuOptions.create)
	    it("create", function() {
	        return commercelayer.createSkuOption(new commercelayer.model.SkuOption().setFields(data.SkuOptions.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created SkuOption with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// SkuOptions.retrieve
	if (permissions.SkuOptions && permissions.SkuOptions.includes('retrieve'))
	if (data.SkuOptions && data.SkuOptions.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveSkuOption(data.SkuOptions.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.SkuOptions.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// SkuOptions.update
	if (permissions.SkuOptions && permissions.SkuOptions.includes('update'))
	if (data.SkuOptions && data.SkuOptions.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.SkuOptions.update);
			let sku_option = new commercelayer.model.SkuOption().setFields(data.SkuOptions.update);
	        return commercelayer.updateSkuOption(data.SkuOptions.update.id, sku_option, qf)
	            .then(response => {
	                Object.keys(data.SkuOptions.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.SkuOptions.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.SkuOptions.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.SkuOptions.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// SkuOptions.list
	if (permissions.SkuOptions && permissions.SkuOptions.includes('list'))
	    it("list", function() {
	        return commercelayer.listSkuOptions()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
