const { readFileSync } = require('fs');

// insertFromCSV('./data/products.csv');

module.exports = (path) => {
    return readFileSync(path)
        .toString()
        .split('\n')
        .map(s => s.trim())
        .map(s => s.split(',').map(s => s.trim()));
}