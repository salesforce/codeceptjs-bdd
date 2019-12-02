# Contributing to Codeceptjs-E2E

First, I'd like to thank you for wanting to contribute and make the CodeceptJS Acceptance E2E Automation Framework experience better for the community. :+1::tada: -- [@gkushang](https://github.com/gkushang/)

If you'd like to contribute, please make sure to discuss the intended changes either by creating a new [Issue](https://github.com/gkushang/codeceptjs-e2e/issues) or commenting on existing one.

## Submit the PR for new Feature or Bug fixes

1. Fork this repository (button in upper right). Install [git](https://git-scm.com/) and clone your fork locally with `git clone git@github.com:[YOUR-USER]/codeceptjs-e2e.git`. This library only supports use of `git-bash` in Windows. The default command prompt may not work.
1. Create a [topic branch](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows) locally such as `feature/support-visual-testing` for new Feature or `bugfix/saucelabs-api` for Bug fixes.
1. Install [Lerna](https://www.npmjs.com/package/lerna) globally.
1. Install [Node and YARN](https://nodejs.org/en/).
1. `cd codepceptjs-e2e` and run `learna bootstrap` to install dependencies.
1. Make your changes locally and commit to your Forked git repository
1. Create a PR to the origin `codeceptjs-e2e` `develop` branch.
1. Once your changes are approved in `develop` branch, it will be released within few days.

## Contributing Guidelines

* Explain your changes in the PR description, that could be new feature or bug fixes
* Follow the coding standard 
* Format your code with default ES Lint of your editor
* If you are making a change in the SauceLabs integration, make changes under `codepcetjs-e2e/packages/codeceptjs-saucelabs`
* If you are making a change in the CodeceptJs Configuration, make changes under `codepcetjs-e2e/packages/codeceptjs-shared`
* If you are making a change in the CodeceptJs Cucumber framework, make changes under `codepcetjs-e2e/packages/codeceptjs-cucumber`
