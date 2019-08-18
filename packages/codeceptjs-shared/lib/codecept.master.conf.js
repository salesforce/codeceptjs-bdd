let debug = require('debug')('acceptance:config');
const fs = require('fs');
let copy = require('recursive-copy');

const BROWSER = process.profile || 'chrome';

const conf = {
    helpers: {
        WebDriver: {
            browser: BROWSER,
            smartWait: 5000,
            waitForTimeout: 10000,
            timeouts: {
                implicit: 5000,
                script: 60000,
                'page load': 10000
            }
        }
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        allure: {
            enabled: true
        },
        autoDelay: {
            enabled: true
        },
        retryFailedStep: {
            enabled: false,
            retries: 5
        },
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        }
    },
    multiple: {
        parallel: {
            chunks: (files) => {
                let chunks = [];
                files.forEach((file) => {
                    chunks.push([file]);
                })
                return chunks;
            }
        },
        smoke: {
            grep: '@smoke',
            browsers: [BROWSER]
        }
    }
};

if (process.profile && process.profile === 'chrome:headless') {
    debug('Tests are running on "chrome:headless" browser');
    process.profile = process.profile.split(':')[0];
    conf.helpers.WebDriver.browser = process.profile;
    conf.helpers.WebDriver.capabilities = {
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
        }
    };
}

if (!(process.profile && process.profile.match('sauce:[a-zA-Z]'))) {
    conf.multiple.parallel.browsers = [BROWSER];
}

exports.conf = conf;
