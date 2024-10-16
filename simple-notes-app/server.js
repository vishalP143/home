const express = require('express');
const app = express();
const notesRoutes = require('./routes/noteRoutes'); 


const PORT = process.env.PORT || 5000; 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Simple Notes App API');
});

app.use('/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
