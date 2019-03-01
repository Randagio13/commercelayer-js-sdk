// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Prices", function() {

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
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Prices.create skipped: missing required test data')
	else console.log('Test Prices.create skipped: missing required resource permission')


	// Prices.retrieve
	if (permissions.Prices && permissions.Prices.includes('retrieve'))
	if (data.Prices && data.Prices.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePrice(data.Prices.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Prices.retrieve.id)
	            })
	    });
	else console.log('Test Prices.retrieve skipped: missing required test data')
	else console.log('Test Prices.retrieve skipped: missing required resource permission')


	// Prices.update
	if (permissions.Prices && permissions.Prices.includes('update'))
	if (data.Prices && data.Prices.update)
	    it("update", function() {
	        return commercelayer.updatePrice(data.Prices.update.id, new commercelayer.model.Price().setFields(data.Prices.update))
	            .then(response => {
	                Object.keys(data.Prices.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Prices.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.Prices.update[field])
	                })
	            })
	    });
	else console.log('Test Prices.update skipped: missing required test data')
	else console.log('Test Prices.update skipped: missing required resource permission')


	// Prices.list
	if (permissions.Prices && permissions.Prices.includes('list'))
	    it("list", function() {
	        return commercelayer.listPrices()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Prices.list skipped: missing required resource permission')

  });
  
