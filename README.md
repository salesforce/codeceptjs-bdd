# CodeceptJS BDD

**_[Codeceptjs-BDD](http://gkushang.github.io/) Framework with Cucumber and Saucelabs cloud_**

[![CircleCI](https://circleci.com/gh/salesforce/codeceptjs-bdd.svg?style=svg)](https://circleci.com/gh/salesforce/codeceptjs-bdd) [![Maintainability](https://api.codeclimate.com/v1/badges/348efbea54ac5670b73f/maintainability)](https://codeclimate.com/github/salesforce/codeceptjs-bdd/maintainability) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![License](https://img.shields.io/npm/l/codeceptjs-cucumber.svg)](LICENSE)

> This is the Javascript UI Automation framework to automate Mocha-styled low-level Integration tests or Webdriver-based high-level E2E tests (BDD or traditional) tests.
> Tests runs on various platforms such as Playwright Mobile/Tablet browsers, SauceLabs, SelenoidGrid, Appium and local browsers.

### 📖 User Docs / Website: [Codeceptjs-BDD/Docs](http://gkushang.github.io/)

<a href="https://gkushang.github.io" rel="nofollow noreferrer" target="_blank"><img src="https://i.postimg.cc/8zDLzZRq/Screen-Shot-2020-01-28-at-6-27-28-PM.png" alt="docs"></a>

## 🚚 [Changelog](https://github.com/gkushang/codeceptjs-bdd/blob/develop/documentation/docs/CHANGELOG.md)

## 🧐 What's inside?

-   **Why BDD?** Read my Medium post [here](https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237)

-   Run All feature files in **Parallel**

-   Run All feature files on **Multi-Browsers - run them all in Parallel**

-   Scenarios are written in **Cucumber Gherkin BDD Syntax**, a.k.a `.feature` files. [Prefer writing Declarative Test Scenarios](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios)

-   Run on **SauceLabs**. Single browser or Multi-Browsers in Parallel

-   Uses [Should.js](https://shouldjs.github.io/) Assertions Library. Various assertions with examples are available [here](https://github.com/gkushang/codeceptjs-bdd/blob/master/packages/codeceptjs-cucumber/acceptance/step_definitions/search/github.steps.js)

-   Reduces Flakiness with **RetryFailedSteps** plugin and a Webdriver's **SmartWait**

-   Page objects follow `<name_of_page>.page.js` naming pattern, and created under [pages](https://github.com/gkushang/codeceptjs-bdd/tree/master/packages/codeceptjs-cucumber/acceptance/pages/) directory

-   Step Definitions files follows `<name_of_step>.steps.js` naming pattern, and created under [step_definitions](https://github.com/gkushang/codeceptjs-bdd/tree/master/packages/codeceptjs-cucumber/acceptance/step_definitions) directory

-   **Soft Assertions:** Collect more errors in a single run rather than failing test at first failure!

## 🎥 How to Videos

<a href="https://www.youtube.com/playlist?list=PL4i-APck4KuhawdeMqhREtuVf_14CBihm" rel="nofollow noreferrer" target="_blank"><img src="https://i.postimg.cc/3R3gddC3/quick-setup-yt.png" alt="YouTube How To Videos"></a>
