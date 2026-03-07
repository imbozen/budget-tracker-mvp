const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/expenses', expenseController.createExpense);
router.get('/expenses', expenseController.fetchExpenses);
router.get('/expenses/total', expenseController.fetchTotal);

module.exports = router;

router.get('/total', expenseController.getTotal);