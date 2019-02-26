// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("DeliveryLeadTimes", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// DeliveryLeadTimes.create
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('create'))
	    it("create", function() {
	        return commercelayer.createDeliveryLeadTime(new commercelayer.model.DeliveryLeadTime())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test DeliveryLeadTimes.create skipped: missing required resource permission')


	// DeliveryLeadTimes.retrieve
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('retrieve'))
	if (data.DeliveryLeadTimes && data.DeliveryLeadTimes.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveDeliveryLeadTime(data.DeliveryLeadTimes.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.DeliveryLeadTimes.retrieve.id)
	            })
	    });
	else console.log('Test DeliveryLeadTimes.retrieve skipped: missing required test data')
	else console.log('Test DeliveryLeadTimes.retrieve skipped: missing required resource permission')


	// DeliveryLeadTimes.update
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('update'))
	if (data.DeliveryLeadTimes && data.DeliveryLeadTimes.update)
	    it("update", function() {
	        return commercelayer.updateDeliveryLeadTime(data.DeliveryLeadTimes.update.id, new commercelayer.model.DeliveryLeadTime().setFields(data.DeliveryLeadTimes.update.fields))
	            .then(response => {
	                Object.keys(data.DeliveryLeadTimes.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.DeliveryLeadTimes.update.fields[field]))
	                })
	            })
	    });
	else console.log('Test DeliveryLeadTimes.update skipped: missing required test data')
	else console.log('Test DeliveryLeadTimes.update skipped: missing required resource permission')


	// DeliveryLeadTimes.list
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('list'))
	    it("list", function() {
	        return commercelayer.listDeliveryLeadTimes()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test DeliveryLeadTimes.list skipped: missing required resource permission')

  });
  
