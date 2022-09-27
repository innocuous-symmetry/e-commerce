const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const regionsRouter = require('./regions');
const orderRouter = require('./orders');
const cartRouter = require('./cart');

module.exports = (app, passport) => {
    authRouter(app, passport);
    userRouter(app);
    productRouter(app);
    regionsRouter(app);
    orderRouter(app);
    cartRouter(app);
}