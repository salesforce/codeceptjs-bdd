const sauceOptions = {
    idleTimeout: 300,
    seleniumVersion: '3.14.0'
};

let browsers = {
    chrome: {
        browser: 'chrome',
        capabilities: {
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions
        }
    },
    firefox: {
        browser: 'firefox',
        capabilities: {
            'sauce:options': sauceOptions
        }
    },
    safari: {
        browser: 'safari',
        capabilities: {
            browserVersion: '12.0',
            'sauce:options': sauceOptions
        }
    },
    edge: {
        browser: 'MicrosoftEdge',
        capabilities: {
            'sauce:options': sauceOptions
        }
    },
    ie: {
        browser: 'internet explorer',
        capabilities: {
            'sauce:options': sauceOptions
        }
    },

    androidchrome: {
        browser: 'Chrome',
        desiredCapabilities: {
            appiumVersion: '1.9.1',
            platformName: 'Android',
            platformVersion: '8.0',
            deviceName: 'Android Emulator'
        }
    }
};

exports.browsers = browsers;
