const router = require('express').Router();
const CategoryService = require('../services/CategoryService');
const CategoryInstance = new CategoryService();

module.exports = (app) => {
    app.use('/category', router);

    router.get('/', async (req, res, next) => {
        const { name } = req.query;

        if (name) {
            try {
                const response = await CategoryInstance.getByName(name);
                res.status(200).send(response);
            } catch(e) {
                next(e);
            }
        } else {
            try {
                const response = await CategoryInstance.getAll();
                res.status(200).send(response);
            } catch(e) {
                next(e);
            }
        }
    })

    router.get('/:productid', async (req, res, next) => {
        const { productid } = req.params;

        try {
            const response = await CategoryInstance.getById(productid);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.post('/', async (req, res, next) => {
        const data = req.body;

        try {
            const response = await CategoryInstance.create(data);
            res.status(201).send(response);
        } catch(e) {
            next(e);
        }
    })
}