const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CategoryModel {
    async getAll() {
        try {
            const statement = "SELECT * FROM category";
            const result = await db.query(statement);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getById(id) {
        try {
            const statement = "SELECT * FROM category WHERE id = $1";
            const values = [id];
            const result = await db.query(statement, values);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async getByName(name) {
        try {
            const statement = "SELECT * FROM category WHERE name = $1";
            const values = [name];
            const result = await db.query(statement, values);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async insertOne(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'category') + "RETURNING *";
            const result = await db.query(statement);
            if (result.rows.length) return result.rows;
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }
}