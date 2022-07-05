const { Pool } = require('pg');
require('dotenv').config({ path: './config.env' });

const pool = new Pool({
    connectionString: process.env.CONNECTION,
});

module.exports = {
    // text = SQL query; params = array of values to inject
    query: (text, params) => pool.query(text, params)
}