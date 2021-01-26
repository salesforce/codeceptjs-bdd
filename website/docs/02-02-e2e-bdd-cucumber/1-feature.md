---
title: Feature
sub_title: Write BDD Gherkin/Cucumber Feature Files
parents: ['E2E BDD Tests']
keywords: ['Feature files', 'Feature', 'cucumber', 'bdd', 'gherkin']
---

The purpose of the Feature is to provide a high-level description of a software feature, and to group related scenarios.

#### Recommendations

- The first line of this file starts with the keyword `Feature:` followed by a name.

- It’s a good idea to use a name similar to the file name.

- The second line is a brief description of the feature. Codeceptjs-BDD does not execute this line because it’s documentation.

- It is always recommended to **Tag** a feature.

#### Example of Feature File

```javascript

    Feature: Add to Cart

        As a ...
        I want to  ...
        So that ...

```

### Free Form Description

---

You can add free-form text underneath Feature to add more description.

These description lines are ignored by Codeceptjs-BDD at runtime, but are available for reporting.

```bash

    Feature: Add to Cart

      As a ...
      I want to  ...
      So that ...

    Free Form Text: more explanation about feature

```

### Tag a Feature

---

Each feature can have one or more Tags. Tags are very useful to group the features together or to filter and run a feature.

```javascript

   @shopping_cart @cart
    Feature: Add to cart

    ...
```

Feature file will have related scenarios.
