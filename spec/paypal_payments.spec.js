// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("PaypalPayments", function() {

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
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test PaypalPayments.create skipped: missing required test data')
	else console.log('Test PaypalPayments.create skipped: missing required resource permission')


	// PaypalPayments.retrieve
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('retrieve'))
	if (data.PaypalPayments && data.PaypalPayments.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrievePaypalPayment(data.PaypalPayments.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.PaypalPayments.retrieve.id)
	            })
	    });
	else console.log('Test PaypalPayments.retrieve skipped: missing required test data')
	else console.log('Test PaypalPayments.retrieve skipped: missing required resource permission')


	// PaypalPayments.update
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('update'))
	if (data.PaypalPayments && data.PaypalPayments.update)
	    it("update", function() {
	        return commercelayer.updatePaypalPayment(data.PaypalPayments.update.id, new commercelayer.model.PaypalPayment().setFields(data.PaypalPayments.update))
	            .then(response => {
	                Object.keys(data.PaypalPayments.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.PaypalPayments.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.PaypalPayments.update[field])
	                })
	            })
	    });
	else console.log('Test PaypalPayments.update skipped: missing required test data')
	else console.log('Test PaypalPayments.update skipped: missing required resource permission')


	// PaypalPayments.list
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('list'))
	    it("list", function() {
	        return commercelayer.listPaypalPayments()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test PaypalPayments.list skipped: missing required resource permission')

  });
  
