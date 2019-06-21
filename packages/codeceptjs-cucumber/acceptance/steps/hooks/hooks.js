const { I } = inject();
const should = require('should/should');

Before(async () => {
  I.amOnPage('/#/');
});
