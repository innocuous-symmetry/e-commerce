const createError = require('http-errors');
const CartModel = require('../models/CartModel');
const OrderModel = require('../models/OrderModel');
const CartProductModel = require('../models/CartProductModel');

const CartInstance = new CartModel();
const OrderInstance = new OrderModel();
const CartProductInstance = new CartProductModel();

module.exports = class CartService {
    async create(userid) {
        const result = await CartInstance.create(userid);
        if (!result) throw createError();
    }

    async getCart(userid) {
        const result = await CartInstance.findOneByUserId(userid);
    }

    async addItem(userid, item) {
        const cart = await CartInstance.findOneByUserId(userid);
        const item = await CartProductInstance.create(item);
    }

    async removeItem(userid, item) {

    }
    
    async checkout() {

    }
}