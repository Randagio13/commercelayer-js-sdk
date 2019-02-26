// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createShippingZone(new commercelayer.model.ShippingZone())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test ShippingZones.create skipped: missing required resource permission')


	// ShippingZones.retrieve
	if (permissions.ShippingZones && permissions.ShippingZones.includes('retrieve'))
	if (data.ShippingZones && data.ShippingZones.update)
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
	        return commercelayer.updateShippingZone(data.ShippingZones.update.id, new commercelayer.model.ShippingZone().setFields(data.ShippingZones.update.fields))
	            .then(response => {
	                Object.keys(data.ShippingZones.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.ShippingZones.update.fields[field])
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
  
