## 2.0.3

### CodeceptJS-shared

* Maximize Safari and Firefox browser when it launches
   
## 2.0.0

### CodeceptJS-shared

* Breaking Change: import the existing config as `require(codeceptjs-shared).config.master.conf`
* Webdriver Commands Helper
    * scrollAndClick
    * seeVisible
    * scrollDownToPixel
    * scrollToElement
* Custom Methods
    * grabCss
    * takeNap
    
### CodeceptJS-saucelabs

* Breaking Change: import the existing config as `require(codeceptjs-shared).config.saucelabs`
* Updated README

### CodeceptJS-cucumber

* required updates to consume above shared modules
* Updated README

## 1.1.3 (Aug-12-2019)

### CodeceptJS-saucelabs

* Builds the Automated Test Dashboard for each of your test-suite execution. Pass the unique SAUCE_BUILD env param with your test command.
* Captures the @Tags from your tests and updates the Sauce Tests. These Tags help to filter your Tests in future.
* Update SauceLabs interface to populate data at the start of test execution.
* Fixed the issues with Firefox/IE drivers on SauceLabs by using fixed version of Selenium.

