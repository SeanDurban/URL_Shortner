var express = require('express');
var router = express.Router();

/* GET homepage for url shortner. */
router.get('/', function(req, res, next) {
  let shortenedUrl = req.body.shortenedUrl ? req.body.shortenedUrl : "" ;
  res.render('index', {shortenedUrl: shortenedUrl});
});


router.post('/', (req, res) => {
  let originalUrl = req.body.originalUrl;

  //Some validation on the originalUrl should go here
  if(originalUrl == null) {
    res.status(400).send("Must specify originalUrl as POST body property").end();
  }
  else {
      //use own api for post request

  }
});

module.exports = router;
