const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderCouponSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    coupon_id: { type: Schema.Types.ObjectId, ref: 'Coupon', required: true },
    discount_amount: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

orderCouponSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('OrderCoupon', orderCouponSchema);
