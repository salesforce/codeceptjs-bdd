/**
 * These are additional User Specific Browsers. The Codeceptjs-Saucelabs module, provides list of default browsers.
 * Coeceptjs-Saucelabs browsers are defined here: https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-saucelabs/lib/browsers.conf.js
 */
let browsers = {
    iphonesafari: {
        browser: 'Safari',
        connectionRetryTimeout: 120000,
        desiredCapabilities: {
            appiumVersion: '1.17.1',
            platformName: 'iOS',
            platformVersion: '13.4',
            deviceName: 'iPhone XS Simulator',
            connectionRetryTimeout: 120000
        }
    }
};

exports.browsers = browsers;
