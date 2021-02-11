const merge = require('deepmerge');
const host = require('../../host/host');
const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

const appium_conf = {
    helpers: {
        Appium: {
            url: host.get(),
            smartWait: 10000,
            waitForTimeout: (process.env.BROWSER_WAIT_TIMEOUT_IN_SECONDS || 15) * 1000,
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
