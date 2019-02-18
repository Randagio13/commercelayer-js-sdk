const sdk = require('./config').sdk

module.exports = {

    msg : (message) => {
        if (sdk.debug && sdk.console) console.log((message == undefined)? '' : message);
    },

    enable : () => {
        sdk.console = true;
    },

    disable : () => {
        sdk.console = false;
    },

    probe() {
        console.log('log enabled: ' + sdk.console);
        console.log('if log is enabled but is not visible maybe you are not in debug mode')
    },

    get enabled() { return sdk.console === true; }

}