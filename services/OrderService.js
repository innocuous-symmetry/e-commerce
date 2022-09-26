const OrderModel = require('../models/OrderModel');
const OrderInstance = new OrderModel();

module.exports = class OrderService {
    async create(userid) {
        const result = await OrderInstance.create(userid);
        if (!result) throw new Error();
    }
}