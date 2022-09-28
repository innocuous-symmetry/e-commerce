const router = require('express').Router();
const CartService = require('../services/CartService');
const CartServiceInstance = new CartService();

module.exports = (app) => {
    app.use('/api/cart', router);

    // logic for global cart entries
    router.get('/', async (req, res, next) => {
        const { id } = req.user;

        try {
            const response = await CartServiceInstance.getCart(id);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.post('/', async (req, res, next) => {
        const { id } = req.user;

        try {
            const response = await CartServiceInstance.create(id);
            res.status(201).send(response);
        } catch(e) {
            next(e);
        }
    })

    // logic for cart contents
    router.post('/items/:itemid', async (req, res, next) => {
        const { id } = req.user;
        const { itemid } = req.params;

        try {
            const response = await CartServiceInstance.addItem(id, itemid);
        } catch(e) {
            next(e);
        }
    })
}