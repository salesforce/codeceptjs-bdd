let BROWSER =
    process.env.profile === 'undefined' || !process.env.profile
        ? process.env.DEFAULT_PLAYWRIGHT_BROWSER
        : process.env.profile;
const merge = require('deepmerge');
const host = require('../../host/host');
const { env } = require('process');
const { devices } = require('playwright');
const GOOGLE_CHROME = 'google:chrome';
const CHROMIUM = 'chromium';

const getPlaywrightBrowser = function () {
    if (BROWSER && BROWSER.match('playwright:[a-zA-Z]')) {
        const profileInfo = process.env.profile.split(':');
        if (BROWSER.includes(GOOGLE_CHROME) || BROWSER.includes('chrome:stable')) {
            return GOOGLE_CHROME;
        }
        BROWSER = profileInfo[1];
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
        return CHROMIUM;
    }

    if (BROWSER === GOOGLE_CHROME) {
        return 'chrome';
    }

    return BROWSER;
};

const get = function (conf) {
    const playwrightConf = playwright_conf();

    if (playwrightConf.helpers.Playwright.browser === GOOGLE_CHROME) {
        playwrightConf.helpers.Playwright.browser = CHROMIUM;
        playwrightConf.helpers.Playwright[CHROMIUM] = { channel: 'chrome' };
    }

    if (process.env.PLAYWRIGHT_BROWSER_PROXY) {
        console.log('playwrightConf.helpers.Playwright.browser >> ', playwrightConf.helpers.Playwright.browser);
        console.log('playwrightConf.helpers.Playwright.browser >> ', playwrightConf.helpers.Playwright);
        let playwrightBrowser = playwrightConf.helpers.Playwright[playwrightConf.helpers.Playwright.browser];

        if (playwrightBrowser) {
            playwrightConf.helpers.Playwright[playwrightConf.helpers.Playwright.browser].proxy = {
                server: process.env.PLAYWRIGHT_BROWSER_PROXY,
            };
        } else {
            playwrightConf.helpers.Playwright[playwrightConf.helpers.Playwright.browser] = {
                proxy: {
                    server: process.env.PLAYWRIGHT_BROWSER_PROXY,
                },
            };
        }
    }

    conf = merge(conf, playwrightConf);

    if (process.env.PLAYWRIGHT_DEVICE) {
        conf.helpers.Playwright.emulate = devices[process.env.PLAYWRIGHT_DEVICE];
    }

    return conf;
};

const playwright_conf = function () {
    return {
        helpers: {
            Playwright: {
                url: host.get(),
                pressKeyDelay: 3,
                waitForNavigation: 'domcontentloaded',
                show: process.env.HEADLESS === 'false',
                waitForTimeout: (env.BROWSER_WAIT_TIMEOUT_IN_SECONDS || 15) * 1000,
                restart: true,
                video: env.RECORD_VIDEO_ON_FAIL === 'true' || env.RECORD_PLAYWRIGHT_VIDEO === 'true',
                keepVideoForPassedTests: env.RECORD_PLAYWRIGHT_VIDEO === 'true',
                trace: env.RECORD_TRACE_ON_FAIL === 'true',
                fullPageScreenshots: true,
                emulate: {
                    ignoreHTTPSErrors: true,
                    acceptDownloads: true,
                },
                browser: getPlaywrightBrowser(),
            },
        },
    };
};

module.exports = {
    get,
};
