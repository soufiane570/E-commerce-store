const Support = require('../Models/Support');

// Create a new support message
exports.createSupport = async (req, res) => {
    try {
        const support = new Support(req.body);
        await support.save();
        res.status(201).send(support);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all support messages
exports.getSupports = async (req, res) => {
    try {
        const supports = await Support.find({});
        res.status(200).send(supports);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a support message by ID
exports.getSupport = async (req, res) => {
    try {
        const support = await Support.findById(req.params.id);
        if (!support) {
            return res.status(404).send();
        }
        res.status(200).send(support);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a support message by ID
exports.updateSupport = async (req, res) => {
    try {
        const support = await Support.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!support) {
            return res.status(404).send();
        }
        res.status(200).send(support);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a support message by ID
exports.deleteSupport = async (req, res) => {
    try {
        const support = await Support.findByIdAndDelete(req.params.id);
        if (!support) {
            return res.status(404).send();
        }
        res.status(200).send(support);
    } catch (error) {
        res.status(500).send(error);
    }
};
