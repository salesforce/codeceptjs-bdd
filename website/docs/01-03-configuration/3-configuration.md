---
title: Configuration
sub_title: Configure your CodeceptJS tests
parents: ['Configuration']
keywords: ['configure', 'webdriver', 'playwright']
---

### 1. WebDriver

#### WindowSize

The default Configuration of Codeceptjs-BDD will "maximize" the browser window automatically. You can disable this feature through env variable `WINDOW_SIZE = false`. You can put this variable in the `codecept.dev.env` or `codecept.env` file.

---

### 2. Screenshots

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

### 3. HTML Reports

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
