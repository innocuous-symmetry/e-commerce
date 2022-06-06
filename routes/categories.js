const express = require('express');
const categoriesRouter = express.Router();
const client = require('../db/Client');

// get all categories
categoriesRouter.route('/').get(async (req, res) => {
    const newClient = client();

    try {
        newClient.connect().then(console.log("Connection successful."));

        const result = await newClient.query("SELECT category, count(*) FROM products GROUP BY category");
        res.send(result.rows);
    } catch(e) {
        console.log(e);
    } finally {
        newClient.end()
        .then(console.log("Client disconnected."));
    }
})

// get category info by params
categoriesRouter.route('/:catName').get(async (req, res) => {
    const { catName } = req.params;
    const newClient = client();

    try {
        newClient.connect().then(console.log("Connection successful."));
        const result = await newClient.query((
            "SELECT * FROM products WHERE category = ($1)"
        ), [catName]);

        res.send(result.rows);
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
    
})

module.exports = categoriesRouter;