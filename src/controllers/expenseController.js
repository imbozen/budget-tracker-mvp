const expenseService = require('../services/expenseService');

const createExpense = (req, res) => {
  try {
    const { description, amount } = req.body;
    const expense = expenseService.addExpense(description, amount);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchExpenses = (req, res) => {
  res.json(expenseService.getAllExpenses());
};

const fetchTotal = (req, res) => {
  res.json({ total: expenseService.getTotalExpenses() });
};

// Use ONLY this block to export. Do not use "exports.fetchTotal =" anywhere else.
module.exports = {
  createExpense,
  fetchExpenses,
  fetchTotal
};