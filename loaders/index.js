const passportLoader = require('./passport');
const expressLoader = require('./express');
const routes = require('../routes/API');

module.exports = async (app) => {
    const express = await expressLoader(app);
    const passport = await passportLoader(express);
    await routes(app, passport);

    console.log('loaders called');
}