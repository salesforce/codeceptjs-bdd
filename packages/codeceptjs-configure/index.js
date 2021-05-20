const master = require('./lib/config/master/codecept.master.conf');
const cleanReports = require('./lib/reports/clean.reports').cleanReports;
const configure = require('./lib/config/configure');
const host = require('./lib/host/host');
const logger = require('./lib/logger/logger');
const reportCollector = require('./lib/reports/report.collector').collect;
const reportInfo = require('./lib/reports/report.info');
const allureReportLauncher = require('./lib/reports/allure-static-launcher/allure-launcher').allureReportLauncher;
const Driver_commands = require.resolve('./lib/helpers/driver-commands.helper.js');

module.exports = {
    config: { master },
    helpers: { Driver_commands },
    cleanReports,
    allureReportLauncher,
    reportCollector,
    reportInfo,
    configure,
    host,
    log: logger.log,
    pageObjects: require('./lib/config/bdd/pageObjects').pageObjects,
    steps: require('./lib/config/bdd/steps').steps,
};
