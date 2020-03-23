# Salesforce's LWC E2E Automation Example

This repository automates the LWC Recipes page using Selenium WebDriver thru Codeceptjs-BDD framework. It uses **Cucumber BDD Feature** files to automate the LWC Features. You can also choose to automate with **Mocha styles** traditional tests. For more info, take a look at [Codeceptjs-BDD Docs](http://gkushang.github.io/).

### Pre-requisite
* Yarn 
* Node > 10

### Getting Started

```sh
git clone git@github.com:gkushang/codeceptjs-bdd.git
cd codeceptjs-bdd/packages/codeceptjs-lwc-example
yarn
```
### Run Acceptance Tests

```sh
yarn acceptance
```

### HTML Report

```sh
yarn acceptance:report
```

### Feature 

This example automates the `Hello Binding` component from the LWC Recipes Page.

```sh
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

### Locating LWC Element

The work is still in-progress for the changes to be accepted at CodeceptJS. Here is the proposal on how to select the element when it's chained with custom elements. 

In the page object, you can define your locators as a special `shadowDom` locator. 

```sh
    // input field on helloBinding component
    inputField: { shadowDom: { elements: [...parent,'ui-input', 'input.input' ]}}
```

### Page Objects

Since it inherits the elements from the host/parent, you can define your Page Objects as a Class and take benefits of inheritance in your page objects. This makes a lot of your code/locators Re-usable across the app.

```sh

class HelloBinding extends LightingComponent {

  constructor() {
    
    super();

    // common elements for shadow locators
    const parent =  [...this.host, 'recipe-hello-binding'];

    // locators uses "shadowDom", and elements are sequentially defined
    this.locators = {
      
      // input field on helloBinding component
      inputField: { shadowDom: { elements: [...parent, 'ui-input', 'input.input' ]}},
      
      // card title on helloBinding component
      cardTitle: { shadowDom: { elements: [...parent, 'div p'] }}

    }
  }

  enterName(name) {
    return I.fillField(this.locators.inputField, name);
  }

  async grabTitle() {
    return await I.grabTextFrom(this.locators.cardTitle);
  }
}

```



