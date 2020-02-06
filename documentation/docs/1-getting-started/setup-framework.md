---
title: Setup Framework
sub_title: Setup Codeceptjs-BDD Framework for your app
parents: ["Getting Started"]
keywords: ["setup", "framework", "quick start", "videos"]
---

## 🔳 Interactive CLI

This framework provides an Interactive CLI to quickly setup the framework for your App. 

The CLI,
1. Creates a Codeceptjs BDD Framework for your App
2. Automatically updates your `package.json` with all required dependencies.
3. Installs all dependencies as part of setup process
4. Adds Master Configuration
5. Configures Sauce Labs (optional)
6. Runs existing Sample BDD Feature Files to test your setup

This Framework comes with the Sample BDD Feature files with examples. Please follow through the [Examples](https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/codeceptjs-cucumber/acceptance/features) to create your own Feature Files & Scenarios.


### 🎥 Watch Quick Setup in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/OGrn1ejyb-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 🚀 Quick Setup

Below steps assumes you have already installed all the required dependencies from _Getting Started > Installation_

```bash

   git clone https://github.com/gkushang/codeceptjs-bdd.git
    cd codeceptjs-bdd/packages/codeceptjs-cucumber
    yarn
    npm run cli

```

💯Follow the instructions on CLI. Once done, you're ready to start writing automated Feature files for your app 🎉
