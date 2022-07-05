const loginRouter = require('express').Router();
const { connect } = require('../db/Pool');
const { LoginService } = require('../services/Auth');
const bcrypt = require('bcrypt');

loginRouter.post('/', passport.authenticate('local'), async (req, res, next) => {
    try {
        const data = req.body;
        const response = await LoginService(data);
        if (response) res.status(200).send(response);
    } catch(e) {
        next(e);
    }
});

module.exports = loginRouter;