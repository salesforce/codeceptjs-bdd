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
