# Codeceptjs-Cucumber

***[CodeceptJS](https://codecept.io/) BDD framework with Cucumber and Saucelabs***

[![npm](https://img.shields.io/npm/v/codeceptjs-cucumber.svg)](https://www.npmjs.com/package/codeceptjs-cucumber) [![License](https://img.shields.io/npm/l/codeceptjs-cucumber.svg)](LICENSE)

## About

> This is the BDD framework with CodeceptJS and Cucumber. Integrates with Sauce Labs, uses Should.js assertion library. Runs cross-browsers tests in Parallel on SauceLabs.

## Run

#### Run all tests:
```nashorn js
    yarn acceptance
```

#### Run one test:
```nashorn js
    yarn acceptance --grep @tag
```

#### Run test on firefox:
Default browser is `chrome`

```nashorn js
    yarn acceptance --grep @tag --profile firefox
```


## Soft Assertions

Collect all errors with Soft Assertions!

Soft Assert collects errors during scenario. Soft Assert does not throw an exception when an assert fails and would continue with the next step after the assert statement.
If there is any exception and you want to throw it then you need to use softAssertAll() method as a last statement in the scenario or with @after hook and it will report all the failures at once.

The detailed example is in [Github Sample Search Tests](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-cucumber/acceptance/steps/search/github.steps.js#L17).

```nashorn js
const verify = require('soft-assert');

// in test
verify.softAssert('actual-1', 'expected-1', 'message');
verify.softAssert('actual-2', 'expected-2', 'message');

// at any point throw all errors at once
verify.softAssertAll();
```
For more info, follow the [soft-assert](https://www.npmjs.com/package/soft-assert) library!
