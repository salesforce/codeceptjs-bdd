let BROWSER =
    process.env.profile === 'undefined' || !process.env.profile
        ? process.env.DEFAULT_PLAYWRIGHT_BROWSER
        : process.env.profile;
const merge = require('deepmerge');
const host = require('../../host/host');
const { devices } = require('playwright-core');

const getPlaywrightBrowser = function () {
    if (BROWSER && BROWSER.match('playwright:[a-zA-Z]')) {
        BROWSER = process.env.profile.split(':')[1];
    }

    if (BROWSER && BROWSER.match('device:[a-zA-Z]')) {
        let profileInfo = BROWSER.split(':');
        profileInfo.shift();
        process.env.PLAYWRIGHT_DEVICE = profileInfo.shift();
        BROWSER = profileInfo.shift();
    }

    if (BROWSER === 'safari') {
        return 'webkit';
    }

    if (!BROWSER || BROWSER === '' || BROWSER === 'chrome') {
        return 'chromium';
    }

    return BROWSER;
};

const get = function (conf) {
    conf = merge(conf, playwright_conf);

    if (process.env.PLAYWRIGHT_DEVICE) {
        conf.helpers.Playwright.emulate = devices[process.env.PLAYWRIGHT_DEVICE];
    }

    return conf;
};

const playwright_conf = {
    helpers: {
        Playwright: {
            url: host.get(),
            waitForNavigation: 'domcontentloaded',
            show: process.env.HEADLESS === 'false',
            waitForTimeout: (process.env.BROWSER_WAIT_TIMEOUT_IN_SECONDS || 15) * 1000,
            restart: true,
            fullPageScreenshots: true,
            emulate: {
                ignoreHTTPSErrors: true,
                acceptDownloads: true,
            },
            browser: getPlaywrightBrowser(),
        },
    },
};

module.exports = {
    get,
};
