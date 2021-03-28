const fs = require('fs-extra');
const dateformat = require('dateformat');
const path = require('path');
const logger = require('../logger/logger');
const chalk = require('chalk');
const report_launcher = require('./allure-static-launcher/allure-launcher');

/**
 * Collect Allure Report to one location, with date-time stamp
 *
 * @param {reportOutputDir, destinationDir, shouldGenerateLauncher} options
 */
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

    // generate launcher
    if (options.shouldGenerateLauncher) {
        const launcherFilePath = destinationDir;
        destinationDir = path.join(destinationDir, 'report');
        const pathToWinAllureCommandline = options.pathToWinAllureCommandline;

        report_launcher.allureReportLauncher({
            destinationDir,
            launcherFilePath,
            pathToWinAllureCommandline,
        });
        fs.copySync(sourceDir, destinationDir);
    } else {
        fs.copySync(sourceDir, path.join(destinationDir));
    }

    logger.log({
        message: `Allure reports are collected at "${destinationDir}" ...`,
        emoji: 'open_file_folder',
        chalk: chalk.gray,
    });
}

module.exports = { collect };
