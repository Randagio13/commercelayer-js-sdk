// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "WireTransfers";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// WireTransfers.create
	if (permissions.WireTransfers && permissions.WireTransfers.includes('create'))
	if (data.WireTransfers && data.WireTransfers.create)
	    it("create", function() {
	        return commercelayer.createWireTransfer(new commercelayer.model.WireTransfer().setFields(data.WireTransfers.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created WireTransfer with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// WireTransfers.retrieve
	if (permissions.WireTransfers && permissions.WireTransfers.includes('retrieve'))
	if (data.WireTransfers && data.WireTransfers.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveWireTransfer(data.WireTransfers.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.WireTransfers.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// WireTransfers.update
	if (permissions.WireTransfers && permissions.WireTransfers.includes('update'))
	if (data.WireTransfers && data.WireTransfers.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.WireTransfers.update);
			let wire_transfer = new commercelayer.model.WireTransfer().setFields(data.WireTransfers.update);
	        return commercelayer.updateWireTransfer(data.WireTransfers.update.id, wire_transfer, qf)
	            .then(response => {
	                Object.keys(data.WireTransfers.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.WireTransfers.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.WireTransfers.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.WireTransfers.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// WireTransfers.list
	if (permissions.WireTransfers && permissions.WireTransfers.includes('list'))
	    it("list", function() {
	        return commercelayer.listWireTransfers()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
