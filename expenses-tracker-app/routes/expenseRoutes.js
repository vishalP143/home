const express = require('express');
const router = express.Router();
let expenses = require('../data/expenses');

// get all expenses
router.get('/', (req, res) => {
    res.json(expenses);
});

// get a single expense by id
router.get('/:id', (req, res) => {
    const expense = expenses.find(e => e.id === parseInt(req.params.id));
    if (expense) {
        res.json(expense);
    } else {
        res.status(404).send('Expense not found');
    }
});

// create a new expense
router.post('/', (req, res) => {
    const newExpense = {
        id: expenses.length + 1,
        title: req.body.title,
        amount: req.body.amount,
        date: req.body.date
    };
    expenses.push(newExpense);
    res.status(201).json(newExpense);
});

// update an  expense
router.put('/:id', (req, res) => {
    const expense = expenses.find(e => e.id === parseInt(req.params.id));
    if (expense) {
        expense.title = req.body.title;
        expense.amount = req.body.amount;
        expense.date = req.body.date;
        res.json(expense);
    } else {
        res.status(404).send('Expense not found');
    }
});

// delete an expense
router.delete('/:id', (req, res) => {
    expenses = expenses.filter(e => e.id !== parseInt(req.params.id));
    res.send('Expense deleted');
});

module.exports = router;
