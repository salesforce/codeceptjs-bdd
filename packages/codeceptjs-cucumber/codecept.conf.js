const merge = require('deepmerge');
const master_config = require('codeceptjs-shared').config.master;
const codeceptjs_saucelabs = require('codeceptjs-saucelabs').config.saucelabs;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const DEFAULT_HOST = 'github.com';
const RELATIVE_PATH = './acceptance/';
const PAGES_PATH = RELATIVE_PATH + 'pages/';
const STEPS_PATH = RELATIVE_PATH + 'steps/';

const HOST = 'https://' + (process.env.HOST
    ? process.env.HOST
    : DEFAULT_HOST);

// replace sauce_username & sauce_key with your SauceLabs Account
const SAUCE_USERNAME = process.env.SAUCE_USERNAME ? process.env.SAUCE_USERNAME : '<sauce_username>';
const SAUCE_KEY = process.env.SAUCE_KEY;

let conf = {
    output: RELATIVE_PATH + 'report',
    cleanup: true,
    dev: {
        host: HOST
    },
    helpers: {
        WebDriver: {
            url: HOST
        },
        REST: {}
    },
    gherkin: {
        features: RELATIVE_PATH + 'features/**/*.feature',
        steps: [
            STEPS_PATH + 'search/github.steps.js',
            STEPS_PATH + 'login/login.steps.js',
            STEPS_PATH + 'hooks/hooks.js'
        ]
    },
    include: {
        I: RELATIVE_PATH + 'helpers/custom.methods.js',
        ghHomePage: PAGES_PATH + 'github/gh-home.page.js',
        ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
    },
    name: '<name>'
};

exports.config = merge(merge(conf, master_config), codeceptjs_saucelabs(SAUCE_USERNAME, SAUCE_KEY));
