const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const db = require('./db');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const createApp = () => {
  // Logging middleware
  // Only use logging middleware when not running tests
  app.use(morgan('dev'));

  // Middleware for body parsing (parse request and create req.body object)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Compression middleware
  app.use(compression());

  // API routes
  // app.use('/api', require('./api'));

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

const syncDb = () => db.sync();

const bootApp = () => {
  syncDb();
  createApp();
  startListening();
};

// This will evaluate as true when we run this directly from the command line
// and false when this module is required by another module, for example, if we
// required it in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}
