const userRouter = require('./user');
const productsRouter = require('./products');
const registerRouter = require('./register');
const loginRouter = require('./login');

module.exports = async (app, passport) => {
    loginRouter(app, passport);
    productsRouter(app);
    registerRouter(app);
    userRouter(app);
};