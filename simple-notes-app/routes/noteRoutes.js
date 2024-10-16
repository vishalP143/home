const express = require('express');
const router = express.Router();
let notes = require('../data/notes');

// get all notes
router.get('/', (req, res) => {
  res.json(notes);
});

// get a single note by id
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Better luck next time');
  }
});

// create a new note
router.post('/', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// update an existing note
router.put('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (note) {
    note.title = req.body.title;
    note.content = req.body.content;
    res.json(note);
  } else {
    res.status(404).send('Better luck next time');
  }
});

// delete a note
router.delete('/:id', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);  // Remove the note from the array
    res.send('Note deleted');
  } else {
    res.status(404).send('Better luck next time');
  }
});

module.exports = router;
