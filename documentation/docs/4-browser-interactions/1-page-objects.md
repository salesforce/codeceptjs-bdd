---
title: Page Objects
sub_title: Execute Features on Local Development Enviornment
parents: ["Browser Interactions"]
keywords: [ "Page Objects", "cucumber", "bdd", "gherkin", "gwt"]
---

Page Objects contains all the Browser Interactions. It has become a standard for UI Automation. Page Objects contains the common `locators` and all the related `actions` related to the Page, and is sharable. The Reusability of Page Objects reduces the redundant code and increases maintainability.

### Locators

Page Object in Codeceptjs-BDD contains the **locators** object which defines all your CSS/Xpath's for elements on the page.

```bash

module.exports = {

    locators: {
        usernameField:'[data-automation="username-field"]',
        loginButton: '[data-automation="login-button"]'
    },
};

```

**Recommendation**: Do not use **className**, **id** or **name** to define your CSS. They are brittle. We recommend to create **data-automation** attribute for your HTML page and always use **data-automation** attribute as your locators as shown in above example.


### Page Actions
---

Page Object in Codeceptjs-BDD contains the `actions` for the page. They can be either performing actions on the Page or retrieving information from the Page, e.g. get Text or get state of element, for the assertions.

```bash

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

    // retrive login button text
    async getLoginButtonText() {
        return await I.grabTextFrom(I.grabCss(this.locators.loginButton));
    }
};

```

### Naming Conventions
---

Page Objects in Codeceptjs-BDD should follow the below format, and should end with `page.js`, and should be placed under `pages` directory.

```bash
    <page-name>.page.js
```

### Dependency Injection
---

All Page Objects created under `pages` directory should be **included** in the `codecept.config.js` file,

```bash

  include: {
    loginPage: "./pages/Login.js",
    signinFragment: "./fragments/Signin.js"
  }

```

Now this objects can be retrieved by the name specified in configuration.

Required objects can be obtained via parameters in tests or via global inject() call.

```bash

// globally inject objects by name
const { loginPage } = inject();


Given(/Fred logs in/, () => {
    loginPage.login();
});

```

For more information, please visit [Codeceptjs Page Objects](https://codecept.io/pageobjects/)




