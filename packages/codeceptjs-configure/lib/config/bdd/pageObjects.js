const glob = require('glob');
const path = require('path');
const camelCase = require('camelcase');

const pageObjects = (pathToPages) => {
    let pages = {};
    if (!pathToPages) {
        pathToPages = '/pages/**/*.page.js';
    }

    glob.sync(path.join(process.cwd(), process.env.CODECEPT_RELATIVE_PATH, pathToPages)).map((file) => {
        pages[camelCase(path.parse(file).name)] = file;
    });

    return pages;
};

module.exports = { pageObjects };
