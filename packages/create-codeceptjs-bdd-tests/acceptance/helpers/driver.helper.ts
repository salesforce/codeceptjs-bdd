const Helper = require('@codeceptjs/helper');

class driver_helper extends Helper {
    checkIfRunningOnPlaywright() {
        return this.helpers.Playwright !== undefined;
    }
}

export = driver_helper;
