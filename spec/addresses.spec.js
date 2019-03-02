// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


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
	if (data.Addresses && data.Addresses.create)
	    it("create", function() {
	        return commercelayer.createAddress(new commercelayer.model.Address().setFields(data.Addresses.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Addresses.create skipped: missing required test data')
	else console.log('Test Addresses.create skipped: missing required resource permission')


	// Addresses.retrieve
	if (permissions.Addresses && permissions.Addresses.includes('retrieve'))
	if (data.Addresses && data.Addresses.retrieve)
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
	        return commercelayer.updateAddress(data.Addresses.update.id, new commercelayer.model.Address().setFields(data.Addresses.update))
	            .then(response => {
	                Object.keys(data.Addresses.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Addresses.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.Addresses.update[field])
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
  
