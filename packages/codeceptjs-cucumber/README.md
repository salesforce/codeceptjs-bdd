# codeceptjs-cucumber

***[CodeceptJS][1] E2E framework with Cucumber and Saucelabs***

## About

> This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel

## Co-locate CodeceptJS to your existing project

Follow this [Easy 3-Steps process](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/CO-LOCATE.md) to co-locate and quik start with CodeceptJS-Cucumber tests

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
    yarn acceptance:multibrowsers --grep @search_results --profile sauce:chrome,ie
```

## Debug

To print debug messages, pass the `DEBUG` param

```bash
    DEBUG=acceptance* yarn acceptance --grep @search_results
```