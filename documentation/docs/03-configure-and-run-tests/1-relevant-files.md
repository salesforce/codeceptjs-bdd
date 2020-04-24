---
title: Relevant files
sub_title: Relevant Configuration files for your acceptance tests
parents: ["Configure and Run Tests"]
keywords: ["test config"]
---

## codecept.conf.js
`codecept.conf.js` is the Master Configuration file. This file contains the configuration properties for your tests like the name of the tests. 

It is present in your app's root directory. This is the same directory as the `tests` directory. The directory to which you provided the path to when asked by the cli.

`codecept.conf.js` reads properties from a few other files in the `config` folder. `config` folder is present in the same directory as the `tests` directory

## config/dev.codecept.env.example and config/dev.codecept.env
This is an example file provided to help create your `dev.codecept.env` file. Copy this file and rename it to `dev.codecept.env`. Then complete it to fit your project. You may add other development environment properties in this file. 

**Please make sure to not commit `dev.codecept.env` file** as it may contain sensetive information about your repository.

## config/api.conf.js
This file is optional. If your tests need api configuration properties, you can add them here. For example, api-endpoint, authorization, etc.


[![folder-structure.png](https://i.postimg.cc/jdtnxg0Q/folder-structure.png)](https://postimg.cc/CdrxJ4Kz)