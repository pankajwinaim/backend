const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use('/users', userRoutes);

module.exports = app;
