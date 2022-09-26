const bcrypt = require('bcrypt');
const createError = require('http-errors');
const UserModel = require('../models/UserModel');
const UserInstance = new UserModel();

module.exports = class AuthService {
    async register(data) {
        const { email } = data;

        try {
            const user = await UserInstance.findOneById(email);
            if (user) {
                throw createError(409, 'Email already in use');
            }

            return await UserInstance.create(data);
        } catch(e) {
            throw new Error(e);
        }
    }

    // yet to be implemented
    async login(data) {
        const { email, password } = data;

        try {
            const user = await UserInstance.findOneByEmail(email);
            if (!user) throw createError(401, 'Incorrect email or password');

            const match = await bcrypt.compare(user.password, password);
            if (!match) throw createError(401, 'Incorrect email or password');

            return user;
        } catch(e) {
            throw createError(500, e);
        }
    }

    // TO IMPLEMENT: google, facebook passport strategies
}