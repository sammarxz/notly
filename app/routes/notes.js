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

module.exports = router;
