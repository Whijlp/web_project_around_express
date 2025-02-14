const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name:{type: String,
    required: true,
    min: 2,
  max: 30},
  about:{type: String,
    required: true,
    min: 2,
  max: 30},
  avatar:{type: String, required: true},
  },)
  module.exports = mongoose.model("Users", userSchema);