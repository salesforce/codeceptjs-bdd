# Codeceptjs-Shared

***Shared library for the CodeceptJS***

[![npm](https://img.shields.io/npm/v/codeceptjs-shared.svg)](https://www.npmjs.com/package/codeceptjs-shared) [![License](https://img.shields.io/npm/l/codeceptjs-shared.svg)](LICENSE)

## Install

```
    yarn codeceptjs-shared -D
```

## Master Configuration

Simply your existing configuration by Re-Using the Master Configuration.

```
    
    const master_config = require('codeceptjs-shared').cofing.master;
    
```

Follow the example in [codecept.conf.js](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/codecept.conf.js) of [CodeceptJs-Cucumber](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber) E2E Framework.

## Shared Helpers

### Webdriver Commands Helpers

##### `scrollAndClick`
Arguments: `locator`

Scroll to the locator and click

##### `seeVisible`
Arguments: `locator`

e.g. I.seeVisible(locator)
    
##### `scrollDownToPixel`
Arguments: `locator, pixel`

Scroll down to defined pixel within the locator, e.g. scroll infinite on page

##### `scrollToElement`
Arguments: `locator`

Scroll down to the element


## Custom Methods with I

##### `takeNap`
Arguments: `seconds` [Optional]
Default: 1 second

Waits for the number of seconds

##### `grabCss`
Arguments: `string`

returns the CSS representation of a locator string.

`I.grabCss('.my-class');` returns following,

```bash

{
    css: '.my-class'
}

```
    
