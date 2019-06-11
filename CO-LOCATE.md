
# Co-Locate/Add CodeceptJS-Cucumber E2E Framework to your existing Project

### Step 1: Clone the repository

```bash
    git clone git@github.com:gkushang/codeceptjs-e2e.git
```

### Step 2: Colocate the CodeceptJS tests to your repository

```bash
    cd codeceptjs-e2e

    cp -a packages/codeceptjs-cucumber/ <relative_path_to_your_desired_acceptance_folder>
    
    cp packages/codeceptjs-cucumber/codecept.conf.js <relative_path_to_root_of_your_desired_project_or_your_monorepo> 

    cd <to_your_desired_project>
    
    yarn add @wdio/selenium-standalone-service allure-commandline codeceptjs codeceptjs-selenium debug faker protractor rimraf should webdriverio deepmerge codeceptjs-saucelabs -D
```

Update the following PATH's in `codeceptjs.config.js` with your actual paths,

```bash
    const RELATIVE_PATH = <relative_path_where_acceptance_folder_exists>
```

### Step 3: Test the setup by running existing GitHub tests

Run existing tests

```bash
    ./node_modules/.bin/codeceptjs run --config=<path_to_codeceptjs.conf.js_file> --grep=@search_results
```
Launch HTML Report

```bash
    ./node_modules/.bin/allure serve <relative_path_to_report_folder_under_acceptance_folder>
```


