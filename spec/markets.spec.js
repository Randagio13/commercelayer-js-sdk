// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Markets", function() {

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
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Markets.create skipped: missing required test data')
	else console.log('Test Markets.create skipped: missing required resource permission')


	// Markets.retrieve
	if (permissions.Markets && permissions.Markets.includes('retrieve'))
	if (data.Markets && data.Markets.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveMarket(data.Markets.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Markets.retrieve.id)
	            })
	    });
	else console.log('Test Markets.retrieve skipped: missing required test data')
	else console.log('Test Markets.retrieve skipped: missing required resource permission')


	// Markets.update
	if (permissions.Markets && permissions.Markets.includes('update'))
	if (data.Markets && data.Markets.update)
	    it("update", function() {
	        return commercelayer.updateMarket(data.Markets.update.id, new commercelayer.model.Market().setFields(data.Markets.update))
	            .then(response => {
	                Object.keys(data.Markets.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Markets.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.Markets.update[field])
	                })
	            })
	    });
	else console.log('Test Markets.update skipped: missing required test data')
	else console.log('Test Markets.update skipped: missing required resource permission')


	// Markets.list
	if (permissions.Markets && permissions.Markets.includes('list'))
	    it("list", function() {
	        return commercelayer.listMarkets()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Markets.list skipped: missing required resource permission')

  });
  
