const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const allure_commandline_mac = path.dirname(require.resolve('allure-commandline'));
const win_launcher = path.dirname(require.resolve('./win/launch_html_report.bat'));
const mac_launcher = path.dirname(require.resolve('./mac/launch_html_report'));
const logger = require('../../logger/logger');

const shell = require('shelljs');

/**
 * Launcher for Windows
 *
 * @param {options} options
 */
function createLauncherForWindows(options) {
    fs.copySync(options.pathToWinAllureCommandline, options.destinationDir);
    fs.copySync(win_launcher, options.launcherFilePath || options.destinationDir);
}

/**
 * Launcher for Mac
 * @param {options} options
 */
function createLauncherForMac(options) {
    fs.copySync(allure_commandline_mac, options.destinationDir);
    fs.copySync(mac_launcher, options.launcherFilePath || options.destinationDir);
    shell.exec(`chmod +x ${path.join(options.launcherFilePath || options.destinationDir, 'launch_html_report')}`);
}

/**
 * Allure Report Launcher: Win & Mac
 *
 * @param {destinationDir: string, launcherFilePath: string} options
 */
function allureReportLauncher(options) {
    const isWin = process.platform === 'win32';

    if (isWin) {
        if (options.pathToWinAllureCommandline) {
            createLauncherForWindows(options);
        } else {
            console.warn(
                '⚠️ Path to Windows Allure Commandline is required. Please provide "{ pathToWinAllureCommandline }" param.'
            );
        }
    } else {
        createLauncherForMac(options);
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
