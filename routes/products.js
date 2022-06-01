const express = require('express');
const productsRouter = express.Router();

const client = require('../db/Client');

// route to get all products
productsRouter.route('/').get(async (req, res) => {
    const newClient = client();

    try {
        newClient.connect()
        .then(console.log('Success'));
        const result = await newClient.query("SELECT * FROM products");
        res.send(result.rows);
    } catch(e) {
        console.log(e);
    } finally {
        newClient.end()
        .then(console.log("Client disconnected."));
    }
});

// route to get a product by id
productsRouter.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const newClient = client();

    try {
        newClient.connect().then(console.log("Connection successful."));
        const result = await newClient.query(("SELECT * FROM products WHERE id = ($1)"), [id]);
        res.send(result.rows[0]);
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

// post a product from req.body
productsRouter.route('/').post(async (req, res) => {
    const newClient = client();
    const { name, description, category, categoryID } = req.body;

    try {
        newClient.connect((err) => {
            if (err) {
                throw err;
            } else {
                console.log("Connection successful.")
            }
        });

        await newClient.query(("INSERT INTO products (name, description, category, category_id) VALUES ($1, $2, $3, $4)"), [name, description, category, categoryID]);
        res.sendStatus(204);
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

module.exports = productsRouter;