// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Markets";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Markets.create
	if (permissions.Markets && permissions.Markets.includes('create'))
	if (data.Markets && data.Markets.create)
	    it("create", function() {
	        return commercelayer.createMarket(new commercelayer.model.Market().setFields(data.Markets.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Market with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Markets.retrieve
	if (permissions.Markets && permissions.Markets.includes('retrieve'))
	if (data.Markets && data.Markets.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveMarket(data.Markets.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Markets.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Markets.update
	if (permissions.Markets && permissions.Markets.includes('update'))
	if (data.Markets && data.Markets.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Markets.update);
			let market = new commercelayer.model.Market().setFields(data.Markets.update);
	        return commercelayer.updateMarket(data.Markets.update.id, market, qf)
	            .then(response => {
	                Object.keys(data.Markets.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Markets.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Markets.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Markets.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Markets.list
	if (permissions.Markets && permissions.Markets.includes('list'))
	    it("list", function() {
	        return commercelayer.listMarkets()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
