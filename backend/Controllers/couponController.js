const Coupon = require('../Models/Coupons');

// Create a new coupon
exports.createCoupon = async (req, res) => {
    try {
        const coupon = new Coupon(req.body);
        await coupon.save();
        res.status(201).send(coupon);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all coupons
exports.getCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find({});
        res.status(200).send(coupons);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a coupon by ID
exports.getCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);
        if (!coupon) {
            return res.status(404).send();
        }
        res.status(200).send(coupon);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a coupon by ID
exports.updateCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!coupon) {
            return res.status(404).send();
        }
        res.status(200).send(coupon);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a coupon by ID
exports.deleteCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndDelete(req.params.id);
        if (!coupon) {
            return res.status(404).send();
        }
        res.status(200).send(coupon);
    } catch (error) {
        res.status(500).send(error);
    }
};
