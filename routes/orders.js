const router = require('express').Router();

module.exports = (app) => {
    app.use('/orders', router);

    router.get('/', async (req, res, next) => {
        try {
            
        } catch(e) {
            next(e);
        }
    })

    router.get('/:id', async (req, res, next) => {
        try {

        } catch(e) {
            next(e);
        }
    })
}