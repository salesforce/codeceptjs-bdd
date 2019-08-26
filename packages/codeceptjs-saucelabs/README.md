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

