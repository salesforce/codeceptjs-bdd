const tunnelIdentifier =
    process.env.SAUCE_TUNNEL_NAME || process.env.SAUCE_TUNNEL_ID || process.env.SAUCE_PARENT_TUNNEL_ID;
const parentTunnel = process.env.SAUCE_PARENT_TUNNEL;

const grabSauceTunnelInfo = () => {
    if (tunnelIdentifier) {
        return {
            tunnelIdentifier,
        };
    } else {
        return {
            parentTunnel,
        };
    }
};
const sauceOptions = {
    idleTimeout: 600,
    commandTimeout: 600,
    seleniumVersion: '3.14.0',
    extendedDebugging: process.env.SAUCE_EXTENDED_DEBUGGING === 'true',
    capturePerformance: process.env.SAUCE_CAPTURE_PERFORMANCE === 'true',
    ...grabSauceTunnelInfo(),
};

let browsers = {
    chrome: {
        browser: 'chrome',
        capabilities: {
            platformName: 'Windows 10',
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions,
        },
    },

    firefox: {
        browser: 'firefox',
        capabilities: {
            platformName: 'Windows 10',
            'sauce:options': sauceOptions,
        },
    },

    safari: {
        browser: 'safari',
        capabilities: {
            platformName: 'Windows 10',
            browserVersion: '12.0',
            'sauce:options': sauceOptions,
        },
    },

    edge: {
        browser: 'MicrosoftEdge',
        capabilities: {
            platformName: 'Windows 10',
            'sauce:options': sauceOptions,
        },
    },

    ie: {
        browser: 'internet explorer',
        capabilities: {
            platformName: 'Windows 10',
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
            ...grabSauceTunnelInfo(),
        },
    },

    iphonesafari: {
        browser: 'Safari',
        desiredCapabilities: {
            appiumVersion: '1.20.1',
            platformName: 'iOS',
            platformVersion: '14.3',
            deviceName: 'iPhone 12 Pro Simulator',
            ...grabSauceTunnelInfo(),
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

    if (conf.match('sauce:config:')) {
        customConf.shift();
    }

    if (customConf.length < 2) {
        throw new Error(
            'Sauce Custom Config in the "--profile" was not defined correctly. It should be in the format of "sauce:\'platformName\':browserName:browserVersion"'
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

module.exports = { browsers, customConfig, grabSauceTunnelInfo };
