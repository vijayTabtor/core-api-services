const express = require('express');
const app = express();


require('./config/database');
const middlewaresConfig = require('./config/middlewares');
import constants from './config/constants';

console.log(process.env.NODE_ENV);
console.log(constants.MONGO_URL);
import ApiRoutes from './routes';

// Wrap all the middlewares with the server
middlewaresConfig(app);
// Routes...
app.use('/v1', ApiRoutes);

module.exports = app;