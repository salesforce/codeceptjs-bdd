const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const allure_commandline = path.dirname(require.resolve('allure-commandline'));
const win_launcher = path.dirname(require.resolve('./win/launch_html_report'));
const mac_launcher = path.dirname(require.resolve('./mac/launch_html_report'));
const logger = require('../../logger/logger');

const shell = require('shelljs');

/**
 * Allure Report Launcher: Win & Mac
 *
 * @param {destinationDir: string, launcherFilePath: string} options
 */
function allureReportLauncher(options) {
    const isWin = process.platform === 'win32';

    fs.copySync(allure_commandline, options.destinationDir);

    if (isWin) {
        fs.copySync(win_launcher, options.launcherFilePath || options.destinationDir);
    } else {
        fs.copySync(mac_launcher, options.launcherFilePath || options.destinationDir);
        shell.exec(`chmod +x ${path.join(options.launcherFilePath || options.destinationDir, 'launch_html_report')}`);
    }

    logger.log({
        message: `Allure HTML Report launcher is generated at "${
            options.launcherFilePath || options.destinationDir
        }" ...`,
        emoji: 'bar_chart',
        chalk: chalk.gray,
    });
}

module.exports = { allureReportLauncher };
