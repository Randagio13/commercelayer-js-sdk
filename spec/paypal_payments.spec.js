// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "PaypalPayments";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// PaypalPayments.create
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('create'))
	if (data.PaypalPayments && data.PaypalPayments.create)
	    it("create", function() {
	        return commercelayer.createPaypalPayment(new commercelayer.model.PaypalPayment().setFields(data.PaypalPayments.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created PaypalPayment with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// PaypalPayments.retrieve
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('retrieve'))
	if (data.PaypalPayments && data.PaypalPayments.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePaypalPayment(data.PaypalPayments.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.PaypalPayments.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// PaypalPayments.update
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('update'))
	if (data.PaypalPayments && data.PaypalPayments.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.PaypalPayments.update);
			let paypal_payment = new commercelayer.model.PaypalPayment().setFields(data.PaypalPayments.update);
	        return commercelayer.updatePaypalPayment(data.PaypalPayments.update.id, paypal_payment, qf)
	            .then(response => {
	                Object.keys(data.PaypalPayments.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.PaypalPayments.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.PaypalPayments.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.PaypalPayments.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// PaypalPayments.list
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('list'))
	    it("list", function() {
	        return commercelayer.listPaypalPayments()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
