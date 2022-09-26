const passportLoader = require('./passport');
const expressLoader = require('./express');
const routes = require('../routes/API');
const swagger = require('./swagger');

module.exports = async (app) => {
    const express = await expressLoader(app);
    const passport = await passportLoader(express);
    await routes(app, passport);
    await swagger(app);

    console.log('loaders called');
}