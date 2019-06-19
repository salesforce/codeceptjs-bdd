let debug = require('debug')('codeceptjs-saucelabs:config');
let sauceBrowsers = require('./sauce.browsers').browsers;
const SAUCE_DELIMITER = ':';
const MULTIBROWSER_DELIMITER = ',';

function isSauceRequested() {
  return (process.profile && process.profile.match('sauce:[a-zA-Z]'));
}

function getBrowsers() {
    if (isSauceRequested()) {
        let multibrowsers = [];
        let requestedBrowsers = process.profile.split(SAUCE_DELIMITER)[1].split(MULTIBROWSER_DELIMITER);
        debug('Tests are running on Saucelabs on Multi-Browsers:', requestedBrowsers);
        requestedBrowsers.forEach(browser => {
            multibrowsers.push(sauceBrowsers[browser]);
        });
        debug('Saucelabs Config for Multi-Browsers:', multibrowsers);
        return multibrowsers;
    }

    return [sauceBrowsers.chrome];
}

let conf = {
  helpers: {
    WebDriver: getBrowsers()[0]
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['sauce'],
      user: process.env.SAUCE_USERNAME,
      key: process.env.SAUCE_KEY,
      region: 'us'
    }
  },
  multiple: {
      multibrowsers: {
          chunks: getBrowsers().length,
          browsers: getBrowsers()
        },
    }
};

function authenticate(sauceUsername, sauceKey) {
    if (isSauceRequested()) {
        if(sauceUsername && sauceKey) {
            process.env.SAUCE_USERNAME = sauceUsername;
            process.env.SAUCE_KEY = sauceKey;
            conf.plugins.wdio.user = sauceUsername;
            conf.plugins.wdio.key = sauceKey;
        }
        return conf;
    }
    return {};
}

exports.conf = authenticate;
