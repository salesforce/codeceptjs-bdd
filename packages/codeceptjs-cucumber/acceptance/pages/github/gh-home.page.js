const {I} = inject();

module.exports = {
    locators: {
        searchBox: '.header-search-input'
    },

    search(searchFor) {
        I.fillField(I.grabCss(this.locators.searchBox), searchFor);
        I.pressKey('Enter');
    }
};
