const express = require('express');

const router = express.Router();
const responseObject = require('./mocks/responseMock');
const logger = require('./logger');

router.use(({ path }, res, next) => {
    logger.info(path);
    next();
});

router.get('/', (req, res) => {
    res.send('NewsApi greetings');
});

router.get('/news', (req, res) => {
    res.send(JSON.stringify(responseObject));
});

router.get('/news/:id', ({ params: { id } }, res) => {
    const article = responseObject.articles.find(({ _id }) => _id === id);
    res.send(JSON.stringify(article));
});

router.post('/news', (req, res) => {
    res.json(responseObject);
});

router.put('/news/:id', ({ body }, res) => {
    const article = body;
    responseObject.articles.push(article);
    res.status(200).send("it's ok");
});

router.delete('/news/:id', ({ params: { id } }, res) => {
    const articles = responseObject.articles.filter(({ _id }) => _id !== id);
    res.json(articles);
});

module.exports = router;
