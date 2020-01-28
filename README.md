# CodeceptJS BDD

***[CodeceptJS](https://codecept.io/) BDD Framework with Cucumber and Saucelabs cloud***

[![Build Status](https://travis-ci.org/gkushang/codeceptjs-bdd.svg?branch=develop)](https://travis-ci.org/gkushang/codeceptjs-bdd) [![Maintainability](https://api.codeclimate.com/v1/badges/348efbea54ac5670b73f/maintainability)](https://codeclimate.com/github/gkushang/codeceptjs-bdd/maintainability) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![License](https://img.shields.io/npm/l/codeceptjs-cucumber.svg)](LICENSE)

> This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel

# 📖 Complete Guide / User Documentations: 

[Codecpetjs-BDD/Docs](http://gkushang.github.io/)

<img src="https://i.postimg.cc/76tkPM4r/Codecept-Logo-001.jpg" alt="Smiley face" height="42" width="42">

## 🧐 What's inside?

* **Why BDD?** Read my Medium post [here](https://medium.com/hackernoon/bdd-in-3-minutes-c3f8fc022237)

* Run All feature files in **Parallel**

* Run All feature files on **Multi-Browsers - run them all in Parallel**

* Scenarios are written in **Cucumber Gherkin BDD Syntax**, a.k.a `.feature` files. [Prefer writing Declartive Test Scenarios](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios)

* Run on **SauceLabs**. Single browser or Multi-Browsers in Parallel

* Uses [Should.js](https://shouldjs.github.io/) Assertions Library. Various assertions with examples are available [here](https://github.com/gkushang/codeceptjs-bdd/blob/master/packages/codeceptjs-cucumber/acceptance/step_definitions/search/github.steps.js)

* Reduces Flakiness with **RetryFailedSteps** plugin and a Webdriver's **SmartWait**

* Page objects follow `<name_of_page>.page.js` naming pattern, and created under [pages](https://github.com/gkushang/codeceptjs-bdd/tree/master/packages/codeceptjs-cucumber/acceptance/pages/) directory

* Step Definitions files follows `<name_of_step>.steps.js` naming pattern, and created under [step_definitions](https://github.com/gkushang/codeceptjs-bdd/tree/master/packages/codeceptjs-cucumber/acceptance/step_definitions) directory

* **Soft Assertions:** Collect more errors in a single run rather than failing test at first failure!


## 🎥 How to Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4i-APck4KuhawdeMqhREtuVf_14CBihm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

