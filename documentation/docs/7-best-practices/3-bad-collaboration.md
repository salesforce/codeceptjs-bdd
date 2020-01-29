---
title: Bad Collaboration
sub_title: BDD Anti Patterns
parents: ["Best Practices"]
---

This a transcript and interpretation of a podcast where Aslak Hellesøy, Matt Wynne, and Steve Tooke from Cucumber Ltd have a chat about the BDD tool Cucumber and anti-patterns they have come across.

Cucumber is designed to be a collaboration tool that creates a living documentation, that is possible to automate, of the behaviour you want in a system. You describe the wanted behaviour using a language called Gherkin. If you are unfamiliar with Gherkin, it is probably a good idea to read up on it before you continue. The rest of the text assumes that you are familiar with Gherkin and that the format Given/When/Then isn't strange to you.

## Bad collaboration

Cucumber is a collaboration tool and should be used for collaborating when driving the implementation of software.

#### When do you write feature files
One anti-pattern is that you write the feature files after you have written the code. This could arguable be the worst anti-pattern when using Gherkin. It is very common when you start using Cucumber and BDD.

What you really want is to write the Gherkin before you write the software. This will allow you to actually use the scenarios to drive the development and not the other way around, to document what you developed.

Why should you write the Gherkin before you write the software? Documenting the wanted behaviour is a way to make sure that everyone agrees on what the software is supposed to do. When you have reached that agreement, you have a common understanding of the problem, then it is a good time to start the implementation and write the code needed. Writing code before you have come to a common understanding is one way to make sure you implement something that you will have to change later.

Cucumber is a testing tool that allows you to test your assumptions and understanding of the problem before you actually write the code to solve the problem. It will make it clear if the people involved agree on the wanted behavior or if there is ambiguity that hasn't been discovered yet. Concrete examples before the implementation will make it clear that everyone has the same understanding.

A product owner or business analyst, a dev, and a tester will all have different perspectives on the problem. Understanding these different perspectives before writing the code increases the chance of creating something that actually is what the end user needs.

#### Business people create scenarios in isolation
One person, maybe the product owner or business analyst, writes the scenarios alone. The result will be Gherkin that doesn't represent everybody's understanding. The scenarios written by the product owner or business analyst alone tend to be un-testable.

To be able to automate the scenarios, they will have to be changed. This leads to Gherkin that isn't the Gherkin the product owner or business analyst originally wrote and therefore it doesn't represent what they wanted. They will loose interest and the Gherkin will be something devs or testers use instead.

The common understanding is lost.

There is also a chance that when the devs start to reformulate the Gherkin, they misunderstand what the product owner or business analyst actually meant and ends up with something that is incorrect.

### Devs or testers writing scenarios without talking to business people
This is similar to the case where product owner or business analyst writes the scenarios alone. But in this case the examples tend to be unrealistic. Sometimes really dry. The examples are not talking about real users, personas, but instead talking about user1 and user2.

In this case the developers missed out on an opportunity to have realistic users, realistic data and ended up with something really boring and dry.

#### Too high level
If a scenario is on a too high level, you can't really trust it. You can probably not tell what it actually will do because it is too high level and vague.

An example could be

```bash
Given a bank account
When I withdraw some money
Then the balance should be the original balance minus the amount withdrawn
```

This is an example that expresses a business rule. It doesn't contain any concrete example. We don't know the original balance; we don't know how much that was withdrawn so we can't know the outcome. It is not concrete.

Another example is

```bash
Given the system is turned on
When it is used
Then it should work perfectly
```

This leaves a lot of freedom to the implementer. It also trusts that the implementer has understood the requirement perfectly and will not make any mistake. It is totally useless as an example that drives the development.

This is a trap that it is easier to fall into if the the product owner or business analyst writes the scenarios alone. With more people writing scenarios, more perspectives are taken into account. Vague examples can be made concrete, unclear examples can be questioned, and unclear rules can be found.

Finding the right balance between too vague and too many details is hard. This is something experience will teach you. Getting it perfect from the beginning is not something to expect from a team. It is hard even with lots of experience.

