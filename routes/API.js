const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const orderRouter = require('./order');
const cartRouter = require('./cart');

module.exports = async (app, passport) => {
    authRouter(app, passport);
    userRouter(app);
    productRouter(app);
    orderRouter(app);
    cartRouter(app);
}