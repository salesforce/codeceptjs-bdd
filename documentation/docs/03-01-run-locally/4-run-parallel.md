---
title: Run in Parallel
sub_title: Execute scenarios Parallel on Multi Browsers on Sauce Labs Cloud Platform
parents: ['Run Locally']
keywords: ['Parallel', 'Execute', 'WebDriver', 'videos']
---

## 🌀 Run Scenarios in Parallel

Codeceptjs-BDD can run all your Feature files in Parallel. You can choose to run Parallel on either Sauce Labs or Locally installed browsers. Please note, Codeceptjs-BDD does not support running all Scenarios on Parallel but only Feature Files in parallel.

## 🎥 Watch in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/he0_wn-xPGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

## How to run all features in Parallel?

---

Codeceptjs-BDD implemets the scripts and commands to run all Feature files in Parallel. You can choose the **browser** to run by passing through **-\-profile** command.

```bash
    $ yarn acceptance:parallel
```

<br>

## 💻 Run in Parallel on Locally installed Browsers

---

Below command will run all Feature files in Parallel locally on Firefox Browser

```bash
    $ yarn acceptance:parallel --profile firefox
```

You can choose subset of scenarios to run in Parallel,

```bash
    $ yarn acceptance:parallel --profile firefox --grep @login
```

<br>

## ⚡️ Run in Parallel on Sauce Labs Cloud Platform

---

Below command will run all Feature files in Parallel on Sauce Labs' Chrome browser

```bash
    $ yarn acceptance:parallel --profile sauce:chrome
```
