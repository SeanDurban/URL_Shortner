var express = require('express');
var router = express.Router();

/* GET a long URL for provided short URL. */
router.get('/', function(req, res, next) {

  // req.body.shorturl.split('http://tier.app/')[0]
  // db lookup for the shorturl
  let longUrl = '/';
  res.redirect(longUrl);
});

module.exports = router;
