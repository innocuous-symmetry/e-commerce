const loginRouter = require('express').Router();
const { LoginService } = require('../services/Auth');

module.exports = (app, passport) => {
    app.use(
        loginRouter.post('/api/login', passport.authenticate("local"), async (req, res, next) => {
            const { email, password } = req.body;

            /**
             * @function LoginService
             * @params email: string, password: string
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

                req.session.id = session.id;
                res.status(200).send({ session, userProfile });
            } catch(e) {
                next(e);
            }
        })
    );
}