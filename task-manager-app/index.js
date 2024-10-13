// index.js
const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');  // Import task routes

const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// Mount task routes
app.use('/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
