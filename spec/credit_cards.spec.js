// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("CreditCards", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CreditCards.create
	if (permissions.CreditCards && permissions.CreditCards.includes('create'))
	    it("create", function() {
	        return commercelayer.createCreditCard(new commercelayer.model.CreditCard())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test CreditCards.create skipped: missing required resource permission')


	// CreditCards.retrieve
	if (permissions.CreditCards && permissions.CreditCards.includes('retrieve'))
	if (data.CreditCards && data.CreditCards.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveCreditCard(data.CreditCards.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CreditCards.retrieve.id)
	            })
	    });
	else console.log('Test CreditCards.retrieve skipped: missing required test data')
	else console.log('Test CreditCards.retrieve skipped: missing required resource permission')


	// CreditCards.update
	if (permissions.CreditCards && permissions.CreditCards.includes('update'))
	if (data.CreditCards && data.CreditCards.update)
	    it("update", function() {
	        return commercelayer.updateCreditCard(data.CreditCards.update.id, new commercelayer.model.CreditCard().setFields(data.CreditCards.update.fields))
	            .then(response => {
	                Object.keys(data.CreditCards.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.CreditCards.update.fields[field])
	                })
	            })
	    });
	else console.log('Test CreditCards.update skipped: missing required test data')
	else console.log('Test CreditCards.update skipped: missing required resource permission')


	// CreditCards.list
	if (permissions.CreditCards && permissions.CreditCards.includes('list'))
	    it("list", function() {
	        return commercelayer.listCreditCards()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test CreditCards.list skipped: missing required resource permission')

  });
  
