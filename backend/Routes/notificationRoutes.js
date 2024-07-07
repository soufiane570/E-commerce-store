const express = require('express');
const notificationController = require('../Controllers/notificationController');

const router = express.Router();

router.post('/notifications', notificationController.createNotification);
router.get('/notifications', notificationController.getNotifications);
router.get('/notifications/:id', notificationController.getNotification);
router.patch('/notifications/:id', notificationController.updateNotification);
router.delete('/notifications/:id', notificationController.deleteNotification);

module.exports = router;
