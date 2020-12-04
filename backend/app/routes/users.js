var express = require('express');
var router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const secret = process.env.JWT_TOKEN;

router.post('/register', async(req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({name, email, password });
    await user.save();
    res.status(200).json(user);
  } catch {
    res.status(500).json({ error: 'Error registering the user' });
  }
});

router.post('/login', async(req, res) => {
  const { email, password } = req.body;
   try {
    let user = await User.findOne({ email });
     if (!user) {
      return res.status(401).json({ error: 'Incorrect email or password' });
     } else {
      user.isCorrectPassword(password, function(err, same) {
        if (!same) {
          return res.status(401).json({ error: 'Incorrect email or password' });
        } else {
          const token = jwt.sign({email}, secret, { expiresIn: '30d' });
          res.json({ user, token });
        }
      })
     }
   } catch {
    res.status(500).json({ error: 'Internal error, please try again.' });
   }
});

module.exports = router;
