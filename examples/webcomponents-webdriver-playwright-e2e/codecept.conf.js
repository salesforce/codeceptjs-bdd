// load env variables - this should be the first line of config
require('ts-node/register');
require('dotenv-extended').config({
    path: './config/codecept.dev.env',
    defaults: './config/codecept.env',
});

const { configure, cleanReports } = require('codeceptjs-configure');

let conf = {
    name: 'Webcomponents Webdriver & Playwright E2E Tests',

    bootstrap: (callback) => cleanReports({ path: './tests/report', relativePath: './', callback }),

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
