// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "CustomerAddresses";


describe(SPEC_NAME, function() {

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
	                const id = response.get('id');
					console.log('Created CustomerAddress with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// CustomerAddresses.retrieve
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('retrieve'))
	if (data.CustomerAddresses && data.CustomerAddresses.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerAddress(data.CustomerAddresses.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerAddresses.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// CustomerAddresses.update
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('update'))
	if (data.CustomerAddresses && data.CustomerAddresses.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.CustomerAddresses.update);
			let customer_address = new commercelayer.model.CustomerAddress().setFields(data.CustomerAddresses.update);
	        return commercelayer.updateCustomerAddress(data.CustomerAddresses.update.id, customer_address, qf)
	            .then(response => {
	                Object.keys(data.CustomerAddresses.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerAddresses.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.CustomerAddresses.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.CustomerAddresses.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// CustomerAddresses.list
	if (permissions.CustomerAddresses && permissions.CustomerAddresses.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerAddresses()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
