// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createPaypalPayment(new commercelayer.model.PaypalPayment())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test PaypalPayments.create skipped: missing required resource permission')


	// PaypalPayments.retrieve
	if (permissions.PaypalPayments && permissions.PaypalPayments.includes('retrieve'))
	if (data.PaypalPayments && data.PaypalPayments.update)
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
	        return commercelayer.updatePaypalPayment(data.PaypalPayments.update.id, new commercelayer.model.PaypalPayment().setFields(data.PaypalPayments.update.fields))
	            .then(response => {
	                Object.keys(data.PaypalPayments.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.PaypalPayments.update.fields[field]))
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
  
