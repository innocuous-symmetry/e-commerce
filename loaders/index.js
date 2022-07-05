const passportLoader = require('./passport');
const expressLoader = require('./express');
const routes = require('../routes/API');

module.exports = async (app) => {
    // const passport = await passportLoader(app);
    const express = await expressLoader(app);
    const passport = await passportLoader(express);
    await routes(app, passport);

    app.use((err, req, res, next) => {

        const { message, status } = err;
      
        return res.status(status).send({ message });
    });
}