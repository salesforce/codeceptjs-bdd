const { I } = inject();
const should = require('should/should');

Before((I) => {
    I.amOnPage('/#/');
});
