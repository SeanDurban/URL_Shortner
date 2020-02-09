var mongoose = require('mongoose');
var UrlModel = require('.././models/url');
var Url = mongoose.model('Url');
var statController = require('.././controllers/statController');

function getOriginalUrl(hashedUrl, callback) {
  Url.findOne({
    hashedUrl : hashedUrl
  }, (err, res) => {
    if(err) console.log(err);
    if(!err){
      // No need for async here
      statController.updateStatVisits(hashedUrl);
    }
    callback(err, res);
  });
}

function saveUrl(originalUrl, hashedUrl, callback) {
  Url.create({
    originalUrl : originalUrl,
    hashedUrl : hashedUrl
  }, (err, res) => {
    if(err) console.log(err);
    else {
      statController.saveStat(hashedUrl);
    }
    callback(err,res);
  });
}

module.exports =  {getOriginalUrl, saveUrl};
