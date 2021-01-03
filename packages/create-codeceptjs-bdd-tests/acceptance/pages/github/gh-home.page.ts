const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        searchBox: 'input.header-search-input',
    };

    search(searchFor) {
        I.fillField(this.locators.searchBox, searchFor);
        I.pressKey('Enter');
    }
}

export = new HomePage();
