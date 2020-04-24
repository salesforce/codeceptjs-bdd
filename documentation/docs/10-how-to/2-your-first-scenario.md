---
title: Automate First Scenario
sub_title: 4 steps to automate
parents: ['How To']
keywords: ['Videos', 'Watch in action', 'Automate', 'how']
---

It very simple to start automating your first Codeceptjs-BDD Scenario. You can follow the Sample examples defined in the [codeceptjs-cucumber](https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/codeceptjs-cucumber/acceptance) framework.

Follow the below steps to automate your first scenario:

1. Write Feature File
2. Implement Steps
3. Implement Page Object
4. Assert

Let's automate the **Add to Cart** scenario for the Shopping App.

### Step 1: Writing Feature File

First, start writing Feature Files. Please checkout the [Beginners Mistakes](/6-best-practices/1-bdd-antipatterns/1-begineers-mistakes/) to avoid mistakes.

Feature Files should be placed under `features` directory or sub-directories.

**/features/add_to_cart.feature**

```bash
@add_to_cart
Scenario: John can add shoes to shopping cart
    Given John searches for the "red pump" shoes from home page
    When he adds "2" shoes to the cart
    Then the cart has "2" pairs of "red pump" shoes
```

### Step 2: Implement Steps

Steps should be placed under `steps` directory or sub-directories. All the Steps files should be named `<name>.steps.js`.

**/steps/addToCart.steps.js**

```bash

const {I, shoppingHomePage, productPage, cartPage} = inject();

Given(/John searches for the {string} shoes from home page/, (searchFor) => {
    shoppingHomePage.search(searchFor);
});

When(/he adds {string} shoes to the cart/, (quantity) => {
    productPage.addToCart(quantity);
});

When(/the cart has {string} pairs of {string} shoes/, (quantity, productTitle) => {
    shoppingHomePage.goToCart();

    (await cartPage.grabProductTitle()).trim().should.equal(productTitle);
    (await cartPage.grabQuanity()).should.equal(quantity);
});
```

The above **steps.js** assumes, the Navigation is handled in the **hooks.steps.js** file, as described in the [example](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/codeceptjs-cucumber/acceptance/steps/hooks/hooks.js)

### Step 3: Implement Page Object

Page Objects should be placed under `pages` directory, and should follow the naming convention `<pagename>.page.js`.

**/pages/shopping_home.page.js**

```bash
const {I} = inject();

class AccountPage {
    constructor() {
        this.locators: {
            searchBox: '[data-automation="searchBar"]'
        }
    }

    search(searchFor) {
        I.fillField(I.grabCss(this.locators.searchBox), searchFor);
        I.pressKey('Enter');
    }
};

module.exports = new AccountPage();
```

### Step 4: Assertions

Codeceptjs-BDD supports [should.js](http://shouldjs.github.io/) library to veriy assertions.

```bash

 (await cartPage.grabQuanity()).should.equal(quantity);

```

Done 🥳. Follow the [Execution](/4-execution/1-run-locally/) instructions to execute your scenario.
