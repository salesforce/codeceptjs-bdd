---
title: Codecept Configurations
sub_title: Codeceptjs root configuration
parents: ['Test Configurations']
keywords: ['conf']
---

## codecept.conf.js

`codecept.conf.js` is the main Configuration file. It merges the Master configurations from [codeceptjs-configure](https://github.com/gkushang/codeceptjs-bdd/tree/develop/packages/codeceptjs-configure) module where all the main configurations are maintained, leaving users to not to populate and worry about the maintainance of test configurations within App's source code repository. The Framework provides it to all the users.

It is present in your app's root directory. This is the same directory as the _tests_ directory. The directory to which you provided the path to when asked by the cli.

_codeceptj.conf_ contains the Codeceptjs Configurations only, such as name, REST API Configurations, Helpers etc. Any test related configurations are mainted in environment variables, mentioned below.

##### Read [Maintain Test Environment Variables](/04-configurations/1-env-variables/) for more info on maintaining test properties with Codeceptjs-BDD.
