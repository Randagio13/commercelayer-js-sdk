// File automatically generated at 26/02/2019 09:22:29 by commercelayer-js-sdk-codegen


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
	    it("create", function() {
	        return commercelayer.createOrder(new commercelayer.model.Order())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Orders.create skipped: missing required resource permission')


	// Orders.retrieve
	if (permissions.Orders && permissions.Orders.includes('retrieve'))
	if (data.Orders && data.Orders.update)
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
	        return commercelayer.updateOrder(data.Orders.update.id, new commercelayer.model.Order().setFields(data.Orders.update.fields))
	            .then(response => {
	                Object.keys(data.Orders.update.fields).forEach(field => {
	                    expect(response.get(field).toBe(data.Orders.update.fields[field]))
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
  
