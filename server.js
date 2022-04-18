const express = require('express');
const app = express();

require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 8088;

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(require('./routes/checkout'));
app.use(require('./routes/order'));
app.use(require('./routes/products'));
app.use(require('./routes/user'));
app.use(require('./routes/cart'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});