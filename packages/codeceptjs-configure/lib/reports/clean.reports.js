/**
 * clean reports
 *
 */
const path = require('path');
const logger = require('../logger/logger');
const chalk = require('chalk');
const fsExtra = require('fs-extra');

const cleanReports = function (options) {
    if (!options.path) {
        throw Error('Report Path is not defined');
    }

    if (!options.relativePath) {
        options.relativePath = process.env.CODECEPT_RELATIVE_PATH;
    }

    const dir = path.join(process.cwd(), options.relativePath, options.path);

    fsExtra.emptyDirSync(dir);

    logger.log({
        message: `cleaning report dir "${dir}" ...`,
        emoji: 'wastebasket',
        chalk: chalk.gray,
    });
};

module.exports = {
    cleanReports,
};
