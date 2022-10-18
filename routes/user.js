const router = require('express').Router();

const UserService = require('../services/UserService');
const UserServiceInstance = new UserService();

module.exports = (app) => {
    app.use('/user', router);

    router.get('/:userId', async (req, res, next) => {
        try {
            const { userId } = req.params;
            const response = await UserServiceInstance.get({ id: userId });
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.put('/:userId', async (req, res, next) => {
        try {
            const { userId } = req.params;
            const data = req.body;
            const response = await UserServiceInstance.update({ id: userId, ...data });
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })

    router.post('/', async (req, res, next) => {
        try {
            const data = req.body;
            const response = await UserServiceInstance.insert(data);
            res.status(200).send(response);
        } catch(e) {
            next(e);
        }
    })
}