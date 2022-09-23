const db = require('../db/Pool');

module.exports = class ProductModel {
    async selectAll() {
        try {
            const q = "SELECT * FROM product;";
            const result = await db.query(q);
            if (result.rows.length) return result.rows;
            return [];
        } catch(e) {
            throw new Error(e);
        }
    }

    async findOne(productid) {
        try {
            const q = `SELECT * FROM product WHERE id = $1;`;
            const filter = [productid];
            const result = await db.query(q, filter);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }
}