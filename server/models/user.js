var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  password: {
    type: String,
    required: false,
  }
});

module.exports = {User};
