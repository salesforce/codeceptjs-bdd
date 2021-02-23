const shell = require('shelljs');
const chalk = require('chalk');
const emoji = require('node-emoji');

exports.addNpmScripts = (packageJson, RELATIVE_PATH, DRIVER) => {
    let parallelScript = '"codeceptjs def && codeceptjs run-workers --suites 10"';
    let multibrowsersScript = '"codeceptjs def && codeceptjs run-multiple multibrowsers"';

    const SCRIPTS = `"scripts": {
  "acceptance": "codeceptjs def && codeceptjs run --steps", 
  "acceptance:parallel": ${parallelScript},
  "acceptance:parallel:multibrowsers": ${multibrowsersScript},
  "acceptance:report": "allure serve ./${RELATIVE_PATH}/acceptance/report",
  "acceptance:clean": "allure generate -c -o ./${RELATIVE_PATH}/acceptance/report",`;

    shell.sed('-i', '"scripts": {', SCRIPTS, packageJson);
};

exports.installDependencies = () => {
    console.log('\n\n' + chalk.white.bgBlue.bold(emoji.emojify(':rocket:') + ` Installing dependencies...\n\n`));

    if (
        shell.exec(
            'yarn add prettier typescript ts-node dotenv-extended@latest codeceptjs-saucelabs@latest codeceptjs-selenoid@latest expect@latest expect-playwright@latest codeceptjs-configure@latest allure-commandline codeceptjs@3.0.2 debug faker playwright@latest protractor rimraf should deepmerge soft-assert -D --registry https://registry.npmjs.org/'
        ).code !== 0
    ) {
        throw new Error('Yarn command failed.');
    }

    console.log('\n' + chalk.white.bgBlue.bold(emoji.emojify(':coffee:') + ` Setup Completed!`));
};
