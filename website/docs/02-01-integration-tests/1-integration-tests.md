---
title: Integration Tests - Mocha
sub_title: Write Mocha-styled classical acceptance scenarios along with BDD Features
parents: ['Integration Tests']
keywords: ['mocha', 'classical', 'integration', 'tests', 'playwright']
---

Integration tests should test the UI components integration, either with manual mocks or with the API Recordings/Replay mocks mode. In general, Integration tests should run headless in the developer environment.

Codeceptjs-BDD offers the Playwright integration tests to write the Integration tests. The recommendation is to have the Mocha-styled tests for the integration that runs on Playwright Headless.

## 🚀 Mocha-styled scenarios along with BDD Features

Codeceptjs-BDD provides a directory called `acceptance/__specs__`, where you usually write your mocha-styled tests but you can change the location as required. It won't affect your configuration.

Run with,

```javascript
// on browsers
$ yarn test:integration --profile playwright:chrome

// on mobile/tablets
$ yarn test:integration --profile device:'iPhone 11':safari

```

**Naming convention**

The mocha-style tests should have extension `*.spec.js` for default configuration to pick up and run the tests. However, if you decide to change the extension, e.g. to `*.test.js`, then you can definitely do so by updating your Projects root configuration.

By default, the CLI will create the folder named `__specs__`.

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
