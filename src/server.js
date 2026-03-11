const express = require('express');
const path = require('path');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/expenses', expenseRoutes);

// Pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/fixed', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/fixed.html'));
});

app.get('/debts', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/debts.html'));
});

// health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;