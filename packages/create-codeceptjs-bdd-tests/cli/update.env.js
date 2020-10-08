const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

class UpdateEnvironments {
    constructor(envs) {
        const sourceSecrets = path.join(envs.rootPath, envs.relativePath, `acceptance`, 'config', 'codecept.dev.env.example');

        const destinationSecrets = path.join(envs.rootPath, envs.relativePath, `acceptance`, 'config', 'codecept.dev.env');

        fs.copyFileSync(sourceSecrets, destinationSecrets);

        this.codeceptDefaults = path.join(envs.rootPath, envs.relativePath, `acceptance`, 'config', 'codecept.env');

        this.codeceptSecrets = path.join(envs.rootPath, envs.relativePath, `acceptance`, 'config', 'codecept.dev.env');
    }

    driver = (envs) => {
        shell.sed('-i', 'playwright', envs.driver, this.codeceptDefaults);
    };

    relativePath = (envs) => {
        // update relative path
        shell.sed('-i', './acceptance/', './' + envs.relativePath + '/acceptance/', this.codeceptDefaults);
    };

    sauceLabs = (envs) => {
        shell.sed('-i', '<enter-your-saucelabs-username>', envs.sauceUsername, this.codeceptSecrets);

        shell.sed('-i', '<enter-your-saucelabs-accesskey>', envs.sauceKey, this.codeceptSecrets);
    };

    updateHost = (envs) => {};
}

module.exports = UpdateEnvironments;
