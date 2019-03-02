// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "PriceLists";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// PriceLists.create
	if (permissions.PriceLists && permissions.PriceLists.includes('create'))
	if (data.PriceLists && data.PriceLists.create)
	    it("create", function() {
	        return commercelayer.createPriceList(new commercelayer.model.PriceList().setFields(data.PriceLists.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created PriceList with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// PriceLists.retrieve
	if (permissions.PriceLists && permissions.PriceLists.includes('retrieve'))
	if (data.PriceLists && data.PriceLists.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePriceList(data.PriceLists.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.PriceLists.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// PriceLists.update
	if (permissions.PriceLists && permissions.PriceLists.includes('update'))
	if (data.PriceLists && data.PriceLists.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.PriceLists.update);
			let price_list = new commercelayer.model.PriceList().setFields(data.PriceLists.update);
	        return commercelayer.updatePriceList(data.PriceLists.update.id, price_list, qf)
	            .then(response => {
	                Object.keys(data.PriceLists.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.PriceLists.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.PriceLists.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.PriceLists.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// PriceLists.list
	if (permissions.PriceLists && permissions.PriceLists.includes('list'))
	    it("list", function() {
	        return commercelayer.listPriceLists()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
