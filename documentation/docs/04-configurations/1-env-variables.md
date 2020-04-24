---
title: Test Environment Variables
sub_title: How Codeceptjs-BDD maintains your Test Environment Variables
parents: ['Configurations']
keywords: ['config', 'test properties', 'env vars', 'env', 'vars']
---

Test Envioronmental Variables are a fundamental part of developing Automated tests, allowing your tests to behave differently based on the environment you want them to run in. Wherever your tests needs configuration, you use environment variables. And they’re so simple, they’re beautiful!

This post walks you through creating and using environment variables, aka Test Properties.

### Types of ENV files

1. `dev.codecept.defaults`
   - Common configuration defaults across all environments
2. `dev.codecept.secrets`
   - The Environment specific configurations or properties

The format is a series of key-value pairs. Any line starting with # or ; are commented out and ignored.

```bash

HOST=https://localhost
 END_POINT=/

```

## dev.codecept.defaults

This file contains all your default environment variables, such as common Environment Variables across all your test environements, such as DRIVER, CODECEPT_RELATIVE_PATH etc.

It contains overall app configuration values that would be common across environments. The **dev.codecept.defaults** file is loaded first and then the **dev.codecept.secrets** file is loaded and will overwrite any values from the _dev.codecept.defaults_ file.

**Example:**

```bash

# // config/dev.codecept.defaults

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

## dev.codecept.secrets

This file contains all the Secrets and Password for your App. You must not commit this file to the Source Control because it contains sensitive information such as usernames, passwords, api keys, etc. The format is a series of key-value pairs. Any line starting with # or ; are commented out and ignored.

Because you do not committ this file to the source control, how do your teammates know what are the keys and how to define them?

#### Sharing With Your Team

**dev.codecept.secrets.example**

When your _dev.codecept.secrets_ file is not pushed to source control (which it shouldn’t be), it is important to make it clear to everyone what the shape of that file should look like. The technique we recommend is to create a file named **dev.codecept.secrets.example** that contains the variables, but with fake values. This file might look something like the following template.

**Example:**

```bash

#############################################################################################
#                                                                                           #
#   THIS IS THE EXAMPLE ENV FILE, EDIT THE VALUES AND SAVE AS `dev.codecept.secrets` file   #
#                                                                                           #
#############################################################################################

# // config/dev.codecept.secrets.example

# SAUCE LABS SECRETS
SAUCE_USERNAME=<enter-your-saucelabs-username>
SAUCE_ACCESS_KEY=<enter-your-saucelabs-accesskey>

# APP SECRETS
HOST=github.com # edit your default host. Preffered is localhost where your App is running

```
