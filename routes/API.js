const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./user');
const productsRouter = require('./products');
const registerRouter = require('./register');
const loginRouter = require('./login');

apiRouter.use('/users', userRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/login', loginRouter);

module.exports = apiRouter;