---
title: Configuration
sub_title: Configure your CodeceptJS tests
parents: ['Getting Started']
keywords: ['configure', 'webdriver', 'playwright']
---

### 1. WebDriver

#### WindowSize

The default Configuration of Codeceptjs-BDD will "maximize" the browser window automatically. You can disable this feature through env variable `WINDOW_SIZE = false`. You can put this variable in the `codecept.dev.env` or `codecept.env` file.

---

### 2. Screenshots

**Default Behavior:** The framework takes screenshots on each Failed Step and attaches to the Report.

#### Step by Step Screenshots

**Default: Off**

However, you can also enable Step by Step Screenshots. It is turned off by default. To Enable the feature, provide an environment variable,

```bash
ENABLE_STEP_BY_STEP_SCREENSHOTS = true
```

All the screenshots will be attached to the Allure Report. Please make sure to provide `output` value in the Config as shown [here](https://github.com/salesforce/codeceptjs-bdd/blob/develop/packages/create-codeceptjs-bdd-tests/codecept.conf.js#L14)

You can put this value to the `codecept.env` file to have it enable for every run otherwise just pass as a Command Line argument.
