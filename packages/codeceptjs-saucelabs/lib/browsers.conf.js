let browsers = {
    chrome: {
        browser: 'chrome',
        capabilities: {
            'sauce:options': {
                seleniumVersion: '3.11.0'
            }
        }
    },
    firefox: {
        browser: 'firefox',
        capabilities: {
            'sauce:options': {
                seleniumVersion: '3.11.0'
            }
        }
    },
    safari: {
        browser: 'safari',
        capabilities: {
            'sauce:options': {
                seleniumVersion: '3.11.0'
            }
        }
    },
    edge: {
        browser: 'MicrosoftEdge',
        capabilities: {
            'sauce:options': {
                seleniumVersion: '3.11.0'
            }
        }
    },
    ie: {
        browser: 'internet explorer',
        capabilities: {
            'sauce:options': {
                seleniumVersion: '3.11.0'
            }
        }
    }
};

exports.browsers = browsers;
