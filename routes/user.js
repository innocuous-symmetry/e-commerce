const express = require('express');
const userRouter = express.Router();

userRouter.route('/users').get((req, res) => {
    res.send('users router');
});

module.exports = userRouter;