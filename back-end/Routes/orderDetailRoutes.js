const express = require('express');
const orderDetailController = require('../Controllers/orderDetailController');

const router = express.Router();

router.post('/orderDetails', orderDetailController.createOrderDetail);
router.get('/orderDetails', orderDetailController.getOrderDetails);
router.get('/orderDetails/:id', orderDetailController.getOrderDetail);
router.patch('/orderDetails/:id', orderDetailController.updateOrderDetail);
router.delete('/orderDetails/:id', orderDetailController.deleteOrderDetail);

module.exports = router;
