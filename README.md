# [CodeceptJS BDD](http://gkushang.github.io/)

#### UI/API Test Automation Framework: Webdriver & Playwright

[![CircleCI](https://circleci.com/gh/salesforce/codeceptjs-bdd.svg?style=svg)](https://circleci.com/gh/salesforce/codeceptjs-bdd) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![License](https://img.shields.io/npm/l/codeceptjs-cucumber.svg)](LICENSE)

-   Webdriver and Playwright drivers,
-   BDD Cucumber and traditional Mocha-styled,
-   SauceLabs and Selenoid integrations,
-   Applitools, Appium integrations
-   Ease of Automating Salesforce Apps
    -   Exclusive Shadow DOM support for LWC/LWR applications, WebComponents
    -   WebdriverIO parity with Playwright to work with Shadow Elements
-   and many more features

##### Website: [Codeceptjs-BDD Framework Documentations](http://gkushang.github.io/)

## Get Started

Run below command to setup framework from scratch,

```
npx create-codeceptjs-bdd-tests
```

This **Interactive CLI** walks you through the _step-step setup_. It will setup,

-   Executios on both Webdriver & Playwright.
-   Create the framework structure with page objects, helpers, plugins, test env files etc.
-   Integrate Sauce Labs with framework
-   Provides default BDD & Mocha-style example scenarios to start with
-   Setup Parallel executions, and many more

Above command will also add **Webdriver parity with Playwright to work with Shadow elements**.

#### Example of out-of-the-box ShadowDOM support for WebComponents (LWC for Salesforce) & Applitools

Take a look at [here](https://github.com/salesforce/codeceptjs-bdd/tree/develop/examples/webcomponents-playwright-webdriver-example#webcomponents-playwright--webdriver-e2e-example)

## Execute

##### Webdriver

```
yarn acceptance --profile webdriver:chrome
```

##### Playwright

```
yarn acceptance --profile playwright:chrome
yarn acceptance --profile playwright:safari
yarn acceptance --profile playwright:firefox
yarn acceptance --profile playwright:google:chrome
```

##### Mobile or Tablets

```
yarn acceptance --profile device:'iPhone 11':safari
```

[List of devices](https://github.com/microsoft/playwright/blob/master/packages/playwright-core/src/server/deviceDescriptorsSource.json)

##### Sauce Labs

```
yarn acceptance --profile sauce:chrome
yarn acceptance --profile sauce:"macOS 11.00":firefox:80
```

##### Parallel

```
yarn acceptance:parallel --profile playwright:chrome
```

##### Headless

```
HEADLESS=true yarn acceptance:parallel --profile playwright:chrome
```

###### For more info about the framework visit [CodeceptJS BDD Docs](http://gkushang.github.io/)

### Work with Shadow Elements
Assuming you've enabled the Shadow DOM Support thru the CLI framework setup. 

Let's say you want to fill field on Shadow element on this Lighting Web Components page: https://recipes.lwc.dev/

```
I.fillField('ui-input input','codeceptjs-bdd')
```

There may be cases that doesn't require you to deal with Shadow Element, e.g. plain login page, you can disable the Shadow Locators finder by providing CSS objects, e.g. 

```
I.fillField({css: 'div.username'},'myusername');
I.fillField({css: 'div.password'},'******');
```

### 🚚 [Link to Changelog](https://gkushang.github.io/CHANGELOG)

### 🎥 How to Videos

<a href="https://www.youtube.com/playlist?list=PL4i-APck4KuhawdeMqhREtuVf_14CBihm" rel="nofollow noreferrer" target="_blank"><img src="https://i.postimg.cc/3R3gddC3/quick-setup-yt.png" alt="YouTube How To Videos"></a>

## Contributors

Thanks goes to these wonderful people who are and will have contributing to this awesome project!

[//]: contributor-faces

<a href="https://github.com/gkushang"><img src="https://avatars.githubusercontent.com/u/3663389?s=460&u=0f7dc8baaf29dc15fb2ec51398530c2e6f506f54&v=4" width="80" height="80"></a> <a href="https://github.com/limingli0707"><img src="https://avatars.githubusercontent.com/u/5189344?s=460&v=4" width="80" height="80"></a> <a href="https://github.com/shikhar91939"><img src="https://avatars.githubusercontent.com/u/7753560?s=460&u=053fafdd9726982b6c5cf8ed0c9e2cc7cf57aa53&v=4" width="80" height="80"></a> <a href="https://github.com/abkap02"><img src="https://avatars.githubusercontent.com/u/14001171?s=460&u=7e6586b048b6f4b086a743ba93136fe0250420f3&v=4" width="80" height="80"></a> <a href="https://github.com/snyk-bot"><img src="https://avatars.githubusercontent.com/u/19733683?s=460&u=8b0c79920606bb8268bdc0388d99aa7aceaea5d5&v=4" width="80" height="80"></a> <a href="https://github.com/cthorsen31"><img src="https://avatars.githubusercontent.com/u/22415613?s=460&u=c29f2ae0fbbd6789fce7ad8dede89122f28ce6a8&v=4" width="80" height="80"></a> <a href="https://github.com/mir-nawaz"><img src="https://avatars.githubusercontent.com/u/32638051?s=460&u=4c8458becd540863fed20b9c695972ce4d658e86&v=4" width="80" height="80"></a> <a href="https://github.com/andre-becker"><img src="https://avatars.githubusercontent.com/u/29253259?s=460&u=5ec0c7d5a8ca76259b25ed2ca6ad4899938801bd&v=4" width="80" height="80"></a> <a href="https://github.com/lorsatti"><img src="https://avatars.githubusercontent.com/u/49567430?s=460&u=b2082eeccb85bdd54e944a496d9561fbb137c8e0&v=4" width="80" height="80"></a> <a href="https://github.com/meghasfdc"><img src="https://avatars.githubusercontent.com/u/47006762?s=460&v=4" width="80" height="80"></a>

[//]: contributor-faces
