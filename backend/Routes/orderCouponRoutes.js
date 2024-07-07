const express = require('express');
const orderCouponController = require('../Controllers/orderCouponController');

const router = express.Router();

router.post('/orderCoupons', orderCouponController.createOrderCoupon);
router.get('/orderCoupons', orderCouponController.getOrderCoupons);
router.get('/orderCoupons/:id', orderCouponController.getOrderCoupon);
router.patch('/orderCoupons/:id', orderCouponController.updateOrderCoupon);
router.delete('/orderCoupons/:id', orderCouponController.deleteOrderCoupon);

module.exports = router;
