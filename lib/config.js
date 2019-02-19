
module.exports = {

    clayer: {

        default : true,
  
        client_id       : null,
        market_id       : null,
        client_secret   : null,
        base_url        : null,
        base_path       : null,
        country_code    : 'US',
        language_code   : 'en',

    },

    sdk: {
        debug           : false,        // debug mode activated
        console         : false,        // log to console enabled
        trace           : false,        // trace client input/output to console
        auth_attempts   : 1,            // number of attempts of authentication
        response_type   : 'normalized', // Response format, possible values are: normalized | jsonapi | model | raw
        timeout : { // in milliseconds
            retry : 250,    // retry after authentication request in progress detected
            request : 2000  // client request timeout
        }
    }

}
