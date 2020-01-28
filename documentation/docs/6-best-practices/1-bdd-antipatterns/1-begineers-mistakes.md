---
title: Beginners mistakes
sub_title: BDD Anti Patterns
parents: ["Best Practices", "BDD Anti Patterns"]
---

There are some mistakes commonly done by beginners.

Lots of user interface details
The system is used through its user interface. This sometimes leads to scenarios that talks about going to a specific url, click a specific link, find an element using a specific css selector etc. It doesn't really tell us what the purpose of using the program is. It is hard to understand why the user want to do this journey.

One problem with this is understanding the purpose. Another problem is that user interfaces changes a lot more frequently than the underlying domain logic.

UI trends change more often than the actual business. This will break your tests even if the business haven't changed. UI tests are very slow and brittle. It takes a long time to fire up a UI testing tool.

Testing through the UI will make you stuck at the top of the testing pyramid. All of your testing will be done through the user interface. This is a bad and painful place to be since it is slow and brittle.

Scenarios littered with UI details will make it impossible to test anything below the user interface.

Too many user interface details is also very poor documentation. It is hard to understand the business rule by understanding how the navigation through a system works. The navigation through a program doesn't tell us why we are using the program.

The problem you solve by using this program is not described using words from the domain, it is described using the generic terms of user interfaces. Not the domain of your business. You miss the nouns and verbs that describe your business problem that you would like to use deeper down in your code.

This anti-pattern usually comes from the fact that you wrote the scenarios after you actually implemented the solution.

### Describing actions using the personal pronoun I

Most systems have behavior that is used by multiple users or actors. This means that you want to talk a bout a specific user, a persona, if you can. A persona will give you context about what the system should be able to do to support a specific category of users.

If a system supports a university, there is probably a difference between a 21 year old student and a 53 year old administrator. The role, student or administrator, gives you different contexts. The age may or may not give you valuable information.

### Documenting boring scenarios
Some scenarios are very boring and perhaps just needed in the beginning of a project. An example is:

```bash
Given my bank account is empty
When I check my bank balance
Then it should be 0
```

You probably need certain scenarios in the beginning of the project or when you start developing a certain feature. Some of them will, however, be obvious after a while and covered by other tests.

### Keeping all scenarios forever
Not all scenarios will bring value forever. You may delete scenarios after a while if you are certain that this case is covered in other test. But before you delete them, make sure that the behavior is covered somewhere else so you don't loose it.

Instead of deleting scenarios, you can rewrite them to document something more interesting. There are perhaps edge cases that can be covered with a rephrased scenario.

Keeping scenarios because they where written once is not a a good argument. Don't do that.
