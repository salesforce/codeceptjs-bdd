---
title: Integration Tests - Mocha
sub_title: Write Mocha-styled classical acceptance scenarios along with BDD Features
parents: ['Acceptance Tests', 'Integration Tests']
keywords: ['mocha', 'classical']
---

It is common to think that BDD scenario is equal to test. But it's actually not. Not every test should be described as a feature. Not every test is written to test real business value. For instance, regression tests or negative scenario tests are not bringing any value to business. Business analysts don't care about scenario reproducing bug #13, or what error message is displayed when user tries to enter wrong password on login screen. Writing all the tests inside a feature files creates informational overflow.

In CodeceptJS you can combine tests written in Gherkin format with classical acceptance tests. This way you can keep your feature files compact with minimal set of scenarios, and write regular tests to cover all cases. Please note, feature files will be executed before tests.

## 🚀 Mocha-styled scenarios along with BDD Features

With Codeceptjs-BDD Framework, you can **opt to choose the mixed approach** writing your Test Automation in both `BDD-styled` Gherkin Feature Files and/or `Mocha-styled` Classical Acceptance Scenarios.

This is the great feature CodeceptJS provides, and enables everyone to choose what is best suited for the application.

### Write Mocha Styled Acceptance Scenarios

Codeceptjs-BDD provides a directory called `acceptance/mocha`, where you usually write your mocha-styled tests but you can change the location as required. It won't affect your configuration.

**Naming convention**

The mocha-style tests should have extention `*.spec.js` for default configuration to pick up and run the tests. However, if you decide to change the extention, e.g. to `*.test.js`, then you can definitly do so by updating your Projects root configuration which is explained later in this section.

By default, the CLI will create the foler named `mocha` but you can rename it to your choice. e.g. `__tests__`.

#### 🚦Example

```javascript
// acceptance/__tests__/login.spec.js

/* FEATURE */
Feature('Login').tag('@login');

/* BEFORE */
Before(I => {
  // or Background
  I.amOnPage('/login');
});

/* SCENARIOS */
Scenario('Fred logs in successfully', I => {
  I.see('Login');
  // login and assertions
});

Scenario('Fred cannot login with invalid credentials', I => {
  // login and assertions
});

Scenario('Fred sees captcha for consecutive invalid attempts to login', I => {
  // login and assertions
});
```

##### Execute

Execution of Mocha-styled scenario are done thru the same script. Below command runs both BDD-Fearures, if exists, and all your Mocha-styled scenarios. Please note, BDD-Features will run before the Mocha-styled scenarios.

```bash

yarn acceptance

```

e.g. to run above Mocha-styled feature,

```bash

yarn acceptance --grep @login

```

##### Override the default \*.spec.js extention

If you decide to change the mocha-style scenarios extention to different than `*.spec.js`, then you are required to update your Projects configuration as shown below,

e.g. if you decide to have extention `*.test.js`, then add below line to your configuration,

```javascript
// in <project-path>/codecept.conf.js

let conf = {
  // other configuration will remain unchanged

  // add below line to the exiting configuration
  tests: process.env.CODECEPT_RELATIVE_PATH + '**/*.test.js',
};
```
