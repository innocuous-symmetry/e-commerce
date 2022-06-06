const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./user');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const registerRouter = require('./register');
const loginRouter = require('./login');
const logoutRouter = require('./logout');

apiRouter.use('/users', userRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/login', loginRouter);
apiRouter.use('/logout', logoutRouter);

module.exports = apiRouter;