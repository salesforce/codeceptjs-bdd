# codeceptjs-quick-start

***[CodeceptJS][1] with Cucumber and Saucelabs***


## About

> This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel

* **Why BDD?** Read the Medium post [here](https://hackernoon.com/bdd-in-3-minutes-c3f8fc022237)

* Scenarios are written in **Cucumber Ghernkin BDD Syntax**, a.k.a `.feature` files. [Prefer writing Declartive Test Scenarios][2]

* Run on **SauceLabs**. Single browser or Multibrowsers in Parallel

* Uses [Should.js][3] Assertions Library. Various assertions with examples are available [here][7]

* Reduces Flakieness with **RetryFailedSteps** plugin and a Webdriver's **SmartWait**

* Page objects follow `<name_of_page>.page.js` naming pattern, and created under [pages][4] directory

* Step Definitions files follows `<name_of_step>.steps.js` naming pattern, and created under [step_definitions][5] directory

## Quick Links

* [Why BDD?](https://hackernoon.com/bdd-in-3-minutes-c3f8fc022237)
* [Co-locate CodeceptJS to your existing project](https://github.com/gkushang/codeceptjs-quick-start#colocate-codeceptjs-to-your-existing-project)
* [Install](https://github.com/gkushang/codeceptjs-quick-start/blob/master/README.md#install)
* [Run Acceptance Tests](https://github.com/gkushang/codeceptjs-quick-start/blob/master/README.md#run-acceptance-tests)
* [Launch HTML Report](https://github.com/gkushang/codeceptjs-quick-start/blob/master/README.md#launch-html-report)
* [Saucelabs: Single or Multibrowsers in Parallel](https://github.com/gkushang/codeceptjs-quick-start/blob/master/README.md#saucelabs-single-or-multibrowsers-in-parallel)
* [Debug](https://github.com/gkushang/codeceptjs-quick-start/blob/master/README.md#debug)


## Co-locate CodeceptJS to your existing project

Follow this [Easy 3-Steps process][8] to co-locate and quik start with CodeceptJS-Cucumber tests

## Install

Prefer installing [yarn][6]

```bash
    cd codeceptjs-quick-start
    yarn
```

## Run Acceptance Tests

### Run all tests serially

Default browser is `chrome`

```bash
    yarn acceptance
```

To run on `firefox`

```bash
    yarn acceptance --profile firefox
```

To run on `headless` browser

```bash
    yarn acceptance --profile headless
```

### Run all tests parallel

```bash
    yarn acceptance:parallel
```

## Launch HTML Report

```bash
    yarn acceptance:report
```

## Saucelabs: Single or Multibrowsers in Parallel

This framework uses `wdio` to run tests on standalone selenium/on saucelabs platform. Run tests in any requested Saucelabs browsers or can run Multibrowsers all in parallel.

Pass your required Sauce browsers thru `profile` param as described below.

**Important:** Make sure to export your Sauce Username and Sauce Access Key as env variables

```bash
    export SAUCE_USERNAME=<sauce_username>
    export SAUCE_KEY=<sauce_key>
```

### Run on Single browser on Saucelabs

* command: `yarn acceptance`
* param: `--profile sauce:<sauce_browser>`
* available browsers: `chrome`, `ie`, `edge`, `safari`, `firefox`

```bash
    yarn acceptance --grep @search_results --profile sauce:chrome
```

### Run Parallel on Multibrowsers on Saucelabs

* command: `yarn acceptance:multibrowsers`
* param: `--profile sauce:<first_sauce_browser>,<second_sauce_browser>,<and_so_on>`
* available browsers: `chrome`, `ie`, `edge`, `safari`, `firefox`

```bash
    yarn acceptance:multibrowsers --grep @search_results --profile sauce:chrome,ie,safari
```
>

## Debug

To print debug messages, pass the `DEBUG` param

```bash
    DEBUG=acceptance* yarn acceptance --grep @search_results
```

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


[1]: https://codecept.io/
[2]: https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios
[3]: https://shouldjs.github.io/
[4]: https://github.com/gkushang/codeceptjs-quick-start/tree/master/tests/acceptance/pages
[5]: https://github.com/gkushang/codeceptjs-quick-start/tree/master/tests/acceptance/step_definitions
[6]: https://yarnpkg.com/en/docs/install#mac-stable
[7]: https://github.com/gkushang/codeceptjs-quick-start/blob/master/tests/acceptance/step_definitions/github.steps.js
[8]: https://github.com/gkushang/codeceptjs-quick-start/blob/master/tests/ADD_TO_PROJECT.md
