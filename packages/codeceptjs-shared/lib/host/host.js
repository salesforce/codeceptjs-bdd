/**
 * get host
 *
 */

const get = function (defaultHost, scheme) {
    let host = process.env.HOST ? process.env.HOST : defaultHost;
    scheme = scheme ? scheme : 'https';

    if (!host.match(/^[a-zA-Z]+:\/\//)) {
        host = scheme + '://' + host;
    }

    process.env.HOST = host;

    return host;
};

module.exports = { get };
