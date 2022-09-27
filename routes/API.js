const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const categoryRouter = require('./category');
const regionsRouter = require('./regions');
const orderRouter = require('./orders');
const cartRouter = require('./cart');

module.exports = (app, passport) => {
    authRouter(app, passport);
    userRouter(app);
    productRouter(app);
    categoryRouter(app);
    regionsRouter(app);
    orderRouter(app);
    cartRouter(app);
}