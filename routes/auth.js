const AuthService = require('../services/AuthService');
const AuthServiceInstance = new AuthService();
const router = require('express').Router();

module.exports = (app, passport) => {
    app.use('/api/auth', router);

    router.get('/', async (req, res, next) => {
        try {
            res.send('auth get response');
        } catch(e) {
            next(e);
        }
    })

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
            const response = await AuthServiceInstance.login(data);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.get('/google', async (req, res, next) => {
        try {

        } catch(e) {
            next(e);
        }
    })
}