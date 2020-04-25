const shell = require('shelljs');
const chalk = require('chalk');
const emoji = require('node-emoji');

exports.addNpmScripts = (packageJson) => {
    const SCRIPTS =
        '"scripts": {\n' +
        '\t"acceptance": "codeceptjs run --verbose",\n' +
        '\t"acceptance:parallel": "codeceptjs run-multiple parallel",\n' +
        '\t"acceptance:parallel:multibrowsers": "codeceptjs run-multiple multibrowsers",\n' +
        '\t"acceptance:report": "allure serve ",';

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
