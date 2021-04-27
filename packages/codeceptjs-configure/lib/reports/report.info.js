const csvParse = require('csv-parse/lib/sync');
const fs = require('fs');
const sh = require('shelljs');
const path = require('path');

async function parse(options, callback) {
    let destinationDir = 'report-html';

    if (options.destinationDir) {
        destinationDir = path.join(options.destinationDir, destinationDir);
    }

    sh.exec(`allure generate ${options.reportOutputDir} --clean -o ${destinationDir}`);

    const behaviorsCsv = _getFilePath({ destinationDir }, 'behaviors.csv');
    const suitesCsv = _getFilePath({ destinationDir }, 'suites.csv');

    return {
        behaviors: await _parseCsv(behaviorsCsv, callback),
        suites: await _parseCsv(suitesCsv, callback),
    };
}

async function _parseCsv(csvFile) {
    const input = await fs.readFileSync(csvFile);
    return csvParse(input, {
        columns: true,
        skip_empty_lines: true,
    });
}

function _getFilePath(options, csvFile) {
    return path.join(options.reportOutputDir, 'data', csvFile);
}

module.exports = { parse };
