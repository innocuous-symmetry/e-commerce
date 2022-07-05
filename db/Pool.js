const { Pool } = require('pg');
require('dotenv').config({ path: './config.env' });

const pool = new Pool({ connectionString: process.env.CONNECTION });

module.exports = {
    // text = SQL query; params = array of values to inject
    connect: async () => await pool.connect(),
    query: (text, params) => pool.query(text, params),
    end: async () => await pool.end()
}