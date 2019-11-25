const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const router = require('./router');
const app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use((err, req, res, next) => {
    console.error(err);
    res.render('errorView', {
        locals: {
            status: err.status || 500,
            message: err.message || 'server error',
        },
    });
});

app.use('/', router);

module.exports = app;
