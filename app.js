const express = require('express');
const morgan = require('morgan');

const tasksRouter = require('./routes/task-router');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// 2) ROUTES
app.use('/api/v1/tasks', tasksRouter);

// 3) EXPORTS
module.exports = app;
