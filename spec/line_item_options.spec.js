// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("LineItemOptions", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// LineItemOptions.create
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('create'))
	if (data.LineItemOptions && data.LineItemOptions.create)
	    it("create", function() {
	        return commercelayer.createLineItemOption(new commercelayer.model.LineItemOption().setFields(data.LineItemOptions.create))
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test LineItemOptions.create skipped: missing required test data')
	else console.log('Test LineItemOptions.create skipped: missing required resource permission')


	// LineItemOptions.retrieve
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('retrieve'))
	if (data.LineItemOptions && data.LineItemOptions.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveLineItemOption(data.LineItemOptions.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.LineItemOptions.retrieve.id)
	            })
	    });
	else console.log('Test LineItemOptions.retrieve skipped: missing required test data')
	else console.log('Test LineItemOptions.retrieve skipped: missing required resource permission')


	// LineItemOptions.update
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('update'))
	if (data.LineItemOptions && data.LineItemOptions.update)
	    it("update", function() {
	        return commercelayer.updateLineItemOption(data.LineItemOptions.update.id, new commercelayer.model.LineItemOption().setFields(data.LineItemOptions.update))
	            .then(response => {
	                Object.keys(data.LineItemOptions.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.LineItemOptions.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.LineItemOptions.update[field])
	                })
	            })
	    });
	else console.log('Test LineItemOptions.update skipped: missing required test data')
	else console.log('Test LineItemOptions.update skipped: missing required resource permission')


	// LineItemOptions.list
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('list'))
	    it("list", function() {
	        return commercelayer.listLineItemOptions()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test LineItemOptions.list skipped: missing required resource permission')

  });
  
