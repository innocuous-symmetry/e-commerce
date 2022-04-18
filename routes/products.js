const express = require('express');
const productsRouter = express.Router();

productsRouter.route('/products').get((req, res) => {
    res.send('all products');
});

module.exports = productsRouter;