const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartModel {
    async create(userid) {
        try {
            const statement = pgp.helpers.insert(userid, null, 'carts') + 'RETURNING *';
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findOneByUserId(userid) {
        try {
            const statement = `SELECT * FROM carts WHERE userid = $1`;
            const filter = [userid];
            const result = await db.query(statement, filter);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findOneByCartId(cartid) {
        try {
            const statement = `SELECT * FROM carts WHERE id = $1`;
            const filter = [cartid];
            const result = await db.query(statement, filter);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }
}