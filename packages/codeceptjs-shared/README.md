# `codeceptjs-shared`

> Shared library for the CodeceptJS

## Install

```
    yarn codeceptjs-shared deepmerge -D
```

## Reuse the Master Configuration

In your `codecept.conf.js` file, add the following 

```
    const codeceptjsShared = require('codeceptjs-shared');
    const merge = require('deepmerge');
```

Exports below config,

```
    exports.config = merge(conf, codeceptjsShared.conf);
```

Follow the example in [CodeceptJs-Cucumber](https://github.com/gkushang/codeceptjs-e2e/tree/master/packages/codeceptjs-cucumber) E2E [codecept.conf.js](https://github.com/gkushang/codeceptjs-e2e/blob/master/packages/codeceptjs-cucumber/codecept.conf.js)

