---
title: Feature
sub_title: Write BDD Gherkin/Cucumber Feature Files
parents: ["BDD Cucumber"]
---

The purpose of the Feature is to provide a high-level description of a software feature, and to group related scenarios.

#### Recommendations

* The first line of this file starts with the keyword `Feature:` followed by a name. 

* It’s a good idea to use a name similar to the file name.

* The second line is a brief description of the feature. Codeceptjs-BDD does not execute this line because it’s documentation.

* It is always recommended to **Tag** a feature.

#### Example of Feature File

```bash

    Feature: Add to Cart

        As a ...
        I want to  ...
        So that ...

```

### Free Form Decription
---

You can add free-form text underneath Feature to add more description.

These description lines are ignored by Codeceptjs-BDD at runtime, but are available for reporting.


```bash

    Feature: Add to Cart

      As a ...
      I want to  ...
      So that ...

    Free Form Text: more explaination about feature

```

### Tag a Feature
---

Each feature can have a one or more Tags. Tags are very useful to group the features together or to filter and run a feature.

```bash

   @shopping_cart @cart
    Feature: Add to cart
    
    ...
```

Feature file will have related scenarios.

