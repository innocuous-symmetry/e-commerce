const passportLoader = require('./passport');
const expressLoader = require('./express');
const routes = require('../routes/API');

module.exports = async (app) => {
    const express = await expressLoader(app);
    await passportLoader(express);
    await routes(app);

    console.log('loaders called');
}