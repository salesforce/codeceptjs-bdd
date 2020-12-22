const cli = require('cli-ux');
const emoji = require('node-emoji');
const chalk = require('chalk');

const isTypescriptDef = () => process.argv.includes('def');

const printTypescriptDef = () => cli.default.log(`${chalk.bgBlue.bold('📝 Generating Typescript Defs...\n')}`);

const log = (logMessage) => {
    if (isTypescriptDef()) {
        return;
    }

    let message = '';

    if (logMessage.emoji) {
        message = `${emoji.get(logMessage.emoji)}  `;
    }

    if (logMessage.message) {
        message = message.concat(logMessage.message);
    } else {
        message = logMessage;
    }

    if (logMessage.chalk) {
        cli.default.log(logMessage.chalk(message.concat('\n')));
    } else {
        cli.default.log(`${chalk.blue.bold('log')} ${chalk.green.bold(message)}`);
    }
};

const host = () => {
    log({ message: `Host: ${process.env.HOST}`, emoji: 'earth_americas' });
};

const error = (errorMessage) => {
    throw new Error(`${emoji.get('warning')}  ${errorMessage}`);
};

const welcome = () => {
    console.clear();

    let message = '\n';
    const i = 3;
    const zap = emoji.get('rocket');

    for (let m = 0; m < i; m++) {
        message = message.concat(zap).concat(' ');
    }

    message = message.concat('  Codeceptjs-BDD Acceptance Tests   ');

    for (let m = 0; m < i; m++) {
        message = message.concat(zap).concat(' ');
    }

    cli.default.log(chalk.yellow(message.concat('\n\n')));
};

module.exports = { log, welcome, host, error, isTypescriptDef, printTypescriptDef };
