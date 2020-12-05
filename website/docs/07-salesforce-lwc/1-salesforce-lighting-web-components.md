---
title: LWC with Selenium
sub_title: End to End Test Automation with CodeceptJS - Selenium WebDriver
parents: ['Salesforce LWC']
keywords: ['LWC', 'Salesforce', 'Web Components', 'Shadow', 'Shadow DOM']
---

⭐️ Complete Example of E2E Tests with Selenium is available on github: [salesforce-lwc-e2e-selenium](https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/salesforce-lwc-codecept-example/salesforce-lwc-e2e-selenium)

[![c-selenium.gif](https://i.postimg.cc/d05z9RXg/c-selenium.gif)](https://postimg.cc/B81YSFJC)

## ☁︎ Automate Salesforce Lighting Web Components with Selenium WebDriver

[Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) is open source, empowering you to explore the source code, customize the behavior for your needs, and build enterprise-ready web components on any platform, not just Salesforce.

As per the [LWC Testing Docs](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.testing_dom_api), LWC uses a shadow DOM polyfill. To Automate with Selenium WebDriver, the global queries via _WebDriver.findElement()_ won't work. It becomes complicated when you need to handle the Elements under Shadow DOM.

The great news is, CodeceptJS has simplified the E2E Automation of Shadow Elements, by introducing the [ShadowDom](https://github.com/Codeception/CodeceptJS/blob/master/docs/shadow.md) support.

### 🚀Codeceptjs-LWC-Example

##### ➨ Complete Example of LWC E2E Automation

The Codeceptjs-BDD provides the complete example to **Automate the Salesforce LWC with WebDriver**. Please take a look at the example below,

⏩ https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/salesforce-lwc-codecept-example/

##### Quick example of "how to click the button in Shadow DOM",

```js
I.click({ shadow: ['my-app', 'recipe-hello', 'button'] });
```

If you have any questions regarding automating Saleforce LWC or Web Components or Shadow DOM, please reach out to us by submitting an issue [here](https://github.com/gkushang/codeceptjs-bdd/issues).
