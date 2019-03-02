// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Orders";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Orders.create
	if (permissions.Orders && permissions.Orders.includes('create'))
	if (data.Orders && data.Orders.create)
	    it("create", function() {
	        return commercelayer.createOrder(new commercelayer.model.Order().setFields(data.Orders.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Order with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Orders.retrieve
	if (permissions.Orders && permissions.Orders.includes('retrieve'))
	if (data.Orders && data.Orders.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveOrder(data.Orders.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Orders.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Orders.update
	if (permissions.Orders && permissions.Orders.includes('update'))
	if (data.Orders && data.Orders.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Orders.update);
			let order = new commercelayer.model.Order().setFields(data.Orders.update);
	        return commercelayer.updateOrder(data.Orders.update.id, order, qf)
	            .then(response => {
	                Object.keys(data.Orders.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Orders.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Orders.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Orders.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Orders.list
	if (permissions.Orders && permissions.Orders.includes('list'))
	    it("list", function() {
	        return commercelayer.listOrders()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
