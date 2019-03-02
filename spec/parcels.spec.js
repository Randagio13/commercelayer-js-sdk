// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const permissions = require('./support/permissions')
const config = require('./support/config')
const data = require('./support/data')
const utils = require('./support/utils')


const SPEC_NAME = "Parcels";


describe(SPEC_NAME, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	// Parcels.create
	if (permissions.Parcels && permissions.Parcels.includes('create'))
	if (data.Parcels && data.Parcels.create)
	    it("create", function() {
	        return commercelayer.createParcel(new commercelayer.model.Parcel().setFields(data.Parcels.create))
	            .then(response => {
	                const id = response.get('id');
					console.log('Created Parcel with id ' + id)
					expect(id).not.toBeNull();
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'create')
	else utils.missingRequiredPermission(SPEC_NAME, 'create')


	// Parcels.retrieve
	if (permissions.Parcels && permissions.Parcels.includes('retrieve'))
	if (data.Parcels && data.Parcels.retrieve)
	    it("retrieve", function() {
	        return commercelayer.retrieveParcel(data.Parcels.retrieve.id)
	            .then(response => {
	                expect(response.get('id')).toBe(data.Parcels.retrieve.id.toString())
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'retrieve')
	else utils.missingRequiredPermission(SPEC_NAME, 'retrieve')


	// Parcels.update
	if (permissions.Parcels && permissions.Parcels.includes('update'))
	if (data.Parcels && data.Parcels.update)
	    it("update", function() {
	    	let qf = utils.buildQueryFilter(data.Parcels.update);
			let parcel = new commercelayer.model.Parcel().setFields(data.Parcels.update);
	        return commercelayer.updateParcel(data.Parcels.update.id, parcel, qf)
	            .then(response => {
	                Object.keys(data.Parcels.update).forEach(field => {
	                	if (commercelayer.model.helper.isApiResource(data.Parcels.update[field]))
							expect(response.get([field+'.id'])[field].id).toBe(data.Parcels.update[field].id.toString())
						else
							expect(utils.toString(response.get(field))).toBe(data.Parcels.update[field].toString())
	                })
	            })
	    });
	else utils.missingRequiredData(SPEC_NAME, 'update')
	else utils.missingRequiredPermission(SPEC_NAME, 'update')


	// Parcels.list
	if (permissions.Parcels && permissions.Parcels.includes('list'))
	    it("list", function() {
	        return commercelayer.listParcels()
	            .then(response => {
	                expect(response.get(['id']).length).toBeGreaterThan(0)
	            })
	    });
	else utils.missingRequiredPermission(SPEC_NAME, 'list')

  });
  
