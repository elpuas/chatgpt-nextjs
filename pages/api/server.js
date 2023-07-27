// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, this is your Express server with NextJS!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.use('/openai', require('./router'));
