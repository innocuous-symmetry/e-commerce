const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const AuthService = require('../services/AuthService');
const AuthInstance = new AuthService();

module.exports = async (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        process.nextTick(() => {
            done(null, user);
        })
    });

    passport.deserializeUser((user, done) => {
        process.nextTick(async () => {
            const foundUser = await AuthInstance.login(user);
            return foundUser ? done(null, foundUser) : done(null, false);
        })
    });

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
        try {
            const response = await AuthInstance.login({ email: email, password: password });
            return done(null, response);
        } catch(e) {
            return done(e);
        }
    }));

    return passport;
}