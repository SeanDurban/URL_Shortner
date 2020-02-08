var express = require('express');
var router = express.Router();
var urlHasher = require('.././Utils/urlhasher');
var dbhandler = require('.././Utils/dbhandler');


router.get('/:shortUrl', (req, res) => {
  var dbResult = dbhandler.getOriginalUrl(req.params.shortUrl);
  res.send(dbResult);
});

/* GET a long URL for provided short URL. */
router.get('/', function(req, res, next) {
  res.send("Must specify the shortened url");
});



router.post('/', (req, res) => {
  console.log(req.body.longUrl);

  let hash = urlHasher.getUrlHash(req.body.longUrl);

  res.send(hash + '\nbody \n' + JSON.stringify(req.body));
});

module.exports = router;
