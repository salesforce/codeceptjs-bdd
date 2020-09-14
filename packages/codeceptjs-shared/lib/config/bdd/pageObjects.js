const glob = require('glob');
const path = require('path');
const camelCase = require('camelcase');

const pageObjects = () => {
    let pages = {};
    glob.sync(path.join(process.cwd(), process.env.CODECEPT_RELATIVE_PATH, '/pages/**/*.page.js')).map((file) => {
        pages[camelCase(path.parse(file).name)] = file;
    });
    return pages;
};

module.exports = { pageObjects };
