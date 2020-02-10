var express = require('express');
var router = express.Router();
var axios = require('axios');
const urlShortnerApi = 'http://localhost:8080/api/Url';

/* GET homepage for url shortner. */
router.get('/', function(req, res, next) {
  res.render('index', {originalUrl: "", shortenedUrl: ""});
});


router.post('/', (req, res) => {
  let originalUrl = req.body.originalUrl;
  //Some validation on the originalUrl should go here
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
