// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Addresses";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Addresses.create
	if (permissions.Addresses && permissions.Addresses.includes('create'))
	if (data.Addresses && data.Addresses.create)
	    it("create", function() {
	        return commercelayer.createAddress(new commercelayer.model.Address().setFields(data.Addresses.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Address with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Addresses.retrieve
	if (permissions.Addresses && permissions.Addresses.includes('retrieve'))
	if (data.Addresses && data.Addresses.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveAddress(data.Addresses.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Addresses.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Addresses.update
	if (permissions.Addresses && permissions.Addresses.includes('update'))
	if (data.Addresses && data.Addresses.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Addresses.update);
			let address = new commercelayer.model.Address().setFields(data.Addresses.update);
	        return commercelayer.updateAddress(data.Addresses.update.id, address, qf)
	            .then(response => {
	                Object.keys(data.Addresses.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Addresses.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Addresses.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Addresses.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Addresses.list
	if (permissions.Addresses && permissions.Addresses.includes('list'))
	    it("list", function() {
	        return commercelayer.listAddresses()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
