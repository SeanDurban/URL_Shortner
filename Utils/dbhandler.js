var mongoose = require('mongoose');

module.exports = {
  getOriginalUrl : function(shortUrl) {
    return 'fakeroriginalurl';

    //TODO get value from db

    //TODO return the originalURl for disply
  },

  saveUrl: function(originalUrl, shortUrl) {
    //TODO create model

    //TODO save to db

    //TODO return the new value to display

    return 'newhash';
  }
}
