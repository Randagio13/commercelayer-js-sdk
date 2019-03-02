// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "DeliveryLeadTimes";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// DeliveryLeadTimes.create
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('create'))
	if (data.DeliveryLeadTimes && data.DeliveryLeadTimes.create)
	    it("create", function() {
	        return commercelayer.createDeliveryLeadTime(new commercelayer.model.DeliveryLeadTime().setFields(data.DeliveryLeadTimes.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created DeliveryLeadTime with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// DeliveryLeadTimes.retrieve
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('retrieve'))
	if (data.DeliveryLeadTimes && data.DeliveryLeadTimes.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveDeliveryLeadTime(data.DeliveryLeadTimes.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.DeliveryLeadTimes.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// DeliveryLeadTimes.update
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('update'))
	if (data.DeliveryLeadTimes && data.DeliveryLeadTimes.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.DeliveryLeadTimes.update);
			let delivery_lead_time = new commercelayer.model.DeliveryLeadTime().setFields(data.DeliveryLeadTimes.update);
	        return commercelayer.updateDeliveryLeadTime(data.DeliveryLeadTimes.update.id, delivery_lead_time, qf)
	            .then(response => {
	                Object.keys(data.DeliveryLeadTimes.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.DeliveryLeadTimes.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.DeliveryLeadTimes.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.DeliveryLeadTimes.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// DeliveryLeadTimes.list
	if (permissions.DeliveryLeadTimes && permissions.DeliveryLeadTimes.includes('list'))
	    it("list", function() {
	        return commercelayer.listDeliveryLeadTimes()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
