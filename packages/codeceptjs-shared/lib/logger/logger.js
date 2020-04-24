const cli = require('cli-ux');
const emoji = require('node-emoji');
const chalk = require('chalk');

const log = (logMessage) => {
    let message = '';

    if (logMessage.emoji) {
        message = `${emoji.get(logMessage.emoji)}  `;
    }

    message = message.concat(logMessage.message);

    cli.default.log(chalk.bgBlue.bold(message.concat('\n')));
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

    message = message.concat('  Codeceptjs BDD Acceptance Tests   ');

    for (let m = 0; m < i; m++) {
        message = message.concat(zap).concat(' ');
    }

    cli.default.log(chalk.yellow(message.concat('\n\n')));
};

module.exports = { log, welcome, host, error };
