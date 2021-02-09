const merge = require('deepmerge');
const host = require('../../host/host');
const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

const appium_conf = {
    helpers: {
        Appium: {
            url: host.get(),
            smartWait: 5000,
            waitForTimeout: 25000,
            customLocatorStrategy:
                process.env.CUSTOM_LOCATOR_STRATEGY === true || process.env.CUSTOM_LOCATOR_STRATEGY === 'true'
                    ? locatorStrategy
                    : undefined,
        },
    },
};
const get = function (conf) {
    conf = merge(conf, appium_conf);

    return conf;
};

module.exports = { get };
