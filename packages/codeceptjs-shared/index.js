const master = require('./lib/config/codecept.master.conf');
const Webdriver_commands = require.resolve('./lib/helpers/webdriver-commands.helper.js');

module.exports = {
    config: { master },
    helpers: { Webdriver_commands }
};
