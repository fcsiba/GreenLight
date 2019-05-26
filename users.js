var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aasma You are Great');
});
router.get('/detail', function(req, res, next) {
  res.send('detail');
});
//localhost:8000/user/detail
module.exports = router;
