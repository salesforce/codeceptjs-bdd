# Webcomponents Playwright & Webdriver E2E Example

This repository demonstrate the Simplified Locator strategy to locate the Shadow Elements to automate app with Webdriver & Playwright.

### 🌀 Clone & Install

```
git clone git@github.com:salesforce/codeceptjs-bdd.git
cd codeceptjs-bdd/examples/webcomponents-playwright-webdriver-example
yarn
```

### 🚀 Run

##### Playwright

HEADLESS mode ON
```
yarn acceptance --profile playwright:chrome
yarn acceptance --profile playwright:firefox
yarn acceptance --profile playwright:safari
```
HEADLESS mode OFF
```
HEADLESS=false yarn acceptance --profile playwright:chrome
```

##### Webdriver

```
yarn acceptance --profile webdriver:chrome
```

![](wc.png)
