const api = require('./api')
const config = require('./config')
const utils = require('./utils')
const auth = require('./auth')

// Expose all api functions
module.exports = api.clapi;

// Expose SDK configuration
module.exports.settings = config.sdk;

// Expose SDK constants
// module.exports.const = require('./const')


// SDK initialization
module.exports.initialize = (cfg) => {
    if (cfg != undefined) cfg.default = false;
    api.initialize(utils.mergeMaps(config.clayer, cfg))
}


// Authentication types
module.exports.auth = {
    ClientCredentials : (client_id, client_secret) => { return new auth.ClientCredentials(client_id, client_secret) },
    Password : (cfg) => { return new auth.Password(cfg) },
    AuthorizationCode : (cfg) => { return new auth.AuthorizationCode(cfg) },
    RefreshToken : (client_id, client_secret, refresh_token) => { return new auth.RefreshToken(client_id, client_secret, refresh_token) }
}

module.exports.auth.lastAccessToken = () => {
    return api.clapi.client.config.access_token;
}
