---
title: Beginners mistakes
sub_title: BDD Anti Patterns
parents: ["Best Practices", "BDD Anti Patterns"]
---

There are some mistakes commonly done by beginners.

### Lots of user interface details

The system is used through its user interface. This sometimes leads to scenarios that talks about 

* going to a specific url ❌
* click a specific link ❌
* find an element using a specific css selector etc. ❌

It doesn't really tell us what the purpose of using the program is. It is hard to understand why the user want to do this journey.

Problems with this types of Scenarios are,

* Not Understanding the purpose of BDD. 
* Another bigger problem is that user interfaces changes a lot more frequently than the underlying domain logic.

UI trends change more often than the actual business. This will break your tests even if the business haven't changed. UI tests are very slow and brittle. It takes a long time to fire up a UI testing tool.

Testing through the UI will make you stuck at the top of the testing pyramid. All of your testing will be done through the user interface. This is a bad and painful place to be since it is slow and brittle.

Scenarios littered with UI details will make it impossible to test anything below the user interface.

Too many user interface details is also very poor documentation. It is hard to understand the business rule by understanding how the navigation through a system works. The navigation through a program doesn't tell us why we are using the program.

The problem you solve by using this program is not described using words from the domain, it is described using the generic terms of user interfaces. Not the domain of your business. You miss the nouns and verbs that describe your business problem that you would like to use deeper down in your code.

This anti-pattern usually comes from the fact that you wrote the scenarios after you actually implemented the solution.

#### ❌ Boring Scenario, ultra imperative, not recommended 

```bash
Scenario: John logs into application, buys shoes, verify shoes

    Given John logs in to application with "john@email.com"
    And he says "yes" to accept consent
    When he navigates to "search" page
    And he searches for the "black men" shoes
    Then he selects size "M"
    And he clicks continue
    Then he waits for "1" second
    Then he clicks cart icon
    And he changes quantity to "2"
    And he clicks continue shopping button
    When he is on order confirmation page
    Then he sees the shoes he selected
    And ...

```
The Ultra Imperative Scenario is not recommended because they are, 

* **Wall** of the text
* Difficult to follow **WHAT** Features is about
* Describes **HOW**, which should the objective of BDD
* **Repeated** Given-When-Then (GWT)
* Low level **interactions**
* **Hard** to Maintain

#### ❌ Ultra Declarative, not recommended 

```bash
Scenario: John buys shoes

    Given John wants shoes
    When he buys shoes
    Then he get them

```

The Ultra Declartive scenarios are not recommended either because,
* **Given:** Not Procedural. No interactions? No Actions?
* **When:** Too Vague. Which color? Quantity?
* **Then:** Not Verifiable. What am I asserting?

### ✅ Just be Declarative

```bash
@add_to_cart
Scenario: John can add shoes to shopping cart
    Given John searches for the "red pump" shoes from home page
    When he adds "2" shoes to the cart
    Then the cart has "2" pairs of "red pump" shoes
```

* Be **declarative ✔️**
* Use **Examples ✔️**
* No more than **Single-digits steps ✔️**
* Follow the **Strict Order: GWT ✔️**
* **Avoid** How: Clicks, Types etc **✔️**
* No more than **one Given When Then ✔️**
* Steps are **Data Driven, Automated ✔️**

### Describing actions using the ACTOR
---

Most systems have behavior that is used by multiple users or actors. This means that you want to talk a bout a specific user, a persona, if you can. 

**A persona will give you context about what the system should be able to do to support a specific category of users.**

**John** is an ACTOR in above examples, which gives clear context that John is a Shopper.


### Keeping all scenarios forever
---

Not all scenarios will bring value forever. You may delete scenarios after a while if you are certain that this case is covered in other test. But before you delete them, make sure that the behavior is covered somewhere else so you don't loose it.

Instead of deleting scenarios, you can rewrite them to document something more interesting. There are perhaps edge cases that can be covered with a rephrased scenario.

Keeping scenarios because they where written once is not a a good argument. Don't do that.
