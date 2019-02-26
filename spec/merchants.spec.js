// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Merchants", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Merchants.create
	if (permissions.Merchants && permissions.Merchants.includes('create'))
	    it("create", function() {
	        return commercelayer.createMerchant(new commercelayer.model.Merchant())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Merchants.create skipped: missing required resource permission')


	// Merchants.retrieve
	if (permissions.Merchants && permissions.Merchants.includes('retrieve'))
	if (data.Merchants && data.Merchants.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveMerchant(data.Merchants.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Merchants.retrieve.id)
	            })
	    });
	else console.log('Test Merchants.retrieve skipped: missing required test data')
	else console.log('Test Merchants.retrieve skipped: missing required resource permission')


	// Merchants.update
	if (permissions.Merchants && permissions.Merchants.includes('update'))
	if (data.Merchants && data.Merchants.update)
	    it("update", function() {
	        return commercelayer.updateMerchant(data.Merchants.update.id, new commercelayer.model.Merchant().setFields(data.Merchants.update.fields))
	            .then(response => {
	                Object.keys(data.Merchants.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.Merchants.update.fields[field])
	                })
	            })
	    });
	else console.log('Test Merchants.update skipped: missing required test data')
	else console.log('Test Merchants.update skipped: missing required resource permission')


	// Merchants.list
	if (permissions.Merchants && permissions.Merchants.includes('list'))
	    it("list", function() {
	        return commercelayer.listMerchants()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Merchants.list skipped: missing required resource permission')

  });
  
