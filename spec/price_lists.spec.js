// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("PriceLists", function() {

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
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test PriceLists.create skipped: missing required test data')
	else console.log('Test PriceLists.create skipped: missing required resource permission')


	// PriceLists.retrieve
	if (permissions.PriceLists && permissions.PriceLists.includes('retrieve'))
	if (data.PriceLists && data.PriceLists.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePriceList(data.PriceLists.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.PriceLists.retrieve.id)
	            })
	    });
	else console.log('Test PriceLists.retrieve skipped: missing required test data')
	else console.log('Test PriceLists.retrieve skipped: missing required resource permission')


	// PriceLists.update
	if (permissions.PriceLists && permissions.PriceLists.includes('update'))
	if (data.PriceLists && data.PriceLists.update)
	    it("update", function() {
	        return commercelayer.updatePriceList(data.PriceLists.update.id, new commercelayer.model.PriceList().setFields(data.PriceLists.update))
	            .then(response => {
	                Object.keys(data.PriceLists.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.PriceLists.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.PriceLists.update[field])
	                })
	            })
	    });
	else console.log('Test PriceLists.update skipped: missing required test data')
	else console.log('Test PriceLists.update skipped: missing required resource permission')


	// PriceLists.list
	if (permissions.PriceLists && permissions.PriceLists.includes('list'))
	    it("list", function() {
	        return commercelayer.listPriceLists()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test PriceLists.list skipped: missing required resource permission')

  });
  
