const express = require('express');
const path = require('path');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/expenses', expenseRoutes);

// homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;