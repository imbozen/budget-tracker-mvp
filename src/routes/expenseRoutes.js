const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// All routes are defined before module.exports
router.post('/', expenseController.createExpense);
router.get('/', expenseController.fetchExpenses);
router.get('/total', expenseController.fetchTotal); // Uses fetchTotal from your controller

module.exports = router;