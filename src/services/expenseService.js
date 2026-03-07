const Expense = require('../models/expense');

const expenses = [];

function addExpense(description, amount) {
  if (!description) {
    throw new Error("Description is required");
  }

  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }

  const expense = new Expense(description, amount);
  expenses.push(expense);

  return expense;
}

function getAllExpenses() {
  return expenses;
}

function getTotalExpenses() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

module.exports = {
  addExpense,
  getAllExpenses,
  getTotalExpenses
};

function getTotalExpenses() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
  getTotalExpenses
};