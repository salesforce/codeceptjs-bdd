const glob = require('glob');
const path = require('path');

const steps = (pathToSteps) => {
    let steps = [];
    if (!pathToSteps) {
        pathToSteps = '{steps/**/*.steps.*,specs/hooks/**/*.hooks.*, __specs__/hooks/**/*.hooks.*}';
    }

    glob.sync(path.join(process.env.CODECEPT_RELATIVE_PATH, pathToSteps)).map((file) => steps.push('./' + file));
    return steps;
};

module.exports = { steps };
