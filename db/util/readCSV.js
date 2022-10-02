const { readFileSync } = require('fs');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = (path, tableName) => {
    const arr = readFileSync(path)
        .toString()
        .split('\n')
        .map(s => s.trim())
        .map(s => s.split(',').map(s => s.trim()));

    let data = [];
    let queries = [];
    let cols;

    for (let row of arr) {
        if (!cols) {
            cols = row;
        } else {
            let formattedData = {};
            for (let j = 0; j < row.length; j++) {
                const key = cols[j];
                const value = row[j];
                formattedData[key] = value;
            }

            data.push(formattedData);
        }
    }

    for (let each of data) {
        queries.push(pgp.helpers.insert(each, cols, tableName));
    }

    return queries;
}
