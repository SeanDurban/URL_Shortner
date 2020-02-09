var mongoose = require('mongoose');

// Stat contains mapping between hashedUrl and the number of visits (lookups)
// Stat Schema definition
var statSchema = mongoose.Schema({
  // Not necessary to include whole shortened url
  hashedUrl : {
    type: String,
    required: [true, 'Hashed Url required']
  },
  numberVisits : {
    type: Number,
    default: 0
  }
});

// Compile the model with statSchema
var Stat = mongoose.model('Stat', statSchema );
