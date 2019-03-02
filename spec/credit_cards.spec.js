// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "CreditCards";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CreditCards.create
	if (permissions.CreditCards && permissions.CreditCards.includes('create'))
	if (data.CreditCards && data.CreditCards.create)
	    it("create", function() {
	        return commercelayer.createCreditCard(new commercelayer.model.CreditCard().setFields(data.CreditCards.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created CreditCard with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// CreditCards.retrieve
	if (permissions.CreditCards && permissions.CreditCards.includes('retrieve'))
	if (data.CreditCards && data.CreditCards.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCreditCard(data.CreditCards.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CreditCards.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// CreditCards.update
	if (permissions.CreditCards && permissions.CreditCards.includes('update'))
	if (data.CreditCards && data.CreditCards.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.CreditCards.update);
			let credit_card = new commercelayer.model.CreditCard().setFields(data.CreditCards.update);
	        return commercelayer.updateCreditCard(data.CreditCards.update.id, credit_card, qf)
	            .then(response => {
	                Object.keys(data.CreditCards.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CreditCards.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.CreditCards.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.CreditCards.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// CreditCards.list
	if (permissions.CreditCards && permissions.CreditCards.includes('list'))
	    it("list", function() {
	        return commercelayer.listCreditCards()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
