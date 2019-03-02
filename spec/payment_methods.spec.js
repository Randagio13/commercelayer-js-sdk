// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "PaymentMethods";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// PaymentMethods.create
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('create'))
	if (data.PaymentMethods && data.PaymentMethods.create)
	    it("create", function() {
	        return commercelayer.createPaymentMethod(new commercelayer.model.PaymentMethod().setFields(data.PaymentMethods.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created PaymentMethod with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// PaymentMethods.retrieve
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('retrieve'))
	if (data.PaymentMethods && data.PaymentMethods.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePaymentMethod(data.PaymentMethods.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.PaymentMethods.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// PaymentMethods.update
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('update'))
	if (data.PaymentMethods && data.PaymentMethods.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.PaymentMethods.update);
			let payment_method = new commercelayer.model.PaymentMethod().setFields(data.PaymentMethods.update);
	        return commercelayer.updatePaymentMethod(data.PaymentMethods.update.id, payment_method, qf)
	            .then(response => {
	                Object.keys(data.PaymentMethods.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.PaymentMethods.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.PaymentMethods.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.PaymentMethods.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// PaymentMethods.list
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('list'))
	    it("list", function() {
	        return commercelayer.listPaymentMethods()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
