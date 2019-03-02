// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Customers";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Customers.create
	if (permissions.Customers && permissions.Customers.includes('create'))
	if (data.Customers && data.Customers.create)
	    it("create", function() {
	        return commercelayer.createCustomer(new commercelayer.model.Customer().setFields(data.Customers.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Customer with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Customers.retrieve
	if (permissions.Customers && permissions.Customers.includes('retrieve'))
	if (data.Customers && data.Customers.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomer(data.Customers.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Customers.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Customers.update
	if (permissions.Customers && permissions.Customers.includes('update'))
	if (data.Customers && data.Customers.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Customers.update);
			let customer = new commercelayer.model.Customer().setFields(data.Customers.update);
	        return commercelayer.updateCustomer(data.Customers.update.id, customer, qf)
	            .then(response => {
	                Object.keys(data.Customers.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Customers.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Customers.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Customers.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Customers.list
	if (permissions.Customers && permissions.Customers.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomers()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
