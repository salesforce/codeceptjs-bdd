const BROWSER = process.profile || process.env.DEFAULT_WEBDRIVER_BROWSER;
const merge = require('deepmerge');
const host = require('../../host/host');

const getPlaywrightBrowser = function () {
    let browser = process.profile || BROWSER;

    if (browser === 'safari') {
        return 'webkit';
    }

    if (browser === 'chrome') {
        return 'chromium';
    }

    return browser;
};

const get = function (conf) {
    conf = merge(conf, playwright_conf);
    return conf;
};

const playwright_conf = {
    helpers: {
        Playwright: {
            url: host.get(),
            waitForNavigation: 'domcontentloaded',
            show: process.env.SHOW,
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
