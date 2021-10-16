const driversConf = require('../drivers/drivers.conf');
const host = require('../../host/host');
require('./set.driver')();

const { steps } = require('../bdd/steps');
const { pageObjects } = require('../bdd/pageObjects');

let masterConf = {
    output: process.env.CODECEPT_RELATIVE_PATH + 'report',
    cleanup: true,
    helpers: {
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
        pauseOnFail: {
            enabled: process.env.PAUSE_ON_FAIL === 'true',
        },
        shadowDom: {
            enabled: process.env.ENABLE_SHADOW_DOM_SUPPORT === 'true',
            require: 'codeceptjs-configure/plugins/shadow-dom.plugin.js',
        },
        stepByStepReport: {
            enabled: process.env.ENABLE_PAGE_BY_PAGE_SCREENSHOTS,
            deleteSuccessful: false,
            output: process.env.OUTPUT,
            screenshotsForAllureReport: true,
            ignoreSteps: [
                'grab*',
                'wait*',
                'print*',
                'fill*',
                'move*',
                'scroll*',
                'see*',
                'dont*',
                'execute*',
                'attach*',
                'close*',
                'save*',
                'clear*',
                'cancel*',
                'drag*',
                'refresh*',
                'run*',
            ],
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
