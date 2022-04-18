const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/API');

require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});