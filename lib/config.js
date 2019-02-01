
module.exports = {

    clayer: {

        default : true,
  
        client_id : '351020e9c84f2076755083f08bfe8e47365a76395db1059c3219c37abff86534',
        market_id : '185',
        base_url : "https://static-commerce.commercelayer.io",
        base_path : null,
        country_code : 'US',
        language_code : 'en',

    },

    sdk: {
        debug           : false,    // debug mode activated
        console         : false,    // log to console enabled
        trace           : false,    // trace client input/output to console
        auth_attempts   : 1,        // number of attempts of authentication
        raw_response    : false,    // get response in JSON-Api format without deserialization
        timeout : { // in milliseconds
            retry : 200,    // retry after authentication request in progress detected
            request : 2000  // client request timeout
        }
    }

}
