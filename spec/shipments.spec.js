// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Shipments";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Shipments.create
	if (permissions.Shipments && permissions.Shipments.includes('create'))
	if (data.Shipments && data.Shipments.create)
	    it("create", function() {
	        return commercelayer.createShipment(new commercelayer.model.Shipment().setFields(data.Shipments.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Shipment with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Shipments.retrieve
	if (permissions.Shipments && permissions.Shipments.includes('retrieve'))
	if (data.Shipments && data.Shipments.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveShipment(data.Shipments.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Shipments.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Shipments.update
	if (permissions.Shipments && permissions.Shipments.includes('update'))
	if (data.Shipments && data.Shipments.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Shipments.update);
			let shipment = new commercelayer.model.Shipment().setFields(data.Shipments.update);
	        return commercelayer.updateShipment(data.Shipments.update.id, shipment, qf)
	            .then(response => {
	                Object.keys(data.Shipments.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Shipments.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Shipments.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Shipments.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Shipments.list
	if (permissions.Shipments && permissions.Shipments.includes('list'))
	    it("list", function() {
	        return commercelayer.listShipments()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
