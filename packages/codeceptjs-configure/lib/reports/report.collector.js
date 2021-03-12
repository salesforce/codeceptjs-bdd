const fs = require('fs-extra');
const dateformat = require('dateformat');
const path = require('path');
const logger = require('../logger/logger');
const chalk = require('chalk');

function collect(options) {
    const sourceDir = path.join(process.cwd(), options.reportOutputDir);
    const date = new Date();
    let destinationDir = options.destinationDir;

    if (!options.destinationDir) {
        destinationDir = path.join(process.cwd(), process.env.CODECEPT_RELATIVE_PATH, 'report_collections');
    }

    destinationDir = path.join(
        destinationDir,
        dateformat(date, 'mmm_dd_yyyy'),
        dateformat(date, 'mmm_dd_yyyy___h-MM-ss_TT')
    );

    fs.copySync(sourceDir, destinationDir);

    logger.log({
        message: `reports are collected at "${destinationDir}" ...`,
        emoji: 'open_file_folder',
        chalk: chalk.gray,
    });
}

module.exports = { collect };
