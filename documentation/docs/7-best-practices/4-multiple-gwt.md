---
title: Mutilple GWT
sub_title: BDD Anti Patterns
parents: ["Best Practices"]
keywords: [ "Best Practices"]
---

### No clear separation between Given/When/Then

It happens that beginners have a hard time grasping the difference between Given, When and Then. The problem is that from a technical perspective, there is no difference, Cucumber will treat them all equal.

What is the difference then?

* Given is the context - the past
* When is an action that changes the system - the present
* Then is the expected outcome - the near future

A metaphor could be: Going to the theater

You are sitting in your chair and the curtain is drawn. Behind the curtain there is a lot of stage workers preparing. Putting things in place. This is the Given. This is where you do the setting up of your system, creating initial objects, prepare the database, navigating to a specific page and so on.

The curtain is drawn apart and the act starts. Things start to happen, one thing lead to another. Actors start doing things and they say their lines. This is the When. This is triggering the important event that we want to happen in a specific context.

One thing on stage leads to another thing, the expected outcome. What happened in the story as a result of what an actor did. This is the Then. The observable change that we want to assert.

The Given and When is hopefully easier to grasp with this metaphor. The Then is perhaps less clear.

* The past - the preparation is Given
* The present - the action is the When
* The near future - the expected outcome is the Then

## Multiple When
That is a When is followed by one or many And.

There are cases when it can be ok. Say that two different persons does two different things in a When step, then it can be ok. This is an example of similar events.

When there are two completely different events, then it may be a bad idea to have an implicit When, expressed as an And. It can be an indicator that you should split this scenario into two different scenarios. Chances are that you describe two different behaviors in the same scenario.

## Double edged sword

There are cases that may or may not be anti-patterns. They can be used in a bad way, but they also enable you to do really good things. They are like a double edged sword and depends on the context.

#### Scenario outline

Scenario outline is an example of something that easily can be overused and lead to slow tests. This is especially true if they contain a lot of UI details.

It is very easy to add a lot of scenarios when you use an outline. If the scenarios are slow, you will end up with a really slow test suit.

Using scenario outlines to verify complicated algorithms can be a valid use case. But probably not through the slow user interface.

An example can be to verify a complicated insurance algorithm where there are lots of data that will create different outcomes. In this case, it is important that you can reach the algorithm without going through the UI. This requires the system to be built so it is testable.

If the scenarios are fast, then it may be ok to use Scenario outlines. If they are slow, do not use scenario outlines.

## Multiple Then in the same scenario

This is not necessarily an anti-pattern. An example could be when something is returned in a retail system.

* The customer should be refunded
* The inventory should be updated
* The finance system should be updated
* A message should be send to a warehouse that the returned item needs to be picked up

These are all connected. Verifying them in one go could be a good idea. At the same time, these outcomes are the result of four different business rules. Splitting them into four different scenarios will make the business rule much more explicit and will probably help you understand the system better. Splitting these will also allow the development team to implement the rules incrementally; they don't have to be implemented at the same time. This only applies to independent outcomes.

There are examples when it not possible to split a scenario. Withdrawing money from a bank account is such an example.

The customer should get their money from an ATM machine, say £50
The customer account should be debited £50
These outcomes are depending on each other and can't be divided into different scenarios. The bank will not appreciate if the customers gets money without the account being debited. The other way around is probably also true, most customers will not be happy if their account is debited but they didn't get any cash.
