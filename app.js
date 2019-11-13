const express = require('express');
const path = require('path');
// const exphbs = require ('express-handlebars');

const router = require('./api');
// const helpers = require ('./views/helpers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(router);

module.exports = app;
