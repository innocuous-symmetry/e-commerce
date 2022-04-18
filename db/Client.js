const { Client } = require('pg');
require('dotenv').config({ path: './config.env' });

const connectionString = process.env.CONNECTION;
const client = () => {
    return new Client(connectionString);
}

module.exports = client;
