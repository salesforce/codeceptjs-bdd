const debug = require('debug')('acceptance:config');
const web_driver_commands = require.resolve('../helpers/webdriver-commands.helper.js');
const custom_methods = require.resolve('../helpers/custom-methods.js');
const BROWSER = process.profile || 'chrome';

const conf = {
    helpers: {
        WebDriver: {
            browser: BROWSER,
            smartWait: 5000,
            waitForTimeout: 20000,
            timeouts: {
                implicit: 5000,
                script: 60000,
                'page load': 10000
            }
        },
        WebDriver_commands: {
            require: web_driver_commands
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
            enabled: true,
            delayBefore: 400
        },
        retryFailedStep: {
            enabled: true,
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
                });
                return chunks;
            }
        },
        smoke: {
            grep: '@smoke',
            browsers: [BROWSER]
        }
    },
    include: {
        I: custom_methods
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
} else if (process.profile && (process.profile === 'safari' ||  process.profile === 'firefox')) {
    conf.helpers.WebDriver.windowSize = 'maximize';
}

if (!(process.profile && process.profile.match('sauce:[a-zA-Z]'))) {
    conf.multiple.parallel.browsers = [BROWSER];
}

module.exports = conf;
