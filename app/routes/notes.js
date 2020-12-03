var express = require('express');
var router = express.Router();
const Note = require('../models/notes');

const withAuth = require('../middlewares/auth');

const isOwner = require('../utils/isOwner');

router.post('/', withAuth, async(req, res) => {
  const { title, body } = req.body;

  try {
    const note = new Note({ title, body, author: req.user._id });
    await note.save();
    res.status(200).json(note);
  } catch {
    res.status(500).json({ error: 'Error to create the note' });
  }
});

router.get('/:id', withAuth, async(req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (isOwner(req.user, note)) {
      res.json(note);
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch {
    res.status(500).json({ error: 'Error to get the note' });
  }
});

router.get('/', withAuth, async(req, res) => {
  try {
    const notes = await Note.find({ author: req.user._id });
    res.json(notes);
  } catch {
    res.status(500).json({ error: 'Error to get the notes' });
  }
});

router.put('/:id', withAuth, async(req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (isOwner(req.user, note)) {
      const updatedNote = await Note.findOneAndUpdate(id, 
        { $set: { title, body } },
        { upsert: true, "new": true }
      );

      res.json(updatedNote);
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch(err) {
    res.status(500).json({ error: 'Error on update note', err });
  }
});

router.delete('/:id', withAuth, async(req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id); 

    if (isOwner(req.user, note)) {
      await note.delete();
      res.status(204).json({ message: 'OK' });
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch {
    res.status(500).json({ error: 'Error on delete a note', err });
  }
});

module.exports = router;
