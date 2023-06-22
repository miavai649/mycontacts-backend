const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add the user name']
    },
    email: {
      type: String,
      required: [true, 'Please enter your email address'],
      unique: [true, 'Email address already used']
    },
    password: {
      type: String,
      required: [true, 'Please enter a strong password']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
