const express = require('express');
const userRouter = express.Router();

const client = require('../db/Client');

// get a list of all users
userRouter.route('/users').get(async (req, res) => {
    const newClient = client();

    try {
        await newClient.connect();
        console.log('Connection successful.');

        const results = await newClient.query("SELECT * FROM users");
        res.send(results.rows);
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end();
        console.log("Client disconnected.");
    }
});

// post a new user to the database
userRouter.route('/users').post(async (req, res) => {
    const { name, email } = req.body;
    const newClient = client();

    try {
        await newClient.connect()
        .then(console.log("Connection successful."));

        await newClient.query(("INSERT INTO users (name, email) VALUES ($1, $2)"), [name, email])
        .then(res.sendStatus(204));
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

module.exports = userRouter;