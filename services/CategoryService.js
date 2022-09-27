const createError = require('http-errors');
const CategoryModel = require('../models/CategoryModel');
const CategoryInstance = new CategoryModel();

module.exports = class CategoryService {
    async getAll() {
        const result = await CategoryInstance.getAll();
        if (!result) throw createError(404, "Resource not found.");
        return result;
    }

    async getById(id) {
        const result = await CategoryInstance.getById(id);
        if (!result) throw createError(404, "Resource not found.");
        return result;
    }
    
    async getByName(name) {
        const result = await CategoryInstance.getByName(name);
        if (!result) throw createError(404, "Resource not found.");
        return result;
    }

    async create(data) {
        const result = await CategoryInstance.insertOne(data);
        if (!result) throw createError(404, "Resource not found.");
        return result;
    }
}