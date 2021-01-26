const sauceOptions = {
    idleTimeout: 300,
    seleniumVersion: '3.14.0',
};

let browsers = {
    chrome: {
        browser: 'chrome',
        capabilities: {
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions,
        },
    },
    firefox: {
        browser: 'firefox',
        capabilities: {
            'sauce:options': sauceOptions,
        },
    },
    safari: {
        browser: 'safari',
        capabilities: {
            browserVersion: '12.0',
            'sauce:options': sauceOptions,
        },
    },
    edge: {
        browser: 'MicrosoftEdge',
        capabilities: {
            'sauce:options': sauceOptions,
        },
    },
    ie: {
        browser: 'internet explorer',
        capabilities: {
            'sauce:options': sauceOptions,
        },
    },

    androidchrome: {
        browser: 'Chrome',
        desiredCapabilities: {
            appiumVersion: '1.9.1',
            platformName: 'Android',
            platformVersion: '8.0',
            deviceName: 'Android Emulator',
        },
    },
};

let customConfig = (conf) => {
    let sauceCustomConf = {
        capabilities: {
            'sauce:options': sauceOptions,
        },
    };

    let customConf = conf.split(':');
    customConf.shift();
    customConf.shift();

    if (customConf.length < 2) {
        throw new Error(
            'Sauce Custom Config in the "--profile" was not defined correctly. It should be in the format of "sauce:config:\'platformName\':browserName:browserVersion"'
        );
    }

    sauceCustomConf.capabilities.platformName = customConf[0];
    sauceCustomConf.browser = customConf[1];

    if (customConf.length > 2) {
        sauceCustomConf.capabilities.browserVersion = customConf[2];
    } else {
        sauceCustomConf.capabilities.browserVersion = 'latest';
    }

    return sauceCustomConf;
};

module.exports = { browsers, customConfig };
