// routes/taskRoutes.js
const express = require('express');
const router = express.Router();

// In-memory tasks data with 10 tasks
let tasks = [
  { id: 1, title: 'Complete project report', completed: false },
  { id: 2, title: 'Do laundry', completed: false },
  { id: 3, title: 'Prepare for the math exam', completed: false },
  { id: 4, title: 'Submit assignment on time', completed: false },
  { id: 5, title: 'Attend lecture on data structures', completed: false },
  { id: 6, title: 'Buy groceries for the week', completed: false },
  { id: 7, title: 'Join study group for history', completed: false },
  { id: 8, title: 'Visit the library for research', completed: false },
  { id: 9, title: 'Exercise for at least 30 minutes', completed: false },
  { id: 10, title: 'Plan the week ahead', completed: false }
];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get a specific task by ID
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  });
  
// Create a new task
router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,  // Simple ID increment
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task (mark as completed)
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    task.completed = req.body.completed;
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Delete a task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.send('Task deleted');
});

module.exports = router;
