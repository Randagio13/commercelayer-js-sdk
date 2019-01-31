const api = require('./api')
const config = require('./config')
const utils = require('./utils')

// Expose all api functions
module.exports = api.clapi;

module.exports.initialize = (cfg) => {
    if (cfg != undefined) cfg.default = false;
    api.initialize(utils.mergeMaps(config.clayer, cfg))
}

module.exports.lastAccessToken = () => {
    return api.clapi.client.config.access_token;
}

module.exports.settings = config.sdk;
