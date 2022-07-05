const experimentRouter = require('express').Router();
const { connect, query, end } = require('../db/Pool');

experimentRouter.route('/').get(async (req, res) => {
    const client = await connect()
    .then(console.log("Connection successful"));

    if (client) {
        try {
            res.send("Pool appears to work?");
        } catch(e) {
            console.log(e);
        } finally {
            await end();
        }
    }
});

experimentRouter.route('/').put(async (req, res) => {
    const { name, description, information } = req.body;
    const input = `
        INSERT INTO experimental (name, description, information)
        VALUES ($1, $2, $3)
    `

    const client = await connect()
    .then(console.log("Connection successful."));

    if (client) {
        try {
            await client.query('BEGIN');
            await client.query(input, [name, description, information]);
            await client.query('COMMIT');
            res.sendStatus(200);
        } catch(e) {
            await client.query('ROLLBACK');
            throw new Error(e);
        } finally {
            client.release();
        }
    }
})

experimentRouter.route('/create-exp-db').put(async (req, res) => {
    const input = `
        CREATE TABLE IF NOT EXISTS experimental (
            id            SERIAL,
            name          VARCHAR,
            description   VARCHAR,
            information   JSON
        );
    `

    const client = await connect()
    .then(console.log("Connection successful."));

    if (client) {
        try {
            await query(input, null, (err, result) => {
                if (err) throw err;
                res.send(result);
            });
        } catch(e) {
            console.log(e);
        } finally {
            await end();
        }
    }
})

module.exports = experimentRouter;