// index.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');  // Import user routes

const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Base route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to our world of 0 and 1');
});

// Mount user routes
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
