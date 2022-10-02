const router = require('express').Router();
const RegionsService = require('../services/RegionsService');
const RegionsInstance = new RegionsService();

module.exports = (app) => {
    app.use('/regions', router);

    router.get('/', async (req, res, next) => {
        const { name } = req.query;
        
        if (name) {
            try {
                const response = await RegionsInstance.getOneByName(name);
                res.status(200).send(response);
            } catch(e) {
                next(e);
            }
        } else {
            try {
                const response = await RegionsInstance.getAll();
                res.status(200).send(response);
            } catch(e) {
                next(e);
            }
        }
    })

    router.get('/:regionid', async (req, res, next) => {
        const { regionid } = req.params;

        try {
            const response = await RegionsInstance.getOne(regionid);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.post('/', async (req, res, next) => {
        const data = req.body;

        try {
            const response = await RegionsInstance.create(data);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })
}