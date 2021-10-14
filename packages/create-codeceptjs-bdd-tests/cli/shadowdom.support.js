const fs = require('fs');
const path = require('path');

class ShadowDomSupport {
    constructor(envs) {
        const shadowDomPlugin = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'plugins',
            'shadow-dom.plugin.js'
        );

        const destinationPath = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'plugins',
            'shadow-dom.plugin.js'
        );

        fs.copyFileSync(shadowDomPlugin, destinationPath);

        const codeceptEnvFile = path.join(envs.rootPath, envs.relativePath, `acceptance`, 'config', 'codecept.env');

        console.log('\n\n\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + codeceptEnvFile);

        fs.appendFileSync(codeceptEnvFile, '\n\n# SHADOW DOM SUPPORT');
        fs.appendFileSync(codeceptEnvFile, '\nENABLE_SHADOW_DOM_SUPPORT = true');
        fs.appendFileSync(codeceptEnvFile, '\nCUSTOM_LOCATOR_STRATEGY = true');
        fs.appendFileSync(codeceptEnvFile, '\nCUSTOM_LOCATOR_STRATEGY_NAME = shadowDom\n');
    }
}

module.exports = ShadowDomSupport;
