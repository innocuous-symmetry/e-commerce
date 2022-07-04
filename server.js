const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8088;

const loaders = require('./loaders');

async function start() {
    loaders(app);

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

start();

module.exports = app;