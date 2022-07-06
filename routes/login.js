const loginRouter = require('express').Router();
const { LoginService } = require('../services/Auth');

module.exports = (app, passport) => {
    app.use('/api/login', loginRouter);

    app.use('/api/login', passport.authenticate('local'));

    loginRouter.post('/', async (req, res, next) => {
        console.log('login called');
        const { email, password } = req.body;

        /**
         * @function LoginService
         * @returns: object, with keys:
         * session: session object
         * userProfile: postgres response from query
         * 
         * session object:
         * authenticated: boolean,
         * user: { email, password }
         */

        try {
            const data = await LoginService(email, password);
            const { session, userProfile } = data;

            res.status(200).send({ session, userProfile });
        } catch(e) {
            next(e);
        }
    })
}