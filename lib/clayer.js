const api = require('./api')
const config = require('./config')
const utils = require('./utils')

// Expose all api functions
module.exports = api.clapi;

// Expose SDK configuration
module.exports.settings = config.sdk;

// // Probe function
// module.exports.hey = () => { return 'Hello!' }

// SDK initialization
module.exports.initialize = (cfg) => {
    if (cfg != undefined) cfg.default = false;
    api.initialize(utils.mergeMaps(config.clayer, cfg))
}

module.exports.lastAccessToken = () => {
    return api.clapi.client.config.access_token;
}
