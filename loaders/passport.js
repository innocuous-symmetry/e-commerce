const passport = require('passport');
const LocalStrategy = require('passport-local');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    // });

    // passport.deserializeUser((id, done) => {
    //     done(null, { id });
    // });

    /***
    ** TO DO: FINISH CONFIGURING LOCAL STRATEGY

    app.use(new LocalStrategy(async (email, password, done) => {
        const newClient = client();
        const account = await newClient.query("SELECT * FROM users WHERE email = ($1)", [email])
    }));

    ***/
}