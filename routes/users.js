var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/stats', function (req, res, next) {
  res.send('Stats about the user');
});

module.exports = router;
