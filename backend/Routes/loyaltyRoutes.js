const express = require('express');
const loyaltyController = require('../Controllers/loyaltyController');

const router = express.Router();

router.post('/loyalties', loyaltyController.createLoyalty);
router.get('/loyalties', loyaltyController.getLoyalties);
router.get('/loyalties/:id', loyaltyController.getLoyalty);
router.patch('/loyalties/:id', loyaltyController.updateLoyalty);
router.delete('/loyalties/:id', loyaltyController.deleteLoyalty);

module.exports = router;
