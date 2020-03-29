---
title: Salesforce Lighting Web Components
sub_title: End to End Test Automation with CodeceptJS - Selenium WebDriver
parents: ["Salesforce LWC"]
keywords: [ "LWC", "Salesforce", "Web Components", "Shadow", "Shadow DOM"]
---

## ☁︎ Automate Salesforce Lighting Web Components with Selenium WebDriver

[Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) is open source, empowering you to explore the source code, customize the behavior for your needs, and build enterprise-ready web components on any platform, not just Salesforce.

As per the [LWC Testing Docs](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.testing_dom_api), LWC uses a shadow DOM polyfill. To Automate with Selenium WebDriver, the global queries via **WebDriver.findElement()** won't work. It becomes complicated when you need to handle the Elements under Shadow DOM. 

The great news is, CodeceptJS has simplified the E2E Automation of Shadow Elements, by introducing the [ShadowDom](https://github.com/Codeception/CodeceptJS/blob/master/docs/shadow.md) support. 

## Example of LWC E2E Automation

The Codeceptjs-BDD provids the complete example of to Automated the Salesforce LWC with WebDriver. Please take a look at the example below,

⏩ https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/codeceptjs-lwc-example

If you have any questions regarding automating Saleforce LWC or Web Components or Shadow DOM, please reach out to us by submitting an issue [here](https://github.com/gkushang/codeceptjs-bdd/issues).

