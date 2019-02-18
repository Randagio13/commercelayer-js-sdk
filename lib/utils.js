
const log = require('./log')

module.exports = {

    log : (message) => {    // BWC
        log.msg(message);
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
    },

    sleep : (ms, msg) => {
        module.exports.log((msg? `${msg} - ` : '').concat(`waiting ${ms} msecs ...`));
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    guid : () => {
        return (Date.now().toString(36) + '.' + Math.random().toString(36).slice(2).substr(0, 6)).toUpperCase();
    }

}
