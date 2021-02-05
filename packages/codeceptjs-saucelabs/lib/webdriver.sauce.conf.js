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
                tunnelIdentifier:
                    process.env.SAUCE_TUNNEL_ID ||
                    process.env.SAUCE_PARENT_TUNNEL_ID ||
                    process.env.SAUCE_PARENT_TUNNEL_NAME,
                region: process.env.SAUCE_REGION || 'us',
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
