const express = require('express');
const router = express.Router();

const doQuery = require ('./db-connection');
const wrap = (input, cb)=> cb (null, [ {dataType : 'result', params: input} ])

const formatResults = results => results ;

function getResults (req, res) {
  const { params } = req.params;
  const { query } = req;
  console.log(params, 'params');
  console.log(query, 'query');
  // console.log(req);
  wrap (params, (err, results) => {
    if (err) {console.log('ERROR: ', err)}
    else {
      res.type('application/json');
      res.status(200);
      res.send(formatResults(results));
      // res.render(results);
    }
  });
}

// This route reponds to /
// router.get('/', home);

// This route reponds to /api OR  /api?querystring=123
router.get('/api', getResults);

// This route reponds to /api/params OR  /api/params?querystring=123
router.get('/api/:params', getResults);

module.exports = router;
