var express = require('express');
var logger = require('morgan');
var cors = require('cors');

require('./config/database');

var corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200
};

var usersRouter = require('./app/routes/users');
var notesRouter = require('./app/routes/notes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
