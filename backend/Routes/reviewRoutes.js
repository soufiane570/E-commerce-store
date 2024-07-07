const express = require('express');
const reviewController = require('../Controllers/reviewController');

const router = express.Router();

router.post('/reviews', reviewController.createReview);
router.get('/reviews', reviewController.getReviews);
router.get('/reviews/:id', reviewController.getReview);
router.patch('/reviews/:id', reviewController.updateReview);
router.delete('/reviews/:id', reviewController.deleteReview);

module.exports = router;
