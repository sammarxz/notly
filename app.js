var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

require('./config/database');

var corOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200
};

var usersRouter = require('./app/routes/users');
var notesRouter = require('./app/routes/notes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
