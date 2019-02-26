// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Shipments", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Shipments.create
	if (permissions.Shipments && permissions.Shipments.includes('create'))
	    it("create", function() {
	        return commercelayer.createShipment(new commercelayer.model.Shipment())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Shipments.create skipped: missing required resource permission')


	// Shipments.retrieve
	if (permissions.Shipments && permissions.Shipments.includes('retrieve'))
	if (data.Shipments && data.Shipments.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveShipment(data.Shipments.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Shipments.retrieve.id)
	            })
	    });
	else console.log('Test Shipments.retrieve skipped: missing required test data')
	else console.log('Test Shipments.retrieve skipped: missing required resource permission')


	// Shipments.update
	if (permissions.Shipments && permissions.Shipments.includes('update'))
	if (data.Shipments && data.Shipments.update)
	    it("update", function() {
	        return commercelayer.updateShipment(data.Shipments.update.id, new commercelayer.model.Shipment().setFields(data.Shipments.update.fields))
	            .then(response => {
	                Object.keys(data.Shipments.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.Shipments.update.fields[field]))
	                })
	            })
	    });
	else console.log('Test Shipments.update skipped: missing required test data')
	else console.log('Test Shipments.update skipped: missing required resource permission')


	// Shipments.list
	if (permissions.Shipments && permissions.Shipments.includes('list'))
	    it("list", function() {
	        return commercelayer.listShipments()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Shipments.list skipped: missing required resource permission')

  });
  
