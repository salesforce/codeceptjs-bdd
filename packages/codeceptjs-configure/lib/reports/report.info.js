const csvParse = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');

async function parse(options, callback) {
    if (!options.pathToHtmlReportDir) {
        throw new Error('"pathToHtmlReportDir" must be defined.');
    }

    // read behaviors
    const behaviors = await _parseCsv(_getFilePath(options, 'behaviors.csv'), callback);

    // read test suites
    const suites = await _parseCsv(_getFilePath(options, 'suites.csv'), callback);

    // read categories
    const categoriesJson = _getFilePath(options, 'categories.json');
    const categories = JSON.parse(await fs.readFileSync(categoriesJson));

    // read suitesJson
    const suitesJsonFilePath = _getFilePath(options, 'suites.json');
    const suitesJson = JSON.parse(await fs.readFileSync(suitesJsonFilePath));

    // read environments
    const environmentJson = path.join(options.pathToHtmlReportDir, 'widgets', 'environment.json');
    const environments = JSON.parse(await fs.readFileSync(environmentJson));

    return {
        behaviors,
        suites,
        suitesJson,
        categories,
        environments,
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
