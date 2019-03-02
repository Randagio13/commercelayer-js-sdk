// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Imports";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Imports.create
	if (permissions.Imports && permissions.Imports.includes('create'))
	if (data.Imports && data.Imports.create)
	    it("create", function() {
	        return commercelayer.createImport(new commercelayer.model.Import().setFields(data.Imports.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Import with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Imports.retrieve
	if (permissions.Imports && permissions.Imports.includes('retrieve'))
	if (data.Imports && data.Imports.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveImport(data.Imports.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Imports.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Imports.update
	if (permissions.Imports && permissions.Imports.includes('update'))
	if (data.Imports && data.Imports.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Imports.update);
			let import_ = new commercelayer.model.Import().setFields(data.Imports.update);
	        return commercelayer.updateImport(data.Imports.update.id, import_, qf)
	            .then(response => {
	                Object.keys(data.Imports.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Imports.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Imports.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Imports.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Imports.list
	if (permissions.Imports && permissions.Imports.includes('list'))
	    it("list", function() {
	        return commercelayer.listImports()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
