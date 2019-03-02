// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Prices";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Prices.create
	if (permissions.Prices && permissions.Prices.includes('create'))
	if (data.Prices && data.Prices.create)
	    it("create", function() {
	        return commercelayer.createPrice(new commercelayer.model.Price().setFields(data.Prices.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Price with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Prices.retrieve
	if (permissions.Prices && permissions.Prices.includes('retrieve'))
	if (data.Prices && data.Prices.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePrice(data.Prices.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Prices.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Prices.update
	if (permissions.Prices && permissions.Prices.includes('update'))
	if (data.Prices && data.Prices.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Prices.update);
			let price = new commercelayer.model.Price().setFields(data.Prices.update);
	        return commercelayer.updatePrice(data.Prices.update.id, price, qf)
	            .then(response => {
	                Object.keys(data.Prices.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Prices.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Prices.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Prices.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Prices.list
	if (permissions.Prices && permissions.Prices.includes('list'))
	    it("list", function() {
	        return commercelayer.listPrices()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
