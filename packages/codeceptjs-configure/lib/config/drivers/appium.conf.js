const merge = require('deepmerge');
const host = require('../../host/host');

const appium_conf = {
    helpers: {
        Appium: {
            url: host.get(),
        },
    },
};
const get = function (conf) {
    conf = merge(conf, appium_conf);

    return conf;
};

module.exports = { get };
