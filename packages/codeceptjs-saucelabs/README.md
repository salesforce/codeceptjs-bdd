# Codeceptjs-Saucelabs

***Run tests on Single or Multibrowsers in Parallel on Saucelabs***

[![npm](https://img.shields.io/npm/v/codeceptjs-saucelabs.svg)](https://www.npmjs.com/package/codeceptjs-saucelabs) [![License](https://img.shields.io/npm/l/codeceptjs-saucelabs.svg)](LICENSE)


## Install

```
    
    yarn codeceptjs-saucelabs -D
    export SAUCE_USERNAME = <your_sauce_username>
    export SAUCE_KEY = <your_sauce_accesskey>
    
```

## Sauce Labs Configuration

Simply use existing configuration in your project

```
    
    const saucelabs_condfig = require('codeceptjs-saucelabs').cofing.saucelabs;
    
```

## Sauce Labs Dashboard

The Dashboard is the first page you'll see when you log into the Sauce Labs web interface. It provides you with information about the most recent tests you've run and your account usage, and provides links to other important pages such as the Archives of your previous test results and detailed account information. 

This module creates Unique Dashboard for each build by passing Unique Key automatically. If you'd like to provide more information to the Sauce Dashboard ID, you can prepend your information thru environment variable `SAUCE_BUILD`.

```
    SAUCE_BUILD=release_1.0.1 yarn acceptance --profile sauce:chrome
``` 

Above command will create a unique Dashboard of Title `release_1.0.1 - <unique_number>`.

If you do not provide `SAUCE_BUILD`, then this module will still create Dashboard with `<unique_number>`.

## Commands to execute your tests on Sauce Labs

N.B: You must export your Sauce Username and AccessKey as described above.

#### `run on Single browser - serially`

e.g. Runs all feature files serially on chrome on saucelabs

```bash

    npx run codeceptjs run --profile sauce:chrome

```

#### `run on Single browser - all in Parallel`

e.g. Runs all feature files in parallel on chrome on saucelabs

```bash

    npx run codeceptjs run-multiple parallel --profile sauce:chrome

```

#### `run on Multiple browsers - all in Parallel`

e.g. Runs all feature files on Chrome, IE and Firefox on saucelabs

```bash

    npx run codeceptjs run-multiple multibrowsers --profile sauce:chrome,ie,firefox

```

## Supported Browsers

chrome, firefox, safari, edge, ie, mobileSimulator, tabletSimulator

N.B: Please raise an issue and submit a PR to add more browsers/platform support

## Run localhost on Sauce Labs Browsers

Step 1: Start Tunnel

```bash

    git clone git@github.com:gkushang/codeceptjs-bdd.git
    export SAUCE_USERNAME=<sauce_username>
    export SAUCE_KEY=<sauce_key>
    cd codeceptjs-bdd
    lerna bootstrap
    node codeceptjs-bdd/packages/codeceptjs-saucelabs/lib/sauce.connect.launcher.js

```
Step 2: Run localhost on SauceLabs browser

    1. Go to Saucelabs and launch manual session
    2. Select Tunnel
    3. Select Browser/OS
    4. Enter URL and replace "localhost" with your Computer Name to connect to the code running locally



