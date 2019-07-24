let browsers = {
  chrome: {
      browser: 'chrome',
      // add more configuration for Saucelabs platform
  },
  firefox: {
      browser: 'firefox',
      capabilities: {
          'sauce:options:': {
              seleniumVersion: '3.11.0'
          }
      }
  },
  safari: {
      browser: 'safari',
  },
  edge: {
      browser: 'MicrosoftEdge',
      capabilities: {
        'sauce:options:': {
            seleniumVersion: '3.11.0'
        }
    }
  },
  ie: {
      browser: 'internet explorer',
  }
};

exports.browsers = browsers;