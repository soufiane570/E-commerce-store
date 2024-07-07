const express = require('express');
const stockAlertController = require('../Controllers/stockAlertController');

const router = express.Router();

router.post('/stockAlerts', stockAlertController.createStockAlert);
router.get('/stockAlerts', stockAlertController.getStockAlerts);
router.get('/stockAlerts/:id', stockAlertController.getStockAlert);
router.patch('/stockAlerts/:id', stockAlertController.updateStockAlert);
router.delete('/stockAlerts/:id', stockAlertController.deleteStockAlert);

module.exports = router;
