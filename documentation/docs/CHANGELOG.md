---
title: CHANGELOG
sub_title: Codeceptjs-BDD Releases for codeceptjs-shared & codeceptjs-saucelabs
keywords: ['changelog', 'releases', 'release']
---

## 5.0.x

- Add a Developer's Configuration to the framework, and Simplify the configruation.
  - Add `.defaults` config: Contains all default Test Properties across all environments
  - Add `.secrets` config: Contains all sensitive information such as Secrets, Password, Username and will not be commited to the source control. [More info](http://localhost:8981/04-configurations/1-env-variables/)
- Automatically injects Page Objects to the tests. [More info](http://localhost:8981/05-page-objects/3-naming-conventions/)

  - Before: User needs to add Page Object to the Config file each time new Page Object is created
  - Now: No need to add it to Config file manually. Framework scans all the Page Objects, create Dependency Injections

- New Look to Codeceptjs-BDD CLI
- Created the Binary to create the BDD Tests. Now, you do not need to Clone the repo but simply run the below command to setup the Tests. [More info](https://gkushang.github.io/01-getting-started/1-quick-start/)

```bash
$ npx create-codeceptjs-bdd-tests
```

## 4.0.x

- Run with Microsoft [Playwrite](https://github.com/microsoft/playwright). [More info](https://gkushang.github.io/06-execution/6-run-with-playright/)
- Support for WebComponents & Shadow DOM.
- Salesforce LWC (Lighting Web Components) E2E Example . [More info](https://gkushang.github.io/08-salesforce-lwc/1-salesforce-lighting-web-components/)
- Add Playwright tests to Travis CI
- No need to add Steps to Config File, the Framework will scan all `.steps.js` files, creates dynamic array and will attach to Config at runtime.
