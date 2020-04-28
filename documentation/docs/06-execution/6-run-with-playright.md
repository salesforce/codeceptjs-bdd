---
title: Run with Playwright
sub_title: Execute your tests with Microsoft Playwright
parents: ['Execution']
keywords: ['headless', 'Playwright', 'puppeteer']
---

## 🌀 About Playwright

Playwright is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API. It enables cross-browser web automation that is ever-green, capable, reliable and fast.

Headless is supported for all the browsers on all platforms.

Codeceptjs-BDD integrates the Playwright with WebDriver.

## 🚀 To run on Playwright

If you have setup framework through the Codeceptjs-BDD [CLI](/01-getting-started/1-quick-start/), then you'd have an option to select Default driver. If it is default, then you can follow the [execution](/06-execution/1-run-locally/) documentation. If it is not default, then you can pass `DRIVER` command shown below,

You can also define `DRIVER` environment variable in your `dev.codecept.secrets` file which won't be commmitted to the source contol and becomes your personalized local development environment.

```bash

# file: config/dev.codecept.defaults

# ... Other ENV variables

# DRIVER ENV
DRIVER = playwright

# ... Other ENV variables

```

Alternatively, you can pass `DRIVER` value at the runtime,

```bash

DRIVER=Playwright yarn acceptance

```

Default browser for Playwright is `chromium`

But, if you have defined your default driver as Playwright, then you do not need to pass `DRIVER` command, and you can simply run your tests with below commands,

```bash
yarn acceptance
```

To run on Playwright's Safari or WebKit,

```bash

yarn acceptance --profile safari
yarn acceptance --profile webkit

```

To run on Playwright's Firefox,

```bash
yarn acceptance --profile firefox
```

#### 👉 Please note: Playwright support was added from the version 4

### + Add Playwright support for existing framework before version 4

Please note: The Playwright support was included with the `codeceptjs-shared@4` version. If you have previous version installed, please update your `codecept.conf.js` declaration and dependencies as defined [here](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-cucumber/codecept.conf.js#L1-L7) and update your config creation as defined [here](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-cucumber/codecept.conf.js#L42).

And, install below dependencies

```bash
yarn add codeceptjs-shared@^4 -D
```
