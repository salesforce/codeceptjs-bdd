---
title: Given When Then
sub_title: BDD Cucumber Keywords - "GWT"
parents: ['Acceptance Tests', 'E2E BDD Tests']
keywords: ['Given', 'When', 'Then', 'cucumber', 'bdd', 'gherkin', 'gwt']
---

## Given

Given steps are used to describe the initial context of the system - the scene of the scenario. It is typically something that happened in the past.

When Cucumber executes a Given step, it will configure the system to be in a well-defined state, such as creating and configuring objects or adding data to a test database.

The purpose of Given steps is to put the system in a known state before the user (or external system) starts interacting with the system (in the When steps). Avoid talking about user interaction in Given’s. If you were creating use cases, Given’s would be your preconditions.

It’s okay to have several Given steps (use And or But for number 2 and upwards to make it more readable).

#### Examples

```bash

    Given Mickey and Minnie have started a game
    Given I am logged in
    Given Fred has a balance of $42

```

## When

When steps are used to describe an event, or an action. This can be a person interacting with the system, or it can be an event triggered by another system.

It’s strongly recommended you only have a single When step per Scenario. If you feel compelled to add more, it’s usually a sign that you should split the scenario up into multiple scenarios.

#### Examples

```bash
    When he guess a word
    When he searches for the product
    When she withdraws $30
```

Implementation details should be hidden in the step definitions.

## Then

Then steps are used to describe an expected outcome, or result.

The step definition of a Then step should use an assertion to compare the actual outcome (what the system actually does) to the expected outcome (what the step says the system is supposed to do).

An outcome should be on an observable output. That is, something that comes out of the system (report, user interface, message), and not a behaviour deeply buried inside the system (like a record in a database).

#### Examples

```bash

    Then he sees that the guessed word was wrong
    Then he verifis the products in the cart
    Then she sees remaning balance as $12

```

You should only verify an outcome that is observable for the user (or external system), and changes to a database are usually not.

## And, But

If you have successive Given’s, When’s, or Then’s, you could write:

**NOT RECOMMENDED TO HAVE MULTILE GWT's**

```bash

Example: Multiple Givens

  Given one thing
  Given another thing
  Given yet another thing
  When I open my eyes
  Then I should see something
  Then I shouldn't see something else

```

Or, you could make the example more fluidly structured by replacing the successive Given’s, When’s, or Then’s with And’s and But’s:

```bash
Example: Multiple Givens
  Given one thing
  And another thing
  And yet another thing
  When I open my eyes
  Then I should see something
  But I shouldn't see something else
```
