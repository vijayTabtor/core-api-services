const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET Request to /Products Route'
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST Request to /Products Route'
    });
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET Request to /Products Route',
        productID: req.params.productId
    });
});

module.exports = router