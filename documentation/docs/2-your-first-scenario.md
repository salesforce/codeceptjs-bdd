---
title: Automate Your First Scenario
sub_title: 4 steps to automate
keywords: ['Videos', 'Watch in action', 'Automate', 'how']
---

It very simple to start automating your first Codeceptjs-BDD Scenario. You can follow the Sample examples defined in the [create-codeceptjs-bdd-tests](https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/create-codeceptjs-bdd-tests/acceptance) framework.

###🚀 Quick Start

Create Codeceptjs-BDD Test for your Application Under Test. This is one time step,

```javascript
$ npx create-codecpetjs-bdd-tests
```

###🧩 4 Steps to Automate your App

1. Write a **Feature**
2. Implement **Steps**
3. Implement **Page Object**
4. And **Assert** your application

Let's automate the **Add to Cart** scenario for the Shopping App.

### Step 1: Writing Feature File

First, start writing Feature Files. Please checkout the [Beginners Mistakes](/09-best-practices/1-begineers-mistakes//) to avoid mistakes.

Feature Files should be placed under `features` directory or sub-directories.

```javascript
// features/add_to_cart.feature

@add_to_cart
Scenario: John can add shoes to shopping cart

    Given John searches for the "red pump" shoes from home page
    When he adds "2" shoes to the cart
    Then the cart has "2" pairs of "red pump" shoes


```

### Step 2: Implement Steps

Steps should be placed under `steps` directory or sub-directories. All the Steps files should be named `<name>.steps.js`.

```javascript
// steps/add_to_cart.steps.js

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

The above **steps.js** assumes, the Navigation is handled in the **hooks.steps.js** file, as described in the [example](https://github.com/gkushang/codeceptjs-bdd/blob/develop/packages/create-codeceptjs-bdd-tests/acceptance/steps/hooks/hooks.js)

### Step 3: Implement Page Object

Page Objects should be placed under `pages` directory, and should follow the naming convention `<pagename>.page.js`.

```javascript
// pages/shopping-home.page.js

const {I} = inject();

class ShoppingHomePage {
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

module.exports = new ShoppingHomePage();


```

### Step 4: Assert your application

Codeceptjs-BDD supports [should.js](http://shouldjs.github.io/) library to veriy assertions.

```javascript
(await cartPage.grabQuanity()).should.equal(quantity);
```

💯 Done. Follow the [Setup your Test Environment Variables](/04-configurations/1-env-variables/) & [Execution](/06-execution/1-run-locally/) instructions to execute your first scenario.
