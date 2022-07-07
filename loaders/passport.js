const passport = require('passport');
const LocalStrategy = require('passport-local');
const { LoginService } = require('../services/Auth');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        process.nextTick(() => {
            done(null, user.id);
        })
    });

    passport.deserializeUser((user, done) => {
        process.nextTick(async () => {
            const user = await LoginService({ email: user.email, password: user.password });
            return (user) ? done(null, user) : done(null, false);
        })
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try {
            const response = await LoginService({ email: email, password: password });
            return done(null, response);
        } catch(e) {
            return done(e);
        }
    }));

    return passport;
}