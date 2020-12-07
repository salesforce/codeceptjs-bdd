const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        helloBinding: {
            nameField: 'recipe-hello-binding input',
            title: 'recipe-hello-binding p',
        },
    };

    helloBinding = {
        enterName: (name) => {
            I.fillField(this.locators.helloBinding.nameField, name);
            I.wait(2);
        },

        grabTitle: async () => await I.grabTextFrom(this.locators.helloBinding.title),
    };
}

export = new HomePage();
