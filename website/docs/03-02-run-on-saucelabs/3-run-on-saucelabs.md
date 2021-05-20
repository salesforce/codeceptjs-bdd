---
title: Sauce Labs
sub_title: Execute BDD Scenarios on Sauce Labs
parents: ['Run On Saucelabs']
keywords: ['Saucelabs', 'sauce', 'Execute', 'WebDriver', 'videos']
---

### ⚡️ Sauce Labs

Codeceptjs-BDD framework integrates the cloud based platform [Sauce Labs](https://saucelabs.com) to execute scenarios on **900+** Desktop/Mobile browses, OS & Devices combinations, providing Greater Scenarios Execution Coverage.

#### Prerequisites

Export these environment variables through your ZSH or BASH profile or define in your `config/codecept.dev.env` file.

```bash
    export SAUCE_USERNAME=<your_sauce_username>
    export SAUCE_KEY=<your_sauce_accesskey>
```

### 🏃 Run Scenarios on Sauce Labs

---

Codeceptjs-BDD implements the quick way to run your tests on Sauce Labs. Please note the `sauce:` in the below command, which does the magic running your tests on Sauce. Get your Sauce Labs Platform configurations from [here](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator), and pass it thru the CLI,

```bash
 $ yarn acceptance --profile sauce:'<OS>':<browser>:<version>

```

e.g. `$ yarn acceptance --profile sauce:'Windows 10':MicrosoftEdge:80`

To run with default CodeceptJS BDD configurations,

`$ yarn acceptance --profile sauce:chrome|firefox|safari|...`

#### Sauce Connect

To connect with active Sauce Tunnel, pass param `SAUCE_TUNNEL_NAME`,

`$ SAUCE_TUNNEL_NAME=<tunnel-name> yarn acceptance --profile sauce:'<OS>':<browser>:<version>`

### 🎥 Watch in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/ugCjMOJlClc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 📋 Sauce Labs Dashboard

---

Dashboard is the great way group your scenarios/regression suites on Sauce platform. The Sauce Dashboard is the first page you'll see when you log into the Sauce Labs web interface. Each link on Dashboard contains group of tests ran for the particular _build_.

**Codeceptjs-BDD will automatically create an Unique dashboard for every tests run.**

**Can I Customize my Dashboard Title?**
Yes, you can do that too by by providing `SAUCE_BUILD` environment variable. This is sometimes very helpful to view how many and what tests ran for which release build.

Below command will create unique dashboard on sauce with title **release-1.0-{random-unique-number}**

```bash
    SAUCE_BUILD=release-1.0 yarn acceptance --profile sauce:chrome
```
