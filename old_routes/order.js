const express = require('express');
const orderRouter = express.Router();

orderRouter.route('/orders').get((req, res) => {
    res.send('get orders');
});

module.exports = orderRouter;