const cli = require('cli-ux');
const emoji = require('node-emoji');
const chalk = require('chalk');

const isTypescriptDef = () => process.argv.includes('def');

const printTypescriptDef = () =>
    cli.default.log(`\n${chalk.bgBlue.bold(chalk.white('📝 Generating Typescript Defs...\n'))}`);

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

    // log message
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

const welcome = (name) => {
    console.clear();
    process.env.CODECEPT_PROJECT___NAME = name;

    let message = '\n';
    const i = 3;
    const zap = emoji.get('rocket');

    for (let m = 0; m < i; m++) {
        message = message.concat(zap).concat(' ');
    }

    if (name && !name.toLowerCase().includes('codecept')) {
        name = `Codecept: ${name}`;
    }

    const h1Name = name || 'Codeceptjs-BDD Acceptance Tests';

    message = message.concat(`  ${h1Name}   `);

    for (let m = 0; m < i; m++) {
        message = message.concat(zap).concat(' ');
    }

    cli.default.log(chalk.green.bold(message.concat('\n')));
};

module.exports = { log, welcome, host, error, isTypescriptDef, printTypescriptDef };
