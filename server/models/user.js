const Mongoose = require('mongoose')

const { Schema } = Mongoose

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== 'email' ? false : true
    }
  },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  provider: { type: String, required: true, default: 'email' },
  googleId: { type: String, unique: true },
  facebookId: { type: String, unique: true },
  avatar: { type: String, default: 'https://ik.imagekit.io/vdyy86fmjx/floresh/placeholder_JpZqtK2OR.png'},
  role: { type: String, default: 'ROLE_MEMBER', enum: ['ROLE_MEMBER', 'ROLE_ADMIN', 'ROLE_MERCHANT'] },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  created: { type: Date, default: Date.now },
  updated: Date
})

module.exports = Mongoose.model('User', UserSchema)
