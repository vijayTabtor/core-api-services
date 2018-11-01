const express = require('express');
const app = express();


require('./config/database');
const middlewaresConfig = require('./config/middlewares');
const constants = require('./config/constants');

console.log(process.env.NODE_ENV)
console.log(constants);


const productsRoute = require('./routes/products');

// Wrap all the middlewares with the server
middlewaresConfig(app);
// Routes...
app.use('/v1/products', productsRoute);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
    });
})

module.exports = app;