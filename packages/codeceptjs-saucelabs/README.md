# Codeceptjs-Saucelabs

***Run tests on Single or Multibrowsers in Parallel on Saucelabs***

[![npm](https://img.shields.io/npm/v/codeceptjs-saucelabs.svg)](https://www.npmjs.com/package/codeceptjs-saucelabs) [![License](https://img.shields.io/npm/l/codeceptjs-saucelabs.svg)](LICENSE)


## Install

```
    
    yarn codeceptjs-saucelabs -D
    export SAUCE_USERNAME = <your_sauce_username>
    export SAUCE_KEY = <your_sauce_accesskey>
    
```

## Saucelabs Configuration

Simply use existing configuration in your project

```
    
    const saucelabs_condfig = require('codeceptjs-saucelabs').cofing.saucelabs;
    
```

## Commands to execute your tests on Saucelabs

N.B: You must export your Sauce Username and Accesskey as described above.

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


## Run localhost on Saucelabs Browsers

Step 1: Start Tunnel

```bash

    npm i codeceptjs-saucelabs
    cd codeceptjs-saucelabs
    yarn
    SAUCE_USERNAME=<sauce_username> SAUCE_KEY=<sauce_key> node lib/sauce.connect.launcher.js

```
Step 2: Run localhost on SauceLabs browser

    1. Go to Saucelabs and launch manual session
    2. Select Tunnel
    3. Select Browser/OS
    4. Enter URL and replace "localhost" with your Computer Name to connect to the code running locally



