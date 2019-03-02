// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Skus";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Skus.create
	if (permissions.Skus && permissions.Skus.includes('create'))
	if (data.Skus && data.Skus.create)
	    it("create", function() {
	        return commercelayer.createSku(new commercelayer.model.Sku().setFields(data.Skus.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Sku with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Skus.retrieve
	if (permissions.Skus && permissions.Skus.includes('retrieve'))
	if (data.Skus && data.Skus.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveSku(data.Skus.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Skus.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Skus.update
	if (permissions.Skus && permissions.Skus.includes('update'))
	if (data.Skus && data.Skus.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Skus.update);
			let sku = new commercelayer.model.Sku().setFields(data.Skus.update);
	        return commercelayer.updateSku(data.Skus.update.id, sku, qf)
	            .then(response => {
	                Object.keys(data.Skus.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Skus.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Skus.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Skus.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Skus.list
	if (permissions.Skus && permissions.Skus.includes('list'))
	    it("list", function() {
	        return commercelayer.listSkus()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
