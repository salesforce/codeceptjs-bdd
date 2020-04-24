---
title: Salesforce Lighting Web Components
sub_title: End to End Test Automation with CodeceptJS - Selenium WebDriver
parents: ["Salesforce LWC"]
keywords: [ "LWC", "Salesforce", "Web Components", "Shadow", "Shadow DOM"]
---

## ☁︎ Automate Salesforce Lighting Web Components with Selenium WebDriver

[Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) is open source, empowering you to explore the source code, customize the behavior for your needs, and build enterprise-ready web components on any platform, not just Salesforce.

As per the [LWC Testing Docs](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.testing_dom_api), LWC uses a shadow DOM polyfill. To Automate with Selenium WebDriver, the global queries via *WebDriver.findElement()* won't work. It becomes complicated when you need to handle the Elements under Shadow DOM. 

The great news is, CodeceptJS has simplified the E2E Automation of Shadow Elements, by introducing the [ShadowDom](https://github.com/Codeception/CodeceptJS/blob/master/docs/shadow.md) support. 

### 🚀Codeceptjs-LWC-Example
##### ➨ Complete Example of LWC E2E Automation 

The Codeceptjs-BDD provides the complete example to **Automate the Salesforce LWC with WebDriver**. Please take a look at the example below,

⏩ https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/codeceptjs-lwc-example

##### Quick example of "how to click the button in Shadow DOM",

```js
    I.click({ shadow: ['my-app', 'recipe-hello', 'button'] });
```

## BDD or Mocha styles tests

With Codeceptjs-bdd, you can choose to write your tests in any format. BDD and/or Mocha styles tests OR mix/match both styles - all are supported!

### BDD Scenarios

```js
 
@hello_binding @lwc_recipes
Feature: HelloBinding from Salesforce LWC Recipes

    As a LWC developer
    I want to be able to automate the LWC Shadow Dom Components
    So that I can quicly create my UI Automated Suite using Selenium

    => LWC Recipe Page: https://recipes.lwc.dev/#hello

    @hello_binding_component
    Scenario: Fred successfully types in and verifies the title in Hello Binding LWC Component

        When Fred types "Kushang Gajjar" into the Hello Binding Component
        Then he sees the title is updated accordingly

```

### Mocha Scenarios

```js
 
Feature('HelloBinding from Salesforce LWC Recipes (mocha)');

Scenario('Fred successfully types in and verifies the title in Hello Binding LWC Component', async (I, helloBinding) => {

    const name = 'Salesforce LWC';
    I.amOnPage('/#hello/');
    helloBinding.enterName(name);
    (await helloBinding.grabTitle()).should.equal(`Hello, ${name}!`);
    
}).tag('@hello-binding-mocha').tag('smoke');
```

If you have any questions regarding automating Saleforce LWC or Web Components or Shadow DOM, please reach out to us by submitting an issue [here](https://github.com/gkushang/codeceptjs-bdd/issues).

