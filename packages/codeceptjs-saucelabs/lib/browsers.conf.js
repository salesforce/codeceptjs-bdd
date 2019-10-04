const sauceOptions = {
        seleniumVersion: '3.14.0'
};

let browsers = {
    chrome: {
        browser: 'chrome',
        capabilities: {
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
    mobileSimulator: {
        browser: 'chrome',
        desiredCapabilities: {
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
            chromeOptions: {
                mobileEmulation: {
                    deviceName: "Kindle Fire HDX"
                }
            }
        }
    },
};

exports.browsers = browsers;
