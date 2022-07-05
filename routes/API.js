const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/users', require('./user'));
apiRouter.use('/products', require('./products'));
apiRouter.use('/register', require('./register'));
apiRouter.use('/login', require('./login'));
apiRouter.use('/pool-experiment', require('./_experimental'));

module.exports = apiRouter;