const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: Number,
    trim: true,
    required: true,
  },
  message: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = User;
