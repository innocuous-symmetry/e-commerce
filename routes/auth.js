const AuthService = require('../services/AuthService');
const AuthServiceInstance = new AuthService();
const router = require('express').Router();

module.exports = (app, passport) => {
    app.use('/auth', router);

    router.post('/register', async (req, res, next) => {
        try {
            const data = req.body;
            const response = await AuthServiceInstance.register(data);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.post('/login', passport.authenticate('local'), async (req, res, next) => {
        try {
            const data = req.body;
            const user = await AuthServiceInstance.login(data);
            if (user) req.user = user;
            
            res.status(200).send(user);
        } catch(e) {
            next(e);
        }
    })

    // OAuth2 yet to be implemented
    router.get('/google', async (req, res, next) => {
        res.send("google response will go here");
    })
}