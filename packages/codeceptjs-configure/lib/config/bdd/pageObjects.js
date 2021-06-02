const glob = require('glob');
const path = require('path');
const camelCase = require('camelcase');

const pageObjects = (pathToPages) => {
    let pages = {};
    let pageObjects = '';

    if (!pathToPages) {
        pathToPages = '/pages/**/*.page.{js,ts}';
        pageObjects = path.join(process.env.CODECEPT_RELATIVE_PATH, pathToPages);
    }

    if (pathToPages.from) {
        pageObjects = pathToPages.from;
    }

    glob.sync(pageObjects).map((file) => {
        pages[camelCase(path.parse(file).name)] = './' + file;
    });

    return pages;
};

module.exports = { pageObjects };
