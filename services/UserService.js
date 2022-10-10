const createError = require('http-errors');
const UserModel = require('../models/UserModel');
const UserInstance = new UserModel();

module.exports = class UserService {
    async get(data) {
        const { id } = data;

        try {
            const user = await UserInstance.findOneById(id);
            if (!user) throw createError(404, 'User not found');
            return user;
        } catch(e) {
            throw new Error(e);
        }
    }

    async update(data) {
        try {
            const user = await UserInstance.update(data);
            return user;
        } catch(e) {
            throw new Error(e);
        }
    }

    async insert(data) {
        try {
            const user = await UserInstance.create(data);
        } catch(e) {
            next(e);
        }
    }
}