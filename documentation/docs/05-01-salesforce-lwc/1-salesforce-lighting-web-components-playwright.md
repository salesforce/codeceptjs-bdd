---
title: LWC with Playwright
sub_title: End to End Test Automation with CodeceptJS - Playwright
parents: ['Salesforce LWC']
keywords: ['LWC', 'Salesforce', 'Web Components', 'Shadow', 'Shadow DOM']
---

## ☁︎ Automate Salesforce Lighting Web Components with [Micorsoft's Playwright](https://github.com/microsoft/playwright) Browsers

💯 **ADVANTANGE:** The Shadow Locators are equivalent to [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). Makes it simpler to Automate WebComponents or LWC Apps.

### 💁‍♂️ About LWC

[Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) is open source, empowering you to explore the source code, customize the behavior for your needs, and build enterprise-ready web components on any platform, not just Salesforce.

---

### 🛑 Challenge with Selenium Webdriver

As per the [LWC Testing Docs](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.testing_dom_api), LWC uses a shadow DOM polyfill. There are known challanges with Selenium WebDriver to locate the elements but Codeceptjs-BDD has solved it to the extent. If you're interested in LWC with Selenium Webdriver, take a look at [LWC with Selenium](/08-salesforce-lwc/1-salesforce-lighting-web-components/).

---

## 🎊 Let's make is simpler with Codeceptjs-BDD

The LWC Shadow Locators are equivalent to [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). Take a look at the Example below!

- **Simplified Locators:** Standard CSS/Xpaths Locators

```javascript
I.click({ css: '.checkout-button' });
```

- **Healdess:** Runs Headless on all three majorly used browsers,

  - Chromium
  - WebKit Safari
  - Firefox

- **Non-Headless:** User can choose to run tests in Non-Headless mode too,

```javascript
  SHOW=true yarn acceptance
```

- **Parallel Executions:** Runs all Scenarios or all Test Suites in Parallel

```bash
  yarn acceptance:parallel
```

### 🚀 Codeceptjs-LWC-Example with Playwright

##### ➨ Complete Example of LWC E2E Automation

```js

Feature('Commerce Checkout');

Scenario('Fred can checkout successfully', I => {

    I.fillField('.credit-card-number', '4444 4444 4444 4444');
    I.click({css: '.checkout-button');

    // ...and more

    (await I.grabTextFrom('.success-message')).should.equal('Checkout Completed!');

  }
)

```

If you have any questions regarding automating Saleforce LWC or Web Components or Shadow DOM, please reach out to us by submitting an issue [here](https://github.com/gkushang/codeceptjs-bdd/issues).
