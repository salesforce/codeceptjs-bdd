const { I } = inject();
const should = require('should');

Before(async () => {
  I.amOnPage('/#/');
});
