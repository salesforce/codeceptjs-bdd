const shell = require('shelljs');
const chalk = require('chalk');
const emoji = require('node-emoji');

exports.addNpmScripts = (packageJson, RELATIVE_PATH, DRIVER) => {
    let parallelScript = '"codeceptjs run-multiple parallel"';

    if (DRIVER.toLowerCase() === 'playwright') {
        parallelScript = '"codeceptjs run-workers --suites 10"'
    }

    const SCRIPTS =
        '"scripts": {\n' +
        '\t"acceptance": "codeceptjs run --verbose",\n' +
        '\t"acceptance:parallel": ' + parallelScript + ',\n' +
        '\t"acceptance:report": "allure serve ./' + RELATIVE_PATH + '/acceptance/report",';

    shell.sed('-i', '"scripts": {', SCRIPTS, packageJson);
};

exports.installDepedencies = () => {
    console.log(
        '\n\n' +
        chalk.white.bgBlue.bold(
            emoji.emojify(':rocket:') + ` Installing dependencies...\n\n`
        )
    );

    if (
        shell.exec(
            'yarn add prettier dotenv-extended codeceptjs-saucelabs@latest codeceptjs-shared@latest allure-commandline codeceptjs@2.6.1 debug faker playwright protractor rimraf should deepmerge soft-assert -D --registry https://registry.npmjs.org/'
        ).code !== 0
    ) {
        failure('Yarn command failed.');
    }

    console.log(
        '\n' +
        chalk.white.bgBlue.bold(
            emoji.emojify(':coffee:') + ` Setup Completed!`
        )
    );
};