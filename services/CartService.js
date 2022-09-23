const createError = require('http-errors');
const CartModel = require('../models/CartModel');
const CartInstance = new CartModel();

module.exports = class CartService {
    async create(userid) {
        const result = await CartInstance.create(userid);
        if (!result) throw createError();
    }
}