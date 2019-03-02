// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("ShippingZones", function() {

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
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test ShippingZones.create skipped: missing required test data')
	else console.log('Test ShippingZones.create skipped: missing required resource permission')


	// ShippingZones.retrieve
	if (permissions.ShippingZones && permissions.ShippingZones.includes('retrieve'))
	if (data.ShippingZones && data.ShippingZones.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveShippingZone(data.ShippingZones.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.ShippingZones.retrieve.id)
	            })
	    });
	else console.log('Test ShippingZones.retrieve skipped: missing required test data')
	else console.log('Test ShippingZones.retrieve skipped: missing required resource permission')


	// ShippingZones.update
	if (permissions.ShippingZones && permissions.ShippingZones.includes('update'))
	if (data.ShippingZones && data.ShippingZones.update)
	    it("update", function() {
	        return commercelayer.updateShippingZone(data.ShippingZones.update.id, new commercelayer.model.ShippingZone().setFields(data.ShippingZones.update))
	            .then(response => {
	                Object.keys(data.ShippingZones.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.ShippingZones.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.ShippingZones.update[field])
	                })
	            })
	    });
	else console.log('Test ShippingZones.update skipped: missing required test data')
	else console.log('Test ShippingZones.update skipped: missing required resource permission')


	// ShippingZones.list
	if (permissions.ShippingZones && permissions.ShippingZones.includes('list'))
	    it("list", function() {
	        return commercelayer.listShippingZones()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test ShippingZones.list skipped: missing required resource permission')

  });
  
