const express = require('express');
const userRouter = express.Router();

const client = require('../db/Client');

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

userRouter.route('/users').post(async (req, res) => {
    const body = ['Mikayla'];
    const newClient = client();

    try {
        await newClient.connect()
        .then(console.log("Connection successful."));

        await newClient.query(("INSERT INTO users (name) VALUES ('mikayla')"))
        .then(res.sendStatus(204));
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

module.exports = userRouter;