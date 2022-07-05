const loginRouter = require('express').Router();
const { connect } = require('../db/Pool');
const bcrypt = require('bcrypt');

loginRouter.route('/').post(async (req, res) => {
    const { email, password } = req.body;
    const client = await connect();
    
    try {
        let hash = await client.query("SELECT password FROM users WHERE email = ($1)", [email]);
        hash = hash.rows[0].password;

        const match = bcrypt.compare(password, hash);

        if (!match) res.status(403).json({ msg: "Login unsuccessful. Please try again" });
        if (match) {
            req.session.authenticated = true;
            req.session.user = { email: email, password: password }

            let fullUserProfile = await client.query("SELECT * FROM users WHERE email = ($1)", [email]);

            res.send({
                session: req.session,
                userProfile: fullUserProfile.rows[0]
            });
        }
    } catch(e) {
        await client.query("ROLLBACK");
        throw new Error(e);
    } finally {
        client.release()
        console.log("Client disconnected.");
    }
});

module.exports = loginRouter;