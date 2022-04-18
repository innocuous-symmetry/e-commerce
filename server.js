const express = require('express');
const app = express();

require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 8088;

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
    res.send('Testing the server');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});