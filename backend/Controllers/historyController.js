const History = require('../Models/Histories');

// Create a new history item
exports.createHistory = async (req, res) => {
    try {
        const history = new History(req.body);
        await history.save();
        res.status(201).send(history);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all history items
exports.getHistories = async (req, res) => {
    try {
        const histories = await History.find({});
        res.status(200).send(histories);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a history item by ID
exports.getHistory = async (req, res) => {
    try {
        const history = await History.findById(req.params.id);
        if (!history) {
            return res.status(404).send();
        }
        res.status(200).send(history);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a history item by ID
exports.updateHistory = async (req, res) => {
    try {
        const history = await History.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!history) {
            return res.status(404).send();
        }
        res.status(200).send(history);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a history item by ID
exports.deleteHistory = async (req, res) => {
    try {
        const history = await History.findByIdAndDelete(req.params.id);
        if (!history) {
            return res.status(404).send();
        }
        res.status(200).send(history);
    } catch (error) {
        res.status(500).send(error);
    }
};
