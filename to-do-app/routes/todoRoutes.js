const express = require('express');
const router = express.Router();


let todos = [
    { id: 1, title: 'Finish homework', priority: 'high', completed: false },
    { id: 2, title: 'Go for a walk', priority: 'medium', completed: false },
    { id: 3, title: 'Buy groceries', priority: 'low', completed: false },
    { id: 4, title: 'Attend online lecture', priority: 'high', completed: false },
    { id: 5, title: 'Study for exams', priority: 'high', completed: false },
    { id: 6, title: 'Do laundry', priority: 'medium', completed: false },
    { id: 7, title: 'Clean the kitchen', priority: 'low', completed: false },
    { id: 8, title: 'Call parents', priority: 'medium', completed: false },
    { id: 9, title: 'Prepare dinner', priority: 'medium', completed: false },
    { id: 10, title: 'Read a book', priority: 'low', completed: false },
    { id: 11, title: 'Water the plants', priority: 'low', completed: false },
    { id: 12, title: 'Exercise for 30 minutes', priority: 'high', completed: false },
    { id: 13, title: 'Respond to emails', priority: 'medium', completed: false },
    { id: 14, title: 'Review notes for class', priority: 'high', completed: false }
  ];
  

// get all todos
router.get('/', (req, res) => {
    res.json(todos);
    });

// get a single todo by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (!todo) {
        res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
        });

// create a new todo
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        priority: req.body.priority,
        completed: false
        };
        todos.push(newTodo);
        res.status(201).json(newTodo);
        });

// update todo (mark as compleated)
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
  
    if (todo) {

      todo.completed = req.body.completed;

      todo.priority = req.body.priority || todo.priority;

      res.json(todo);

    } else {
      res.status(404).send('Todo not found');  
    }
  });
  
// delete a todo
router.delete('/:id', (req, res) => {
    todos = todos.filter(t => t.id!== parseInt(req.params.id));
    res.status(204).json({ message: 'Todo deleted' });
    });
    
module.exports = router;
