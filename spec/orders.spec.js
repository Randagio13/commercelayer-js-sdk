const commercelayer = require('../index')
const test = require = require('../test/test')


describe("Orders", function() {

    beforeAll(function() {
        commercelayer.settings.debug = false;
        commercelayer.initialize(test.config);
        // commercelayer.settings.console = false;
    });
  
    it("create", function() {
        return commercelayer.createOrder(new commercelayer.model.Order())
            .then(response => {
                expect(response.get('id')).not.toBeNull();                
            })
    });

    it("retrieve", function() {
        return commercelayer.retrieveOrder(9839)
            .then(response => {
                expect(response.get('id')).toBe('9839')
            })
    });

  });