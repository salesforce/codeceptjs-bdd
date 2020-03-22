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
