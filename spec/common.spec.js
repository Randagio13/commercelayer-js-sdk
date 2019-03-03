// File automatically generated at 02/03/2019 19:27:59 by commercelayer-js-sdk-codegen


const commercelayer = require('../index')
const config = require('./support/config')
const common = require('./common-core.spec')


const SPEC = "Addresses";
const RES = "Address"


describe(SPEC, function() {

    beforeAll(function() {
        commercelayer.initialize(config);
        commercelayer.settings.response_type = 'normalized'
    });
  

	common.create(SPEC, 'create', RES)

	common.retrieve(SPEC, 'retrieve', RES)

	common.update(SPEC, 'update', RES)


	common.list(SPEC, 'list', RES)

  });
  
