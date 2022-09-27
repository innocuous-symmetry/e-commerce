const createError = require('http-errors');
const RegionsModel = require('../models/RegionsModel');
const RegionInstance = new RegionsModel();

module.exports = class RegionsService {
    async getAll() {
        try {
            const result = await RegionInstance.selectAll();
            if (!result) throw createError(404, "No region entries found.");
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }
    
    async getOne(id) {
        try {
            const result = await RegionInstance.getOne(id);
            if (!result) throw createError(404, "No region entries found.");
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getOneByName(name) {
        try {
            const result = await RegionInstance.getOneByName(name);
            if (!result) throw createError(404, "No region entries found.");
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }

    async create(data) {
        try {
            const result = await RegionInstance(data);
            if (!result) throw createError(401, "Unauthorized action");
            return result;
        } catch(e) {
            throw new Error(e);
        }
    }
}