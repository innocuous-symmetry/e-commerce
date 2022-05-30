const express = require('express');
const cors = require('cors');
const app = express();

const session = require('express-session');

require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 300000000, secure: false }
}))

const apiRouter = require('./routes/API');
app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});