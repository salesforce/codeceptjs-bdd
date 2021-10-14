// load env variables - this should be the first line of config
require('dotenv-extended').config({
    path: './acceptance/config/codecept.dev.env',
    defaults: './acceptance/config/codecept.env',
});
require('ts-node/register');

const { configure, cleanReports } = require('codeceptjs-configure');
const REPORT_OUTPUT_DIR = './acceptance/report';

let conf = {
    name: '<your-acceptance-tests-name>',

    repository: 'https://github.com/salesforce/codeceptjs-bdd',

    output: REPORT_OUTPUT_DIR,

    bootstrap: (callback) => {
        cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback });
    },

    helpers: {
        PlaywrightHelper: {
            require: 'codeceptjs-configure/lib/helpers/playwright.helper.js',
        },
    },

    plugins: {
        shadowDom: {
            enabled: process.env.ENABLE_SHADOW_DOM_SUPPORT === 'true',
            require: './acceptance/plugins/shadow-dom.plugin.js',
        },
    },
    /********************** Enable additional plugins as required
     * 
     * plugins: {
        retryFailedTests: {
            enabled: false,
            retries: 1,
            require: 'codeceptjs-configure/plugins/retry-failed-tests.plugin.js',
        },
    },
     */
};

/**
 * This is an example of passing user-specific Sauce Browser. Kept empty intentionally, but you can add your required custom Sauce Browsers.
 * To configure Saucelabs Browser, pls take a look codeceptjs-saucelabs/packages/codeceptjs-saucelabs/lib/browsers.conf.js
 */

exports.config = configure.create(conf);
