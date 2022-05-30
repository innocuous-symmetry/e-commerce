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

        const match = bcrypt.compare(password, hash);

        if (!match) res.status(403).json({ msg: "Login unsuccessful. Please try again" });
        if (match) {
            req.session.authenticated = true;
            req.session.user = { email: email, password: password }

            res.send(req.session);
        }
    } catch(e) {
        console.log(e);
    } finally {
        await newClient.end()
        .then(console.log("Client disconnected."));
    }
});

module.exports = loginRouter;