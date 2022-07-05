const passport = require('passport');
const LocalStrategy = require('passport-local');
const { connect } = require('../db/Pool');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        done(null, { id });
    });

    /***
    ** TO DO: FINISH CONFIGURING LOCAL STRATEGY
    ***/

    app.use(new LocalStrategy(async (email, password, done) => {
        const client = await connect();
        const account = await client.query("SELECT * FROM users WHERE email = ($1)", [email])
    }));
}