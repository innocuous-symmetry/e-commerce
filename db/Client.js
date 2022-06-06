const { Client, Pool } = require('pg');
require('dotenv').config({ path: './config.env' });

const connectionString = process.env.CONNECTION;

const pool = new Pool(connectionString);

const client = () => {
    return new Client(connectionString);
}

module.exports = { client, pool };
