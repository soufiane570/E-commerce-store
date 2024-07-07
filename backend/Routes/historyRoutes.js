const express = require('express');
const historyController = require('../Controllers/historyController');

const router = express.Router();

router.post('/histories', historyController.createHistory);
router.get('/histories', historyController.getHistories);
router.get('/histories/:id', historyController.getHistory);
router.patch('/histories/:id', historyController.updateHistory);
router.delete('/histories/:id', historyController.deleteHistory);

module.exports = router;
