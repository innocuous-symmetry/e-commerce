const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./user');
const productsRouter = require('./products');
const registerRouter = require('./register');

apiRouter.use('/users', userRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/register', registerRouter);

module.exports = apiRouter;