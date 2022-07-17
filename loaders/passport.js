const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { LoginService } = require('../services/Auth');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        process.nextTick(() => {
            done(null, user);
        })
    });

    passport.deserializeUser((user, done) => {
        process.nextTick(async () => {
            const user = await LoginService(user.email, user.password);
            return (user) ? done(null, user) : done(null, false);
        })
    });

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
        try {
            const response = await LoginService(email, password);
            return done(null, response);
        } catch(e) {
            return done(e);
        }
    }));

    return passport;
}