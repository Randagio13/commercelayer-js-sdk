// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "CustomerPasswordResets";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerPasswordResets.create
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('create'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.create)
	    it("create", function() {
	        return commercelayer.createCustomerPasswordReset(new commercelayer.model.CustomerPasswordReset().setFields(data.CustomerPasswordResets.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created CustomerPasswordReset with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// CustomerPasswordResets.retrieve
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('retrieve'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerPasswordReset(data.CustomerPasswordResets.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerPasswordResets.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// CustomerPasswordResets.update
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('update'))
	if (data.CustomerPasswordResets && data.CustomerPasswordResets.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.CustomerPasswordResets.update);
			let customer_password_reset = new commercelayer.model.CustomerPasswordReset().setFields(data.CustomerPasswordResets.update);
	        return commercelayer.updateCustomerPasswordReset(data.CustomerPasswordResets.update.id, customer_password_reset, qf)
	            .then(response => {
	                Object.keys(data.CustomerPasswordResets.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerPasswordResets.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.CustomerPasswordResets.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.CustomerPasswordResets.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// CustomerPasswordResets.list
	if (permissions.CustomerPasswordResets && permissions.CustomerPasswordResets.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerPasswordResets()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
