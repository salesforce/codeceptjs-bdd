/**
 * get host
 *
 */
const fs = require('fs');
const path = require('path');

const get = function (defaultHost, scheme) {
    let host = process.env.HOST ? process.env.HOST : defaultHost;
    scheme = scheme ? scheme : 'https';

    if (!host) {
        throw Error('HOST is not defined in ENV variable. Check if "HOST" is defined in either "./acceptance/config/codecept.env" or "./acceptance/config/codecept.dev.env" file. More info https://gkushang.github.io/04-configurations/1-env-variables/');
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