/**
 * get host
 *
 */
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(process.env.CODECEPT_RELATIVE_PATH, 'config', 'codecept.dev.env'))) {
    throw new Error("FILE NOT EXISTS");
}

const get = function (defaultHost, scheme) {
    let host = process.env.HOST ? process.env.HOST : defaultHost;
    scheme = scheme ? scheme : 'https';

    if (!host) {
        throw Error('HOST is not defined in ENV variable. Check if "./acceptance/config/codecept.dev.env" file exists. If not, please create the file and define your enviroment varialbles. More info https://gkushang.github.io/04-configurations/1-env-variables/');
    }

    if (!host.match(/^[a-zA-Z]+:\/\//)) {
        host = scheme + '://' + host;
    }

    process.env.HOST = host;

    return host;
};

module.exports = {
    get
};