// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "ShippingZones";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// ShippingZones.create
	if (permissions.ShippingZones && permissions.ShippingZones.includes('create'))
	if (data.ShippingZones && data.ShippingZones.create)
	    it("create", function() {
	        return commercelayer.createShippingZone(new commercelayer.model.ShippingZone().setFields(data.ShippingZones.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created ShippingZone with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// ShippingZones.retrieve
	if (permissions.ShippingZones && permissions.ShippingZones.includes('retrieve'))
	if (data.ShippingZones && data.ShippingZones.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveShippingZone(data.ShippingZones.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.ShippingZones.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// ShippingZones.update
	if (permissions.ShippingZones && permissions.ShippingZones.includes('update'))
	if (data.ShippingZones && data.ShippingZones.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.ShippingZones.update);
			let shipping_zone = new commercelayer.model.ShippingZone().setFields(data.ShippingZones.update);
	        return commercelayer.updateShippingZone(data.ShippingZones.update.id, shipping_zone, qf)
	            .then(response => {
	                Object.keys(data.ShippingZones.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.ShippingZones.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.ShippingZones.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.ShippingZones.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// ShippingZones.list
	if (permissions.ShippingZones && permissions.ShippingZones.includes('list'))
	    it("list", function() {
	        return commercelayer.listShippingZones()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
