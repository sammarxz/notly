var express = require('express');
var router = express.Router();
const Note = require('../models/notes');

const withAuth = require('../middlewares/auth');

router.post('/', withAuth, async(req, res) => {
  const { title, body } = req.body;

  try {
    const note = new Note({ title, body, author: req.user._id });
    await note.save();
    res.status(200).json(note);
  } catch {
    res.status(500).json({ error: 'Error on creating the note' });
  }
});

module.exports = router;
