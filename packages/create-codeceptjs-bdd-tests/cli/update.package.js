const shell = require('shelljs');
const chalk = require('chalk');
const emoji = require('node-emoji');

exports.addNpmScripts = (packageJson, RELATIVE_PATH, DRIVER) => {
    let parallelScript = '"codeceptjs run-multiple parallel"';

    if (DRIVER.toLowerCase() === 'playwright') {
        parallelScript = '"codeceptjs run-workers --suites 10"';
    }

    const SCRIPTS =
        '"scripts": {\n' +
        '\t"acceptance": "yarn acceptance:clean && codeceptjs run --steps",\n' +
        '\t"acceptance:parallel": ' +
        parallelScript +
        ',\n' +
        '\t"acceptance:report": "allure serve ./' +
        RELATIVE_PATH +
        '/acceptance/report",' +
        '\t"acceptance:clean": "allure generate -c -o ./' +
        RELATIVE_PATH +
        '/acceptance/report",';

    shell.sed('-i', '"scripts": {', SCRIPTS, packageJson);
};

exports.installDependencies = () => {
    console.log('\n\n' + chalk.white.bgBlue.bold(emoji.emojify(':rocket:') + ` Installing dependencies...\n\n`));

    if (
        shell.exec(
            'yarn add prettier dotenv-extended@latest codeceptjs-saucelabs@latest codeceptjs-selenoid@latest expect@latest expect-playwright@latest codeceptjs-configure@latest allure-commandline codeceptjs@3.0.2 debug faker playwright@latest protractor rimraf should deepmerge soft-assert -D --registry https://registry.npmjs.org/'
        ).code !== 0
    ) {
        throw new Error('Yarn command failed.');
    }

    console.log('\n' + chalk.white.bgBlue.bold(emoji.emojify(':coffee:') + ` Setup Completed!`));
};
