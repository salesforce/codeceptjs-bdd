let debug = require('debug')('@codeceptjs:saucelabs:config');
let sauceBrowsers = require('./sauce.browsers').browsers;
const SAUCE_DELIMITER = ':';
const MULTIBROWSER_DELIMITER = ',';

function getBrowsers() {
    if (process.profile) {
        let multibrowsers = [];
        let requestedBrowsers = process.profile.split(SAUCE_DELIMITER)[1].split(MULTIBROWSER_DELIMITER);
        debug('requested multibrowsers:', requestedBrowsers);
        requestedBrowsers.forEach(browser => {
            multibrowsers.push(sauceBrowsers[browser]);
        });
        debug('multibrowsers saucelabs conf:', multibrowsers);
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

exports.conf = (process.profile && process.profile.match('sauce:[a-zA-Z]')) ? conf : {};