const defaultBrowsers = require('./browsers.conf').browsers;
const debug = require('debug')('codeceptjs-saucelabs:config');
const merge = require('deepmerge');
const chalk = require('chalk');
const emoji = require('node-emoji');

const SAUCE_DELIMITER = ':';
const MULTI_BROWSER_DELIMITER = ',';

const gProfile = process.env.profile || process.profile;

function config(sauceUsername, sauceKey, userSpecificBrowsers) {

    sauceBrowsers = userSpecificBrowsers
        ? merge(userSpecificBrowsers, defaultBrowsers)
        : defaultBrowsers;

    function isSauceRequested() {
        return gProfile && gProfile.match('sauce:[a-zA-Z]');
    }

    function exportSauceBuildId() {
        if (process.env.SAUCE_BUILD) {
            if (!process.env.SAUCE_BUILD.includes(' __-__ ')) {
                process.env.SAUCE_BUILD += ' __-__ ' + Date.now();
            }
        }
    }

    function getBrowsers() {
        if (isSauceRequested()) {
            let multibrowsers = [];
            let requestedBrowsers = gProfile
                .split(SAUCE_DELIMITER)[1]
                .split(MULTI_BROWSER_DELIMITER);
            debug(
                'Tests are running on Sauce Labs on Multi-Browsers:',
                requestedBrowsers
            );
            requestedBrowsers.forEach((browser) => {
                multibrowsers.push(sauceBrowsers[browser]);
            });
            debug('Sauce Labs Config for Multi-Browsers:', multibrowsers);
            return multibrowsers;
        }

        return [sauceBrowsers.chrome];
    }

    let conf = {
        helpers: {
            WebDriver: getBrowsers()[0],
            SauceHelper: {
                require: 'codeceptjs-saucehelper',
            },
            REST: {},
        },
        plugins: {
            wdio: {
                enabled: true,
                services: ['sauce'],
                user: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY,
                region: 'us',
            },
        },
        multiple: {
            multibrowsers: {
                chunks: getBrowsers().length,
                browsers: getBrowsers(),
            },
            parallel: {
                browsers: getBrowsers(),
            },
        },
    };

    if (isSauceRequested()) {
        if (sauceUsername) {
            if (!sauceKey && !process.env.SAUCE_KEY) {
                throw new Error(
                    'Sauce Key isn\'t defined. Please export as an environment variable "SAUCE_KEY".'
                );
            }
        }
        if (sauceUsername && sauceKey) {
            process.env.SAUCE_USERNAME = sauceUsername;
            process.env.SAUCE_KEY = sauceKey;
            exportSauceBuildId();

            conf.plugins.wdio.user = sauceUsername;
            conf.plugins.wdio.key = sauceKey;

            console.info(
                `${emoji.get('sun_behind_cloud')}  ` +
                    chalk.yellow.bold(
                        'Tests are running on Sauce Labs account: '
                    ) +
                    chalk.blue.bold(sauceUsername)
            );
            console.info(
                chalk.yellow.bold(
                    'Sauce Labs Dashboard for the current build is : '
                ) + chalk.blue.bold(process.env.SAUCE_BUILD)
            );
            console.info(
                chalk.yellow.bold(
                    'Tests are running on Sauce Labs browsers: '
                ) +
                    chalk.blue.bold(JSON.stringify(getBrowsers(), null, 2)) +
                    '\n'
            );

            // For supporting the codeceptjs-saucehelper module
            conf.helpers.WebDriver.user = sauceUsername;
            conf.helpers.WebDriver.key = sauceKey;
        }
        return conf;
    }

    return {};
}

module.exports = config;
