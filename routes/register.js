const bcrypt = require('bcrypt');

const registerRouter = require('express').Router();
const client = require('../db/Client');

registerRouter.route('/').post(async (req, res) => {
    const newClient = client();
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    try {
        newClient.connect().then(console.log("Connection successful."));
        await newClient.query(
            "INSERT INTO users (first_name, last_name, email, password) values ($1, $2, $3, $4)",
            [firstName, lastName, email, hash]);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

module.exports = registerRouter;