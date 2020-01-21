const mongoose = require('mongoose');

const app = require('./app/app.js');

const port = 3000;
const owner = 'DrDiman';
const password = 'test';

const uri = `mongodb+srv://${owner}:${password}@cluster0-o282e.mongodb.net`;
const dataBase = 'FrontCamp';

app.listen(port, () => {
    console.log(`News app is listening on port ${port}!`);

    mongoose.connect(`${uri}/${dataBase}`, { useNewUrlParser: true });

    console.log(`MongoDB was connected successfully!`);
});
