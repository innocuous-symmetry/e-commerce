const loginRouter = require('express').Router();
const { LoginService } = require('../services/Auth');

module.exports = (app, passport) => {
    app.use('/api/login', loginRouter);
    // loginRouter.use(passport.authenticate('local'));

    loginRouter.route('/').post(async (req, res, next) => {
        console.log('login post got called');
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
            res.status(200).send(data);
        } catch(e) {
            next(e);
        }
    })
}