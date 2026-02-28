const expenseService = require('../services/expenseService');

function createExpense(req, res) {
  try {
    const { description, amount } = req.body;
    const expense = expenseService.addExpense(description, amount);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

function fetchExpenses(req, res) {
  res.json(expenseService.getAllExpenses());
}

function fetchTotal(req, res) {
  res.json({ total: expenseService.getTotalExpenses() });
}

module.exports = {
  createExpense,
  fetchExpenses,
  fetchTotal
};