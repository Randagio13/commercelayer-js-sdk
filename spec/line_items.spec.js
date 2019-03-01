// File automatically generated at 01/03/2019 16:03:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("LineItems", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// LineItems.create
	if (permissions.LineItems && permissions.LineItems.includes('create'))
	if (data.LineItems && data.LineItems.create)
	    it("create", function() {
	        return commercelayer.createLineItem(new commercelayer.model.LineItem().setFields(data.LineItems.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test LineItems.create skipped: missing required test data')
	else console.log('Test LineItems.create skipped: missing required resource permission')


	// LineItems.retrieve
	if (permissions.LineItems && permissions.LineItems.includes('retrieve'))
	if (data.LineItems && data.LineItems.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveLineItem(data.LineItems.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.LineItems.retrieve.id)
	            })
	    });
	else console.log('Test LineItems.retrieve skipped: missing required test data')
	else console.log('Test LineItems.retrieve skipped: missing required resource permission')


	// LineItems.update
	if (permissions.LineItems && permissions.LineItems.includes('update'))
	if (data.LineItems && data.LineItems.update)
	    it("update", function() {
	        return commercelayer.updateLineItem(data.LineItems.update.id, new commercelayer.model.LineItem().setFields(data.LineItems.update))
	            .then(response => {
	                Object.keys(data.LineItems.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.LineItems.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.LineItems.update[field])
	                })
	            })
	    });
	else console.log('Test LineItems.update skipped: missing required test data')
	else console.log('Test LineItems.update skipped: missing required resource permission')


	// LineItems.list
	if (permissions.LineItems && permissions.LineItems.includes('list'))
	    it("list", function() {
	        return commercelayer.listLineItems()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test LineItems.list skipped: missing required resource permission')

  });
  
