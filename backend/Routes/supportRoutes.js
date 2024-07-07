const express = require('express');
const supportController = require('../Controllers/supportController');

const router = express.Router();

router.post('/supports', supportController.createSupport);
router.get('/supports', supportController.getSupports);
router.get('/supports/:id', supportController.getSupport);
router.patch('/supports/:id', supportController.updateSupport);
router.delete('/supports/:id', supportController.deleteSupport);

module.exports = router;
