const glob = require('glob');
const path = require('path');
const camelCase = require('camelcase');

const pageObjects = () => {
    let pages = {};
    glob.sync(path.join(process.cwd(), '/**/pages/**/*.page.js')).map(
        (file) => {
            pages[camelCase(path.parse(file).name)] = file;
        }
    );
    return pages;
};

module.exports = { pageObjects };
