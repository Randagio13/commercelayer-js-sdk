// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "ShippingCategories";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// ShippingCategories.create
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('create'))
	if (data.ShippingCategories && data.ShippingCategories.create)
	    it("create", function() {
	        return commercelayer.createShippingCategory(new commercelayer.model.ShippingCategory().setFields(data.ShippingCategories.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created ShippingCategory with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// ShippingCategories.retrieve
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('retrieve'))
	if (data.ShippingCategories && data.ShippingCategories.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveShippingCategory(data.ShippingCategories.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.ShippingCategories.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// ShippingCategories.update
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('update'))
	if (data.ShippingCategories && data.ShippingCategories.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.ShippingCategories.update);
			let shipping_category = new commercelayer.model.ShippingCategory().setFields(data.ShippingCategories.update);
	        return commercelayer.updateShippingCategory(data.ShippingCategories.update.id, shipping_category, qf)
	            .then(response => {
	                Object.keys(data.ShippingCategories.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.ShippingCategories.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.ShippingCategories.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.ShippingCategories.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// ShippingCategories.list
	if (permissions.ShippingCategories && permissions.ShippingCategories.includes('list'))
	    it("list", function() {
	        return commercelayer.listShippingCategories()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
