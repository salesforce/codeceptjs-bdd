const csvParse = require('csv-parse/lib/sync');
const fs = require('fs');
const sh = require('shelljs');
const path = require('path');

async function parse(options, callback) {
    const reportOutputDir = path.join(process.cwd(), '.report-html');

    sh.exec(`allure generate ${path.join(process.cwd(), options.reportOutputDir)} --clean -o ${reportOutputDir}`);

    const behaviorsCsv = _getFilePath({ reportOutputDir }, 'behaviors.csv');
    const suitesCsv = _getFilePath({ reportOutputDir }, 'suites.csv');

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
