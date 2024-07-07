const OrderCoupon = require('../Models/OrderCoupons');

// Create a new order coupon record
exports.createOrderCoupon = async (req, res) => {
    try {
        const orderCoupon = new OrderCoupon(req.body);
        await orderCoupon.save();
        res.status(201).send(orderCoupon);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all order coupon records
exports.getOrderCoupons = async (req, res) => {
    try {
        const orderCoupons = await OrderCoupon.find({});
        res.status(200).send(orderCoupons);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an order coupon record by ID
exports.getOrderCoupon = async (req, res) => {
    try {
        const orderCoupon = await OrderCoupon.findById(req.params.id);
        if (!orderCoupon) {
            return res.status(404).send();
        }
        res.status(200).send(orderCoupon);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an order coupon record by ID
exports.updateOrderCoupon = async (req, res) => {
    try {
        const orderCoupon = await OrderCoupon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!orderCoupon) {
            return res.status(404).send();
        }
        res.status(200).send(orderCoupon);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an order coupon record by ID
exports.deleteOrderCoupon = async (req, res) => {
    try {
        const orderCoupon = await OrderCoupon.findByIdAndDelete(req.params.id);
        if (!orderCoupon) {
            return res.status(404).send();
        }
        res.status(200).send(orderCoupon);
    } catch (error) {
        res.status(500).send(error);
    }
};
