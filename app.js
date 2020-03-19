var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/event');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
