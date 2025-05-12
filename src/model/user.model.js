// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    displayName: String,
    bio: String,
    avatarUrl: String,
    theme: { type: String, default: 'default' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
