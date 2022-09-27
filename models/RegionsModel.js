const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class RegionsModel {
    async selectAll() {
        try {
            const statement = "SELECT * FROM region";
            const result = await db.query(statement);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getOne(regionid) {
        try {
            const statement = "SELECT * FROM region WHERE id = $1";
            const values = [regionid]
            const result = await db.query(statement, values);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    // protected
    async create(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'region') + 'RETURNING *';
            const result = await db.query(statement);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }
}