---
title: Architecture
sub_title: Framework Architecture
parents: ["Architecture"]
---

[![codeceptbdd-arch.png](https://i.postimg.cc/MT7nj4kg/codeceptbdd-arch.png)](https://postimg.cc/k65J0Tgy)

## Features

All feature files should be placed under **features** directory.

## Steps

All Given, When and Then steps should be placed under **steps** directory, and should be named  **\*.steps.js**.

## REST API

If your app supports REST API's then follow [here](https://codecept.io/helpers/REST/#rest) to impemement Rest API's.

## Page Objects

All of your Page Objects should be placed under **pages** directory, and should be named **\*.page.js**.

## Helpers

Any helpers or resources should be placed under **helpers** directory, and should be named **\*.helper.js**..

## HTML Report

Codeceptjs-BDD creates Allure HTML Report under **report** directory. It automatically captures all the **failed** steps.