const BROWSER =
    process.env.profile === 'undefined' || !process.env.profile
        ? process.env.DEFAULT_WEBDRIVER_BROWSER
        : process.env.profile;
const merge = require('deepmerge');
const host = require('../../host/host');
const STANDALONE_SERVICE = 'selenium-standalone';
const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

const webdriver_conf = {
    helpers: {
        WebDriver: {
            url: host.get(),
            browser: BROWSER && BROWSER.match('webdriver:[a-zA-Z]') ? BROWSER.split(':')[1] : BROWSER,
            smartWait: 10000,
            waitForTimeout: (process.env.BROWSER_WAIT_TIMEOUT_IN_SECONDS || 15) * 1000,
            customLocatorStrategy:
                process.env.CUSTOM_LOCATOR_STRATEGY === true || process.env.CUSTOM_LOCATOR_STRATEGY === 'true'
                    ? locatorStrategy
                    : undefined,
        },
    },
};

const wdioSeleniumArgs = {
    seleniumArgs: {
        drivers: {
            chrome: {
                version: '87.0.4280.20', // Chromedriver version
            },
        },
    },
    seleniumInstallArgs: {
        baseURL: 'https://selenium-release.storage.googleapis.com',
        drivers: {
            chrome: {
                version: '87.0.4280.20',
                baseURL: 'https://chromedriver.storage.googleapis.com',
            },
        },
    },
};

const isRunningLocally = (profile) => {
    return profile && !(profile.match('sauce:') || profile.match('selenoid:') || profile.match('baas:'));
};

const get = (conf) => {
    conf = merge(conf, webdriver_conf);
    let profile = process.env.profile;

    if (profile && profile === 'chrome:headless') {
        conf.helpers.WebDriver.browser = 'chrome';
        conf.helpers.WebDriver.capabilities = {
            chromeOptions: {
                args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
            },
        };
    } else if (profile && (profile === 'safari' || profile === 'firefox')) {
        conf.helpers.WebDriver.windowSize = 'maximize';
    }

    if (!(profile && profile.match('sauce:[a-zA-Z]'))) {
        conf.multiple.parallel.browsers = [BROWSER];
    }

    if (isRunningLocally(profile)) {
        conf.plugins = {
            ...conf.plugins,
            wdio: {
                enabled: true,
                services: [STANDALONE_SERVICE],
            },
        };
    }

    return conf;
};

module.exports = { get };
