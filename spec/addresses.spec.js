// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Addresses", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Addresses.create
	if (permissions.Addresses && permissions.Addresses.includes('create'))
	    it("create", function() {
	        return commercelayer.createAddress(new commercelayer.model.Address())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Addresses.create skipped: missing required resource permission')


	// Addresses.retrieve
	if (permissions.Addresses && permissions.Addresses.includes('retrieve'))
	if (data.Addresses && data.Addresses.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveAddress(data.Addresses.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Addresses.retrieve.id)
	            })
	    });
	else console.log('Test Addresses.retrieve skipped: missing required test data')
	else console.log('Test Addresses.retrieve skipped: missing required resource permission')


	// Addresses.update
	if (permissions.Addresses && permissions.Addresses.includes('update'))
	if (data.Addresses && data.Addresses.update)
	    it("update", function() {
	        return commercelayer.updateAddress(data.Addresses.update.id, new commercelayer.model.Address().setFields(data.Addresses.update.fields))
	            .then(response => {
	                Object.keys(data.Addresses.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.Addresses.update.fields[field])
	                })
	            })
	    });
	else console.log('Test Addresses.update skipped: missing required test data')
	else console.log('Test Addresses.update skipped: missing required resource permission')


	// Addresses.list
	if (permissions.Addresses && permissions.Addresses.includes('list'))
	    it("list", function() {
	        return commercelayer.listAddresses()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Addresses.list skipped: missing required resource permission')

  });
  
