const glob = require('glob');
const path = require('path');

const steps = () => {
    let steps = [];
    glob.sync(
        path.join(
            process.env.CODECEPT_RELATIVE_PATH,
            '{steps/**/*.steps.*,specs/hooks/**/*.hooks.*, __specs__/hooks/**/*.hooks.*}'
        )
    ).map((file) => steps.push('./' + file));
    return steps;
};

module.exports = { steps };
