let get = function (getBrowsers, sauceBrowsers) {
    let appiumConfig = {
        helpers: {
            Appium: {
                host: 'ondemand.saucelabs.com',
                port: 80,
                user: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY,
                tunnelIdentifier: process.env.SAUCE_TUNNEL_ID || process.env.SAUCE_PARENT_TUNNEL_ID,
                region: 'us'
            },
            SauceHelper: {
                require: 'codeceptjs-saucehelper'
            },
            REST: {}
        }
    };

    let appiumBrowser = getBrowsers()[0];
    appiumConfig.helpers.Appium.browser = appiumBrowser.browser;
    appiumConfig.helpers.Appium.desiredCapabilities = appiumBrowser.desiredCapabilities;
    return appiumConfig;
};

module.exports = {
    get
};
