require('dotenv').config();
const express = require('express');
const loaders = require('./loaders');
const PORT = process.env.PORT || 8088;

async function start() {
    const app = express();
    loaders(app);
    
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

start();