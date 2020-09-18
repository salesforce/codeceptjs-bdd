const BROWSER = process.env.profile === 'undefined' ? process.env.DEFAULT_WEBDRIVER_BROWSER : process.env.profile;
const merge = require('deepmerge');
const host = require('../../host/host');

const webdriver_conf = {
    helpers: {
        WebDriver: {
            url: host.get(),
            browser: BROWSER,
            smartWait: 5000,
            waitForTimeout: 20000,
            timeouts: {
                implicit: 5000,
                script: 60000,
                'page load': 10000,
            },
        },
    },
    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone'],
        },
    },
};

const get = function (conf) {
    conf = merge(conf, webdriver_conf);
    let profile = process.env.profile;

    if (profile && profile === 'chrome:headless') {
        conf.helpers.WebDriver.browser = 'chrome';
        conf.helpers.WebDriver.capabilities = {
            chromeOptions: {
                args: [
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1920,1080',
                ],
            },
        };
    } else if (
        profile &&
        (profile === 'safari' || profile === 'firefox')
    ) {
        conf.helpers.WebDriver.windowSize = 'maximize';
    }

    if (!(profile && profile.match('sauce:[a-zA-Z]'))) {
        conf.multiple.parallel.browsers = [BROWSER];
    }

    return conf;
};

module.exports = { get };
