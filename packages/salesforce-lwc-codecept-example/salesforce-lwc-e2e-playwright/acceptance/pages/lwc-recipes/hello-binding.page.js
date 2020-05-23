const { I } = inject();

class HelloBindingPage {
    constructor() {
        this.locators = {
            inputField: 'recipe-hello-binding ui-input input.input',
            cardTitle: 'recipe-hello-binding div p',
        };
    }

    enterName(name) {
        return I.fillField(this.locators.inputField, name);
    }

    async grabTitle() {
        return await I.grabTextFrom(this.locators.cardTitle);
    }
}

module.exports = new HelloBindingPage();
