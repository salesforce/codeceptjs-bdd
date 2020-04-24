const cli = require('cli-ux');
const emoji = require('node-emoji');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');

const log = (logMessage) => {
    let message = '';

    if (logMessage.emoji) {
        message = `${emoji.get(logMessage.emoji)}  `;
    }

    message = message.concat(logMessage.message);

    cli.default.log(chalk.bgBlue.bold(message.concat('\n')));
};

const error = (ROOT_PATH) => {
    console.error(
        '\n' +
            emoji.emojify(':warning:  ') +
            chalk.red.bold(
                `package.json does not exists at the ${ROOT_PATH}. Looks like the node project hasn't initialized yet.\n`
            ) +
            emoji.emojify(':point_right:  ') +
            chalk.blue.bold(
                `Don't worry! We are copying the existing to continue the setup. Please update the file once the setup is done!`
            ) +
            emoji.emojify(':zap:  ')
    );
};

const welcome = () => {
    console.clear();

    cli.default.log(
        '\n' +
            chalk.yellow(
                figlet.textSync('BDD Codecept JS', {
                    font: 'Ghost',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                })
            )
    );

    cli.default.log(
        '\n\n' +
            emoji.emojify(':tada: ') +
            chalk.blue.underline.bold('Welcome to CodeceptJs-BDD CLI!')
    );

    cli.default.log(
        chalk.green.bold(
            '\nThe CodeceptJs-BDD CLI is a command-line interface tool that creates the ' +
                chalk.blue.bold.underline('CodeceptJS BDD Tests') +
                ' to your workspace. It will create ' +
                chalk.blue.bold.underline('acceptance') +
                ' directory at your <tests> location and ' +
                chalk.blue.bold.underline('configurations') +
                ' under your workspace.\n'
        )
    );
};

const infoAboutPaths = (path) => {
    cli.default.log(
        '\n' +
            chalk.bold.red(
                emoji.emojify(':bulb:') +
                    ' Codecpetjs BDD tests will be created at : '
            ) +
            chalk.bold.bgBlue(path) +
            '\n'
    );
};

const saucelabsInfo = (username, key) => {
    cli.default.log(
        '\n' +
            chalk.bold.red(
                emoji.emojify(':bulb:') +
                    ' You can run tests on Saucelabs thru a "--profile" flag: '
            ) +
            chalk.bold.bgBlue('yarn acceptance --profile sauce:chrome')
    );
};

const success = (filepath) => {
    cli.default.log(
        '\n' +
            chalk.yellow.bold(
                emoji.emojify(':clap: :thumbsup:') +
                    ` Done! Acceptance Tests Created at ` +
                    chalk.blue.bold(filepath) +
                    '\n'
            )
    );
};

const failure = (message) => {
    cli.default.log(
        '\n' +
            chalk.bold.red(
                emoji.emojify(':warning:  ') +
                    emoji.emojify(':disappointed: ') +
                    'Error: ' +
                    message
            )
    );
    shell.exit(1);
};

const tipsToExecuteOnDriver = () => {
    cli.default.log(
        '\n' +
            chalk.bold.red(
                emoji.emojify(':bulb:') +
                    ' You can run tests on either driver thru "DRIVER" env variable: '
            ) +
            chalk.bold.bgBlue('DRIVER=playwright yarn acceptance') +
            '\n'
    );
};

const scenarioExecutions = () => {
    cli.default.log(
        chalk.bold.green(
            '\n\n' +
                emoji.emojify(':star2: ') +
                emoji.emojify(':rainbow: ') +
                'Codeceptjs-BDD framework is packaged with the Sample UI Automated Scenarios, called Starter Kit.'
        )
    );
};
module.exports = {
    log,
    welcome,
    error,
    success,
    failure,
    saucelabsInfo,
    scenarioExecutions,
    tipsToExecuteOnDriver,
    infoAboutPaths,
};
