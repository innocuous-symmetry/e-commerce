const router = require('express').Router();
const ProductService = require('../services/ProductService');
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
    app.use('/api/product', router);

    router.get('/', async (req, res, next) => {
        try {
            const response = await ProductServiceInstance.getAll();
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.get('/:productId', async(req, res, next) => {
        const { productId } = req.params;

        try {
            const response = await ProductServiceInstance.getOne(productId);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })
}