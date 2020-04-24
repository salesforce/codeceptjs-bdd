const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

class UpdateEnvironments {
    constructor(envs) {
        const sourceSecrets = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'config',
            'dev.codecept.secrets.example'
        );

        const destinationSecrets = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'config',
            'dev.codecept.secrets'
        );

        fs.copyFileSync(sourceSecrets, destinationSecrets);

        this.codeceptDefaults = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'config',
            'dev.codecept.defaults'
        );

        this.codeceptSecrets = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'config',
            'dev.codecept.secrets'
        );
    }

    driver = (envs) => {
        shell.sed('-i', 'webdriver', envs.driver, this.codeceptDefaults);
    };

    relativePath = (envs) => {
        // update relative path
        shell.sed(
            '-i',
            './acceptance/',
            './' + envs.relativePath + '/acceptance/',
            this.codeceptDefaults
        );
    };

    sauceLabs = (envs) => {
        shell.sed(
            '-i',
            '<enter-your-saucelabs-username>',
            envs.sauceUsername,
            this.codeceptSecrets
        );

        shell.sed(
            '-i',
            '<enter-your-saucelabs-accesskey>',
            envs.sauceKey,
            this.codeceptSecrets
        );
    };

    updateHost = (envs) => {};
}

module.exports = UpdateEnvironments;
