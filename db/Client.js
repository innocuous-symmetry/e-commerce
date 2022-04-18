const { Client } = require('pg');
require('dotenv').config({ path: '../config.env' });

const connectionString = 'postgres://mikayladobson@localhost/ecommerce_041822';
const client = () => {
    return new Client(connectionString);
}

module.exports = client;
