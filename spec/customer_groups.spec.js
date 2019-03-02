// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "CustomerGroups";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// CustomerGroups.create
	if (permissions.CustomerGroups && permissions.CustomerGroups.includes('create'))
	if (data.CustomerGroups && data.CustomerGroups.create)
	    it("create", function() {
	        return commercelayer.createCustomerGroup(new commercelayer.model.CustomerGroup().setFields(data.CustomerGroups.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created CustomerGroup with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// CustomerGroups.retrieve
	if (permissions.CustomerGroups && permissions.CustomerGroups.includes('retrieve'))
	if (data.CustomerGroups && data.CustomerGroups.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveCustomerGroup(data.CustomerGroups.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.CustomerGroups.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// CustomerGroups.update
	if (permissions.CustomerGroups && permissions.CustomerGroups.includes('update'))
	if (data.CustomerGroups && data.CustomerGroups.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.CustomerGroups.update);
			let customer_group = new commercelayer.model.CustomerGroup().setFields(data.CustomerGroups.update);
	        return commercelayer.updateCustomerGroup(data.CustomerGroups.update.id, customer_group, qf)
	            .then(response => {
	                Object.keys(data.CustomerGroups.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.CustomerGroups.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.CustomerGroups.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.CustomerGroups.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// CustomerGroups.list
	if (permissions.CustomerGroups && permissions.CustomerGroups.includes('list'))
	    it("list", function() {
	        return commercelayer.listCustomerGroups()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
