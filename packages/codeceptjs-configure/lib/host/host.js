/**
 * get host
 *
 */
const get = function (defaultHost, scheme) {
    let host = defaultHost || process.env.HOST;
    scheme = scheme ? scheme : 'https';

    if (!host) {
        throw Error(
            'HOST is not defined in ENV variable. Check if "HOST" is defined in either "<path/to/>/codecept.env" or "<path/to/>/codecept.dev.env" file. More info https://gkushang.github.io/05-02-test-configurations/1-env-variables/'
        );
    }

    if (!host.match(/^[a-zA-Z]+:\/\//)) {
        host = scheme + '://' + host;
    }

    process.env.HOST = host;

    return host;
};

module.exports = {
    get,
};
