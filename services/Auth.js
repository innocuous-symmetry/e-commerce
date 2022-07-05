const { connect } = require('../db/Pool');
const bcrypt = require('bcrypt');

async function LoginService(email, password) {
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

            return {
                session: req.session,
                userProfile: fullUserProfile.rows[0]
            }
        }
    } catch(e) {
        await client.query("ROLLBACK");
        throw new Error(e);
    } finally {
        client.release();
        console.log("Client disconnected.");
    }
}

async function RegisterService(firstName, lastName, email, password) {
    const input = "INSERT INTO users (first_name, last_name, email, password) values ($1, $2, $3, $4)";

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const client = await connect();
    let success;

    try {
        await client.query("BEGIN");
        await client.query(input, [firstName, lastName, email, hash]);
        await client.query("COMMIT");

        success = true;
    } catch(e) {
        await client.query("ROLLBACK");
        console.log(e);
        success = false;
    } finally {
        client.release();
        console.log("Client disconnected.");
        return success;
    }
}

module.exports = { LoginService, RegisterService }