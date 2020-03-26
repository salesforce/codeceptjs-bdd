const BROWSER = process.profile || process.env.DEFAULT_WEBDRIVER_BROWSER;
const merge = require('deepmerge');

const webdriver_conf = {
  helpers: {
    WebDriver: {
      browser: BROWSER,
      smartWait: 5000,
      waitForTimeout: 20000,
      timeouts: {
        implicit: 5000,
        script: 60000,
        'page load': 10000
      }
    }
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
};

const get = function(conf) {
  conf = merge(conf, webdriver_conf);

  if (process.profile && process.profile === 'chrome:headless') {
    process.profile = process.profile.split(':')[0];
    conf.helpers.WebDriver.browser = process.profile || BROWSER;
    conf.helpers.WebDriver.capabilities = {
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
      }
    };
  } else if (
    process.profile &&
    (process.profile === 'safari' || process.profile === 'firefox')
  ) {
    conf.helpers.WebDriver.windowSize = 'maximize';
  }

  if (!(process.profile && process.profile.match('sauce:[a-zA-Z]'))) {
    conf.multiple.parallel.browsers = [BROWSER];
  }

  return conf;
};

module.exports = { get };
