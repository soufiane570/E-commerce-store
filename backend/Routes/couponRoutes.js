const express = require('express');
const couponController = require('../Controllers/couponController');

const router = express.Router();

router.post('/coupons', couponController.createCoupon);
router.get('/coupons', couponController.getCoupons);
router.get('/coupons/:id', couponController.getCoupon);
router.patch('/coupons/:id', couponController.updateCoupon);
router.delete('/coupons/:id', couponController.deleteCoupon);

module.exports = router;
