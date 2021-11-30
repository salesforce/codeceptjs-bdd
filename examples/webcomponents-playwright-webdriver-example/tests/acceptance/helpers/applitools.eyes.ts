const { Eyes, Target } = require('@wdio/eyes.webdriverio');

class ApplitoolsEyes {
    eyes;

    constructor() {
        this.eyes = new Eyes(process.env.APPLITOOLS_SERVER_URL || '');
    }
}

export = new ApplitoolsEyes();
