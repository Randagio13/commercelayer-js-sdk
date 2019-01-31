
const sdk = require('./config').sdk

module.exports = {

    log : (message) => {
        if (sdk.debug) console.log((message == undefined)? '' : message);
    },

    extendMap : (map, ext) => {
        if (map == undefined) map = {};
        if (ext != undefined) Object.keys(ext).forEach(key => { map[key] = ext[key]; });
        return map;
    },

    mergeMaps : (map1, map2) => {
        return { ...map1, ...map2 }
    },

    cloneMap : (map) => {
        return (map == undefined)? map : { ...map };
    }

}
