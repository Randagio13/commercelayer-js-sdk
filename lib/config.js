
module.exports = {

    clayer: {

        default : true,

        authentication  : null,
  
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
        trace           : false,        // trace client request/response to console
        auth_attempts   : 1,            // number of attempts of authentication
        response_type   : 'normalized', // Response format, possible values are: normalized | jsonapi | model | raw
        error_type      : 'model',      // Error formet, possible values are: jsonapi | model | raw
        timeout : { // in milliseconds
            retry : 250,    // retry after authentication request in progress detected
            request : 3000  // client request timeout
        }
    }

}


module.exports.checkApiConfig = (config) => {

    if (config == undefined) throw 'missing config';
    if (config.base_url == undefined) throw 'missing base_url';
    if ((config.client_id == undefined) && (config.authentication == undefined)) throw 'missing client_id';

    if (config.authentication != undefined) {
        const auth = config.authentication;
        if (auth.client_id == undefined) throw 'missing authentication.client_id';
    }

    return true;
    
}
