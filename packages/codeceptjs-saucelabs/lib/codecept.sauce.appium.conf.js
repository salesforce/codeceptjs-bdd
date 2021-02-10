const { grabSauceTunnelInfo } = require('./browsers.conf');

let get = function (getBrowsers) {
    let appiumConfig = {
        helpers: {
            Appium: {
                host: 'ondemand.saucelabs.com',
                port: 80,
                user: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY,
                region: process.env.SAUCE_REGION || 'us',
                ...grabSauceTunnelInfo(),
            },
            SauceHelper: {
                require: 'codeceptjs-saucehelper',
            },
            REST: {},
        },
    };

    let appiumBrowser = getBrowsers()[0];
    appiumConfig.helpers.Appium.browser = appiumBrowser.browser;
    appiumConfig.helpers.Appium.desiredCapabilities = appiumBrowser.desiredCapabilities;
    return appiumConfig;
};

module.exports = {
    get,
};
