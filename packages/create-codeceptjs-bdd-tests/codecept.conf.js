// load env variables - this should be the first line of config
require('dotenv-extended').config({
    path: './acceptance/config/codecept.dev.env',
    defaults: './acceptance/config/codecept.env',
});
require('ts-node/register');

const dateformat = require('dateformat');

const { configure, cleanReports, reportCollector } = require('codeceptjs-configure');
const REPORT_OUTPUT_DIR = './acceptance/report';

let conf = {
    name: '<your-acceptance-tests-name>',

    output: REPORT_OUTPUT_DIR,

    bootstrap: (callback) => cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback }),

    async teardown() {
        reportCollector({ reportOutputDir: REPORT_OUTPUT_DIR, destinationDir: '/Users/kgajjar/dev/b2c' });
    },

    // add more configuration as required
    rerun: {
        // how many times all tests should pass
        minSuccess: 2,

        // how many times to try to rerun all tests
        maxReruns: 4,
    },
};

/**
 * This is an example of passing user-specific Sauce Browser. Kept empty intentionally, but you can add your required custom Sauce Browsers.
 * To configure Saucelabs Browser, pls take a look codeceptjs-saucelabs/packages/codeceptjs-saucelabs/lib/browsers.conf.js
 */

const customSauceBrowsers = {};

exports.config = configure.create(conf, customSauceBrowsers);
