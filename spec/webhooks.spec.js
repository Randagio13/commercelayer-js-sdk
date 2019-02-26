// File automatically generated at 26/02/2019 18:21:08 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')


describe("Webhooks", function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Webhooks.create
	if (permissions.Webhooks && permissions.Webhooks.includes('create'))
	    it("create", function() {
	        return commercelayer.createWebhook(new commercelayer.model.Webhook())
	            .then(response => {
	                expect(response.get('id')).not.toBeNull();                
	            })
	    });
	else console.log('Test Webhooks.create skipped: missing required resource permission')


	// Webhooks.retrieve
	if (permissions.Webhooks && permissions.Webhooks.includes('retrieve'))
	if (data.Webhooks && data.Webhooks.update)
	    it("retrieve", function() {
	        return commercelayer.retrieveWebhook(data.Webhooks.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Webhooks.retrieve.id)
	            })
	    });
	else console.log('Test Webhooks.retrieve skipped: missing required test data')
	else console.log('Test Webhooks.retrieve skipped: missing required resource permission')


	// Webhooks.update
	if (permissions.Webhooks && permissions.Webhooks.includes('update'))
	if (data.Webhooks && data.Webhooks.update)
	    it("update", function() {
	        return commercelayer.updateWebhook(data.Webhooks.update.id, new commercelayer.model.Webhook().setFields(data.Webhooks.update.fields))
	            .then(response => {
	                Object.keys(data.Webhooks.update.fields).forEach(field => {
	                    expect(response.get(field)).toBe(data.Webhooks.update.fields[field])
	                })
	            })
	    });
	else console.log('Test Webhooks.update skipped: missing required test data')
	else console.log('Test Webhooks.update skipped: missing required resource permission')


	// Webhooks.list
	if (permissions.Webhooks && permissions.Webhooks.includes('list'))
	    it("list", function() {
	        return commercelayer.listWebhooks()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else console.log('Test Webhooks.list skipped: missing required resource permission')

  });
  
