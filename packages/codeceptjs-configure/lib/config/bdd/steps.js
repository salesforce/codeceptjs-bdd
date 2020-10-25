const glob = require('glob');
const path = require('path');

const steps = () => {
    let steps = [];
    glob.sync(path.join(process.cwd(), process.env.CODECEPT_RELATIVE_PATH, '{steps/**/*.steps.js,__specs__/hooks/**/*.hooks.js}')).map((file) => steps.push(file));
    // glob.sync(path.join(process.cwd(), process.env.CODECEPT_RELATIVE_PATH, '__specs__/hooks/**/*.hooks.js')).map((file) => steps.push(file));
    return steps;
};

module.exports = { steps };
