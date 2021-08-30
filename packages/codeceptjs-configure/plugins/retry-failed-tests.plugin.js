const { event, output } = require('codeceptjs');

/**
 * Retry Failed Tests Plugin
 *
 * How to use: To Retry One Time
 *
 * ##########################################
 * codecept.conf.js >>
 *
 * plugins: {
 *  retryFailedTests: {
 *      require: 'codeceptjs-configure/plugins/retry-failed-tests.plugin.js',
 *      enabled: true,
 *      retries: 1
 *  }
 * }
 *
 * ##########################################
 */
module.exports = function (config) {
    event.dispatcher.on(event.test.started, (test) => {
        config.retries = config.retries || 0;
        output.print(`Retry Failed Scenario for ${config.retries} times`);
        test.retries(config.retries);
    });
};
