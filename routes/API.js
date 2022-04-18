const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./user');
const productsRouter = require('./products');

apiRouter.use('/users', userRouter);
apiRouter.use('/products', productsRouter);

module.exports = apiRouter;