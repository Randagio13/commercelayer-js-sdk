// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("WireTransfers", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// WireTransfers.create
	if (permissions.WireTransfers && permissions.WireTransfers.includes('create'))
	    it("create", function() {
	        return commercelayer.createWireTransfer(new commercelayer.model.WireTransfer())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test WireTransfers.create skipped: missing required resource permission')


	// WireTransfers.retrieve
	if (permissions.WireTransfers && permissions.WireTransfers.includes('retrieve'))
	if (data.WireTransfers && data.WireTransfers.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveWireTransfer(data.WireTransfers.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.WireTransfers.retrieve.id)
	            })
	    });
	else console.log('Test WireTransfers.retrieve skipped: missing required test data')
	else console.log('Test WireTransfers.retrieve skipped: missing required resource permission')


	// WireTransfers.update
	if (permissions.WireTransfers && permissions.WireTransfers.includes('update'))
	if (data.WireTransfers && data.WireTransfers.update)
	    it("update", function() {
	        return commercelayer.updateWireTransfer(data.WireTransfers.update.id, new commercelayer.model.WireTransfer().setFields(data.WireTransfers.update.fields))
	            .then(response => {
	                Object.keys(data.WireTransfers.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.WireTransfers.update.fields[field])
	                })
	            })
	    });
	else console.log('Test WireTransfers.update skipped: missing required test data')
	else console.log('Test WireTransfers.update skipped: missing required resource permission')


	// WireTransfers.list
	if (permissions.WireTransfers && permissions.WireTransfers.includes('list'))
	    it("list", function() {
	        return commercelayer.listWireTransfers()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test WireTransfers.list skipped: missing required resource permission')

  });
  
