const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config({ path: './.env' });

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: process.env.EXPRESS_SECRET,
    cookie: { maxAge: 300000000, secure: false },
    resave: false,
    saveUninitialized: false,
    store: new (require('connect-pg-simple')(session))({
        conString: process.env.CONNECTION,
        createTableIfMissing: true,
    })
}));

const apiRouter = require('./routes/API');
app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});