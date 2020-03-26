const merge = require('deepmerge');
const master_conf = require('./master/codecept.master.conf').master_conf;

/**
 * Create Configure with Master config
 *
 * @param {object} conf
 */
const create = function(conf) {
  if (process.env.DRIVER.toLowerCase()  === 'playwright') {
    delete conf.helpers.WebDriver;
  } else {
    delete conf.helpers.Playwright;
  }

  return merge(
    merge(conf, master_conf),
    require('codeceptjs-saucelabs').config.saucelabs(
      process.env.SAUCE_USERNAME,
      process.env.SAUCE_KEY
    )
  );
};

/**
 * build host
 * if scheme is not passed append 'https' as default or scheme
 *
 * @param {string} defaultHost
 * @param {string} scheme : https / http
 */
const buildHost = function(defaultHost, scheme) {
  let host = process.env.HOST ? process.env.HOST : defaultHost;
  scheme = scheme ? scheme : 'https';

  if (!host.match(/^[a-zA-Z]+:\/\//)) {
    host = scheme + '://' + host;
  }

  return host;
};

module.exports = { create, buildHost };
