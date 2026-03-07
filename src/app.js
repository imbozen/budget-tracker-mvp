const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(express.json());
app.use('/api/expenses', expenseRoutes);

app.get('/', (req, res) => {
  res.send('Budget Tracker API Running');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;
