// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "CustomerSubscriptions";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerSubscriptions.create
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('create'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.create)
	    it("create", function() {
	        return commercelayer.createCustomerSubscription(new commercelayer.model.CustomerSubscription().setFields(data.CustomerSubscriptions.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created CustomerSubscription with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// CustomerSubscriptions.retrieve
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('retrieve'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerSubscription(data.CustomerSubscriptions.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerSubscriptions.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// CustomerSubscriptions.update
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('update'))
	if (data.CustomerSubscriptions && data.CustomerSubscriptions.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.CustomerSubscriptions.update);
			let customer_subscription = new commercelayer.model.CustomerSubscription().setFields(data.CustomerSubscriptions.update);
	        return commercelayer.updateCustomerSubscription(data.CustomerSubscriptions.update.id, customer_subscription, qf)
	            .then(response => {
	                Object.keys(data.CustomerSubscriptions.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerSubscriptions.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.CustomerSubscriptions.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.CustomerSubscriptions.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// CustomerSubscriptions.list
	if (permissions.CustomerSubscriptions && permissions.CustomerSubscriptions.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerSubscriptions()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
