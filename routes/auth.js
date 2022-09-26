const router = require('express').Router();

module.exports = (app, passport) => {
    app.use('/api/auth', router);

    router.post('/register', async (req, res, next) => {
        try {

        } catch(e) {
            next(e);
        }
    })

    router.post('/login', passport.authenticate('local'), async (req, res, next) => {
        try {

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