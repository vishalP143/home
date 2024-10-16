const express = require ('express');
const app = express();
const todoroutes = require ('./routes/todoRoutes');

const PORT = 5000;

app.use(express.json());

app.use('/api/todos', todoroutes);

app.get('/', (req, res) => {
    res.send('Welcome to our to -do list app.');

  });

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});