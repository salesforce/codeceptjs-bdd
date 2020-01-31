---
title: Run on Sauce Labs
sub_title: Execute BDD Scenarios on Sauce Labs
parents: ["Execution"]
keywords: [ "Saucelabs", "sauce", "Execute", "WebDriver", "videos"]
---

## ⚡️  Sauce Labs

Codeceptjs-BDD framework integrates the cloud based platform [Sauce Labs](https://saucelabs.com) to execute scenarios on **900+** Desktop/Mobile browses, OS & Devices combinations, providing Greater Scenarios Execution Coverage.

### ** Prerequsite

1. In order to run on Sauce Labs, you should have an account with Sauce Labs. 

2. During Codeceptjs-BDD setup through CLI, you should have provided your Sauce Username and Sauce Access Key in order to start running your tests on Sauce Labs. 
3. You must export **SAUCE\_USERNAME** and **SAUCE\_KEY** environmental variables as shown below,

**Recommendation:** Export these enviornment variable through your ZSH or BASH profile.

```bash
   export SAUCE_USERNAME=<your_sauce_username>
    export SAUCE_KEY=<your_sauce_accesskey>
```    

Once you provide your Sauce username and accesskey during [quick setup](/1-getting-started/setup-framework/), Codeceptjs-BDD will do the rest of the job for you, and integrates all required libraries, plugins and helpers to get started.

## 🎥 Watch in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/ugCjMOJlClc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 🏃 Run Scenarios on Sauce Labs
----

Codeceptjs-BDD implements the quick way to run your tests on Sauce Labs. Please note the `sauce:` in the below command, which does the magic running your tests on Sauce.

`--profile sauce:<browser>`

<br>

### ✔️ Run all scenarios

Below command runs all scenarios on Sauce Labs' _chrome_ browser

```bash
    yarn acceptance --profile sauce:chrome
```

<br>

### ✔️ Run subset of scenarios

Below command runs all scenarios marked with tag _@my\_tag_ on Sauce Labs' _firefox_ browser

```bash
    yarn acceptance --profile sauce:firefox --grep @my_tag
```
<br>

## 📋 Sauce Labs Dashboard
----

Dashboard is the great way group your scenarios/regression suites on Sauce platform. The Sauce Dashboard is the first page you'll see when you log into the Sauce Labs web interface. Each link on Dashboard contains group of tests ran for the particular _build_.

**Codeceptjs-BDD will automatically create an Unique dashboard for every tests run.**

**Can I Customize my Dashboard Title?**
Yes, you can do that too by by providing `SAUCE_BUILD` environment variable. This is sometimes very helpful to view how many and what tests ran for which release build.

Below command will create unique dashboard on sauce with title **release-1.0-{random-unique-number}**

```bash
    SAUCE_BUILD=release-1.0 yarn acceptance --profile sauce:chrome
```
<br>

## ➕ Supported Sauce Labs Browsers/OS Combinations
----

The supported browsers/OS is listed [here](https://github.com/gkushang/codeceptjs-bdd/blob/master/packages/codeceptjs-saucelabs/lib/browsers.conf.js). 

**Can I run on my own Customized browser/os?** 
Yes, you can override any existing configruation or provide new Browser configuration through your `codecept.conf.js` file. 

Follow the below steps,
1. Go to your codecept.conf.js
2. Go to last line of the config and look for 

```bash
    codeceptjs_saucelabs(SAUCE_USERNAME, SAUCE_KEY)
```
3. Pass your customized Browser/OS combination JSON as a **third** argument in above function. 

Below call will add `opera` browser to your Sauce configuration at runtime.

```bash
codeceptjs_saucelabs(SAUCE_USERNAME, SAUCE_KEY, {opera: {
        browser: 'opera',
        capabilities: {
            'sauce:options': {
                seleniumVersion: '3.11.0'
            }
        }
    }
})
```
