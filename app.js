const fs = require('fs');
const express = require('express');
var https = require('https');
const cors = require('cors');
const path = require('path');

const router = require('./api');
let app = express();

const httpsOn = true;
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(cors());
app.use(router);
//   {
//   origin: '*'
// }));

if (httpsOn)
  app = https.createServer({
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    }, app) ;

module.exports = { app, PORT };
