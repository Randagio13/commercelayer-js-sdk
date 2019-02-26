// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Parcels", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Parcels.create
	if (permissions.Parcels && permissions.Parcels.includes('create'))
	    it("create", function() {
	        return commercelayer.createParcel(new commercelayer.model.Parcel())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Parcels.create skipped: missing required resource permission')


	// Parcels.retrieve
	if (permissions.Parcels && permissions.Parcels.includes('retrieve'))
	if (data.Parcels && data.Parcels.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveParcel(data.Parcels.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Parcels.retrieve.id)
	            })
	    });
	else console.log('Test Parcels.retrieve skipped: missing required test data')
	else console.log('Test Parcels.retrieve skipped: missing required resource permission')


	// Parcels.update
	if (permissions.Parcels && permissions.Parcels.includes('update'))
	if (data.Parcels && data.Parcels.update)
	    it("update", function() {
	        return commercelayer.updateParcel(data.Parcels.update.id, new commercelayer.model.Parcel().setFields(data.Parcels.update.fields))
	            .then(response => {
	                Object.keys(data.Parcels.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.Parcels.update.fields[field]))
	                })
	            })
	    });
	else console.log('Test Parcels.update skipped: missing required test data')
	else console.log('Test Parcels.update skipped: missing required resource permission')


	// Parcels.list
	if (permissions.Parcels && permissions.Parcels.includes('list'))
	    it("list", function() {
	        return commercelayer.listParcels()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Parcels.list skipped: missing required resource permission')

  });
  
