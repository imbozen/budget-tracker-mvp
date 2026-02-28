const express = require('express');

const expenseRoutes = require('./routes/expenseRoutes');
const app = express();
app.use(express.json());
app.use('/api', expenseRoutes);

app.get('/', (req, res) => {
  res.send('Budget Tracker API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});