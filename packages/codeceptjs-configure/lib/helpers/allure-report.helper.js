const { appendFileSync } = require('fs');
const { join } = require('path');
const Helper = require('@codeceptjs/helper');

/**
 * Helper class for the Allure Report
 */
class AllureHelper extends Helper {
    constructor(config) {
        super(config);
        this.output = config.output;
    }

    buildPath(name) {
        return join(this.output, name);
    }

    printEnvsOnAllureReport = (key, value) => {
        const text = `${key}=${value}\n`;
        const path = this.buildPath('environment.properties');
        appendFileSync(path, text);
    };
}

module.exports = AllureHelper;
