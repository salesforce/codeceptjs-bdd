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
            'yarn add @wdio/selenium-standalone-service@latest prettier typescript shelljs ts-node dotenv-extended@latest codeceptjs-saucelabs@latest codeceptjs-selenoid@latest expect@latest codeceptjs-configure@latest allure-commandline codeceptjs@latest debug playwright@latest rimraf deepmerge webdriverio@latest -D --registry https://registry.npmjs.org/'
        ).code !== 0
    ) {
        throw new Error('Yarn command failed.');
    }

    console.log('\n' + chalk.white.bgBlue.bold(emoji.emojify(':coffee:') + ` Setup Completed!`));
};
