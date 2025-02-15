const mongoose = require("mongoose");

const urlRegex = /^(https?:\/\/)(www\.)?[\w.-]+\.[a-z]{2,6}(\/[\w._~:/?%#[\]@!$&'()*+,;=-]*)?#?$/i;


const userSchema = new mongoose.Schema({
  name:{type: String,
    required: true,
    min: 2,
  max: 30},
  about:{type: String,
    required: true,
    min: 2,
  max: 30},
  avatar:{type: String, required: true,validate: {validator: function (value) {
    return urlRegex.test(value);
},
message: "⚠️ La URL del avatar no es válida. Asegúrate de que comience con http:// o https://"}
},
  },)

  module.exports = mongoose.model("User", userSchema);