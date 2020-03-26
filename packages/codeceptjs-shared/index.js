const master = require('./lib/config/master/codecept.master.conf');
const configure = require('./lib/config/configure');
const Webdriver_commands = require.resolve(
  './lib/helpers/webdriver-commands.helper.js'
);

module.exports = {
  config: { master },
  helpers: { Webdriver_commands },
  configure
};
