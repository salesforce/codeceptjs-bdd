---
title: Locators
sub_title: Locators in Page Objects
parents: ['Page Objects']
keywords: ['Page Objects', 'locators', 'page', 'gherkin', 'gwt']
---

**Locators** are one of the most powerful commands in the UI Automation. It helps locate the DOM elements through which multiple user actions can be performed.

Locators are the lifeblood of the tests. Using the right locator ensures the tests are faster, more reliable or has lower maintenance over releases. If you’re fortunate enough to be working with unique IDs and Classes, then you’re usually all set. But there will be times when choosing the right locator will become a nightmare. It can be a real challenge to verify that you have the right locators to accomplish what you want.

💁‍♂️ A good UI Automation foundation requires elements to be located uniquely within the DOM.

CodeceptJS provides flexible strategies for locating elements, and you can read more about it [here](https://codecept.io/locators/#locators)

---

### 🔔 Recommendation

**className**, **id**, **name** or **xpaths** are subject to change when UX changes. Do not use them to define your Automation Locators. They are brittle and often makes your tests flaky if they change or not defined appropriately.

To create more stable tests, we recommend to create **data-automation** attribute for your HTML page and always use **data-automation** attribute as your locators as shown in above example.

#### Example of Locators

```javascript
// In pages/account.page.js

this.locators = {
  firstName: '[data-automation="first-name"]',
  lastName: '[data-automation="last-name"]',
  // ...
};
```
