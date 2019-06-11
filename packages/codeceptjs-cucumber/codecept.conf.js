let debug = require('debug')('acceptance:config');
let merge = require('deepmerge');
let master = require('./codecept.master.conf');
let sauce = require('codeceptjs-saucelabs');

const DEFAULT_HOST = 'https://github.com';
const RELATIVE_PATH = './acceptance/';
const PAGES_PATH = RELATIVE_PATH + 'pages/';
const STEPS_PATH = RELATIVE_PATH + 'step_definitions/';

const HOST = process.host || DEFAULT_HOST;

let conf = {
  output: RELATIVE_PATH + 'report',
  cleanup: true,
  coloredLogs: true,
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
      STEPS_PATH + 'hooks.js'
    ]
  },
  include: {
    ghHomePage: PAGES_PATH + 'github/gh-home.page.js',
    ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
  },
  name: 'Github Acceptance Tests'
};

exports.config = merge(merge(conf, master.conf), sauce.conf);