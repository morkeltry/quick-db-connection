const express = require('express');
const cors = require('cors');
const path = require('path');
// const exphbs = require ('express-handlebars');

const router = require('./api');
// const helpers = require ('./views/helpers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(router);
app.use(cors({
  origin: '*'
}));

module.exports = app;
