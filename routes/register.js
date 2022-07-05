const registerRouter = require('express').Router();
const { connect } = require('../db/Pool');
const bcrypt = require('bcrypt');

registerRouter.route('/').post(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const input = "INSERT INTO users (first_name, last_name, email, password) values ($1, $2, $3, $4)";

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const client = await connect();

    try {
        await client.query("BEGIN");
        await client.query(input, [firstName, lastName, email, hash]);
        await client.query("COMMIT");
        res.sendStatus(200);
    } catch(e) {
        await client.query("ROLLBACK");
        throw new Error(e);
    } finally {
        client.release();
        console.log("Client disconnected.");
    }
});

module.exports = registerRouter;