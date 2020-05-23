---
title: Scenario
sub_title: BDD Gherkin/Cucumber Scenario
parents: ['Acceptance Tests', 'E2E BDD Tests']
keywords: ['Scenario', 'Scenarios', 'cucumber', 'bdd', 'gherkin']
---

Scenarios are defined in `.feature` files, which are stored in the features directory (or a subdirectory).

**Scenario: Shopper is able to add shoes to cart** is a scenario, which is a concrete example illustrating how the software should behave.

Each step in th Scenario starts with **Given**, **When**, **Then**, **And** and **But** (GWT). This is what Codeceptjs-BDD will execute.

```bash

    Scenario: scenario description

        Given <a pre-requisite>
        When <some action happens>
        Then <verify outcomes>
```

#### Example of Scenario

```bash

    Scenario: Shopper is able to add shoes to cart

        Given John searches for the "Shoes" to buy
        When he adds "2" shoes to the cart
        Then his cart contains "2" shoes to checkout

```

### How Codeceptjs-BDD executes GWT Steps

Codeceptjs-BDD executes each step in a scenario one at a time, in the sequence you’ve written them in. When Codeceptjs-BDD tries to execute a step, it looks for a matching step definition to execute, which are Java Script functions.

Keywords are not taken into account when looking for a step definition. This means you cannot have a Given, When, Then, And or But step with the same text as another step.

### Tag a Scenario

---

It is always recommended to `Tag` a Scenario.

Each scenario can have a one or more Tags. Tags are very useful to group the features together or to filter and run a feature.

```bash

   @add_to_cart
    Scenario: Shopper is able to add shoes to cart

        Given ...
        When ...
        Then ...

```
