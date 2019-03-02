// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("CustomerAddresses", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerAddresses.create
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('create'))
	if (data.CustomerAddresses && data.CustomerAddresses.create)
	    it("create", function() {
	        return commercelayer.createCustomerAddress(new commercelayer.model.CustomerAddress().setFields(data.CustomerAddresses.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CustomerAddresses.create skipped: missing required test data')
	else console.log('Test CustomerAddresses.create skipped: missing required resource permission')


	// CustomerAddresses.retrieve
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('retrieve'))
	if (data.CustomerAddresses && data.CustomerAddresses.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerAddress(data.CustomerAddresses.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerAddresses.retrieve.id)
	            })
	    });
	else console.log('Test CustomerAddresses.retrieve skipped: missing required test data')
	else console.log('Test CustomerAddresses.retrieve skipped: missing required resource permission')


	// CustomerAddresses.update
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('update'))
	if (data.CustomerAddresses && data.CustomerAddresses.update)
	    it("update", function() {
	        return commercelayer.updateCustomerAddress(data.CustomerAddresses.update.id, new commercelayer.model.CustomerAddress().setFields(data.CustomerAddresses.update))
	            .then(response => {
	                Object.keys(data.CustomerAddresses.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerAddresses.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.CustomerAddresses.update[field])
	                })
	            })
	    });
	else console.log('Test CustomerAddresses.update skipped: missing required test data')
	else console.log('Test CustomerAddresses.update skipped: missing required resource permission')


	// CustomerAddresses.list
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerAddresses()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test CustomerAddresses.list skipped: missing required resource permission')

  });
  
