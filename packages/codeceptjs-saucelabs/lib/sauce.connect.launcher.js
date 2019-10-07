/** How to launch the tunnel:
 *
 *  $ SAUCE_USERNAME=<sauce_username> SAUCE_KEY=<sauce_key> node lib/sauce.connect.launcher.js
 *
 **/
const chalk = require('chalk');
const figlet = require('figlet');
const emoji = require('node-emoji');

console.log('\n' +
    chalk.yellow(
        figlet.textSync('CODECEPTJS SAUCE CONNECT', {
                font: 'slant',
                horizontalLayout: 'default',
                verticalLayout: 'default'
        })
    )
);

console.info(chalk.blue.bold('\nLaunching SauceTunnel for the account: ') + chalk.yellow.bold(process.env.SAUCE_USERNAME));
console.info(chalk.yellow.bold(emoji.emojify(':coffee: ') + 'wait a few seconds ...\n'));


var sauceConnectLauncher = require('sauce-connect-launcher'),
    options = {

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
                console.log(chalk.green(message)        );
        },

        // an optional suffix to be appended to the `readyFile` name.
        // useful when running multiple tunnels on the same machine,
        // such as in a continuous integration environment. (optional)
        readyFileId: null
    };

    sauceConnectLauncher(options, function (err, sauceConnectProcess) {
        if (err) {
                console.error(chalk.red.bold('Error in launching SauceTunnel: ', err));
                return;
        }
        console.info(chalk.blue.bold(emoji.emojify(':rocket: ')  + 'SauceLabs Tunnel is launched successfully for the account: ') + chalk.yellow.bold(process.env['SAUCE_USERNAME']));

        console.info(chalk.white.bold('\n' + emoji.emojify(':octagonal_sign: ') + 'Hit ' + chalk.yellow.bgBlue.bold(' CTRL + C ') +  ' to shutdown the tunnel...'));
});
