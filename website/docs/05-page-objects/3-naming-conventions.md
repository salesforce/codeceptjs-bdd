---
title: Naming Conventions
sub_title: Naming conventions of Page Objects
parents: ['Page Objects']
keywords: ['Page Objects', 'locators', 'page', 'gherkin', 'gwt']
---

When developing a testing framework, it is a good idea to have some naming convention standards for each type of files you create. In this particular case, Codecptjs-BDD automatically injects the Page Objects to your Step Definitions or Tests files by scanning through your test code - so,it is very important to follow the Page Objects Naming Conventions.

####❓Why to follow the naming conventions for Page Objects?

Codeceptjs has created the [Page Objects Depedency Injection](https://codecept.io/pageobjects/#dependency-injection), which requires developers to include all the page objects in the configuration file. Which is a manual and very tedious process to include Page Objects each time you create new.

💯 The **Codecpetjs-BDD** framework automates the entire process of dependency injections and eliminates the need to define page objects manually inthe configurations. Just follow the below conventions.

#### 🌈 Two conventions of Page Objects

1. All the Page Objects must be under `pages` directory
2. Page Objects file name must have `*.page.js` extension

```bash
    pages/<page-name>.page.js
```

#### 🔎 How Codecpejts-BDD injects the page objects into your tests?

Page Objects are mapped to **camelCase** attributes in the tests, while the file name can follow any patterns, e.g. kebab case or dots etc.

e.g. any of below Page Objects will be mapped to `myAccount` attribute in tests.

1. my-account.page.js (recommended)
1. my.account.page.js
1. my_account.page.js
1. myAccount.page.js

✅To inject in tests,

```javascript
const { myAccount } = inject();
```
