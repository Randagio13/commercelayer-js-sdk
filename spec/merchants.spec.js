// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Merchants";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Merchants.create
	if (permissions.Merchants && permissions.Merchants.includes('create'))
	if (data.Merchants && data.Merchants.create)
	    it("create", function() {
	        return commercelayer.createMerchant(new commercelayer.model.Merchant().setFields(data.Merchants.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Merchant with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Merchants.retrieve
	if (permissions.Merchants && permissions.Merchants.includes('retrieve'))
	if (data.Merchants && data.Merchants.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveMerchant(data.Merchants.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Merchants.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Merchants.update
	if (permissions.Merchants && permissions.Merchants.includes('update'))
	if (data.Merchants && data.Merchants.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Merchants.update);
			let merchant = new commercelayer.model.Merchant().setFields(data.Merchants.update);
	        return commercelayer.updateMerchant(data.Merchants.update.id, merchant, qf)
	            .then(response => {
	                Object.keys(data.Merchants.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Merchants.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Merchants.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Merchants.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Merchants.list
	if (permissions.Merchants && permissions.Merchants.includes('list'))
	    it("list", function() {
	        return commercelayer.listMerchants()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
