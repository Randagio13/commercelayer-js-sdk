// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "ShippingMethods";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// ShippingMethods.create
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('create'))
	if (data.ShippingMethods && data.ShippingMethods.create)
	    it("create", function() {
	        return commercelayer.createShippingMethod(new commercelayer.model.ShippingMethod().setFields(data.ShippingMethods.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created ShippingMethod with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// ShippingMethods.retrieve
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('retrieve'))
	if (data.ShippingMethods && data.ShippingMethods.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveShippingMethod(data.ShippingMethods.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.ShippingMethods.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// ShippingMethods.update
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('update'))
	if (data.ShippingMethods && data.ShippingMethods.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.ShippingMethods.update);
			let shipping_method = new commercelayer.model.ShippingMethod().setFields(data.ShippingMethods.update);
	        return commercelayer.updateShippingMethod(data.ShippingMethods.update.id, shipping_method, qf)
	            .then(response => {
	                Object.keys(data.ShippingMethods.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.ShippingMethods.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.ShippingMethods.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.ShippingMethods.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// ShippingMethods.list
	if (permissions.ShippingMethods && permissions.ShippingMethods.includes('list'))
	    it("list", function() {
	        return commercelayer.listShippingMethods()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
