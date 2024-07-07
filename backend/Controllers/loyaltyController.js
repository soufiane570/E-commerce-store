const Loyalty = require('../Models/Loyalty');

// Create a new loyalty record
exports.createLoyalty = async (req, res) => {
    try {
        const loyalty = new Loyalty(req.body);
        await loyalty.save();
        res.status(201).send(loyalty);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all loyalty records
exports.getLoyalties = async (req, res) => {
    try {
        const loyalties = await Loyalty.find({});
        res.status(200).send(loyalties);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a loyalty record by ID
exports.getLoyalty = async (req, res) => {
    try {
        const loyalty = await Loyalty.findById(req.params.id);
        if (!loyalty) {
            return res.status(404).send();
        }
        res.status(200).send(loyalty);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a loyalty record by ID
exports.updateLoyalty = async (req, res) => {
    try {
        const loyalty = await Loyalty.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!loyalty) {
            return res.status(404).send();
        }
        res.status(200).send(loyalty);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a loyalty record by ID
exports.deleteLoyalty = async (req, res) => {
    try {
        const loyalty = await Loyalty.findByIdAndDelete(req.params.id);
        if (!loyalty) {
            return res.status(404).send();
        }
        res.status(200).send(loyalty);
    } catch (error) {
        res.status(500).send(error);
    }
};
