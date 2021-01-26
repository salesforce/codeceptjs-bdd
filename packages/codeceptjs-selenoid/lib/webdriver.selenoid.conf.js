let get = function (browserInfo) {
    let webdriverConf = {
        helpers: {
            WebDriver: {
                url: process.env.HOST,
                browser: browserInfo.browser || 'chrome',
                restart: true,
                acceptInsecureCerts: true,
                protocol: process.env.HUB_PROTOCOL || 'http',
                host: process.env.HUB_BASE_HOST || 'localhost',
                port: process.env.HUB_PORT ? Number(process.env.HUB_PORT) : 4444,
                path: process.env.HUB_PATH || '/wd/hub',
                desiredCapabilities: (() => {
                    let capabilities = {
                        acceptInsecureCerts: true,
                        'selenoid:options': {
                            browserName: browserInfo.browser || 'chrome',
                            version: browserInfo.version || 'latest',
                            enableVNC: !!process.env.ENABLE_VNC || true,
                            enableVideo: !!process.env.ENABLE_VIDEO || false,
                            screenResolution: process.env.SCREEN_RESOLUTION || '1280x1024x24', // desktop screens
                        },
                    };
                    if (JSON.parse(process.env.HEADLESS || false)) {
                        capabilities = Object.assign({}, capabilities, {
                            chromeOptions: {
                                args: ['--headless', '--disable-gpu', '--ignore-certificate-errors'],
                            },
                        });
                    }

                    return capabilities;
                })(),
            },
        },
    };
    return webdriverConf;
};

module.exports = {
    get,
};
