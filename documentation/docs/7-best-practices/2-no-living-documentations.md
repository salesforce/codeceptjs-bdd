---
title: No Living Documentations
sub_title: BDD Anti Patterns
parents: ["Best Practices"]
keywords: [ "Best Practices"]
---

Cucumber is a documentation tool and can be used to create a good, living, documentation about a system.

#### When you read Gherkin and it is bad documentation
The litmus test could be: Take a scenario, show it to someone who isn't familiar with the domain and ask that person if they can describe the functionality the scenario represents. If that person can't describe what the system is supposed to do, then you have a case of bad documentation.

An example can be a long scenario, ten or more steps, and lots of incidental details that don't describe an example of a business rule but rather a journey through the application. How it should be used rather than the behavior are we trying to verify.

#### Incidental details
Someone tried to tell a good story but instead overload the reader with too much information. The incidental details are often there because the author has written a test rather than a documentation of the desired behavior.

An example could be

```bash
When I sign up as Matt, my password is password, my password confirmation is password, and I check my bank balance
Then I find $100
```

The purpose with the scenario is to check the bank balance. In this case, it isn't relevant what your password is or how you login. It is there because the author needed the values when automating a test.

The problem with these incidental details is that they obscure the essence of the scenario. It is hard to understand what we really try to test. In this case, the reader would have to guess. Are we testing the password functionality or are we testing the bank bank balance? Or are we testing both in one scenario? All the details about passwords and bank balance makes it unclear what the purpose of the scenario is.

### Hard to tell what you are testing
Are you testing one rule or are you testing several rules in the same scenario?

There are two problems here:

* Testing multiple things at the same time
* Not creating a clear documentation for checking if this is the desired behaviour

You may be forced to read between the lines to find out what the actual essence of the scenario is. If you are unlucky, the scenario might not have an essence. It is unfocused and aims at everything at the same time.

#### Bad name on a scenario
A good name on a scenario tell the reader what this is about. No name leaves the reader guessing.

A name that tries to summarize the entire behaviour of the scenario. Such as
Scenario: Sign up, login, go to balance screen, check balance, logout
is boring and you will loose the interest of the reader.

A good place to sum up the essence of a scenario is in its name. A name could be
Scenario: Check balance

The name indicates that any details about something else are incidental. Any details about a password are incidental and should be removed. If a password is needed for the automation, it can be added in the automation layer.

A good naming algorithm could be to use the Friends metaphor. This is the one where ...

Here are a few examples:

* This is the one where the balance is positive
* This is the one where I have an overdraft on my account
* This is the one where I change my password

The behavior is then described in the Given/When/Then of the scenario

### Not using the narrative section of a feature

The first part in a feature file is called the narrative section. You can write whatever you want here. You can leave it blank or add useful things.

Leaving the narrative section blank or adding a user story like the one below are two ways if applying an anti-pattern.

```bash
As a user,
I want to check my balance,
so I know what my balance is
```

This user story doesn't give you any extra information and is therefore pretty useless. Someone just filled out a template without really reflecting over why someone else want this behavior.

Instead, put useful information for the reader in the beginning of the feature. Describe the business rules; the abstract rules that we will describe examples for.

An example of a rule could be:
After you have done a withdrawal, that withdrawal should show up in your list of transactions.

The format you describe the business rule in is not that important. Describe them using a bullet list if that's better. The examples that follows will make them concrete.

The narrative section is the place to put questions or uncertainties in as well.

Think of the feature file as living documentation where you put the rules discovered and unanswered questions, known unknowns. This is our current understanding of this feature. There is stuff we know and there is stuff we don't know yet.
