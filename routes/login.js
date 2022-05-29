const bcrypt = require('bcrypt');

const loginRouter = require('express').Router();
const client = require('../db/Client');

loginRouter.route('/').post(async (req, res) => {
    const newClient = client();
    const { email, password } = req.body;
    
    try {
        newClient.connect().then(console.log("Connection successful."));
        let hash = await newClient.query("SELECT password FROM users WHERE email = ($1)", [email]);
        hash = hash.rows[0].password;

        let match = await bcrypt.compare(password, hash);

        if (match) res.send("Login successful!");
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

module.exports = loginRouter;