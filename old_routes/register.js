const registerRouter = require('express').Router();
const { RegisterService } = require('../services/Auth');

// module.exports = registerRouter;
module.exports = (app) => {
    app.use('/api/register', registerRouter);
    
    registerRouter.route('/').post(async (req, res, done) => {
        const { firstName, lastName, email, password } = req.body;
        try {
            const response = await RegisterService(firstName, lastName, email, password);
            if (response) res.sendStatus(200);
        } catch(e) {
            done(e);
        }
    });
}