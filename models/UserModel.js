// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
  },
  father: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default:'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Add additional fields as needed
});



export default mongoose.models.User || mongoose.model('User', userSchema)
