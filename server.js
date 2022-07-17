require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8088;

const app = express();
const loaders = require('./loaders');

async function start() {
    loaders(app);
    
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

start();