const express = require('express');
const productsRouter = express.Router();
const { connect } = require('../db/Pool');

module.exports = (app) => {
    app.use('/api/products', productsRouter);
    
    // route to get all products
    productsRouter.route('/').get(async (req, res) => {
        const client = await connect();
    
        try {
            await client.query("BEGIN");
            const result = await client.query("SELECT * FROM products");
            await client.query("COMMIT");
            if (result) res.send(result.rows);
        } catch(e) {
            await client.query("ROLLBACK");
            throw new Error(e);
        } finally {
            client.release();
            console.log("Client disconnected.");
        }
    });
    
    // route to get a product by id
    productsRouter.route('/:id').get(async (req, res) => {
        const { id } = req.params;
        const client = await connect();
    
        try {
            await client.query("BEGIN");
            const result = await client.query(("SELECT * FROM products WHERE id = ($1)"), [id]);
            await client.query("COMMIT");
            if (result) res.send(result.rows[0]);
        } catch(e) {
            await client.query("ROLLBACK");
            throw new Error(e);
        } finally {
            client.release()
            console.log("Client disconnected.");
        }
    });
    
    // post a product from req.body
    productsRouter.route('/').post(async (req, res) => {
        const { name, description, category, categoryID, price } = req.body;
        const input = `
            INSERT INTO products (name, description, category, category_id, price)
            VALUES ($1, $2, $3, $4, $5)
        `
    
        const client = await connect();
    
        try {
            await client.query("BEGIN");
            await client.query(input, [name, description, category, categoryID, price]);
            await client.query("COMMIT");
            res.sendStatus(204);
        } catch(e) {
            await client.query("ROLLBACK");
            throw new Error(e);
        } finally {
            await client.release()
            .then(console.log("Client disconnected."));
        }
    });
}