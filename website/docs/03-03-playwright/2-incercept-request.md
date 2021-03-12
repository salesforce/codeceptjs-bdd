---
title: Intercept Request
sub_title: monitor or manipulate the requests/response
parents: ['Playwright']
keywords: ['headless', 'Playwright', 'Intercept']
---

When we browse the web, a series of HTTP requests and responses are exchanged between our browser and the pages we are visiting. There are scenarios in which it is useful to monitor or manipulate this traffic, instead of letting it happen as-is.

## Request interception (Headless or non-headless)

The example is available here - https://github.com/salesforce/codeceptjs-bdd/blob/develop/packages/create-codeceptjs-bdd-tests/acceptance/specs/login.mocha.spec.ts#L13

To run,

```bash
// Install
git clone git@github.com:salesforce/codeceptjs-bdd.git
cd codeceptjs-bdd/packages/create-codeceptjs-bdd-tests
yarn


// Run, non-Headless
yarn acceptance --profile playwright:chrome --grep @intercept

// Run, Headless
HEADLESS=true yarn acceptance --profile playwright:chrome --grep @intercept

```

#### Example Scenario

```js
Scenario('Fred intercept request for playwright @intercept', async ({ I }) => {
  if (await I.checkIfRunningOnPlaywright()) {
    // Set Mock Data
    const mockResponseObject = [
      {
        id: 1,
        title: 'How to Intercept a Response in Playwright',
        author: 'CodeceptBDD',
        genre: 'business',
        price: '100.00',
        rating: '★★★★★',
        stock: 65535,
      },
    ];

    // Intercept Request
    I.usePlaywrightTo('do intercept', async ({ page }) => {
      await page.route(
        'https://danube-webshop.herokuapp.com/api/books',
        (route) =>
          route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(mockResponseObject),
          })
      );
    });

    // Validate
    I.amOnPage('https://danube-webshop.herokuapp.com/');
    I.seeTextEquals('How to Intercept a Response in Playwright', {
      css: '.preview-title',
    });
    I.seeTextEquals('CodeceptBDD', { css: '.preview-author' });
  }
});
```
