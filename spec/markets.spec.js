// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createMarket(new commercelayer.model.Market())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Markets.create skipped: missing required resource permission')


	// Markets.retrieve
	if (permissions.Markets && permissions.Markets.includes('retrieve'))
	if (data.Markets && data.Markets.update)
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
	        return commercelayer.updateMarket(data.Markets.update.id, new commercelayer.model.Market().setFields(data.Markets.update.fields))
	            .then(response => {
	                Object.keys(data.Markets.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.Markets.update.fields[field])
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
  
