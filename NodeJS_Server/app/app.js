const path = require('path');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const router = require('./router');

const app = express();

const viewsPath = path.join(__dirname, './views');
app.engine('html', es6Renderer);
app.set('views', viewsPath);
app.set('view engine', 'html');

app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err);
  res.render('errorView', {
    locals: {
      status: err.status || 500,
      message: err.message || 'server error',
    },
  });
});

module.exports = app;
