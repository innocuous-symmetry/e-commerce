const passportLoader = require('./passport');
const expressLoader = require('./express');

module.exports = async (app) => {
    const passport = await passportLoader(app);
    const express = await expressLoader(app);
}