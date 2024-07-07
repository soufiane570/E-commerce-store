const Review = require('../Models/Reviews');

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).send(review);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).send(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a review by ID
exports.getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).send();
        }
        res.status(200).send(review);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!review) {
            return res.status(404).send();
        }
        res.status(200).send(review);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).send();
        }
        res.status(200).send(review);
    } catch (error) {
        res.status(500).send(error);
    }
};
