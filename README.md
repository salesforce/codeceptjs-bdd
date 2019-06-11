# CodeceptJS E2E

***[CodeceptJS](https://codecept.io/) E2E Framework with Cucumber and Saucelabs cloud***

## About

> This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel

* **Why BDD?** Read the Medium post [here](https://hackernoon.com/bdd-in-3-minutes-c3f8fc022237)

* Scenarios are written in **Cucumber Ghernkin BDD Syntax**, a.k.a `.feature` files. [Prefer writing Declartive Test Scenarios](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios)

* Run on **SauceLabs**. Single browser or Multibrowsers in Parallel

* Uses [Should.js](https://shouldjs.github.io/) Assertions Library. Various assertions with examples are available [here](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/acceptance/step_definitions/search/github.steps.js)

* Reduces Flakieness with **RetryFailedSteps** plugin and a Webdriver's **SmartWait**

* Page objects follow `<name_of_page>.page.js` naming pattern, and created under [pages](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber/acceptance/pages/) directory

* Step Definitions files follows `<name_of_step>.steps.js` naming pattern, and created under [step_definitions](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber/acceptance/step_definitions) directory

## CodceptJS-Cucumber : E2E Framework

> CodeceptJS E2E Framework with Cucumber and Saucelabs Integration

* Run Cucumber Scenarios on local browsers or chrome:headless
* Run tests in Parallel
* Run tests on Saucelabs
  * Single Browser
  * Multi Browsers in Parallel
* Launch HTML report
* Co-locate the E2E framework to your repository

To get started, follow the instructions on [Codeceptjs-Cucumber README](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/README.md)

## CodeceptJS-Saucelabs : Single or Multibrowsers in Parallel

> CodeceptJs Integration with Saucelabs. Ease of Configuration!

* Easy to run tests on Saucelabs with command 

```bash
  yarn acceptance --profile sauce:chrome
```

* Easy to run tests on Multibrowsers. All tests in Parallel with command 

```bash
  yarn acceptance:multibrowsers --profile sauce:chrome,ie,safari
```

Follow the instruction on [Codeceptjs-Saucelabs README](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-saucelabs)
