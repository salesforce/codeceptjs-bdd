---
title: Run on Mobile & Desktop
sub_title: Execute your tests with Microsoft Playwright
parents: ['Playwright']
keywords: ['headless', 'Playwright']
---

Codeceptjs-BDD implements all the required capabilities to run Playwright tests on Mobile, Tablets, and Desktop layouts.

### 👺 About Playwright

Playwright is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API. It enables cross-browser web automation that is ever-green, capable, reliable and fast.

Headless is supported for all the browsers on all platforms.

Codeceptjs-BDD integrates the Playwright with WebDriver.

### 🚀 To run on Playwright

If you have setup framework through the Codeceptjs-BDD [CLI](/01-01-getting-started/1-quick-start/), then you'd have an option to select Default driver. Set the Default Driver in `codecept.env` file to be Playwright.

Alternatively, set the `DRIVER` to be ~playwright thru CLI,

```bash

$ DRIVER=playwright yarn acceptance

```

### 📱 Run on Mobile Devices

Playwright can run your tests various Mobile and Tablets layouts. The Codeceptjs-BDD implements all the required capabilities to run on any combinations of Mobile-Tablets/Browsers thru `device` param.

Playwrights devices are available [here](https://github.com/microsoft/playwright/blob/master/src/server/deviceDescriptors.ts)

```bash

$ DRIVER=playwright yarn acceptance --profile device:'<name-of-device>':<browser>

```

`<name-of-device>` is the Mobile/Tablet names found [here](https://github.com/microsoft/playwright/blob/master/src/server/deviceDescriptors.ts).

e.g.

`$ yarn acceptance --profile device:'iPhone 11':safari`

`yarn acceptance --profile device:'Galaxy Note II':chrome`

### 🖥 Run on Desktop Browsers

Default browser for Playwright is `chromium`. To run on different desktop browsers,

```bash

$ yarn acceptance --profile playwright:chrome
$ yarn acceptance --profile playwright:firefox
$ yarn acceptance --profile playwright:safari

```

### Run on Google Chrome: Stable Chrome build

```bash

$ yarn acceptance --profile playwright:google:chrome

```

### 🤖 Run Headless

```bash
$ HEADLESS=false yarn acceptance
```

#### 👉 Please note: Playwright support was added from the codeceptjs-configure@4

### + Add Playwright support for existing framework before version 4

Please note: The Playwright support was included with the `codeceptjs-configure@4` version. If you have previous version installed, please update your `codeceptjs.conf.js` declaration and dependencies as defined [here](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-cucumber/codecept.conf.js#L1-L7) and update your config creation as defined [here](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-cucumber/codecept.conf.js#L42).

And, install below dependencies

```bash
yarn add codeceptjs-configure@^4 -D
```

### Trigger Method on DOM Component

```js
I.usePlaywrightTo('trigger method on component', async ({ page }) => {
  await page.$eval(DOM_COMP, el =>
    el.<method-name>(<any-param>)
  );
});
```

### Record Playwright Video and Attach on Allure Report

To enable this feature, add the below ENV property to the `codecept.env` file,

```js
RECORD_VIDEO_ON_FAIL = true; // only to record video on Fail & attach to Allure
```

````js
RECORD_PLAYWRIGHT_VIDEO = true; // record and attach Playwright video regardless of results


### Record Playwright Trace on FAIL

To enable this feature, add the below ENV property to the `codecept.env` file,

```js
RECORD_TRACE_ON_FAIL = true;
````

More info trace: https://codecept.io/playwright/#trace
