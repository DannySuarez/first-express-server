const express = require('express');
const app = express();
const itemRoutes = require('./routes/people');

app.use(express.json());
app.use('/api/v1/people', itemRoutes);

module.exports = app;
