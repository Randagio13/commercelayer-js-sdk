// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Webhooks";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Webhooks.create
	if (permissions.Webhooks && permissions.Webhooks.includes('create'))
	if (data.Webhooks && data.Webhooks.create)
	    it("create", function() {
	        return commercelayer.createWebhook(new commercelayer.model.Webhook().setFields(data.Webhooks.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Webhook with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Webhooks.retrieve
	if (permissions.Webhooks && permissions.Webhooks.includes('retrieve'))
	if (data.Webhooks && data.Webhooks.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveWebhook(data.Webhooks.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Webhooks.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Webhooks.update
	if (permissions.Webhooks && permissions.Webhooks.includes('update'))
	if (data.Webhooks && data.Webhooks.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Webhooks.update);
			let webhook = new commercelayer.model.Webhook().setFields(data.Webhooks.update);
	        return commercelayer.updateWebhook(data.Webhooks.update.id, webhook, qf)
	            .then(response => {
	                Object.keys(data.Webhooks.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Webhooks.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Webhooks.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Webhooks.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Webhooks.list
	if (permissions.Webhooks && permissions.Webhooks.includes('list'))
	    it("list", function() {
	        return commercelayer.listWebhooks()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
