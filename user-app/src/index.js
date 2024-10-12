const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const port = 3000;

// Middlewaare to parse JSON request bodies
app.use(express.json());

// Basic route to check if the server is running 
app.get('/', (req, res) => {
    res.send('Server is running and your journey begins here');
    });

// Mount the user routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });