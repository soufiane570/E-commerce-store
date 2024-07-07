const express = require('express');
const wishlistController = require('../Controllers/wishlistController');

const router = express.Router();

router.post('/wishlists', wishlistController.createWishlist);
router.get('/wishlists', wishlistController.getWishlists);
router.get('/wishlists/:id', wishlistController.getWishlist);
router.patch('/wishlists/:id', wishlistController.updateWishlist);
router.delete('/wishlists/:id', wishlistController.deleteWishlist);

module.exports = router;
