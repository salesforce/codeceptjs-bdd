---
title: Scenario Outline
sub_title: Add more examples as Data Sets Iterations to your Scenario
parents: ['BDD Cucumber']
keywords:
  ['Scenario Outline', 'Datatable', 'data driven', 'cucumber', 'bdd', 'gherkin']
---

The Scenario Outline keyword can be used to run the same Scenario multiple times with different combinations of values.

The keyword Scenario Template is a synonym of the keyword Scenario Outline.

Copying and pasting scenarios to use different values quickly becomes tedious and repetitive:

```bash
Scenario: eat 5 out of 12
  Given there are 12 cucumbers
  When I eat 5 cucumbers
  Then I should have 7 cucumbers

Scenario: eat 5 out of 20
  Given there are 20 cucumbers
  When I eat 5 cucumbers
  Then I should have 15 cucumbers

```

**We can collapse these two similar scenarios into a Scenario Outline.**

Scenario outlines allow us to more concisely express these scenarios through the use of a template with < >-delimited parameters:

```bash
Scenario Outline: eating
  Given there are <start> cucumbers
  When I eat <eat> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | eat | left |
    |    12 |   5 |    7 |
    |    20 |   5 |   15 |
```

A Scenario Outline must contain an Examples (or Scenarios) section. Its steps are interpreted as a template which is never directly run. Instead, the Scenario Outline is run once for each row in the Examples section beneath it (not counting the first header row).

The steps can use <> delimited parameters that reference headers in the examples table. Cucumber will replace these parameters with values from the table before it tries to match the step against a step definition.

You can also use parameters in multiline step arguments.
