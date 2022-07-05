const loginRouter = require('express').Router();
const { LoginService } = require('../services/Auth');

// module.exports = loginRouter;
module.exports = (app, passport) => {
    app.use('/api/login', loginRouter);

    loginRouter.post('/', passport.authenticate('local'), async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const response = await LoginService(email, password);
            if (response) console.log(response);
        } catch(e) {
            next(e);
        }
    });
}