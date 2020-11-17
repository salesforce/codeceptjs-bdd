const Helper = require('@codeceptjs/helper');

class custom_methods extends Helper {
    driver() {
        return this.helpers.WebDriver || this.helpers.Playwright;
    }

    takeNap(seconds) {
        const I = this.driver();
        return seconds ? I.wait(seconds) : I.wait(1);
    }
}

module.exports = custom_methods;
