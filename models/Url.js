var mongoose = require('mongoose');

// Url Schema definition
// An expiration time to clean old/unused links would be future improvement
var urlSchema = mongoose.Schema({
  originalUrl : {
    type: String,
    required: [true, 'Original Url required']
  },
  // Not necessary to include whole shortened url
  hashedUrl : {
    type: String,
    required: [true, 'Hashed Url required']
  }
});

// Compile the model with urlSchema
var Url = mongoose.model('Url', urlSchema );
