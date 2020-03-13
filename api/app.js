const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({path: __dirname + '/.env'});
const category = require('./src/routes/category.route');
const users = require('./src/routes/user.route');
const customers = require('./src/routes/customers.route');
const {connectToDb} = require('./src/mongo.connection');

const app = express();
const db = connectToDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/category', category);
app.use('/users', users);
app.use('/customers', customers);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

module.exports = db;