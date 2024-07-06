const express = require('express');
const categoryController = require('../Controllers/categoryController');

const router = express.Router();

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategory);
router.patch('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
