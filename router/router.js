const express = require('express');
const controller = require('../controllers/controller');

const router = new express.Router();

router.post('/product/add', controller.AddProduct);

router.post('/product/bulk-add', controller.BulkAddProducts);

router.get('/product/all-product',controller.GetAllProduct)


module.exports = router;
