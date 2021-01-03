const driversConf = require('../drivers/drivers.conf');
const host = require('../../host/host');
require('./set.driver')();

const { steps } = require('../bdd/steps');
const { pageObjects } = require('../bdd/pageObjects');

let driver_commands = 'codeceptjs-configure/lib/helpers/driver-commands.helper.js';
let custom_methods = 'codeceptjs-configure/lib/helpers/custom-methods.helper.js';

if (process.env.CODECEPT_BDD_LERNA) {
    driver_commands = require.resolve('../../helpers/driver-commands.helper.js');
    custom_methods = require.resolve('../../helpers/custom-methods.helper.js');
}

let masterConf = {
    output: process.env.CODECEPT_RELATIVE_PATH + 'report',
    cleanup: true,
    helpers: {
        Driver_commands: {
            require: driver_commands,
        },
        custom_methods: {
            require: custom_methods,
        },
        REST: {
            endpoint: host.get(),
            timeout: 300000,
        },
    },
    plugins: {
        screenshotOnFail: {
            enabled: true,
        },
        allure: {
            enabled: true,
        },
        retryFailedStep: {
            enabled: true,
            retries: 10,
        },
        tryTo: {
            enabled: true,
        },
    },
    multiple: {
        parallel: {
            chunks: (files) => {
                let chunks = [];
                files.forEach((file) => {
                    chunks.push([file]);
                });
                return chunks;
            },
        },
        smoke: {
            grep: '@smoke',
            browsers: [process.env.WEBDRIVER_BROWSER],
        },
    },
    gherkin: {
        steps: steps(),
        features: process.env.CODECEPT_RELATIVE_PATH + 'features/**/*.feature',
    },
    include: {
        ...pageObjects(),
        page: 'codeceptjs-configure/lib/helpers/global.page.js',
    },
    tests: process.env.CODECEPT_RELATIVE_PATH + '**/*.spec.{js,ts}',
};

const driverConf =
    driversConf[Object.keys(driversConf).find((driver) => driver.toLowerCase() === process.env.DRIVER.toLowerCase())];

if (driverConf) {
    masterConf = driverConf.get(masterConf);
}

module.exports = { master_conf: masterConf };
