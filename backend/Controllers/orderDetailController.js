const OrderDetail = require('../Models/OrderDetails');

// Create a new order detail
exports.createOrderDetail = async (req, res) => {
    try {
        const orderDetail = new OrderDetail(req.body);
        await orderDetail.save();
        res.status(201).send(orderDetail);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all order details
exports.getOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.find({});
        res.status(200).send(orderDetails);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an order detail by ID
exports.getOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findById(req.params.id);
        if (!orderDetail) {
            return res.status(404).send();
        }
        res.status(200).send(orderDetail);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an order detail by ID
exports.updateOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!orderDetail) {
            return res.status(404).send();
        }
        res.status(200).send(orderDetail);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an order detail by ID
exports.deleteOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByIdAndDelete(req.params.id);
        if (!orderDetail) {
            return res.status(404).send();
        }
        res.status(200).send(orderDetail);
    } catch (error) {
        res.status(500).send(error);
    }
};
