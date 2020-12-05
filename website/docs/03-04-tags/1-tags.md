---
title: Tags
sub_title: Filter Tags to run Scenarios
parents: ['Tags']
keywords: ['Tag', 'Execute', 'filter', 'scenarios']
---

## 🌀Tags

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

## 🌀 Running a subset of scenarios

Run subset of tags through command line parameter: `--grep <@tag>`.

Below command runs tests tagged with **@my_test_tag** on _default_ browser

```bash

    $ yarn acceptance --grep @my_test_tag

```

## 🌀 Exclude or Include certain types of Tags

Use regex for more flexible filtering:

- **\--grep** '(?=._@smoke2)(?=._@smoke3)' - run tests with @smoke2 and @smoke3 in name
- **\--grep** "\@smoke2|\@smoke3" - run tests with @smoke2 or @smoke3 in name
- **\--grep** '((?=._@smoke2)(?=._@smoke3))|@smoke4' - run tests with (@smoke2 and @smoke3) or @smoke4 in name
- **\--grep** '(?=._@smoke2)^(?!._@smoke3)' - run tests with @smoke2 but without @smoke3 in name
- **\--grep** '(?=._)^(?!._@smoke4)' - run all tests except @smoke4

More information is available on [codecept.io](https://codecept.io/bdd/#tags)
