const db = require('../db/Pool');
const pgp = require('pg-promise')({ capSQL: true });
const CartModel = require('./CartModel');
const ProductModel = require('./ProductModel');

const CartInstance = new CartModel();
const ProductInstance = new ProductModel();

// TODO: ensure all methods point to the table 'products_carts' rather than 'products_orders'
module.exports = class CartProductModel {
    async _create(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'products_orders') + 'RETURNING *';
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async create(productid) {
        try {
            const data = ProductInstance.findOne(productid);
            const statement = pgp.helpers.insert(data, null, 'products_carts') + 'RETURNING *';
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async find(cartid) {
        try {
            const statement = "SELECT * FROM products_orders WHERE cartid = $1";
            const values = [cartid];
            const result = await db.query(statement, values);
            if (result.rows.length) return result.rows[0];
            return [];
        } catch(e) {
            throw new Error(e);
        }
    }

    async update(data) {
        const { id } = data;

        try {
            const condition = pgp.as.format("WHERE id = $1", [id]);
            const statement = pgp.helpers.update(data, null, 'products_orders') + condition;
            const result = await db.query(statement);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }

    async delete(productid) {
        try {
            const statement = "DELETE FROM products_orders WHERE id = $1 RETURNING *";
            const values = [productid];
            const result = await db.query(statement, values);
            if (result.rows.length) return result.rows[0];
            return null;
        } catch(e) {
            throw new Error(e);
        }
    }
}