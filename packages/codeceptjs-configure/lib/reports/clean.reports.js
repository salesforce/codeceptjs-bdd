/**
 * clean reports
 *
 */
const fs = require('fs');
const path = require('path');
const logger = require('../logger/logger');
const chalk = require('chalk');

const cleanReports = function (options) {

    if (!options.path) {
        throw Error('Report Path is not defined');
    }

    fs.rmdir(path.join(process.cwd(), process.env.CODECEPT_RELATIVE_PATH, options.path), { recursive: true }, (err) => {
        if (err) {
            throw Error('Error cleaning the Report directory', err);
        }

        if (options.callback) {
            options.callback();
        }

        logger.log({
            message: `deleting report dir "${options.path}" ...`,
            emoji: 'wastebasket',
            chalk: chalk.gray
        });
    
        
    });
};

module.exports = {
    cleanReports
};