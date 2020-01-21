const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewsSchema = new Schema({
    source: Object,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
});

const newsModel = mongoose.model('news', NewsSchema);

module.exports = newsModel;
