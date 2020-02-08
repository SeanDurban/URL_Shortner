var mongoose = require('mongoose');
var UrlModel = require('.././models/url');
var Url = mongoose.model('Url');

function getOriginalUrl(hashedUrl, callback) {
  Url.find({
    hashedUrl : hashedUrl
  }, (err, res) => {
    if(err) console.log(err);
    callback(err, res);
  });
}

function saveUrl(originalUrl, hashedUrl, callback) {
  Url.create({
    originalUrl : originalUrl,
    hashedUrl : hashedUrl
  }, (err, res) => {
    if(err) console.log(err);
    callback(err,res);
  });
}

module.exports =  {getOriginalUrl, saveUrl};
