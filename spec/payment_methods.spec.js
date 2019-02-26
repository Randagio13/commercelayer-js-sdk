// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("PaymentMethods", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// PaymentMethods.create
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('create'))
	    it("create", function() {
	        return commercelayer.createPaymentMethod(new commercelayer.model.PaymentMethod())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test PaymentMethods.create skipped: missing required resource permission')


	// PaymentMethods.retrieve
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('retrieve'))
	if (data.PaymentMethods && data.PaymentMethods.update)
	    it("retrieve", function() {
	        return commercelayer.retrievePaymentMethod(data.PaymentMethods.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.PaymentMethods.retrieve.id)
	            })
	    });
	else console.log('Test PaymentMethods.retrieve skipped: missing required test data')
	else console.log('Test PaymentMethods.retrieve skipped: missing required resource permission')


	// PaymentMethods.update
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('update'))
	if (data.PaymentMethods && data.PaymentMethods.update)
	    it("update", function() {
	        return commercelayer.updatePaymentMethod(data.PaymentMethods.update.id, new commercelayer.model.PaymentMethod().setFields(data.PaymentMethods.update.fields))
	            .then(response => {
	                Object.keys(data.PaymentMethods.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.PaymentMethods.update.fields[field])
	                })
	            })
	    });
	else console.log('Test PaymentMethods.update skipped: missing required test data')
	else console.log('Test PaymentMethods.update skipped: missing required resource permission')


	// PaymentMethods.list
	if (permissions.PaymentMethods && permissions.PaymentMethods.includes('list'))
	    it("list", function() {
	        return commercelayer.listPaymentMethods()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test PaymentMethods.list skipped: missing required resource permission')

  });
  
