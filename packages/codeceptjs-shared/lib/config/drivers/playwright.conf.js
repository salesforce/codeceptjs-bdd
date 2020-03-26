const BROWSER = process.profile || process.env.DEFAULT_WEBDRIVER_BROWSER;
const merge = require('deepmerge');

const getPlaywrightBrowser = function() {
  let browser = process.profile || BROWSER;

  if (browser === 'safari') {
    return 'webkit';
  }

  if (browser === 'chrome') {
    return 'chromium';
  }

  return browser;
};

const get = function(conf) {
  conf = merge(conf, playwright_conf);
  return conf;
};

const playwright_conf = {
  helpers: {
    Playwright: {
      waitForNavigation: 'domcontentloaded',
      waitForAction: 500,
      browser: getPlaywrightBrowser()
    }
  }
};

module.exports = { get };
