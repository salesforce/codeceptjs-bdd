const driversConf = require('../drivers/drivers.conf');
const host = require('../../host/host');
require('./set.driver')();

const driver_commands = require.resolve('../../helpers/driver-commands.helper.js');

const custom_methods = require.resolve('../../helpers/custom-methods.js');
const { steps } = require('../bdd/steps');
const { pageObjects } = require('../bdd/pageObjects');

let masterConf = {
    output: process.env.CODECEPT_RELATIVE_PATH + 'report',
    cleanup: true,
    helpers: {
        Driver_commands: {
            require: driver_commands
        },
        REST: {
            endpoint: host.get(),
            timeout: 300000
        }
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        allure: {
            enabled: true
        },
        autoDelay: {
            enabled: true,
            delayBefore: 400
        },
        retryFailedStep: {
            enabled: true,
            retries: 5
        }
    },
    multiple: {
        parallel: {
            chunks: (files) => {
                let chunks = [];
                files.forEach((file) => {
                    chunks.push([file]);
                });
                return chunks;
            }
        },
        smoke: {
            grep: '@smoke',
            browsers: [process.env.WEBDRIVER_BROWSER]
        }
    },
    gherkin: {
        steps: steps(),
        features: process.env.CODECEPT_RELATIVE_PATH + 'features/**/*.feature'
    },
    include: {
        ...pageObjects(),
        I: custom_methods
    },
    tests: process.env.CODECEPT_RELATIVE_PATH + '**/*.spec.js'
};

const driverConf = driversConf[Object.keys(driversConf).find((driver) => driver.toLowerCase() === process.env.DRIVER.toLowerCase())];

if (driverConf) {
    masterConf = driverConf.get(masterConf);
}

module.exports = { master_conf: masterConf };
