require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const { json, urlencoded } = require('express');

module.exports = (app) => {
    app.use(cors());

    app.use(json());

    app.use(urlencoded({
        extended: true
    }));

    app.use(require('../routes/API'));

    app.use(session({
        secret: process.env.EXPRESS_SECRET,
        cookie: { maxAge: 8*60*60*1000, secure: false },
        resave: false,
        saveUninitialized: true,
        store: new (require('connect-pg-simple')(session))({
            conString: process.env.CONNECTION,
            createTableIfMissing: true,
            pruneSessionInterval: 60 * 30
        })
    }));
}