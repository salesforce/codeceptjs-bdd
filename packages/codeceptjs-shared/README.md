# `codeceptjs-shared`

***Shared library for the CodeceptJS***

[![License](https://img.shields.io/npm/l/codeceptjs-shared.svg)](LICENSE)

## Install

```
    yarn codeceptjs-shared deepmerge -D
```

## Simply your existing configuration by Re-Using the Master Configuration

In your `codecept.conf.js` file, add the following 

```
    const codeceptjsShared = require('codeceptjs-shared');
    const merge = require('deepmerge');
```

Exports below config,

```
    exports.config = merge(conf, codeceptjsShared.conf);
```

Follow the example in [codecept.conf.js](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/codecept.conf.js) of [CodeceptJs-Cucumber](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber) E2E Framework.

