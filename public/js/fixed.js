let fixedExpenses = JSON.parse(localStorage.getItem("fixedExpenses")) || [];
let monthlyIncome = Number(localStorage.getItem("monthlyIncome")) || 0;

const fixedList = document.getElementById("fixedList");
const fixedTotalEl = document.getElementById("fixedTotal");
const remainingEl = document.getElementById("remainingBudget");

function saveData() {
  localStorage.setItem("fixedExpenses", JSON.stringify(fixedExpenses));
  localStorage.setItem("monthlyIncome", monthlyIncome);
}

function saveIncome() {
  monthlyIncome = Number(document.getElementById("monthlyIncome").value);
  saveData();
  render();
}

function addFixedExpense() {
  const name = document.getElementById("fixedName").value;
  const amount = Number(document.getElementById("fixedAmount").value);

  if (!name || !amount) return;

  fixedExpenses.push({ name, amount });
  saveData();
  render();
}

function deleteFixedExpense(index) {
  fixedExpenses.splice(index, 1);
  saveData();
  render();
}

function render() {
  fixedList.innerHTML = "";
  let total = 0;

  fixedExpenses.forEach((expense, i) => {
    total += expense.amount;
    const li = document.createElement("li");
    li.innerHTML = `${expense.name}: $${expense.amount} <button onclick="deleteFixedExpense(${i})">❌</button>`;
    fixedList.appendChild(li);
  });

  fixedTotalEl.innerText = total;
  remainingEl.innerText = monthlyIncome - total;
}

// initialize
document.getElementById("monthlyIncome").value = monthlyIncome;
render();