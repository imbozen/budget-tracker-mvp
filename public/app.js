const API_URL = "/api/expenses";

const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

async function loadExpenses() {

const res = await fetch(API_URL);
const expenses = await res.json();

expenseList.innerHTML = "";
let total = 0;

expenses.forEach(expense => {

const li = document.createElement("li");
li.textContent = `${expense.description} - $${expense.amount}`;

const delBtn = document.createElement("button");
delBtn.textContent = "Delete";

delBtn.onclick = async () => {
await fetch(`${API_URL}/${expense.id}`, { method: "DELETE" });
loadExpenses();
};

li.appendChild(delBtn);
expenseList.appendChild(li);

total += expense.amount;

});

totalDisplay.textContent = total;

}

document.getElementById("expenseForm").addEventListener("submit", async (e) => {

e.preventDefault();

const description = document.getElementById("description").value;
const amount = Number(document.getElementById("amount").value);

await fetch(API_URL, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ description, amount })
});

loadExpenses();

});

loadExpenses();

let incomes = [];

const incomeForm = document.getElementById("incomeForm");
const incomeList = document.getElementById("incomeList");
const incomeTotalDisplay = document.getElementById("incomeTotal");

incomeForm.addEventListener("submit", function(e) {

e.preventDefault();

const amount = Number(document.getElementById("incomeAmount").value);

const income = {
week: incomes.length + 1,
amount: amount
};

incomes.push(income);

renderIncome();

incomeForm.reset();

});

function renderIncome() {

incomeList.innerHTML = "";

let total = 0;

incomes.forEach(income => {

const li = document.createElement("li");

li.textContent = `Week ${income.week}: $${income.amount}`;

incomeList.appendChild(li);

total += income.amount;

});

incomeTotalDisplay.textContent = total;

}
