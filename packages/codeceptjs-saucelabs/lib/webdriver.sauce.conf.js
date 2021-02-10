const { grabSauceTunnelInfo } = require('./browsers.conf');

let get = function (getBrowsers) {
    let webdriverConf = {
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
                region: process.env.SAUCE_REGION || 'us',
                ...grabSauceTunnelInfo(),
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
    return webdriverConf;
};

module.exports = {
    get,
};
