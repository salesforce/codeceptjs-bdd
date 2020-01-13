---
title: Docker & Jenkinsfile
parents: ["Quick Start"]
---

> Codecpetjs-e2e packed into the container with Node and Java. 

Codecpetjs-e2e Docker makes it very simple to build your CI Job. 

To run your Codecptjs-e2e tests on Saucelabs thru Jenkins, add below stage to your Jenkinsfile:

```bash

	stage('CodeceptJS Acceptance') {
            sh "docker run --env SAUCE_KEY --env SAUCE_USERNAME -v ${env.WORKSPACE}/:/acceptance --rm gkushang/codeceptjs-e2e --debug --profile sauce:${browser}"
        }

```

* If you tests uses any enviornment variables, pass to the Docker image thru `--env` param as shown above
* Select browser on Saucelabs thru `${browser}` environment variable
* Mount your workspace to the Docker container with `-v` param as shown above.
