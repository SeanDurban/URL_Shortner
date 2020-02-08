var express = require('express');
var router = express.Router();
var urlHasher = require('.././Utils/urlhasher');
var urlController = require('.././controllers/urlController');

router.get('/:hashedUrl', (req, res) => {
  urlController.getOriginalUrl(req.params.hashedUrl, (err, result) => {
    res.send(result);
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
      res.send(500, 'Save failed: \n' + err);
    }
    res.send('Saved document: ' + result);
  });
});

module.exports = router;
