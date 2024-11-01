const express = require('express');
const app = express();

app.use(express.json());
app.use('/auth', require('./auth'));
app.use('/posts', require('./posts'));

module.exports = app;
