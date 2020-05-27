const BROWSER = process.env.profile === 'undefined' ? process.env.DEFAULT_PLAYWRIGHT_BROWSER : process.env.profile;
const merge = require('deepmerge');
const host = require('../../host/host');
const { devices } = require('playwright');


const getPlaywrightBrowser = function () {  
    if (BROWSER === 'safari') {
        return 'webkit';
    }

    
    if (BROWSER === 'chrome') {
        return 'chromium';
    }

    return BROWSER;
};

const get = function (conf) {
    conf = merge(conf, playwright_conf);

    if (process.env.DEVICE) {
        conf.helpers.Playwright.emulate = devices[process.env.DEVICE];
    }

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
