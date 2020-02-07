var express = require('express');
var router = express.Router();

/* GET homepage for url shortner. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortner' });
});

module.exports = router;
