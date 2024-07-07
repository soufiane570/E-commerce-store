const StockAlert = require('../Models/StockAlerts');

// Create a new stock alert
exports.createStockAlert = async (req, res) => {
    try {
        const stockAlert = new StockAlert(req.body);
        await stockAlert.save();
        res.status(201).send(stockAlert);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all stock alerts
exports.getStockAlerts = async (req, res) => {
    try {
        const stockAlerts = await StockAlert.find({});
        res.status(200).send(stockAlerts);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a stock alert by ID
exports.getStockAlert = async (req, res) => {
    try {
        const stockAlert = await StockAlert.findById(req.params.id);
        if (!stockAlert) {
            return res.status(404).send();
        }
        res.status(200).send(stockAlert);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a stock alert by ID
exports.updateStockAlert = async (req, res) => {
    try {
        const stockAlert = await StockAlert.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!stockAlert) {
            return res.status(404).send();
        }
        res.status(200).send(stockAlert);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a stock alert by ID
exports.deleteStockAlert = async (req, res) => {
    try {
        const stockAlert = await StockAlert.findByIdAndDelete(req.params.id);
        if (!stockAlert) {
            return res.status(404).send();
        }
        res.status(200).send(stockAlert);
    } catch (error) {
        res.status(500).send(error);
    }
};
