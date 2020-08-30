// load env variables - this should be the first line of config
const dotenv = require('dotenv-extended');

dotenv.config({
    path: './acceptance/config/codecept.dev.env',
    defaults: './acceptance/config/codecept.env'
});
// this is globally defined here, and used across all step definitions for BDD Assertions
const should = require('should');

const configure = require('codeceptjs-shared').configure;

let conf = {
    name: '<your-acceptance-tests-name>',   
    // add more configuration as required
    rerun: {
        // how many times all tests should pass
        minSuccess: 2,

        // how many times to try to rerun all tests
        maxReruns: 4
    }
};

/**
 * This is an example of passing user-specific Sauce Browser. Kept empty intetionally, but you can add your required custom Sauce Browsers.
 * To configure Sacuelabs Browser, pls take a look codeceptjs-saucelabs/packages/codeceptjs-saucelabs/lib/browsers.conf.js
 */

const customSauceBrowsers = {};

exports.config = configure.create(conf, customSauceBrowsers);
