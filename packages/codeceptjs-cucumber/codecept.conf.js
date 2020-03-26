process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// update to 'webdriver' or 'playwright' for the selective browser
process.env.DRIVER = process.env.DRIVER || 'webdriver';
process.env.DEFAULT_WEBDRIVER_BROWSER = 'chrome';
process.env.DEFAULT_PLAYWRIGHT_BROWSER = 'chromium';

const configure = require('codeceptjs-shared').configure;

const DEFAULT_HOST = 'github.com';
const RELATIVE_PATH = './acceptance/';
const PAGES_PATH = RELATIVE_PATH + 'pages/';

const HOST = configure.buildHost(DEFAULT_HOST);

let conf = {
  output: RELATIVE_PATH + 'report',
  cleanup: true,
  dev: {
    host: HOST
  },
  helpers: {
    Playwright: {
      url: HOST
    },
    WebDriver: {
      url: HOST
    },
    REST: {}
  },
  gherkin: {
    features: RELATIVE_PATH + 'features/**/*.feature'
  },
  include: {
    I: RELATIVE_PATH + 'helpers/custom.methods.js',
    ghHomePage: PAGES_PATH + 'github/gh-home.page.js',
    ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
  },
  tests: RELATIVE_PATH + 'mocha/*.test.js',
  name: '<name>'
};

exports.config = configure.create(conf);
