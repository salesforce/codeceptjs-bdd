let debug = require('debug')('acceptance:config');
const RELATIVE_HELPERS_PATH = './acceptance/helpers/';

const webDriver = {
  browser: process.profile || 'chrome',
  smartWait: 5000,
  waitForTimeout: 10000,
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
  helpers: {
    Faker: {
      require: RELATIVE_HELPERS_PATH + 'faker-helper.js'
    },
    Protractor_commands: {
      require: RELATIVE_HELPERS_PATH + 'protractor-commands-helper.js'
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
      chunks: 2,
      browsers: ['chrome']
    },
    smoke: {
      grep: '@smoke',
      browsers: ['chrome']
    }
  }
};

conf.helpers.WebDriver = webDriver;

if (process.profile && process.profile === 'chrome:headless') {
    debug('Tests are running on "chrome:headless" browser');
    process.profile = process.profile.split(':')[0];
    conf.helpers.WebDriver.browser = process.profile;
    conf.helpers.WebDriver.capabilities = headlessCaps;
}

exports.conf = conf;