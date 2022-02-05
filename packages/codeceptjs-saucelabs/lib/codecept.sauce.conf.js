const defaultBrowsers = require('./browsers.conf').browsers;
const customConfig = require('./browsers.conf').customConfig;
const debug = require('debug')('codeceptjs-bdd:saucelabs:config');
const merge = require('deepmerge');
const chalk = require('chalk');
const emoji = require('node-emoji');
const getAppiumConfig = require('./codecept.sauce.appium.conf').get;
const getWebDriverConf = require('./webdriver.sauce.conf').get;

const SAUCE_DELIMITER = ':';
const MULTI_BROWSER_DELIMITER = ',';

const gProfile = process.env.profile || process.profile;

function config(sauceUsername, sauceKey, userSpecificBrowsers) {
    let sauceBrowsers = userSpecificBrowsers ? merge(userSpecificBrowsers, defaultBrowsers) : defaultBrowsers;

    function isSauceRequested() {
        return gProfile && gProfile.match('sauce:[a-zA-Z]');
    }

    function isAppiumRequested() {
        return gProfile && gProfile.match('sauce:appium:[a-zA-Z]');
    }

    function exportSauceBuildId() {
        if (!process.env.SAUCE_BUILD) {
            process.env.SAUCE_BUILD = new Date().toISOString();
        }
    }

    function getRequestedBrowser() {
        return isAppiumRequested()
            ? gProfile.split(SAUCE_DELIMITER)[2].split(MULTI_BROWSER_DELIMITER)
            : gProfile.split(SAUCE_DELIMITER)[1].split(MULTI_BROWSER_DELIMITER);
    }

    function getBrowsers() {
        if (isSauceRequested()) {
            if (gProfile.match('sauce:config:') || (gProfile.match(/:/g) || []).length > 1) {
                return [customConfig(gProfile)];
            } else {
                let multibrowsers = [];
                let requestedBrowsers = getRequestedBrowser();
                debug('Tests are running on Sauce Labs on Multi-Browsers:', requestedBrowsers);
                requestedBrowsers.forEach((browser) => {
                    let sauceBrowser = sauceBrowsers[browser];
                    if (!sauceBrowser) {
                        throw new Error(
                            `'${browser}' is not defined in Sauce Browsers. Please update your '--profile' argument to choose from below available browsers.\n Available Sauce Browsers: ${JSON.stringify(
                                sauceBrowsers,
                                undefined,
                                2
                            )}\n`
                        );
                    }
                    multibrowsers.push(sauceBrowsers[browser]);
                });

                debug('Sauce Labs Config for Multi-Browsers:', multibrowsers);
                return multibrowsers;
            }
        }

        return [sauceBrowsers.chrome];
    }

    let webdriverConf = getWebDriverConf(getBrowsers);

    if (isSauceRequested()) {
        if (sauceUsername) {
            if (!sauceKey && !process.env.SAUCE_KEY) {
                throw new Error('Sauce Key isn\'t defined. Please export as an environment variable "SAUCE_KEY".');
            }
        }
        if (sauceUsername && sauceKey) {
            process.env.SAUCE_USERNAME = sauceUsername;
            process.env.SAUCE_KEY = sauceKey;
            exportSauceBuildId();

            webdriverConf.plugins.wdio.user = sauceUsername;
            webdriverConf.plugins.wdio.key = sauceKey;

            console.info(
                `${emoji.get('sun_behind_cloud')}  ` +
                    chalk.yellow.bold('Tests are running on Sauce Labs account: ') +
                    chalk.blue.bold(sauceUsername)
            );
            console.info(
                chalk.yellow.bold('Sauce Labs Dashboard for the current build is : ') +
                    chalk.blue.bold(process.env.SAUCE_BUILD)
            );

            // For supporting the codeceptjs-saucehelper module
            if (!isAppiumRequested()) {
                console.info(
                    chalk.yellow.bold('Tests are running on Sauce Labs browsers: ') +
                        chalk.blue.bold(JSON.stringify(getBrowsers(), null, 2)) +
                        '\n'
                );
                webdriverConf.helpers.WebDriver.user = sauceUsername;
                webdriverConf.helpers.WebDriver.key = sauceKey;
            } else {
                console.info(
                    chalk.yellow.bold('Tests are running on Sauce Labs Appium Mobile browser: ') +
                        chalk.blue.bold(JSON.stringify(getBrowsers(), null, 2)) +
                        '\n'
                );
            }
        }
        if (isAppiumRequested()) {
            let appiumConf = getAppiumConfig(getBrowsers, sauceBrowsers);
            return appiumConf;
        } else {
            return webdriverConf;
        }
    }

    return {};
}

module.exports = config;
