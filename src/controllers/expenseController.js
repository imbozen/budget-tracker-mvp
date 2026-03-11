const expenseService = require('../services/expenseService');

const createExpense = (req, res) => {
  try {
    const { description, amount } = req.body;

    const expense = expenseService.createExpense({
      id: Date.now().toString(),
      description,
      amount: Number(amount)
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchExpenses = (req, res) => {
  res.json(expenseService.getExpenses());
};

const fetchTotal = (req, res) => {
  res.json({ total: expenseService.getTotalExpenses() });
};

module.exports = {
  createExpense,
  fetchExpenses,
  fetchTotal
};