---
title: Docker & Jenkins CI
sub_title: Docker Image to run your Codeceptjs-BDD Tests in Jenkins CI
---

Codeceptjs-BDD is packed into the Docker Container that provides required images and commands to run your BDD Scenarios in Jenkins CI.

### Docker Image

Available Docker Image: [gkushang/codeceptjs-e2e](https://hub.docker.com/repository/docker/gkushang/codeceptjs-e2e)

### Jenkinsfile

Codeceptjs-BDD can run on Sauce Labs through your Jenkins CI. Sauce Labs can provide wider range of Browser Coverage through your CI jobs.

**How can I create Jenkinsfile?**

Jenkinsfile uses the docker image [gkushang/codeceptjs-e2e](https://hub.docker.com/repository/docker/gkushang/codeceptjs-e2e) to run your tests on Sauce Labs. Below is the sample Jenkinsfile Script to run your Codeceptjs-BDD test suite. 

The Script assumes you will have following Jeniins Build Parameters,

* HOST: host of your running app
* SAUCE_USERNAME
* SAUCE_KEY
* BROWSER: choice parameter for Browser selection

```bash

/**
 * Run Codeceptjs-BDD Acceptance tests
 *
 */
def void runCodeceptjsBDD_AcceptanceTests() {
     // Get docker command
    String command = dockerCommand()

    // Run docker command
    sh "docker run --rm " +
        "-e HOST -e SAUCE_KEY -e SAUCE_USERNAME" +
        " -v ${env.WORKSPACE}/:/acceptance " +
        "gkushang/codeceptjs-e2e yarn && codeceptjs run --debug ${command}"
}

def String dockerCommand() {
    String command = ''

    if (BROWSER) {
        command = command + ' --profile sauce:' + BROWSER
    } else {
        command = command + ' --profile sauce:chrome'
    }

    return command
}

```




