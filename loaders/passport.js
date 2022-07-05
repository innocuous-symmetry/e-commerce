const passport = require('passport');
const LocalStrategy = require('passport-local');
const { LoginService } = require('../services/Auth');

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

    passport.use(new LocalStrategy(async (email, password, done) => {
        try {
            const response = await LoginService(email, password);
            return done(null, response);
        } catch(e) {
            return done(e);
        }
    }));

    return passport;
}