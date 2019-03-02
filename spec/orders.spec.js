// File automatically generated at 01/03/2019 18:57:42 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Orders", function() {

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
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Orders.create skipped: missing required test data')
	else console.log('Test Orders.create skipped: missing required resource permission')


	// Orders.retrieve
	if (permissions.Orders && permissions.Orders.includes('retrieve'))
	if (data.Orders && data.Orders.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveOrder(data.Orders.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Orders.retrieve.id)
	            })
	    });
	else console.log('Test Orders.retrieve skipped: missing required test data')
	else console.log('Test Orders.retrieve skipped: missing required resource permission')


	// Orders.update
	if (permissions.Orders && permissions.Orders.includes('update'))
	if (data.Orders && data.Orders.update)
	    it("update", function() {
	        return commercelayer.updateOrder(data.Orders.update.id, new commercelayer.model.Order().setFields(data.Orders.update))
	            .then(response => {
	                Object.keys(data.Orders.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Orders.update[field])) {
							console.log('Evaluation of resource object not supported ['  + field + ']')
						}
	                    else expect(response.get(field)).toBe(data.Orders.update[field])
	                })
	            })
	    });
	else console.log('Test Orders.update skipped: missing required test data')
	else console.log('Test Orders.update skipped: missing required resource permission')


	// Orders.list
	if (permissions.Orders && permissions.Orders.includes('list'))
	    it("list", function() {
	        return commercelayer.listOrders()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Orders.list skipped: missing required resource permission')

  });
  
