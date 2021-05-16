const csvParse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');

async function parse(options, callback) {
    if (!options.pathToHtmlReportDir) {
        throw new Error('"pathToHtmlReportDir" must be defined.');
    }

    const behaviorsCsv = _getFilePath(options, 'behaviors.csv');
    const suitesCsv = _getFilePath(options, 'suites.csv');
    const categoriesJson = _getFilePath(options, 'categories.json');
    const input = await fs.readFileSync(categoriesJson);

    return {
        behaviors: await _parseCsv(behaviorsCsv, callback),
        suites: await _parseCsv(suitesCsv, callback),
        categories: JSON.parse(input),
    };
}

function _getFilePath(options, csvFile) {
    return path.join(options.pathToHtmlReportDir, 'data', csvFile);
}

async function _parseCsv(csvFile) {
    const input = await fs.readFileSync(csvFile);
    return csvParse(input, {
        columns: true,
        skip_empty_lines: true,
    });
}

module.exports = { parse };
