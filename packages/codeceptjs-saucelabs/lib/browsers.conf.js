const tunnelIdentifier =
    process.env.SAUCE_TUNNEL_NAME || process.env.SAUCE_TUNNEL_ID || process.env.SAUCE_PARENT_TUNNEL_ID;
const parentTunnel = process.env.SAUCE_PARENT_TUNNEL;

const sauceTunnel = {
    tunnelIdentifier,
    parentTunnel,
};
const sauceOptions = {
    idleTimeout: 300,
    seleniumVersion: '3.14.0',
    ...sauceTunnel,
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
            platformVersion: '9.0',
            deviceName: 'Samsung Galaxy S9 WQHD GoogleAPI Emulator',
            ...sauceTunnel,
        },
    },

    iphonesafari: {
        browser: 'Safari',
        desiredCapabilities: {
            appiumVersion: '1.20.1',
            platformName: 'iOS',
            platformVersion: '14.3',
            deviceName: 'iPhone 12 Pro Simulator',
            ...sauceTunnel,
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
