const bcrypt = require('bcrypt');
const createError = require('http-errors');
const UserModel = require('../models/UserModel');
const UserInstance = new UserModel();

module.exports = class AuthService {
    async register(data) {
        const { email, password } = data;

        try {
            const user = await UserInstance.findOneByEmail(email);
            if (user) throw createError(409, 'Email already in use');

            const response = bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    const newData = {
                        email: email,
                        password: hash
                    }

                    return UserInstance.create(newData);
                })
            })

            return response;
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
            // const match = bcrypt.compare(user.password, password, (result, err) => {
            //     if (err) throw err;
            //     return result;
            // })

            // console.log(match);
            // if (!match) throw createError(401, 'Incorrect email or password');

            console.log(user.password);

            return user;
        } catch(e) {
            throw createError(500, e);
        }
    }

    // TO IMPLEMENT: google, facebook passport strategies
}