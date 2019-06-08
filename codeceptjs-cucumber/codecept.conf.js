let debug = require('debug')('acceptance:config');
let merge = require('deepmerge');
// let sauce = require('./codeceptjs-saucelabs/codecept.sauce.conf');
// let master = require('./codeceptjs-saucelabs/codecept.master.conf');

const DEFAULT_HOST = 'https://github.com';
const RELATIVE_PATH = './acceptance/';
const PAGES_PATH = RELATIVE_PATH + 'pages/';
const STEPS_PATH = RELATIVE_PATH + 'step_definitions/';

const HOST = process.host || DEFAULT_HOST;

const webDriver = {
  url: HOST,
  browser: process.profile || 'chrome',
  smartWait: 5000,
  waitForTimeout: 10000,
  coloredLogs: true,
  timeouts: {
    implicit: 5000,
    script: 60000,
    'page load': 10000
  }
};

const headlessCaps = {
  chromeOptions: {
    args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
  }
};

let conf = {
  output: RELATIVE_PATH + 'report',
  cleanup: true,
  coloredLogs: true,
  helpers: {
    REST: {},
    Faker: {
      require: RELATIVE_PATH + 'helpers/faker-helper.js'
    },
    Protractor_commands: {
      require: RELATIVE_PATH + 'helpers/protractor-commands-helper.js'
    }
  },
  gherkin: {
    features: RELATIVE_PATH + 'features/**/*.feature',
    steps: [
      STEPS_PATH + 'search/github.steps.js',
      STEPS_PATH + 'hooks.js'
    ]
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
      chunks: 2,
      browsers: ['chrome']
    },
    smoke: {
      grep: '@smoke',
      browsers: ['chrome']
    }
  },
  include: {
    ghHomePage: PAGES_PATH + 'github/gh-home.page.js',
    ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
  },
  name: 'Github Acceptance Tests'
};

conf.helpers.WebDriver = webDriver;

if (process.profile) {

  // run on saucelabs
  // --profile=sauce:chrome, --profile=sauce:firefox
  if (process.profile.match('sauce:[a-zA-Z]')) {
    debug('running tests on "Sauce" browser');
    conf = merge(conf, sauce.conf);
    debug('config: ', JSON.stringify(conf, 2));
  } 

  // run on chrome headless browser
  // --profile=chrome:headless
  else if (process.profile === 'chrome:headless') {
    debug('running tests on "Headless" browser');

    process.profile = process.profile.split(':')[0];
    conf.helpers.WebDriver.browser = process.profile;
    conf.helpers.WebDriver.capabilities = headlessCaps;
  }
}

exports.config = conf;