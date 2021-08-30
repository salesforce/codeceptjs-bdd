---
title: Configuration
sub_title: Configure your CodeceptJS tests
parents: ['Configuration']
keywords: ['configure', 'webdriver', 'playwright']
---

## codecept.conf.js

`codecept.conf.js` is the main Configuration file. It merges the Master configurations from [codeceptjs-configure](https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/codeceptjs-configure) module where all the main configurations are maintained, leaving users to not to populate and worry about the maintainance of test configurations within App's source code repository. The Framework provides it to all the users.

It is present in your app's root directory. This is the same directory as the _tests_ directory. The directory to which you provided the path to when asked by the cli.

_codecept.conf_ contains the Codeceptjs Configurations only, such as name, REST API Configurations, Helpers etc. Any test related configurations are maintained in environment variables, mentioned below.

##### Read [Maintain Test Environment Variables](/04-configurations/1-env-variables/) for more info on maintaining test properties with Codeceptjs-BDD.

#### WebDriver

Run on Chrome Headless

```
yarn ui:test --profile chrome:headless
```

Run on Chrome

```
yarn ui:test --profile chrome
```

Run on Firefox

```
yarn ui:test --profile firefox
```

Run on Safari

```
yarn ui:test --profile safari
```

#### WindowSize

The default Configuration of Codeceptjs-BDD will "maximize" the browser window automatically. You can disable this feature through env variable `WINDOW_SIZE = false`. You can put this variable in the `codecept.dev.env` or `codecept.env` file.

---

### Screenshots

**Default Behavior:** The framework takes screenshots on each Failed Step and attaches to the Report.

#### Page by Page Auto Screenshots

**Default: Off**

However, you can also enable Page by Page Screenshots. It is turned off by default. To Enable the feature, provide an environment variable,

```bash
ENABLE_PAGE_BY_PAGE_SCREENSHOTS = true
```

All the screenshots will be attached to the Allure Report. Please make sure to provide `output` value in the Config as shown [here](https://github.com/salesforce/codeceptjs-bdd/blob/develop/packages/create-codeceptjs-bdd-tests/codecept.conf.js#L14)

The Preview of Screenshots can be attached to the report. It will be available to the report dir as `records.html` file.

You can put this value to the `codecept.env` file to have it enable for every run otherwise just pass as a Command Line argument.

---

### HTML Reports

This framework uses Allure Reporting.

#### Clean Reports on each run

Add below `bootstrap` function in the `codecept.conf.js` file,

```js
// in codecept.conf.js
const { cleanReports } = require('codeceptjs-configure');

const conf = {
  // ...
  bootstrap: callback =>
    cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback }),
};
```

#### Collect Reports automatically

The reports get cleaned on each run. There could be such requirements to collect reports as a backup. To do so, add below `teardown` to the `codecept.conf.js`

Report Collector options:`{reportOutputDir: string, destinationDir: string, shouldGenerateLauncher: boolean}`

shouldGenerateLauncher: this option will generate the Single Click Static (-like) Allure Report Launcher

```js
// in codecept.conf.js

const { reportCollector } = require('codeceptjs-configure');

const conf = {
  // ...
  async teardown() {
    reportCollector({ reportOutputDir: REPORT_OUTPUT_DIR });
  },
};
```

The backup directory structure will be: `<path-to-tests-folder>/MMM_DD_YYYY/MMM_DD_YYYY___HH:MM:SS_TT`, e.g. `<path-to-tests-folder>/March_21_2021/Mar_12_2021___12-32-05_AM`.

#### Print Repository Info

default: 🌏 [repository] https://github.com/salesforce/codeceptjs-bdd

custom: add `repository` info to the `codecept.conf.js` file, and the console will print the repository.

```js
// codecept.conf.js

const conf = {
  repository: 'https:.//my.internal.repository',
};
```

#### Re-try Failed Scenarios: BDD or Mocha

To Retry Failed Scenario, enable the below plugin in the `codecept.conf.js`,

`retries: number of retries for each failed scenario`

```js
 plugins: {
  retryFailedTests: {
      enabled: true,
      retries: 1
  }
}

```
