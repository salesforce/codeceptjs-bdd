#!/usr/bin/env node

/** How to launch the tunnel:
 *
 * yarn sauce:connect -u <username> -k <key> -n <tunnel-name> -v
 *
 **/
const chalk = require('chalk');
const emoji = require('node-emoji');
const program = require('commander');
const CFonts = require('cfonts');
const sauceConnectLauncher = require('sauce-connect-launcher');

console.clear();

CFonts.say('CODECEPTJS SAUCE CONNECT', {
    font: 'chrome', // define the font face
    align: 'left', // define text alignment
    colors: ['system'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: ['blue', 'yellow'], // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node', // define the environment CFonts is being executed in
});

const options = {
    // Sauce Labs username.  You can also pass this through the
    // SAUCE_USERNAME environment variable
    username: process.env.SAUCE_USERNAME,

    // Sauce Labs access key.  You can also pass this through the
    // SAUCE_ACCESS_KEY environment variable
    accessKey: process.env.SAUCE_KEY,

    // Log output from the `sc` process to stdout?
    verbose: false,

    // Enable verbose debugging (optional)
    verboseDebugging: false,

    // Port on which Sauce Connect's Selenium relay will listen for
    // requests. Default 4445. (optional)
    port: null,

    // Proxy host and port that Sauce Connect should use to connect to
    // the Sauce Labs cloud. e.g. "localhost:1234" (optional)
    proxy: null,

    // Change sauce connect logfile location (optional)
    logfile: null,

    // Period to log statistics about HTTP traffic in seconds (optional)
    logStats: null,

    // Maximum size before which the logfile is rotated (optional)
    maxLogsize: null,

    // Set to true to perform checks to detect possible misconfiguration or problems (optional)
    doctor: null,

    // Identity the tunnel for concurrent tunnels (optional)
    tunnelIdentifier: null,

    // an array or comma-separated list of regexes whose matches
    // will not go through the tunnel. (optional)
    fastFailRexegps: null,

    // an array or comma-separated list of domains that will not go
    // through the tunnel. (optional)
    directDomains: null,

    'shared-tunnel': true,
    // A function to optionally write sauce-connect-launcher log messages.
    // e.g. `console.log`.  (optional)
    logger: function (message) {
        console.log(chalk.green(message));
    },

    // an optional suffix to be appended to the `readyFile` name.
    // useful when running multiple tunnels on the same machine,
    // such as in a continuous integration environment. (optional)
    readyFileId: null,

    noOcspVerify: null,
};

program
    .option('-n, --tunnel-name [optional]', 'Sauce Tunnel Name', 'codeceptjs-sauce-tunnel')
    .option('-u, --username [required]', 'Sauce Labs username')
    .option('-k, --key [required]', 'Sauce Labs access key')
    .option('-v, --verbose', 'verbose logs', false)
    .option('-x, --verbose-debug', 'Enable verbose debugging', false)
    .option('-d, --doctor', 'Set to true to perform checks to detect possible misconfiguration or problems', null)
    .option(
        '-o, --noOcsp-verify [optional]',
        'OCSP tunnel certificate validation command that allows you to bypass OCSP checks.'
    )
    .parse();

const o = program.opts();
options.username = o.username || process.env.SAUCE_USERNAME;
options.tunnelIdentifier = o.tunnelName || 'codeceptjs-sauce-tunnel';
options.accessKey = o.key || process.env.SAUCE_KEY || process.env.SAUCE_ACCESS_KEY;
options.verbose = o.verbose || false;
options.verboseDebugging = o.verboseDebug || false;
options.doctor = o.doctor || null;
options.noOcspVerify = o.noOcspVerify || null;

console.info(chalk.blue.bold('Launching SauceTunnel for the account: ') + chalk.yellow.bold(options.username));

console.info(chalk.blue.bold('Tunnel Name: ') + chalk.yellow.bold(options.tunnelIdentifier));

console.info('\n' + chalk.yellow.bold(emoji.emojify(':coffee: ') + 'wait a few seconds ...\n'));

sauceConnectLauncher(options, function (err) {
    if (err) {
        console.error(chalk.red.bold('Error in launching SauceTunnel: ', err));
        return;
    }
    console.info(
        chalk.blue.bold(
            `✅ SauceLabs Tunnel "${chalk.yellow.bold(
                options.tunnelIdentifier
            )}" is launched successfully for the account: `
        ) + chalk.yellow.bold(options.username)
    );

    console.info(
        chalk.white.bold(
            '\n' +
                emoji.emojify(':octagonal_sign: ') +
                'Hit ' +
                chalk.yellow.bgBlue.bold(' CTRL + C ') +
                ' to shutdown the tunnel...'
        )
    );
});
