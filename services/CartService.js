const createError = require('http-errors');
const CartModel = require('../models/CartModel');
const CartInstance = new CartModel();

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
        const item = "await CartProductInstance.create(item)";
    }
}