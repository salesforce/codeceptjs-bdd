---
title: Tags
sub_title: Group features and scenarios with Tags
parents: ['Acceptance Tests', 'E2E BDD Tests']
keywords: ['Tag', 'Tags', 'cucumber', 'bdd', 'gherkin', 'gwt']
---

Tags are a great way to organize your features and scenarios. Cucumber features and scenarios can contain Tags marked with `@`. Tags can be used to run Subset of Scenarios.

```javascript
   @checkout
    Feature: Checkout Cart

        @checkout_as_guest
        Scenario: Fred check out the item as a guest user
            Given hello

        Scenario: More other checkouts
            Given hello
```

A feature or scenario can have as many tags as you like. Separate them with spaces:

```javascript
   @checkout @checkout_guest @checkout_registered
    Feature: Checkout Cart
```

Tags can be placed above the following Gherkin elements:

- Feature
- Scenario
- Scenario Outline
- Examples

#### Development Process

Another creative way to use tags is to keep track of where in the development process a certain feature is:

```javascript

@qa_ready
Feature: Index projects

```
