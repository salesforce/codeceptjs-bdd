# codeceptjs-cucumber

***[CodeceptJS](https://codecept.io/) E2E framework with Cucumber and Saucelabs***

## About

> This is the E2E framework with CodeceptJS and Cucumber. Integrates with Saucelabs, uses Should.js assertion library. Runs cross-browsers tests in Parallel on saucelabs.

## Co-locate CodeceptJS to your existing project

Follow this [Easy 3-Steps process](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/CO-LOCATE.md) to co-locate and quik start with CodeceptJS-Cucumber tests.

## Usage

Prefer installing [yarn](https://yarnpkg.com/en/docs/install#mac-stable)

```bash
    git clone git@github.com:gkushang/codeceptjs-e2e.git

    npx lerna bootstrap

    cd codeceptjs-e2e/packages/codeceptjs-cucumber

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

To run on `chrome:headless` browser

```bash
    yarn acceptance --profile chrome:headless
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

This framework integrates the Saucelabs to run the tests on cloud. Please follow the instructions on [CodeceptJS-Saucelabs](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-saucelabs/README.md) module to get started.

## Debug

To print debug messages, pass the `DEBUG` param

```bash
    DEBUG=acceptance* yarn acceptance --grep @search_results
```