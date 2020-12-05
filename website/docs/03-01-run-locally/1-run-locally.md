---
title: Run Locally
sub_title: Execute Features on Local Development Environment
parents: ['Run Locally']
keywords: ['Local', 'Execute', 'WebDriver', 'videos']
---

## 💻 Run on your local environment

CodeceptjsBDD provides below commands to run your tests locally. You can also choose to run subset of scenarios locally. This is very useful to build automation for a feature in development.

```bash
    $ yarn acceptance {--profile=<browser>} {--grep=<test-tag>}
```

## 🎥 Watch in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/udp_ZYT4imM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 🏃 Run All Tests

---

Below command runs full regression on Default Browser.

Default Browser: `Chrome`

```bash

    $ yarn acceptance

```

<br>

### 🎠 Run on Different Browser

Browser selection is conrolled by `--profile <browser>` command line parameter

Below command runs full regression on **Firefox** Browser.

```bash

    $ yarn acceptance --profile firefox

```

<br>

### 🌀 To run Individual Tags

Run individual tags by `--grep <@tag>` command line parameter

Below command runs tests tagged with **@my_test_tag** on _default_ browser

```bash

    $ yarn acceptance --grep @my_test_tag

```

More information on tags is available [here](https://somelin.com)
