let debug = require('debug')('acceptance:config');
let merge = require('deepmerge');
let codeceptJsShared = require('codeceptjs-shared');
let codeceptJsSauce = require('codeceptjs-saucelabs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const DEFAULT_HOST = 'https://github.com';
const RELATIVE_PATH = './acceptance/';
const PAGES_PATH = RELATIVE_PATH + 'pages/';
const STEPS_PATH = RELATIVE_PATH + 'steps/';

const HOST = process.env.HOST
    ? process.env.HOST
    : DEFAULT_HOST;

// replace sauce_username & sauce_key with your SauceLabs Account
const SAUCE_USERNAME = process.env.SAUCE_USERNAME ? process.env.SAUCE_USERNAME : '<sauce_username>';
const SAUCE_KEY = process.env.SAUCE_KEY ? process.env.SAUCE_KEY : '<sauce_key>';

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
        Faker: {
            require: RELATIVE_PATH + 'helpers/faker.helper.js'
        },
        REST: {}
    },
    gherkin: {
        features: RELATIVE_PATH + 'features/**/*.feature',
        steps: [
            STEPS_PATH + 'search/github.steps.js',
            STEPS_PATH + 'hooks/hooks.js'
        ]
    },
    include: {
        I: RELATIVE_PATH + 'helpers/custom.methods.js',
        ghHomePage: PAGES_PATH + 'github/gh-home.page.js',
        ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
    },
    name: 'Github Acceptance Tests'
};

exports.config = merge(merge(conf, codeceptJsShared.conf), codeceptJsSauce.conf(SAUCE_USERNAME, SAUCE_KEY));
