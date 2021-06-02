const glob = require('glob');
const path = require('path');
const camelCase = require('camelcase');

const pageObjects = (pathToPages) => {
    let pages = {};
    let pageObjects = '';
    let prefix = '';

    if (!pathToPages) {
        pathToPages = '/pages/**/*.page.{js,ts}';
        pageObjects = path.join(process.env.CODECEPT_RELATIVE_PATH, pathToPages);
    }

    if (pathToPages.from) {
        pageObjects = pathToPages.from;
    }

    if (pathToPages.prefix) {
        prefix = pathToPages.prefix;
    }

    glob.sync(pageObjects).map((file) => {
        pages[prefix + camelCase(path.parse(file).name)] = './' + file;
    });

    return pages;
};

module.exports = { pageObjects };
