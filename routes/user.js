const express = require('express');
const userRouter = express.Router();

const client = require('../db/Client');

// get a list of all users, or a single user matching an email passed in as a query param
userRouter.route('/').get(async (req, res) => {
    const newClient = client();
    const { email } = req.query;

    if (!email) {
        try {
            await newClient.connect()
            .then(console.log('Connection successful.'));
    
            const results = await newClient.query("SELECT * FROM users");
            res.send(results.rows);
        } catch(e) {
            console.log(e);
        } finally {
            await newClient.end();
            console.log("Client disconnected.");
        }
    } else {
        try {
            await newClient.connect()
            .then(console.log("Connection successful."));
    
            const result = await newClient.query(("SELECT * FROM users WHERE email = ($1)"), [email])
            res.send(result.rows);
        } catch(e) {
            console.log(e);
        } finally {
            await newClient.end()
            .then(console.log("Client disconnected."));
        }
    }
});

// post a new user to the database
userRouter.route('/').post(async (req, res) => {
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