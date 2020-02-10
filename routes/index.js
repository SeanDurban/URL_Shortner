var axios = require('axios');
var express = require('express');
var urlValidator = require('.././Utils/urlValidator');
var router = express.Router();
const urlShortnerApi = 'http://localhost:8080/api/Url';

/* GET homepage for url shortner. */
router.get('/', function(req, res, next) {
  res.render('index', {originalUrl: "", shortenedUrl: ""});
});


router.post('/', (req, res) => {
  let originalUrl = req.body.originalUrl;
  if(!urlValidator.isValidUrl(originalUrl)){
    // ideally this would redirect with an error message to display as alert
    res.status(400).send("Not a valid url").end();
  }
  if(originalUrl == null) {
    res.status(400).send("Must specify originalUrl as POST body property").end();
  }
  else {
      //use own api for post request
      axios.post(urlShortnerApi, {
        originalUrl : originalUrl
      })
      .then( (response) => {
        console.log(response.data);
        res.render('index', {originalUrl: originalUrl, shortenedUrl: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
