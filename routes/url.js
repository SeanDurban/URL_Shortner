var express = require('express');
var router = express.Router();
var urlHasher = require('.././Utils/urlhasher');
var urlController = require('.././controllers/urlController');

//As noted in the spec - ideally this would be set in config not here
const HASHED_URL_BASE = 'http://tier.app/';

// This expects only the hashed portion of the url eg) tier.app/XYZ123
router.get('/:hashedUrl', (req, res) => {
  urlController.getOriginalUrl(req.params.hashedUrl, (err, result) => {
    if(err){
      res.status(500).send('Error: ' + err);
    }
    else if(result == null){
      res.status(404).send('Not Found');
    }
    else{
      // This sends back the originalUrl if it exists
      // Could be an idea to directly redirect to that website
      res.status(200).send(result.originalUrl);
    }
  });
});


router.get('/', function(req, res, next) {
  res.status(400).send("Must specify the shortened url in the form /api/url/xyz123");
});


router.post('/', (req, res) => {
  let originalUrl = req.body.originalUrl;

  //Some validation on the originalUrl should go here
  if(originalUrl == null) {
    res.status(400).send("Must specify originalUrl as POST body property").end();
  }
  else {

    //I didn't have time but to guarantee unique hash should look up the table to see if it already exists
    // If it does exist then recompute it
    let hash = urlHasher.getUrlHash(originalUrl);

    urlController.saveUrl(originalUrl, hash, (err, result) => {
      if(err || result == null){
        res.status(500).send('Save failed: \n' + err);
      }
      var fullHashedUrl = HASHED_URL_BASE + result.hashedUrl;
      res.status(201).send(fullHashedUrl);
    });
  }
});

module.exports = router;
