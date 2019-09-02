#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
const emoji = require('node-emoji');
const path = require('path');
const fs = require('fs');

const init = () => {
    addScripts();

    console.log('\n' +
        chalk.yellow(
            figlet.textSync('E2E Codecept JS', {
                font: 'Ghost',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    console.log('\n\n' + emoji.emojify(':tada: ') + chalk.blue.underline.bold(
        'Welcome to CodeceptJs-E2E CLI!'
    ));

    console.log(
        chalk.green.bold(
        '\nThe CodeceptJs-E2E CLI is a command-line interface tool that you use to Create and Initialize the base ' +
            chalk.blue.bold.underline('CodeceptJS Cucumber E2E Framework') +
            ' to your workspace. It will create ' + chalk.blue.bold.underline('acceptance') + ' directory at your acceptance test location and ' + chalk.blue.bold.underline('configurations') + ' under your workspace.\n'));
};

const askQuestions_aboutLocations = () => {
    return inquirer.prompt([
        {
            name: 'PROJECT_NAME',
            type: 'input',
            message: 'Enter name of your acceptance tests (e.g. E2E Acceptance Tests): '
        },
        {
            name: 'ROOT_PATH',
            type: 'input',
            message: 'Enter the Full PATH to your destination Root project (full path to package.json): '
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

const addInfo = (username, key) => {

    console.log('\n' +
        chalk.bold.red(emoji.emojify(':warning:  ') + 'You must export Saucelabs Access Key through Environment Variable "SAUCE_KEY" to run your tests on Saucelabs. It is not recommend to store it on the Source Control.\n\n') +
        chalk.bold.red(emoji.emojify(':information_desk_person:  ') + 'It is recommended to export your Saucelabs Username and Access Key through your ./bash_profile or ./zshrc. Add following to your profile:') +
        chalk.bold.red('\n\n' +
            'export SAUCE_USERNAME=' + username +'\n' +
            'export SAUCE_KEY='+ key + '\n\n')
    );

};


const addScripts = (packageJson) => {
    const SCRIPTS = '"scripts": {\n' +
        '\t"acceptance": "npx codeceptjs run --verbose",\n' +
        '\t"acceptance:multiple": "npx codeceptjs run-multiple ",\n' +
        '\t"acceptance:report": "npx allure serve ",';

    shell.sed('-i','"scripts": {' , SCRIPTS , packageJson);
};

const success = (filepath) => {

    console.log('\n' +
        chalk.yellow.bold(emoji.emojify(':clap: :thumbsup:') + ` Done! Acceptance Tests Created at ` + chalk.blue.bold(filepath) + '\n')
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

    const { PROJECT_NAME, ROOT_PATH, RELATIVE_PATH, INTEGRATE_SAUCE_LABS } =  await askQuestions_aboutLocations();

    if(!fs.existsSync(ROOT_PATH)) {
        shell.mkdir('-p', ROOT_PATH);
    }

    const acceptanceTestsPath = path.join(ROOT_PATH, RELATIVE_PATH, 'acceptance');

    if(!fs.existsSync(acceptanceTestsPath)) {
        shell.mkdir('-p', acceptanceTestsPath);
    }

    shell.cp('-R',  path.join(process.cwd(), 'acceptance'), path.join(ROOT_PATH, RELATIVE_PATH));
    shell.cp('-R', path.join(process.cwd(), 'codecept.conf.js'), ROOT_PATH);

    const configFile = path.join(ROOT_PATH, 'codecept.conf.js');
    const packageJson = path.join(ROOT_PATH, 'package.json');

    shell.sed('-i', '<name>', PROJECT_NAME, configFile);

    if(INTEGRATE_SAUCE_LABS) {
        const { SAUCE_USERNAME, SAUCE_KEY } =  await askQuestions_aboutSauceLabsAccount();
        shell.sed('-i', '<sauce_username>', SAUCE_USERNAME, configFile);
        addInfo(SAUCE_USERNAME, SAUCE_KEY);
    }

    shell.sed('-i', '<name>', PROJECT_NAME, configFile);

    shell.sed('-i', './acceptance/', './' + RELATIVE_PATH +'/acceptance/', configFile);

    const { SHOULD_EXECUTE } =  await askQuestions_toExecuteScenarios();


    if(!fs.existsSync(path.join(ROOT_PATH, 'package.json'))) {
        console.error(
            '\n' +
            emoji.emojify(':warning:  ') +
            chalk.red.bold(`package.json does not exists at the ${ROOT_PATH}. Looks like the node project hasn't initialized yet.\n`) +
            emoji.emojify(':point_right:  ') +
            chalk.blue.bold(`Don't worry! We are copying the existing to continue the setup. Please update the file once the setup is done!`) +
            emoji.emojify(':zap:  ')
        );

        shell.cp('-R',  path.join(process.cwd(), 'package.json'), ROOT_PATH);
    }

    console.info('\nChange Directory to: ', ROOT_PATH);

    shell.cd(ROOT_PATH);

    addScripts(packageJson);

    console.log('\n\n' +
        chalk.white.bgBlue.bold(emoji.emojify(':rocket:') + ` Installing dependencies...\n\n`)
    );

    if (shell.exec('yarn add codeceptjs-saucelabs@latest codeceptjs-shared@latest @wdio/selenium-standalone-service allure-commandline codeceptjs debug faker protractor rimraf should webdriverio deepmerge -D' ).code !== 0) {
        failure('Yarn command failed.');
    }


    shell.cp('-R', path.join(ROOT_PATH, 'package.json'));

    console.log('\n' +
        chalk.white.bgBlue.bold(emoji.emojify(':coffee:') + ` Setup Completed!`)
    );

    if(SHOULD_EXECUTE) {

        shell.cd(ROOT_PATH);

        console.log('\n' +
            chalk.green(
                figlet.textSync('Running Tests', {
                    font: 'speed',
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                })
            )
        );

        if (shell.exec('./node_modules/.bin/codeceptjs run --grep=@search_results --verbose' ).code !== 0) {
            failure('Execution of Acceptance Test Failed.');
        }
    }

    success(path.join(ROOT_PATH, RELATIVE_PATH));
};

run();

