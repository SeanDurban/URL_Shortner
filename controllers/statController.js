var mongoose = require('mongoose');
var StatModel = require('.././models/Stat');
var Stat = mongoose.model('Stat');

function getStat(hashedUrl, callback) {
  Stat.findOne({
    hashedUrl : hashedUrl
  }, (err, res) => {
    if(err) console.log(err);
    callback(err, res);
  });
}

function saveStat(hashedUrl) {
  Stat.create({
    hashedUrl : hashedUrl
  }, (err, res) => {
    if(err) console.log(err);
    else {
      console.log('Stat record created ' + hashedUrl);
    }
  });
}

function updateStatVisits(hashedUrl) {
// findOneAndUpdate has atomic properties
  Stat.findOneAndUpdate(
    {hashedUrl : hashedUrl},
    {$inc : {'numberVisits' : 1}},
    (err, res) => {
      if(err) console.log(err);
      else{
        console.log('Url visit recorded: ' + hashedUrl);
      }
    });
}

module.exports =  {getStat, saveStat, updateStatVisits};
