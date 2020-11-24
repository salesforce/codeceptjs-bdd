CHANGELOG IS ALSO AVAILABLE ON [CODECEPTJS-BDD WEBSITE](https://github.com/gkushang/codeceptjs-bdd/blob/develop/documentation/docs/CHANGELOG.md)

## 8.0.4 (NOV-19-2020)

-   Typescript support. [More info](https://codecept.io/typescript/#typescript) on typescript setup
-   Runs on Selenoid. [More info](http://gkushang.github.io/03-02-run-on-selenoid/3-run-on-selenoid/) on how to run on Selenoid

```bash
$ yarn acceptance --profile selenoid:chrome:80
```

-   Run on any Saucelabs Platform configruation. [More info](http://gkushang.github.io/03-02-run-on-saucelabs/3-run-on-saucelabs/)

```bash
$ yarn acceptance --profile sauce:config:'Windows 10':chrome:80
```

-   Run on Mobile Devices on Playwright. [More info](http://gkushang.github.io/03-03-playwright/1-run-with-playwright/)

```bash
$ yarn acceptacne --profile device:'iPhone 11':safari
```

## 5.2.2 (AUG-30-2020)

-   Feature:
    -   Test Washer for CI
    ```bash
      yarn acceptance:washer <--grep required scenarios>
    ```

## 5.2.0 (AUG-30-2020)

-   Feature:
    -   Now, run your tests on Appium on SauceLabs - Mobile Browsers. Only WebDriver Supported.

Pass your profile with `sauce:appium:<mobile-browser-profile>`

```bash
  yarn acceptance --profile sauce:appium:androidchrome

  yarn acceptance --profile sauce:appium:iphonesafari
```

You can add more user-specific browsers in your config

-   Run your Playwright tests on Mobile Devices. Only Playwright Supported.

Pass your profile with `device:<device-name>:<browser-name>`

```bash
  yarn acceptance --profile device:'iPhone 11 pro':safari
  yarn acceptance --profile device:'Pixel 2':chrome
```

More devices are available [here](https://github.com/microsoft/playwright/blob/master/src/server/deviceDescriptors.ts)

## 5.1.1 (MAY-27-2020)

-   Fix Parallel issue with SauceLabs for Workers

```bash
  DRIVER=webdriver yarn acceptance:parallel --profile sauce:chrome
```

-   CircleCI runs more tests for Chrome, Firefox, Safari and Run in Parallal foe each commit

## 5.0.6 (MAY-20-2020)

-   Playwright Parallel Support
    By default, `yarn acceptance:parallel` commands will run 3 suites in parallel. You can add more threads by editing the number.

```bash
  "acceptance:parallel": "npx codeceptjs run-workers --suites 10",
```

You can also run all the scenarios in parallel with below script

```bash
  "acceptance:parallel": "npx codeceptjs run-workers 10",
```

-   Add `SHOW` mode for Playwright browsers - Show the running Playwright Browsers

```bash
DRIVER=playwright SHOW=true yarn acceptance
```

-   Update CLI to update the Name of the Tests Project

## 5.0.5 (MAY-19-2020)

-   "npx create-codeceptjs-bdd-tests" will now create npm script to launch HTML report

To Launch Report,

```bash

$ yarn acceptance:report

```

-   Check incldued to verify if `config/codecept.dev.env` file exists.

## 5.0.4 (MAY-12-2020)

-   Add Mocha-styled acceptance scenario support
-   Add [Documentations](https://gkushang.github.io/03-mocha-styled/1-mocha-style/) about Writing Mocha-styled scenarios along with BDD-features

## 5.0.3

-   Simplify the Configuration. Introducing Developer's Configuration
    -   Add `.defaults` config: Contains all default Test Properties across all environments
    -   Add `.secrets` config: Contains all sensitive information such as Secrets, Password, Username and will not be committed to the source control. [More info](http://localhost:8981/04-configurations/1-env-variables/)
-   Automatically injects Page Objects to the tests. [More info](http://localhost:8981/05-page-objects/3-naming-conventions/)

    -   Before: User needs to add Page Object to the Config file each time new Page Object is created
    -   Now: No need to add it to Config file manually. Framework scans all the Page Objects, create Dependency Injections

-   New Look to Codeceptjs-BDD CLI
-   Created the Binary to create the BDD Tests. Now, you do not need to Clone the repo but simply run the below command to setup the Tests. [More info](https://gkushang.github.io/01-getting-started/1-quick-start/)
-   Update docs and add link to [New Releases](/CHANGELOG/)

```bash
$ npx create-codeceptjs-bdd-tests
```

-   Fix `minimist` security violation in the package

## 4.0.x

-   Run with Microsoft [Playwrite](https://github.com/microsoft/playwright). [More info](https://gkushang.github.io/06-execution/6-run-with-playright/)
-   Support for WebComponents & Shadow DOM.
-   Salesforce LWC (Lighting Web Components) E2E Example . [More info](https://gkushang.github.io/08-salesforce-lwc/1-salesforce-lighting-web-components/)
-   Add Playwright tests to Travis CI
-   No need to add Steps to Config File, the Framework will scan all `.steps.js` files, creates dynamic array and will attach to Config at runtime.
