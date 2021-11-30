const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

fs.mkdirSync('./node_modules/selenium-standalone/.selenium/chromiumedgedriver/latest-x64/', { recursive: true });
shell.cp(
    '-R',
    path.join(__dirname, `msedgedriver`),
    './node_modules/selenium-standalone/.selenium/chromiumedgedriver/latest-x64/'
);
