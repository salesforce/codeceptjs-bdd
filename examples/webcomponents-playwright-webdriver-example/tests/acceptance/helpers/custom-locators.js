/* eslint @typescript-eslint/no-var-requires: "off" */
const codeceptjs = require('codeceptjs');
const debug = require('debug')('custom-locators');
const chalk = require('chalk');

/**
 * Custom Locators
 */
module.exports = function () {
    codeceptjs.locator.addFilter((providedLocator, locatorObj) => {
        // eslint-disable-next-line no-undef
        if (typeof providedLocator === 'string' && process.env.DRIVER.toLowerCase() === 'webdriver') {
            debug(chalk.gray('using custom locator strategy'));
            locatorObj.type = 'custom';
            providedLocator = { custom: providedLocator };
        }
    });
};
