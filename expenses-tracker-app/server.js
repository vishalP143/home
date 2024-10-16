const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Expenses Tracker API');
});

app.use('/expenses', expenseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
