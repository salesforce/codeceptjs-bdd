let get = function (getBrowsers) {
    let webdriverConf = {
        helpers: {
            WebDriver: getBrowsers()[0],
            SauceHelper: {
                require: 'codeceptjs-saucehelper'
            },
            REST: {}
        },
        plugins: {
            wdio: {
                enabled: true,
                services: ['sauce'],
                user: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY,
                tunnelIdentifier: '416a84493b0a465ea6347c3252701984',
                region: 'us'
            }
        },
        multiple: {
            multibrowsers: {
                chunks: getBrowsers().length,
                browsers: getBrowsers()
            },
            parallel: {
                browsers: getBrowsers()
            }
        }
    };
    return webdriverConf;
};

module.exports = {
    get
};
