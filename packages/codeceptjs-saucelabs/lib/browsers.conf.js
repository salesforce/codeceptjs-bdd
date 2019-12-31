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
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions
        }
    },
    safari: {
        browser: 'safari',
        capabilities: {
            browserVersion: '12.0',
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions
        }
    },
    edge: {
        browser: 'MicrosoftEdge',
        capabilities: {
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions
        }
    },
    ie: {
        browser: 'internet explorer',
        capabilities: {
            acceptInsecureCerts: true,
            'sauce:options': sauceOptions
        }
    },
    mobileSimulator: {
        browser: 'chrome',
        desiredCapabilities: {
            acceptInsecureCerts: true,
            chromeOptions: {
                mobileEmulation: {
                    deviceName: "iPhone X"
                }
            }
        }
    },
    tabletSimulator: {
        browser: 'chrome',
        desiredCapabilities: {
            acceptInsecureCerts: true,
            chromeOptions: {
                mobileEmulation: {
                    deviceName: "Kindle Fire HDX"
                }
            }
        }
    },
};

exports.browsers = browsers;
