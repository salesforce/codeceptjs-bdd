let debug = require('debug')('acceptance:config');

const conf = {
  helpers: {
    WebDriver: {
      browser: process.profile || 'chrome',
      smartWait: 5000,
      waitForTimeout: 10000,
      timeouts: {
        implicit: 5000,
        script: 60000,
        'page load': 10000
      }
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

if (process.profile && process.profile === 'chrome:headless') {
    debug('Tests are running on "chrome:headless" browser');
    process.profile = process.profile.split(':')[0];
    conf.helpers.WebDriver.browser = process.profile;
    conf.helpers.WebDriver.capabilities = {
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
      }
    };
}

exports.conf = conf;