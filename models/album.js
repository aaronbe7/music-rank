const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    ratingScore: {
      type: Number, 
  },
  arrival: Date,
});

const albumSchema = new mongoose.Schema({
    albumTitle: {
      type: String,
    },
    artist: {
      type: String,
    },
    releaseYear: {
      type: String,
    },
    genre: {
      type: String,
    },
    ratings: [ratingSchema],
})

// Create your User Model

module.exports = mongoose.model('Album', albumSchema);