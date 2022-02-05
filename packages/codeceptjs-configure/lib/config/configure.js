require('./master/set.driver')();
const merge = require('deepmerge');
const master_conf = require('./master/codecept.master.conf').master_conf;
const logger = require('../logger/logger');
const chalk = require('chalk');
const debug = require('debug')('codeceptjs-bdd:config');

const driversConf = require('./drivers/drivers.conf');
const gDriver = process.env.DRIVER;

/**
 * Create Configure with Master config
 *
 * @param {object} conf
 */
const create = (conf, userSpecifiedSauceBrowsers) => {
    logger.welcome(conf.name);

    if (conf.helpers && conf.helpers.WebDriver && gDriver && gDriver.toLocaleLowerCase() !== 'webdriver') {
        delete conf.helpers.WebDriver;
    }

    const findDriver = () =>
        Object.keys(master_conf.helpers).find((driver) => driver.toLowerCase() === gDriver.toLowerCase());
    const driver = master_conf.helpers[findDriver()];

    if (!driver) {
        logger.error(`'${gDriver}' is not a supported driver. Supported drivers are: [${Object.keys(driversConf)}]`);
    }

    const browser = driver.browser;

    let driverMessage;
    if (process.env.PLAYWRIGHT_DEVICE) {
        driverMessage = `Launching '${browser}' on mobile device '${process.env.PLAYWRIGHT_DEVICE}' with ${gDriver}.`;
    } else if (driver.chromium && driver.chromium.channel && driver.chromium.channel === 'chrome') {
        driverMessage = `Launching 'Google Chrome' on ${gDriver}.`;
    } else {
        driverMessage = `Launching '${browser}' on ${gDriver}.`;
    }

    const repository = conf.repository;

    if (repository) {
        logger.log({
            chalk: chalk.hex('#5d5dff'),
            message: `🌏 [repository] ${repository}`,
        });
    }

    logger.log({
        chalk: chalk.bgBlue.bold,
        message: chalk.white(driverMessage),
        emoji: 'star2',
    });

    if (!process.env.HOST) {
        process.env.HOST = conf.host;
    }

    master_conf.plugins.stepByStepReport.output = conf.output;

    if (master_conf.gherkin && conf.gherkin) {
        master_conf.gherkin.steps = conf.gherkin.steps ? {} : master_conf.gherkin.steps;
    }

    const config = merge(
        merge(
            merge(master_conf, conf),
            require('codeceptjs-saucelabs').config.saucelabs(
                process.env.SAUCE_USERNAME,
                process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY,
                userSpecifiedSauceBrowsers || {}
            )
        ),
        require('codeceptjs-selenoid').config.selenoid()
    );

    logger.log({
        message: `${gDriver}: ${JSON.stringify(config.helpers[findDriver()])}`,
        chalk: require('chalk').gray,
    });

    if (gDriver && gDriver.toLowerCase() === 'playwright') {
        logger.log({
            message: chalk.greenBright.bold(
                process.env.HEADLESS === 'true' ? `Running Headless ...` : `Running non-Headless ...`
            ),
            emoji: 'running',
            chalk: chalk.bgBlack,
        });
    }

    if (!logger.isTypescriptDef()) {
        debug(chalk.gray(JSON.stringify(config, undefined, 2)));
    } else {
        logger.printTypescriptDef();
    }

    return config;
};

module.exports = {
    create,
};
