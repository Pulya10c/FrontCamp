const path = require('path');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const passport = require('./passport');
const router = require('./router');

const app = express();

const viewsPath = path.join(__dirname, './views');
app.engine('html', es6Renderer);
app.set('views', viewsPath);
app.set('view engine', 'html');
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSession({ secret: 'NewsApi', resave: true, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

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
