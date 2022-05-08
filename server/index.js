const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const createApp = () => {
  // Middleware for body parsing (parse request and create req.body object)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.use('/api', require('./api'));

  // Static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // Send index.html for any other requests
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Error handling endware
  app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // Start listening and create a 'server' object representing our server
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};
