---
title: Salesforce Lighting Web Components
sub_title: End to End Test Automation with CodeceptJS - Selenium WebDriver
parents: ["Salesforce LWC"]
keywords: [ "LWC", "Salesforce", "Web Components", "Shadow", "Shadow DOM"]
---

## ☁︎ Automate Salesforce Lighting Web Components with Selenium WebDriver

[Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) is open source, empowering you to explore the source code, customize the behavior for your needs, and build enterprise-ready web components on any platform, not just Salesforce.

As per the [docs](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.testing_dom_api), LWC uses a shadow DOM polyfill. To Automate with Selenium WebDriver, the global global queries via `WebDriver.findElement()` won't work. 

CodeceptJS has resolved the issue by introducing support for the [ShadowDom](https://github.com/Codeception/CodeceptJS/blob/master/docs/shadow.md). If you're looking to automate the Shadow DOM or Salesforce's Lighting Web Components, follow the below example of [Salesforce's Lighting Recipes](https://recipes.lwc.dev/) HelloBinding Component,

## Example

```js
 
Feature('Shadow Dom Locators');

Scenario('should fill input field within shadow elements', I => {

  // navigate to LWC webpage containing shadow dom
  I.amOnPage('https://recipes.lwc.dev/');

  // click Click Me! button
  I.click({ shadow: ['my-app', 'recipe-hello', 'button'] });

  // fill the input field
  I.fillField({ shadow: ['my-app', 'recipe-hello-binding', 'ui-input', 'input.input'] }, 'value');

});


```
