const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(express.json());
app.use('/api', expenseRoutes);

app.get('/', (req, res) => {
  res.send('Budget Tracker API Running');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong on the server"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});