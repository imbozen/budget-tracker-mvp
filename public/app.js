//API Expenses
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
            updateDashboard();
        };

        li.appendChild(delBtn);
        expenseList.appendChild(li);

        total += expense.amount;
    });

    totalDisplay.textContent = total;
    updateDashboard();
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

//Income
let incomes = [];
const incomeForm = document.getElementById("incomeForm");
const incomeList = document.getElementById("incomeList");
const incomeTotalDisplay = document.getElementById("incomeTotal");

incomeForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const amount = Number(document.getElementById("incomeAmount").value);

    const income = { week: incomes.length + 1, amount: amount };
    incomes.push(income);

    renderIncome();
    incomeForm.reset();
    updateDashboard();
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

//Fixed Expenses
const fixedForm = document.getElementById("fixedForm");
const fixedList = document.getElementById("fixedList");
let fixedExpenses = JSON.parse(localStorage.getItem("fixedExpenses")) || [];

fixedForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fixedName").value;
    const amount = Number(document.getElementById("fixedAmount").value);
    if (!name || isNaN(amount)) return;

    fixedExpenses.push({ name, amount });
    localStorage.setItem("fixedExpenses", JSON.stringify(fixedExpenses));
    renderFixedExpenses();
    fixedForm.reset();
});

function renderFixedExpenses() {
    fixedList.innerHTML = "";
    fixedExpenses.forEach((f, index) => {
        const li = document.createElement("li");
        li.textContent = `${f.name} - $${f.amount}`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => {
            fixedExpenses.splice(index, 1);
            localStorage.setItem("fixedExpenses", JSON.stringify(fixedExpenses));
            renderFixedExpenses();
            updateDashboard();
        };

        li.appendChild(delBtn);
        fixedList.appendChild(li);
    });
    updateDashboard();
}

//Debts
const debtForm = document.getElementById("debtForm");
const debtList = document.getElementById("debtList");
let debts = JSON.parse(localStorage.getItem("debts")) || [];

debtForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("debtName").value;
    const payment = Number(document.getElementById("debtPayment").value);
    if (!name || isNaN(payment)) return;

    debts.push({ name, payment });
    localStorage.setItem("debts", JSON.stringify(debts));
    renderDebts();
    debtForm.reset();
});

function renderDebts() {
    debtList.innerHTML = "";
    debts.forEach((d, index) => {
        const li = document.createElement("li");
        li.textContent = `${d.name} - $${d.payment}`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => {
            debts.splice(index, 1);
            localStorage.setItem("debts", JSON.stringify(debts));
            renderDebts();
            updateDashboard();
        };

        li.appendChild(delBtn);
        debtList.appendChild(li);
    });
    updateDashboard();
}

// Dashboard
function updateDashboard() {
    let income = incomes.reduce((sum, i) => sum + i.amount, 0);
    let expenseTotal = Number(totalDisplay.textContent) || 0;
    let fixedTotal = fixedExpenses.reduce((sum, f) => sum + f.amount, 0);
    let debtTotal = debts.reduce((sum, d) => sum + d.payment, 0);
    let remaining = income - expenseTotal - fixedTotal - debtTotal;

    document.getElementById("dIncome").innerText = "$" + income;
    document.getElementById("dExpenses").innerText = "$" + expenseTotal;
    document.getElementById("dFixed").innerText = "$" + fixedTotal;
    document.getElementById("dDebt").innerText = "$" + debtTotal;
    document.getElementById("dRemaining").innerText = "$" + remaining;
}

// Initial Load
loadExpenses();
renderIncome();
renderFixedExpenses();
renderDebts();
updateDashboard();