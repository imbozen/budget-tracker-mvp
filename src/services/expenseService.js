const expenses = [];

function getExpenses() {
  return expenses;
}

function createExpense(expense) {
  expenses.push(expense);
  return expense;
}

function deleteExpense(id) {
  const index = expenses.findIndex(e => e.id === id);

  if (index !== -1) {
    return expenses.splice(index, 1);
  }

  return null;
}

function getTotalExpenses() {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
  getTotalExpenses
};