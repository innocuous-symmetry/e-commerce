const express = require('express');
const cors = require('cors');
const app = express();

const session = require('express-session');

require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const store = new session.MemoryStore();
app.use(session({
    secret: process.env.EXPRESS_SECRET,
    cookie: { maxAge: 300000000, secure: false },
    resave: false,
    saveUninitialized: false,
    store,
}));

const apiRouter = require('./routes/API');
app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});