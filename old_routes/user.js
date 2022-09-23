const userRouter = require('express').Router();
const { connect } = require('../db/Pool');

module.exports = (app) => {
    app.use('/api/user', userRouter);
    
    // get a list of all users, or a single user matching an email passed in as a query param
    userRouter.route('/').get(async (req, res) => {
        const { email } = req.query;
        const client = await connect()
        .then(console.log('Connection successful.'))
        .catch(e => console.log(e));
    
        if (!email) {
            try {
                await client.query("BEGIN");
                const results = await client.query("SELECT * FROM users");
                await client.query("COMMIT");
                if (results) res.send(results.rows);
            } catch(e) {
                await client.query('ROLLBACK');
                throw new Error(e);
            } finally {
                await client.release();
                console.log("Client disconnected.");
            }
        } else {
            try {
                await client.query("BEGIN");
                const result = await client.query(("SELECT * FROM users WHERE email = ($1)"), [email])
                await client.query("COMMIT");
                if (result) res.send(result.rows);
            } catch(e) {
                await client.query('ROLLBACK');
                throw new Error(e);
            } finally {
                await client.release();
                console.log("Client disconnected.");
            }
        }
    });
    
    // post a new user to the database
    userRouter.route('/').post(async (req, res) => {
        const { name, email } = req.body;
        const client = await connect()
        .then(console.log('Connection successful.'));
        const input = "INSERT INTO users (name, email) VALUES ($1, $2)";
    
        try {
            await client.query("BEGIN");
            await client.query(input, [name, email]);
            await client.query("COMMIT");
            res.sendStatus(200);
        } catch(e) {
            await client.query('ROLLBACK');
            throw new Error(e);
        } finally {
            await client.release();
            console.log("Client disconnected.");
        }
    });
};