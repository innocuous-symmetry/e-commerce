const express = require('express');
const cartRouter = express.Router();

cartRouter.route('/cart').get((req, res) => {
    res.send('get cart');
});

module.exports = cartRouter;