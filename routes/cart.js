const router = require('express').Router();
const CartService = require('../services/CartService');
const CartServiceInstance = new CartService();

module.exports = (app) => {
    app.use('/api/cart', router);

    router.post('/:userId', async (req, res, next) => {
        const { userId } = req.params;

        try {
            const response = await CartServiceInstance.getCart(userId);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.put('/:userId', async (req, res, next) => {
        const { userId, data } = req.params;

        try {

        } catch(e) {
            next(e);
        }
    })
}