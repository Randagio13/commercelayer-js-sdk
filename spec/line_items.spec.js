// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "LineItems";


describe(SPEC_NAME, function() {

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
	                const id = response.get('id');
					console.log('Created LineItem with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// LineItems.retrieve
	if (permissions.LineItems && permissions.LineItems.includes('retrieve'))
	if (data.LineItems && data.LineItems.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveLineItem(data.LineItems.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.LineItems.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// LineItems.update
	if (permissions.LineItems && permissions.LineItems.includes('update'))
	if (data.LineItems && data.LineItems.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.LineItems.update);
			let line_item = new commercelayer.model.LineItem().setFields(data.LineItems.update);
	        return commercelayer.updateLineItem(data.LineItems.update.id, line_item, qf)
	            .then(response => {
	                Object.keys(data.LineItems.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.LineItems.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.LineItems.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.LineItems.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// LineItems.list
	if (permissions.LineItems && permissions.LineItems.includes('list'))
	    it("list", function() {
	        return commercelayer.listLineItems()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
