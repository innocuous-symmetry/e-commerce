const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartModel {
    async create(userid) {
        try {
            const statement = pgp.helpers.insert(userid, null, 'cart') + 'RETURNING *';
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async findOneByUserId(userid) {
        try {
            const statement = `SELECT * FROM cart WHERE userid = $1`;
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
            const statement = `SELECT * FROM cart WHERE id = $1`;
            const filter = [cartid];
            const result = await db.query(statement, filter);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async updateCart(data) {
        try {
            
        } catch(e) {
            throw new Error(e);
        }
    }

    async insertNewItem(data) {
        try {
            
        } catch(e) {
            throw new Error(e);
        }
    }
}