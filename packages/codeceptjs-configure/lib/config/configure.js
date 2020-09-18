global.expect = require('expect');
require('./master/set.driver')();
const merge = require('deepmerge');
const master_conf = require('./master/codecept.master.conf').master_conf;
const logger = require('../logger/logger');
const driversConf = require('./drivers/drivers.conf');
require('expect-playwright');

const gDriver = process.env.DRIVER;

logger.welcome();

/**
 * Create Configure with Master config
 *
 * @param {object} conf
 */
const create = (conf, userSpecifiedSauceBrowsers) => {
    const driver = master_conf.helpers[Object.keys(master_conf.helpers).find((driver) => driver.toLowerCase() === gDriver.toLowerCase())];

    if (!driver) {
        logger.error(`'${gDriver}' is not a supported driver. Supported drivers are: [${Object.keys(driversConf)}]`);
    }

    const browser = driver.browser;
    let driverMessage;
    if (process.env.PLAYWRIGHT_DEVICE) {
        driverMessage = `Launching '${browser}' on mobile device '${process.env.PLAYWRIGHT_DEVICE}' with ${gDriver}.`;
    } else {
        driverMessage = `Launching '${browser}' on ${gDriver}.`;
    }

    logger.log({
        message: driverMessage,
        emoji: 'star2'
    });

    logger.log({
        message: `Host: ${process.env.HOST}`,
        emoji: 'earth_americas'
    });

    logger.log({
        message: `${gDriver}: ${JSON.stringify(driver)}`,
        chalk: require('chalk').gray
    });

    return merge(
        merge(master_conf, conf),
        require('codeceptjs-saucelabs').config.saucelabs(process.env.SAUCE_USERNAME, process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY, userSpecifiedSauceBrowsers || {})
    );
};

module.exports = {
    create
};
