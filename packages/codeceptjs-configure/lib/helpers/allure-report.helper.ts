import { appendFileSync } from 'fs';
import { join } from 'path';
/**
 * Helper class for the Allure Report
 */
class AllureHelper extends Helper {
    output: string;

    constructor(config) {
        super(config);
        this.output = config.output;
    }

    private buildPath(name: string) {
        return join(this.output, name);
    }

    printEnvsOnAllureReport = (key: string, value: string): void => {
        const text = `${key}=${value}\n`;
        const path = this.buildPath('environment.properties');
        appendFileSync(path, text);
    };
}

export = AllureHelper;
