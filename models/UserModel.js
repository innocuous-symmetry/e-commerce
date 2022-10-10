const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class UserModel {
    async create(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'users') + 'RETURNING *';
            const result = await db.query(statement);

            if (result.rows.length) {
                return result.rows[0];
            }

            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async update(data) {
        try {
            const { id, ...params } = data;

            const condition = pgp.as.format('WHERE id = ${id} RETURNING *', { id });
            const statement = pgp.helpers.update(params, null, 'users') + condition;
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findOneById(id) {
        try {
            const statement = `SELECT * FROM users WHERE id = $1`;
            const values = [id];
            const result = await db.query(statement, values);

            if (result.rows?.length) {
                return result.rows[0];
            }

            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findOneByEmail(email) {
        try {
            const statement = 'SELECT * FROM users WHERE email = $1';
            const values = [email];
            const result = await db.query(statement, values);

            if (result.rows.length) {
                return result.rows[0];
            }

            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async createFromSupabase(data) {
        try {
            const statement = '';
            const result = await db.query(statement);

            if (result.rows.length) {
                return result.rows[0];
            }

            return null;
        } catch(e) {
            throw new Error(e);
        }
    }
}