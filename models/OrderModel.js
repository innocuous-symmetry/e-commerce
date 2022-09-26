const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });

/**
 * TODO: conceptualize and implement order lifecycle, from not submitted,
 * to submitted/not shipped, to shipped and pending, to delivered?
**/

module.exports = class OrderModel {
    async create(userid) {
        try {
            const statement = pgp.helpers.insert(userid, null, 'orders') + 'RETURNING *';
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async update(data) {
        try {

        } catch(e) {
            throw new Error(e);
        }
    }

    async findByUser(userid) {
        try {

        } catch(e) {
            throw new Error(e);
        }
    }

    async findByOrderId(orderid) {
        try {

        } catch(e) {
            throw new Error(e);
        }
    }
}