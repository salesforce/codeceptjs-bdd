const glob = require('glob');
const path = require('path');

function steps() {
  let steps = [];
  glob.sync(path.join(process.cwd(), '/**/*steps.js')).map(file => steps.push(file));
  return steps;
}

module.exports = {
  steps
};
