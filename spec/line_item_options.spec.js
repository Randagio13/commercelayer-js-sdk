// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "LineItemOptions";


describe(SPEC_NAME, function() {

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
	                const id = response.get('id');
					console.log('Created LineItemOption with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// LineItemOptions.retrieve
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('retrieve'))
	if (data.LineItemOptions && data.LineItemOptions.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveLineItemOption(data.LineItemOptions.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.LineItemOptions.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// LineItemOptions.update
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('update'))
	if (data.LineItemOptions && data.LineItemOptions.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.LineItemOptions.update);
			let line_item_option = new commercelayer.model.LineItemOption().setFields(data.LineItemOptions.update);
	        return commercelayer.updateLineItemOption(data.LineItemOptions.update.id, line_item_option, qf)
	            .then(response => {
	                Object.keys(data.LineItemOptions.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.LineItemOptions.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.LineItemOptions.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.LineItemOptions.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// LineItemOptions.list
	if (permissions.LineItemOptions && permissions.LineItemOptions.includes('list'))
	    it("list", function() {
	        return commercelayer.listLineItemOptions()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
