const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 30
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(https?:\/\/)(www\.)?[\w.-]+\.[a-z]{2,6}(\/[\w._~:/?%#[\]@!$&'()*+,;=-]*)?#?$/i.test(value);
      },
      message: "⚠️ La URL de la imagen no es válida. Asegúrate de que comience con http:// o https://"
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    default: []
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }

})

exports = mongoose.model('Card', cardSchema);


