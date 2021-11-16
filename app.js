const app = require('express')();
const morgan = require('morgan');

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 2) ROUTES
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server', app: 'Task-manger' });
});

// 3) EXPORTS
module.exports = app;
