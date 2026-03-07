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

exports.createExpense = (req, res) => {

  const { name, amount } = req.body;

  if (!name || !amount) {
    return res.status(400).json({
      error: "Name and amount are required"
    });
  }

  if (typeof amount !== "number") {
    return res.status(400).json({
      error: "Amount must be a number"
    });
  }

  const expense = expenseService.createExpense(req.body);
  res.status(201).json(expense);
};

exports.getTotal = (req, res) => {
  const total = expenseService.getTotalExpenses();
  res.json({ total });
};