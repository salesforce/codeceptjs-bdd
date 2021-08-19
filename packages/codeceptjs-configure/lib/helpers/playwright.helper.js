const fs = require('fs');
const Helper = require('@codeceptjs/helper');

/**
 * Helper class for the Playwright Report
 */
class PlaywrightHelper extends Helper {
    /**
     * Constructor
     *
     * @param config
     */
    constructor(config) {
        super(config);
    }

    /**
     * Attach Video to Allure Report
     * @param test
     */
    async _attachVideo(test) {
        const Playwright = codeceptjs.container.helpers('Playwright');
        if (Playwright) {
            await Playwright.browserContext.close();
            const allure = codeceptjs.container.plugins('allure');
            const FORMAT = 'video/webm';
            const TITLE = 'Execution Video';
            const video = test.artifacts?.video || test._retriedTest?.artifacts?.video;
            if (video) {
                codeceptjs.output.print(`Attaching Video: ${video}`);
                allure.addAttachment(TITLE, fs.readFileSync(video), FORMAT);
            }
        }
    }

    /**
     * Event when Test Failed
     *
     * @param test
     */
    async _failed(test) {
        await this._attachVideo(test);
    }

    /**
     * Event when Test Passed
     *
     * @param test
     */
    async _passed(test) {
        await this._attachVideo(test);
    }
}

module.exports = PlaywrightHelper;
