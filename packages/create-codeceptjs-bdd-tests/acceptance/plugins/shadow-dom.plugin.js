/* eslint @typescript-eslint/no-var-requires: "off" */
const codeceptjs = require('codeceptjs');

/**
 * Custom Locators
 */
module.exports = function () {
    codeceptjs.locator.addFilter((providedLocator, locatorObj) => {
        // eslint-disable-next-line no-undef
        if (typeof providedLocator === 'string' && process.env.DRIVER.toLowerCase() === 'webdriver') {
            locatorObj.type = 'shadowDom';
        }
    });
};
