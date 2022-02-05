const debug = require('debug')('codeceptjs-bdd:selenoid:config');
const merge = require('deepmerge');
const chalk = require('chalk');
const emoji = require('node-emoji');
const getWebDriverConf = require('./webdriver.selenoid.conf').get;

const SELENOID_DELIMITER = ':';

const gProfile = process.env.profile || process.profile;

function config() {
    function isSelenoidRequested() {
        return gProfile && (gProfile.match('selenoid:[a-zA-Z]') || gProfile.match('baas:[a-zA-Z]'));
    }

    function getBrowserInfo() {
        const info = gProfile.split(SELENOID_DELIMITER);

        if (info.length < 3) {
            if (info[1] === 'chrome' || info[1] === 'firefox') {
                throw new Error(
                    `${emoji.get('warning')}  ` +
                        chalk.yellow.bold(
                            'Selenoid Version must be required. ' +
                                'The "profile" must be in the format of "selenoid:<chrome|firefox>:<version>' +
                                ' but found "' +
                                gProfile +
                                '"'
                        )
                );
            } else {
                throw new Error(
                    `${emoji.get('warning')}  ` +
                        chalk.yellow.bold(
                            'Selenoid Browser is either missing or incorrect. ' +
                                'The "profile" must be in the format of "selenoid:<chrome|firefox>:<version>' +
                                ' but found "' +
                                gProfile +
                                '"'
                        )
                );
            }
        }
        return {
            browser: info[1],
            version: info.length > 2 ? info[2] : 'latest',
        };
    }

    if (isSelenoidRequested()) {
        const browserInfo = getBrowserInfo();

        const webdriverConf = getWebDriverConf(browserInfo);
        const platformInfo = gProfile.match('baas:[a-zA-Z]') ? 'Salesforce BAAS ' : 'Selenoid ';
        console.info(
            `${emoji.get('sun_behind_cloud')}  ` +
                chalk.yellow.bold(`Tests are running on : ${platformInfo}`) +
                chalk.blue.bold(JSON.stringify(browserInfo) + '\n')
        );

        return webdriverConf;
    }

    return {};
}

module.exports = config;
