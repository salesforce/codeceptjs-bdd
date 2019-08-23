#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
const emoji = require('node-emoji');
const path = require('path');

const init = () => {
    console.log('\n' +
        chalk.yellow(
            figlet.textSync('E2E Codecept JS', {
                font: 'Ghost',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    console.log(chalk.blue.underline.bold(
        '\nWelcome to CodeceptJs-E2E CLI!'
    ));

    console.log(
        chalk.green.bold(
        '\nThe CodeceptJs-E2E CLI is a command-line interface tool that you use to Create and Initialize the base ' +
            chalk.blue.bold.underline('CodeceptJS Cucumber E2E Frameowork') +
            ' to your workspace. It will create ' + chalk.blue.bold.underline('acceptance') + ' directory at your acceptance test location and ' + chalk.blue.bold.underline('configurations') + ' under your workspace.\n'));
};

const askQuestions_aboutLocations = () => {
    return inquirer.prompt([
        {
            name: 'ROOT_PATH',
            type: 'input',
            message: 'Enter the path to your destination Root project (path to package.json): '
        },
        {
            name: 'RELATIVE_PATH',
            type: 'input',
            message: 'Enter the Relative path to your tests folder: '
        },
        {
            name: 'INTEGRATE_SAUCE_LABS',
            type: 'confirm',
            message: 'Do you want to integrate SauceLabs?'
        }
    ]);
};

const askQuestions_aboutSauceLabsAccount = () => {
    return inquirer.prompt([
        {
            name: 'SAUCE_USERNAME',
            type: 'input',
            message: 'Enter your Sauce Username: '
        },
        {
            name: 'SAUCE_KEY',
            type: 'input',
            message: 'Enter your Sauce Access Key: '
        }
    ]);
};

const askQuestions_toExecuteScenarios = () => {
    return inquirer.prompt([
        {
            name: 'SHOULD_EXECUTE',
            type: 'confirm',
            message: 'The CLI also offers to test your setup and configurations. It provides the simple example tests of GitHub Search Feature. Do you want to run a sample GitHub Tests once your Setup is complete?'
        }
    ]);
};

const success = (filepath) => {
    console.log('\n' +
        chalk.white.bgRed.bold(emoji.emojify(':clap: :thumbsup:') + ` Done! Acceptance Tests Created at ${filepath}\n`)
    );
};

const failure = (message) => {
    console.log('\n' +
        chalk.bold.red(emoji.emojify(':warning:  ') + emoji.emojify(':disappointed: ') + 'Error: ' + message)
    );
    shell.exit(1);
};

const run = async () => {
    init();

    console.log('pwd ', process.cwd());
    const { ROOT_PATH, RELATIVE_PATH, INTEGRATE_SAUCE_LABS } =  await askQuestions_aboutLocations();

    shell.cp('-R',  path.join(process.cwd(), 'packages/codeceptjs-cucumber/acceptance'), path.join(ROOT_PATH, RELATIVE_PATH, 'acceptance'));
    shell.cp('-R', path.join(process.cwd(), 'packages/codeceptjs-cucumber/codecept.conf.js'), path.join(ROOT_PATH));

    console.log('ROOT_PATH ', ROOT_PATH);

    const configFile = path.join(ROOT_PATH, 'codecept.conf.js');

    if(INTEGRATE_SAUCE_LABS === true) {
        const { SAUCE_USERNAME, SAUCE_KEY } =  await askQuestions_aboutSauceLabsAccount();
        shell.sed('-i', '<sauce_username>', SAUCE_USERNAME, configFile);
        shell.sed('-i', '<sauce_key>', SAUCE_KEY, configFile);
    }

    shell.sed('-i', './acceptance/', './' + RELATIVE_PATH +'/acceptance/', configFile);

    const { SHOULD_EXECUTE } =  await askQuestions_toExecuteScenarios();

    shell.cd(ROOT_PATH);

    if (shell.exec('yarn add codeceptjs-saucelabs@latest codeceptjs-shared@latest @wdio/selenium-standalone-service allure-commandline codeceptjs debug faker protractor rimraf should webdriverio deepmerge -D' ).code !== 0) {
        failure('Yarn command failed.');
    }

    if(SHOULD_EXECUTE === true) {
        if (shell.exec('./node_modules/.bin/codeceptjs run --grep=@search_results' ).code !== 0) {
            failure('Execution of Acceptance Test Failed.');
        }
    }

    success(path.join(ROOT_PATH, RELATIVE_PATH));
};

run();

