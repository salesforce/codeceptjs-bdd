const {I} = inject();

module.exports = {
    locators: {
        resultLink: 'li.repo-list-item>div>h3>a',
        description: 'p.col-12.col-md-9',
        licenseInfo: 'p.f6.text-gray'
    },

    async grabHrefForResult() {
        return await I.grabAttributeFrom(I.grabCss(this.locators.resultLink), 'href');
    },

    async grabDescription() {
        return await I.grabTextFrom(I.grabCss(this.locators.description));
    },

    async grabLicenseInfo() {
        return await I.grabTextFrom(I.grabCss(this.locators.licenseInfo));
    }
};
