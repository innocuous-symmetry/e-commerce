const insertAll = require('./insertAll');
const pgp = require('pg-promise')({ capSQL: true });

const parseOutput = (arr, tableName) => {
    let i = 0;
    let data;
    let cols = null

    for (let row of arr) {
        if (i == 0) {
            cols = row;
            i++;
        } else {
            if (cols == null) {
                cols = row;
            } else {
                data.concat(row);
            }
        }
    }
    
    let query = pgp.helpers.insert(data, cols, tableName);
    console.log(query);
}

parseOutput(insertAll('./data/products.csv'), 'products');