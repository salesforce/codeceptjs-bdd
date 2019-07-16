# Codeceptjs-Saucelabs

***Run tests on Single or Multibrowsers in Parallel on Saucelabs***

[![License](https://img.shields.io/npm/l/codeceptjs-saucelabs.svg)](LICENSE)

## Saucelabs: Single or Multibrowsers in Parallel

This module uses WebDriverIO `wdio` to run tests on single/multi-browsers tests parallel on SauceLabs.

If you are using [CodeceptJS-Cucumber](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber) E2E framework, please skip the `Install` and `Usage` part as it is already integrated with it. Please jump to [Run](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-saucelabs/README.md#run) to see how to execute tests on Saucelabs.

## Install

Follow the instructions below to install individually on your project, 

```bash
    npm i codeceptjs-saucelabs --save-dev
```

## Usage

In your `codeceptjs.conf.js`,

1. Require following

```bash
    let merge = require('deepmerge');
    let codeceptJsSauce = require('codeceptjs-saucelabs');
```

2. Deep Merge and export your **Config** 

Params to SauceLabs Config:

* sauceUsername <required>
* sauceKey <required>
* userSpecificBrowsers <optional> //default browsers: `chrome`, `ie`, `edge`, `safari`, `firefox`

Pass your Saucelabs Username, Access Key and UserSpecific Browser configuration 
```bash
   
   exports.config = merge(<your_existing_codeceptjs_conf>, codeceptJsSauce.conf(<sauceUsername>, <sauceKey>, <userSpecificBrowsers>));

```
*Note:* The User Specific Browser configuration will be merged to the default configuration
 
* Take look at the User-specific browsers configuration below

You are all set!

### Run on Single browser on Saucelabs

* command: `yarn acceptance`
* param: `--profile sauce:<sauce_browser>`
* available default browsers: `chrome`, `ie`, `edge`, `safari`, `firefox`

```bash
    yarn acceptance --grep @search_results --profile sauce:chrome
```

### Run Parallel on Multibrowsers on Saucelabs

* command: `yarn acceptance:multibrowsers`
* param: `--profile sauce:<first_sauce_browser>,<second_sauce_browser>,<and_so_on>`
* available default browsers: `chrome`, `ie`, `edge`, `safari`, `firefox`

```bash
    yarn acceptance:multibrowsers --grep @search_results --profile sauce:chrome,ie
```

## User Specific Browser Configuration

```bash
	const userSpecificBrowsers = {
            chrome: {
                browser: 'chrome',
                // add more configuration for Saucelabs platform
            },
            firefox: {
                browser: 'firefox',
            },
            safari: {
                browser: 'safari',
            },
            edge: {
                browser: 'MicrosoftEdge',
            }
	}
```


