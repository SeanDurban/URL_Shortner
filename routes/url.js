var express = require('express');
var router = express.Router();
var urlHasher = require('.././Utils/urlhasher');
var urlController = require('.././controllers/urlController');

//As noted in the spec - ideally this would be set in config not here
const HASHED_URL_BASE = 'http://tier.app/';

// This expects only the hashed portion of the url eg) tier.app/XYZ123
router.get('/:hashedUrl', (req, res) => {
  urlController.getOriginalUrl(req.params.hashedUrl, (err, result) => {
    if(err || result == null){
      res.status(404).send('Not Found \n' + err);
    }
    res.status(200).send('The original long url: ' + result.originalUrl);
  });
});


router.get('/', function(req, res, next) {
  res.send("Must specify the shortened url");
});


router.post('/', (req, res) => {
  let originalUrl = req.body.originalUrl;
  let hash = urlHasher.getUrlHash(originalUrl);
  urlController.saveUrl(originalUrl, hash, (err, result) =>{
    if(err || result == null){
      res.status(500).send('Save failed: \n' + err);
    }
    var fullHashedUrl = HASHED_URL_BASE + result.hashedUrl;
    res.status(201).send('The generated shortened url: ' + fullHashedUrl);
  });
});

module.exports = router;
