let debts = JSON.parse(localStorage.getItem("debts")) || [];
let monthlyIncome = Number(localStorage.getItem("monthlyIncome")) || 0;
let fixedExpenses = JSON.parse(localStorage.getItem("fixedExpenses")) || [];

const debtList = document.getElementById("debtList");
const debtTotalEl = document.getElementById("debtTotal");
const remainingAfterDebtEl = document.getElementById("remainingAfterDebt");

function saveDebtData() {
  localStorage.setItem("debts", JSON.stringify(debts));
}

function addDebt() {
  const name = document.getElementById("debtName").value;
  const amount = Number(document.getElementById("debtAmount").value);

  if (!name || !amount) return;

  debts.push({ name, amount });
  saveDebtData();
  render();
}

function deleteDebt(index) {
  debts.splice(index, 1);
  saveDebtData();
  render();
}

function render() {
  debtList.innerHTML = "";
  let debtTotal = 0;

  debts.forEach((d, i) => {
    debtTotal += d.amount;
    const li = document.createElement("li");
    li.innerHTML = `${d.name}: $${d.amount} <button onclick="deleteDebt(${i})">❌</button>`;
    debtList.appendChild(li);
  });

  debtTotalEl.innerText = debtTotal;

  let fixedTotal = fixedExpenses.reduce((sum, e) => sum + e.amount, 0);
  remainingAfterDebtEl.innerText = monthlyIncome - fixedTotal - debtTotal;
}

// initialize
render();