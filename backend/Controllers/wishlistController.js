const Wishlist = require('../Models/Wishlist');

// Create a new wishlist item
exports.createWishlist = async (req, res) => {
    try {
        const wishlist = new Wishlist(req.body);
        await wishlist.save();
        res.status(201).send(wishlist);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all wishlist items
exports.getWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.find({});
        res.status(200).send(wishlists);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a wishlist item by ID
exports.getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findById(req.params.id);
        if (!wishlist) {
            return res.status(404).send();
        }
        res.status(200).send(wishlist);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a wishlist item by ID
exports.updateWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!wishlist) {
            return res.status(404).send();
        }
        res.status(200).send(wishlist);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a wishlist item by ID
exports.deleteWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
        if (!wishlist) {
            return res.status(404).send();
        }
        res.status(200).send(wishlist);
    } catch (error) {
        res.status(500).send(error);
    }
};
