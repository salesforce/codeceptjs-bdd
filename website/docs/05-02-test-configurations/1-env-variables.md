---
title: Test Environment Variables
sub_title: How Codeceptjs-BDD maintains your Test Environment Variables
parents: ['Test Configurations']
keywords: ['config', 'test properties', 'env vars', 'env', 'vars']
---

Test Envioronmental Variables are a fundamental part of developing Automated tests, allowing your tests to behave differently based on the environment you want them to run in. Wherever your tests needs configuration, you use environment variables. And they’re so simple, they’re beautiful!

This post walks you through creating and using environment variables, aka Test Properties.

### ⚙️ Types of ENV files

1. `codecept.env`
   - Common configuration defaults across all environments
2. `codecept.dev.env`
   - Personalized ENV Configurations for local development

The format is a series of key-value pairs. Any line starting with # or ; are commented out and ignored.

```bash

HOST=https://localhost
 END_POINT=/

```

## codecept.env

This file contains all your default environment variables, such as common Environment Variables across all your test environments.

It contains overall app configuration values that would be common across environments. The **codecept.env** file is loaded first and then the **codecept.dev.env** file is loaded and will overwrite any values from the **codecept.env** file.

**Example:**

```bash

# // config/codecept.env

#############################################################################################
#                                                                                           #
#           DEFINE THE DEFAULTS ENV VARIABLE, COMMON TO EVERY ENVIRONMENT                   #
#                                                                                           #
#############################################################################################


# CODECEPT ENV
NODE_TLS_REJECT_UNAUTHORIZED=0
CODECEPT_RELATIVE_PATH=./acceptance/

# DRIVER ENV
DRIVER=webdriver
DEFAULT_WEBDRIVER_BROWSER=chrome
DEFAULT_PLAYWRIGHT_BROWSER=chromium

# APP ENV
HOST=github.com # edit your default host. Preffered is localhost where your App is running
END_POINT=/

```

## codecept.dev.env

Your Local Development Environmental Variables. Personalize your Execution Environment.

This file contains all the Secrets and Password for your App. You must not commit this file to the Source Control because it contains sensitive information such as usernames, passwords, api keys, etc. The format is a series of key-value pairs. Any line starting with # or ; are commented out and ignored.

Because you do not commit this file to the source control, how do your teammates know what are the keys and how to define them?

####🧩Sharing With Your Team

**codecept.dev.env.example**

When your `codecept.dev.env` file is not pushed to source control (which it shouldn’t be), it is important to make it clear to everyone what the shape of that file should look like. The technique we recommend is to create a file named `codecept.dev.env.example` that contains the variables, but with fake values. This file might look something like the following template.

**Example:**

```bash

#############################################################################################
#                                                                                           #
#   THIS IS THE EXAMPLE ENV FILE, EDIT THE VALUES AND SAVE AS `codecept.dev.env` file   #
#                                                                                           #
#############################################################################################

# // config/codecept.dev.env.example

# SAUCE LABS SECRETS
SAUCE_USERNAME=<enter-your-saucelabs-username>
SAUCE_ACCESS_KEY=<enter-your-saucelabs-accesskey>

# APP SECRETS
HOST=github.com # edit your default host. Preffered is localhost where your App is running

```
