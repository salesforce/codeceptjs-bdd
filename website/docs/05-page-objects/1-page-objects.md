---
title: Page Objects
sub_title: Modularize your Automation with Page Object Classes
parents: ['Page Objects']
keywords: ['Page Objects', 'cucumber', 'bdd', 'gherkin', 'gwt']
---

A Page Object is defined as a class or piece of code that holds all the information about significant elements on a particular page or part of a page in a web-based application. The role of Page Objects is to help developers and testers divide a complex UI into manageable chunks, and separate the test logic from the webdriver logic in order to quickly create a more readable test. Page Objects contain a mixture of locators — functions taking a selector and returning a WebElement — for various elements on the web page, such as text fields, buttons, dropdown menus, and more, as well as custom methods to interact with those elements.

Page Objects contains all the Browser Interactions. It has become a standard for UI Automation. Page Objects contains the common `locators` and all the related `actions` related to the Page, and is sharable. The Reusability of Page Objects reduces the redundant code and increases maintainability.

####💡 Example of Page Object

```javascript
// pages/account.page.js

const { I } = inject();

class AccountPage {
  locators = {
    firstName: '[data-automation="first-name"]',
    lastName: '[data-automation="last-name"]',
    // more locators of the page
  };

  createProfile(profile) {
    I.fillField(this.locators.firstName, profile.firstName);
    I.fillField(this.locators.lastName, profile.lastName);
    // more methods required to fill the profile
  }

  // more actions of the page
}

module.exports = new AccountPage();
```

####🧩 Use of Page Object

---

Page Object is mainly used in Step Definitions to create your test flow.

```javascript
// steps/account.steps.js

const { accountPage } = inject();
const { profile } = require('../data');

When('Fred creates his profile', async () => {
  accountPage.createProfile(profile);
});
```

### Page Actions

---

Page Object in Codeceptjs-BDD contains the `actions` for the page. They can be either performing actions on the Page or retrieving information from the Page, e.g. get Text or get state of element, for the assertions.

```javascript

module.exports = {

    locators: {
       ...
    },

    // login
    login(username, password) {
        I.fillField(I.grabCss(this.locators.usernameField), username);
        I.fillField(I.grabCss(this.locators.passwordField), password);
        I.click(I.grabCss(this.locators.loginButton));
    }

    // retrieve login button text
    async getLoginButtonText() {
        return await I.grabTextFrom(I.grabCss(this.locators.loginButton));
    }
};

```

### Load Page Objects from other directories

```js
// codecept.conf.js
const { pageObjects } = require('codeceptjs-configure');

   include: {
        ...pageObjects({ from: 'path-to-other-page-objects' }), //  ...pageObjects({ from: 'src/e2e/flows/**/*.flow.ts' }),
    },
```

### More about Page Objects

- [About Locators](/05-page-objects/2-locators/)
- [About Naming Conventions](/05-page-objects/3-naming-conventions/)
