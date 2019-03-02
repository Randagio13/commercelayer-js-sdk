// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "CustomerPaymentSources";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerPaymentSources.create
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('create'))
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.create)
	    it("create", function() {
	        return commercelayer.createCustomerPaymentSource(new commercelayer.model.CustomerPaymentSource().setFields(data.CustomerPaymentSources.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created CustomerPaymentSource with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// CustomerPaymentSources.retrieve
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('retrieve'))
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerPaymentSource(data.CustomerPaymentSources.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerPaymentSources.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// CustomerPaymentSources.update
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('update'))
	if (data.CustomerPaymentSources && data.CustomerPaymentSources.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.CustomerPaymentSources.update);
			let customer_payment_source = new commercelayer.model.CustomerPaymentSource().setFields(data.CustomerPaymentSources.update);
	        return commercelayer.updateCustomerPaymentSource(data.CustomerPaymentSources.update.id, customer_payment_source, qf)
	            .then(response => {
	                Object.keys(data.CustomerPaymentSources.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerPaymentSources.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.CustomerPaymentSources.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.CustomerPaymentSources.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// CustomerPaymentSources.list
	if (permissions.CustomerPaymentSources && permissions.CustomerPaymentSources.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerPaymentSources()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
