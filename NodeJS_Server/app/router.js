const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');

const responseArticleMock = require('./mocks/responseArticle');
const passport = require('./passport');
const logger = require('./logger');
const newsModel = require('./models/newsModel');
const usersModel = require('./models/usersModel');

const router = express.Router();

router.use(({ path, method }, res, next) => {
    logger.info({ path, method });
    next();
});

router.get('/news', (req, res) => {
    newsModel.find((err, news) => {
        res.send(news);
    });
});

router.get('/news/:id', ({ params: { id } }, res) => {
    newsModel.findOne({ _id: id }, (err, article) => {
        res.send(article);
    });
});

router.post('/news', 
// connectEnsureLogin.ensureLoggedIn(), 
({ body }, res) => {
    newsModel.create(responseArticleMock, (err, data) => {
        res.status(200).send('The article was created');
    });
});

router.put('/news/:id', 
// connectEnsureLogin.ensureLoggedIn(),
 ({ params: { id }, body: { author } }, res) => {
    newsModel.updateOne({ _id: id }, { author: author || 'tester' }, (err, data) => {
        res.status(200).send('The article was updated');
    });
});

router.delete('/news/:id',
//  connectEnsureLogin.ensureLoggedIn(), 
 ({ params: { id } }, res) => {
    newsModel.deleteOne({ _id: id }, (err, data) => {
        res.status(200).send('The article was deleted');
    });
});

router.get('/', (req, res) => {
    res.render('homeView', {
        locals: {
            user: req.user,
        },
    });
});

router.get('/login', (req, res) => {
    res.render('loginView');
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res) => {
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/signUp', (req, res) => {
    res.render('signUpView');
});

router.post('/signUp', ({ body }, res) => {
    const { userName, password } = body;
    usersModel.findOne({ userName }, (err, user) => {
        if (!user) {
            usersModel.create({ userName, password }, (err, data) => {
                res.redirect('/');
            });
        } else {
            res.status(200).send('Please change user name');
        }
    });
});

router.get('/profile', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('profileView', {
        locals: {
            user: req.user,
        },
    });
});

module.exports = router;
