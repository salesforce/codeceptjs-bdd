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

## Quick Links
* [CodeceptJS-Cucumber: E2E Framework](https://github.com/gkushang/codeceptjs-e2e#codceptjs-cucumber)
* [Co-locate CodeceptJS to your existing project](https://github.com/gkushang/codeceptjs-e2e#codceptjs-cucumber)
* [Install & Run Cucumber Tests](https://github.com/gkushang/codeceptjs-e2e#install--run-cucumber-tests)
* [CodeceptJS-Saucelabs: Single or Multibrowsers in Parallel](https://github.com/gkushang/codeceptjs-e2e#codeceptjs-saueclabs)


## CodceptJS-Cucumber : E2E Framework

### Co-locate CodeceptJS to your existing project

Follow this [Easy 3-Steps process](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/CO-LOCATE.md) to co-locate and quik start with CodeceptJS-Cucumber tests

### Install & Run Cucumber Tests

Follow the instruction on [Codeceptjs-Cucumber README](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/README.md)

## CodeceptJS-Saucelabs : Single or Multibrowsers in Parallel

Run tests in any requested Saucelabs browsers or can run Multibrowsers all in parallel.

Pass your required Sauce browsers thru `--profile` param as described below.

**Important:** Make sure to export your Sauce Username and Sauce Access Key as env variables

```bash
    export SAUCE_USERNAME=<sauce_username>
    export SAUCE_KEY=<sauce_key>
```

### Run on Single browser on Saucelabs

Follow the instruction on [Codeceptjs-Saucelabs README](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-saucelabs)

## Sample Feature File

```bash

@search
Feature: Search Github

  In order to see Github Search works
  As a Github user
  I want to be able to search for repository

 @search_repository
  Scenario: Fred should see the highlighted results for the searched repository

    Given Fred is on Github Homepage
    When he searches for the "codeceptjs-quick-start"
    Then he sees all the detailed highlighted results including description or license info and many more
  
```