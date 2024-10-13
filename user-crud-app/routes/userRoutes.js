// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// In-memory user data
let users = [
  { id: 1, name: 'Vishal Pradhan', email: 'vishal@example.com', gender: 'M' },
  { id: 2, name: 'Lopamudra Pradhan', email: 'lopamudra@example.com', gender: 'F' }
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get a user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  
// Create a new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,  // Auto-increment ID
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update an existing user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.gender = req.body.gender;
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.send('User deleted');
});

module.exports = router;
