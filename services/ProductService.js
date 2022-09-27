const createError = require('http-errors');
const ProductModel = require('../models/ProductModel');
const ProductInstance = new ProductModel();

module.exports = class ProductService {
    async getAll() {
        try {
            const result = await ProductInstance.selectAll();
            if (!result) throw createError(404, 'No products found.');
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getOne(id) {
        try {
            const result = await ProductInstance.findOne(id);
            if (!result) throw createError(404, 'No products found.');
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getOneByName(name) {
        try {
            const result = await ProductInstance.findOneByName(name);
            if (!result) throw createError(404, 'No products found.');
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }
}