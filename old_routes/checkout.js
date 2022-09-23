const express = require('express');
const checkoutRouter = express.Router();

checkoutRouter.route('/checkout').get((req, res) => {
    res.send('checkout?');
});

module.exports = checkoutRouter;