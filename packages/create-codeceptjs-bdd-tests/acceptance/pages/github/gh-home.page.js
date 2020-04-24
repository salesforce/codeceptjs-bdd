const { I } = inject();

// page class can be extended
class HomePage {
    constructor() {
        // page locators
        this.locators = {
            searchBox: '.header-search-input',
        };
    }

    search(searchFor) {
        I.fillField(I.grabCss(this.locators.searchBox), searchFor);
        I.pressKey('Enter');
    }
}

module.exports = new HomePage();
